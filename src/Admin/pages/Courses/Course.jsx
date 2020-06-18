import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Input from "@material-ui/core/Input";
import CourseComponent from "../../../Software/components/CourseComponent";
import { Fab, Tooltip, Box } from "@material-ui/core";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../../shared/util/validators";
import ButtonComponent from "../../../shared/components/FormElements/Button";
import InputComponent from "../../../shared/components/FormElements/Input";
import { useForm } from "../../../shared/hook/form-hooks";
import { useHttpClient } from "../../../shared/hook/http-hooks";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
const DUMMY_VIDEO = [
    {
        id: 1,
        course: "Introduction",
        slug: "introduction",
        level: "beginner",
        soft: "capture",
        video: [
            {
                id: 1,
                slug: "Install",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 2,
                slug: "Security",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 3,
                slug: "Cabinet Manager",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 4,
                slug: "Files",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 5,
                slug: "File Viewer",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 6,
                slug: "Advanced Search",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 7,
                slug: "Audit log",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 8,
                slug: "Workflow",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 9,
                slug: "Inbox",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 10,
                slug: "Configuration overview",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 11,
                slug: "Dokmee Hub &Tools",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 12,
                slug: "File Retention",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
            {
                id: 13,
                slug: "Active Directrory",
                overview:
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque maxime veritatis aperiam atque maiores quod tempora architecto animi impedit, commodi reiciendis deleniti mollitia adipisci qui nemo ad magni tempore dolorem esse molestias porro. Molestias enim quaerat facilis, in minima ea aspernatur odio eaque sequi, exercitationem provident repellat. Expedita, aspernatur?",
            },
        ],
        about:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ea sequi dolorum quam? Alias quaerat cum aperiam magni provident molestias.",
        description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nulla facere voluptates non illo a ducimus cupiditate dolorem odio qui, atque explicabo accusantium. Amet, totam, rem distinctio dicta praesentium alias eveniet maiores quisquam officia ipsam nesciunt aliquam, sapiente commodi nam impedit eum maxime sint quis consectetur explicabo. Facilis suscipit esse nulla placeat, illo, non magnam, illum officiis quidem repellendus modi? Eaque accusantium voluptatibus sequi odit temporibus? Facere cumque sint fugit voluptatem labore hic, a asperiores accusantium doloremque ipsam nisi neque inventore. Consequatur culpa, reprehenderit excepturi minus ratione incidunt temporibus voluptates fugit sed rem ullam quas voluptate sequi eaque provident tempore.",
        instructor: "Etienne Jeanny",
        announcement: [
            {
                id: 1,
                creator: "Etienne Jeanny",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: "01/01/2020",
            },
            {
                id: 2,
                creator: "Etienne Jeanny",
                content:
                    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia voluptate minima earum, architecto magnam corporis minus ipsam, alias quisquam nostrum quam natus vero provident deleniti, est fugit? Impedit, mollitia!",
                date: " 01/05/2020",
            },
        ],
        mainImgUrl: "https://www.etiennejeanny.ovh/uploads/images/mainImg.png",
    },
];
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    darkButton: {
        backgroundColor: "#323436",
    },
}));
export default function Course() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const { isLoading, error, sendRequest, clearError } = useHttpClient(); //initialize the http hooks for this components
    const [software, setSoftware] = useState("");
    const [formState, inputHandler, setFormData] = useForm(
        {
            name: {
                value: "",
                isValid: false,
            },
        },
        false
    ); // check if the input are input are Valid
    const handleChange = event => {
        setSoftware(event.target.value || "");
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const creationtionSubmitHandler = event => {
        event.preventDefault();
        console.log("Created");

        setOpen(false);
    };

    return (
        <>
            <CourseComponent
                spacing={3}
                video={DUMMY_VIDEO}
                soft='course'
                isCourse={true}
                action={["Edit", "Delete"]}
            />
            <Tooltip title='Add'>
                <Fab aria-label='add' className='fab-btn' onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <InputComponent
                                id='name'
                                element='name'
                                type='text'
                                label='Name'
                                subMainClasses='auth-input'
                                validators={[VALIDATOR_MINLENGTH(6)]}
                                onInput={inputHandler}
                                errorText='At least 4 characters for the name'></InputComponent>
                            <Select
                                native
                                value={software}
                                onChange={handleChange}
                                input={<Input id='demo-dialog-native' />}>
                                <option aria-label='None' value='' />
                                <option value={"Dokmee Capture"}>
                                    Dokmee Capture
                                </option>
                                <option value={"Dokmee Ecm"}>Dokmee Ecm</option>
                                <option value={"Dokmee Form"}>
                                    Dokmee Form
                                </option>
                            </Select>
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <ButtonComponent
                        onClick={handleClose}
                        className={classes.darkButton}>
                        Cancel
                    </ButtonComponent>
                    <ButtonComponent
                        type='submit'
                        disabled={!formState.isValid}
                        onClick={creationtionSubmitHandler}>
                        Create
                    </ButtonComponent>
                </DialogActions>
            </Dialog>
        </>
    );
}
