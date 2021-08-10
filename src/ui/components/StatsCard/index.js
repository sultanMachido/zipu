import './styles.scss';

import { Card, Select } from 'antd';
import React from 'react';

const { Option } = Select;

const StatsCard = ({
	title,
	hasDateFilter,
	className,
	hasHeader = true,
	titleComponent,
	children
}) => {
	return (
		<Card className={`statsCard ${className}`}>
			{hasHeader && (
				<div className="d-flex justify-content-between align-items-center header">
					{titleComponent || (
						<>
							<h4>{title}</h4>
							{hasDateFilter && (
								<Select defaultValue="lucy" style={{ width: 'auto' }} onChange={null}>
									<Option value="jack">This Month</Option>
									<Option value="lucy">This Year</Option>
								</Select>
							)}
						</>
					)}
				</div>
			)}
			{children}
		</Card>
	);
};

export default StatsCard;
