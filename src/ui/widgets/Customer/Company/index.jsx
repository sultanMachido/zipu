/* eslint-disable no-unused-vars */
// import { ReactComponent as Mail } from 'assets/svg/mail.svg';
import classnames from 'classnames/bind';
import { Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { View } from 'ui/atoms/components/Typography';
import TransoProfile from 'ui/widgets/Customer/components/TranscoProfile';

import style from './index.module.scss';
import { mockData_TranscoProfile } from './MOCK_DATA';

let styles = classnames.bind(style);

const Company = () => (
	<Fragment>
		<TransoProfile {...mockData_TranscoProfile} />
	</Fragment>
);

export default Company;
