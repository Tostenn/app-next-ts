import { foods } from "@/app/data/data"


export async function POST(request: Request) {
    const data = await request.json()
    console.log(data);
    
    if (data.option == 'name'){
        const result = foods.filter(food => food.name.toLowerCase().includes(data.search))
        return new Response(JSON.stringify(result),{
            headers: {
                'Content-Type': 'application/json',
            },
            status:200
        });
    }
    else return new Response(JSON.stringify([]),{
        headers: {
            'Content-Type': 'application/json',
        },
        status:200
    });
}
