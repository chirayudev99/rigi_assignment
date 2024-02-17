import styled from "styled-components";

import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { usePlayerContext } from "@/app/store";
import ReactPlayer from "react-player";

function Player(props){
  const { video_details } = usePlayerContext();

  console.log(video_details,"video_details");
const vdoRef = useRef(null)
const [isAutoPlay, setIsAutoPlay] = useState(false)


const onReady = useCallback(() => {
  const timeToStart = 7;
  vdoRef.current.seekTo(timeToStart, 'seconds');
  setIsAutoPlay(true)
}, [vdoRef.current]);

// useEffect(() => {

// vdoRef.current.seekTo(5,"seconds")
 
// }, [video_details.seek])


// useImperativeHandle(ref, () => {
//   return {
//     getCurrentTime() {
//      return vdoRef.current.getCurrentTime();
//     },
//   };
// }, []);



  return (
    <Wrapper>

      <ReactPlayer
      config={{ file: { attributes: { controlsList: 'nodownload' } } }}
      pip={false}
      {...props}
        ref={vdoRef} 
        onReady={onReady}
        playing={isAutoPlay}
        muted
        
        width="100%"
        height="auto"
        controls
        url={video_details?.sources?.[0]}
      />

      <div className="details">
        <h2>{video_details?.title}</h2>
        <p>{video_details.description}</p>
      </div>
    </Wrapper>
  );
}

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
