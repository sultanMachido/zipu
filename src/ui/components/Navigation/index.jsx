import classnames from 'classnames/bind';
import { ModalContext } from 'providers/ModalProvider';
import React, { useContext } from 'react';
import { Text, View } from 'ui/atoms/components/Typography';

import { AuthModal } from '../AuthModal';
import Dropdown from '../Dropdown';
import style from './index.module.scss';

const styles = classnames.bind(style);

const Navigation = ({ navLinks, className }) => {
	const { showModal } = useContext(ModalContext);

	const handleClick = (e, modalName) => {
		if (modalName) {
			e.preventDefault();
			showModal(modalName);
		}
	};

	return (
		<View className={styles('navigation-wrapper', { ['open']: className })}>
			<View variant="ul" className={styles('nav')}>
				{navLinks.length &&
					navLinks.map(({ text, url, action: modalName, type, dropList, imgUrl }, index) => (
						<li key={index}>
							{type !== 'dropdown' && (
								<Text
									variant={url ? 'NavLink' : 'p'}
									fontWeight="400"
									to={url}
									className={styles('links')}
									onClick={!url && ((e) => handleClick(e, modalName))}>
									{url && text}

									{modalName && (
										<View className={styles('button-link', { [`${modalName}`]: modalName })}>
											<View variant="button">{text}</View>
										</View>
									)}
								</Text>
							)}
							{type === 'dropdown' && <Dropdown dropList={dropList} text={text} imgUrl={imgUrl} />}
						</li>
					))}
			</View>
			<AuthModal signUpProps="signup" loginProps="login" />
		</View>
	);
};

export default Navigation;
