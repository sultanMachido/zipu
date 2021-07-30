/* eslint-disable no-unused-vars */
import classnames from 'classnames/bind';
import React, { useImperativeHandle, useRef } from 'react';
import { HTMLStarIcon } from 'ui/svgs';
import { UploadIcon } from 'ui/svgs/UploadIcon';

import style from './index.module.scss';

let styles = classnames.bind(style);

export const UploadField = React.forwardRef((props, ref) => {
	const {
		name = '',
		variant = 'primary',
		label,
		className = '',
		isValid,
		errorText,
		hasFocus = false,
		onBlur,
		onChange,
		onKeyUp,
		disabled,
		id,
		tabIndex,
		isRequired,
		isReadOnly,
		height,
		textCenter,
		wrapperClass
	} = props;

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
		<div className={styles('input-wrapper', { [`${wrapperClass}`]: wrapperClass })}>
			<div className={styles('inner-wrapper')}>
				{label !== undefined && (
					<label
						className={styles('label', { [`${className}`]: className })}
						variant={variant}
						htmlFor={id}>
						<span className={styles('placeholder-container')}>
							<UploadIcon /> <span>{label.name ? label.name : label}</span>
						</span>
						{/* {isRequired && <HTMLStarIcon color="red" />} */}
					</label>
				)}
				<input
					className={styles('input')}
					type="file"
					name={name}
					isvalid={isValid}
					{...(hasFocus ? { autoFocus: true } : {})}
					{...(onChange ? { onChange } : {})}
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
				/>
			</div>
			{hasError && <small className={styles('input-error-message')}>{errorText}</small>}
		</div>
	);
});

UploadField.displayName = 'UploadField';
