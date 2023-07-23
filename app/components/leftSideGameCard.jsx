'use client'
import React from 'react';
import {FaSignOutAlt} from "react-icons/fa";
import {BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile} from "react-icons/bs";
import {RiEmotionUnhappyLine} from "react-icons/ri";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {useSelector} from "react-redux";

const LeftSideGameCard = ({thumbnail}) => {
    return (
        <div>
            <img className='productImg' src={thumbnail} alt=""/>
            <div className="row mt-3 gx-2">
                <div className='col-3 '>
                    <div className='rounded darkColor discrepColor'
                         style={{
                             textAlign: 'center',
                             fontSize: '15px',
                             padding: '12px'

                         }}
                    >FREE
                    </div>
                </div>
                <div className='col-9 ps-0'>
                    <button
                        className='rounded  productButton fw-bolder  pl-0'
                        style={{
                            width: '100%',
                            border: '1px solid #4799eb',
                            cursor: 'pointer',
                            fontSize: '15px',
                            padding: '12px'
                        }}>
                        PLAY NOW <FaSignOutAlt/>
                    </button>
                </div>
            </div>
            <div className="row text-center bg-dark mt-3 gx-1 p-3 rounded text-white" style={{background:'#272b30'}}>
                <div className="col-3 fs-5">
                    <BsEmojiSmile style={{color:'#62c462'}}/>
                    <div className='fs-6'>LIKE</div>
                </div>
                <div className="col-3 fs-5">
                    <BsEmojiNeutral style={{color:'#7a8288'}}/>
                    <div className='fs-6'>MEH</div>
                </div>
                <div className="col-3 fs-5">
                    <BsEmojiFrown style={{color:'#ee5f5b'}}/>
                    <div className='fs-6'>DISLIKE</div>
                </div>
                <div className="col-3 fs-5">
                    <AiOutlinePlusSquare style={{color:'#5bc0de'}}/>
                    <div className='fs-6'>ADD</div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideGameCard;