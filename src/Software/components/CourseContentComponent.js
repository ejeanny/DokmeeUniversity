import React from "react";
import Grid from "@material-ui/core/Grid";
import CardComponents from "../../shared/components/UiElements/CardComponent";
export default function CourseContentComponents(props) {
    return (
        <Grid container spacing={props.spacing}>
            {props.video.map((v, i) => {
                return (
                    <Grid
                        item
                        lg={3}
                        md={4}
                        sm={6}
                        xs={12}
                        key={i}
                        container
                        justify='space-evenly'>
                        <CardComponents
                            description={v.overview}
                            img={props.img}
                            title={v.slug}
                            action='Watch the video'
                            url={`/dokmee-univeristy/${props.soft}/${v.id}`}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
}
