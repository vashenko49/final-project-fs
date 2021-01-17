import React, {useState} from "react";
import CustomTabs from "../../../components/generic/CustomTabs";
import CustomTab from "../../../components/generic/CustomTab";
import {useTranslation} from "react-i18next";
import TabPanel from "../../../components/generic/TabPanel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MyHouses from "./MyHouses";
import SelectView from "../../../components/generic/SelectView";
import Management from "./Management";

const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
    },
    tabs: {
        '& .MuiTabs-flexContainer': {
            justifyContent: 'flex-start'
        },
        '& .MuiTab-root': {
            font: 'normal normal bold 18px Roboto',
            marginRight: '50px'
        }
    },

}));

const Houses = ({houses}) => {
    const classes = useStyles();
    const [selectTab, setSelectTab] = useState(0);
    const {t} = useTranslation();

    const tabs = [
        {label: t('housesTabTitleMyHouses'), component: <MyHouses houses={houses}/>},
        {label: t('housesTabTitleSettings'), component: <Management houses={houses}/>}
    ]

    const handleChange = (event, newValue) => {
        setSelectTab(newValue);
    };

    return (
        <>
            <div className={classes.main}>
                <CustomTabs value={selectTab}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            className={classes.tabs}
                >
                    {tabs.map((i, idx) => (
                        <CustomTab key={idx} label={i.label}/>
                    ))}
                </CustomTabs>
                <SelectView
                    nameSelect={t('filterShow')}
                    optionValues={selectTab === 0
                        ? [
                            t('settingClientRentSendFilterAll'),
                            t('settingClientRentSendFilterFree'),
                            t('settingClientRentSendFilterBusy')
                        ]
                        : ['Всі будинки', ...houses.map(i => i.houseId)]
                    }
                    callback={choose => {
                    }}
                />
            </div>
            {tabs.map((i, idx) => (
                <TabPanel index={idx} key={idx} value={selectTab}>
                    {i.component}
                </TabPanel>
            ))}
        </>
    )
}

Houses.defaultProps = {
    houses: [
        {
            img: "https://res.cloudinary.com/marksem/image/upload/v1607707890/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-49_2x_mg8ejh.png",
            contractDate: "11.07.2020",
            area: '80 m2',
            status: "free",
            type: 'Standart',
            houseId: "00170",
            address: "Яблуниця Івано-Франківська область",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            img: "https://res.cloudinary.com/marksem/image/upload/v1607684111/photos/manager%40com.ua/houses/000000001_2x_n1kdbg.png",
            contractDate: "11.07.2020",
            area: '80 m2',
            status: "shipping",
            type: 'Standart',
            houseId: "00170",
            address: "Яблуниця Івано-Франківська область",
            description: "123"
        },
    ]
}

export default Houses;