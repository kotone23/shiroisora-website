import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function NavBar() {

  return (
    <div className="border-t-4 border-b-4 border-black">
      <div className="border-t-4 border-b-4 border-white">
        <div className="bg-black text-white py-4">
          <nav className="hidden sm:block container mx-auto max-w-screen-lg">
            <ul className="flex justify-center space-x-16 w-full">
              <li className="mx-2"><Link href="#" className="hover:underline">Top</Link></li>
              <li className="mx-2"><Link href="#" className="hover:underline">Live</Link></li>
              <li className="mx-2"><Link href="#" className="hover:underline">Discography</Link></li>
              <li className="mx-2"><Link href="#" className="hover:underline">
                <span className="flex items-center">
                  Shop <BsArrowUpRight className="ml-0.5" />
                </span></Link></li>
              <li className="mx-2"><Link href="#" className="hover:underline">Media</Link></li>
              <li className="mx-2"><Link href="#" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    );
}