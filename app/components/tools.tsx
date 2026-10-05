"use client"; // ضرورية لاستخدام الـ useState في Next.js

import { Children, useState } from "react";

type InputProps = {
  value?:string | number;
  placeholder?:string;
  onChange?:(e: React.ChangeEvent<HTMLInputElement>) => void;
};

type ButtonProps = {
  text?: string;
  classname?: string;
  onClick?:() => void;
  children?:React.ReactNode;
};

export function Button({ text , classname , onClick , children} : ButtonProps) {
  return (
    <button className={`sm:flex items-center justify-center bg-sky-50 text-gray-400 px-3 py-1.5 hover:bg-sky-100 active:bg-sky-50 cursor-pointer rounded ${classname}`}
      onClick={onClick}>
      {text || children}
    </button>
  );
}

export function Input({value,placeholder,onChange}:InputProps) {
  return (
    <div className="flex flex-col gap-4">        
      <input 
        type="text" 
        className="px-5 h-8 rounded focus:outline-none" 
        value={value}
        onChange={onChange} 
        placeholder={placeholder}
      />
    </div>
  );
}