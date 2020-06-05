import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
    root: {
        "& > *": {
            borderBottom: "unset",
        },
    },
});

function createData(
    name,
    numberOfCourseSubscribed,
    numberOfCourseAvailable,
    details
) {
    return {
        name,
        numberOfCourseSubscribed,
        numberOfCourseAvailable,
        details,
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}>
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                    {row.name}
                </TableCell>
                <TableCell align='right'>
                    {row.numberOfCourseSubscribed}
                </TableCell>
                <TableCell align='right'>
                    {row.numberOfCourseAvailable}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box margin={1}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'>
                                Datails
                            </Typography>
                            <Table size='small' aria-label='purchases'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Course Name</TableCell>
                                        <TableCell>Watched video</TableCell>
                                        <TableCell align='right'>
                                            Total video
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.details.map(datailRow => (
                                        <TableRow key={datailRow.courseName}>
                                            <TableCell
                                                component='th'
                                                scope='row'>
                                                {datailRow.courseName}
                                            </TableCell>
                                            <TableCell>
                                                {datailRow.numberOfVideoWatched}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {datailRow.numberTotalOfVideo}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.number.isRequired,
        numberOfCourseSubscribed: PropTypes.number.isRequired,
        numberOfCourseAvailable: PropTypes.number.isRequired,
        detail: PropTypes.arrayOf(
            PropTypes.shape({
                courseName: PropTypes.string.isRequired,
                numberOfVideoWatched: PropTypes.number.isRequired,
                numberTotalOfVideo: PropTypes.number.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

const rows = [
    createData("Dokmee Capture", 3, 15, [
        {
            courseName: "Introduction",
            numberOfVideoWatched: 3,
            numberTotalOfVideo: 15,
        },
        {
            courseName: "Advance",
            numberOfVideoWatched: 0,
            numberTotalOfVideo: 15,
        },
    ]),
    createData("Dokmee ECM", 3, 14, [
        {
            courseName: "Introduction",
            numberOfVideoWatched: 3,
            numberTotalOfVideo: 15,
        },
        {
            courseName: "Advance",
            numberOfVideoWatched: 0,
            numberTotalOfVideo: 15,
        },
    ]),
    createData("Dokmee From", 3, 24, [
        {
            courseName: "Introduction",
            numberOfVideoWatched: 3,
            numberTotalOfVideo: 15,
        },
        {
            courseName: "Advance",
            numberOfVideoWatched: 0,
            numberTotalOfVideo: 15,
        },
    ]),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label='collapsible table'>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Software</TableCell>
                        <TableCell align='right'>Subscribed courses</TableCell>
                        <TableCell align='right'>Available Courses</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
