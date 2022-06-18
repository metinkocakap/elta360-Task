import { clear } from '@testing-library/user-event/dist/clear';
import {React,useContext} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Row,Col } from 'react-bootstrap';

const Print = ({context})   =>{
    const state = useContext(context);

    return(
        <>
        <Card className='position-absolute top-50 start-50 translate-middle w-50'>
         <Col className='mt-5 ms-5'>  
         <h1>{`Seçimler: ${state.state.checkbox}!`}</h1>
         </Col>
         
          <Row className='mb-5 mt-5'>
           <Col className='d-flex justify-content-center'>
           <button className='btn btn-primary p-3' >
           <Link className='text-white text-decoration-none ' to='/task1'>Seçimleri Temizlemeden Geri Dön!</Link> 
           </button><br />
           </Col>
           <Col className='d-flex justify-content-center'>
          <button className='btn btn-primary ' >
         
            <Link className='text-white text-decoration-none' to='/task1' onClick={() => clear.state.state.checkbox}>Seçimleri Temizle Geri Dön!</Link>
          </button>
          </Col>
          </Row>
          </Card>     

       
        
        </>
    
    );
}
export default  Print;