"use client"
import { useRouter } from "next/navigation";


export default function Contact(){
    const router = useRouter()
    const handleChange = () => {
        console.log('message envoyer !');
        router.back()
    }
    return (<>
    <div className="flex flex-col gap-y-5 items-start w-max m-auto rounded-lg p-4 text-green-900 font-bold bg-green-400">

        <p className="font-bold text-2xl">formulaire</p>
        <button className="btn-foncer" onClick={() => handleChange()}>envoyer</button>
    </div>
    </>)
}

