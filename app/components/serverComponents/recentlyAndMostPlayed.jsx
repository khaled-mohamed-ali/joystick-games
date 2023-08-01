import React from 'react';
import RecentlyAdded from './RecentlyAdded'
import MostPlayed from "@/app/components/serverComponents/MostPlayed";
import {getGames} from "@/app/page";
import {randomGameIndexes} from "@/app/components/serverComponents/PersonalizedRecommendations";
import style from "../../style/RecentlyAndMostPlayed.module.css"


const RecentlyAndMostPlayed = async () => {



    const allGames = await getGames();
    const randoms = randomGameIndexes([], allGames.length, 3);
    const mostPlayed = randoms.map((random) => allGames[random]);


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-xs-12'>
                    <h3 className={` fontSize2  mb-3 p-0`}>Recently Added</h3>
                    <RecentlyAdded/>
                </div>
                <div className="col-md-4 col-xs-12">
                    <h3 className={` fontSize2  mb-3 p-0`}>Most Played Today</h3>
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