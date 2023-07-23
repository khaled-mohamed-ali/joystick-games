import React from 'react';
import RecentlyAdded from './RecentlyAdded'
import MostPlayed from "@/app/components/MostPlayed";
import {getGames} from "@/app/page";
import {randomGameIndexes} from "@/app/components/PersonalizedRecommendations";

const RecentlyAndMostPlayed = async () => {



    const allGames = await getGames();
    const randoms = randomGameIndexes([], allGames.length, 3);
    const mostPlayed = randoms.map((random) => allGames[random]);


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h3 className='gameTitle fs-2 mb-0'>Recently Added</h3>
                    <RecentlyAdded/>
                </div>
                <div className="col-4">
                    <h3 className='gameTitle fs-2 mb-0'>Most Played Today</h3>
                    {mostPlayed.map(game => {
                        return (
                        <MostPlayed {...game}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default RecentlyAndMostPlayed;