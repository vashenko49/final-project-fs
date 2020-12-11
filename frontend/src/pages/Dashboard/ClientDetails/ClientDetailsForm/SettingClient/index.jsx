import React, {useState} from 'react';
import CustomTabs from "../../../../../components/generic/CustomTabs";
import CustomTab from "../../../../../components/generic/CustomTab";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TabPanel from "../../../../../components/generic/TabPanel";
import Information from "./Information";
import {useTranslation} from "react-i18next";
import Houses from "./Houses";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px'
    },
}));

const SettingClient = () => {
    const classes = useStyles();
    const [selectTab, setSelectTab] = useState(1);
    const {t} = useTranslation();

    const tabs = [
        {label: t('settingClientTabInformation'), component: <Information/>},
        {label: t('settingClientTabHouses'), component: <Houses/>},
        {label: t('settingClientTabDocuments'), component: <p>{t('settingClientTabDocuments')}</p>},
        {label: t('settingClientTabRent'), component: <p>{t('settingClientTabRent')}</p>},
        {label: t('settingClientTabHistory'), component: <p>{t('settingClientTabHistory')}</p>}
    ]

    const handleChange = (event, newValue) => {
        setSelectTab(newValue);
    };
    return (
        <div className={classes.root}>
            <CustomTabs value={selectTab}
                        onChange={handleChange}
                        aria-label="styled tabs example"
                        variant="scrollable"
                        scrollButtons="auto"
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