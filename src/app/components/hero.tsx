import React from 'react'
import Image from 'next/image'
// Use public path string with next/image instead of importing from public
// Props 支持字符串路径，避免强制 StaticImageData 导致调用报错

interface IProps {
  imgurl: string; // 也可改为 string | StaticImageData 如需静态导入
  altTxt: string;
  content: string;
}
export default function Hero(props: IProps) {
  return (
    <div className=" h-screen relative">
   <div className='absolute inset-0 z-0'>
    <div className="relative w-full h-full">
      <Image
        src={props.imgurl}
        alt={props.altTxt}
        fill
        sizes="100vw"
        className="object-cover"
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className='absolute inset-0 z-10 bg-gradient-to-r from-gray-950 to-black/50 pointer-events-none'></div>
    </div>
   </div>
   <div className='relative z-20 flex justify-center pt-48'>
    <h1 className='text-6xl text-white font-bold'>{props.content}</h1>
   </div>
    </div>
  )
}
