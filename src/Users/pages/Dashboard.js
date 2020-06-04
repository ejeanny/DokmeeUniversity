import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import DashBoard from "../components/Dashboard/dashboardChart";
import CardComponent from "../../shared/components/UiElements/CardComponent";
import Select from "../../shared/components/UiElements/SelectComponents";
import ProgressionTable from "../components/Dashboard/ProgressionTable";
import "./Dashboard.css";

const dataCapture = [
    { capture: "Completed", area: 30 },
    { capture: "Non completed", area: 70 },
];
const dataECM = [
    { ecm: "Completed", area: 100 },
    { ecm: "Non completed", area: 0 },
];
const dataForm = [
    { form: "Completed", area: 2 },
    { form: "Non completed", area: 99 },
];
const totalData = [
    { total: "Completed", area: 45 },
    { total: "Non completed", area: 55 },
];
const score = [
    {
        separator: "Capture",
        value1: 58,
        value2: 42,
    },
    {
        separator: "Ecm",
        value1: 75,
        value2: 25,
    },
    {
        separator: "Form",
        value1: 90,
        value2: 10,
    },
];

export default class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            dataCapture,
            dataECM,
            dataForm,
            totalData,
            score,
            data: "General Progression",
            hover: undefined,
        };
        this.changeHover = hover => this.setState({ hover });
    }

    render() {
        const handleProgressionChange = event => {
            this.setState({ data: event.target.value });
        };
        const {
            dataCapture,
            dataECM,
            dataForm,
            score,
            totalData,
            hover,
            data,
        } = this.state;

        return (
            <>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Paper elevation={3}>
                            <Grid container>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Select
                                        handleProgressionChange={
                                            handleProgressionChange
                                        }
                                        data={data}
                                        menuItem={[
                                            "General Progression",
                                            "Dokmee Capture",
                                            "Dokmee ECM",
                                            "Dokmee Form",
                                            "Score",
                                        ]}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <DashBoard
                                        dataCapture={dataCapture}
                                        dataECM={dataECM}
                                        dataForm={dataForm}
                                        totalData={totalData}
                                        score={score}
                                        hover={hover}
                                        changeHover={this.changeHover}
                                        data={data}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item lg={8} md={4} sm={12} xs={12}>
                        <Paper elevation={3}>
                            <Grid container>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <h1 className='clear'>Tobe Changed</h1>
                                    <Select
                                        handleProgressionChange={
                                            handleProgressionChange
                                        }
                                        data={data}
                                        menuItem={[
                                            "General Progression",
                                            "Dokmee Capture",
                                            "Dokmee ECM",
                                            "Dokmee Form",
                                            "Score",
                                        ]}
                                    />
                                </Grid>
                                <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <DashBoard
                                        dataCapture={dataCapture}
                                        dataECM={dataECM}
                                        dataForm={dataForm}
                                        totalData={totalData}
                                        score={score}
                                        hover={hover}
                                        changeHover={this.changeHover}
                                        data={data}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={4}
                        sm={12}
                        xs={12}
                        classes='test'></Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}></Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Paper elevation={3}>
                            <ProgressionTable />
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}
