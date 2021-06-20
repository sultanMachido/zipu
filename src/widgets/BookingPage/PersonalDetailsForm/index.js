import React from 'react';
import {EmailField, PhoneNumberField, TextField} from '../../../components/FormField';
import './styles.scss';

function PersonalDetails() {
	return (
		<div className="personal-details-form">
			<div className="header">
				<h5>Personal Details</h5>
				<p>You can also click here to sign in if you already have an account</p>
			</div>
			<form>
				<div className="personal-details">
					<input type="text" placeholder="First Name" />
					<input type="text" placeholder="Last Name" />
					<input type="email" placeholder="Email Address" />
					<input type="tel" placeholder="Phone Number" />
				</div>
				<div className="check">
					<input type="checkbox" name="someone-else" id="some" />
					<label htmlFor="some">I’m making this booking on behalf of someone else</label>
				</div>
				<div className="passenger-details">
					<h5>Passenger Details</h5>
					<div className="row">
						<div className="each">
							<label htmlFor="select-adults">Adults</label>
							<select name="adults-number" id="select-adults">
								<option value="1">1</option>
								<option value="2">1</option>
								<option value="3">1</option>
							</select>
						</div>
						<div className="each">
							<label htmlFor="select-children">Children</label>
							<select name="children-number" id="select-children">
								<option value="1">1</option>
								<option value="2">1</option>
								<option value="3">1</option>
							</select>
						</div>
					</div>
					<div className="additional-luggage">
						<label htmlFor="">Additional Luggage</label>
						<input type="text" placeholder="Additional Luggage" />
					</div>
				</div>
			</form>
		</div>
	);
}

export default PersonalDetails;
