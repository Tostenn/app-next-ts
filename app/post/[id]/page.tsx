import Poste from '@/app/components/post';
import { foods } from '@/app/data/data';
import { notFound } from 'next/navigation';

type PostParams = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }:PostParams) {
    const id = (await params).id

    return {
      title: 'post ' + id,
    }
}

export default async function Post({params}: PostParams){
    const id = (await params).id
    const post = foods.filter(element => element.name.toLocaleLowerCase() == id.toLocaleLowerCase())
    if (!post.length) notFound()
        
    return (<>
        <p className="font-bold text-2xl text-center my-3 capitalize">mon post</p>
        {post && <Poste post={post[0]} show /> }
    </>)
}