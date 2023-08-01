'use client'
import React, {useEffect, useState} from 'react';
import gameDetailsStyle from '../../style/gameDetailsStyle.module.css'
import {CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import {AiFillLike, AiFillStar} from "react-icons/ai";
import {FaCrown, FaLongArrowAltUp, FaUserAlt} from "react-icons/fa";
import {BiMessage} from "react-icons/bi";
import {BsEmojiFrownFill, BsFillEmojiSmileFill} from "react-icons/bs";
import {HiEmojiHappy} from "react-icons/hi";
import {IoIosSend} from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {addUserReview} from "@/store/gameCartSlice";


const RightSideGameDetails = ({title}) => {

    const [textAreaValue, setTextAreaValue] = useState('');
    const reviews = useSelector(state => state.gameCart.reviews)
    let value = Math.floor(Math.random() * (100 - 80) + 70);
    const dispatch = useDispatch();
    const sendReview = (e) => {

        dispatch(addUserReview(textAreaValue));
        setTextAreaValue('')
    }


    return (
        <>
            <div className='row gx-5 '>
                <div className="col-3 col-sm-2 pe-0 ps-0 ">
                    <img src='complain.png' alt="" style={{width: '70px', height: '70px'}}/>
                </div>
                <div className={`col-9 col-sm-10  d-flex ps-0 mb-5 ${gameDetailsStyle.textArContainer}`}>
                    <div className={`${gameDetailsStyle.arrow}`}/>
                    <textarea className={` rounded  input-group  p-3 ${gameDetailsStyle.reviewTextArea}`}
                              placeholder={`Write a review for ${title}Fall Guys! Share your thoughts with our community.`}
                              type='text'
                              value={textAreaValue}
                              onChange={(event) => setTextAreaValue(event.target.value)}
                    />

                    <button className={`p-md-3 p-2 btn-outline-none rounded ${gameDetailsStyle.reviewBtn}`}
                            onClick={(e) => textAreaValue.length <= 10 ? alert('review must be at least 10 characters') : sendReview(e)}
                    >
                        <IoIosSend/>
                    </button>
                </div>
            </div>


        </>
    );
};

export default RightSideGameDetails;