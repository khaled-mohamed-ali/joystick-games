import React from 'react';
import {AiFillLike, AiFillStar} from "react-icons/ai";
import {FaCrown, FaLongArrowAltUp, FaUserAlt} from "react-icons/fa";
import {BiMessage} from "react-icons/bi";
import {BsEmojiFrownFill, BsFillEmojiSmileFill} from "react-icons/bs";
import {HiEmojiHappy} from "react-icons/hi";
import ProgresBarContainer from "@/app/components/clientServerComponents/ProgresBarContainer";

const GameStatistics = ({title}) => {
    let value = Math.floor(Math.random() * (100 - 80) + 70);
    return (
        <div className='row' style={{color: '#aaa',height:'350px'}}>
            <div className="col-8 mt-4 d-flex flex-column justify-content-around">
                <h3>{title}</h3>
                <div>{value > 90 ?
                    <div>
                        <AiFillStar/>
                        <span> Massively Positive</span>
                    </div>
                    : value <= 90 && value > 80 ?
                        <div>
                            <FaCrown/>
                            <span> Very Positive</span>
                        </div> : value <= 80 ?
                            <div>
                                <AiFillLike/>
                                <span> Positive</span>
                            </div> : null

                }
                </div>
                <span>30 Member Ratings</span>
                <span>
                    <FaUserAlt/> 1134 Members have this game in their library!
                </span>
                <div className='d-flex justify-content-between w-75'>
                    <span>
                        <BiMessage/> 2 Reviews
                    </span>
                    <span>
                        <FaLongArrowAltUp/> 9%Popularity
                    </span>
                </div>

            </div>
            <div className="col-4 ps-2  pe-0 d-flex justify-content-start align-items-end">
                <div className='' style={{width: '150px', height: '150px'}}>
                    <ProgresBarContainer progressPercent={value}/>
                </div>
            </div>


            <div className='row justify-content-between mt-5' style={{height: '20px'}}>
                <div className='col-7 '><h5>What do you think about {title}?</h5></div>
                <div className='col-5 w-25 d-flex justify-content-end text-end ' style={{color: '#7a8288'}}>
                    <div className="col-3 fs-5 w-50">
                        <BsFillEmojiSmileFill/>
                    </div>
                    <div className="col-3 fs-4 w-50">
                        <HiEmojiHappy/>
                    </div>
                    <div className="col-3 fs-5 w-50">
                        <BsEmojiFrownFill/>
                    </div>
                </div>
                <hr style={{borderTop: '1px solid rgba(94,84,84,0.6)'}}/>

            </div>

        </div>

    );
};

export default GameStatistics;