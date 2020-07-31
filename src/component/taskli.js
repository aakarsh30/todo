import React, {useState} from 'react';
import '../App.css';
import {Button} from 'grommet';
import {Trash,Edit,Checkmark} from 'grommet-icons';
import {Box,Heading,TextArea} from 'grommet';
    
function Taskli(props) {
    const [back,setBack]= useState(true);
    const [sh,setSh] = useState(false);
    const [val,setval]=useState(props.content);
    
    function edit(){
        props.update(val);
        setSh(!sh);
        
    }


    return (
        <>
        <li style={{listStyle:"none"}}>
            <div className={`li ${back?'':'anime'}`}  >
                <p style={{flexGrow:"10"}} className="txt"> {props.content}</p>
                <div className="tls">
                    <Button icon={<Trash />} onClick={props.delete} className="tools" ></Button>
                    <Button icon={<Edit/>} onClick={()=>{setSh(true);}} className="tools" ></Button>
                    <Button icon={<Checkmark/>} onClick={ () => { setBack(!back); setTimeout(setBack(!back),1000); }}className="tools" ></Button>
                </div>
            </div>
        </li>
        
           { sh && <div>
            
                    <Box className="ad" >
                    <Box className="tk"> 
                        <Heading className="desc" >Edit Task</Heading>
                       <Box className="area">
                           <TextArea  resize={false} size="large" plain={true}  value={val} onChange={(event)=>{setval(event.target.value)}} ></TextArea>
                        </Box>
                        <Box direction="row" gap="small"  className="option">
                            <Button label="DONE" onClick={edit} primary></Button>
                            <Button label="Cancel" onClick={() => {setSh(!sh); }}  primary></Button>
                        </Box>
                    </Box>
                    </Box>
            
        </div>
    
}
        </>
        
    );
}

export default Taskli;