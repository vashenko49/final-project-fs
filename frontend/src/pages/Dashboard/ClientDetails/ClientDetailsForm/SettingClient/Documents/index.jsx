import React from "react";
import * as PropTypes from "prop-types";
import SelectView from "../../../../../../components/generic/SelectView";
import DocumentCard from "../../../../../../components/generic/DocumentCard";
import ChatIcon from "@material-ui/icons/Chat";
import CustomButton from "../../../../../../components/generic/CustomButton";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    title: {
        font: 'normal normal bold 18px Roboto',
        color: '#293134',
        marginBottom: '10px'
    },
    titleSelect: {
        width: '20%',
        font: 'normal normal bold 14px Roboto',
        color: '#293134'
    },
    select: {
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    houseSelect: {
        width: '80%',
        '& .MuiFormControl-root': {
            width: '90%',
        }
    },
    upload: {
        marginBottom: '20px'
    }
})

const Documents = ({typeDoc, houses}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    return (
        <>
            <div className={classes.title}>{t('settingClientDocumentsTitle')}</div>
            <div className={classes.select}>
                <span className={classes.titleSelect}>{t('settingClientDocumentsSelectTitleType')}</span>
                <SelectView
                    optionValues={typeDoc}
                    callback={choose => {
                    }}
                />
            </div>
            <div className={classes.select}>
                <span className={classes.titleSelect}>{t('settingClientDocumentsSelectTitleHouse')}</span>
                <SelectView
                    className={classes.houseSelect}
                    optionValues={houses}
                    callback={choose => {
                    }}
                />
            </div>
            <DocumentCard className={classes.upload} type="new"/>
            <CustomButton width="130px"
                          endIcon={<ChatIcon/>}>
                {t('settingClientInformationWriteBtnTitle')}
            </CustomButton>
        </>
    )
}

Documents.defaultProps = {
    typeDoc: ['Контракт', 'Платіжка', 'Експлуатація'],
    houses:['House 1', 'House 2', 'House 3']
}

Documents.propTypes = {
    typeDoc: PropTypes.array.isRequired,
    houses: PropTypes.array.isRequired
}

export default Documents;