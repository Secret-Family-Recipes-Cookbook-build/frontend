import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// const classes = useStyles();


export default function Cards() {
    return (
        <Card className='recipes'>
            <CardContent>
                <Typography className='recipe-content' color='textSecondary' gutterBottom>
                    Recipe
                </Typography>
                <Typography variant='body2' component='p'>
                    Source
                </Typography>
                <Typography variant='body2' component='p'>
                    Ingredients
                </Typography>
                <Typography variant='body2' component='p'>
                    Instructions
                </Typography>
                <Typography variant='body2' component='p'>
                    Category
                </Typography>
            </CardContent>
        </Card>
    )
}