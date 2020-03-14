import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => <div>
    my component {name} <br />
    {children} <br />
    my favorite number: {favoriteNumber}
    </div>;

MyComponent.defaultProps = {
    name: "default name"
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;

