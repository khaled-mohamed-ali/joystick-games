"use client"
import React, {useEffect, useState} from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import style from "../../search/searchStyle.module.css"
import useSWR from "swr";
import GameCardByCategory from "@/app/components/serverComponents/gameCardByCategory";
// import useSWR from 'swr'

let timeout = null;
const SearchPart = (props) => {

    const games = props.games;
    const [query, setQuery] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);

    const handleSearchInput = (event) => {
        setQuery(event.target.value);
    }

    useEffect(() => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            let gamesMatchesQuery = [];
            if (query.trim().length) {
                gamesMatchesQuery = games.filter(game => {
                    const gameTitle = game.title.toLowerCase();
                    return gameTitle.includes(query.toLowerCase());
                });
            }
            setFilteredGames(gamesMatchesQuery);
        }, 1000);
    }, [query])

    return (
        <div className="row mb-5">
            <h2 className="mainColor"><BiSearchAlt2/> Find Games</h2>
            <hr className="discrepColor"/>
            <div className="col-lg-5 px-2">
                <input type="text" id={style.searchInputStyle}
                       value={query}
                       onChange={handleSearchInput}
                       className={`mt-2 mb-5 darkBgColor mainColor form-control`}
                       placeholder="Search for games"
                       autoComplete="off"
                />
            </div>
            <div className="col-12">
                <div className="row">
                    {filteredGames.map((game, index) => {
                        return (
                            <div className="col-xl-3 col-md-4 col-12 mb-4" key={index}>
                                <GameCardByCategory {...game}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
};

export default SearchPart;