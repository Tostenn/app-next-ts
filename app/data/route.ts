// app/data/route.ts
import { foods } from "../data/data";

export  async function GET() {
    return new Response(JSON.stringify(foods), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
export  async function POST(request: Request) {
    const data = await request.json()
    const newData = {
        name:data.name,
        content:data.content
    }
    foods.push(newData)
    return new Response(JSON.stringify(newData), {
        headers: {
            'Content-Type': 'application/json',
        },
        status:201
    });
}