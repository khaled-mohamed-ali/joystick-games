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
        allGames: 'https://www.freetogame.com/api/games?platform=browser',
        gameByCategory: `https://www.freetogame.com/api/games?platform=browser&category=${params.slug}`,
    }

    if(Object.keys(params).length == 0 ) {
        params.slug = 'web-browser'
    }

    const urlChanger = params.slug == 'web-browser' ? urls.allGames : urls.gameByCategory
    let pageTitles = {};

    switch (params.slug) {
        case  "web-browser" :
            pageTitles.main =`Top Free Games for Browser In 2023!`;
            pageTitles.sub = `web browser games`;
            break
        default :
            pageTitles.main =`Top Free ${params.slug} Games for Browser In 2023!`
            pageTitles.sub = `web browser ${params.slug} games`
    }


    return (
        <AllGames params={params} urlChanger={urlChanger} pageTitles={pageTitles}/>
    );
};

export default Page;