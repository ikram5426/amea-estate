import Image from 'next/image'
import { Navbar } from './components'

export default function Home() {
  return (
    <div className="px-[4vw] bg-[#f0edea] h-[600vh]" style={{ fontFamily: "Beatrice" }}>
      <div>
        <Navbar />
      </div>
     <div className=""></div>
    </div>
  )
}
