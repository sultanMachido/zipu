/** @format */

import React from 'react';
import './FormField.scss';
import { Form, Input, Select, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Loader from '../../components/Loader';

const reservationWindows = [
	{ id: 1, value: 'One Day' },
	{ id: 2, value: 'Two Days' },
	{ id: 3, value: 'Three Days' },
	{ id: 4, value: 'Four Days' },
	{ id: 5, value: 'Five Days' },
	{ id: 6, value: 'Six Days' },
	{ id: 7, value: 'Seven Days' }
];
const platformOptions = [
	{ id: 1, value: 'Platform Option 1' },
	{ id: 2, value: 'Platform Option 2' },
	{ id: 3, value: 'Platform Option 3' },
	{ id: 4, value: 'Platform Option 4' }
];

const bankDetails = [
	{ id: 1, value: 'Zenith Bank Plc' },
	{ id: 2, value: 'Access Bank Plc' },
	{ id: 3, value: 'Fidelity Bank Plc' },
	{ id: 5, value: 'First City Monument Bank Limited' },
	{ id: 6, value: 'First Bank of Nigeria Limited' },
	{ id: 7, value: 'Guaranty Trust Bank Plc' },
	{ id: 8, value: 'Union Bank of Nigeria Plc' },
	{ id: 9, value: 'United Bank for Africa Plc' },
	{ id: 10, value: 'Citibank Nigeria Limited' },
	{ id: 11, value: 'Ecobank Nigeria Limited' },
	{ id: 12, value: 'Keystone Bank Limited' },
	{ id: 13, value: 'Polaris Bank Limited' },
	{ id: 14, value: 'Stanbic IBTC Bank Plc' },
	{ id: 15, value: 'Standard Chartered' },
	{ id: 16, value: 'Sterling Bank Plc' },
	{ id: 17, value: 'Titan Trust Bank Limited' },
	{ id: 18, value: 'Unity Bank Plc' },
	{ id: 19, value: 'Wema Bank Plc' },
	{ id: 20, value: 'Globus Bank Limited[3]' },
	{ id: 21, value: 'SunTrust Bank Nigeria Limited' },
	{ id: 22, value: 'Providus Bank Limited' },
	{ id: 23, value: 'Jaiz Bank Plc' }
];

const terminals = [
	{ id: 1, value: 'Terminal 4' },
	{ id: 2, value: 'Terminal 2' },
	{ id: 3, value: 'Terminal 3' }
];

const times = [
	{ id: 1, value: 'Time 1' },
	{ id: 2, value: 'Time 2' },
	{ id: 3, value: 'Time 3' }
];

const states = [
	{
		code: 'FC',
		name: 'Abuja'
	},
	{
		code: 'AB',
		name: 'Abia'
	},
	{
		code: 'AD',
		name: 'Adamawa'
	},
	{
		code: 'AK',
		name: 'AkwaIbom'
	},
	{
		code: 'AN',
		name: 'Anambra'
	},
	{
		code: 'BA',
		name: 'Bauchi'
	},
	{
		code: 'BY',
		name: 'Bayelsa'
	},
	{
		code: 'BE',
		name: 'Benue'
	},
	{
		code: 'BO',
		name: 'Borno'
	},
	{
		code: 'CR',
		name: 'CrossRiver'
	},
	{
		code: 'DE',
		name: 'Delta'
	},
	{
		code: 'EB',
		name: 'Ebonyi'
	},
	{
		code: 'ED',
		name: 'Edo'
	},
	{
		code: 'EK',
		name: 'Ekiti'
	},
	{
		code: 'EN',
		name: 'Enugu'
	},
	{
		code: 'GO',
		name: 'Gombe'
	},
	{
		code: 'IM',
		name: 'Imo'
	},
	{
		code: 'JI',
		name: 'Jigawa'
	},
	{
		code: 'KD',
		name: 'Kaduna'
	},
	{
		code: 'KN',
		name: 'Kano'
	},
	{
		code: 'KT',
		name: 'Katsina'
	},
	{
		code: 'KE',
		name: 'Kebbi'
	},
	{
		code: 'KO',
		name: 'Kogi'
	},
	{
		code: 'KW',
		name: 'Kwara'
	},
	{
		code: 'LA',
		name: 'Lagos'
	},
	{
		code: 'NA',
		name: 'Nassarawa'
	},
	{
		code: 'NI',
		name: 'Niger'
	},
	{
		code: 'OG',
		name: 'Ogun'
	},
	{
		code: 'ON',
		name: 'Ondo'
	},
	{
		code: 'OS',
		name: 'Osun'
	},
	{
		code: 'OY',
		name: 'Oyo'
	},
	{
		code: 'PL',
		name: 'Plateau'
	},
	{
		code: 'RI',
		name: 'Rivers'
	},
	{
		code: 'SO',
		name: 'Sokoto'
	},
	{
		code: 'TA',
		name: 'Taraba'
	},
	{
		code: 'YO',
		name: 'Yobe'
	},
	{
		code: 'ZA',
		name: 'Zamfara'
	}
];

const staffRoles = [
	{ id: 1, name: 'Admin/Business Manager' },
	{ id: 2, name: 'Regional Manager' },
	{ id: 3, name: 'Terminal Manager' },
	{ id: 4, name: 'Trip Manger/Support' }
];

const normFile = () => { };

export const SubmitButton = (name, handleClick, loading) => {
	return (
		<button className="submitButtonPrimary" type="submit" onClick={handleClick}>
			{loading ? <Loader color="black" /> : name}
		</button>
	);
};

export const SubmitButtonSecondary = name => (
	<button className="submitButtonSecondary" type="submit">
		{name}
	</button>
);

// email address
export const EmailField = (inputSize, required = true, disabled = false, placeholder) => (
	<Form.Item
		label=""
		name="email"
		validateTrigger={['onChange', 'onBlur']}
		hasFeedback
		rules={[
			...(required ? [{ required: true, message: 'Please enter your email address' }] : []),
			{ type: 'email', message: 'Please input a valid email' }
		]}
	>
		<Input
			size={inputSize}
			className="formInputElement"
			placeholder={placeholder}
			disabled={disabled}
		/>
	</Form.Item>
);

export const PasswordField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="password"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter your password' },
					{
						max: 60,
						message: 'Password cannot be greater than 60 characters'
					}
				]
				: []),
			{ min: 6, message: 'Password cannot be less than 6 characters' },
			{
				pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{0,}$/,
				message:
					'Password must contain atleast one uppercase, one lowercase, a number, and a special character'
			}
		]}
	>
		<Input.Password size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const ConfirmPasswordField = (inputSize, required = true, placeholder) => (
	<Form.Item
		name="confirm_password"
		label=""
		dependencies={['password']}
		hasFeedback
		rules={[
			{
				required: true,
				message: 'Please confirm your password!'
			},
			({ getFieldValue }) => ({
				validator(_, value) {
					if (!value || getFieldValue('password') === value) {
						return Promise.resolve();
					}
					return Promise.reject(
						new Error('The two passwords that you entered do not match!')
					);
				}
			})
		]}
	>
		<Input.Password size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const PhoneNumberField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="phone"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter your phone number' },
					{
						min: 11,
						message: 'Phone number cannot be less than 11 characters'
					},
					{
						max: 11,
						message: 'Phone number cannot be greater than 11 characters'
					}
				]
				: []),
			{
				pattern: /^\d+$/,
				message: 'Phone number can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const OTPField = (name, autofocus, placeholder = '-') => (
	<Form.Item
		name={name}
		rules={[
			{ required: true, message: '' },
			{ min: 1, message: '' },
			{ max: 1, message: '' },
			{ pattern: /^\d+$/, message: '' }
		]}
	>
		<Input
			min={1}
			max={1}
			className="otpInputElement"
			autoFocus={autofocus}
			placeholder={placeholder}
			inputMode="numeric"
			autoComplete="one-time-code"
		/>
	</Form.Item>
);

