import React, { useEffect, useState } from 'react'
import { getHeightWithMargin } from '../../lib/dom'
import { disableAutofill } from '../../lib/form'
import { uniqID } from '../../lib/string'
import { FormFieldWrapper, InputWrapper, LabelForInput } from './Layout'

const Select = ( { options, selected, onChange } ) => {
	
	const uniq         = uniqID()
	const defaultState = {
		fieldClassName: [ 'formField' ],
		labelClassName: [ 'formFieldLabelSelect' ],
		inputClassName: [ 'formSelect' ],
		inputID: [ 'field', options.name, uniq ],
		inputName: options.name,
		inputDisabled: options?.disabled || false,
		inputRequired: options?.required,
		inputIsLoading: options.loading,
		labelShow: options.label.show,
		label: options.label.label,
		placeholder: options.placeholderItems
	}
	
	const [ inputState, setInputState ] = useState( defaultState )
	
	const stateHandler = {
		error: {
			set: () => {
				setInputState( prev => {
					prev.fieldClassName.push( 'error' )
					prev.labelClassName.push( 'error' )
					prev.inputClassName.push( 'error' )
					return {
						...prev
					}
				} )
			},
			remove: () => {
				setInputState( prev => {
					prev.fieldClassName.remove( 'error' )
					prev.labelClassName.remove( 'error' )
					prev.inputClassName.remove( 'error' )
					return {
						...prev
					}
				} )
			}
		},
		filled: {
			set: () => {
				setInputState( prev => {
					prev.fieldClassName.push( 'filled' )
					prev.labelClassName.push( 'filled' )
					prev.inputClassName.push( 'filled' )
					return {
						...prev
					}
				} )
			}
		},
		empty: {
			set: () => {
				setInputState( prev => {
					prev.fieldClassName.push( 'empty' )
					prev.labelClassName.push( 'empty' )
					prev.inputClassName.push( 'empty' )
					return {
						...prev
					}
				} )
			},
			remove: () => {
				setInputState( prev => {
					prev.fieldClassName.remove( 'empty' )
					prev.labelClassName.remove( 'empty' )
					prev.inputClassName.remove( 'empty' )
					return {
						...prev
					}
				} )
			}
		}
	}
	const inputHandle  = {
		onFocus: () => {
			setInputState( prev => {
				if ( !prev.labelClassName.includes( 'focused' ) ) {
					prev.fieldClassName.push( 'focused' )
					prev.labelClassName.push( 'focused' )
					prev.inputClassName.push( 'focused' )
				}
				return {
					...prev
				}
			} )
		},
		onBlur: ( e ) => {
			const currentValue = !!e.target.value.trim()
			setInputState( prev => {
				if ( currentValue && !prev.labelClassName.includes( 'filled' ) ) {
					prev.fieldClassName.push( 'filled' )
					prev.labelClassName.push( 'filled' )
					prev.inputClassName.push( 'filled' )
				}
				if ( !currentValue && prev.labelClassName.includes( 'filled' ) ) {
					prev.fieldClassName.remove( 'filled' )
					prev.labelClassName.remove( 'filled' )
					prev.inputClassName.remove( 'filled' )
				}
				if ( !currentValue && !prev.labelClassName.includes( 'empty' ) ) {
					prev.fieldClassName.push( 'empty' )
					prev.labelClassName.push( 'empty' )
					prev.inputClassName.push( 'empty' )
				}
				if ( prev.labelClassName.includes( 'focused' ) ) {
					prev.fieldClassName.remove( 'focused' )
					prev.labelClassName.remove( 'focused' )
					prev.inputClassName.remove( 'focused' )
				}
				return {
					...prev
				}
			} )
		},
		onChange: ( e ) => {
			if ( onChange ) {
				const data = {
					name: e.target.name,
					value: e.target.value
				}
				onChange( data )
			}
			else {
				return false
			}
		},
		onChangeValue: () => {
			if ( options.required ) {
				if ( options.error && !inputState.labelClassName.includes( 'error' ) ) {
					stateHandler.error.set()
				}
				if ( !options.error && inputState.labelClassName.includes( 'error' ) ) {
					stateHandler.error.remove()
				}
			}
			if ( value && !inputState.labelClassName.includes( 'filled' ) ) {
				stateHandler.filled.set()
			}
			if ( !value && !inputState.labelClassName.includes( 'empty' ) ) {
				stateHandler.empty.set()
			}
			if ( value && inputState.labelClassName.includes( 'empty' ) ) {
				stateHandler.empty.remove()
			}
		},
		mount: () => {
			disableAutofill()
			const select                       = document.getElementById( inputID )
			const hSelect                      = getHeightWithMargin( select )
			select.parentElement.style.cssText = `--h: ${ hSelect }px`
		}
	}
	
	useEffect( inputHandle.mount, [] )
	
	const inputWrapperClass = inputState.fieldClassName.join( ' ' )
	const inputClassName    = inputState.inputClassName.join( ' ' )
	const inputID           = inputState.inputID.join( '_' )
	const inputName         = inputState.inputName
	const inputRequired     = inputState.inputRequired
	const inputDisabled     = inputState.inputDisabled
	const inputIsLoading    = inputState.inputIsLoading
	const labelClassName    = inputState.labelClassName.join( ' ' )
	const labelShow         = inputState.labelShow
	const label             = inputState.label
	const placeholder       = inputState.placeholder
	
	return (
		<FormFieldWrapper>
			<InputWrapper className={ inputWrapperClass }>
				<LabelForInput
					className={ labelClassName }
					forInput={ inputID }
					show={ labelShow }
				>
					{ label }
				</LabelForInput>
				<select
					disabled={ inputDisabled }
					value={ selected.value }
					className={ inputClassName }
					name={ inputName }
					id={ inputID }
					required={ inputRequired }
					onChange={ inputHandle.onChange }>
					{ placeholder &&
					<option value="-1">{ placeholder }</option>
					}
					{ options.items.map( item => {
						if ( !item ) {
							return false
						}
						return (
							<option key={ item.value } disabled={ item.disabled } value={ item.value }>{ item.label }</option>
						)
					} ) }
				</select>
			</InputWrapper>
		</FormFieldWrapper>
	)
}

export default Select