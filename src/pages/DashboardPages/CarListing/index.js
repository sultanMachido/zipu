import React from 'react';
import {Divider, Checkbox, Pagination} from 'antd';
import {ImPencil} from 'react-icons/all';
import './styles.scss';
import {SubmitButton} from '../../../components/FormField';
import EmptyScreen from '../../../components/EmptyScreen';
import {TerminalsList} from '../../../utils/constants/TerminalList';
import {StatusList} from '../../../utils/constants/StatusList';
import {VehicleList} from '../../../utils/constants/VehicleList';
import {VehicleData} from '../../../utils/constants/VehicleInventoryList';
import VehicleComponent from './Vehicle';
import {useQuery} from '../../../utils/URLSearchParam';

const CheckboxGroup = Checkbox.Group;
const defaultCheckedList = [''];

const TripInventory = props => {
	let query = useQuery();
	const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
	const [indeterminate, setIndeterminate] = React.useState(true);
	const [checkAll, setCheckAll] = React.useState(false);
	const [page, setPage] = React.useState(query.get('page') || 1);
	const [pageSize, setPageSize] = React.useState(3);

	React.useEffect(() => {
		props.history.push(`/car-listing?page=${page}&pageSize=${pageSize}`);
	}, [page, pageSize]);

	const indexOfLastCarTrip = page * pageSize;
	const indexOfFirstCarTrip = indexOfLastCarTrip - pageSize;
	const currentCarTrips = VehicleData.slice(indexOfFirstCarTrip, indexOfLastCarTrip);

	const onChangeTerminals = list => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < TerminalsList.length);
		setCheckAll(list.length === TerminalsList.length);
	};

	const onCheckAllChangeTerminals = e => {
		setCheckedList(e.target.checked ? TerminalsList : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	const onChangeStatus = list => {
		setCheckedList(list);
		setIndeterminate(!!list.length && list.length < StatusList.length);
		setCheckAll(list.length === StatusList.length);
	};

	const onCheckAllChangeStatus = e => {
		setCheckedList(e.target.checked ? StatusList : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};

	const handleClick = () => {
		props.history.push('/car-listing/add');
	};

	const onChange = (page, pageSize) => {
		query.set('page', page);
		setPage(page);
	};
	const onShowSizeChange = (current, pageSize) => {
		console.log(pageSize);
		query.set('pageSize', pageSize);
		setPageSize(pageSize);
	};

	return (
		<div className="tripInventoryWrapper">
			<div className="tripInventoryHeader">
				<h5 className="title">Trip and car list</h5>
				<div className="btnWrapper">{SubmitButton('ADD NEW TRIPS', handleClick)}</div>
			</div>

			<div className="tripInventoryContent">
				<div className="contentSidebar">
					<div className="terminalsWrapper">
						<p className="terminalsTitle">Terminals</p>
						<div>
							<Checkbox
								indeterminate={indeterminate}
								onChange={onCheckAllChangeTerminals}
								checked={checkAll}
							>
								All
							</Checkbox>
							<CheckboxGroup
								options={TerminalsList}
								value={checkedList}
								onChange={onChangeTerminals}
								layout="vertical"
							/>
						</div>
					</div>
					<Divider />
					<div className="statusWrapper">
						<p className="statusTitle">Status</p>
						<div>
							<Checkbox
								indeterminate={indeterminate}
								onChange={onCheckAllChangeStatus}
								checked={checkAll}
							>
								All
							</Checkbox>
							<CheckboxGroup
								options={StatusList}
								value={checkedList}
								onChange={onChangeStatus}
								layout="vertical"
							/>
						</div>
					</div>
					<Divider />

					<div className="vehicleWrapper">
						<p className="vehicleTitle">Vehicle</p>
						<div>
							<Checkbox
								indeterminate={indeterminate}
								onChange={onCheckAllChangeStatus}
								checked={checkAll}
							>
								All
							</Checkbox>
							<CheckboxGroup
								options={VehicleList}
								value={checkedList}
								onChange={onChangeStatus}
								layout="vertical"
							/>
						</div>
					</div>
					<Divider />
				</div>
				<div className="contentMain">
					{VehicleData.length === 0 ? (
						<EmptyScreen
							icon={<ImPencil />}
							title="List is empty"
							subText="When you add a trip, they will appear here"
							buttonText="ADD TRIPS"
						/>
					) : (
						currentCarTrips.map(data => {
							return <VehicleComponent data={data} key={data.id} />;
						})
					)}

					<Pagination
						total={VehicleData.length}
						showSizeChanger
						showQuickJumper
						showTotal={total => `Total ${total} items`}
						onChange={onChange}
						onShowSizeChange={onShowSizeChange}
						defaultPageSize={3}
						current={parseInt(page)}
					/>
				</div>
			</div>
		</div>
	);
};

export default TripInventory;
