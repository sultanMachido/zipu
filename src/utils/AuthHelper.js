import React, { Component } from 'react';
import { Redirect }         from 'react-router-dom';

export function Guest(WrappedComponent,) {
    const ACCESS_TOKEN = window.localStorage.getItem("zipuJWTToken");
    return class extends Component {
        render() {
            return (!ACCESS_TOKEN) ? <WrappedComponent {...this.props } /> : <Redirect to="/bookings" />
        }
    };
}

export function Private(WrappedComponent) {
    const ACCESS_TOKEN = window.localStorage.getItem("zipuJWTToken");
    return class extends Component {
        render() {
            return (ACCESS_TOKEN) ? <WrappedComponent {...this.props } /> : <Redirect to="/login" />
        }
    };
}