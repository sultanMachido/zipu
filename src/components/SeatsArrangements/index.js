import React from 'react';
import { Checkbox, Row, Col } from 'antd';
import './styles.scss';

const SeatsArrangements = ({ seats, onChange }) => {

    const handleChange = (row, col, e) => {
        const { value } = e.target;
        const _seats = [...seats];

        if ([0,1].includes(value)) {
            _seats[row][col] = value === 1 ? 0 : 1;
            onChange(_seats);
        }
    }

    return (
        <div className="seatsArrangementsWrapper">
            <div style={{ width: '100%' }}>
                <Row gutter={18.81} justify="end">
                    {
                        seats.map((row, i) => {
                            return (
                                <Col>
                                    {
                                        row.map((seat, j) => {
                                            return (
                                                <div>
                                                    <Checkbox 
                                                        value={seat} 
                                                        checked={seats[i][j] === 1} 
                                                        onChange={(e) => handleChange(i, j, e)}
                                                    />
                                                </div>
                                            )
                                        })
                                    }
                                </Col>
                            ) 
                        })
                    }
                </Row>
            </div>
        </div>
    );
}

export default SeatsArrangements;