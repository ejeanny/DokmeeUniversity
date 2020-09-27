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
import Select from "@material-ui/core/Select";
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

export default function Users() {
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const auth = useContext(AuthContext);
    const [loadedUsers, setLoadedUsers] = useState();
    const [loadedCompanies, setLoadedCompanies] = useState();
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [checkedAdmin, setAdminChecked] = useState(false);
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [companyName, setCompanyName] = useState();
    const [companyToken, setCompanyToken] = useState();
    const tableRef = React.createRef();
    const [formState, inputHandler, setFormData] = useForm(
        {
            firstName: {
                value: "",
                isValid: false,
            },
            lastName: {
                value: "",
                isValid: false,
            },
            lastName: {
                value: "",
                isValid: false,
            },
        },
        false
    ); // check if the input are input are Valid
    //
    const columns = [
        { title: "Company Name", field: "companyName", editable: "never" },
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "Email", field: "email", editable: "never" },
        {
            title: "Admin",
            field: "isAdmin",
            type: "boolean",
            searchable: false,
        },
    ];
    const openUserModal = () => setShowAddUserModal(true);

    const closeUserHandler = () => setShowAddUserModal(false);
    const handleAdminChange = () => setAdminChecked(!checkedAdmin);
    const handleCompanyNameChange = event => {
        setCompanyToken(event.target.value);
    };
    //const handleCompanyNameChange = event => setCompanyName(event.target.value);

    const usersSubmithandler = async event => {
        event.preventDefault();
        closeUserHandler();
        try {
            await sendRequest(
                "http://localhost:5555/api/users/create",
                "POST",
                JSON.stringify({
                    firstName: formState.inputs.firstName.value,
                    lastName: formState.inputs.lastName.value,
                    email: formState.inputs.email.value,
                    password: formState.inputs.password.value,
                    companyToken: companyToken,
                    isAdmin: checkedAdmin,
                }),
                {
                    //Authorization: "Bearer " + auth.token,
                    "Content-Type": "application/json",
                }
            );
            const responseData = await sendRequest(
                "http://localhost:5000/api/users"
            );
            setLoadedUsers(responseData.users);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const responseData = await sendRequest(
                    "http://localhost:5555/api/users"
                );
                const companyData = await sendRequest(
                    "http://localhost:5555/api/companies"
                );
                setLoadedUsers(responseData.users);
                setLoadedCompanies(companyData.companies);
            } catch (err) {}
        };
        fetchUsers();
    }, [sendRequest]);

    return (
        <>
            <ErrorModal error={error} onClear={clearError} />
            {isLoading && (
                <div className='center'>
                    <LoadingSpinner asOverlay />
                </div>
            )}
            {loadedCompanies && loadedUsers && (
                <>
                    <MaterialTable
                        title='Users'
                        icons={tableIcons}
                        columns={columns}
                        data={loadedUsers}
                        options={{
                            actionsColumnIndex: -1,
                            search: true,
                        }}
                        editable={{
                            onRowUpdate: (newData, oldData) =>
                                new Promise(async (resolve, reject) => {
                                    await sendRequest(
                                        `http://localhost:5555/api/users/${oldData.id}`,
                                        "PATCH",
                                        JSON.stringify({
                                            firstName: newData.firstName,
                                            lastName: newData.lastName,
                                            isAdmin: newData.isAdmin,
                                        }),
                                        {
                                            "Content-Type": "application/json",
                                        }
                                    );
                                    const responseData = await sendRequest(
                                        "http://localhost:5000/api/users"
                                    );
                                    setLoadedUsers(responseData.users);
                                    resolve();
                                }),
                            onRowDelete: oldData =>
                                new Promise(async (resolve, reject) => {
                                    await sendRequest(
                                        `http://localhost:5555/api/users/${oldData.id}`,
                                        "DELETE"
                                    );
                                    const responseData = await sendRequest(
                                        "http://localhost:5000/api/users"
                                    );
                                    setLoadedUsers(responseData.users);
                                    resolve();
                                }),
                        }}
                    />
                    <Tooltip title='Add'>
                        <Fab
                            aria-label='add'
                            className='fab-btn'
                            onClick={openUserModal}>
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                    <Dialog
                        disableBackdropClick
                        disableEscapeKeyDown
                        open={showAddUserModal}
                        onClose={closeUserHandler}>
                        <DialogTitle>Fill the form</DialogTitle>
                        <DialogContent>
                            <form className={classes.container}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='age-native-simple'>
                                        Company Name
                                    </InputLabel>
                                    <Select
                                        native
                                        value={companyName}
                                        onChange={handleCompanyNameChange}
                                        inputProps={{
                                            name: "companyName",
                                            id: "companyName",
                                        }}
                                        className='first-input auth-input'>
                                        {loadedCompanies.map(company => {
                                            return (
                                                <option
                                                    value={company.companyToken}
                                                    companyName={
                                                        company.companyName
                                                    }>
                                                    {company.companyName}
                                                </option>
                                            );
                                        })}
                                    </Select>
                                    <Input
                                        id='firstName'
                                        element='name'
                                        type='text'
                                        label='First Name'
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        mainClasses='first-input'
                                        subMainClasses='auth-input'
                                        errorText='Required'></Input>
                                    <Input
                                        id='lastName'
                                        element='name'
                                        type='text'
                                        label='Last Name'
                                        validators={[VALIDATOR_REQUIRE()]}
                                        onInput={inputHandler}
                                        mainClasses='first-input'
                                        subMainClasses='auth-input'
                                        errorText='Required'></Input>
                                    <Input
                                        id='email'
                                        element='login'
                                        type='text'
                                        label='Email'
                                        validators={[VALIDATOR_EMAIL()]}
                                        onInput={inputHandler}
                                        mainClasses='first-input'
                                        subMainClasses='auth-input'
                                        errorText='please enter a valid email'></Input>
                                    <Input
                                        id='password'
                                        element='password'
                                        type='password'
                                        label='Password'
                                        subMainClasses='auth-input'
                                        validators={[VALIDATOR_MINLENGTH(6)]}
                                        onInput={inputHandler}
                                        errorText='At least 6 characters for the password'></Input>
                                    <FormControlLabel
                                        control={
                                            <CustomCheckbox
                                                checked={checkedAdmin}
                                                onChange={handleAdminChange}
                                                name='remember'
                                                color='#cf3339'
                                            />
                                        }
                                        label='Admin access'
                                    />
                                </FormControl>
                            </form>
                        </DialogContent>
                        <DialogActions>
                            <ButtonComponent
                                onClick={closeUserHandler}
                                dark={true}>
                                Cancel
                            </ButtonComponent>
                            <ButtonComponent
                                type='submit'
                                disabled={!formState.isValid}
                                onClick={usersSubmithandler}>
                                Create
                            </ButtonComponent>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </>
    );
}
