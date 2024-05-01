// Filename - Progress_bar.js

import React, { useEffect, useState } from 'react'

const Progressbar = ({ bgcolor, progress, height }) => {
    const [progressval, setProgressVal] = useState(progress);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setProgressVal(() => {
                if (progressval > 50) {
                    clearInterval(intervalId);
                    return 10;
                } else {
                    return progressval + 0.01;
                }
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50
    }

    const Childdiv = {
        height: '100%',
        width: `${progressval}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progressval}%`}</span>
            </div>

        </div>
    )
}

export default Progressbar;
