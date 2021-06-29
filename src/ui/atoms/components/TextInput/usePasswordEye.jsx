import classnames from 'classnames/bind';
import { useState } from 'react';
import { EyeClosed } from 'ui/svgs/EyeClosed';
import { EyeOpen } from 'ui/svgs/EyeOpen';

import style from './index.module.scss';

let styles = classnames.bind(style);

export const usePasswordEye = () => {
	const [isEyeOpen, setIsEyeOpen] = useState(false);

	const IconButton = () => (
		<button className={styles('password-button')} onClick={() => setIsEyeOpen((prev) => !prev)}>
			{isEyeOpen && <EyeOpen />}
			{!isEyeOpen && <EyeClosed />}
		</button>
	);

	return { PasswordEye: IconButton, isPasswordEyeOpen: isEyeOpen };
};

/**
 * USAGE:
 * const { PasswordEye, isPasswordEyeOpen } = usePasswordEye();
 *
 * return (
 *  <InputWrapper>
 *    <input type={isPasswordEyeOpen ? 'text' : 'password'}>
 *    <PasswordEye />
 *  <InputWrapper>
 * )
 */
