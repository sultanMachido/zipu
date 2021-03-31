import React from 'react';
import { Form, message, Collapse, Modal } from 'antd';
import { connect } from 'react-redux';
import {
	StaffFullNameField,
	StaffPositionField,
	EmailField,
	PhoneNumberField,
	StatesField,
	SearchTerminalField,
	StaffRolesField,
	SubmitButton,
	PasswordField
} from '../../../../components/FormField';
import './styles.scss';
import { getTerminals } from '../../../../redux/actions/terminals/terminals.action';
import { editStaff } from '../../../../redux/actions/staff/staff.actions';
import { apiErrors } from '../../../../utils/errorHandler/apiErrors';
import MultiSelect from "@kenshooui/react-multi-select";
import Switch from '../../../../components/Switch';
import ActivateDisableModal from '../../../../components/Modals/ActivateDisableModal'

const { Panel } = Collapse;

const EditStaff = (props) => {
	const inputSize = 'large';
	const [form] = Form.useForm();
	const [checked, setChecked] = React.useState(props?.location?.state?.status);
	const [selectedItems, setSelectedItems] = React.useState([]);
	const [modalOpen, setModalOpen] = React.useState(false);
	const [active, setActivate] = React.useState(false)
	const [disabled, setDisabled] = React.useState(false)

	const fetchTerminals = async () => {
		const transco_id = localStorage.getItem('transcoId')
		return props.getTerminals({ transco_id });
	};

	React.useEffect(() => {
		fetchTerminals();
	}, []);

	const terminals = props?.location?.state?.terminals?.map((terminal) => {
		return { id: terminal.id, label: terminal.name }
	});
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

	const handleClick = () => {
		Modal.destroyAll();
		props.history.push('/staff');
	}

	const handleCancel = () => {
		setActivate(false)
		setDisabled(false)
	}


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
					style: { marginTop: "20px" },
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

	const terminalsData = props?.terminals?.getTerminalsSuccess?.terminals?.data?.map((terminal) => {
		return { id: terminal.id, label: terminal.name }
	});

	return (
		<div className="staffEditWrapper">
			<div className="editStaffHeader">
				<h5 className="title">Edit Staff</h5>
				<Switch
					data={props?.location?.state?.status}
					setDisabled={setDisabled}
					setActivate={setActivate}
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
								<Panel header="Allocate terminal to this user" key="1">
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
				text={`Deactivating this staff will remove them from all terminal,
				from search page, this action cannot be undone.
				Enter admin password to continue`}
			/>

			<ActivateDisableModal
				visible={disabled}
				handleCancel={handleCancel}
				title="Deactive Staff?"
				text="Deactivating this staff will remove them from all terminal,
				from search page, this action cannot be undone.
				Enter admin password to continue"
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
	editStaff
};


export default connect(mapStateToProps, mapDispatchToProps)(EditStaff);
