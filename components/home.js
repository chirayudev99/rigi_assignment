"use client"


import styled from "styled-components";
import { PlayerContextProvider, usePlayerContext } from "@/app/store";
import { useEffect, useRef, useState } from "react";
import Player from "./player";
import Playlist from "./playlist";

function Home() {

  const ref = useRef(null);
  const {loading} = usePlayerContext();

  useEffect(() => {
    
    document.onkeydown = (e) => {
      console.log(e.key,"keyPresseed");
      if (e.key == " ") {
          e.preventDefault();
      }
  };
  }, []);

 

  console.log(ref,"ref");

  function handleClick() {
    return ref.current?.getCurrentTime();
  }

  return (
  
 <Wrapper >
   <h1  >React Video Player</h1>
  
  {<div className="home" >
    <Player ref={ref} />
   <Playlist getTime={handleClick} />
    </div>}
    </Wrapper>   

  );
}

const Wrapper = styled.section`


h1{
  text-align:center;
  font-size:30px;
  padding:40px 15px
}

.home{
  max-width: 95rem;
    width: calc(100% - 40px);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

  
`;

export default Home