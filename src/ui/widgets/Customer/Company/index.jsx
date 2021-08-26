/* eslint-disable no-unused-vars */
// import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import { Spin } from 'antd';
import classnames from 'classnames/bind';
import { APIService } from 'config/apiConfig';
import { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import TransoProfile from 'ui/widgets/Customer/components/TranscoProfile';

import style from './index.module.scss';
import { mockData_TranscoProfile } from './MOCK_DATA';

let styles = classnames.bind(style);

const Company = () => {
	const [transcoInfo, setInfo] = useState({});
	const [transcoObj, setObj] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadContent();
	}, []);

	const loadContent = async () => {
		try {
			const transcoRequest = await APIService.get(`/transcodetail/4`);
			const transcoTrips = await APIService.get(`/transcotrips/4`);
			console.log('transco obj', { ...transcoRequest.data.data.transco });
			console.log('trnasco trips', { ...transcoTrips.data.data });
			setInfo({ ...transcoRequest.data.data.transco });
			setObj({ ...transcoTrips.data.data });
			setLoading(false);
		} catch (error) {
			setInfo({});
			setObj({});
			const message = error.response?.data?.message;
			toast.error(message || 'Error occured');
			setLoading(false);
		}
	};

	return (
		<Fragment>
			{loading ? (
				<Fragment>
					<div
						className="transcopage-wrapper"
						style={{
							marginTop: '5rem'
						}}>
						<Spin size="large" />
					</div>
				</Fragment>
			) : transcoInfo && Object.keys(transcoObj).length > 0 ? (
				<Fragment>
					<TransoProfile
						transcoObj={transcoObj}
						transcoInfo={transcoInfo}
						{...mockData_TranscoProfile}
					/>
				</Fragment>
			) : (
				<Fragment>
					<div
						className="transcopage-wrapper"
						style={{
							marginTop: '5rem'
						}}>
						<h2 className="mt-4 mb-4 sub-lg black">No Details for this tranco</h2>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Company;
