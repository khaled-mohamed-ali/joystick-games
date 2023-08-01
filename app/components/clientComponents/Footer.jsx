'use client'


import {SlSocialFoursqare, SlSocialGithub, SlSocialSteam, SlSocialYoutube} from "react-icons/sl";

const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <footer className="text-center text-lg-start darkBgColor" style={{backgroundColor: "#1C1E22"}}>
                <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="socialButtons border-0 btn btn-primary btn-lg btn-floating mx-2"
                            style={{backgroundColor: "#CE3226"}}>
                        <SlSocialYoutube/>
                    </button>
                    <button type="button" className="socialButtons border-0 btn btn-primary btn-lg btn-floating mx-2"
                            style={{backgroundColor: "RGB(243 194 1)"}}>
                        <SlSocialGithub className="textDarkColor"/>
                    </button>
                    <button type="button" className="socialButtons border-0 btn btn-primary btn-lg btn-floating mx-2"
                            style={{backgroundColor: "RGB(0 170 158)"}}>
                        <SlSocialFoursqare/>
                    </button>
                    <button type="button" className="socialButtons border-0 btn btn-primary btn-lg btn-floating mx-2"
                            style={{backgroundColor: "#272B30"}}>
                        <SlSocialSteam/>
                    </button>
                </div>

                <div className="text-center text-white p-3 fontSize4" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright:
                    <a className="text-white" href="@/app/components/clientComponents/Footer">dev.khaled.mohamed@gmail.com</a>
                </div>
            </footer>

        </div>
    );
}
export default Footer



// import React from 'react';