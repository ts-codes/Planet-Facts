import React from 'react';

const Hamburger = ({ isActive }) => {
    const iconColor = isActive
        ? 'rgba(255, 255, 255, 0.25)'
        : 'rgba(255, 255, 255)';
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill={iconColor} fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
        </svg>
    );
};

export default Hamburger;
