'use client'
import React, {useState} from 'react';
import GameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";



const GameCardInfiniteScroll = ({gamesByCategory, children}) => {
    return (
        <div className="row">
            {gamesByCategory.map((game,index) => {
                return (
                    <div className="col-12 col-md-4 col-xl-3 gx-4 mt-4">
                        <GameCardByCategory {...children} {...game} key={index}/>
                    </div>
                )
            })}
        </div>


    );
};

export default GameCardInfiniteScroll;