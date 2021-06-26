import React from 'react';
import Footer from 'ui/components/Footer';
import Nav from 'ui/components/Nav/index';

const PublicContainer = ({ children }) => {
	return (
		<section
			className="col"
			style={{
				padding: 0
			}}>
			<Nav />
			<section className="content">{children}</section>
			<Footer />
		</section>
	);
};

export default PublicContainer;
