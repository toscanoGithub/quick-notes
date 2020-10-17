import { Button, Input, TextField } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react'
import "./Create.css";
import { useStateValue } from "./StateProvider";
import uuid from 'react-uuid'
import ls from "local-storage";


function Create() {
    const titleRef = useRef("")
    const contentRef = useRef("")
    
    const [{ tasks }, dispatch] = useStateValue();
    const [task, settask] = useState(
        {
            id:"", title: "", content: ""
        }); 

    const handleSubmit = (e) => {   
        e.preventDefault();
       settask({
            id: uuid(), title: titleRef.current.value, content: contentRef.current.value
        })
        dispatch({
            type: "ADD_TASK",
            newTask: {id: uuid(), title: titleRef.current.value, content: contentRef.current.value}
        });

        e.target.reset();
    }

    return (
        <div className="create"> 
            <form onSubmit={handleSubmit}  className="create__form" >
                <TextField variant="primary"  ref={titleRef} autoComplete="off"   onChange={(e)=>titleRef.current.value = e.target.value}  className="create__form_title"
          label="Task Title"
          type="text"
          variant="outlined"
                />
                
                <TextField variant="primary"  ref={contentRef} autoComplete="off"    onChange={(e)=>contentRef.current.value = e.target.value}   className="create__form_title"
          label="Task Content"
          type="text"
          
                    variant="outlined"
                    multiline
                />
                
                <Button  fullWidth type="submit" className="create__btn" variant="contained" color="primary" >
  Send
</Button>
           </form>
        </div>
    )
}

export default Create
