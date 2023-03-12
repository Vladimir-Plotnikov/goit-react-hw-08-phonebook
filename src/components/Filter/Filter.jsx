import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selector";
    
export function Filter(){

    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    

    const handleChange = e => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }


    return (
        <div className='FindContact'>
        <h3>Find contact by name</h3>
            <input 
                type="text"
                name="filter"
                className='SortInput'
                value={filter}
                onChange={handleChange}
                placeholder='search'
            />
        </div>
    );
}