import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// Styled Components
const WrapperDiv = styled.div`
    display: flex;
`;

// const Images = styled.div`
//     display: flex;
//     background: pink;
// `;


export default function Home() {
    const history = useHistory();

    // const recipeAdd = () => {
    //     history.push('/recipe')
    // };

    const loginForm = () => {
        history.push('/login')
    };

    return (
        <div>
            <div className='top-div'>
            {/* <button onClick={recipeAdd} className='recipe-button'> Add New Recipe </button> */}
            <button onClick={loginForm} className='login-button'> Sign In Here </button>
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
