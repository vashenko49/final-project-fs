import React, {useEffect, useState} from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import CustomButton from '../../generic/CustomButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import {useTranslation} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
    iconClose: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    dialog: {
        textAlign: 'center',
        position: 'relative',
        '& .MuiPaper-root': {
            padding: '3%',
            borderRadius: '20px'
        },
        '& .MuiDialogTitle-root': {
            padding: 0,
            font: 'normal normal bold 21px/28px Roboto',
            color: '#293134'
        },
        '& .MuiDialogContent-root': {
            padding: 0,
            margin: '30px 0'
        },
        '& .MuiDialogActions-root': {
            padding: 0,
            justifyContent: 'space-evenly'
        }
    },
    titleName: {
        color: '#254A93'
    },
    descTitle: {
        font: 'normal normal normal 21px/28px Roboto',
        color: '#464C4E',
        marginBottom: '10px'
    },
    desc: {
        font: 'normal normal normal 14px/19px Roboto',
        color: '#6E7375'
    },
}));

/**
 *
 * @param client
    {
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
       role: PropTypes.string.isRequired,
    }
 */
const SuccessCreateUser = ({client}) => {
    const [open, setOpen] = useState(false);
    const {t} = useTranslation();
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setOpen(true);
    }, [client.id])

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.dialog}
        >
            <IconButton className={classes.iconClose} onClick={handleClose}>
                <CloseIcon/>
            </IconButton>
            <DialogTitle disableTypography id="alert-dialog-title">
                {t('createUserSuccessTitle')}{client.role === 'CLIENT' ? t('createUserSelectClient') : t('createUserSelectManager')}<span
                className={classes.titleName}> {client.name}</span>
            </DialogTitle>
            <DialogContent>
                <p className={classes.descTitle}>{t('createUserSuccessDescTitle')}</p>
                <p className={classes.desc}>{t('createUserSuccessDesc')}</p>
            </DialogContent>
            <DialogActions>
                <CustomButton onClick={handleClose} color="secondary" width="240px">
                    {t('createUserSuccessReturn')}
                </CustomButton>
                <CustomButton onClick={handleClose} href={`#${client.id}`} color="primary" autoFocus width="240px">
                    {t('createUserSuccessGoTo')}
                </CustomButton>
            </DialogActions>
        </Dialog>
    );
};

SuccessCreateUser.propTypes = {
    client: PropTypes.shape(
        {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
        }).isRequired,
};

export default SuccessCreateUser;
