import React from 'react';
import Button from '@material-ui/core/Button'

const Search = () => (
    <form action='/' method='get'>
        <label htmlFor='recipe-search'>
            <span className='visually-hidden'>Search our recipes:</span>
        </label>
        <input
            type='text'
            id='recipe-search'
            placeholder='Type ingredient, name, etc'
            name='search'
        />
        <Button 
            type='submit'
            href='#' 
            size='large'
            variant='contained' 
            color='primary'>
            Search
        </Button>
    </form>
)

export default Search