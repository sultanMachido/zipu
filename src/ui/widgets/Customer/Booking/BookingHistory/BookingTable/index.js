import './styles.scss';

import { Table } from 'antd';
import React from 'react';

const BookingTable = ({ dataSource, columns, loading = false }) => {
	return (
		<div className="table-wrapper">
			<Table dataSource={dataSource} columns={columns} loading={loading} />
		</div>
	);
};

export default BookingTable;
