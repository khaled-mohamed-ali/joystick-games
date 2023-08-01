import React from 'react';
import Link from "next/link";
import LeftSideGameCard from "@/app/components/clientComponents/leftSideGameCard";
import RightSideGameDetails from "@/app/components/clientComponents/rightSideGameDetails";
import AboutGame from "@/app/components/clientComponents/aboutGame";
import AdditionalInformation from "@/app/components/serverComponents/AdditionalInformation";
import UserReviews from "@/app/components/clientComponents/UserReviews";
import GamesLikeThis from "@/app/components/serverComponents/gamesLikeThis";
import {Suspense, lazy} from 'react'
import GameStatistics from "@/app/components/serverComponents/gameStatistics";
import Loading from "@/app/components/serverComponents/loading";
import MinimumSystemRequirements from "@/app/components/serverComponents/MinimumSystemRequirements";
import styles from './gameByIdStyle.module.css'


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

        <main className={styles.main} >
            <div style={{
                backgroundImage: `url(${game.screenshots && game.screenshots[0]?.image})`,
                height: '520px',
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
                // minHeight: "1900px"
            }}>
                <div className="row pb-5">
                    <Suspense fallback={<Loading/>}>
                    <div className=" col-12 col-4 col-md-4 mt-4 gx-5">
                        <LeftSideGameCard {...game}/>
                    </div>

                        <div className="col-12 col-md-8">
                            <GameStatistics {...game}/>
                            <RightSideGameDetails {...game}/>
                            <AboutGame {...game}/>
                            <AdditionalInformation {...game}/>
                            <MinimumSystemRequirements {...game}/>
                            <UserReviews/>
                            <GamesLikeThis {...game}/>
                        </div>
                    </Suspense>
                </div>
            </div>
            {/*</Suspense>*/}
        </main>
    );
};


export default Page;