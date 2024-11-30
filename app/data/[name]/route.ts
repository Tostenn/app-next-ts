// app/data/route.ts
import { foods } from "../../data/data";

export async function GET(request: Request, {params}:{params:{name: string}}) {
    const name = (await params).name
    const data = foods.find(food => food.name == name)
    if (data)
        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
    else 
        return new Response(JSON.stringify({
            "message":'ressource non trouver'
        }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status:404
        });
}