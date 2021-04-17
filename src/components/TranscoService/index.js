import React from 'react';
import './styles.scss';

const TranscoService = ({ transcoService }) => {
  return (
    <div className="transcoServiceWrapper" key={transcoService.id}>
      <div className="titleAndContent">
        <h1>{transcoService.title}</h1>
        <p>{transcoService.content}</p>
      </div>
      <img src={transcoService.carImage} className={transcoService.id === 2 && "hire"} />
    </div>
  )
}

export default TranscoService;