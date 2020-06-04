import React from "react";
import Grid from "@material-ui/core/Grid";
import CardComponents from "../../shared/components/UiElements/CardComponent";
export default function CourseComponents(props) {
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
                        {!props.isCourse ? (
                            <CardComponents
                                description={v.about}
                                img={v.mainImgUrl}
                                title={v.course}
                                action={props.action}
                                url={`/dokmee-univeristy/${props.soft}/${v.slug}`}
                            />
                        ) : (
                            <CardComponents
                                description={v.about}
                                img={v.mainImgUrl}
                                title={v.course}
                                isCourse={props.isCourse}
                                action={props.action}
                                id={v.id}
                            />
                        )}
                    </Grid>
                );
            })}
        </Grid>
    );
}
