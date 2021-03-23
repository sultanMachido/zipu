import React from 'react';
import { BiUser } from 'react-icons/all';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import EmptyScreen from '../../../components/EmptyScreen';
import TableWrapper from '../../../components/TableWrapper';
import { staffColumns } from '../../../utils/constants/TableColumns/staffTableColumns';
import { getStaff } from '../../../redux/actions/staff/staff.actions';
import { SubmitButton } from '../../../components/FormField';
import './styles.scss';

const Staff = props => {
	const [recordPage, setRecordPage] = React.useState(1);
	const [recordPageSize, setRecordPageSize] = React.useState(10);

	const columns = staffColumns();

	const fetchStaff = async () => {
		const transco_id = localStorage.getItem('transcoId');
		const staffRecords = await props.getStaff(transco_id);
		return staffRecords;
	};

	React.useEffect(() => {
		fetchStaff();
	}, []);

	const handleEdit = (staff) => {
		props.history.push({ pathname: `/staff/edit/${staff?.id}`, state: staff });
	};

	const handleAddStaff = () => {
		props.history.push("/staff/add");
	};

	const staffData = props?.staffData?.getStaffSuccess.map(staff => {
		return {
			...staff,
			created_at: format(new Date(staff.created_at), 'yyyy-MM-dd hh:mm:ss'),
			actions: (
				<button className="editStaff" onClick={() => handleEdit(staff)} type="submit">
					Edit roles
				</button>
			)
		};
	});

	return (
		<div className="bookingsWrapper">
			<div className="staffHeader">
				<h5 className="title">Staff Management</h5>
				{SubmitButton('ADD NEW STAFF', handleAddStaff)}
			</div>
			{
				<TableWrapper
					columns={columns}
					dataSource={staffData}
					loading={props?.staffData?.getStaffLoading}
					rowKey={`created_at${Math.random()}`}
					locale={
						<EmptyScreen
							icon={<BiUser />}
							title="List is empty"
							subText="When you create a staff profile, they will appear here"
							buttonText="CREATE STAFF PROFILE"
						/>
					}
					pagination={{
						showSizeChanger: true,
						total: 400,
						position: 'both',
						onShowSizeChange: (current, size) => {
							setRecordPage(current);
							setRecordPageSize(size);
						},
						onChange: (page, pageSize) => {
							setRecordPage(page);
							setRecordPageSize(pageSize);
						},
						pageSizeOptions: ['10', '15', '20', '25'],
						showTotal: (total, range) =>
							`${range[0]} - ${range[1]} of ${total} record(s)`
					}}
				/>
			}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		staffData: state.staffData
	};
};

const mapDispatchToProps = {
	getStaff
};

export default connect(mapStateToProps, mapDispatchToProps)(Staff);
