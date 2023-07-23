import React from 'react';
import MostPlayed from "@/app/components/MostPlayed";
import {randomGameIndexes} from "@/app/components/PersonalizedRecommendations";
import GameCard from "@/app/components/gameCard";
import {usePathname} from "next/navigation";
import GameCardByCategory from "@/app/components/gameCardByCategory";
import {getGames} from "@/app/page";
import gameCardByCategory from "@/app/components/gameCardByCategory";
import AllGames from "@/app/allGamesContainer/allGames";


const Page = async ({params}) => {

    const urls = {
        allGames: 'https://www.freetogame.com/api/games?platform=browser',
        gameByCategory: `https://www.freetogame.com/api/games?platform=browser&category=${params.slug}`,
    }

    if(Object.keys(params).length == 0 ) {
        params.slug = ['web-browser']
    }

    const urlChanger = params.slug == 'web-browser' ? urls.allGames : urls.gameByCategory

    let pageTitles = {};

    switch (params.slug[0]) {
        case  "web-browser" :
            pageTitles.main =`Top Free Games for Browser In 2023!`;
            pageTitles.sub = `web browser games`;
            break
        default :
            pageTitles.main =`Top Free ${params.slug[0]} Games for Browser In 2023!`
            pageTitles.sub = `web browser ${params.slug[0]} games`
    }


    return (
        <AllGames params={params} urlChanger={urlChanger} pageTitles={pageTitles}/>
    );
};

export default Page;