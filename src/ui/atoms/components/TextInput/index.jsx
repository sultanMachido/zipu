import classnames from 'classnames/bind';
import React, { useImperativeHandle, useRef } from 'react';
import { StarIcon } from 'ui/svgs';

import style from './index.module.scss';
import { usePasswordEye } from './usePasswordEye';

let styles = classnames.bind(style);

export const TextInput = React.forwardRef((props, ref) => {
	const {
		name = '',
		variant = 'primary',
		type = 'text',
		label,
		className = '',
		optional = true,
		optionalText = '',
		placeholder = '',
		isValid,
		errorText,
		hasFocus = false,
		onBlur,
		onChange,
		onKeyUp,
		autoComplete = 'off',
		disabled,
		id,
		tabIndex,
		isRequired,
		isReadOnly,
		height,
		textCenter,
		wrapperClass
	} = props;

	const { PasswordEye, isPasswordEyeOpen } = usePasswordEye();

	const inputRef = useRef(null);

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		}
	}));

	const hasError = isValid === false;

	const handleOnBlur = (event) => {
		onBlur?.(event);
	};

	return (
		<div className={styles('input-wrapper', { wrapper: wrapperClass })}>
			<div style={{ position: 'relative' }}>
				{label !== undefined && (
					<label className={styles('label')} variant={variant} htmlFor={id}>
						{label}
						{isRequired && <StarIcon color="red" />}
					</label>
				)}
				<div className={styles('inner-wrapper')}>
					<input
						className={styles('input', { className: className })}
						type={type}
						name={name}
						placeholder={placeholder + (optional ? optionalText : '')}
						isValid={isValid}
						{...(hasFocus ? { autoFocus: true } : {})}
						{...(onChange ? { onChange } : {})}
						{...(autoComplete ? { autoComplete } : {})}
						{...(disabled ? { disabled } : {})}
						{...(id ? { id } : {})}
						{...(tabIndex ? { tabIndex } : {})}
						{...(isRequired ? { required: true } : {})}
						{...(isReadOnly ? { isReadOnly } : {})}
						{...(height ? { height } : {})}
						{...(textCenter ? { textCenter } : {})}
						onBlur={handleOnBlur}
						onKeyUp={onKeyUp}
						ref={inputRef}
						{...props}
						{...(type === 'password' ? { type: isPasswordEyeOpen ? 'text' : 'password' } : {})}
					/>
					{type === 'password' && <PasswordEye />}
				</div>
			</div>
			{hasError && <small className={styles('input-error-message')}>{errorText}</small>}
		</div>
	);
});

TextInput.displayName = 'TextInput';
