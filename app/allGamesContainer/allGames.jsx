import React from 'react';
import MostPlayed from "@/app/components/serverComponents/MostPlayed";
import GameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";
import {randomGameIndexes} from "@/app/components/serverComponents/PersonalizedRecommendations";
import GameCardInfiniteScroll from "@/app/components/clientComponents/gameCardInfintiScroll";
import Loading from "@/app/components/serverComponents/loading";
import {Suspense} from "react";


const getGameByCategory = async (urlChanger) => {
    const games = await fetch(urlChanger,
        {
            method: "GET"
        })
    const data = await games.json();
    return data
}

const AllGames = async ({params, urlChanger, pageTitles}) => {

    const gamesByCategory = await getGameByCategory(urlChanger);
    const wantedLength = gamesByCategory.length == 1 ? 0 : gamesByCategory.length == 2 ? 1 : 2;
    const randoms = randomGameIndexes([], gamesByCategory.length, wantedLength);
    const games = randoms.map((random) => gamesByCategory[random]);




    return (
        <div className="mainPageContainer">
            <div className="container ">
                <h2 className="mainColor pt-4 pb-1">{pageTitles.main}</h2>
                <p className="discrepColor fs-6">
                    <span className="mainColor fw-bolder">
                        {gamesByCategory.length}
                    </span> free-to-play
                    <span className="mainColor fw-bolder">
                        &nbsp;{pageTitles.sub}&nbsp;
                    </span>
                    found in our games list!
                </p>
                <Suspense fallback={<Loading/>}>
                    <div className="row pt-3">
                        {games.map((game,index) => {
                            return (
                                <div className="col-12 col-md-4" key={index}>
                                    <MostPlayed {...game}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="row">
                        {gamesByCategory.map((game,index) => {
                            return (
                                <div className="col-12 col-md-4 col-xl-3 gx-4 mt-4" key={index}>
                                    <GameCardByCategory {...game} />
                                </div>
                            )
                        })}
                    </div>
                </Suspense>

            </div>
        </div>

    );
};

export default AllGames;