import React,{useRef,useState} from 'react';
import DrawingPad from './DrawingPad';
import Epicycle from './Epicycle'
import './App.css';


export default function App() {
    const path = useRef([]);
    const [test,setTest] = useState(0);
    const [width,height]=[800,500];

    const pathAddpoint = (x,y)=>{
        path.current.push({x,y});
    }
    return (
        <div className="wrapper">
            <div className = "grid">
                <DrawingPad className="top center" width={width} height={height}
                    addpoint = {pathAddpoint}/>
                <Epicycle className="center" width={width} height={height}
                    path={path.current}
                    idx={test} />
            </div>
            <button onClick={()=> setTest(test + 1)} style={{display:'block'}}>Test</button>
        </div>
    )
}

