'use client'
import React, {useState} from 'react';
import {useSelector} from "react-redux";
import gameDetailsStyle from '../../style/gameDetailsStyle.module.css'


const UserReviews = () => {
    const reviews = useSelector(state => state.gameCart.reviews);
    const typeDate = new Date()
    return (
        <>
            {reviews.length >= 1 &&
                <div className='row mt-4'>
                    <h3 className='mainColor mb-4'>User Reviews</h3>
                    <hr className='mainColor'/>
                    {reviews.map((review, index) => {
                        return (
                            <div className="gap-2 d-flex mt-4">
                                <div className="col-1  pe-0 ps-0">
                                    <img src='complain.png' alt="" style={{width: '60px', height: '60px'}}/>
                                </div>
                                <div className={`col-11  d-flex rounded  mb-4 p-3 pe-0  ${gameDetailsStyle.reviewTextArea}`}>
                                    <div className={`row w-100 text-white`}>
                                        <h6 className='col-11 pb-2'>
                                            user - {index + 1}
                                            <span className="smallFontSize mainColor">
                                                &nbsp; &nbsp;{ typeDate.getDate() + "-" + typeDate.getMonth() + "-" + typeDate.getFullYear()}
                                            </span>
                                        </h6>
                                        <hr className="mainColor"/>
                                        <div className={`col-11 pt-2`}>{review}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
};

export default UserReviews;