import React from "react";
import PropTypes from 'prop-types';

const Header = ({header}) => {
    return (
        <h2>{header}</h2>
    )
}

export default Header ;

Header.propTypes = {
    header: PropTypes.string.isRequired,
}