import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    },
    cardMedia: {
      paddingTop: "56.25%" // 16:9
    },
    cardContent: {
      flexGrow: 1
    }
  }));

export default function ExercicioCard(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={props.image}
                title={props.title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                {props.title}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
            </CardActions>
            </Card>
        </Grid>
    );
}
