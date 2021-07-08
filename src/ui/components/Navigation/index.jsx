import classnames from 'classnames/bind';
import { ModalContext, Modals } from 'providers/ModalProvider';
import React, { useContext, useState } from 'react';
import { Text, View } from 'ui/atoms/components/Typography';

import { AuthModal } from '../AuthModal';
import Dropdown from '../Dropdown';
import { Modal } from '../Modal';
import style from './index.module.scss';

const styles = classnames.bind(style);

const Navigation = ({ navLinks, className }) => {
	const { showModal, modals } = useContext(ModalContext);
	const [show, setShow] = useState(false);

	const handleClick = (e, modalName) => {
		if (modalName) {
			e.preventDefault();
			showModal(modalName);
		}
	};

	return (
		<View className={styles('navigation-wrapper')}>
			<View variant="ul" className={styles({ [`${className}`]: className })}>
				{navLinks.length &&
					navLinks.map(({ text, url, action: modalName, type, dropList }, index) => (
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
							{type === 'dropdown' && <Dropdown dropList={dropList} text={text} />}
						</li>
					))}
			</View>
			<AuthModal signUpProps="signup" loginProps="login" />
		</View>
	);
};

export default Navigation;
