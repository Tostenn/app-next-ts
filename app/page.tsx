"use client"
import { useState } from "react";
import Link from "next/link";

interface Fruit {
    id:Fruit;
    name:Humain;
}
type Humain = {
    name:Fruit;
    age:number;
}

export default function Home() {
    const [post, setPost] = useState('')
    
  return (
    <>
    <div className="flex flex-col gap-y-5 items-start w-max m-auto rounded-lg p-4 text-green-900 font-bold bg-green-400">
        <label htmlFor="">lien vers post commentaire</label>
        <input type="text" onChange={(e) => setPost(e.target.value)} />    
        <Link href={`/post/${post}`} className="btn-clair capitalize">post</Link> 
    </div>
    </>
  );
}
