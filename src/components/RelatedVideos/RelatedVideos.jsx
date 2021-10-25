//import { configure } from '@testing-library/dom';
import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './RelatedVideos.css'

function RelatedVideos(props) {
    //config.get('ApiKey'),
    const [relatives, setRelatives] = useState([]);
    useEffect (() => {
    const relatedVideo = axios.get('https://www.googleapis.com/youtube/v3/search'
        ,{
        params: {
            relatedToVideoId: {videoId},                   
            type: 'video',
            maxResults: 3,
            key: {API_key}
        }})
        .then ((response) => {
            setRelatives(response.data.items);
            
        })   
   
    },[]);   
    return (
<<<<<<< HEAD
        <div className= "relatedVid" >
             <h4 align= "center">Related Videos</h4>
            <div align="center">
            <iframe id="ytvideo" type="text/html" width="270" height="180"
            src= 'https://www.youtube.com/embed/xFrGuyw1V8s?autoplay=1' title="youtube video"
            frameBorder="0"></iframe>
            <iframe id="ytvideo" type="text/html" width="270" height="180"
            src='https://www.youtube.com/embed/xFrGuyw1V8s?autoplay=1' title="youtube video"
            frameBorder="0"></iframe>
            <iframe id="ytvideo" type="text/html" width="270" height="180"
            src='https://www.youtube.com/embed/xFrGuyw1V8s?autoplay=1' title="youtube video"
            frameBorder="0"></iframe>
            </div>
=======
        <div>
            <h4 align="center">Related Videos</h4>
            {relatives.map((item) =>{
                return (
                    <iframe id="ytvideo" type="text/html" width="270" height="180"
                    src= {`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`} title="youtube video"
                    frameBorder="0"></iframe>
                );

            })} 
>>>>>>> refs/remotes/origin/main
        </div>
    )
    
}

export default RelatedVideos;