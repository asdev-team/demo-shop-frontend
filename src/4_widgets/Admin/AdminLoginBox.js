import React, { useEffect } from 'react'
import { useAdminLoginProcess } from '../../2_processes/useAdminLoginProcess'
import { Logo } from '../../6_entities/Logo'
import { AdminLoginError, AdminLoginForm, AdminLoginWrapper } from '../../7_shared/Admin'
import { Button } from '../../7_shared/Button'
import { DataFetched, DataFetching } from '../../7_shared/DataProcessing'
import { Input } from '../../7_shared/FormField'

const AdminLoginBox = ( { error } ) => {
	const handler                 = useAdminLoginProcess()
	const { fieldState, process } = handler
	const errorShow               = error.status && fieldState.submit && !process.fetching
	useEffect( handler.auth, [] )
	return (
		<AdminLoginWrapper>
			<DataFetching wrapper={ false } fetching={ process.fetching }/>
			<DataFetched wrapper={ false } fetched={ !process.fetched && !process.fetching }>
				<AdminLoginForm onSubmit={ handler.onSubmit }>
					<Logo/>
					<br/>
					<Input
						onChange={ ( data ) => handler.fieldChange( data ) }
						options={ {
							type: 'mail',
							name: 'email',
							required: true,
							label: {
								show: true,
								label: 'Имя'
							},
							error: fieldState.errorLabel.email
						} }
						value={ fieldState.formData.email }/>
					<Input
						onChange={ ( data ) => handler.fieldChange( data ) }
						options={ {
							type: 'password',
							name: 'password',
							required: true,
							label: {
								show: true,
								label: 'Пароль'
							},
							error: fieldState.errorLabel.password
						} }
						value={ fieldState.formData.password }/>
					<Button
						onClick={ handler.onClickSubmit }
						type={ 'submit' }
						className={ 'primary' }
						disabled={ process.fetching }
						ripple={ {
							rippleBackground: 'rgb(243,243,243,0.25)'
						} }
					>Авторизация</Button>
					<AdminLoginError show={ errorShow } label={ error.data?.message?.ru }/>
				</AdminLoginForm>
			</DataFetched>
		</AdminLoginWrapper>
	)
}

export default AdminLoginBox