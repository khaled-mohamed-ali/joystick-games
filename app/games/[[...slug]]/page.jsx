import React from 'react';
import MostPlayed from "@/app/components/serverComponents/MostPlayed";
import {randomGameIndexes} from "@/app/components/serverComponents/PersonalizedRecommendations";
import GameCard from "@/app/components/serverComponents/gameCard";
import {usePathname} from "next/navigation";
import GameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";
import {getGames} from "@/app/page";
import gameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";
import AllGames from "@/app/allGamesContainer/allGames";


const Page = async ({params}) => {

    const urls = {
        allGames: 'https://www.freetogame.com/api/games?platform=all',
        gameByCategory: `https://www.freetogame.com/api/games?category=${params.slug}`,

    }

    console.log(params,'params')

    if (Object.keys(params).length == 0) {
        params.slug = 'games'
    }



    const urlChanger = params.slug == 'games' ? urls.allGames : urls.gameByCategory;
    let pageTitles = {};


    switch (params.slug) {
        case  "games" :
            pageTitles.main =`Top Free Games for PC and Browser In 2023!`;
            pageTitles.sub = `games`;
            break
        default :
            pageTitles.main =`Top Free ${params.slug} Games for PC and Browser In 2023!`
            pageTitles.sub = `${params.slug} games`
    }


    return (
        <AllGames params={params} urlChanger={urlChanger} pageTitles={pageTitles}/>
    )
}

export default Page;