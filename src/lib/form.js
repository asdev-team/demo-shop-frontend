import React from 'react'

const validateText = {
	errorField: 'Поле не заполнено или заполнено неверно',
	nameIsToLow: 'Имя слишком короткое',
	nameIsEmpty: 'Имя не может быть пустым',
	phoneIsToLow: 'Номер слишком короткий',
	phoneNotValid: 'Номер должен содержать только цифры и знак "+"',
	phoneIsEmpty: 'Номер не может быть пустым',
	emailNotValid: 'E-mail указан неверно',
	emailIsEmpty: 'E-mail не может быть пустым',
	passIsEmpty: 'Пароль не может быть пустым',
	passIsToLow: 'Пароль слишком короткий'
}

const validateEmail   = ( email ) => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return re.test( String( email ).toLowerCase() )
}
const validatePhone   = ( phone ) => {
	const rr = new RegExp(
		'^' +                           // No leading content.
		'[-+]?' +                       // Optional sign.
		'(?:[0-9]{0,30}\\.)?' +         // Optionally 0-30 decimal digits of mantissa.
		'[0-9]{1,30}' +                 // 1-30 decimal digits of integer or fraction.
		'(?:[Ee][-+]?[1-2]?[0-9])?' +   // Optional exponent 0-29 for scientific notation.
		'$'                             // No trailing content.
	)
	
	return rr.test( phone )
}
const disableAutofill = () => {
	if ( document.getElementsByTagName ) {
		const inputElements = document.getElementsByTagName( 'input' )
		for ( let i = 0; inputElements[ i ]; i++ ) {
			inputElements[ i ].setAttribute( 'autocomplete', 'off' )
		}
	}
}

const recreateFieldData = ( prevData, newData ) => {
	
	const value = newData.value
	const name  = newData.name
	
	prevData.formData[ name ] = value
	
	switch ( name ) {
		case 'name':
			const userName = value.trim()
			if ( userName.length > 0 && userName.length < 3 ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.nameIsToLow }</span>
					)
				}
			}//
			else if ( !userName.length ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.nameIsEmpty }</span>
					)
				}
			} //
			else {
				prevData.errorLabel[ name ] = {
					show: false,
					label: false
				}
			}
			break
		case 'phone':
			let phone                 = value
				.trim()
				.replace( /\(/g, '' )
				.replace( /\)/g, '' )
				.replace( / /g, '' )
				.replace( /_/g, '' )
			prevData.formData[ name ] = phone
			if ( !validatePhone( phone ) ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.phoneNotValid }</span>
					)
				}
			}//
			else if ( !phone.length ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.phoneIsEmpty }</span>
					)
				}
			} //
			else if ( phone.length > 0 && phone.length < 9 ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.phoneIsToLow }</span>
					)
				}
			}//
			else {
				prevData.errorLabel[ name ] = {
					show: false,
					label: false
				}
			}
			break
		case 'email':
			const email               = value.trim()
			prevData.formData[ name ] = email
			if ( !email.length ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.emailIsEmpty }</span>
					)
				}
			}//
			else if ( !validateEmail( email ) ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.emailNotValid }</span>
					)
				}
			}//
			else {
				prevData.errorLabel[ name ] = {
					show: false,
					label: false
				}
			}
			break
		case 'password':
			const pass = value.trim()
			if ( pass.length > 0 && pass.length < 5 ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.passIsToLow }</span>
					)
				}
			}//
			else if ( !pass.length ) {
				prevData.errorLabel[ name ] = {
					show: true,
					label: (
						<span className="input-error-message">{ validateText.passIsEmpty }</span>
					)
				}
			} //
			else {
				prevData.errorLabel[ name ] = {
					show: false,
					label: false
				}
			}
			break
		default:
			if ( typeof value !== 'boolean' ) {
				const val = value.trim()
				if ( !val.length ) {
					prevData.errorLabel[ name ] = {
						show: true,
						label: (
							<span className="input-error-message">{ validateText.errorField }</span>
						)
					}
				}//
				else {
					prevData.errorLabel[ name ] = {
						show: false,
						label: false
					}
				}
			}
			break
	}
	
	return { ...prevData }
}

export { validateEmail, validatePhone, recreateFieldData, disableAutofill }