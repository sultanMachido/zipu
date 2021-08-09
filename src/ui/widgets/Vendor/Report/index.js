import 'antd/dist/antd.css';
import './styles.scss';

import { Col, Progress, Row } from 'antd';
import CarIcon from 'assets/img/car.svg';
import CarImg from 'assets/img/toppng.svg';
import React from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import StatsCard from 'ui/components/StatsCard';
import AdminLayout from 'ui/widgets/AdminLayout';

const summaryData = [
	{
		name: 'Trips Enroute',
		value: 31
	},
	{
		name: 'Trips Completed',
		value: 8
	},
	{
		name: 'Total Bookings',
		value: 2406
	},
	{
		name: 'Active Terminals',
		value: 17
	}
];

const revenueData = [
	{
		name: 'Monthly revenue',
		value: 20000
	},
	{
		name: 'vs Last month',
		value: 18500
	},
	{
		name: 'Trips completed',
		value: 3060
	},
	{
		name: 'vs Last month',
		value: 2500
	}
];

const monthlyRefundData = [
	{
		name: 'Monthly refund',
		value: 20000
	},
	{
		name: 'Monthly refund',
		value: 20000
	}
];

const customerChartData = {
	options: {
		colors: ['#27AE60', '#637A87'],
		labels: ['Active', 'Inactive'],
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return '';
			}
		},

		legend: {
			show: false
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
					labels: {
						show: true,
						total: {
							show: true,
							label: '75%',
							formatter: () => 'Active'
						}
					}
				}
			}
		}
	},
	series: [17050, 9310],
	labels: ['Active customer', 'Inactive customer']
};

const terminalChartData = {
	options: {
		colors: ['#FFBC00', '#637A87'],
		labels: ['Active', 'Inactive'],
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return '';
			}
		},

		legend: {
			show: false
		},
		plotOptions: {
			pie: {
				donut: {
					size: '85%',
					labels: {
						show: true,
						total: {
							show: true,
							label: '75%',
							formatter: () => 'Active'
						}
					}
				}
			}
		}
	},
	series: [17050, 9310],
	labels: ['Active terminal', 'Inactive terminal']
};

