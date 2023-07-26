import React from 'react';
import GameCard from "@/app/components/gameCard";
import styles from '../style/PersonalizedRecommendations.module.css'
import {FaRobot} from "react-icons/fa";
import {getGames} from "@/app/page";
import Link from "next/link";


export function randomGameIndexes(arr, maxLength, wantedLength) {
    const randomGenerator = Math.floor(Math.random() * maxLength);

    if (!arr.includes(randomGenerator)) {
        arr.push(randomGenerator)
    }
    if (arr.length > wantedLength) {
        return arr
    }
    return randomGameIndexes(arr, maxLength, wantedLength);
}



const PersonalizedRecommendations = async () => {


    const games = await getGames();
    const allGamesIndexes = randomGameIndexes([], games.length, 2);
    const allGames = allGamesIndexes.map((gameIndex) => games[gameIndex]);


    return (
        <div className={`${styles.mainGameContainer} container mb-5`}>
            <h2 className={styles.sectionTitle}><FaRobot/>   &nbsp; Personalized Recommendations</h2>
            <div className="row">
                {allGames.map((game, index) => {
                    return (
                        <div className={` gx-4 col-4 `} key={index}>
                            <GameCard {...game}/>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default PersonalizedRecommendations;
