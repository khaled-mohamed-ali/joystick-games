"use client"
import React, {useEffect, useState} from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import style from "../../search/searchStyle.module.css"
import useSWR from "swr";
import GameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";
// import useSWR from 'swr'


const SearchPart = (props) => {

    const games = props.games;
    const [searchInput, setSearchInput] = useState();
    const [query, setQuery] = useState('');

    let filterdGames = games.filter(game => {
        const gameTitle = game.title.toLowerCase();
        return (
            gameTitle.includes(searchInput)
        )
    })

    useEffect(() => {
        const timeOut = setTimeout(() => setSearchInput(query), 500)
        return () => clearTimeout((timeOut))
    }, [query])

    if (query.length <= 0) {
        filterdGames = [];
    }

    return (
        <div className="mb-5">
            <h2 className="mainColor"><BiSearchAlt2/> Find Games</h2>
            <hr className="discrepColor"/>
            <div className="col-lg-5 px-2 px-lg-0">
                <input type="text" id={style.searchInputStyle}
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                       className={`mt-2 mb-5 darkBgColor mainColor form-control`}
                       placeholder="Search for games"
                       autocomplete="off"
                />
            </div>

            <div className="row">
                {filterdGames.map(game => {
                    return (
                        <div className="col-xl-3 col-md-4 col-12 mb-4">
                            <GameCardByCategory {...game}/>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default SearchPart;