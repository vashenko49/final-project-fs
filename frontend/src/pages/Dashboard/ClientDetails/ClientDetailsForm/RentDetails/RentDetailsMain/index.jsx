import React, {useState} from "react";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CustomDatePicker from "@components/generic/CustomDatePicker";

const useStyles = makeStyles(() => ({
    title: {
        font: ' normal normal bold 18px Roboto',
        color: '#293134'
    }
}))

const RentDetailsMain = () => {
    const classes = useStyles();
    const [date, setDate] = useState(new Date());
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]
    return (
        <>
            <div className={classes.title}>Статистика дохідності</div>
            <CustomDatePicker onChange={setDate} value={date}/>
            <CustomDatePicker onChange={setDate} value={date}/>
            <ResponsiveContainer height={250}>
                <BarChart data={data} barGap={0} barSize={15}>
                    <CartesianGrid stroke="rgba(177, 180, 186, 0.5)" vertical={false}/>
                    <XAxis dataKey="name" stroke="#6E7375" axisLine={false} tickLine={false} tick={{fontSize: 12}}/>
                    <YAxis stroke="#6E7375" axisLine={false} tickLine={false} tick={{fontSize: 12}}/>
                    <Tooltip/>
                    <Bar dataKey="pv" fill="#F88B38"/>
                    <Bar dataKey="uv" fill="#4AD584"/>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default RentDetailsMain;