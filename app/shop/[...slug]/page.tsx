
type ShopParams = {
    params: {
        slug: string[]
    }
}

export default async function Shop({params}:ShopParams) {
    const slugs = (await params).slug
    
    return (<>
        <p className="text-2xl font-bold">shop</p>
        <ul>
            {slugs.map(slug => (<li>{slug}</li>)) }
        </ul>
    </>)
}