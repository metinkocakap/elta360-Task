import React,{useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col } from 'react-bootstrap';
import './Task1.css'

const Checkbox = ({ context }) => {

 const {dispatch} =useContext(context);

  return (
    <fieldset
    onChange={e => {
      const { value, id } = e.target;
      dispatch({ type: "CHECKBOX_OPTION", payload: `${value}${id}` });
    }}
    >
    <Row className='mt-3'>
    <Col className='resCheck' md={12} lg={4} xl={4} >
    <Row>
      <Col className='d-flex justify-content-end'>  
      <input className='click ' type="checkbox"id='virtual-tour'value=" "/>
       <label className='checktext d-none d-lg-block' htmlFor="virtual-tour">Virtual Tour</label> </Col>
      </Row>

    {/* Mobile görünüm için */}
    
    <Col className='d-lg-none text-center'>
       <label className='checktext' htmlFor="virtual-tour">Virtual Tour</label> 
    </Col>
     {/* Mobile görünüm için bitiş */}

     </Col>
     <Col className='resCheck2 ' sm={12} md={12} lg={4} xl={4} >
    <Row>
      <Col className='d-flex justify-content-center'> 
     <input className='click'type="checkbox"  id='rendered-images'value=""/>
     <label className='checktext d-none d-lg-block' htmlFor="rendered-images">Rendered Images</label></Col>
    </Row>

 {/* Mobile görünüm için*/}
    <Col className='d-lg-none text-center'>
       <label className='checktext' htmlFor="rendered-images">Rendered Images</label> 
    </Col>
     {/* Mobile görünüm için bitiş */}
    
     </Col>
     <Col className='resCheck2' md={12} lg={4} xl={4}>
      <Row>
      <Col className='d-flex justify-content-start'> 
      <input className='click' type="checkbox"id='animated-video'value=" "/>
      <label className='checktext d-none d-lg-block' htmlFor="animated-video">Animated Video</label>
      </Col>
      </Row>

       {/* Mobile görünüm için*/}
      <Col className='d-lg-none text-center'>
       <label className='checktext' htmlFor="animated-video">Animated Video</label> 
    </Col>
      {/* Mobile görünüm için bitiş*/}
    
     </Col>
    </Row>
    </fieldset>
  )
}

export default Checkbox;
