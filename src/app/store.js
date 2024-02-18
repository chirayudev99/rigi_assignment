"use client"

import React, { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  video_details: {
    id:1,
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttps://www.bigbuckbunny.org",
    sources: [
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    ],
    subtitle: "By Blender Foundation",
    seek:0,
    thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title: "Big Buck Bunny",
  },
  playlist_state: [
    {
      id:1,
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttps://www.bigbuckbunny.org",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      subtitle: "By Blender Foundation",
      seek:5,
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Big Buck Bunny",
    },
    {
      id:2,
      description: "The first Blender Open Movie from 2006",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      subtitle: "By Blender Foundation",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Elephant Dream",
    },
    {
      id:3,
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      subtitle: "By Google",
      seek:0,
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      title: "For Bigger Blazes",
    },
    {
      id:4,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      ],
      subtitle: "By Google",
      seek:0,
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      title: "For Bigger Escape",
    },
    {
      id:5,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV. For $35.  Find out more at google.com/chromecast.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      ],
      subtitle: "By Google",
      seek:0,
      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      title: "For Bigger Fun",
    },
    {
      id:6,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      ],
      subtitle: "By Google",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      title: "For Bigger Joyrides",
    },
    {
      id:7,
      description:
        "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when you want to make Buster's big meltdowns even bigger. For $35. Learn how to use Chromecast with Netflix and more at google.com/chromecast.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      ],
      subtitle: "By Google",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
      title: "For Bigger Meltdowns",
    },
    {
      id:8,
      description:
        "Sintel is an independently produced short film, initiated by the Blender Foundation as a means to further improve and validate the free/open source 3D creation suite Blender. With initial funding provided by 1000s of donations via the internet community, it has again proven to be a viable development model for both open 3D technology as for independent animation film.\nThis 15 minute film has been realized in the studio of the Amsterdam Blender Institute, by an international team of artists and developers. In addition to that, several crucial technical and creative targets have been realized online, by developers and artists and teams all over the world.\nwww.sintel.org",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      ],
      subtitle: "By Blender Foundation",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
      title: "Sintel",
    },
    {
      id:9,
      description:
        "Smoking Tire takes the all-new Subaru Outback to the highest point we can find in hopes our customer-appreciation Balloon Launch will get some free T-shirts into the hands of our viewers.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      ],
      subtitle: "By Garage419",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",
      title: "Subaru Outback On Street And Dirt",
    },
    {
      id:10,
      description:
        "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras.  (CC) Blender Foundation - https://www.tearsofsteel.org",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      ],
      subtitle: "By Blender Foundation",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
      title: "Tears of Steel",
    },
    {
      id:11,
      description:
        "The Smoking Tire heads out to Adams Motorsports Park in Riverside, CA to test the most requested car of 2010, the Volkswagen GTI. Will it beat the Mazdaspeed3's standard-setting lap time? Watch and see...",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      ],
      subtitle: "By Garage419",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",
      title: "Volkswagen GTI Review",
    },
    {
      id:12,
      description:
        "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      ],
      subtitle: "By Garage419",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WeAreGoingOnBullrun.jpg",
      title: "We Are Going On Bullrun",
    },
    {
      id:13,
      description:
        "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.",
      sources: [
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      ],
      subtitle: "By Garage419",
      seek:0,

      thumb: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/WhatCarCanYouGetForAGrand.jpg",
      title: "What care can you get for a grand?",
    },
  ],
};

const PlayerContext = createContext(null);

function usePlayerContext() {
  const playerCtx = useContext(PlayerContext);

  if (playerCtx == null) {
    throw new Error("Context is null");
  }

  return playerCtx;
}

function PlayerReducer(state, action) {
  if (action.type === "UPDATE_VDO_DETAILS") {
    return { ...state, video_details: action.payload };
  }
  if (action.type === "UPDATE_PLAYLIST_STATE") {
    return { ...state, playlist_state: action.payload };
  }

  if (action.type === "UPDATE_TIME") { 
    const { id, value } = action.payload;
    const updatedPlaylist = state.playlist_state.map((item, i) => {
      if (i === id) {
        return { ...item, seek: value };
      }
      return item;
    });
    return { ...state, playlist_state: updatedPlaylist,playVideo:true };
    
  }
  return state;
}

function PlayerContextProvider({ children }) {
  let storedState;
  if(typeof window !== "undefined"){
     storedState = localStorage.getItem('playerContextState') ;
  }
  const state = storedState ? JSON.parse(storedState) : initialState
  const [playerState, dispatch] = useReducer(PlayerReducer, state);

  useEffect(() => {
    localStorage.setItem('playerContextState', JSON.stringify(playerState));
  }, [playerState]);

  const ctx = {
    video_details: playerState.video_details,
    playlist_state: playerState.playlist_state,
    playVideo:playerState.playVideo,
    loading:playerState.loading,
    updateVdoDetails(vdoData) {
      dispatch({ type: "UPDATE_VDO_DETAILS", payload: vdoData });
    },
    updatePlaylistState(playlistData) {
      dispatch({ type: "UPDATE_PLAYLIST_STATE",payload:playlistData });
    },
    updateTime(id,value) {
      dispatch({ type: "UPDATE_TIME",payload:{id,value} });
    },

  };

  return <PlayerContext.Provider value={ctx} > 
{children}
  </PlayerContext.Provider>
}

export { PlayerContext, usePlayerContext, PlayerContextProvider };
