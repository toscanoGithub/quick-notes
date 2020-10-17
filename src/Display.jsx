import { Divider, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./Display.css";
import { stateValue, useStateValue } from "./StateProvider";
import ls from "local-storage";
import DeleteIcon from '@material-ui/icons/Delete';
import Moment from "react-moment";
import FlipMove from "react-flip-move";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
        backgroundColor: "#545F67",
        marginBottom: "0.5rem",
        color: "black",
        position:"relative"
    },
    
    creationDate: {
        fontSize: "0.8rem !important", color:"white !important"
    }


    }));

function Display() {
    const classes = useStyles();
    const [{ tasks }, dispatch] = useStateValue();

    

    
    

    const deleteTask = (id) => {
        
        dispatch({
            type: "REMOVE_TASK",
            id: id
        });
    }



   
    
    const showTasks = () => {
        
        return (
        <FlipMove
                enterAnimation="accordionVertical"
                leaveAnimation="none"
              >
            {tasks.map(task => {
                 return <Paper  variant="contained"  elevation="1" className={classes.root} key={task.id}>
                
                <div className="display__task__header">
                    <Typography variant="body1" component="h6" className="display__task__header__title">{task.title.toUpperCase()}</Typography>
                        <div ><Typography className={classes.creationDate} variant="body2" component="h6">
                            <Moment format="YYYY/MM/DD">{Date.now()}</Moment>
                            </Typography>
                        </div>
                </div>

                <Divider style={{opacity: "0.4", backgroundColor:"white", margin:"0.3rem auto"}} />
                
                <div className="display__task__body">
                    <Typography variant="body2" component="h5" className="display__task__content">{task.content}</Typography>
           
                <DeleteIcon color="error"   onClick={(e) => deleteTask(task.id)} className="display__task__delete" />
                    </div>
                    </Paper>
            })}
                </FlipMove>
        )
    }

    return (
        <div className="display">
            {tasks.length > 0 ?  showTasks() : <p>No tasks yet</p>}
        </div>
    )
}

export default Display

