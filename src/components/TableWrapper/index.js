import React from 'react';
import { Table } from 'antd';
import './styles.scss';

const TableWrapper = ({ dataSource, columns }) => {
    return (
        <div className="tableWrapper">
            <Table 
                dataSource={dataSource} 
                columns={columns} 
            />
            {/* <Row className="tableThead">
            {
                columns.map(({ title }) => {
                    return (
                        <Col span={4}>{title}</Col>
                    )
                })
            }
            </Row>
            {
                dataSource.map((item) => {
                    return (
                        <Row className="tableTbody">
                            {
                                columns.map((column) => {
                                    return column.render || (
                                        <Col span={3}>
                                            {item[column.dataIndex]}
                                        </Col>
                                    )
                                })  
                            }
                        </Row>
                    )
                })
            } */}
        </div>
    )
}

export default TableWrapper;