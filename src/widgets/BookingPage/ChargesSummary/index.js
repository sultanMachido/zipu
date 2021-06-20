import React, {useMemo} from 'react';
import './styles.scss';

function ChargesSummary(props) {
	const {itemsSummary, extraNote, policy} = props;
	const total = useMemo(() => {
		const priceTotal = itemsSummary.map(item => item.price);
		return priceTotal.length ? priceTotal.reduce((a, b) => a + b).toLocaleString() : 0;
	}, [itemsSummary]);
	return (
		<div className="charges-summary-container">
			<div className="summary-card">
				<div className="title">
					<h2>Summary of Charges</h2>
					<small>Here is your payement breakdown</small>
				</div>
				<div className="table">
					<ul>
						{itemsSummary.length &&
							itemsSummary.map(summary => (
								<li>
									<span className="desc">{summary.desc}</span>
									<span className="price">{summary.price}</span>
								</li>
							))}
						<li className="total">
							<span className="desc">Total Cost</span>
							<span className="price">₦ {total}</span>
						</li>
						<small>(Includes taxes and fees)</small>
					</ul>
				</div>
				<p className="extra-note">{extraNote}</p>
				<div className="button-container">
					<button>Proceed to payment</button>
				</div>
			</div>
			<div className="policy-card">
				<h6>{policy.title}</h6>
				<p>{policy.desc}</p>
			</div>
		</div>
	);
}

export default ChargesSummary;
