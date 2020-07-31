import React, { useState } from 'react';
import '../App.css';
import {Box,Button,TextArea,Heading} from 'grommet';
import {Add} from 'grommet-icons';
import Tskli from './taskli'

function Task() {
    const [Dpl , setDpl] = useState(false);
    const [value,setValue] = useState("");
    const[tsk,setTsk] = useState([])
    
 
    return(
    
    <Box>
       <ul>
           {
               
               tsk.map((post,i)=>{
                   
                   return(
                       <Tskli  key={i}  content={post} delete={()=>{
                           const copy=Object.assign([],tsk);
                           copy.splice(i,1);
                           setTsk(copy);
                       }} update={(val)=>{
                           const cop=Object.assign([],tsk);
                           cop[i]=val;
                           setTsk(cop);
                       }}></Tskli>
                   )
               })

           }

      </ul> 

        <Button label="ADD TASK" onClick={ () => setDpl(!Dpl)} primary size="large" reverse={true} icon={<Add/>} className="app"></Button>
        { Dpl &&
            <Box className="ad" >
            <Box className="tk"> 
                <Heading className="desc" >Task</Heading>
               <Box className="area">
                   <TextArea  resize={false} size="large" plain={true} placeholder="Describe your task here..." value={value} onChange={(event)=>{setValue(event.target.value)}} ></TextArea>
                </Box>
                <Box direction="row" gap="small"  className="option">
                    <Button label="ADD" icon={<Add/>} reverse={true} onClick={()=>{
                        
                        tsk.push(value);
                        setTsk(tsk);
                        setValue("");
                        setDpl(!Dpl);
                    }} primary></Button>
                    <Button label="Cancel" onClick={() => {setDpl(!Dpl); setValue("");}}  primary></Button>
                </Box>
            </Box>
            </Box>
        }
    </Box>
    );
}
export default Task;