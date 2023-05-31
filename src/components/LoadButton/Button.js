import PropTypes from 'prop-types';
import './Button.css';

export function Button ({ onClick }) {
    return (
        <button className='Button' type='Button' onClick={onClick}>Load more</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}