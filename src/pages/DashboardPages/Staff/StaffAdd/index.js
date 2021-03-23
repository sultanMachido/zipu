import React from 'react';
import { Form, Progress, message, Collapse, Switch, Modal } from 'antd';
import { connect } from 'react-redux';
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
import { getTerminals } from '../../../../redux/actions/terminals/terminals.action';
import { addStaff } from '../../../../redux/actions/staff/staff.actions';
import { apiErrors } from '../../../../utils/errorHandler/apiErrors';

const { Panel } = Collapse;

const StaffAdd = props => {
	const inputSize = 'large';
	const [form] = Form.useForm();
	const [checked, setChecked] = React.useState(true);
	const [modalOpen, setModalOpen] = React.useState(false)

	const fetchTerminals = async () => {
		const response = await props.getTerminals();

		return response;
	};

	React.useEffect(() => {
		fetchTerminals();
	}, []);

	const handleClick = () => {
		Modal.destroyAll()
	}

	const onFinish = async values => {
		try {
			const messageKey = 'addStaffResponse';
			const key = 'addStaff';
			const tryAddStaff = await props.addStaff({ ...values });

			if (tryAddStaff.addStaffStatus) {
				Modal.success({
					content: (<div>
						<p style={{ fontSize: "20px" }}>Staff created successfully</p>
						{
							SubmitButton('NEW STAFF PROFILE', handleClick)
						}
					</div>),
					closable: modalOpen || true,
					style: { marginTop: "20px" },
					okText: 'NEW STAFF PROFILE',
					centered: true,

				})
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
			console.log({ error }, 'error');
		}
	};

	const handleChange = (checked, event) => {
		setChecked(checked);
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
					style={{ width: '100%' }}
				>
					<div className="inputRow">
						<div className="inputElement">
							{StaffFullNameField(inputSize, true, false, 'Full name')}
						</div>
						<div className="inputElement">
							{StaffPositionField(inputSize, true, false, 'Position')}
						</div>
					</div>

					<div className="inputRow">
						<div className="inputElement">
							{EmailField(inputSize, true, false, 'Email address')}
						</div>
						<div className="inputElement">
							{PhoneNumberField(inputSize, true, false, 'Phone number')}
						</div>
					</div>

					<div className="inputRow">
						<div className="inputElement">
							<div className="states">
								{StatesField(inputSize, true, false, 'State')}
							</div>
							<br />
							<div className="roles">
								{' '}
								{StaffRolesField(inputSize, true, false, 'Select Role')}
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
							<Collapse defaultActiveKey={['1']}>
								<Panel header="Allocate terminal to this user" key="1">
									{SearchTerminalField(
										inputSize,
										true,
										false,
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
