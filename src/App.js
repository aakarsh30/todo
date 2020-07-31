import React from 'react';
import Add from './component/addtask';
import './App.css';
import {Box,Header,Heading} from 'grommet';


function App() {
    return (
        <>
            <Header background="#20232a" className="frm">
                <Heading responsive={true} textAlign="center" alignSelf="center"  size="large"> To Do </Heading>
            </Header>
            <Box className="bd">
                <Add ></Add>
            </Box>
        </>
    );
}
export default App;