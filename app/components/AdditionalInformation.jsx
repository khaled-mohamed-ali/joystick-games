import React from 'react';
import {AiFillExclamationCircle, AiFillWindows} from "react-icons/ai";
import UserReviews from "@/app/components/clientServerComponents/UserReviews";

const AdditionalInformation = ({title,developer,publisher,release_date,genre,platform,screenshots}) => {
    return (
        <div className='mainColor'>
            <h4 >Additional Information</h4>
            <p className='discrepColor'> <AiFillExclamationCircle/> Please note this free-to-play game may or may not offer optional in-game purchases.</p>
            <hr/>
            <div className="row mediamFontSize">
                    <div className="col-4 discrepColor">
                        Title
                        <p className="mainColor">{title}</p>
                    </div>
                    <div className="col-4 discrepColor">
                        Developer
                        <p className= "mainColor">{developer}</p>
                    </div>
                    <div className="col-4 discrepColor">
                        Publisher
                        <p className="mainColor">{publisher}</p>
                    </div>
            </div>
            <div className="row mediamFontSize">
                <div className="col-4 discrepColor">
                    Release Date
                    <p className="mainColor">{release_date}</p>
                </div>
                <div className="col-4 discrepColor">
                    Genre
                    <p className="mainColor">{genre}</p>
                </div>
                <div className="col-4 discrepColor">
                    Platform
                    <p className="mainColor">
                        <AiFillWindows/>
                        &nbsp;
                        &nbsp;
                        {platform}
                    </p>
                </div>
                <div className="row mt-4 p-0 gx-3">
                    <div className="col-12"><h4 className="p-0">{title} Screenshots</h4></div>
                    <hr/>
                    {screenshots.map(({image}) => {
                        return (
                            <div className={screenshots.length >= 4 ? "col-3": "col-4" }>
                                <img className='productImg' src={image} alt=""/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default AdditionalInformation;