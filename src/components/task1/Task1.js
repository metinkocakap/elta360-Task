import {React} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,ProgressBar,Row,Col } from 'react-bootstrap';
import Check from './Checkbox';
import Send from './Send';
import './Task1.css'

import { Context } from './Context';
const Task1 = ()   =>{
    const now = 30;
    return(
        
        <div>
    
<Container fluid className='card2 position-absolute top-50 start-50 translate-middle pt-5 pb-5'>
   
<Row>
    <Col className='d-flex justify-content-end'>
        <img className='d-none d-lg-block mt-1 me-2' style={{"height" : "23px" }}  src="assets/leftArrow.png" alt=''/>
        <span className='arrowsLeft d-none d-lg-block'>Back: Project concept </span>
    </Col>
    <Col className='mt-2 d-none d-lg-block '> 
        <ProgressBar className='Progstyle' variant="progress" now={now} />
    </Col>
    <Col className='d-none d-lg-block'>
        <span className='arrowsRight'>Next: Basic Details</span>
        <img className='mb-1 ms-2' style={{"height" : "23px" }}  src="assets/rightArrow.png" alt=''/>
    </Col>
</Row>
   {/* Mobil görünüm için */}
   <Row className='d-lg-none'>
    <Col className='mt-5 ' md={6} sm={6} xs={6}>
        <img className='mb-3 me-2' style={{"height" : "40px" }}  src="assets/leftArrow.png" alt=''/>
        <span className='arrows'>Back: Project concept </span>
    </Col>
    <Col className='d-flex justify-content-end mt-5'md={6} sm={6} xs={6}>
        <span className='arrows '>Next: Basic Details</span>
        <img className='mt-2 ms-2' style={{"height" : "40px" }}  src="assets/rightArrow.png" alt=''/>
    </Col>
        <Row className='d-flex justify-content-center'>
        <Col className='mt-5 ' md={7} sm={8} xs={8}> 
        <ProgressBar className='Progstyle' variant="progress" now={now} />
        </Col>
        </Row>
    <Row>
        <Col className='d-flex justify-content-center mt-5'>
        <img className='mobilephoto' src="assets/Group215.png" alt="" />
        </Col>
    </Row>
    </Row>
    {/* Mobil görünüm için bitiş */}
<Row className='text-center'>
    <Col className='mt-5' xl={12}>
            <span className='title '>Wonderful!</span>
    </Col>
    <Col  xl={12}>
          <span className='title '>We already know how to turn your project into spectacular visualization</span>  
    </Col>
</Row>
<Row>
    <Col className=' text-center mt-2'>
        <span className='subtitle'>The last step is to choose the visualization service/services you need, and we’re ready to begin crafting your project.</span>
    </Col>
</Row> 

<Row className='mt-5 '>
    <Col className='photo d-flex justify-content-end'>
            <img style={{"height" : "186px", "width" : "186px"}} src="assets/360-degree.png" alt=''/>
    </Col>
    <Col className='photo d-flex justify-content-center  mt-4'>
            <img style={{"height" : "150px", "width" : "214px"}} className='picturePhot' src="assets/picture.png" alt=''/>
    </Col>
    <Col className='photo d-flex justify-content-start  mt-4'>
            <img style={{"height" : "158px", "width" : "196px"}} className='videoPhoto' src="assets/video.png" alt=''/>
    </Col>
</Row>

<Row>
    <Col>
        <Check context={Context} />
    </Col>
</Row>  

<Row>
    <Col>
        <Send context={Context}/>
    </Col>         
</Row>
   
      <Col className='d-lg-none d-flex justify-content-end'>
       <img  className='picturePhoto' src="assets/Group131.png" alt=''/>
      </Col> 
   
      
 



  <Col className='d-none d-lg-block d-flex justify-content-end'>
       <img  className='picturePhoto2' src="assets/Group131.png" alt=''/>
      </Col> 
   
  </Container> 
  
 
     </div>
    );
};

export default  Task1;