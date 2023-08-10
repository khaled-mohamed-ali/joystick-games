'use client'
import React from 'react';
import Link from "next/link";
import {BiSearchAlt2} from 'react-icons/bi'
import {GrGamepad} from 'react-icons/gr'
import navBarStyle from '../../style/navBar.module.css'
import {useEffect} from "react";
import {usePathname} from "next/navigation";

const NavBar = (params) => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);


    return (
        <div id={`${navBarStyle.mainNavContainer}`} className={`w-100 bg-white`}>
            <nav className=" navbar navbar-expand-lg  container p-0">
                <div className="container-fluid ">
                    <Link style={{color:'#CE3226'}} className="fw-bolder fs-3 navbar-brand" href="/">
                        <img src={"./Game-Controller-Transparent.png"} className={navBarStyle.logo}/>
                        JOYSTICK
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul  className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link id={`${navBarStyle.freeGames}`} className={`fs-6 fw-bold  nav-link dropdown-toggle`} href="" role="button" data-bs-toggle="dropdown"
                                      aria-expanded="false">
                                    free games
                                </Link>
                                <ul className="dropdown-menu" id={`${navBarStyle.freeGames}`}>
                                    <li><Link className="dropdown-item" href={`/games/MMORPG`}>MMORPG</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/shooter`}>Shooter</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/MOBA`}>MOBA</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/Anime`}>Anime</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/battle-royale`}>battle Royale</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/Strategy`}>Strategy</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/fantasy`}>Fantasy</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/Sci-fi`}>Sci-fi</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/fighting`}>Fighting</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/Social`}>Social</Link></li>
                                    <li><Link className="dropdown-item" href={`/games/sports`}>Sports</Link></li>
                                    <hr className=""/>
                                    <li><Link className="dropdown-item" href={`/games`}>Free-To-Play-Games</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link id={`${navBarStyle.browserGames}`} className="fs-6 fw-bold nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown"
                                      aria-expanded="false">
                                    browser games
                                </Link>
                                <ul className="dropdown-menu" id={`${navBarStyle.browserGames}`}>
                                    <li><Link className="dropdown-item" href={`/browser/MMORPG`}>MMORPG</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/shooter`}>Shooter</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/Anime`}>Anime</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/Strategy`}>Strategy</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/fantasy`}>fantasy</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/Sci-fi`}>Sci-fi</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/racing`}>racing</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/social`}>social</Link></li>
                                    <li><Link className="dropdown-item" href={`/browser/sports`}>sports</Link></li>
                                    <hr className=""/>
                                    <li><Link className="dropdown-item" href={`/browser`}>browser Games</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul style={{width:'150px'}} className="list-unstyled d-flex justify-content-md-end  fs-5 m-0">
                            <li className="mt-0"><Link id={navBarStyle.searchIcon} className="fs-4 fw-bolder" href='/search'><BiSearchAlt2/></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;