import React from 'react';
import { Form, message, Collapse, Switch } from 'antd';
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
import { editStaff } from '../../../../redux/actions/staff/staff.actions';
import { apiErrors } from '../../../../utils/errorHandler/apiErrors';

const { Panel } = Collapse;

const EditStaff = (props) => {
	const inputSize = 'large';
	const [form] = Form.useForm();
	const [checked, setChecked] = React.useState(props?.location?.state?.status);

	const fetchTerminals = async () => {
		const response = await props.getTerminals();
		return response;
	};

	React.useEffect(() => {
		fetchTerminals();
	}, []);

	const terminals = props?.location?.state?.terminals.map((terminal) => {
		return terminal.id
	});


	React.useEffect(() => {
		form.setFieldsValue({
			email: props?.location?.state?.email,
			name: props?.location?.state?.name,
			position: props?.location?.state?.position,
			phone: props?.location?.state?.phone,
			state: props?.location?.state?.state,
			role_id: props?.location?.state?.role_id,
			terminals: terminals
		});

		return () => {
			form.resetFields();
		};
	}, [props.location.state]);


	const onFinish = async values => {
		try {
			const messageKey = 'editStaffResponse';
			const key = 'editStaff';
			const tryEditStaff = await props.editStaff({ ...values });

			if (tryEditStaff.editStaffStatus) {
				message.success({
					content: tryEditStaff.message,
					key: messageKey,
					duration: 10
				});
				form.resetFields();
			} else {
				const err = apiErrors(tryEditStaff?.message);
				message.error({
					content: err,
					key,
					duration: 2
				});
			}
		} catch (error) {
		}
	};

	const handleChange = (checked) => {
		setChecked(checked);
	};

	return (
		<div className="staffEditWrapper">
			<div className="editStaffHeader">
				<h5 className="title">Edit Staff</h5>
				<Switch
					checkedChildren="Active"
					unCheckedChildren="Disabled"
					size="medium"
					checked={checked ? 1 : 0}
					onChange={handleChange}
				/>
			</div>
			<div className="editStaffForm">
				<Form
					form={form}
					onFinish={onFinish}
					hideRequiredMark
					layout="vertical"
					style={{ width: '100%' }}
					initialValues={{
						email: props?.location?.state?.email,
						name: props?.location?.state?.name,
						position: props?.location?.state?.position,
						phone: props?.location?.state?.phone,
						state: props?.location?.state?.state,
						role_id: props?.location?.state?.role_id,
						terminals: terminals
					}}

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
							{EmailField(inputSize, true, true, 'Email address')}
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
								{StaffRolesField(inputSize, true, true, 'Select Role')}
							</div>
							<div className="btnWrapper">
								{SubmitButton(
									'EDIT STAFF',
									null,
									props?.staffData?.ediStaffLoading
								)}
							</div>
						</div>
						<div className="inputElement">
							<Collapse defaultActiveKey={['1']}>
								<Panel header="Allocate terminal to this user" key="1">
									{SearchTerminalField(
										inputSize,
										true,
										true,
										'Search terminals',
										props,
										'edit'
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
	editStaff
};


export default connect(mapStateToProps, mapDispatchToProps)(EditStaff);
