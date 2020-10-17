import { Box, Divider, Paper, Tab, Tabs } from '@material-ui/core';
import React from 'react'
import "./Segment.css";
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Display from './Display';
import Create from './Create';

function Segment() {

  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
      
    <React.Fragment >
            <Box  style={{position:"sticky", top:0, zIndex:"300 !important"}}   boxShadow={1}  className="segment">
        <Tabs
          value={value}
          
        onChange={handleChange}
        variant="fullWidth"
         indicatorColor="secondary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab   className="segment__tab"  icon={<CreateIcon />} label="Create Note" />
          <Tab className="segment__tab" icon={<VisibilityIcon />} label="Show Notes" />
        </Tabs>
        
      </Box>
      <div className="main">
        {value == 0 && <Create />}
      {value == 1 && <Display />}
      </div>
      </React.Fragment>
            
    )
}

export default Segment
