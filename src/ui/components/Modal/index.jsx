/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames/bind';
import React, { useCallback, useEffect } from 'react';
import { Portal } from 'ui/atoms/components/Portal';
import { CloseIcon } from 'ui/svgs';

import style from './index.module.scss';

const styles = classnames.bind(style);

export const Modal = (props) => {
	const {
		children,
		modalId = 'modal-root',
		overlayBg = 'transparent',
		closeButton = false,
		onMount,
		onUnmount,
		onEscKey,
		onCloseIcon,
		onOverlay,
		closeButtonIcon
	} = props;

	const closeModalOnEscapeKey = useCallback(
		(e) => {
			if (e.key === 'Esc' || e.key === 'Escape') {
				onEscKey && onEscKey();
			}
		},
		[onEscKey]
	);

	useEffect(() => {
		onMount && onMount();
		return () => {
			onUnmount && onUnmount();
		};
	}, [onMount, onUnmount]);

	useEffect(() => {
		if (onEscKey) {
			document.addEventListener('keydown', closeModalOnEscapeKey);
		}
		return () => {
			document.removeEventListener('keydown', closeModalOnEscapeKey);
		};
	}, [closeModalOnEscapeKey, onEscKey]);

	return (
		<Portal zIndex={1400} id={modalId}>
			<div
				className={styles('modal-wrapper')}
				onClick={onOverlay}
				bg={overlayBg}
				role="dialog"
				aria-modal="true">
				<div className={styles('main')}>
					{closeButton && (
						<div
							className={styles('modal-close-icon')}
							role="dialog"
							onClick={(e) => {
								e.stopPropagation();
								onCloseIcon && onCloseIcon();
							}}>
							{closeButtonIcon ? closeButtonIcon : <CloseIcon />}
						</div>
					)}
					<div className={styles('children')}>{children}</div>
				</div>
			</div>
		</Portal>
	);
};
