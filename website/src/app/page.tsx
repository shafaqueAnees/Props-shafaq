import Footer from "./components/Footer"
import Hero from "./components/Hero"
import MyWork from "./components/MyWork"
import Navbar from "./components/Navbar"
import Spounsors from "./components/Spounsors"
import Work from "./components/Work"


export default function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Work />
        <MyWork />
        <Spounsors />
        <Footer />
    </div>
  
  )
}