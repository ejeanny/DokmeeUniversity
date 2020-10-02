import React, { useEffect, useState, useContext } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../../shared/context/auth-context";
import {
    Fab,
    Tooltip,
    Box,
    Checkbox,
    FormControlLabel,
} from "@material-ui/core";
import { forwardRef } from "react";
import {
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH,
    VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { withStyles } from "@material-ui/core/styles";
import Modal from "../../shared/components/UiElements/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "../../shared/components/FormElements/Input";
import AddBox from "@material-ui/icons/AddBox";
import AddIcon from "@material-ui/icons/Add";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import RefreshIcon from "@material-ui/icons/Refresh";
import ErrorModal from "../../shared/components/UiElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UiElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hook/http-hooks";
import { useForm } from "../../shared/hook/form-hooks";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";

import Select from "@material-ui/core/Select";
import ButtonComponent from "../../shared/components/FormElements/Button";
import InputComponent from "../../shared/components/FormElements/Input";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    Refresh: forwardRef((props, ref) => <RefreshIcon {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
        <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};
const CustomCheckbox = withStyles({
    root: {
        color: "#3c3f41",
        "&$checked": {
            color: "#3c3f41",
        },
    },
    checked: {},
})(props => <Checkbox color='default' {...props} />);
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
        width: "100%",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },
    select: {
        marginTop: theme.spacing(2),
    },
    darkButton: {
        backgroundColor: "#323436",
    },
}));

export default function Companies() {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const [loadedCompanies, setLoadedCompanies] = useState();
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [checkedForms, setFormsChecked] = useState(false);
    const [checkedCapture, setCaptureChecked] = useState(false);
    const [checkedEcm, setEcmChecked] = useState(false);
    const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
    const tableRef = React.createRef();

    const handleCaptureChange = event => {
        setCaptureChecked(event.target.checked);
    };
    const handleEcmChange = event => {
        setEcmChecked(event.target.checked);
    };
    const handleFormsChange = event => {
        setFormsChecked(event.target.checked);
    };
    const [formState, inputHandler, setFormData] = useForm(
        {
            companyName: {
                value: "",
                isValid: false,
            },
            companyEmail: {
                value: "",
                isValid: false,
            },
        },
        false
    ); // check if the input are input are Valid
    //
    const columns = [
        { title: "Name", field: "companyName", editable: "onAdd" },
        { title: "Contact", field: "companyEmail" },
        {
            title: "Capture Access",
            field: "companyCaptureAccess",
            type: "boolean",
        },
        {
            title: "ECM Access",
            field: "companyEcmAccess",
            type: "boolean",
        },
        {
            title: "Form Access",
            field: "companyFormAccess",
            type: "boolean",
        },
        {
            title: "Token",
            field: "companyToken",
            editable: "never",
            searchable: false,
        },
    ];
    const openCompanyModal = () => setShowAddCompanyModal(true);

    const closeCompanyHandler = () => setShowAddCompanyModal(false);

    const companiesSubmithandler = async event => {
        event.preventDefault();
        closeCompanyHandler();
        try {
            await sendRequest(
                "http://localhost:5555/api/companies/create",
                "POST",
                JSON.stringify({
                    companyName: formState.inputs.companyName.value,
                    companyEmail: formState.inputs.companyEmail.value,
                    companyCaptureAccess: checkedCapture,
                    companyFormAccess: checkedForms,
                    companyEcmAccess: checkedEcm,
                }),
                {
                    //Authorization: "Bearer " + auth.token,
                    "Content-Type": "application/json",
                }
            );
            setEcmChecked(false);
            setCaptureChecked(false);
            setFormsChecked(false);
            const responseData = await sendRequest(
                "http://localhost:5555/api/companies"
            );
            setLoadedCompanies(responseData.companies);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const responseData = await sendRequest(
                    "http://localhost:5555/api/companies"
                );
                setLoadedCompanies(responseData.companies);
            } catch (err) {}
        };
        fetchCompanies();
    }, [sendRequest]);

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && loadedCompanies && (
                <div className='center'>
                    <LoadingSpinner asOverlay />
                </div>
            )}
            <MaterialTable
                title='Companies'
                icons={tableIcons}
                columns={columns}
                data={loadedCompanies}
                options={{
                    actionsColumnIndex: -1,
                    search: true,
                }}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise(async (resolve, reject) => {
                            console.log("New", newData);
                            console.log("old", oldData);
                            await sendRequest(
                                `http://localhost:5555/api/companies/${oldData.id}`,
                                "PATCH",
                                JSON.stringify({
                                    companyEmail: newData.companyEmail,
                                    companyCaptureAccess:
                                        newData.companyCaptureAccess,
                                    companyFormAccess:
                                        newData.companyFormAccess,
                                    companyEcmAccess: newData.companyEcmAccess,
                                }),
                                {
                                    //Authorization: "Bearer " + auth.token,
                                    "Content-Type": "application/json",
                                }
                            );
                            const responseData = await sendRequest(
                                "http://localhost:5555/api/companies"
                            );
                            setLoadedCompanies(responseData.companies);
                            //setLoadedCompanies(responseData.companies);

                            // const dataUpdate = [...data];
                            // const index = oldData.tableData.id;
                            // dataUpdate[index] = newData;
                            // setData([...dataUpdate]);

                            resolve();
                        }),
                }}
            />
            <Tooltip title='Add'>
                <Fab
                    aria-label='add'
                    className='fab-btn'
                    onClick={openCompanyModal}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={showAddCompanyModal}
                onClose={closeCompanyHandler}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <form className={classes.container}>
                        <FormControl className={classes.formControl}>
                            <Input
                                id='companyName'
                                element='company'
                                type='text'
                                label='Company Name'
                                validators={[VALIDATOR_REQUIRE()]}
                                onInput={inputHandler}
                                mainClasses='first-input'
                                subMainClasses='auth-input'
                                errorText='Required'></Input>
                            <Input
                                id='companyEmail'
                                element='login'
                                type='text'
                                label='Email'
                                validators={[VALIDATOR_EMAIL()]}
                                onInput={inputHandler}
                                mainClasses='first-input'
                                subMainClasses='auth-input'
                                errorText='please enter a valid email'></Input>
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={checkedCapture}
                                        onChange={handleCaptureChange}
                                        name='remember'
                                        color='#cf3339'
                                    />
                                }
                                label='Dokmee Capture Access'
                            />
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={checkedEcm}
                                        onChange={handleEcmChange}
                                        name='remember'
                                        color='#cf3339'
                                    />
                                }
                                label='Dokmee ECM Access'
                            />
                            <FormControlLabel
                                control={
                                    <CustomCheckbox
                                        checked={checkedForms}
                                        onChange={handleFormsChange}
                                        name='remember'
                                        color='#cf3339'
                                    />
                                }
                                label='Dokmee Forms Access'
                            />
                        </FormControl>
                    </form>
                </DialogContent>
                <DialogActions>
                    <ButtonComponent onClick={closeCompanyHandler} dark={true}>
                        Cancel
                    </ButtonComponent>
                    <ButtonComponent
                        type='submit'
                        disabled={!formState.isValid}
                        onClick={companiesSubmithandler}>
                        Create
                    </ButtonComponent>
                </DialogActions>
            </Dialog>
        </>
    );
}
