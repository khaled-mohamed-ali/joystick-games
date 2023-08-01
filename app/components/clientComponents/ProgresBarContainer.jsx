"use client"
import React from 'react';
import {CircularProgressbar} from "react-circular-progressbar";

const ProgresBarContainer = ({progressPercent}) => {
    return (
        <>
            <CircularProgressbar value={progressPercent} text={`${progressPercent}%`}/>
        </>
    );
};

export default ProgresBarContainer;