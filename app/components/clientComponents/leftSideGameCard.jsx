'use client'
import React from 'react';
import {FaSignOutAlt} from "react-icons/fa";
import {BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile} from "react-icons/bs";
import {RiEmotionUnhappyLine} from "react-icons/ri";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {useSelector} from "react-redux";

const LeftSideGameCard = ({thumbnail}) => {
    return (
        <div className="position-sticky" style={{zIndex:'11',top:'135px'}}>
            <img className='productImg' src={thumbnail} alt=""/>
            <div className="row mt-3 gx-2">
                <div className='col-3 '>
                    <div className='rounded user-select-auto darkBgColor discrepColor  fontSize3 text-center p-2'
                    >FREE
                    </div>
                </div>
                <div className='col-9 ps-0'>
                    <button
                        className='rounded p-3  productButton fw-bolder w-100 user-select-auto'
                        style={{
                            border: '1px solid #4799eb',
                        }}>
                        PLAY NOW <FaSignOutAlt/>
                    </button>
                </div>
            </div>
            <div className="row text-center bg-dark mt-3 gx-1 p-3 rounded text-white" style={{background:'#272b30'}}>
                <div className="col-3 fs-5">
                    <BsEmojiSmile style={{color:'#62c462'}}/>
                    <div className='fontSize3'>LIKE</div>
                </div>
                <div className="col-3 fs-5">
                    <BsEmojiNeutral style={{color:'#7a8288'}}/>
                    <div className='fontSize3'>MEH</div>
                </div>
                <div className="col-3 fs-5">
                    <BsEmojiFrown style={{color:'#ee5f5b'}}/>
                    <div className='fontSize3'>DISLIKE</div>
                </div>
                <div className="col-3 fs-5">
                    <AiOutlinePlusSquare style={{color:'#5bc0de'}}/>
                    <div className='fontSize3'>ADD</div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideGameCard;