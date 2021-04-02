import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Search from './Search';
import Cards from './Cards';

const WrapperDiv = styled.div`
    display: flex;
`;

function Main() {
    return (
        <div className='member-main'>
            <h1>Secret Family Recipes</h1>
            <div className='main-pic'>
                <img src="https://unsplash.it/200/200" alt="delicious meal" />
            </div>
            <WrapperDiv>
                <Button
                    href='#'
                    size='large'
                    variant='contained'
                    color='primary'>
                    Add New Recipe
                </Button>
                <Button
                    href='/recipe'
                    size='large'
                    variant='contained'
                    color='primary'>
                    View All Recipes
                </Button>
                <div className='search-div'>
                    <Search />
                </div>
            </WrapperDiv>
        </div>
    )
}

export default Main