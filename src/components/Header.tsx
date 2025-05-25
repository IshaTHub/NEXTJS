import Link from "next/link"

export default function Header(){
    return(
        <nav className="container flex items-center justify-between mx-auto h-12 px-2">
          <Link href="/">
        <h1 className="font-bold text-xl">
          Home
        </h1></Link>
        <div className="flex gap-4">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
        </div>
      </nav>
    )
}