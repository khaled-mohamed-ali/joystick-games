'use client'
import {useState,useEffect} from "react";

const AboutGame = () => {

  const [isTrue,setIsTrue] = useState(true)

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    let str = `Geeks for Geeks is
                a computer science portal
                where people study computer science 
                Geeks for Geeks is
                a computer science portal
                where people study computer science
                Geeks for Geeks is
                a computer science portal
                where people study computer science
                Geeks for Geeks is
                a computer science portal
                where people study computer science`;

    return (
        <div className='mainColor '>
                <h4>About Albion Online</h4>
            <hr/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et incidunt
                ipsa modi molestias necessitatibus nobis quae quas quidem tempore. Asperiores
                eius minima nisi qui quos reprehenderit rerum! Nemo, optio?
            </p>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et incidunt Asperiores
                eius minima nisi qui quos reprehenderit rerum! Nemo, optio?
            </p>
            <br/>
            <br/>

            <div className="collapse" id="collapseExample">
                <div className=" card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut et incidunt
                    ipsa modi molestias necessitatibus nobis quae quas quidem tempore. Asperiores.
                </div>
            </div>
            <p>

                <button  onClick={() => setIsTrue(!isTrue)}   className="btn border-0 text-white p-0 mt-3" value='test' data-bs-toggle="collapse" href="#collapseExample" role="button"
                   aria-expanded="false" aria-controls="collapseExample">
                    {isTrue? '+  Read more': '- Read Less'}
                </button>
                <hr/>

                <p className="discrepColor smallFontSize fst-italic">
                    Disclosure: FreeToGame works closely with publishers and developers to offer a free and rewarding experience. In order to keep
                    everything free to use we may sometimes earn a small commission from some partners. Find more info in our
                    <span className='fs-7 text-white'> FAQ</span> page.
                </p>

            </p>

            <p>
                {str.split(/((?:\w+ ){5})/g).filter(Boolean).join(<br/>)}

            </p>
        </div>
    );
};

export default AboutGame;