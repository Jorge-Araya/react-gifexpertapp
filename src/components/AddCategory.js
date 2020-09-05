import React from 'react'
import { useState } from 'react'

import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if( inputValue.length > 2 ) {
            setCategories( cats => [ inputValue, ...cats])
            //console.log('Submit hecho');
            setInputValue('')
        }

    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form onSubmit={ handleSubmit}>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

