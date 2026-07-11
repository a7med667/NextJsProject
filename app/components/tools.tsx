"use client"; // ضرورية لاستخدام الـ useState في Next.js

import { useState } from "react";

type InputProps = {
  value?:string | number;
  placeholder?:string;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ButtonProps = {
  text: string;
  classname?: string;
  onClick?:() => void;
};

export function Button({ text , classname , onClick} : ButtonProps) {
  return (
    <button className={
      `sm:flex w-full 
      items-center 
      justify-center 
      bg-white 
      text-black 
      px-3 
      py-1.5 
      hover:bg-gray-200 
      rounded 
      ${classname}`
      }
      onClick={onClick}
      >
      {text}
    </button>
  );
}

export function Input({value,placeholder,onChange}:InputProps) {
  return (
    <div className="flex flex-col gap-4">        
      <input 
        type="text" 
        className="px-5 h-8 rounded border-0 border-b bg-gray-800 focus:outline-none" 
        value={value}
        onChange={onChange} 
        placeholder={placeholder}
      />
    </div>
  );
}