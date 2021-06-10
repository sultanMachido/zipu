import React from 'react';
import MultiSelect from '@kenshooui/react-multi-select';

const CustomMultiSelect = props => {
	const data = props?.buses?.map(bus => {
		return {id: bus.id, label: bus.vehicle_make};
	});
	return (
		<MultiSelect
			items={data}
			selectedItems={props?.selectedItems}
			onChange={props?.handleChange}
		/>
	);
};

export default CustomMultiSelect;