const Report = () => {
	const options1 = {
		chart: {
			id: 'apexchart-example',
			background: '#fff',
			stacked: false,
			animations: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		colors: ['#476FEE', '#FFBC00'],
		dataLabels: {
			enabled: false
		},
		xaxis: {
			categories: [...Array(30).keys()].map((item, index) => index + 1),
			labels: {
				minHeight: 30,
				style: {
					cssClass: 'apexcharts-xaxis-label'
				}
			}
		},
		yaxis: {
			labels: {
				formatter: function (val) {
					return val.toLocaleString();
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.4
				// stops: [0, 90, 100]
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: ['#476FEE', '#FFBC00'],
			width: 3
		},
		grid: {
			borderColor: '#DDDEE7',
			position: 'back',
			yaxis: {
				lines: {
					// show: true
				}
			},
			xaxis: {
				lines: {
					// show: true
				}
			},
			row: {
				colors: undefined,
				opacity: 0.5
			},
			column: {
				colors: undefined,
				opacity: 0.5
			}
		},
		legend: {
			show: true,
			colors: ['#476FEE', '#FFBC00'],
			position: 'bottom',
			horizontalAlign: 'right',
			height: '100px',
			offsetY: 5,
			markers: {
				width: 12,
				height: 12,
				strokeWidth: 3,
				strokeColor: '#fff',
				fillColors: ['#476FEE', '#FFBC00'],
				radius: 12,
				customHTML: undefined,
				onClick: undefined,
				offsetX: 0,
				offsetY: 0
			}
		}
	};

	const series1 = [
		{
			name: 'Users',
			data: [
				30000, 40000, 45000, 50000, 49000, 60000, 70000, 91000, 50000, 49000, 60000, 70000, 91000,
				40000, 45000, 50000, 49000, 60000, 91000, 50000, 49000, 60000, 70000, 91000, 45000, 50000,
				49000, 60000, 70000, 91000
			]
		},
		{
			name: 'Revenue',
			data: [
				91000, 80000, 70000, 79000, 70000, 85000, 91000, 70000, 60000, 79000, 70000, 91000, 80000,
				99000, 70000, 75000, 80000, 91000, 80000, 83000, 79000, 80000, 91000, 70000, 90000, 89000,
				90000, 85000, 78000, 80000
			]
		}
	];

	const options2 = {
		chart: {
			id: 'apexchart-example',
			background: '#fff',
			stacked: false,
			animations: {
				enabled: false
			},
			toolbar: {
				show: false
			}
		},
		colors: ['#B00020'],
		dataLabels: {
			enabled: false
		},
		xaxis: {
			categories: [...Array(30).keys()].map((item, index) => index + 1),
			labels: {
				minHeight: 30,
				style: {
					cssClass: 'apexcharts-xaxis-label'
				}
			}
		},
		yaxis: {
			labels: {
				formatter: function (val) {
					return val.toLocaleString();
				}
			}
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.4
				// stops: [0, 90, 100]
			}
		},
		stroke: {
			show: true,
			curve: 'smooth',
			lineCap: 'butt',
			colors: ['#B00020'],
			width: 3
		},
		grid: {
			borderColor: '#DDDEE7',
			position: 'back',
			yaxis: {
				lines: {
					// show: true
				}
			},
			xaxis: {
				lines: {
					// show: true
				}
			},
			row: {
				colors: undefined,
				opacity: 0.5
			},
			column: {
				colors: undefined,
				opacity: 0.5
			}
		},
		legend: {
			show: true,
			colors: ['#B00020'],
			position: 'bottom',
			horizontalAlign: 'right',
			height: '100px',
			offsetY: 5,
			markers: {
				width: 12,
				height: 12,
				strokeWidth: 3,
				strokeColor: '#fff',
				fillColors: ['#B00020'],
				radius: 12,
				customHTML: undefined,
				onClick: undefined,
				offsetX: 0,
				offsetY: 0
			}
		}
	};

	const series2 = [
		{
			name: 'Refunds',
			data: [
				30000, 40000, 45000, 50000, 49000, 60000, 70000, 91000, 50000, 49000, 60000, 70000, 91000,
				40000, 45000, 50000, 49000, 60000, 91000, 50000, 49000, 60000, 70000, 91000, 45000, 50000,
				49000, 60000, 70000, 91000
			]
		}
	];

	const mostTravelledLocation = [
		{ trips: 3500, start: 'Lagos', end: 'Abuja' },
		{ trips: 2800, start: 'Benin', end: 'Lagos' },
		{ trips: 1300, start: 'Enugu', end: 'Akwa' }
	];

	const mostUsedTerminals = [
		{ trips: 3500, start: 'Jibowu' },
		{ trips: 2800, start: 'Uselu' },
		{ trips: 1300, start: 'Akwa' }
	];

	return (
		<AdminLayout>
			<div className="bookingsWrapper">
				<Row gutter={24} className="sectionRow">
					<Col span={18} className="sectionCol">
						<StatsCard title="Summary" hasDateFilter={true}>
							<Row gutter={0} className="cardsRow">
								{summaryData.map(({ name, value }, index) => {
									return (
										<Col span={6} key={index} className="cardsCol">
											<div className="divider">
												<h4>{value}</h4>
												<p className="name">{name}</p>
												<p className="seeAll">See all</p>
											</div>
										</Col>
									);
								})}
							</Row>
						</StatsCard>
					</Col>
					<Col span={6} className="sectionCol2">
						<StatsCard
							className="staffOnline"
							titleComponent={
								<div className="greenDotWrapper">
									<div className="dot greenDot"></div>
								</div>
							}>
							<div className="inner">
								<h4>7</h4>
								<p className="name">Staff Online</p>
								<p className="seeAll">See all</p>
							</div>
						</StatsCard>
					</Col>
				</Row>

				{/* Revenue Stats Section */}
				<Row gutter={0} className="sectionRow">
					<Col span={24}>
						<StatsCard title="Revenue stats" hasDateFilter={true}>
							<div className="" style={{ padding: '0px 20px', marginTop: '25px' }}>
								<Row gutter={10} className="cardsRow">
									{revenueData.map(({ name, value }, index) => {
										return (
											<Col span={6} key={index} className="cardsCol">
												<div className="cardView">
													<p className="name">{name}</p>
													<h4>
														{index < 2 && 'NGN'} {value.toLocaleString()}
													</h4>
												</div>
											</Col>
										);
									})}
								</Row>
								<div className="chartWrapper">
									<div className="areaChart">
										<Chart
											options={options1}
											series={series1}
											type="area"
											height={333}
											width="100%"
										/>
									</div>
								</div>
							</div>
						</StatsCard>
					</Col>
				</Row>

				{/* Customer + Terminals Section */}
				<Row gutter={18} className="sectionRow">
					<Col span={12} className="sectionCol">
						<StatsCard title="Customer">
							<Row
								gutter={110}
								justify="center"
								align="middle"
								className="donutRow"
								style={{ padding: '0px 20px', marginTop: '25px' }}>
								<Col span={12} className="donut">
									<Chart
										options={customerChartData.options}
										series={customerChartData.series}
										type="donut"
										width="200"
									/>
								</Col>
								<Col span={12} className="donut">
									<div className="donutLegend">
										{customerChartData.series.map((value, index) => {
											const label = customerChartData.labels[index];
											const color = customerChartData.options.colors[index];
											return (
												<div className="donutLegendItem" key={index}>
													<p>
														<span className="dot greenDot" style={{ background: color }}></span>{' '}
														{value.toLocaleString()} (35%)
													</p>
													<span>{label}</span>
												</div>
											);
										})}
										<div className="donutLegendItem">
											<p>36,050</p>
											<span>Total customers</span>
										</div>
									</div>
								</Col>
							</Row>
						</StatsCard>
					</Col>
					<Col span={12} className="donutCol">
						<StatsCard title="Terminals">
							<Row
								gutter={110}
								justify="center"
								align="middle"
								className="donutRow"
								style={{ padding: '0px 20px', margin: '25px 0px' }}>
								<Col span={12} className="donut">
									<Chart
										options={terminalChartData.options}
										series={terminalChartData.series}
										type="donut"
										width="200"
									/>
								</Col>
								<Col span={12} className="donut">
									<div className="donutLegend">
										{terminalChartData.series.map((value, index) => {
											const label = terminalChartData.labels[index];
											const color = terminalChartData.options.colors[index];
											return (
												<div className="donutLegendItem" key={index}>
													<p>
														<span className="dot greenDot" style={{ background: color }}></span>{' '}
														{value.toLocaleString()} (35%)
													</p>
													<span>{label}</span>
												</div>
											);
										})}
										<div className="donutLegendItem">
											<p>36,050</p>
											<span>Total customers</span>
										</div>
									</div>
								</Col>
							</Row>
						</StatsCard>
					</Col>
				</Row>

				{/* Vehicles Section */}
				<Row gutter={0} className="sectionRow">
					<Col span={24}>
						<StatsCard title="Vehicles">
							<div className="" style={{ padding: '0px 20px', marginTop: '25px' }}>
								<Row gutter={38} className="cardsRow">
									<Col span={6}>
										<img
											src={CarImg}
											alt="car"
											style={{ marginTop: '20px', marginBottom: '20px' }}
										/>
									</Col>
									<Col span={12} className="sectionCol">
										<Row className="sectionRow">
											<Col span={8} className="sectionCol">
												<Progress
													type="circle"
													percent={75}
													width="100px"
													strokeWidth="8"
													strokeColor="#FFBC00"
													trailColor="#FADE90"
												/>
											</Col>
											<Col span={16} className="sectionCol">
												<span>Available</span>
												<Progress percent={75} strokeColor="#FFBC00" />

												<span>Unavailable</span>
												<Progress percent={25} strokeColor="#FADE90" />
											</Col>
										</Row>
									</Col>
									<Col span={6} className="textCenter sectionCol">
										<img src={CarIcon} alt="car" />
										<p>36,890 </p>
										<span>Total number of vehicles</span>
									</Col>
								</Row>
							</div>
						</StatsCard>
					</Col>
				</Row>

				{/* Refunds Section */}
				<Row gutter={0} className="sectionRow">
					<Col span={24}>
						<StatsCard title="Refunds" hasDateFilter={true}>
							<div className="" style={{ padding: '0px 20px', marginTop: '25px' }}>
								<Row gutter={10} className="cardsRow">
									{monthlyRefundData.map(({ name, value }, index) => {
										return (
											<Col span={6} key={index} className="cardsCol">
												<div className="cardView">
													<p className="name">{name}</p>
													<h4>NGN {value.toLocaleString()}</h4>
												</div>
											</Col>
										);
									})}
								</Row>
								<div className="chartWrapper">
									<div className="areaChart">
										<Chart
											options={options2}
											series={series2}
											type="area"
											height={333}
											width="100%"
										/>
									</div>
								</div>
							</div>
						</StatsCard>
					</Col>
				</Row>

				{/*  */}
				<Row gutter={32} className="sectionRow">
					<Col span={8} className="sectionCol">
						<StatsCard hasHeader={false} hasDateFilter={false}>
							<div className="mostStats" style={{ padding: '21px 16px' }}>
								<div className="miniHeader">
									<i className="mdi mdi-map-marker" />
									<span>Most travelled location</span>
								</div>
								<div>
									{mostTravelledLocation.map(({ trips, start, end }, index) => {
										return (
											<>
												<h3>{trips.toLocaleString()} trips</h3>
												<p>
													{start} to {end}
												</p>
											</>
										);
									})}
								</div>
							</div>
						</StatsCard>
					</Col>
					<Col span={8} className="sectionCol">
						<StatsCard hasHeader={false} hasDateFilter={false}>
							<div className="mostStats" style={{ padding: '21px 16px' }}>
								<div className="miniHeader">
									<i className="mdi mdi-account-multiple" />
									<span>Most used terminals</span>
								</div>
								<div>
									{mostUsedTerminals.map(({ trips, start }, index) => {
										return (
											<>
												<h3>{trips.toLocaleString()} trips</h3>
												<p>{start}</p>
											</>
										);
									})}
								</div>
							</div>
						</StatsCard>
					</Col>
					<Col span={8} className="sectionCol">
						<StatsCard hasHeader={false} hasDateFilter={false}>
							<div className="mostStats" style={{ padding: '21px 16px' }}>
								<div className="miniHeader">
									<i className="mdi mdi-gift" />
									<span>Rewards/Promo</span>
								</div>
								<div>
									<>
										<h3>MYZIPULIVE</h3>
										<p>
											20% valid for 5 days <br /> 12 terminals selected
										</p>
									</>
								</div>
								<Link to="/reports/promo-codes" className="badge">
									{' '}
									<span>Rewards/promo settings</span>{' '}
								</Link>
							</div>
						</StatsCard>
					</Col>
				</Row>
			</div>
		</AdminLayout>
	);
};

export default Report;
