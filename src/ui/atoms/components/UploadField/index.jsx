/* eslint-disable no-unused-vars */
import classnames from 'classnames/bind';
import React, { useImperativeHandle, useRef, useState } from 'react';
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

	// const [files, setFiles] = useState([]);

	// setFiles([...label]);
	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current?.focus();
		}
	}));

	const hasError = isValid === false;

	const handleOnBlur = (event) => {
		onBlur?.(event);
	};

	const { length, ...files } = label;
	let file = Object.values(files);
	console.log(file[0].name, 'here');
	// console.log(Object.values(files), 'label');
	return (
		<div className={styles('input-wrapper', { [`${wrapperClass}`]: wrapperClass })}>
			<div className={styles('inner-wrapper')}>
				{label !== undefined && (
					<label
						className={styles('label', { [`${className}`]: className })}
						variant={variant}
						htmlFor={id}>
						{/* <h1>{file[0].name}</h1> */}
						{file.map((files, index) => {
							<span className={styles('placeholder-container')}>{files.name}</span>;
						})}
						{/* <UploadIcon /> <span>{label.name ? label.name : label}</span> */}

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
