"use client"
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IFood } from "./types";
import Food from "./components/food";
import { useFood } from "./hook/useFood";


type TposSearch = 'active' | ''

export default function Home() {
    const [posSearch, setPosSearch] = useState<TposSearch>('')
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [foods, setFood] = useState<IFood[]>()
    const formRef = useRef<HTMLFormElement| null>(null)

    useEffect(() => formRef.current?.addEventListener('submit',e => e.preventDefault()),[])
    
  return (
    <>
      <form ref={formRef} action="" className={`form ${posSearch}`}>
      <h1 className="text-center font-bold text-5xl capitalize">food warrior</h1>
        <div className="boxSearch flex flex-col md:flex-row gap-x-3 gap-y-3 w-[90%] md:w-max m-auto rounded-lg p-4 text-green-900 font-bold bg-green-400 shadow-lg">
            <select name="option" id="" className="rounded-lg text-center text-2xl p-1 bg-green-100 text-green-800 outline-none px-2 shadow-lg">
              <option defaultValue="name">name</option>
              <option value="calories">calories</option>
              <option value="carbohydrates">carbohydrates</option>
              <option value="vitamins">vitamins</option>
              <option value="protein">protein</option>
            </select>
            <input type="text" name="search" className="rounded-lg text-2xl bg-green-100 text-green-800 outline-none px-2 p-2  md:py-0 shadow-lg" />

            <button type="button" className="btn-clair capitalize" onClick={() => useFood(
              {formRef, setLoading, setPosSearch, setFood, setNotFound}
            )}>search</button> 
        </div>
        {loading && <div className="">
          <p className="text-center">loading ...</p>
        </div>}
        {notFound && <div className="">
          <p className="text-center">not found </p>
        </div>}
      </form>

      <div className={`${posSearch && 'foods'} flex flex-col space-y-5 ${posSearch}`}>
        {foods && foods.map(food => (
          <Food food={food} key={food.name} />
         ))}
      </div>

    </>
  );
}
