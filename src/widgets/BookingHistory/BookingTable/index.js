import React from 'react';
import {Table} from 'antd';
import './styles.scss';

const BookingTable = ({dataSource, columns, loading = false, rowKey, locale, pagination}) => {
	return (
		<div className="tableWrapper">
			<Table
				dataSource={dataSource}
				columns={columns}
				loading={loading}
				rowKey={rowKey}
				locale={{emptyText: locale}}
				pagination={pagination}
			/>
		</div>
	);
};

export default BookingTable;
