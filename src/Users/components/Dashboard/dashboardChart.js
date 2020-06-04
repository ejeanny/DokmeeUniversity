import React from "react";
import ChartData from "../../../shared/components/UiElements/Chart";
export default function dashboardChart(props) {
    return (
        <>
            {props.data === "General Progression" && (
                <ChartData
                    chart='pie'
                    elevation={3}
                    data={props.totalData}
                    valueField='area'
                    argumentField='total'
                    title='Dokmee University Progression'
                    hover={props.hover}
                    onHoverChange={props.changeHover}
                />
            )}
            {props.data === "Dokmee Capture" && (
                <ChartData
                    chart='pie'
                    elevation={3}
                    data={props.dataCapture}
                    valueField='area'
                    argumentField='capture'
                    title='Dokmee Capture'
                    hover={props.hover}
                    onHoverChange={props.changeHover}
                />
            )}
            {props.data === "Dokmee ECM" && (
                <ChartData
                    chart='pie'
                    elevation={3}
                    data={props.dataECM}
                    valueField='area'
                    argumentField='ecm'
                    title='Dokmee ECM'
                    hover={props.hover}
                    onHoverChange={props.changeHover}
                />
            )}
            {props.data === "Dokmee Form" && (
                <ChartData
                    chart='pie'
                    elevation={3}
                    data={props.dataForm}
                    valueField='area'
                    argumentField='form'
                    title='Dokmee Form'
                    hover={props.hover}
                    onHoverChange={props.changeHover}
                />
            )}
            {props.data === "Score" && (
                <ChartData
                    chart='bar'
                    elevation={3}
                    data={props.score}
                    title='Score'
                    hover={props.hover}
                    scale='score'
                    name1='Correct Answer'
                    name2='Wrong Answer'
                    onHoverChange={props.changeHover}
                    stack={["Correct Answer", "Wrong Answer"]}
                />
            )}
        </>
    );
}
