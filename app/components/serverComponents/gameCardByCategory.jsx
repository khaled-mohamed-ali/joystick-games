import React from 'react';
import Link from "next/link";
import styles from "@/app/style/gameCardStyle.module.css";
import {BsPlusSquareFill, BsWindows} from "react-icons/bs";
import {MdOutlineWebAsset} from "react-icons/md";



const GameCardByCategory = ({id, title, thumbnail, short_description,genre,platform}) => {
    return (
        <Link href={`/${id}`}>
            <div className={` ${styles.mainCard}`}>
                <img className={`${styles.productImg} rounded-top`} src={thumbnail} alt=""/>
                <div className={`${styles.productBody} p-3 px-4 rounded-bottom`}>
                    <div
                        className={` d-flex justify-content-between  align-items-baseline`}>
                        <div><h4 className='fontSize2'>{title}</h4></div>
                        <div className=''>
                            <button className={`productButton p-1`}>FREE</button>
                        </div>
                    </div>
                    <p className=" text-truncate discrepColor">{short_description}</p>
                    <div className="d-flex justify-content-between discrepColor">
                        <div className="">
                            <BsPlusSquareFill className={`mainColor ${styles.plusHover}`}/>
                        </div>
                        <div>
                            <span className='fontSize4 genre badge-secondary text-dark me-2 '>{genre}</span>
                            {platform =='PC (Windows)'? <BsWindows/>
                                :
                                platform =='PC (Windows), Web Browser'
                                    ?
                                <>
                                    &nbsp;
                                    <BsWindows/>
                                    &nbsp;
                                    <MdOutlineWebAsset className="fs-5"/>
                                </>
                                :
                                <MdOutlineWebAsset className="fs-4"/>}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCardByCategory;