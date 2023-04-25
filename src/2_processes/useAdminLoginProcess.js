import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FULFILLED, REJECTED } from '../1_app/store/methods/actionMethod'
import { logout } from '../1_app/store/state/root'
import { getCookie, setCookie } from '../lib/cookie'
import { recreateFieldData } from '../lib/form'
import { useAPI } from './useAPI'

const useAdminLoginProcess = () => {
	const initState = {
		formData: {
			email: '',
			password: ''
		},
		required: {
			email: true,
			password: true
		},
		errorLabel: {
			email: {
				show: false,
				label: false
			},
			password: {
				show: false,
				label: false
			}
		},
		submit: false
	}
	
	const [ state, setState ] = useState( initState )
	
	const { fetch, process } = useAPI( 'private' )
	const dispatch           = useDispatch()
	
	const privateHandler = {
		login: ( formData ) => {
			setState( prev => {
				prev.submit = true
				return { ...prev }
			} )
			const data = {
				method: 'loginAdmin',
				loginData: formData
			}
			fetch( data )
		},
		authantificate: () => {
			const access_token = getCookie( 'access_admin_token' )
			if ( access_token ) {
				const data = {
					method: 'loginAdmin',
					loginData: {
						access_token
					}
				}
				fetch( data )
			}
		}
	}
	
	useEffect( () => {
		const PLACE = 'ADMIN'
		if ( process.error ) {
			dispatch( REJECTED( PLACE, process.errorData ) )
		}
		if ( process.fetched ) {
			if ( process.data.token ) {
				setCookie( 'access_admin_token', process.data.token.access_token, { expires: new Date( process.data.token.expired ) } )
			}
			dispatch( FULFILLED( PLACE, process.data ) )
		}
	}, [ process ] )
	
	return {
		process,
		fieldState: state,
		fieldChange: ( data ) => {
			setState( prev => {
				const newData = recreateFieldData( prev, data )
				return { ...newData }
			} )
		},
		onClickSubmit: () => {
			setState( prev => {
				for ( const field in prev.formData ) {
					const data               = {
						name: field,
						value: prev.formData[ field ]
					}
					const newData            = recreateFieldData( prev, data )
					prev.errorLabel[ field ] = newData.errorLabel[ field ]
				}
				prev.submit = false
				return { ...prev }
			} )
		},
		onSubmit: ( e ) => {
			e.preventDefault()
			let allow = true
			for ( const field in state.errorLabel ) {
				if ( state.errorLabel[ field ].show ) {
					allow = false
				}
			}
			if ( allow ) {
				privateHandler.login( state.formData )
			}
		},
		auth: () => {
			privateHandler.authantificate()
		},
		logout: () => {
			setState( initState )
			dispatch( logout() )
		}
	}
}

export { useAdminLoginProcess }