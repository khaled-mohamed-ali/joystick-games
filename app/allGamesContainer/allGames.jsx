import React from 'react';
import MostPlayed from "@/app/components/MostPlayed";
import GameCardByCategory from "@/app/components/gameCardByCategory";
import {randomGameIndexes} from "@/app/components/PersonalizedRecommendations";


const getGameByCategory = async (urlChanger) => {
    const games = await fetch(urlChanger ,
        {
            method: "GET"
        })
    const data = await games.json();
    return data
}

const AllGames = async ({params,urlChanger,pageTitles}) => {

    const gamesByCategory = await getGameByCategory(urlChanger);
    const wantedLength = gamesByCategory.length == 1 ? 1: gamesByCategory.length == 2? 2 : 3;
    const randoms = randomGameIndexes([], gamesByCategory.length, wantedLength );
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
                <div className="row pt-3">
                    {games.map(game => {
                        return (
                            <div className="col-4">
                                <MostPlayed {...game}/>
                            </div>
                        )
                    })}
                </div>

                <div className="row">
                    {gamesByCategory.map(game => {
                        return (
                            <div className="col-3 gx-4 mt-4">
                                <GameCardByCategory {...game}/>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

    );
};

export default AllGames;