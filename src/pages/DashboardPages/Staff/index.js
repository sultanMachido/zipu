import React from 'react';
import EmptyScreen from '../../../components/EmptyScreen';
import TableWrapper from '../../../components/TableWrapper';
import './styles.scss';

import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/all'

const Staff = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (_, { name, email }) => (
                <>
                    <p>{name}</p>
                    <span>{email}</span>
                </>
            )
        },
        {
            title: 'Station',
            dataIndex: 'station',
            key: 'station',
            render: (_, { state, terminal }) => (
                <>
                    <p>{state}</p>
                    <span>{terminal}</span>
                </>
            )
        },
        {
            title: 'Position/Access',
            dataIndex: 'position',
            key: 'position',
            render: (_, { position, access }) => (
                <>
                    <p>{position}</p>
                    <span>{access}</span>
                </>
            )
        },
        {
            title: 'Date created',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt) => (
                <>
                    <p>{createdAt}</p>
                    <span>&nbsp;</span>
                </>
            )
        },
        {
            title: 'Login activity',
            dataIndex: 'loginActivity',
            key: 'loginActivity',
            render: (_, { loginActivity, logsCount }) => (
                <>
                    <p>{loginActivity}</p>
                    <span>{logsCount} log{logsCount !== 1 ? 's' : ''} this month</span>
                </>
            )
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <div className="status">{status}</div>
            )
        },
        {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            render: () => (
                <button className="view">Edit access</button>
            )
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Oluwaleke Ojo',
            email: 'lekeojo@gmail.com',
            state: 'Lagos',
            terminal: 'Yaba terminal',
            position: 'Head of Patrol',
            access: '8 modules',
            createdAt: '10/20/2020',
            loginActivity: 'Online',
            logsCount: 8,
            status: 'Active'
        },
        {
            key: '1',
            name: 'Oluwaleke Ojo',
            email: 'lekeojo@gmail.com',
            state: 'Lagos',
            terminal: 'Yaba terminal',
            position: 'Head of Patrol',
            access: '8 modules',
            createdAt: '10/20/2020',
            loginActivity: 'online',
            logsCount: 8,
            status: 'Active'
        },
        {
            key: '1',
            name: 'Oluwaleke Ojo',
            email: 'lekeojo@gmail.com',
            state: 'Lagos',
            terminal: 'Yaba terminal',
            position: 'Head of Patrol',
            access: '8 modules',
            createdAt: '10/20/2020',
            loginActivity: 'online',
            logsCount: 8,
            status: 'Active'
        },
        {
            key: '1',
            name: 'Oluwaleke Ojo',
            email: 'lekeojo@gmail.com',
            state: 'Lagos',
            terminal: 'Yaba terminal',
            position: 'Head of Patrol',
            access: '8 modules',
            createdAt: '10/20/2020',
            loginActivity: 'online',
            logsCount: 8,
            status: 'Active'
        },
        {
            key: '1',
            name: 'Oluwaleke Ojo',
            email: 'lekeojo@gmail.com',
            state: 'Lagos',
            terminal: 'Yaba terminal',
            position: 'Head of Patrol',
            access: '8 modules',
            createdAt: '10/20/2020',
            loginActivity: 'online',
            logsCount: 8,
            status: 'Active'
        }
    ]

    return (
        <div className="bookingsWrapper">
            <Row className="tableHeader">
                <Col span={12}>
                    <h5 className="title">Staff Management</h5>
                </Col>
                <Col span={12} className="text-right">
                    <Link to="/staff/add">
                        <Button type="primary">ADD NEW STAFF</Button>
                    </Link>
                </Col>
            </Row>
            {
                data && data.length > 0
                    ? <TableWrapper
                        columns={columns}
                        dataSource={data}
                    />
                    : <EmptyScreen
                        icon={<BiUser />}
                        title="List is empty"
                        subText="When you create a staff profile, they will appear here"
                        buttonText="CREATE STAFF PROFILE"
                    />
            }
        </div>
    )
}

export default Staff