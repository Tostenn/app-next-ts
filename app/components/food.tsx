
import Link from "next/link";
import { IFood } from "../types";

type FoodParam = {
    food:IFood
}

export default function Food({food}:FoodParam) {
    return (
        <Link href={'/food/'+food.name.replace(' ','-')} className="w-[89%] m-auto shadow-md">
            <div className="flex gap-x-3 w-full m-auto bg-green-400 p-2 rounded-lg shadow-lg">
              <div className="size-14 rounded-full bg-orange-500"></div>

              <div className="flex flex-col items-start gap-y-3 text-nowrap">
                <div className="text-xl font-bold capitalize">{food.name}</div>
                <div className="flex gap-x-2">
                  <div className="bg-green-100 px-2 italic rounded-lg">calories: <span className="font-bold not-italic bg-green-300 rounded-lg px-1">{food.calories}</span></div>
                  <div className="bg-green-100 px-2 italic rounded-lg">carbohydrates: <span className="font-bold not-italic bg-green-300 rounded-lg px-1">{food.carbohydrates}</span></div>
                  <div className="bg-green-100 px-2 italic rounded-lg">protein: <span className="font-bold not-italic bg-green-300 rounded-lg px-1">{food.protein}</span></div>
                </div>
              </div>

          </div>
        </Link>
    )
}