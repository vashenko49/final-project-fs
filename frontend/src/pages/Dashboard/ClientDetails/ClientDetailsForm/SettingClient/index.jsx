import React, {useState} from 'react';
import CustomTabs from "@components/generic/CustomTabs";
import CustomTab from "@components/generic/CustomTab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TabPanel from "@components/generic/TabPanel";
import Information from "./Information";
import {useTranslation} from "react-i18next";
import Houses from "./Houses";
import Documents from "./Documents";
import Rent from "./Rent";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px'
    },
    tabs: {
        marginBottom: '20px'
    }
}));

const SettingClient = ({handleIsChooseHouses, handleIsChooseDocuments, handleIsChooseRent}) => {
    const classes = useStyles();
    const [selectTab, setSelectTab] = useState(0);
    const {t} = useTranslation();

    const tabs = [
        {label: t('settingClientTabInformation'), component: <Information/>},
        {label: t('settingClientTabHouses'), component: <Houses/>},
        {label: t('settingClientTabDocuments'), component: <Documents/>},
        {label: t('settingClientTabRent'), component: <Rent/>},
        {label: t('settingClientTabHistory'), component: <p>{t('settingClientTabHistory')}</p>}
    ]

    const handleChange = (event, newValue) => {
        setSelectTab(newValue);
        newValue === 1 ? handleIsChooseHouses(true) : handleIsChooseHouses(false);
        newValue === 2 ? handleIsChooseDocuments(true) : handleIsChooseDocuments(false);
        newValue === 3 ? handleIsChooseRent(true) : handleIsChooseRent(false);
    };
    return (
        <div className={classes.root}>
            <CustomTabs value={selectTab}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
                        className={classes.tabs}
            >
                {tabs.map((i, idx) => (
                    <CustomTab key={idx} label={i.label}/>
                ))}
            </CustomTabs>
            {tabs.map((i, idx) => (
                <TabPanel index={idx} key={idx} value={selectTab}>
                    {i.component}
                </TabPanel>
            ))}
        </div>
    )
}

export default SettingClient;