import React from 'react';
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();

    const recipeAdder = () => {
        history.push('/recipe')
    };

    const loginForm = () => {
        history.push('/login')
    };
}