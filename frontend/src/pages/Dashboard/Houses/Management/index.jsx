import React from "react";
import ManagementService from "../../../../components/ManagementService/ManagementService";
import ManagementTaskCard from "../../../../components/ManagementTaskCard/ManagementTaskCard";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    tasks:{
        marginBottom:'20px',
        '& > *':{
            marginBottom:'10px'
        }
    }
}))

const Management = ({tasksInfo}) => {
    const classes = useStyles();


    return (
        <>
            <div className={classes.tasks}>
                {tasksInfo.map(task => (
                    <ManagementTaskCard key={task.id} {...task}/>
                ))}
            </div>
            <ManagementService/>
        </>
    )
}

Management.defaultProps = {
    tasksInfo: [
        {
            id: 1,
            title: 'Період опалення будинку',
            date: '12.11.2020',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 2,
            title: 'Попередження про фарбування будинку',
            date: '12.11.2021',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    ]
}

export default Management;