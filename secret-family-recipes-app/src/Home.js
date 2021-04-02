import React from 'react';
// import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Cards from './Cards'





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
                    href='/login' 
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
            <h3>Our Recipes Need To Be Tasted!</h3>        
            <div className='cards-div'>
                <Cards />
            </div>  
        </div>
    )
}
