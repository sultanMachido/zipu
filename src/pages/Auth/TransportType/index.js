import React from 'react';
import {Form, Progress, Row, Col, Checkbox, message} from 'antd';
import {MdAirlineSeatReclineExtra, AiFillCar, MdDirectionsBus} from 'react-icons/all';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {CompanySizeField, SubmitButton} from '../../../components/FormField';
import './TransportType.scss';
import {selectTransportType} from '../../../redux/actions/transportType/transportType.actions';
import {useQuery} from '../../../utils/URLSearchParam';

const inputSize = 'large';

const TransportType = props => {
	const [form] = Form.useForm();
	const [value, setValue] = React.useState([]);
	let query = useQuery();

	const chekboxOptions = [
		{
			id: 1,
			label: 'Vehicle hire',
			icon: <MdDirectionsBus className="checkIcon" />,
			value: 'vehicle hire'
		},
		{
			id: 2,
			label: 'Seat booking',
			icon: <MdAirlineSeatReclineExtra className="checkIcon" />,
			value: 'seat booking'
		},
		{
			id: 3,
			label: 'Vehicle renting',
			icon: <AiFillCar className="checkIcon" />,
			value: 'vehicle renting'
		}
	];

	const onChange = checkedValues => {
		setValue(checkedValues);
	};

	const onFinish = async values => {
		const payload = {operations: value, company_size: values.company_size};
		try {
			const messageKey = 'selectTransportTypeResponse';
			const key = 'selectTransportType';
			const trySelectTransportType = await props.selectTransportType(payload);

			if (trySelectTransportType.transportTypeStatus) {
				message.success({
					content: trySelectTransportType.message,
					key: messageKey,
					duration: 10
				});
				query.set('step', 4);
				props.history.push(`/register?step=${query.get('step')}`);
			} else {
				return message.error({content: trySelectTransportType.message, key, duration: 2});
			}
		} catch (error) {
			console.log({error}, 'error');
		}
	};

	return (
		<>
			<div className="transportTypeHeader">
				<Progress
					type="circle"
					width={60}
					percent={50}
					format={percent => `${(percent / 100) * 4} of 4`}
					strokeColor="#ffbc00"
					strokeWidth={8}
					trailColor="#f8eac2"
				/>
				<div className="transportTypeText">
					<h1>Transport type</h1>
					<p>Next: CAC and permit submission</p>
				</div>
			</div>

			<div className="transportTypeform">
				<Form form={form} onFinish={onFinish} hideRequiredMark layout="vertical">
					<Form.Item
						name="transportType"
						rules={[{required: true, message: 'Select atleast one option'}]}
					>
						<div className="typeOfOperation">
							<Checkbox.Group className="checkboxWrapper" onChange={onChange}>
								<Row className="rowContainer">
									{chekboxOptions.map(option => {
										return (
											<Col key={option.id}>
												<Checkbox
													value={option.value}
													className={`checkboxBtnItem ${
														value.includes(option.value)
															? 'checked'
															: ''
													}`}
												>
													{option.icon}
													<p>{option.label}</p>
												</Checkbox>
											</Col>
										);
									})}
								</Row>
							</Checkbox.Group>
						</div>
					</Form.Item>
					<div className="companySizeInputWrapper">
						{CompanySizeField(inputSize, true, '0')}
					</div>
					<div className="btnWrapper">
						{SubmitButton('NEXT', null, props?.transportTypes?.transportTypeLoading)}
					</div>
				</Form>
			</div>
		</>
	);
};

const mapStateToProps = state => {
	return {
		transportTypes: state.transportTypes
	};
};

const mapDispatchToProps = {
	selectTransportType
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TransportType));
