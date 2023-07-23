import React from 'react';
import Link from "next/link";
import LeftSideGameCard from "@/app/components/leftSideGameCard";
import RightSideGameDetails from "@/app/components/rightSideGameDetails";
import AboutGame from "@/app/components/aboutGame";
import AdditionalInformation from "@/app/components/AdditionalInformation";
import UserReviews from "@/app/components/clientServerComponents/UserReviews";
import GamesLikeThis from "@/app/components/gamesLikeThis";
import {Suspense ,lazy} from 'react'
import GameStatistics from "@/app/components/gameStatistics";
import Loading from "@/app/components/loading";


export const getItemById = async ({id}) => {
    const data = await fetch(
        `https://www.freetogame.com/api/game?id=${id}`,
        {
            method: 'GET'
        })
    const gameProfile = await data.json()

    return gameProfile
}



const Page = async ({params}) => {
    const game = await getItemById(params);

    return (

        <main style={{background: '#272b30',height: "100%"}} >
            <Suspense className={"h-100 "} style={{background:"red"}} fallback={<Loading/>}>
                <div style={{
                    backgroundImage: `url(${game.screenshots[0]?.image})`,
                    height: '580px',
                    width: '100%',
                    position: 'absolute',
                    zIndex: '1'
                }}>
                    <div style={{
                        background: 'linear-gradient(to right, rgba(40, 45, 50, 1)5%,rgba(39, 43, 48, 0.8),rgba(40, 45, 50, 1))',
                        position: "relative",
                        zIndex: '2',
                        height: '580px',
                    }}/>
                </div>

                <div className='container' style={{
                    position: "relative",
                    zIndex: '3',
                    overflow: "hidden",
                    minHeight: "1900px"
                }}>
                    <div className="row pb-5">
                        <div className="col-4 mt-4 gx-5">
                            <LeftSideGameCard {...game}/>
                        </div>
                        <div className="col-8">
                            <GameStatistics {...game}/>
                            <RightSideGameDetails {...game}/>
                            <AboutGame {...game}/>
                            <AdditionalInformation {...game}/>
                            <UserReviews/>
                            <GamesLikeThis {...game}/>
                        </div>
                    </div>
                </div>
            </Suspense>
        </main>
    );
};


export default Page;