import React, { useState } from 'react';
import ViewBookingsModal from '../../../components/Modals/ViewBookingsModal';
import TableWrapper from '../../../components/TableWrapper';
import './styles.scss';

const Bookings = props => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const columns = [
		{
			title: 'Book',
			dataIndex: 'book',
			key: 'book',
			render: (_, {name, id}) => (
				<>
					<p>{name}</p>
					<span>{id}</span>
				</>
			)
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: status => <div className="status">{status}</div>
		},
		{
			title: 'Type',
			dataIndex: 'type',
			key: 'type',
			render: (_, {type, typeDetail}) => (
				<>
					<p>{type}</p>
					<span>{typeDetail}</span>
				</>
			)
		},
		{
			title: 'Vehicle',
			dataIndex: 'vehicle',
			key: 'vehicle',
			render: (_, {vehicle, vehiclePlateNo}) => (
				<>
					<p>{vehicle}</p>
					<span>{vehiclePlateNo}</span>
				</>
			)
		},
		{
			title: 'Departure/Arrival',
			dataIndex: 'deparArriv',
			key: 'deparArriv',
			render: (_, {from, destination}) => (
				<>
					<p>{from}</p>
					<span>{destination}</span>
				</>
			)
		},
		{
			title: 'Start/End Date',
			dataIndex: 'startEndDate',
			key: 'startEndDate',
			render: (_, {startDate, endDate}) => (
				<>
					<p>{startDate}</p>
					<span>{endDate}</span>
				</>
			)
		},
		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <button className="view">View</button>
		}
	];

	const data = [
		{
			key: '1',
			id: '398HSSTJLOIJEJH',
			name: 'Oluwaleke Ojo',
			status: 'Processing',
			type: 'Car Rental',
			typeDetail: 'with driver',
			vehicle: 'Toyota camry 2020',
			vehiclePlateNo: 'AGR 2345 EF',
			from: 'Lagos',
			destination: 'Benin',
			startDate: '10/20/2020',
			endDate: '11/20/2020'
		},
		{
			key: '2',
			id: '398HSSTJLOIJEJH',
			name: 'Oluwaleke Ojo',
			status: 'Processing',
			type: 'Car Rental',
			typeDetail: 'with driver',
			vehicle: 'Toyota camry 2020',
			vehiclePlateNo: 'AGR 2345 EF',
			from: 'Lagos',
			destination: 'Benin',
			startDate: '10/20/2020',
			endDate: '11/20/2020'
		},
		{
			key: '3',
			id: '398HSSTJLOIJEJH',
			name: 'Oluwaleke Ojo',
			status: 'Processing',
			type: 'Car Rental',
			typeDetail: 'with driver',
			vehicle: 'Toyota camry 2020',
			vehiclePlateNo: 'AGR 2345 EF',
			from: 'Lagos',
			destination: 'Benin',
			startDate: '10/20/2020',
			endDate: '11/20/2020'
		},
		{
			key: '4',
			id: '398HSSTJLOIJEJH',
			name: 'Oluwaleke Ojo',
			status: 'Processing',
			type: 'Car Rental',
			typeDetail: 'with driver',
			vehicle: 'Toyota camry 2020',
			vehiclePlateNo: 'AGR 2345 EF',
			from: 'Lagos',
			destination: 'Benin',
			startDate: '10/20/2020',
			endDate: '11/20/2020'
		},
		{
			key: '5',
			id: '398HSSTJLOIJEJH',
			name: 'Oluwaleke Ojo',
			status: 'Processing',
			type: 'Car Rental',
			typeDetail: 'with driver',
			vehicle: 'Toyota camry 2020',
			vehiclePlateNo: 'AGR 2345 EF',
			from: 'Lagos',
			destination: 'Benin',
			startDate: '10/20/2020',
			endDate: '11/20/2020'
		}
	];

	return (
		<div className="bookingsWrapper">
            <h5 className="title">Current booking</h5>
            <TableWrapper
                columns={columns}
                dataSource={data}
            />
            <ViewBookingsModal 
                isModalVisible={isModalVisible} 
                handleCancel={() => setIsModalVisible(false)} 
            />
        </div>
	);
};

export default Bookings;
