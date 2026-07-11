"use client"                                                    // takes components of this file from server-side to client-side so we can run Hooks
import { useState } from "react"                                // hook gives the component a memory to track interactive data
import { Button } from "../tools"
import { Input } from "../tools"



function Inputs(){
    const [InputValue1 , Text1]= useState("");                  // method of using the hook usestate 
    const [InputValue2 , Text2]= useState("");
    const [counter, setCounter] =useState<number>(0); 
    const [list, setList] = useState<string[]>(["ahmed","ali","mazin","maeen","assem"]);
    const [hasError, setHasError] = useState<boolean>(false);

    return(
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center  py-32 px-16 bg-white dark:bg-black sm:items-start gap-5">
        <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
            
                <input 
                className="px-5 h-8 rounded border-0 border-b bg-gray-800 focus:outline-none"
                type="text" 
                value={InputValue1}
                onChange={(e) => Text1(e.target.value)}         // target = 'this' in js
                />

                <button 
                className="sm:flex w-50 items-center justify-center bg-white text-black px-3 py-1.5 hover:bg-red-500 hover:text-white rounded "
                onClick = {() => Text1("")}
                >
                    clean
                </button>
            </div>
            

            <div className="flex flex-col gap-2">
                <input 
                type="text" 
                value={InputValue2}
                onChange={(e) => Text2(e.target.value)}
                className="px-5 h-8 rounded border-0 border-b bg-gray-800 focus:outline-none"/>

                <div className=" flex gap-2 h-8">
                    <Button 
                    text="Add To List"
                    onClick={() => {
                        setList([...list,InputValue2]);
                        Text2("")
                    }}
                    />
                    
                    <Button 
                    text="Clean"
                    onClick={() => Text2("")}
                    />
                </div>
                
                <ul className="flex flex-col gap-1 min-h-20 rounded border p-1">
                    {list.map((i, index)=>(
                        <li className="rounded bg-white py-0.5 px-2 text-black" 
                        key={index}>{i}</li>
                    ))}

                    <Button
                        text="delete"
                        classname="mt-2"
                        onClick={()=> {setList(list.filter((item,index)=>(index !== 0)))}}
                        />
                </ul>
                <div>
                    <Input 
                        value={counter}
                        onChange={(e)=> setCounter(Number(e.target.value))}/>
                    
                    {hasError && <p className=" text-sm text-gray-400">the value can not be less than 0</p>} 
                </div>
                
                <div className=" flex gap-2 h-8">
                    <Button 
                    text="+"
                    onClick={() => {                        
                        setCounter(Math.min(10,counter + 1))
                        setHasError(false)}}
                    />
                    
                    <Button 
                    text="-"
                    onClick={() => {
                        if(counter <= 0){
                            setCounter(0)
                            setHasError(true)
                        }
                        else{setCounter(counter - 1)}                      
                    }}
                    />
                </div>

            </div>
        </div>
        </main>
    )
}

export default Inputs;