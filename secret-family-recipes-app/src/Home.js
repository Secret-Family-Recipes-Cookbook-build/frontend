import React from 'react';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'

// Styled Components
const WrapperDiv = styled.div`
    display: flex;
`;



export default function Home() {
    // const history = useHistory();

    // const recipeAdd = () => {
    //     history.push('/recipe')
    // };

    // const loginForm = () => {
    //     history.push('/login')
    // };

    return (
        <div>
            <div className='top-div'>
            {/* <button onClick={recipeAdd} className='recipe-button'> Add New Recipe </button> */}
            <Button 
                href='#' 
                size='large'
                variant='contained' 
                color='primary'>
                Sign in here
            </Button>
            <h1>Secret Family Recipes</h1>
            </div>
            <div className='main-pic'>
            <img src="https://unsplash.it/200/200" alt="delicious meal" />
            </div>
            <h3>Our Top Three Recipes</h3>        
            <WrapperDiv>
                    <img src="https://unsplash.it/200/200" alt="family fav one" />
                    <img src="https://unsplash.it/200/200" alt='family fav two' />
                    <img src="https://unsplash.it/200/200" alt='family fav three' />
            </WrapperDiv>  
        </div>
    )
}
