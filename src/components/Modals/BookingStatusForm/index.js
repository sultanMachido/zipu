import React from 'react';
import {Modal, Form} from 'antd';
import {SubmitButton, BookingNumberField} from '../../../components/FormField';
import './styles.scss';

function BookingStatusForm(props) {
	const [form] = Form.useForm();
	const {visible, handleCancel, onFinish, title, text} = props;
	return (
		<Modal
			visible={visible}
			onCancel={handleCancel}
			footer={null}
			title={null}
			centered
			width="60%"
			className="booking-form-wrapper"
		>
			<Form
				form={form}
				onFinish={onFinish}
				hideRequiredMark
				layout="vertical"
				className="form-container"
			>
				<h2 className="modalTitle">{title}</h2>
				<p className="modalText">{text}</p>
				<BookingNumberField placeholder="Your Booking Number" />
				{SubmitButton('CHECK STATUS')}
			</Form>
		</Modal>
	);
}

export default BookingStatusForm;
