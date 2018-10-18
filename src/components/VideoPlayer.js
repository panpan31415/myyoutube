import React from "react";
const VideoPlayer = ({description,id})=>{
    return(<div className="videoplayer">
        <iframe title={description} src={`https://www.youtube.com/embed/${id}`} allowFullScreen={true}  width="100%"
        height="100%"></iframe>
    </div>);
}

export default VideoPlayer;