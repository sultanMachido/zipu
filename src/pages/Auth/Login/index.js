import React from 'react';
import { Form, message } from 'antd';
import { connect } from 'react-redux';
import './Login.scss';
import { EmailField, PasswordField, SubmitButton } from '../../../components/FormField';
import { loginUser } from '../../../redux/actions/login/login.actions';
import { useHistory } from 'react-router';

const inputSize = 'large';

const Login = props => {
	const [form] = Form.useForm();

	const onFinish = async values => {
		try {
			const messageKey = 'loginResponse';
			const key = 'login';
			const tryUserLogin = await props.loginUser({ ...values });
			if (tryUserLogin.loginStatus) {
				message.success({ content: tryUserLogin.message, key: messageKey, duration: 5 });
				window.location.reload()
				props.history.push('/bookings');
			} else {
				return message.error({ content: tryUserLogin.message, key, duration: 2 });
			}
		} catch (error) {
		}
	};
	return (
		<div className="loginWrapper">
			<div className="loginContent">
				<div className="loginText">
					<h1 style={{ marginBottom: "1rem" }}>Welcome!</h1>
					<p>Enter your details and login</p>
				</div>

				<div className="loginForm">
					<Form form={form} onFinish={onFinish} hideRequiredMark layout="vertical">
						{EmailField(inputSize, true, false, 'Enter address')}
						{PasswordField(inputSize, true, 'Password')}
						<div className="btnWrapper">
							{SubmitButton('LOGIN', null, props?.userLogin?.loginLoading)}
						</div>
					</Form>
					<div className="forgotPassword">
						<p>Forgot Password</p>
					</div>

					<div className="newUser">
						<p>New User?</p>
						<a href="/register">Create new account</a>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	userLogin: state.login
});

const mapDispatchToProps = {
	loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
