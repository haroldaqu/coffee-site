import { useEffect, useState } from "react"
import HomeHeaders from "../components/home/HomeHeaders"
import HomeSlogan from "../components/home/HomeSlogan"
import Lineup from "../components/home/Lineup"
import Newsletter from "../components/home/Newsletter"

const Home  = ({setCurrentLink}) => {

    return(
        <main className="home">
            
            <HomeHeaders 
                setCurrentLink={setCurrentLink}
            />

            <Lineup 
                setCurrentLink={setCurrentLink}
            />

            <HomeSlogan 
                setCurrentLink={setCurrentLink}
            />

            <Newsletter
                setCurrentLink={setCurrentLink}
            />

        </main>
    )
}

export default Home 