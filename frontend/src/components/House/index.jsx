import React, {useState} from "react";
import PauseIcon from '@material-ui/icons/Pause';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import StopIcon from '@material-ui/icons/Stop';
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import * as PropTypes from "prop-types";
import SmallUploadPhoto from "../generic/SmallUploadPhoto";
import CustomButton from "../generic/CustomButton";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(() => ({
    root: ({isActive}) => ({
        padding: '10px 10px 15px',
        backgroundColor: isActive ? '#254A93' : 'transparent',
        color: isActive ? '#FFFFFF' : '#0D0D0D',
        borderRadius: '20px',
        boxShadow: '0px 2px 4px #00000033',
        width: '182px',
        height: '223px',
        textAlign: 'center',
        boxSizing: 'border-box'
    }),
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '109px',
        backgroundColor: '#EEF5FF',
        borderRadius: '15px',
        marginBottom: '5px',
        '&>img': {
            width: '100%',
        }
    },
    contract: ({isActive}) => ({
        font: 'normal normal normal 12px Roboto',
        color: isActive ? '#FFFFFF' : '#99A0A3',
        opacity: isActive ? '0.7' : '1',
        marginBottom: '5px'
    }),
    status: {
        marginBottom: '5px',
        font: 'normal normal bold 18px Roboto',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        '&>.MuiSvgIcon-root':{
            marginRight: '9px',
            padding: 0
        }
    },
    address: {
        font: 'normal normal normal 12px Roboto',
        opacity: '1'
    },
    edit: {
        width: "115px",
        '&:hover': {
            backgroundColor: '#254A93',
            color: '#FFFFFF',
        }
    },
}));

const House = ({className, isActive, img, contractDate, houseId, address, status, isCreated, onChangeImage, ...otherProps}) => {
    const classes = useStyles({isActive});
    const {t} = useTranslation();
    const [isEdit, setIsEdit] = useState(false);

    const handleChangeIsEdit = () => {
        setIsEdit(prevState => !prevState)
    }

    const statusesIcon = {
        free: <PauseIcon htmlColor='#4AD584'/>,
        stop: <StopIcon htmlColor='#FA505D'/>,
        shipping: <LocalShippingIcon htmlColor='#F88B38'/>
    }

    return (
        <div className={classNames(classes.root, className)}>
            <div className={classes.img}>
                {img
                    ? <img src={img} alt="house"/>
                    : <SmallUploadPhoto name='photoHouse' onChange={onChangeImage}/>
                }
            </div>
            <div className={classes.contract}>{t('cardHouseContractTitle')} {contractDate}</div>
            <div className={classes.status}>
                {statusesIcon[status]}
                <span>ID {houseId}</span>
            </div>
            {isCreated
                ? <CustomButton color={isEdit ? 'primary' : 'secondary'}
                                className={classes.edit}
                                onClick={handleChangeIsEdit}
                                endIcon={isEdit ? <SaveIcon/> : <EditIcon/>}>
                    {isEdit
                        ? t('settingClientInformationSaveBtnTitle')
                        : t('settingClientInformationEditBtnTitle')
                    }
                </CustomButton>
                :<div className={classes.address}>{address}</div>
            }
        </div>
    )
}

House.propTypes = {
    className: PropTypes.string,
    isActive: PropTypes.bool,
    isCreated: PropTypes.bool,
    img: PropTypes.string,
    contractDate: PropTypes.string,
    onChangeImage: PropTypes.func,
    houseId: PropTypes.string,
    address: PropTypes.string,
    status: PropTypes.oneOf(['free', 'stop', 'shipping']),
}

House.defaultProps = {
    isActive: false,
    isCreated: true,
    contractDate: '------------',
    houseId: '00000',
    status: 'stop',
}

export default House;