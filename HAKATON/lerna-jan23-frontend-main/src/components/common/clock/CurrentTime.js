import {useEffect, useState} from 'react';

function CurrentTime() {
    const [currentTime,setCurrentTime] = useState(new Date().toISOString());
    // useEffect(()=>{
    //     const timerId = setInterval(()=>{
    //         setCurrentTime(new Date().toISOString());
    //     },1000);
    //     return ()=>{
    //         clearInterval(timerId);
    //     };
    // },[]);

    useEffect(()=>{
        console.log(currentTime);
    }, [currentTime])

    return <div className="card">
        <div className="card-header">
            <h6>Trenutno vrijeme</h6>
        </div>
        <div className="card-body">
            <span>{currentTime}</span>
        </div>
    </div>
}
export default CurrentTime;