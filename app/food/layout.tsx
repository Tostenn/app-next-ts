import type { Metadata } from "next";


type PostParams = {
    params: {
        name: string
    }
}


export async function generateMetadata({ params }:PostParams):Metadata {
    const name = await params
    // .name
    console.log(name.name);
    
    return {
      title: 'food dd ' + name.name,
    }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
        {children}
  </>);
}