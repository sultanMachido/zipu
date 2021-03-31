import React from 'react';
import './styles.scss'
import TableWrapper from '../../../components/TableWrapper';
import { BiUser } from 'react-icons/all';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { passengersColumns } from '../../../utils/constants/TableColumns/passengersTableColumn';
import { PassengersList } from '../../../utils/constants/PassengersList';
import { OutlinedButton } from '../../../components/FormField'

import EmptyScreen from '../../../components/EmptyScreen';

const Passengers = (props) => {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  const columns = passengersColumns();

  const handleClick = (passenger) => {
    console.log({ passenger })
    props.history.push({ pathname: `/passengers/${passenger.id}`, state: passenger })
  }

  const data = PassengersList.map((passenger) => {
    return {
      ...passenger,
      action: OutlinedButton('View Passenger', () => handleClick(passenger))
    }
  })

  return (
    <div className="passengersWrapper">
      <div className="passengersHeader">
        <h2>Passenger Management</h2>

        <div className="passengersSearch">Serch</div>
      </div>

      <TableWrapper
        columns={columns}
        dataSource={data}
        loading="true"
        rowKey={`id}`}
        locale={
          <EmptyScreen
            icon={<BiUser />}
            title="List is empty"
            subText="When you create a passenger profile, they will appear here"
            buttonText="ADD PASSENGER"
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
    </div>
  )
}

export default Passengers