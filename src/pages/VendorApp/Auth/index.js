import React from 'react';
import './Auth.scss';
import { useQuery } from './../../../utils/URLSearchParam';

import Registration from './Registration';
import EmailVerification from './EmailVerification';
import TransportType from './TransportType';
import PermitSubmission from './PermitSubmission';
import BusinessDetails from './BusinessDetails';
import Success from './Success';

const Auth = props => {
	let query = useQuery();
	const page = query.get('step');

	React.useEffect(() => {
		props.history.push(`/register?step=${query.get('step') || '1'}`);
	}, [query.get('step')]);

	const currentRegistrationView = () => {
		switch (query.get('step')) {
			case '1':
				return (
					<>
						<Registration />
					</>
				);

			case '2':
				return (
					<>
						<EmailVerification />
					</>
				);

			case '3':
				return (
					<>
						<TransportType />
					</>
				);

			case '4':
				return (
					<>
						<PermitSubmission />
					</>
				);

			case '5':
				return (
					<>
						<BusinessDetails />
					</>
				);

			case '6':
				return (
					<>
						<Success />
					</>
				);

			default:
				return <></>;
		}
	};

	return (
		<div className="registrationWrapper">
			<div className={`${page === '6' ? 'success' : 'registrationContent '}`}>
				{currentRegistrationView()}
			</div>
		</div>
	);
};

export default Auth;
