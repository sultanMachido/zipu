import React from 'react';
import {Form, Progress, message} from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {useQuery} from '../../../utils/URLSearchParam';
import {
	ReservationWindowField,
	UploadCACDocsField,
	UploadPermitField,
	SubmitButton
} from '../../../components/FormField';
import './PermitSubmission.scss';
import {submitPermission} from '../../../redux/actions/permitSubmission/permitSubmission.actions';

const PermitSubmission = props => {
	const inputSize = 'large';
	const [form] = Form.useForm();
	let query = useQuery();

	const onFinishPermitSubmission = async values => {
		try {
			const messageKey = 'permitSubmissionResponse';
			const key = 'permitSubmission';
			const tryPermitSubmission = await props.submitPermission({...values});

			if (tryPermitSubmission.permitSubmissionStatus) {
				message.success({
					content: tryPermitSubmission.message,
					key: messageKey,
					duration: 10
				});
				query.set('step', 5);
				props.history.push(`/register?step=${query.get('step')}`);
			} else {
				return message.error({
					content: tryPermitSubmission?.message['reservation_window'][0],
					key,
					duration: 2
				});
			}
		} catch (error) {
			console.log({error}, 'error');
		}
	};

	return (
		<>
			<div className="permitSubmissionHeader">
				<Progress
					type="circle"
					width={60}
					percent={75}
					format={percent => `${(percent / 100) * 4} of 4`}
					strokeColor="#ffbc00"
					strokeWidth={8}
					trailColor="#f8eac2"
				/>
				<div className="permitSubmissionText">
					<h1>CAC and Permit Submission</h1>
					<p>Next: Business details</p>
				</div>
			</div>

			<div className="permitSubmissionForm">
				<Form
					form={form}
					onFinish={onFinishPermitSubmission}
					hideRequiredMark
					layout="vertical"
					style={{width: '100%'}}
				>
					<div className="permitSubmitInputWrapper">
						{ReservationWindowField(inputSize, false, true)}
						{UploadCACDocsField()}
						{UploadPermitField()}
					</div>
					<div className="btnWrapper">
						{SubmitButton(
							'NEXT',
							null,
							props?.permitSubmission?.permitSubmissionLoading
						)}
					</div>
				</Form>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	return {
		permitSubmission: state.permitSubmission
	};
};

const mapDispatchToProps = {
	submitPermission
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PermitSubmission));
