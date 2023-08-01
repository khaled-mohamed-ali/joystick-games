import React from 'react';
import {getGames} from '../../page'
import {randomGameIndexes} from './PersonalizedRecommendations'
import Link from "next/link";


const MostPlayed = async ({thumbnail,id}) => {
    return (
        <div>
                    <Link href={`/${id}`}>
                        <div className='p-0 mainCard' style={{marginBottom: '42px', position: 'relative'}}>
                            <img className=' productImg rounded-1' src={thumbnail}/>
                            <button className='productButton p-2'
                                    style={{position: 'absolute', bottom: '10px', right: '15px'}}> FREE
                            </button>
                        </div>
                    </Link>
        </div>
    );
};

export default MostPlayed;