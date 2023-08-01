'use client';
import React, {useEffect} from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';


export default function imgSlider() {


    useEffect(()=> {
        let element = document.getElementById("manualNext");
        const fireSlider = setInterval(()=> {
            element.click()
        },10000)
        // return clearInterval(fireSlider);
    },[])




    return (
        <div className={""} style={{maxHeight: '470px',overflow:'hidden',opacity:'0.4',border : '1px solid rgba(0, 0, 0, 0.6)'}}>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className={`carousel-inner`}>
                    <div className="carousel-item active" data-bs-interval="">
                        <img style={{height:"100%"}} src='banner2.webp' className="d-block w-100 " alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="">
                        <img style={{height:"100%"}} src="banner1.jpg" className="d-block w-100 " alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="">
                        <img style={{height:"100%"}} src="banner3.jpg" className="d-block w-100 " alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button id="manualNext" className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}