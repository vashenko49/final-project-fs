import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import CustomButton from "@components/generic/CustomButton";
import SelectView from "@components/generic/SelectView";
import ChatIcon from "@material-ui/icons/Chat";
import HouseList from "@components/HouseList/HouseList";

const useStyles = makeStyles(() => ({
    titleContainer: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px'
    },
    title: {
        font: 'normal normal bold 16px Roboto',
        color: '#293134'
    },
    housesList: {
        marginBottom: '20px',
    },
    sendContainer: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },
    sendTitle: {
        font: 'normal normal normal 16px Roboto',
        color: '#293134'
    }
}));

const Rent = ({houses}) => {
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <>
            <div className={classes.titleContainer}>
                <div className={classes.title}>{t('settingClientRentTitle')}</div>
                <SelectView
                    nameSelect={t('filterShow')}
                    optionValues={[
                        t('settingClientRentSendFilterAll'),
                        t('settingClientRentSendFilterFree'),
                        t('settingClientRentSendFilterBusy')
                    ]}
                    callback={choose => {
                    }}
                />
            </div>
            <HouseList houses={houses}/>

            <div className={classes.sendContainer}>
                <div className={classes.sendTitle}>{t('settingClientRentSendTitle')}</div>
                <CustomButton
                    color="secondary"
                    onClick={() => {
                    }}>
                    {t('settingClientRentSendBtnTitle')}
                </CustomButton>
            </div>
            <CustomButton width="130px"
                          endIcon={<ChatIcon/>}
                          onClick={() => {
                          }}>
                {t('settingClientInformationWriteBtnTitle')}
            </CustomButton>
        </>
    )
}

Rent.defaultProps = {
    houses: [
        {
            img: "https://res.cloudinary.com/marksem/image/upload/v1607707890/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-49_2x_mg8ejh.png",
            contractDate: "11.07.2020",
            status: "free",
            houseId: "00170",
            address: "Яблуниця Івано-Франківська область",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://res.cloudinary.com/marksem/image/upload/v1607684111/photos/manager%40com.ua/houses/000000001_2x_n1kdbg.png",
            contractDate: "11.07.2020",
            status: "shipping",
            houseId: "00170",
            address: "Яблуниця Івано-Франківська область",
            description: "123"
        },
    ]
}

export default Rent;