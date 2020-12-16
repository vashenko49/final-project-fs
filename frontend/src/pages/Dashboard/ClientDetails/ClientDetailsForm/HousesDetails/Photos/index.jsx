import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";
import {ButtonBase} from "@material-ui/core";

const useStyles = makeStyles({
    mainImg: {
        boxShadow: '0px 3px 6px #00000033',
        borderRadius: '15px',
        marginBottom: '10px',
        height: '230px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > img': {
            maxWidth: '100%',
            maxHeight: '100%'
        }
    },
    lastImgContainer: {
        position: 'relative'
    },
    lastImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        color: '#FFFFFF',
        font: 'normal normal normal 24px Roboto',
        borderRadius: '8px',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.35)'
    },
    otherImg: {
        '& .MuiGrid-item ': {
            borderRadius: '8px',
            display: 'flex'
        }
    },
})

const Photos = ({images}) => {
    const classes = useStyles();
    const [selectImg, setSelectImg] = useState(0);
    const [openOtherImage, setOpenOtherImage] = useState(false);

    const handleChangeImage = (idx) => {
        setSelectImg(idx);
    }

    const handleOpenOtherImage = ()=> {
        setOpenOtherImage(true);
    }

    return (
        <>
            <div className={classes.mainImg}>
                <img
                    src={images[selectImg]}
                    alt="house"
                />
            </div>
            <Grid container spacing={1} className={classes.otherImg}>
                {images.length > 3 && !openOtherImage
                    ? (
                        <>
                            <Grid item xs={4}>
                                <ButtonBase onClick={() => handleChangeImage(0)}>
                                    <img
                                        src={images[0]}
                                        alt="house"
                                        width="100%"
                                    />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={4}>
                                <ButtonBase onClick={() => handleChangeImage(1)}>
                                    <img
                                        src={images[1]}
                                        alt="house"
                                        width="100%"
                                    />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={4}>
                                <ButtonBase onClick={handleOpenOtherImage}>
                                    <div className={classes.lastImgContainer}>
                                        <div className={classes.lastImg}>+ {images.length - 3}</div>
                                        <img
                                            src={images[2]}
                                            alt="house"
                                            width="100%"
                                        />
                                    </div>
                                </ButtonBase>
                            </Grid>
                        </>
                    )
                    : (
                        images.map((i, idx) => (
                            <Grid item xs={4} key={idx}>
                                <ButtonBase onClick={() => handleChangeImage(idx)}>
                                    <img
                                        src={i}
                                        alt="house"
                                        width="100%"
                                    />
                                </ButtonBase>
                            </Grid>
                        ))
                    )
                }


            </Grid>
        </>
    )
}

Photos.defaultProps = {
    images: [
        'https://res.cloudinary.com/marksem/image/upload/v1607707890/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-49_2x_mg8ejh.png',
        'https://res.cloudinary.com/marksem/image/upload/v1607707997/photos/manager%40com.ua/houses/1/photo_2020-05-11_12-35-42_2x_czk9zw.png',
        'https://res.cloudinary.com/marksem/image/upload/v1607707928/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-57_2x_lqxhs8.png',
        'https://res.cloudinary.com/marksem/image/upload/v1607707928/photos/manager%40com.ua/houses/1/photo_2020-05-12_11-29-57_2x_lqxhs8.png'
    ]
}

Photos.propTypes = {
    images: PropTypes.array.isRequired
}

export default Photos;