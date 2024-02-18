"use client"

import { useEffect, useState } from "react";
import Home from "../../components/home";
import { PlayerContextProvider } from "./store";

function App() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;


  return (
    <PlayerContextProvider>
<Home />
    </PlayerContextProvider>
   

  );
}



export default App