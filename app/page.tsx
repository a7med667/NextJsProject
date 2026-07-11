// import Image from "next/image";
"use client"
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Button, Input} from "./components/tools";
import Inputs from "./components/UseState/page";



function Home() {
  const [clean, funclean] = useState("");
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header/>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black sm:items-start gap-5">
          <h1>hello world</h1>
          <div className="flex flex-col gap-1">
            <Input/>
            <div className=" flex gap-2 h-8">
              <Button text="Click"/>
              <Button 
                text="Clean"
                
              />
            </div>
          </div>

          <Inputs/>

        </main>
      </div>
      <Footer/>
    </div>
    
  );
}


export default Home;