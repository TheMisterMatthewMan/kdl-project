import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center p-7">
      <div className="flex flex-row">
        <div className="image">
          <img height='200px' width='200px' src="/profile.webp"></img>
        </div>
        <div className="flex flex-col justify-center p-7">
          <h1 className="font-extrabold">Hi, my name is Matthew</h1>
          <p>I am a student.</p>
        </div>
      </div>
    </div>
  )
}
