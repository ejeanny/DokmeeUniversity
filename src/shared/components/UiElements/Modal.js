import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

//import Modal from "../../shared/components/UiElements/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";

import Backdrop from "./Backdrop";
import "./Modal.css";
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

const ModalOverlay = props => {
    const classes = useStyles();
    const content = (
        <Dialog disableBackdropClick disableEscapeKeyDown open={props.show}>
            <DialogTitle>{props.header}</DialogTitle>
            <DialogContent>
                <form
                    onSubmit={
                        props.onSubmit
                            ? props.onSubmit
                            : event => event.preventDefault()
                    }>
                    <FormControl className={classes.formControl}>
                        {props.children}
                    </FormControl>
                </form>
            </DialogContent>
            <DialogActions>{props.footer}</DialogActions>
        </Dialog>
    );
    // const content = (
    //   <div className={`modal ${props.className}`} style={props.style}>
    //     <header className={`modal__header ${props.headerClass}`}>
    //       <h2>{props.header}</h2>
    //     </header>
    //     <form
    //       onSubmit={
    //         props.onSubmit ? props.onSubmit : event => event.preventDefault()
    //       }
    //     >
    //       <div className={`modal__content ${props.contentClass}`}>
    //         {props.children}
    //       </div>
    //       <footer className={`modal__footer ${props.footerClass}`}>
    //         {props.footer}
    //       </footer>
    //     </form>
    //   </div>
    // );
    return ReactDOM.createPortal(
        content,
        document.getElementById("modal-hook")
    );
};

const Modal = props => {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames='modal'>
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;
