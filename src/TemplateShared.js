import React, { useState } from 'react'
import { recreateFieldData } from './lib/form'
import { Button } from './7_shared/Button'
import { Checkbox, Input, TextArea } from './7_shared/FormField'

const TemplateShared = () => {
	const initState           = {
		formData: {
			name: '',
			phone: '',
			email: '',
			message: '',
			checked: false
		},
		required: {
			name: true,
			phone: true,
			email: true
		},
		errorLabel: {
			name: {
				show: false,
				label: false
			},
			phone: {
				show: false,
				label: false
			},
			email: {
				show: false,
				label: false
			}
		}
	}
	const [ state, setState ] = useState( initState )
	
	const handler = {
		click: () => {
			console.log( state.formData )
		},
		change: ( data ) => {
			setState( prev => {
				const newData = recreateFieldData( prev, data )
				return { ...newData }
			} )
		}
	}
	
	return (
		<div style={ { maxWidth: 340, padding: 15 } }>
			<Input
				onChange={ ( data ) => handler.change( data ) }
				options={ {
					type: 'text',
					name: 'name',
					required: true,
					label: {
						show: true,
						label: 'Имя'
					},
					error: state.errorLabel.name
				} }
				value={ state.formData.name }/>
			<Input
				onChange={ ( data ) => handler.change( data ) }
				options={ {
					type: 'tel',
					name: 'phone',
					maxLength: 13,
					required: true,
					label: {
						show: true,
						label: 'Телефон'
					},
					error: state.errorLabel.phone
				} }
				value={ state.formData.phone }/>
			<Input
				onChange={ ( data ) => handler.change( data ) }
				options={ {
					type: 'email',
					name: 'email',
					required: true,
					label: {
						show: true,
						label: 'Email'
					},
					error: state.errorLabel.email
				} }
				value={ state.formData.email }/>
			<TextArea
				onChange={ ( data ) => handler.change( data ) }
				options={ {
					name: 'message',
					label: {
						show: true,
						label: 'Сообщение'
					}
				} }
				value={ state.formData.message }/>
			<Checkbox onChange={ ( data ) => handler.change( data ) }
			          options={ {
				          name: 'checked',
				          label: {
					          show: true,
					          label: 'Чекбокс'
				          }
			          } }
			          value={ state.formData.checked }/>
			<div style={ { display: 'flex' } }>
				<div style={ { marginRight: 15 } }>
					<Button
						onClick={ handler.click }
						type={ 'submit' }
						className={ 'primary' }
						ripple={ {
							rippleBackground: 'rgb(243,243,243,0.25)'
						} }
					>Primary</Button>
				</div>
				<div>
					<Button
						onClick={ handler.click }
						type={ 'submit' }
						className={ 'secondary' }
						ripple={ {
							rippleBackground: 'rgb(100,100,100,0.25)'
						} }
					>Secondary</Button>
				</div>
			</div>
		</div>
	)
}

export default TemplateShared