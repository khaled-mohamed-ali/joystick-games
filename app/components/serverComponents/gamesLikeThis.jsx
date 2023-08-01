import React from 'react';
import GameCard from "@/app/components/serverComponents/gameCard";

const GamesLikeThis = async ({genre, title}) => {
    const gamesLike = await fetch(
        `https://www.freetogame.com/api/games?category=${genre}`,
        {
            method: "GET"
        })

    const data = await gamesLike.json();
    const randomNum = Math.floor(Math.random(data) * data.length);
    const gamesData = Array.isArray(data) ? data.slice(randomNum, randomNum + 3) : [];
    return (
        <div className="mt-5">

            {gamesData.length > 0 &&
                <>
                    <h4 className="mainColor">Games like {title} </h4>
                    <hr className="mainColor"/>
                    <div className="row">
                        {gamesData.map(game => {
                            return (
                                <div className="col-12 col-md-4 gx-3">
                                    <GameCard {...game}/>
                                </div>
                            )
                        })}
                    </div>
                </>
            }

        </div>
    );
};

export default GamesLikeThis;