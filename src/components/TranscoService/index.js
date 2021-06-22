import React from 'react';
import './styles.scss';

const TranscoService = ({transcoService}) => {
	return (
		<div className="transcoServiceWrapper" key={transcoService.id}>
			<div className="titleAndContent">
				<h1 className="sub-lg brand-1">{transcoService.title}</h1>
				<p className="caption-lg brand-1">{transcoService.content}</p>
			</div>
			<div
				className="imgBG"
				style={{
					backgroundImage: `url(${transcoService.carImage})`,
					backgroundRepeat: ' no-repeat',
					backgroundPosition: 'center right',
					height: '30rem'
				}}
      >
        <button className="btn btn-brand-2">SHOW TRIPS</button>
      </div>
		</div>
	);
};

export default TranscoService;