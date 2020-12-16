import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import House from "@components/House";
import Grid from "@material-ui/core/Grid";
import CustomButton from "@components/generic/CustomButton";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import Box from "@material-ui/core/Box";
import {TextField} from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
import {useDispatch} from "react-redux";
import * as ChooseHouseSetting from "@redux/action/ChooseHouseSetting";

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

const Houses = ({houses}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState({
        description: false
    })
    const [selectHouse, setSelectHouse] = useState(0)
    const [loadImg, setLoadImg] = useState(null)
    const [value, setValue] = useState({
        description: ''
    })

    useEffect(() => {
        setValue(prevState => ({...prevState, description: houses[0].description}))
    }, [houses])

    const handleChangeIsEdit = (e) => {
        let id = e.currentTarget.id;
        setIsEdit(prevState => ({...prevState, [id]: !prevState[id]}))
    }

    const handleChangeValue = (e) => {
        e.persist();
        setValue(prevState => ({...prevState, [e.target.id]: e.target.value}))
    }

    const onChangeImage = (e) => {
        let reader = new FileReader();
        reader.onloadend = () => {
            setLoadImg(reader.result);
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const handleSelectHouse = (idx) => {
        dispatch(ChooseHouseSetting.setChooseHouseSetting(houses[selectHouse]))
        setSelectHouse(idx);
        setValue(prevState => ({...prevState, description: houses[idx].description}));
    }

    return (
        <>
            <Grid container spacing={1} className={classes.housesList}>
                {houses.map((i, idx) => (
                    <Grid item key={idx}>
                        <ButtonBase onClick={() => handleSelectHouse(idx)}>
                            <House
                                contractDate={i.contractDate}
                                isActive={selectHouse === idx}
                                address={i.address}
                                img={i.img}
                                status={i.status}
                                isCreated={false}
                                houseId={i.houseId}
                            />
                        </ButtonBase>
                    </Grid>
                ))}
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
        </>
    )
}

Houses.defaultProps = {
    houses: [
        {
            img: "https://res.cloudinary.com/marksem/image/upload/v1607679211/photos/manager%40com.ua/houses/photo_2020-05-12_11-29-49_2x_nlzhdo.png",
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

export default Houses;