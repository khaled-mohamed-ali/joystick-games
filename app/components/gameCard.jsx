import React from 'react';
import styles from '../style/gameCardStyle.module.css'
import Link from "next/link";

const GameCard = ({id, title, thumbnail}) => {

    return (
        <Link href={`/${id}`}>
            <div className={`${styles.mainCard}`}>
                <img className={`${styles.productImg} rounded-top`} src={thumbnail} alt=""/>
                <div
                    className={`rounded-bottom d-flex justify-content-between p-3 align-items-baseline ${styles.productBody}`}>
                    <div><h4 className={styles.gameTitle}>{title}</h4></div>
                    <div className=''>
                        <button className={`productButton p-2`}>FREE</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;

