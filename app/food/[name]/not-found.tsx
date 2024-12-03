import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "post 404 !",
};

export default function NotFound() {
  return (
    <div className='flex flex-col gap-y-5 items-start w-max m-auto rounded-lg p-4 text-red-900 font-bold bg-red-400'>
      <h2 className='font-bold text-2xl'>404 post non trouver</h2>
      <p>ressource inexistant ou indisponible</p>
      <Link href="/post" className='btn-foncer'>Post</Link>
    </div>
  )
}