import React from 'react';
import {CheckIcon} from '../SVGs';
import './styles.scss';

export default function Checks({tripInfo, className}) {
	return (
		<div className={'trip-info ' + className}>
			<ul>
				{tripInfo?.length &&
					tripInfo.map((trip, index) => (
						<li key={index}>
							<CheckIcon /> <span>{trip}</span>
						</li>
					))}
			</ul>
		</div>
	);
}