export const CompanySizeField = (inputSize, required = true, placeholder) => (
	<Form.Item
		name="company_size"
		label="Company size"
		rules={[
			...(required
				? [
					{ required: true, message: 'Company size is required' },
					{ max: 10, message: 'Company size cannot be more than 10 digits' }
				]
				: []),
			{
				pattern: /^\d+$/,
				message: 'Company size can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const ReservationWindowField = (inputSize, disabled = false, required = true) => (
	<Form.Item
		label=""
		name="reservation_window"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a reservation window'
					}
				]
				: [])
		]}
	>
		<Select placeholder="Select reservation window" size={inputSize} disabled={disabled}>
			{reservationWindows.map(reservationWindow => (
				<Select.Option
					key={`reservationWindowSelect-${reservationWindow.id}`}
					value={reservationWindow.id}
				>
					{reservationWindow.value}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);

export const UploadCACDocsField = () => (
	<Form.Item
		name="cac"
		valuePropName="fileList"
		getValueFromEvent={normFile}
		style={{ border: '1px solid #D9D9D9', padding: '1rem' }}
	>
		<Upload>
			<Button
				icon={<UploadOutlined />}
				style={{
					borderRadius: '5px',
					background: '#E3EAED',
					border: '1px solid #DDE3E9',
					color: 'rgba(0, 0, 0, 0.25)'
				}}
			>
				Upload CAC documents
			</Button>
		</Upload>
	</Form.Item>
);

export const UploadPermitField = () => (
	<Form.Item
		name="permit"
		valuePropName="fileList"
		getValueFromEvent={normFile}
		style={{ border: '1px solid #D9D9D9', padding: '1rem' }}
	>
		<Upload>
			<Button
				icon={<UploadOutlined />}
				style={{
					borderRadius: '5px',
					background: '#E3EAED',
					border: '1px solid #DDE3E9',
					color: 'rgba(0, 0, 0, 0.25)'
				}}
			>
				Upload permit
			</Button>
		</Upload>
	</Form.Item>
);

export const PlatformOptionsField = (inputSize, disabled = false, required = true) => (
	<Form.Item
		label=""
		name="platformOptions"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a platform'
					}
				]
				: [])
		]}
	>
		<Select placeholder="Platform options" size={inputSize} disabled={disabled}>
			{platformOptions.map(platformOption => (
				<Select.Option
					key={`platformOptionSelect-${platformOption.id}`}
					value={platformOption.id}
				>
					{platformOption.value}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);

export const TranscoNameField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="name"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter transco name' },
					{
						min: 3,
						message: 'Transco name cannot be less than 3 characters'
					},
					{
						max: 60,
						message: 'Transco name cannot be greater than 60 characters'
					}
				]
				: []),
			{
				pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
				message: 'Transco name can only contain characters'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const NumberOfStaffField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="number_of_staff"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter number of staff' },
					{
						min: 1,
						message: 'Number of staff cannot be less than 1 digit'
					},
					{
						max: 10,
						message: 'Number of staff cannot be greater than 10 digits'
					}
				]
				: []),
			{
				pattern: /^\d+$/,
				message: 'Number of staff can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const BankDetailsField = (inputSize, disabled = false, required = true) => (
	<Form.Item
		label="Bank details"
		name="bank"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a bank'
					}
				]
				: [])
		]}
	>
		<Select placeholder="Select bank" size={inputSize} disabled={disabled}>
			{bankDetails.map(bank => (
				<Select.Option key={`bankSelect-${bank.id}`} value={bank.value}>
					{bank.value}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);

export const AccountNumberField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="account_number"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter your bank account number' },
					{
						min: 10,
						message: 'Bank account number cannot be less than 10 characters'
					},
					{
						max: 10,
						message: 'Bank account number cannot be greater than 10 characters'
					}
				]
				: []),
			{
				pattern: /^\d+$/,
				message: 'Bank account number can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const AccountNameField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="account_name"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter your bank account name' },
					{
						min: 3,
						message: 'Bank account name cannot be less than 3 characters'
					},
					{
						max: 60,
						message: 'Bank account name cannot be greater than 60 characters'
					}
				]
				: []),
			{
				pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
				message: 'Bank account name can only contain characters'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

export const UploadPrivacyPolicyField = () => (
	<Form.Item
		name="privacy_policy"
		valuePropName="fileList"
		getValueFromEvent={normFile}
		style={{ border: '1px solid #D9D9D9', padding: '1rem' }}
	>
		<Upload>
			<Button
				icon={<UploadOutlined />}
				style={{
					borderRadius: '5px',
					background: '#E3EAED',
					border: '1px solid #DDE3E9',
					color: 'rgba(0, 0, 0, 0.25)'
				}}
			>
				Upload privacy policy
			</Button>
		</Upload>
	</Form.Item>
);

export const UploadCustomerCarePolicyField = () => (
	<Form.Item
		name="customer_care_policy"
		valuePropName="fileList"
		getValueFromEvent={normFile}
		style={{ border: '1px solid #D9D9D9', padding: '1rem' }}
	>
		<Upload>
			<Button
				icon={<UploadOutlined />}
				style={{
					borderRadius: '5px',
					background: '#E3EAED',
					border: '1px solid #DDE3E9',
					color: 'rgba(0, 0, 0, 0.25)'
				}}
			>
				Upload customer care policy
			</Button>
		</Upload>
	</Form.Item>
);

export const TerminalSelectField = (inputSize, disabled = false, required = true) => (
	<Form.Item
		label=""
		name="terminalOptions"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a terminal'
					}
				]
				: [])
		]}
	>
		<Select
			placeholder="Terminal: All"
			size={inputSize}
			disabled={disabled}
			className="selectElement"
		>
			{terminals.map(terminal => (
				<Select.Option key={`terminal-${terminal.id}`} value={terminal.id}>
					{terminal.value}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);

export const TimeSelectField = (inputSize, disabled = false, required = true) => (
	<Form.Item
		label=""
		name="timeOptions"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a time'
					}
				]
				: [])
		]}
	>
		<Select placeholder="Time: All" size={inputSize} disabled={disabled}>
			{times.map(time => (
				<Select.Option key={`time-${time.id}`} value={time.id}>
					{time.value}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);

export const TransportNameField = (inputSize, required = true, placeholder) => (
	<Form.Item
		label=""
		name="account_name"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter your bank account name' },
					{
						min: 3,
						message: 'Bank account name cannot be less than 3 characters'
					},
					{
						max: 60,
						message: 'Bank account name cannot be greater than 60 characters'
					}
				]
				: []),
			{
				pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
				message: 'Bank account name can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} />
	</Form.Item>
);

// staff input fileds
export const StaffFullNameField = (inputSize, required = true, disabled = false, placeholder) => (
	<Form.Item
		label=""
		name="name"
		hasFeedback

		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter staff full name' },
					{
						min: 3,
						message: 'Staff Full name cannot be less than 3 characters'
					},
					{
						max: 60,
						message: 'Staff full name cannot be greater than 60 characters'
					}
				]
				: []),
			{
				pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
				message: 'Staff full name can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} disabled={disabled} />
	</Form.Item>
);

