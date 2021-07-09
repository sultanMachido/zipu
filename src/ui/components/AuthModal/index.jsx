import { ModalContext, Modals } from 'providers/ModalProvider';
import { useContext } from 'react';

import { Modal } from '../Modal';

export const AuthModal = (props) => {
	const { signUpProps, loginProps } = props;

	const { showModal, modals } = useContext(ModalContext);

	return (
		<>
			{signUpProps && modals[Modals.signUp] && (
				<Modal
					onEscKey={() => showModal(Modals.signUp)}
					closeButton={true}
					onCloseIcon={() => showModal(Modals.signUp)}>
					<div>signup</div>
				</Modal>
			)}

			{loginProps && modals[Modals.login] && (
				<Modal
					onEscKey={() => showModal(Modals.login)}
					closeButton={true}
					onCloseIcon={() => showModal(Modals.login)}>
					<div>login</div>
				</Modal>
			)}
		</>
	);
};
