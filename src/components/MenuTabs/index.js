import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const menuList = [
    {
        title: "Bookings",
        subText: "Management",
        route: "/bookings"
    },
    {
        title: "Passengers",
        subText: "Management",
        route: "/passengers"
    },
    {
        title: "Car Listing",
        subText: "Car/Bus Management",
        route: "/car-listing"
    },
    {
        title: "Trip",
        subText: "Management",
        route: "/trip-management"
    },
    {
        title: "Staff",
        subText: "Management",
        route: "/staff"
    },
    {
        title: "Reports",
        subText: "Analytics system",
        route: "/reports"
    },
    {
        title: "Company",
        subText: "Details and settings",
        route: "/company"
    },
    {
        title: "Terminals",
        subText: "Management",
        route: "/terminals"
    }
]

const MenuTabs = ({ visible }) => {
    const { pathname } = useLocation();
    return visible && (
        <div className="menuTabs">
            {
                menuList.map(({ title, subText, route }) => {
                    return (
                        <Link to={route}>
                            <div className={`tab-item ${pathname === route ? 'active' : ''}`}>
                                <h5>{title}</h5>
                                <span>{subText}</span>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default MenuTabs;