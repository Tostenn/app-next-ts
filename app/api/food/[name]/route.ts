import { foods } from "@/app/data/data"

type GETParams = {
    params:{name:string}
}

export async function GET(request: Request, {params}:GETParams) {
    const name = (await params).name
    const food = foods.find(food => food.name.toLocaleLowerCase() == name.replace('-','').toLocaleLowerCase())
    if (food) return new Response(JSON.stringify(food),{
        headers:{
            'Content-Type': 'application/json',
        },
        status:200
    })
    return new Response(JSON.stringify({message:'ressource not fount'}),{
        headers:{
            'Content-Type': 'application/json',
        },
        status:404
    })
    
}