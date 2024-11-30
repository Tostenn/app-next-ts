"use client"
import { IFood } from "@/app/types"
import { useState } from "react"
import Link from "next/link";

type  PostParam = {
    post:IFood,
    show?:boolean
}

export default function Poste({post, show=false}:PostParam) {
    
    return (
        <div className="flex flex-col gap-3 items-start max-w-md m-auto rounded-lg p-4 text-green-900 font-bold bg-green-400" >
            <p className="font-bold text-2xl capitalize">{post.name}</p>
            {show && 
            <div className="flex flex-col w-full gap-y-3">
                {
                    Object.entries(post).map(([key, value]) =>{
                        
                        if (key !== 'name')
                            return(
                            <p key={`${key}-${value}`} className="bg-green-100 p-2 rounded-lg flex gap-x-2">
                                <span>{key}</span> 
                                <span className="text-wrap bg-orange-300 text-orange-800 p-2 rounded-lg">{value}</span>
                            </p>
                        )
                    }
                )}
            </div>
            }
            <div className="space-x-2 flex w-full">
                {!show && <Link href={`/post/${post.name}`} className="btn-foncer w-full text-center">voir</Link>}
                <button className="btn-danger w-full">supprimer</button>
            </div>
        </div>
    )
}