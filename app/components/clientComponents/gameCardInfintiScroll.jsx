'use client'
import React, {useState} from 'react';
import GameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";



const GameCardInfiniteScroll = ({gamesByCategory, children}) => {
    return (
        <div className="row">
            {gamesByCategory.map(game => {
                return (
                    <div className="col-12 col-md-4 col-xl-3 gx-4 mt-4">
                        <GameCardByCategory {...children} {...game}/>
                    </div>
                )
            })}
        </div>


    );
};

export default GameCardInfiniteScroll;