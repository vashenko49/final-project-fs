import React, {useState} from "react";
import SelectView from "../../../../../components/generic/SelectView";
import * as PropTypes from "prop-types";
import DocumentCard from "../../../../../components/generic/DocumentCard";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {OutlinedInput} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import {Pagination} from "@material-ui/lab";

const useStyles = makeStyles({
    title: {
        font: 'normal normal bold 18px Roboto',
        color: '#293134',
        marginBottom: '15px'
    },
    filter: {
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    search: {
        '& .MuiOutlinedInput-input': {
            padding: '9px 16px 9px 0'
        },
        '& .MuiSvgIcon-root': {
            color: '#99a0a3'
        }
    },
    docs: {
        marginBottom: '20px'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        '& .MuiPaginationItem-page': {
            color: '#818E94',
        },
        '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#F88B38',
            color: '#FFFFFF'
        }
    }
})

const DocumentsDetails = ({typeDoc, houses, sort, docs}) => {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState();

    const onChangeSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const onChangePage = (e, page) => {

    }

    return (
        <>
            <div className={classes.title}>Існуючі контракти</div>
            <div className={classes.filter}>
                <OutlinedInput
                    id="search"
                    placeholder="Пошук"
                    defaultValue={searchValue}
                    onChange={onChangeSearch}
                    className={classes.search}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    }/>
                <SelectView
                    optionValues={typeDoc}
                    callback={choose => {
                    }}
                />
                <SelectView
                    nameSelect="Показати"
                    optionValues={houses}
                    callback={choose => {
                    }}
                />
                <SelectView
                    nameSelect="Сортувати"
                    optionValues={sort}
                    callback={choose => {
                    }}
                />
            </div>
            <Grid container spacing={1} className={classes.docs}>
                {docs.map((i, idx) => (
                    <Grid item key={idx}>
                        <DocumentCard
                                      title={i.title}
                                      description={i.description}
                        />
                    </Grid>
                ))}
            </Grid>
            <Pagination className={classes.pagination}
                        count={Math.ceil(docs.length / 10)}
                        onChange={onChangePage}
            />
        </>
    )
}

DocumentsDetails.defaultProps = {
    typeDoc: ['Контракт', 'Платіжка', 'Експлуатація'],
    houses: ['Всі будинки', 'House 1', 'House 2', 'House 3'],
    sort: ['По даті', 'Останні додані', 'По даті контракту', 'По імені від А до Я'],
    docs: [
        {
            id: 1,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 2,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 3,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 4,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 5,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 6,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 7,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 8,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 9,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 10,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 11,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 12,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        },
        {
            id: 13,
            title: 'Контракт 23_03_2020 H013…Овсієнко.pdf',
            description: 'Договір о довгостроковій оренді земельної ділянки',
            fileId: 123,
        }
    ]
}

DocumentsDetails.propTypes = {
    typeDoc: PropTypes.array.isRequired,
    houses: PropTypes.array.isRequired,
    sort: PropTypes.array.isRequired,
    docs: PropTypes.array.isRequired,
}

export default DocumentsDetails;