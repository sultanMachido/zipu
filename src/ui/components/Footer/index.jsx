import classnames from 'classnames/bind';
import React from 'react';
import { Text, View } from 'ui/atoms/components/Typography';
// import { YoutubeIcon } from 'ui/svgs';
// import { GoogleIcon } from 'ui/svgs';
// import { TwitterIcon } from 'ui/svgs';
// import { FacebookIcon } from 'ui/svgs';
import { LogoIcon } from 'ui/svgs';

import style from './index.module.scss';
import { mockData_Footer } from './MOCK_DATA';

let styles = classnames.bind(style);

const Footer = () => {
	return (
		<View className={styles('footer-wrapper')}>
			<View className={styles('inner-wrapper')}>
				<View className={styles('first-column')}>
					<LogoIcon />
					<Text color="white">{mockData_Footer.description}</Text>
					<View className={styles('social-links')}>
						{mockData_Footer.socialLinks.map(({ link, icon: Component }) => (
							<Text variant="a" href={link} key={link}>
								<Component />
							</Text>
						))}
					</View>
				</View>
				<View variant="ul" className={styles('second-column')}>
					{mockData_Footer.footerLinks.map(({ link, name }) => (
						<li key={link}>
							<Text variant="a" href={link}>
								{name}
							</Text>
						</li>
					))}
				</View>
			</View>
		</View>
	);
};

export default Footer;
