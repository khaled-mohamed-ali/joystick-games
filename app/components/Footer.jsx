'use client'


import {SlSocialFoursqare, SlSocialGithub, SlSocialSteam, SlSocialYoutube} from "react-icons/sl";

const Footer = () => {
    return (
        <div className="container-fluid p-0">
            <footer className="text-center text-lg-start darkColor" style={{backgroundColor: "#1C1E22"}}>
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

                <div className="text-center text-white p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">dev.khaled.mohamed@gmail.com</a>
                </div>
            </footer>

        </div>
    );
}
export default Footer


// import React from 'react';
//
// const Footer = () => {
//     return (
//                 <div style={{
//                     backgroundColor:' #1c1e22',
//                     border: '0 solid rgba(0,0,0,.6)',
//                     height: '350px',
//                 }}>
//
//                 </div>
//     );
// };
//
// export default Footer;
//
//
// import React from 'react';