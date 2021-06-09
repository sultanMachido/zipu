import React from 'react';
import './styles.scss';
import {ReactComponent as EmptyIcon} from 'assets/svg/emptyIcon.svg';


const EmptySearch = () => {
	return (
		<section className="emptyScreenWrapper">
			<div className="emptyScreen">
				<figure>
					<EmptyIcon />
				</figure>
				<h3 className="sub-lg greyDark">No Results Found</h3>
				<p className="body-2-lg mb-lg">Try adjusting your search criteria and use filters</p>
				<button className="btn btn-brand-2">SEARCH AGAIN</button>
	     	</div>    
		</section>	
	);
};

export default EmptySearch;
