/* eslint-disable no-unused-vars */
import classnames from 'classnames/bind';
import React, { useImperativeHandle, useRef } from 'react';
import { HTMLStarIcon } from 'ui/svgs';

import style from './index.module.scss';

let styles = classnames.bind(style);

export const SelectField = React.forwardRef((props, ref) => {
	const {
		name = '',
		variant = 'primary',
		label,
		className = '',
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
		wrapperClass,
		labelClass,
		options
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
		<div className={styles('select-wrapper', { [`${wrapperClass}`]: wrapperClass })}>
			{label !== undefined && (
				<label
					className={styles('label', { [`${labelClass}`]: labelClass })}
					variant={variant}
					htmlFor={id}>
					{label}
					{/* {isRequired && <HTMLStarIcon color="red" />} */}
				</label>
			)}
			<div className={styles('inner-wrapper')}>
				<select
					className={styles('select', { [`${className}`]: className })}
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
					isvalid={isValid}
					onBlur={handleOnBlur}
					onKeyUp={onKeyUp}
					ref={inputRef}
					name={name}
					{...props}>
					<option disabled selected hidden value="" className={styles('disabled')}>
						{placeholder}
					</option>
					{options.map((option) => (
						<option key={option.name} value={option.value ? option.value : option.name}>
							{option.name}
						</option>
					))}
				</select>
			</div>
			{hasError && <small className={styles('input-error-message')}>{errorText}</small>}
		</div>
	);
});

SelectField.displayName = 'SelectField';
