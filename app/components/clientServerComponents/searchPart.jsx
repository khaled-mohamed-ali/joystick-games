"use client"
import React, {useEffect, useState} from 'react';
import {BiSearchAlt2} from "react-icons/bi";
import style from "../../search/searchStyle.module.css"
import useSWR from "swr";
import GameCardByCategory from "@/app/components/gameCardByCategory";
// import useSWR from 'swr'


// const fetcher = (url) => fetch(url,).then((res) => res.json());

// const options = {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//         'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
//         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
//     }
// };


// const fetcher = (url) => fetch(url,  options).then(res => res.json()).then(res => console.log(res))


const SearchPart = (props) => {

    const games = props.games;
    const [searchInput, setSearchInput] = useState();
    const [query, setQuery] = useState();

    let filterdGames = games.filter(game => {
        const gameTitle = game.title.toLowerCase();
        return (
            gameTitle.includes(searchInput)
        )
    })
    useEffect(() => {
        const timeOut = setTimeout(() => setSearchInput(query), 300)
        return () => clearTimeout((timeOut))
    }, [query])

    if (query.length <= 0) {
        filterdGames = [];
    }

    return (
        <div>
            <h2 className="mainColor"><BiSearchAlt2/> Find Games</h2>
            <hr className="discrepColor"/>
            <input type="text" id={style.searchInputStyle}
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
                   className={`mt-2 mb-5 darkColor mainColor form-control`}
                   placeholder="Search for games"/>
            <div className="row">
                {filterdGames.map(game => {
                    return (
                        <div className="col-3">
                            <GameCardByCategory {...game}/>
                        </div>
                    )
                })}
            </div>
        </div>

    );
};

export default SearchPart;