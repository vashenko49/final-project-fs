import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import ErrorSelector from "@redux/selector/Error";
import {errorHide} from "@redux/action/Error";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    iconClose: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    dialog: {
        textAlign: 'center',
        zIndex: 999999999,
        position: 'relative',
        '& .MuiPaper-root': {
            width: "30%",
            padding: '10px 40px',
            borderRadius: '20px',
            backgroundColor: theme.palette.error.light
        },
        '& .MuiDialogTitle-root': {
            padding: 0,
            font: 'normal normal bold 21px/28px Roboto',
            color: '#293134'
        },
        '& .MuiDialogContent-root': {
            padding: 0,
            marginTop: '15px'
        },
        '& .MuiDialogActions-root': {
            padding: 0,
            justifyContent: 'space-evenly'
        }
    },
    desc: {
        font: 'normal normal normal 14px/19px Roboto',
    }
}));

const Error = () => {
    const error = useSelector(ErrorSelector.getError);
    const dispatch = useDispatch();
    const classes = useStyles();
    const {t} = useTranslation();

    const handleClose = () => {
        dispatch(errorHide())
    }

    return (
        error.isOpen &&
        <Dialog
            open={error.isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.dialog}
        >
            <IconButton className={classes.iconClose} onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
            <DialogTitle disableTypography id="alert-dialog-title">
                {t('errorTitle')}
            </DialogTitle>
            <DialogContent>
                <p className={classes.desc}>{error.message}</p>
            </DialogContent>
        </Dialog>
    )
};

export default Error;