import PersonalizedRecommendations, {randomGameIndexes} from "@/app/components/serverComponents/PersonalizedRecommendations";
import {getGames} from "@/app/page";
import GameCard from "@/app/components/serverComponents/gameCard";
import SearchPart from "@/app/components/clientComponents/searchPart";
import useSWR from "swr";
import Loading from "@/app/components/serverComponents/loading";
import {Suspense} from "react";

const Page = async () => {


    const allGames = await getGames();
    const randoms = randomGameIndexes([], allGames.length, 2);
    const anotherRandoms = randomGameIndexes([], allGames.length, 2)
    const youMayLike = randoms.map((random) => allGames[random]);
    const mostPlayedToday = anotherRandoms.map((random) => allGames[random]);

    return (
        <div className="mainPageContainer">
            <div className="container pt-4 pb-5">
                <SearchPart games={allGames}/>
                <Suspense fallback={<Loading/>}>
                    <h4 className="mainColor">You May Like</h4>
                    <div className="row mb-5">
                        {youMayLike.map((game, index) => {
                            return (
                                <div className={` gx-4 col-sm-4 col-12 `} key={index}>
                                    <GameCard {...game}/>
                                </div>
                            )
                        })}
                    </div>
                    <h4 className="mainColor">Most Played Today</h4>
                    <div className="row">
                        {mostPlayedToday.map((game, index) => {
                            return (
                                <div className={` gx-4 col-sm-4 col-12`} key={index}>
                                    <GameCard {...game}/>
                                </div>
                            )
                        })}
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default Page;