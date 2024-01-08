// Stopwatch component
import React, { useState } from 'react';
import ReactStopwatch from 'react-stopwatch';
import { FiRefreshCw } from 'react-icons/fi';

const Stopwatch = ({ handleClockStatus }) => {
    const [isStopwatchReset, setStopwatchReset] = useState(false);

    const handleRestart = () => {
        setStopwatchReset(true);
        setTimeout(() => {
            setStopwatchReset(false);
        }, 0);
    };

    const removeTimer = () =>{
    
        handleClockStatus();

    }

    return (
        <div>
            <ReactStopwatch
                seconds={0}
                minutes={0}
                hours={0}
                limit="00:60:00"
                onCallback={() => console.log('Finish')}
                reset={isStopwatchReset}
                render={({ formatted }) => (
                    <div className='px-3 py-1 bg-[#464646] text-white rounded-md flex  items-center'>
                        <p onClick={removeTimer}>{formatted}</p>
                        {/* <h1  className='mx-2 cursor-pointer'>X</h1> */}
                        <FiRefreshCw onClick={handleRestart} className='cursor-pointer mx-1' />
                    </div>
                )}
            />
        </div>
    );
};

export default Stopwatch;
