import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import House from "../../../../../../components/House";
import Grid from "@material-ui/core/Grid";
import CustomButton from "../../../../../../components/generic/CustomButton";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import Box from "@material-ui/core/Box";
import {TextField} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(() => ({
    housesList: {
        marginBottom: '25px',
    },
    descriptionValue: {
        font: 'normal normal normal 14px/19px Roboto',
        color: '#B1B4BA'
    },
    edit: {
        width: "115px",
        float: 'right',
        '&:hover': {
            backgroundColor: '#254A93',
            color: '#FFFFFF',
        }
    },
    description: {
        marginBottom: '20px',
    }
}));

const Houses = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [isEdit, setIsEdit] = useState({
        description: false
    })
    const [value, setValue] = useState({
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    })
    const [selectHouse, setSelectHouse] = useState(0)
    const [loadImg, setLoadImg] = useState(null)

    const handleChangeIsEdit = (e) => {
        let id = e.currentTarget.id;
        setIsEdit(prevState => ({...prevState, [id]: !prevState[id]}))
    }

    const handleChangeValue = (e) => {
        setValue(prevState => ({...prevState, [e.currentTarget.id]: e.currentTarget.value}))
    }

    const onChangeImage = (e) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            setLoadImg(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    return (
        <>
            <Grid container spacing={1} className={classes.housesList}>
                <Grid item>
                    <ButtonBase onClick={() => setSelectHouse(0)}>
                        <House
                            contractDate="11.07.2020"
                            isActive={selectHouse === 0}
                            address="Яблуниця Івано-Франківська область"
                            img="https://res.cloudinary.com/marksem/image/upload/v1607679211/photos/manager%40com.ua/houses/photo_2020-05-12_11-29-49_2x_nlzhdo.png"
                            houseId="00170"
                            isCreated={false}
                            status="free"/>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <ButtonBase onClick={() => setSelectHouse(1)}>
                        <House
                            isActive={selectHouse === 1}
                            contractDate="11.07.2020"
                            address="Яблуниця Івано-Франківська область"
                            isCreated={false}
                            img="https://res.cloudinary.com/marksem/image/upload/v1607684111/photos/manager%40com.ua/houses/000000001_2x_n1kdbg.png"
                            houseId="00177"
                            status="shipping"/>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <House onChangeImage={onChangeImage} img={loadImg}/>
                </Grid>
            </Grid>

            <div className={classes.description}>
                {isEdit.description
                    ? <TextField fullWidth
                                 id='description'
                                 variant="outlined"
                                 defaultValue={value.description}
                                 multiline
                                 onChange={handleChangeValue}
                    />
                    : <div className={classes.descriptionValue}>{value.description}</div>
                }
            </div>

            <Box justifyContent="flex-end" display="flex">
                <CustomButton color={isEdit.description ? 'primary' : 'secondary'}
                              id='description'
                              className={classes.edit}
                              onClick={handleChangeIsEdit}
                              endIcon={isEdit.description ? <SaveIcon/> : <EditIcon/>}>
                    {isEdit.description
                        ? t('settingClientInformationSaveBtnTitle')
                        : t('settingClientInformationEditBtnTitle')
                    }
                </CustomButton>
            </Box>

            {/*<div>*/}
            {/*    <img src="https://res.cloudinary.com/marksem/image/upload/v1607707890/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-49_2x_mg8ejh.png" alt=""/>*/}
            {/*    <div>*/}
            {/*        <img src="https://res.cloudinary.com/marksem/image/upload/v1607707997/photos/manager%40com.ua/houses/1/photo_2020-05-11_12-35-42_2x_czk9zw.png" alt=""/>*/}
            {/*        <img src="https://res.cloudinary.com/marksem/image/upload/v1607707928/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-57_2x_lqxhs8.png" alt=""/>*/}
            {/*        <img src="https://res.cloudinary.com/marksem/image/upload/v1607707928/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-57_2x_lqxhs8.png" alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default Houses;