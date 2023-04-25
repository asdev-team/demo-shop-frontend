import React from 'react'
import { uniqID } from '../../lib/string'
import { ErrorLabel, FormFieldWrapper, InputWrapper, LabelForInput } from './Layout'

const Checkbox = ( { options, value, onChange } ) => {
	
	const uniq         = uniqID()
	const defaultState = {
		fieldClassName: [ 'formField', 'formFieldCheckbox' ],
		labelClassName: [ 'formFieldLabelCheckbox' ],
		inputClassName: [ 'formCheckbox' ],
		inputID: [ 'field', options.name, uniq ],
		inputName: options.name,
		inputType: options.type,
		inputRequired: options?.required,
		inputMaxLength: options.maxLength || 100,
		labelShow: options.label.show,
		label: options.label.label,
		readOnly: options?.readOnly || false
	}
	
	const inputHandle = {
		onChange: ( e ) => {
			if ( onChange ) {
				const data = {
					name: e.target.name,
					value: e.target.checked
				}
				onChange( data )
			}
			else {
				return false
			}
		}
	}
	
	const inputWrapperClass = defaultState.fieldClassName.join( ' ' )
	const inputClassName    = defaultState.inputClassName.join( ' ' )
	const inputID           = defaultState.inputID.join( '_' )
	const inputName         = defaultState.inputName
	const inputRequired     = defaultState.inputRequired
	const inputReadOnly     = defaultState.readOnly
	const labelClassName    = defaultState.labelClassName.join( ' ' )
	const labelShow         = defaultState.labelShow
	const label             = defaultState.label
	
	const isErrorLabelRequiredShow = inputRequired && options?.error?.show
	const errorLabelRequired       = options?.error?.label
	
	const Label = () => {
		if ( typeof label === 'string' ) {
			return <>
				{ label }
			</>
		}
		else {
			return <label/>
		}
	}
	
	return (
		<FormFieldWrapper>
			<InputWrapper className={ inputWrapperClass }>
				<input type="checkbox"
				       readOnly={ inputReadOnly }
				       className={ inputClassName }
				       id={ inputID }
				       name={ inputName }
				       required={ inputRequired }
				       onChange={ inputHandle.onChange }
				       checked={ value }
				/>
				<LabelForInput
					className={ labelClassName }
					forInput={ inputID }
					show={ labelShow }
				>
					<Label/>
				</LabelForInput>
			</InputWrapper>
			<ErrorLabel show={ isErrorLabelRequiredShow }>
				{ errorLabelRequired }
			</ErrorLabel>
		</FormFieldWrapper>
	)
}

export default Checkbox