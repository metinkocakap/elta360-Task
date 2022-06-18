import { React } from 'react';
import { ContextProvider, Context } from './components/task1/Context';
import {
    BrowserRouter as Router,
    Route,
    Routes,

} from 'react-router-dom';
import Task1 from './components/task1/Task1';
import Task2 from "./components/task2/Task2";
import Home from "./components/Home";
import Print from './components/task2/Print';

function App() {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<Home />}></Route>
                <Route exact path='/task1' element={
                <ContextProvider>
                <Task1 context={Context} />
                </ContextProvider>}>
                </Route>
                <Route exact path='/task2' element={<Task2 />}></Route>
                <Route exact path='/print' element={<ContextProvider> 
                <Print context={Context} />
                </ContextProvider>}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
