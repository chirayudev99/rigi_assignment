"use client"

import Player from "../../components/player";
import Playlist from "../../components/playlist";
import styled from "styled-components";
import { PlayerContextProvider } from "./store";
import { useEffect, useRef, useState } from "react";

function Home() {

  const ref = useRef(null);

  console.log(ref,"ref");

  function handleClick() {
    return ref.current?.getCurrentTime();
  }

  return (
    <PlayerContextProvider>
 <Wrapper>
   <h1  >React Video Player</h1>
   {/* <MyInput placeholder="Enter your name" ref={ref} /> */}
    <div className="home" >
    <Player ref={ref} />
   <Playlist getTime={handleClick} />
    </div>
    </Wrapper>
    </PlayerContextProvider>
   

  );
}

const Wrapper = styled.section`

background-color:lightblue;

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