import React, { useEffect, useState } from 'react'
import { disableAutofill } from '../../lib/form'
import { uniqID } from '../../lib/string'
import { ErrorLabel, FormFieldWrapper, InputWrapper, LabelForInput } from './Layout'

const Input = ( { options, value, onChange } ) => {
	
	const uniq         = uniqID()
	const defaultState = {
		fieldClassName: [ 'formField' ],
		labelClassName: [ 'formFieldLabel' ],
		inputClassName: [ 'formFieldInput' ],
		inputID: [ 'field', options.name, uniq ],
		inputName: options.name,
		inputType: options.type,
		inputRequired: options?.required,
		inputMaxLength: options.maxLength || 100,
		labelShow: options.label.show,
		label: options.label.label,
		readOnly: options?.readOnly || false
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
				if ( options.error.show && !inputState.labelClassName.includes( 'error' ) ) {
					stateHandler.error.set()
				}
				if ( !options.error.show && inputState.labelClassName.includes( 'error' ) ) {
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
		}
	}
	
	useEffect( inputHandle.mount, [] )
	useEffect( inputHandle.onChangeValue, [ value ] )
	
	const inputWrapperClass = inputState.fieldClassName.join( ' ' )
	const inputClassName    = inputState.inputClassName.join( ' ' )
	const inputID           = inputState.inputID.join( '_' )
	const inputName         = inputState.inputName
	const inputType         = inputState.inputType
	const inputRequired     = inputState.inputRequired
	const inputMaxLength    = inputState.inputMaxLength
	const inputReadOnly     = inputState.readOnly
	const labelClassName    = inputState.labelClassName.join( ' ' )
	const labelShow         = inputState.labelShow
	const label             = inputState.label
	
	const isErrorLabelRequiredShow = inputRequired && options?.error?.show
	const errorLabelRequired       = options?.error?.label
	
	return (
		<FormFieldWrapper>
			<InputWrapper className={ inputWrapperClass }>
				<input
					className={ inputClassName }
					id={ inputID }
					type={ inputType }
					readOnly={ inputReadOnly }
					name={ inputName }
					required={ inputRequired }
					maxLength={ inputMaxLength }
					onChange={ inputHandle.onChange }
					onFocus={ inputHandle.onFocus }
					onBlur={ inputHandle.onBlur }
					autoComplete="new-password"
					value={ value }
				/>
				<LabelForInput
					className={ labelClassName }
					forInput={ inputID }
					show={ labelShow }
				>
					{ label }
				</LabelForInput>
			</InputWrapper>
			<ErrorLabel show={ isErrorLabelRequiredShow }>
				{ errorLabelRequired }
			</ErrorLabel>
		</FormFieldWrapper>
	)
}

export default Input