import styled from "styled-components";

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { usePlayerContext } from "@/app/store";
import ReactPlayer from "react-player";

const Player = forwardRef(function Player(props,ref){
  // const { video_details ,updateVdoDetails,playlist_state,setLoading} = usePlayerContext();
  const { video_details ,updateVdoDetails,playlist_state,setLoading,loading} = usePlayerContext();


const vdoRef = useRef(null)
const [isAutoPlay, setIsAutoPlay] = useState(false)

const onReady = useCallback(() => {
 
  setLoading(false)
  if(!isAutoPlay){
    vdoRef.current.seekTo(parseFloat(video_details.seek), 'seconds');
    setIsAutoPlay(true)
  }
}, [vdoRef.current,video_details.seek]);


useImperativeHandle(ref, () => {
  return {
    getCurrentTime() {
     return vdoRef.current.getCurrentTime();
    },
  };
}, []);


function onEnded(params) {
  console.log("ended");
  updateVdoDetails(playlist_state[video_details.id])
  window.location.reload()

}


  return (
    <Wrapper>

      <ReactPlayer
      config={{ file: { attributes: { controlsList: 'nodownload' } } }}
      {...props}
        ref={vdoRef} 
        onReady={onReady}
        fallback={<h1> Loading...</h1>}
        playing={isAutoPlay}
        onEnded={onEnded}
        muted      
        width="100%"
        height="auto"
        controls
        url={video_details?.sources?.[0]}
      />

      <div className="details">
        <h2>{video_details?.title}</h2>
        <p>{video_details?.description}</p>
      </div>
    </Wrapper>
  );
})

const Wrapper = styled.section`
  width: 65%;

  .details h2 {
    margin-top: 15px;
    font-size: 25px;
  }

  .details p {
    margin-top: 15px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 1200px) {
    
    width:100%

  }


`;

export default Player;
