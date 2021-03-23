import React from 'react';
import {Form, Progress, message, Collapse, Switch} from 'antd';
import {connect} from 'react-redux';
import {
	StaffFullNameField,
	StaffPositionField,
	EmailField,
	PhoneNumberField,
	StatesField,
	SearchTerminalField,
	StaffRolesField,
	SubmitButton
} from '../../../../components/FormField';
import './styles.scss';
import {getTerminals} from '../../../../redux/actions/terminals/terminals.action';
import {addStaff} from '../../../../redux/actions/staff/staff.actions';
import {apiErrors} from '../../../../utils/errorHandler/apiErrors';

const {Panel} = Collapse;

const StaffAdd = props => {
	const inputSize = 'large';
	const [form] = Form.useForm();
	const [checked, setChecked] = React.useState(true);

	const fetchTerminals = async () => {
		const response = await props.getTerminals();

		return response;
	};

	React.useEffect(() => {
		fetchTerminals();
	}, []);

	const onFinish = async values => {
		try {
			const messageKey = 'addStaffResponse';
			const key = 'addStaff';
			const tryAddStaff = await props.addStaff({...values});

			if (tryAddStaff.addStaffStatus) {
				message.success({
					content: tryAddStaff.message,
					key: messageKey,
					duration: 10
				});
				form.resetFields();
			} else {
				const err = apiErrors(tryAddStaff?.message);
				message.error({
					content: err,
					key,
					duration: 2
				});
			}
		} catch (error) {
			console.log({error}, 'error');
		}
	};

	const handleChange = (checked, event) => {
		setChecked(checked => !checked);
	};

	return (
		<div className="staffAddWrapper">
			<div className="addStaffHeader">
				<h5 className="title">Account Creation</h5>
				<Switch
					checkedChildren="Active"
					unCheckedChildren="Disabled"
					size="medium"
					checked={checked}
					onChange={handleChange}
				/>
			</div>
			<div className="addStaffForm">
				<Form
					form={form}
					onFinish={onFinish}
					hideRequiredMark
					layout="vertical"
					style={{width: '100%'}}
				>
					<div className="inputRow">
						<div className="inputElement">
							{StaffFullNameField(inputSize, true, 'Full name')}
						</div>
						<div className="inputElement">
							{StaffPositionField(inputSize, true, 'Position')}
						</div>
					</div>

					<div className="inputRow">
						<div className="inputElement">
							{EmailField(inputSize, false, true, 'Email address')}
						</div>
						<div className="inputElement">
							{PhoneNumberField(inputSize, true, 'Phone number')}
						</div>
					</div>

					<div className="inputRow">
						<div className="inputElement">
							<div className="states">
								{StatesField(inputSize, false, true, 'State')}
							</div>
							<br />
							<div className="roles">
								{' '}
								{StaffRolesField(inputSize, false, true, 'Select Role')}
							</div>
							<div className="btnWrapper">
								{SubmitButton(
									'ADD NEW STAFF',
									null,
									props?.staffData?.addStaffLoading
								)}
							</div>
						</div>
						<div className="inputElement">
							<Collapse>
								<Panel header="Allocate terminal to this user" key="1">
									{SearchTerminalField(
										inputSize,
										false,
										true,
										'Search terminals',
										props
									)}
								</Panel>
							</Collapse>
						</div>
					</div>
				</Form>
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		terminals: state.terminals,
		staffData: state.staffData
	};
};

const mapDispatchToProps = {
	getTerminals,
	addStaff
};

export default connect(mapStateToProps, mapDispatchToProps)(StaffAdd);
