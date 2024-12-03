// "use client":
import Poste from '@/app/components/post';
import { foods } from '@/app/data/data';
import { notFound } from 'next/navigation';

type PostParams = {
    params: {
        name: string
    }
}


export async function generateMetadata({ params }:PostParams):Metadata {
    const name = (await params).name
    // .name
    console.log(name);
    
    return {
      title: 'food ' + name,
    }
}

export default async function Post({params}: PostParams){
    const name = (await params).name


    const post = foods.filter(element => element.name.toLocaleLowerCase() == name.toLocaleLowerCase())
    if (!post.length) notFound()
        
    return (<>
        <p className="font-bold text-2xl text-center my-3 capitalize">mon post</p>
        {post && <Poste post={post[0]} show /> }
    </>)
}