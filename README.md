This is a  assignment given by Rigi i.e Azalp Technologies Private Limited
Tech Stack : Next.js & styled components

## Run Project Locally
First, install packages:

```bash
yarn install
```

And, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed Version

And here's the deployed version: https://rigi-assignment-player.vercel.app

## Features the app provides
 -Implement a video player with essential functionalities:
 -Play/Pause toggle.
 -Seek functionality.
 -Timer displaying current playback time and duration.
 -Autoplay.
 -Speed selector for playback speed adjustment
 -fullscreen mode
 -volume control
 -keyboard shortcuts
 -Videos will continue playing from where users left-off

 -Reorder Playlist
 -Clicking on a video in the playlist should load and play that video in the video player.
 -autoplay next video when current video ends

 ## File System
  
  inside components folder

 -player.js: exporting Player component and related features
 -playlist.js : exporting Playlist component and related features
 -home.js: HomePage, importing Player and Playlist component to export them together

 inside app folder 
 -page.js : Calling Home component and context provider to provide context
 -store.js : Code for react context (store management) and exporting relevant modules

 ## Lighthouse Score

 -Performance: 93
 -Accessbility: 97
 -Best Practices: 100
 -SEO: 100
 
 ![lighthouse result img](https://ibb.co/QH8W7gF)

Thanks
