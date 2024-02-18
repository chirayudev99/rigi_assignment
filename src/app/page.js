"use client"

import Home from "../../components/home";
import { PlayerContextProvider } from "./store";

function App() {


  return (
    <PlayerContextProvider>
<Home />
    </PlayerContextProvider>
   

  );
}



export default App