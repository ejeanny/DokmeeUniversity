import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <Link to={props.url}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                            {props.title}
                        </Typography>
                        <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'>
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {!props.isCourse ? (
                    <Button size='small' color='primary'>
                        <Link to={props.url}>{props.action}</Link>
                    </Button>
                ) : (
                    <>
                        <Link
                            to={`/dokmee-univeristy/courses/edit/${props.id}`}>
                            <Button size='small' color='primary'>
                                Edit
                            </Button>
                        </Link>
                        <Link to={`/course/delete/${props.id}`}>
                            <Button size='small' color='primary'>
                                Delete
                            </Button>
                        </Link>
                    </>
                )}
            </CardActions>
        </Card>
    );
}
