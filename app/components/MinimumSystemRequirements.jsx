import React from 'react';
import {AiFillExclamationCircle, AiFillWindows} from "react-icons/ai";

const MinimumSystemRequirements = ({minimum_system_requirements, platform, description}) => {
    return (
        <div className='mainColor mt-4'>
            <h4>Minimum System Requirements ({platform})</h4>

            <hr/>
            <div className="row">

                {platform == "Web Browser"
                    ?
                        <p className="webMinimumSpecs text-justify newLineWrap  text-">{description}</p>
                    :
                    <>
                        <div className="col-6 mediamFontSize">
                            <div className=" discrepColor">
                                OS
                                <p className="mainColor">{minimum_system_requirements.os}</p>
                            </div>
                            <div className=" discrepColor">
                                Memory
                                <p className="mainColor">{minimum_system_requirements.memory}</p>
                            </div>
                            <div className=" discrepColor">
                                Storage
                                <p className="mainColor">{minimum_system_requirements.storage}</p>
                            </div>
                        </div>
                        <div className="col-6 mediamFontSize">
                            <div className=" discrepColor">
                                Processor
                                <p className="mainColor">{minimum_system_requirements.processor}</p>
                            </div>
                            <div className=" discrepColor">
                                Graphics
                                <p className="mainColor">{minimum_system_requirements.graphics}</p>
                            </div>
                            <div className=" discrepColor">
                                Additional Notes
                                <p className="mainColor">
                                    Specifications may change during development
                                </p>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>

    );
};

export default MinimumSystemRequirements;