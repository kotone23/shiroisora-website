import Image from 'next/image'
import NavBar from './components/NavBar'
import SpNav from './components/SpNav';

export default function Home() {
  return (
    <>
      <div className="container mx-auto max-w-screen-lg mt-4 mb-8">
        <div className="flex justify-center">
          <Image 
            src="/images/logo.png"
            alt="logo"
            width={240}
            height={240}
          />
        </div>
      </div>
      <SpNav />
      <NavBar />
      <div className="container mx-auto max-w-screen-lg mt-8">
        <div className="flex justify-center">
          <Image 
            src="/images/profile.jpg"
            alt="profile"
            width={960}
            height={640}
          />
        </div>
      </div>
    </>
  );
}
