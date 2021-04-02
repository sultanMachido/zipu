import React from 'react';
import { Rate, Progress, Tooltip } from 'antd';
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
            <div className="viewTerminalBusStats">
              <p className="title">Buses</p>
              <div className="chartsWrapper">
                <div className="circleChart">
                  <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress
                      type="circle"
                      percent={80}
                      strokeColor="#27AE60"
                      width={80}
                      strokeWidth={8}
                      strokeLinecap="square"
                      format={() => <>
                        <p className="formatTitle">235</p>
                        <p className="formatText">Total</p>
                      </>}
                    />
                  </Tooltip>
                </div>
                <div className="linearChart">
                  <div className="active">
                    <Tooltip title="3 done / 3 in progress / 4 to do">
                      <Progress percent={80} status="active" strokeColor="#27AE60" />
                    </Tooltip>
                  </div>
                  <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress percent={20} status="inactive" strokeColor="rgba(39, 174, 96, 0.2)" />
                  </Tooltip>
                </div>
              </div>

            </div>
            <div className="viewTerminalPassengersStats">
              <p className="title">Average number of passengers</p>
              <div className="passengersDetails">
                <div className="thisMonth">
                  <h3>17,057</h3>
                  <p>Total this month</p>
                </div>
                <div className="lastMonth">
                  <h3>17,057</h3>
                  <p>Vs last month</p>
                </div>
                <div className="allTime">
                  <h3>170,057</h3>
                  <p>All Time Passengers</p>
                </div>
              </div>
            </div>
            <div className="viewTerminalStaffStats">
              <p className="title">Staff Management</p>
              <div className="staffStats">
                <div className="circleChart">
                  <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress
                      type="circle"
                      percent={90}
                      strokeColor="#0077CE"
                      width={80}
                      strokeWidth={8}
                      strokeLinecap="square"
                      format={() => <>
                        <p className="formatTitle">235</p>
                        <p className="formatText">Total</p>
                      </>} />
                  </Tooltip>
                </div>
                <div className="linearChart">
                  <div className="active">
                    <Tooltip title="3 done / 3 in progress / 4 to do">
                      <Progress percent={90} status="active" strokeColor="#0077CE" />
                    </Tooltip>
                  </div>
                  <Tooltip title="3 done / 3 in progress / 4 to do">
                    <Progress percent={10} status="inactive" strokeColor="#FFBC00" />
                  </Tooltip>
                </div>
              </div>
            </div>
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