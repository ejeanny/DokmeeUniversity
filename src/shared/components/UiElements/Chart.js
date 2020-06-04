import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
    Chart,
    PieSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Legend,
    Tooltip,
} from "@devexpress/dx-react-chart-material-ui";
import { scaleBand } from "@devexpress/dx-chart-core";
import { EventTracker, HoverState } from "@devexpress/dx-react-chart";
import { ValueScale, ArgumentScale, Stack } from "@devexpress/dx-react-chart";
import { Animation } from "@devexpress/dx-react-chart";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
    createMuiTheme,
    ThemeProvider,
    useTheme,
} from "@material-ui/core/styles";

const Label = symbol => props => {
    const { text } = props;
    return <ValueAxis.Label {...props} text={text + symbol} />;
};

const LabelWithPercent = Label(" %");

const modifyTotalDomain = domain => [domain[0], 100];

export default function ChartComponent(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    switch (props.chart) {
        case "pie":
            return (
                <Chart data={props.data}>
                    <Title text={props.title} />
                    <PieSeries
                        valueField={props.valueField}
                        argumentField={props.argumentField}
                    />
                    {matches && <Legend />}
                    <Animation />
                    <EventTracker />
                    <HoverState
                        hover={props.hover}
                        onHoverChange={props.changeHover}
                    />
                    <Tooltip />
                </Chart>
            );
            break;
        case "bar":
            return (
                <Chart data={props.data}>
                    <ValueScale
                        name={props.scale}
                        modifyDomain={modifyTotalDomain}
                    />

                    <ArgumentAxis />
                    <ValueAxis
                        scaleName={props.scale}
                        labelComponent={LabelWithPercent}
                    />

                    <Title text={props.title} />
                    <BarSeries
                        name={props.name1}
                        valueField='value1'
                        argumentField='separator'
                        scaleName={props.scale}
                    />
                    <BarSeries
                        name={props.name2}
                        valueField='value2'
                        argumentField='separator'
                        scaleName={props.scale}
                    />

                    <Stack
                        stacks={[
                            {
                                series: props.stack,
                            },
                        ]}
                    />
                    {matches && <Legend />}
                    <Animation />
                    <EventTracker />
                    <HoverState
                        hover={props.hover}
                        onHoverChange={props.changeHover}
                    />
                    <Tooltip />
                </Chart>
            );
            break;
        case "line":
            break;
        case "area":
            break;
        case "scatter Series":
            break;
        default:
            return <h1>Chart Style Missing</h1>;
            break;
    }
}