export const StaffPositionField = (inputSize, required = true, disabled = false, placeholder) => (
	<Form.Item
		label=""
		name="position"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{ required: true, message: 'Please enter staff position' },
					{
						min: 3,
						message: 'Staff Position cannot be less than 3 characters'
					},
					{
						max: 60,
						message: 'Staff Position cannot be greater than 60 characters'
					}
				]
				: []),
			{
				pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
				message: 'Staff Position can only contain digits'
			}
		]}
	>
		<Input size={inputSize} className="formInputElement" placeholder={placeholder} disabled={disabled} />
	</Form.Item>
);

export const StatesField = (inputSize, required = true, disabled = false, placeholder) => (
	<Form.Item
		label=""
		name="state"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a state'
					}
				]
				: [])
		]}
	>
		<Select
			placeholder={placeholder}
			size={inputSize}
			disabled={disabled}
			className="selectElement"
		>
			{states.map(({ code, name }) => (
				<Select.Option key={`state-${code}`} value={name}>
					{name}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);

export const SearchTerminalField = (
	inputSize,
	required = true,
	disabled = false,
	placeholder,
	props,
	type
) => (
	<Form.Item
		label=""
		name="terminals"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a terminal'
					}
				]
				: [])
		]}
	>
		<Select
			mode="multiple"
			showSearch
			optionFilterProp="children"
			filterOption={(input, option) => {
				return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
			}}
			filterSort={(optionA, optionB) => {
				return optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase());
			}}
			placeholder={placeholder}
			size={inputSize}
			disabled={disabled}
			className="selectElement"
		>
			{props?.terminals?.getTerminalsSuccess.map(({ id, name }) => (
				<>
					<Select.Option key={`state-${id}`} value={id}>
						{name}
					</Select.Option>
				</>
			))}
		</Select>
	</Form.Item>
);

export const StaffRolesField = (inputSize, required = true, disabled = false, placeholder) => (
	<Form.Item
		label=""
		name="role_id"
		hasFeedback
		validateTrigger={['onChange', 'onBlur']}
		rules={[
			...(required
				? [
					{
						required: true,
						message: 'Please select a role'
					}
				]
				: [])
		]}
	>
		<Select
			placeholder={placeholder}
			size={inputSize}
			disabled={disabled}
			className="selectElement"
		>
			{staffRoles.map(({ id, name }) => (
				<Select.Option key={`state-${id}`} value={id}>
					{name}
				</Select.Option>
			))}
		</Select>
	</Form.Item>
);
