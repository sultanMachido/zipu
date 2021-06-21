import React from 'react';

import Nav from 'components/Nav/index';
import Footer from 'components/Footer';

const PublicContainer = ({children}) => {
	return (
		<section
			className="col"
			style={{
				padding: 0
			}}
		>
			<Nav />
			<section className="content">{children}</section>
			<Footer />
		</section>
	);
};

export default PublicContainer;
