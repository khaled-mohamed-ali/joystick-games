import React from 'react';
import {getGames} from "@/app/page";
import {randomGameIndexes} from "@/app/components/PersonalizedRecommendations";
import GameCard from './gameCard'
import {FaQuoteLeft} from "react-icons/fa";

const CommunityRecommendations = async () => {

    const allGames = await getGames();
    const randoms = randomGameIndexes([], allGames.length, 1);
    const CommunityRecommend = randoms.map((random) => allGames[random]);

    return (
        <div style={{margin: '60px 0 0 0'}}>
            < div className='container pb-4'>
                <h3 className='gameTitle fs-2'>Community Recommendations</h3>
                < div className='row'>
                    {
                        CommunityRecommend.map((game) => {
                            return (
                                <div className='col-6'>
                                    <div style={
                                        {
                                            background: '#1c1e22',
                                            border: '0 solid rgba(0,0,0,.6)',
                                            borderRadius: '5px',
                                        }}>
                                        <div className='row p-3'>
                                            <div className='col-6 p-3'>
                                                <GameCard {...game}/>
                                            </div>
                                            <div className='col-6 align-self-center'>
                                                <p className='discrepColor' style={{cursor:'text'}}>
                                                    <FaQuoteLeft/>
                                                    &nbsp;
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
                                                    deserunt dicta distinctio incidunt, ipsam ipsum libero nemo
                                                    obcaecati
                                                    provident quo ratione repellat vitae? Ad ex hic nemo nihil odio
                                                   perferendis?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CommunityRecommendations;