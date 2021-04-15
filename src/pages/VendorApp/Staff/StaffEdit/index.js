import React from 'react';
import { Form, message, Collapse, Modal, notification } from 'antd';
import { connect } from 'react-redux';
import {
	StaffFullNameField,
	StaffPositionField,
	EmailField,
	PhoneNumberField,
	StatesField,
	StaffRolesField,
	SubmitButton,
} from '../../../../components/FormField';
import './styles.scss';
import { getTerminals } from '../../../../redux/actions/terminals/terminals.action';
import { editStaff, activateStaff, deActivateStaff, getSingleStaff } from '../../../../redux/actions/staff/staff.actions';
import { apiErrors } from '../../../../utils/errorHandler/apiErrors';
import MultiSelect from "@kenshooui/react-multi-select";
import Switch from '../../../../components/Switch';
import ActivateDisableModal from '../../../../components/Modals/ActivateDisableModal';

const { Panel } = Collapse;

const EditStaff = (props) => {
	const inputSize = 'large';
	const [form] = Form.useForm();
	const [selectedItems, setSelectedItems] = React.useState([]);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [active, setActivate] = React.useState(false)
	const [disabled, setDisabled] = React.useState(false);
	const [checked, setChecked] = React.useState(false)

	// fetch terminals
	const fetchTerminals = async () => {
		const transco_id = localStorage.getItem('transcoId')
		return props.getTerminals({ transco_id });
	};

	// fetch staff after editing
	const fetchStaff = async () => {
		const staffId = props?.location?.state?.id
		return props.getSingleStaff(staffId);
	}

	React.useEffect(() => {
		fetchTerminals();
	}, []);

	React.useEffect(() => {
		fetchStaff();
	}, [checked]);


	const terminals = props?.location?.state?.terminals?.map((terminal) => {
		return { id: terminal.id, label: terminal.name }
	});

	// useEffect for editing staff
	React.useEffect(() => {
		form.setFieldsValue({
			email: props?.location?.state?.email,
			name: props?.location?.state?.name,
			position: props?.location?.state?.position,
			phone: props?.location?.state?.phone,
			state: props?.location?.state?.state,
			role_id: props?.location?.state?.roles[0].id,
			terminals: terminals
		});
	}, [props.location.state]);

	// close modal after staff has been editted
	const handleClick = () => {
		Modal.destroyAll();
		props.history.push('/staff');
	}

	// close modal
	const handleCancel = () => {
		setActivate(false)
		setDisabled(false)
		setActivate(false)
	}

	// method to call on staff edit
	const onFinish = async values => {
		const staffId = props?.location?.state?.id
		try {
			const key = 'editStaff';
			const tryEditStaff = await props.editStaff({ ...values, staffId });

			if (tryEditStaff.editStaffStatus) {
				Modal.success({
					content: (
						<div>
							<p className="successText">Staff Edited successfully</p>
							{
								SubmitButton('BACK TO STAFF PAGE', handleClick)
							}
						</div>),
					closable: modalOpen || true,
					centered: true,
				})
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

	// terminal data for the multi select
	const terminalsData = props?.terminals?.getTerminalsSuccess?.terminals?.data?.map((terminal) => {
		return { id: terminal.id, label: terminal.name }
	});

	// handle activate/deactivate method
	const handleSwitch = async (value) => {
		if (value === true) {
			setActivate(true)
			setDisabled(false);
		} else {
			setDisabled(true)
			setActivate(false)
		}

	}

	// method to call on activate/deactivate
	const onHandleChangeStatus = async (values) => {
		const staffId = props?.location?.state?.id;
		try {
			if (props.staffData.getSingleStaffSuccess?.status !== 1) {
				const res = await props.activateStaff({ staffId, ...values });
				if (res.activateStaffStatus) {
					setChecked((value) => !value)
					handleCancel()
					fetchStaff()
					notification.success({
						message: 'Activation Successful',
						description:
							'This staff have been successfully activated',
					});
				} else {
					notification.error({
						message: 'Activation Failed',
						description:
							'Unauthorized',
					});
				}
			} else {
				const res = await props.deActivateStaff({ staffId, ...values });
				if (res.deActivateStaffStatus) {
					setChecked((value) => !value)
					handleCancel()
					fetchStaff()
					notification.success({
						message: 'Deactivation Successful',
						description:
							'This staff have been successfully Deactivated',
					});

				} else {
					notification.error({
						message: 'Deactivation Failed',
						description:
							'Unauthorized',
					});
				}
			}
		} catch (error) {

		}
	}

	// return
	return (
		<div className="staffEditWrapper">
			<div className="editStaffHeader">
				<h5 className="title">Edit Staff</h5>
				<Switch
					data={props?.location?.state?.status}
					status={props?.staffData?.getSingleStaffSuccess?.status}
					setDisabled={setDisabled}
					setActivate={setActivate}
					handleClick={handleSwitch}
					checked={props?.staffData?.getSingleStaffSuccess?.status === 1 ? true : false}
					loading={props?.staffData?.getSingleStaffLoading}
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
						role_id: props?.location?.state?.roles[0].id,
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
								<Panel header="Allocate terminal to this Staff" key="1">
									<MultiSelect
										items={terminalsData}
										selectedItems={terminals?.length > 0 ? terminals : selectedItems}
										onChange={(items) => setSelectedItems(items)}
										showSelectedItems
									/>
								</Panel>
							</Collapse>
						</div>
					</div>
				</Form>
			</div>

			<ActivateDisableModal
				visible={active}
				handleCancel={handleCancel}
				title="Activate Staff?"
				text={`Activating this staff will all them to use the platform
				based on their configured roles and permission.
				Enter admin password to continue`}
				onFinish={onHandleChangeStatus}
			/>

			<ActivateDisableModal
				visible={disabled}
				handleCancel={handleCancel}
				title="Deactive Staff?"
				text="Deactivating this staff will remove them from all terminal,
				from search page, this action cannot be undone.
				Enter admin password to continue"
				onFinish={onHandleChangeStatus}
			/>
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
	editStaff,
	activateStaff,
	deActivateStaff,
	getSingleStaff
};


export default connect(mapStateToProps, mapDispatchToProps)(EditStaff);
