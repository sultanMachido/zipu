import React from 'react';

export const passengersBookingsColumns = () => [
  {
    title: 'Trip ID',
    dataIndex: 'tripId',
    key: 'tripId',
    render: (_, { passengerName, id }) => (
      <>
        <p>{passengerName}</p>
        <span>{id}</span>
      </>
    )
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, { status }) => (
      <>
        <p>{status}</p>
      </>
    )
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (_, { type, name }) => (
      <>
        <p>{name}</p>
        <span>{type}</span>
      </>
    )
  },
  {
    title: 'Vehicle',
    dataIndex: 'Vehicle',
    key: 'Vehicle',
    render: (_, { vehicleName, vehicleNumber }) => (
      <>
        <p>{vehicleName}</p>
        <span>{vehicleNumber}</span>
      </>
    )
  },
  {
    title: 'Departure/Arrival',
    dataIndex: 'completedTrips',
    key: 'completedTrips',
    render: (_, { departure, arrival }) => (
      <>
        <p>{departure}</p>
        <span>{arrival}</span>
      </>
    )
  },
  {
    title: 'Start/End date',
    dataIndex: 'date',
    key: 'date',
    render: (_, { start, end }) => (
      <>
        <p>{start}</p>
        <span>{end}</span>
      </>
    )
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action'
  }
];
