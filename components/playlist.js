import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styled from "styled-components";
import { usePlayerContext } from '@/app/store';
import { Draggable } from 'react-drag-reorder';
import ReactPlayer from 'react-player';
import { useRouter } from 'next/navigation';


function Playlist({getTime}) {

  const {updateVdoDetails,playlist_state,updatePlaylistState,video_details,updateTime,playVideo,setLoading} = usePlayerContext()



const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
const mediaQuery = window.matchMedia('(max-width:1200px)')
setIsMobile(mediaQuery.matches)

const handleMediaQuery = (event) => {
  setIsMobile(event.matches)
}

mediaQuery.addEventListener("change",handleMediaQuery)

return () => {
  mediaQuery.removeEventListener("change",handleMediaQuery)
}

}, [])

const handlePosChange = ( originalIndex, currentIndex) => {
  const reorderedList = arrayMove(playlist_state, originalIndex, currentIndex);
  const updatedList = updateIds(reorderedList);
  updatePlaylistState(updatedList);
};

const arrayMove = (array, from, to) => {
  const newArray = [...array];
  const [element] = newArray.splice(from, 1);
  newArray.splice(to, 0, element);
  return newArray;
};

const updateIds = (list) => {
  return list.map((item, index) => {
    return { ...item, id: index + 1 };
  });
};


  return (
    <Wrapper>
  
    <p className='title'>Playlist</p>
    <Draggable key={playlist_state} onPosChange={handlePosChange} >
    {playlist_state?.map((v,idx) => {
        return <div onClick={ () => {
        
          updateTime(video_details.id - 1,getTime())
        console.log(playVideo,"playVideo")
     

          updateVdoDetails(v)

        
        window.location.reload()
          
        }} key={v.id} className='card'>
        <div className='image' >
{video_details.title == v?.title && <div className='overlay'>Currently Playing</div>}
<Image src={v?.thumb} sizes='100%' fill alt={`${v.title} img`} />
{/* {videoToPlay == v?.title ? 
  <ReactPlayer width="100%" playing muted url={v?.sources[0]} height="auto" /> :
  
  <Image onMouseEnter={(e) => {
    e.preventDefault()
    e.stopPropagation()
    setVideoToPlay(v?.title)} } src={v?.thumb} sizes='100%' fill alt={`${v.title} img`} />
}   */}
        </div>
        <div className='details' >
            <h6>{v.title}</h6>
            <p>{ v.description.length > 100 ? (v.description.slice(0,100) + "...") : v.description}</p>
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
  margin-bottom:20px;

}

  .image{
    width:200px;
    height:120px;
    position:relative;
    min-width:200px;
  }

  .overlay {
  position: absolute; 
  bottom: 0; 
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1; 
  width: 100%;
  transition: .5s ease;
  opacity:1;
  color: white;
  font-size: 16px;
 height:100%;
 display: flex;
    justify-content: center;
    align-items: center;
  z-index:1
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
    
    width:100%;



  }
    @media (max-width: 600px) {
    
      .image{
      width:160px;
    height:100px;
    min-width:160px;
    }

    .details h6 {
margin-top:5px;
font-size:16px
  }

  .details p{
margin-top:5px;
    width:100%;
font-size:10px

  }



  }



`;

export default Playlist