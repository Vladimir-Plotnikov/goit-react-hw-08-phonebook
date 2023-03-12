import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactItem({ contact: { id, name, number } }) {
    const dispatch = useDispatch();
    return (
        <li>
            <span>{name}</span>
            <span className='TelNumbers'>{number}</span>
            <button type='button' onClick={()=>dispatch(deleteContact(id))}>Delete</button>
        </li>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
};