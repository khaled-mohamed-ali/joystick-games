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
                            <div className="gap-2 ps-0 d-flex mt-4 justify-content-between" key={index}>
                                <div className="col-2  col-xl-1   ps-0">
                                    <img src='complain.png' alt="" style={{width: '60px', height: '60px'}}/>
                                </div>
                                <div
                                    className={` col-9 col-sm-10 col-xl-11 d-flex rounded  mb-4 p-3 pe-0 position-relative 
                                        ${gameDetailsStyle.textArContainer} ${gameDetailsStyle.reviewTextArea}`}
                                >
                                    <div className={`${gameDetailsStyle.arrow}`}/>
                                    <div className={`row w-100 text-white`}>
                                        <div className="col-12">
                                            <h6 className='pb-2'>

                                                user - {index + 1}
                                                <span className="fontSize4 mainColor">
                                                &nbsp; &nbsp;{typeDate.getDate() + "-" + typeDate.getMonth() + "-" + typeDate.getFullYear()}
                                            </span>
                                            </h6>
                                        </div>

                                        <hr className="mainColor"/>
                                        <div className={`col-12 pt-2`}>
                                            <p className="text-break">
                                                {review}
                                            </p>
                                        </div>
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