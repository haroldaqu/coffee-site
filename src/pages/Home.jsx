import { useEffect, useState } from "react"
import HomeHeaders from "../components/home/HomeHeaders"
import HomeSlogan from "../components/home/HomeSlogan"
import Lineup from "../components/home/Lineup"
import Newsletter from "../components/home/Newsletter"

const Home  = () => {

    return(
        <main className="home">
            
            <HomeHeaders />

            <Lineup />

            <HomeSlogan />

            <Newsletter />

        </main>
    )
}

export default Home 