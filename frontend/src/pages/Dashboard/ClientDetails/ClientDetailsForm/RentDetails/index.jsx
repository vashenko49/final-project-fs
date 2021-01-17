import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CustomTabs from "../../../../../components/generic/CustomTabs";
import CustomTab from "../../../../../components/generic/CustomTab";
import TabPanel from "../../../../../components/generic/TabPanel";
import RentDetailsMain from "./RentDetailsMain";
import SelectView from "../../../../../components/generic/SelectView";
import {useTranslation} from "react-i18next";
import Card from "../../../../../components/generic/Card";

const useStyles = makeStyles({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tabs: {
        width: '70%',
        '& .MuiTab-wrapper': {
            fontSize: '18px',
        },
        '& .MuiTab-textColorInherit': {
            marginRight: '50px'
        },
        '& .MuiTabs-flexContainer': {
            justifyContent: 'flex-start'
        }
    }
})

const RentDetails = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [selectTab, setSelectTab] = useState(0);
    const handleChange = (event, newValue) => {
        setSelectTab(newValue);
    };
    const tabs = [
        {label: 'Статистика оренди', component: <RentDetailsMain/>},
        {label: 'Додати нову статистику', component: 'Додати нову статистику'},
    ]

    return (
        <div>
            <div className={classes.header}>
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
                {selectTab === 0 && <SelectView
                    nameSelect={t('filterShow')}
                    optionValues={[
                        t('settingClientRentSendFilterAll'),
                        t('settingClientRentSendFilterFree'),
                        t('settingClientRentSendFilterBusy')
                    ]}
                    callback={choose => {
                    }}
                />}
            </div>
            <Card>
                {tabs.map((i, idx) => (
                    <TabPanel index={idx} key={idx} value={selectTab}>
                        {i.component}
                    </TabPanel>
                ))}
            </Card>
        </div>
    )
}

export default RentDetails;