import React from 'react';
import { Tabs } from 'antd';
import './styles.scss';
import { SubmitButton, SubmitButtonSecondary, OutlinedButton } from '../../../../components/FormField';
import { passengersBookingsColumns } from '../../../../utils/constants/TableColumns/passengerBookingsTableColumn';
import TableWrapper from '../../../../components/TableWrapper';
import EmptyScreen from '../../../../components/EmptyScreen';
import { BiUser } from 'react-icons/all';
import { connect } from 'react-redux';
import { format } from 'date-fns';

import passengeImg from '../../../../assets/img/passenger.png';

const passengerBookings = [
  {
    id: "398HSSTJLOIJEH",
    passengerName: "Oluwaleke Ojo",
    name: "Car Rental",
    email: "oluwaleke@gmail.com",
    type: "with driver",
    status: 1,
    vehicleName: "Toyota camry 2020",
    vehicleNumber: "AGR 2345 EF",
    departure: "Lagos",
    arrival: "Benin",
    start: "10/20/2020",
    end: "11/20/2020"
  },
  {
    id: "398HSSTJLOIJEH",
    passengerName: "Oluwaleke Ojo",
    name: "Trip",
    email: "oluwaleke@gmail.com",
    type: "booking",
    status: 2,
    vehicleName: "Toyota camry 2020",
    vehicleNumber: "AGR 2345 EF",
    departure: "Lagos",
    arrival: "Benin",
    start: "10/20/2020",
    end: "11/20/2020"
  }
];

const { TabPane } = Tabs;

const ViewPassenger = (props) => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);


  const columns = passengersBookingsColumns();

  const data = passengerBookings.map((passengerBooking) => {
    return {
      ...passengerBooking,
      status: passengerBooking.status === 1 ? <span className="upcoming">Upcoming</span> : <span className="completed">Completed</span>,
      action: OutlinedButton('View')
    }
  })

  return (
    <div className="viewPassengerWrapper">
      <h1>Oluwaleke Ojo</h1>

      <div className="passengerInfo">
        <div className="passengerBio">
          <div className="passengerFullName">
            <p className="title">Full Name</p>
            <p className="value">Mr Leke Ojo</p>
          </div>

          <div className="passengerEmail">
            <p className="title">Email Address</p>
            <p className="value">leke@gmail.com</p>
          </div>

          <div className="passengerPhoneNumber">
            <p className="title">Phone Number</p>
            <p className="value">08065842442</p>
          </div>

          <div className="passengerNationality">
            <p className="title">Nationality</p>
            <p className="value">Nigerian</p>
          </div>

          <div className="passengerGender">
            <p className="title">Gender</p>
            <p className="value">Male</p>
          </div>

          <div className="passengerAddress">
            <p className="title">Address</p>
            <p className="value">19, Ishola Bello street, Akiode, Ikeja</p>
          </div>

          <div className="btnWrapper">
            <div className="editBtn">{SubmitButton('Edit')}</div>
            <div className="saveBtn">{SubmitButtonSecondary('Save')}</div>
          </div>

        </div>
        <div className="passengerDocs">
          <div className="passengerPhoto">
            <img alt="passenger photo" src={passengeImg} />
          </div>
          <div className="passengerSupportingDocs">
            <h2>Supporting Documents</h2>
            <div className="passengerGovID">
              <p className="title">Gov. ID</p>
              <a href="#" className="value">img-112232.pdf</a>
            </div>

            <div className="passengerGovID">
              <p className="title">Insurance Doc.</p>
              <p className="value">{OutlinedButton('Upload')}</p>
            </div>

            <div className="passengerGovID">
              <p className="title">Proof of Residency</p>
              <p className="value">{OutlinedButton('Upload')}</p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="passengerBookingsAndPayments">
        <Tabs defaultActiveKey="1" type="card" size="small">
          <TabPane tab="Bookings" key="1">
            <TableWrapper
              columns={columns}
              dataSource={data}
              loading="true"
              rowKey={`id}`}
              locale={
                <EmptyScreen
                  icon={<BiUser />}
                  title="List is empty"
                  subText="When you have bookings, they will appear here"
                  buttonText="ADD BOOKING"
                />
              }
              pagination={{
                showSizeChanger: true,
                total: 20,
                position: 'both',
                onShowSizeChange: (current, size) => {
                  setPage(current);
                  setPageSize(size);
                },
                onChange: (page, pageSize) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
                pageSizeOptions: ['10', '15', '20', '25'],
                showTotal: (total, range) =>
                  `${range[0]} - ${range[1]} of ${total} record(s)`
              }}
            />
          </TabPane>
          <TabPane tab="Payments" key="2">
            Payments Table
          </TabPane>
        </Tabs>
      </div>

    </div>
  )
}

export default ViewPassenger