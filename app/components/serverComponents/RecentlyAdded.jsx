import React from 'react';
import {getGames} from "@/app/page";
import {BsWindows} from "react-icons/bs";
import Link from "next/link";
import {MdOutlineWebAsset} from "react-icons/md";
import style from "../../style/RecentlyAndMostPlayed.module.css"



const RecentlyAdded = async () => {

    const recentlyAddedItems = await getGames();
    const sortedDateOfItems = recentlyAddedItems.map(ele => ele.release_date).sort();
    const specificDate = sortedDateOfItems.slice(sortedDateOfItems.length - 8);
    const lastedGamesAdded = recentlyAddedItems.filter(ele => ele.release_date > specificDate[0]);


    return (
        <div>
            {lastedGamesAdded.map(({thumbnail, title, genre, short_description, id, platform}) => {

                return (
                    <Link href={`/${id}`}>
                        <div className='row   mainCard mx-0  rounded mb-4 justify-content-between '
                             style={{maxHeight: '115px'}}
                        >
                            <div className='col-3' style={{maxWidth: '150px'}}>
                                <img className='align-self-center  productImg col-3' src={thumbnail} alt=""/>
                            </div>
                            <div className='col-6 align-self-center'>
                                <h4 className='fontSize2 p-0'>{title}</h4>
                                <p className='text-truncate discrepColor mb-1'>{short_description}</p>
                                <span className='fontSize4 genre badge-secondary text-dark mr-2 '>{genre}</span>
                            </div>
                            <div className='col-3 d-flex justify-content-around  align-items-center pe-0'>
                                <h5 className='discrepColor'>
                                    {platform == 'PC (Windows)' ? <BsWindows/> : <MdOutlineWebAsset className="fs-4"/>}
                                </h5>
                                <button className={`${style.productButton} p-1 p-sm-2 productButton`}> FREE</button>
                            </div>

                        </div>
                    </Link>
                )
            })}

        </div>
    );
};

export default RecentlyAdded;