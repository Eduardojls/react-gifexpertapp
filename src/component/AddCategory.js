import { useState } from 'react'
import PropTypes from 'prop-types';

// Where user enter through form the gif topic they want to see<
export const AddCategory = ( {setCategories} ) => {

    // useState Hook: Store and edit the content written in the form
    const [inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats]);
        };
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired       
};

