import React from 'react';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { getTerminal } from '../../../../redux/actions/terminals/terminals.action'
import './styles.scss';


const ViewTerminal = (props) => {
  const fetchTerminal = async () => {
    return props.getTerminal(props?.location?.state?.id)
  }

  React.useEffect(() => {
    fetchTerminal()
  }, [props?.location?.state])

  return (
    <div className="viewTerminalWrapper">
      <>
        <div className="viewTerminalHeader">
          <h2>{props?.terminal?.getOneTerminlaSuccess?.data?.terminal?.name}</h2>
        </div>
        <div className="viewTerminalContent">
          <div className="viewTerminalBuses">
            <h4>Busses</h4>
            <p>234 Total Buses</p>
            <div className="viewTerminalBusList">
              {props?.terminal?.getOneTerminlaSuccess?.data?.terminal?.vehicles.map((vehicle, index) => {
                return (
                  <div className="viewTerminalBusListRow" key={vehicle.id}>
                    <div className="serialNumber">#{index + 1}</div>
                    <div className="vehicleMake">{vehicle?.vehicle_make}</div>
                    <div className="tripDestination">Benin - Lagos</div>
                    <div className="vehicleNumber">{vehicle?.plate_number}</div>
                    <div className="tripRate"><Rate value={3} /></div>
                    <div className={`vehicleStatus ${vehicle.status === 1 ? "active" : "inactive"}`}>{vehicle.status === 1 ? "Active" : "Inactive"}</div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="viewTerminalStats">
            <div className="viewTerminalBusStats">Buses</div>
            <div className="viewTerminalPassengersStats">number of passengers</div>
            <div className="viewTerminalStaffStats">Staff Management</div>
          </div>
        </div>

      </>


    </div>
  )
}

const mapStateToProps = (state) => ({
  terminal: state.terminals
});

const mapDispatchToProps = {
  getTerminal
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewTerminal);