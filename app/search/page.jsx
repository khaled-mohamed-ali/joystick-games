import PersonalizedRecommendations, {randomGameIndexes} from "@/app/components/PersonalizedRecommendations";
import {getGames} from "@/app/page";
import GameCard from "@/app/components/gameCard";
import SearchPart from "@/app/components/clientServerComponents/searchPart";
import useSWR from "swr";


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
                <h4 className="mainColor">You May Like</h4>
                <div className="row mb-5">
                    {youMayLike.map((game, index) => {
                        return (
                            <div className={` gx-4 col-4 `} key={index}>
                                <GameCard {...game}/>
                            </div>
                        )
                    })}
                </div>
                <h4 className="mainColor">Most Played Today</h4>
                <div className="row">
                    {mostPlayedToday.map((game, index) => {
                        return (
                            <div className={` gx-4 col-4 `} key={index}>
                                <GameCard {...game}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Page;