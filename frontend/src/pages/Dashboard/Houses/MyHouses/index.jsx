import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Photos from "../../ClientDetails/ClientDetailsForm/HousesDetails/Photos";
import {useTranslation} from "react-i18next";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import Card from "../../../../components/generic/Card";
import {CircularProgress} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import PrintIcon from "@material-ui/icons/Print";
import CustomButton from "../../../../components/generic/CustomButton";
import Maps from "../../../../components/Maps/Maps";
import HouseList from "../../../../components/HouseList/HouseList";

const useStyles = makeStyles(() => ({
    housesDetails: {
        display: 'flex',
    },
    photos: {
        width: '45%'
    },
    details: {
        width: '55%',
        marginLeft: '30px',
    },
    detailsHead: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
    },
    detailsId: {
        font: 'normal normal bold 24px Roboto',
        color: '#9DC2FF',
    },
    detailsInfo: {
        marginBottom: '35px'
    },
    detailsInfoTitle: {
        textAlign: 'left',
        font: 'normal normal bold 16px Roboto',
        color: '#0D0D0D'
    },
    detailsInfoDescription: {
        textAlign: 'left',
        font: 'normal normal normal 16px Roboto',
        color: '#6E7375'
    },
    status: {
        display: 'flex',
        alignItems: 'center',
        '&>.MuiSvgIcon-root': {
            marginLeft: '10px',
            padding: 0
        }
    },
    detail: {
        margin: '25px 0'
    },
    detailTitle: {
        font: 'normal normal bold 18px Roboto',
        color: '#293134',
        marginBottom: '10px'
    },
    detailText: {
        font: 'normal normal normal 16px Roboto',
        color: '#6E7375'
    },
    locationTitle: {
        font: 'normal normal bold 18px Roboto',
        color: '#293134',
        marginBottom: '20px'
    },
    statisticTitle: {
        font: 'normal normal bold 16px Roboto',
        color: '#293134',
        marginBottom: '10px'
    },
    statisticDetails: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomProgress: {
        color: '#EAEAEA '
    },
    topProgress: {
        color: '#4AD584 '
    },
    descProgress: {
        font: 'normal normal bold 18px Roboto',
        color: '#0D0D0D'
    },
    statisticDetailsDayMain: {
        font: 'normal normal bold 16px Roboto',
        color: '#0D0D0D'
    },
    statisticDetailsDay: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    statisticDetailsDayDesc: {
        font: 'normal normal normal 12px Roboto',
        color: '#99A0A3'
    },
    statisticDetailsDayDescTemp: {
        fontWeight: 'bold',
        color: '#4AD584'
    },
    statisticDetailsAmount: {
        font: 'normal normal bold 32px Roboto',
        color: '#293134'
    },
    iconPrint: {
        '& .MuiIconButton-root': {
            padding: 0,
            marginRight: '10px'
        }
    },
    locationMaps: {
        width: '50%',
        position: 'relative'
    },
    locationChange: {
        position: 'absolute',
        bottom: '2%',
        right: '2%'
    }
}));

const MyHouses = ({houses}) => {
    const classes = useStyles();
    const [selectHouse, setSelectHouse] = useState(0);
    const {t} = useTranslation();

    const handleSelectHouse = (idx) => {
        setSelectHouse(idx);
    }

    const statusesIcon = {
        free: <PauseIcon htmlColor='#4AD584'/>,
        stop: <StopIcon htmlColor='#FA505D'/>,
        shipping: <LocalShippingIcon htmlColor='#F88B38'/>
    }
    return (
        <div>
            <HouseList onSelectHouse={handleSelectHouse} houses={houses}/>
            <Card>
                <div className={classes.housesDetails}>
                    <div className={classes.photos}>
                        <Photos/>
                    </div>
                    <div className={classes.details}>
                        <div className={classes.detailsHead}>
                            <div className={classes.detailsId}>ID {houses[selectHouse].houseId}</div>
                            <div className={classes.iconPrint}>
                                <IconButton>
                                    <PrintIcon/>
                                </IconButton>
                                <CustomButton color="secondary"
                                              endIcon={<GetAppIcon/>}>{t('btnTitleExport')}</CustomButton>
                            </div>
                        </div>
                        <Grid container spacing={2} className={classes.detailsInfo}>
                            <Grid item xs={12} container>
                                <Grid item md={5} xs={12}>
                                    <div className={classes.detailsInfoTitle}>{t('housesDetailsStatusTitle')}</div>
                                </Grid>
                                <Grid item md={7} xs={12}>
                                    <div className={classes.detailsInfoDescription}>
                                        <div className={classes.status}>
                                            <span>{houses[selectHouse].status}</span> {statusesIcon[houses[selectHouse].status]}
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} container>
                                <Grid item md={5} xs={12}>
                                    <div className={classes.detailsInfoTitle}>{t('housesDetailsAreaTitle')}</div>
                                </Grid>
                                <Grid item md={7} xs={12}>
                                    <div className={classes.detailsInfoDescription}>
                                        {houses[selectHouse].area}
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} container>
                                <Grid item md={5} xs={12}>
                                    <div className={classes.detailsInfoTitle}>{t('housesDetailsAddressTitle')}</div>
                                </Grid>
                                <Grid item md={7} xs={12}>
                                    <div className={classes.detailsInfoDescription}>
                                        {houses[selectHouse].address}
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} container>
                                <Grid item md={5} xs={12}>
                                    <div className={classes.detailsInfoTitle}>{t('housesDetailsTypeTitle')}</div>
                                </Grid>
                                <Grid item md={7} xs={12}>
                                    <div className={classes.detailsInfoDescription}>
                                        {houses[selectHouse].type}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Card>
                            <div className={classes.statisticTitle}>{t('myHousesStatisticTitle')}</div>
                            <div className={classes.statisticDetails}>
                                <Box position="relative" display="inline-flex">
                                    <Box
                                        top={0}
                                        left={0}
                                        bottom={0}
                                        right={0}
                                        position="absolute"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <CircularProgress className={classes.bottomProgress} size={94} thickness={1.5}
                                                          variant="determinate" value={100}/>
                                    </Box>
                                    <Box position="relative" display="inline-flex">
                                        <CircularProgress className={classes.topProgress} size={94} thickness={1.5}
                                                          variant="determinate"
                                                          value={57}/>
                                        <Box
                                            top={0}
                                            left={0}
                                            bottom={0}
                                            right={0}
                                            position="absolute"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Typography variant="caption" component="div"
                                                        className={classes.descProgress}>57%</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <div className={classes.statisticDetailsDay}>
                                    <div
                                        className={classes.statisticDetailsDayMain}>20 {t('myHousesStatisticDetailsDayMain')}</div>
                                    <div className={classes.statisticDetailsDayDesc}><span
                                        className={classes.statisticDetailsDayDescTemp}>&uarr; +12%</span> {t('myHousesStatisticDetailsDayDescTemp')}
                                    </div>
                                </div>
                                <div className={classes.statisticDetailsAmount}>$3.573K</div>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className={classes.detail}>
                    <div className={classes.detailTitle}>{t('myHousesStatisticDetailTitle')}</div>
                    <div className={classes.detailText}>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                    </div>
                </div>
                <div>
                    <div className={classes.locationTitle}>{t('myHousesStatisticLocationTitle')}</div>
                    <div className={classes.locationMaps}>
                        <Maps height={300} position={{lat: 50.2982967, lng: 29.3832117}}/>
                        <CustomButton width='auto' className={classes.locationChange}>Змінити локацію</CustomButton>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default MyHouses;