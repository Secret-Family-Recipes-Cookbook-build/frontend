import React from 'react';
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();

    // const recipeAdd = () => {
    //     history.push('/recipe')
    // };

    const loginForm = () => {
        history.push('/login')
    };

    return (
        <div className='home-app'>
            <div className='top-div'>
            {/* <button onClick={recipeAdd} className='recipe-button'> Add New Recipe </button> */}
            <button onClick={loginForm} className='login-button'> Sign In Here </button>
            </div>
            <h3>Welcome Fam!</h3>        
            <div className='fam-favs'>
                <div className='img-one'>

                </div>
                <div className='img-two'>

                </div>
                <div className='img-three'>

                </div>
            </div>
        </div>

    )
}
