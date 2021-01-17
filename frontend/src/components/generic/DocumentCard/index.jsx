import React, {useEffect, useState} from "react";
import Card from "../Card";
import UploadDocumentIcon from "../../CustomIcon/UploadDocumentIcon";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';
import {TextField} from "@material-ui/core";
import CustomButton from "../CustomButton";
import {useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core/styles";
import classNames from 'classnames';
import ButtonBase from "@material-ui/core/ButtonBase";
import * as PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: 'max-content'
    },
    icon: {
        marginRight: '20px',
        padding: 0
    },
    right: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: 'min-content'
    },
    title: {
        font: 'normal normal bold 14px Roboto',
        color: '#464C4E',
        textAlign: 'center'
    },
    description: {
        font: 'normal normal normal 12px Roboto',
        color: '#6E7375',
        textAlign: 'center'
    },
    btns: {
        display: 'flex',
        '& .MuiSvgIcon-root': {
            color: '#254A93'
        }
    }
})

const DocumentCard = ({className, title, description, type}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState({
        title: '',
        description: ''
    })

    useEffect(() => {
        setValue({
            title: title ? title : t('settingClientDocumentsTitleDoc'),
            description: description ? description : t('settingClientDocumentsDescriptionDoc')
        })
    }, [t, description, title])

    const handleChangeIsEdit = () => {
        setIsEdit(prevState => !prevState);
    }

    const handleChangeValue = (e) => {
        e.persist();
        setValue(prevState => ({...prevState, [e.target.id]: e.target.value}))
    }
    return (
        <Card className={classNames(classes.root, className)}>
            <div className={classes.icon}>
                {isEdit
                    ? <label htmlFor='upload_doc'>
                        <input
                            style={{display: 'none'}}
                            id='upload_doc'
                            name='doc'
                            type="file"
                            onChange={() => {
                            }}
                        />
                        <ButtonBase component="span">
                            <UploadDocumentIcon/>
                        </ButtonBase>
                    </label>
                    : <UploadDocumentIcon/>}
            </div>

            <div className={classes.right}>
                <div className={classes.title}>
                    {isEdit
                        ? <TextField fullWidth
                                     id='title'
                                     variant="outlined"
                                     defaultValue={value.title}
                                     onChange={handleChangeValue}
                        />
                        : <>{value.title}</>
                    }
                </div>
                <div className={classes.description}>
                    {isEdit
                        ? <TextField fullWidth
                                     id='description'
                                     variant="outlined"
                                     defaultValue={value.description}
                                     multiline
                                     onChange={handleChangeValue}
                        />
                        : <>{value.description}</>
                    }
                </div>
                {
                    type === 'new'
                        ? <CustomButton color={isEdit ? 'primary' : 'secondary'}
                                        className={classes.edit}
                                        fullWidth
                                        onClick={handleChangeIsEdit}
                                        endIcon={isEdit ? <SaveIcon/> : <EditIcon/>}>
                            {isEdit
                                ? t('settingClientInformationSaveBtnTitle')
                                : t('settingClientInformationEditBtnTitle')
                            }
                        </CustomButton>
                        : <div className={classes.btns}>
                            <IconButton onClick={handleChangeIsEdit}>
                                {isEdit ? <SaveIcon/> : <EditIcon/>}
                            </IconButton>
                            <IconButton>
                                <GetAppIcon/>
                            </IconButton>
                            <IconButton>
                                <PrintIcon/>
                            </IconButton>
                        </div>
                }
            </div>
        </Card>
    )
}

DocumentCard.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.oneOf(['new'])
}

export default DocumentCard;