  
import React from 'react';

import classes from './video.module.css';

const BackgroundVideo = () => {
    const videoSource = "http://mirrors.standaloneinstaller.com/video-sample/star_trails.mkv"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1>My first background</h1>
                    <button type="button" className="btn btn-outline-dark">Background</button>
                    <img
                        src="https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png"
                        alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;