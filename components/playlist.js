import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from "styled-components";
import { usePlayerContext } from '@/app/store';
import { Draggable } from 'react-drag-reorder';
import ReactPlayer from 'react-player';


function Playlist({getTime}) {

  const {updateVdoDetails,playlist_state,updatePlaylistState,video_details,updateTime} = usePlayerContext()


  console.log(playlist_state,"playlist_state");
  console.log(video_details,"playlist_video_details");
  const [videoToPlay, setVideoToPlay] = useState()


  return (
    <Wrapper>
  
    <p className='title'>Playlist</p>
    <Draggable onPosChange={(currentPos, newPos) => {
      let arr = playlist_state
      let element = arr[currentPos];
    arr.splice(currentPos, 1);
    arr.splice(newPos, 0, element);
    updatePlaylistState(arr)
  }} >
    {playlist_state.map((v,idx) => {
        return <div onClick={() => {
          updateTime(video_details.id - 1,getTime())
          updateVdoDetails(v)
        }} key={idx} className='card' >
        <div className='image' >

{videoToPlay == v?.title ? 
  <ReactPlayer width="100%" playing muted url={v?.sources[0]} height="auto" /> :
  <Image onMouseEnter={(e) => {
    e.preventDefault()
    e.stopPropagation()
    setVideoToPlay(v?.title)} } src={v?.thumb} sizes='100%' fill alt={`${v.title} img`} />
}
      

        </div>
        <div className='details' >
            <h6>{v.title}</h6>
            <p>{v.description.length > 100 ? (v.description.slice(0,100) + "...") : v.description}</p>
        </div>
<div>

</div>
        </div>
    })}
    </Draggable>
   

    </Wrapper>
  )
}

const Wrapper = styled.section`

width:30%;

.title{
  margin-bottom: 20px;
    font-size: 25px;
    font-weight: bold;
    text-decoration: u;
    text-decoration: underline;
}

.card{
  display:flex;
  gap:1rem;
  margin-bottom:20px
}

  .image{
    width:200px;
    height:120px;
    position:relative;
    min-width:200px;
  }

  .details h6 {
margin-top:10px;
font-size:20px
  }

  .details p{
margin-top:10px;
    width:100%;
font-size:12px

  }

    @media (max-width: 1200px) {
    
    width:100%

  }
`;

export default Playlist