import React from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Home = ()   =>{
    return(
        <>
        <Card className='w-50 position-absolute top-50 start-50 translate-middle'>
             <Link className='btn btn-primary text-white mb-3' to='/task1'>Task1</Link>
            <Link className='btn btn-primary text-white' to='/task2'>Task2</Link>
        </Card>
           
        </>
    );
}
export default  Home;