import React,{useContext} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

const Send = ({context}) => {
    const state = useContext(context);
    return(
        <>
    <Row className='sendButton' >
     
            <button className='con-Btn2 btn btn-primary  d-none d-lg-block'>
                 <Link className='text-decoration-none text-white' to='/print' onClick={()=> console.log(state.state.checkbox)}>CONTINUE</Link>
            </button>

            <button className='con-Btn btn btn-primary d-lg-none'>
                 <Link className='text-decoration-none text-white' to='/print' onClick={()=> console.log(state.state.checkbox)}>CONTINUE</Link>
            </button>
    </Row>
       
            
           
        </>
    );
}
export default  Send;