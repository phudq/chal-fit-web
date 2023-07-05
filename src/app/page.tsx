import Image from 'next/image'
import AppleStoreButton from "@/app/AppleStoreButton";
import GooglePlayButton from "@/app/GooglePlayButton";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 select-none">
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-4xl font-bold text-center'>ChalFit</h1>
      </div>
      <Image src='/logo.png' alt='ChalFit' width={264} height={264}/>
      <div className='text-center'>
        <span className='text-sm text-gray-500 italic'>Join out beta program</span>
        <div className='md:flex'>
          <Link className='cursor-pointer' href="https://testflight.apple.com/join/xgjs9Gq2">
            <AppleStoreButton className='m-2'/>
          </Link>
          <Link className='cursor-pointer' href="https://play.google.com/store/apps/details?id=co.chalfit.app">
            <GooglePlayButton className='m-2'/>
          </Link>
        </div>
      </div>
    </main>
  )
}
