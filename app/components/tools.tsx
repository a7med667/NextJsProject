"use client"; // ضرورية لاستخدام الـ useState في Next.js

import { useState } from "react";

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <button className="sm:flex w-full items-center justify-center bg-white text-black px-3 py-1.5 hover:bg-gray-200 rounded hidden">
      {text}
    </button>
  );
}

export function Input() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col gap-4">        
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} 
        className="px-5 h-8 rounded border-0 border-b bg-gray-800 focus:outline-none" 
        placeholder="اكتب هنا..."
      />
    </div>
  );
}