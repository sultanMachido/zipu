import React from 'react';
import {useParams} from 'react-router-dom';
import './styles.scss';
import {VehicleData} from '../../../../utils/constants/VehicleInventoryList';
import {Card} from 'antd';
import {SubmitButton} from '../../../../components/FormField';

const EditVehicle = props => {
	let {id} = useParams();

	const data = VehicleData.filter(items => {
		return items.id === parseInt(id);
	});
	console.log({data});
	return (
		<div className="editTripWrapper">
			<div className="cardSection">
				<Card style={{borderRadius: '5px', marginBottom: '2rem'}}></Card>
			</div>

			<div className="sideBarSection">{SubmitButton('SAVE LISTING')}</div>
		</div>
	);
};

export default EditVehicle;
