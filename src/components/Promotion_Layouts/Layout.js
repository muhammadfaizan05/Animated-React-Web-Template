import React from "react";
import './Layout.css';
import Fade from 'react-reveal/Fade';

export default function Layout(){


    return<>

            <div className="Layout_Wrapper">
                <div className="Text_Cover">
                        <h3> PROMOTION LAYOUTS</h3>
                        <div className="underline_section"></div>
                        <p className="txt_Data">However you don't usually need extra pages in this theme but Here are the 3 layouts which are included in Promotion.</p>
                </div>

                <div className="Bar_cards">

                <Fade left>
                    <div className="card_cover">
                            <div className="first_img"></div>
                    </div>
                    </Fade>
                <Fade top>
                    <div className="card_cover">
                            <div className="second_img"></div>
                    </div>
                    </Fade>
                <Fade right>
                    <div className="card_cover">
                            <div className="third_img"></div>
                    </div>
                    </Fade>

                </div>
            </div>
    </>
}


export function Ad(){

    return<>
            <div className="adLine">
                    <p>Have you seen enough? Do you like the way Promotion can delivers your awesome
                         CV to your future partners? Don't waste a minute, start your online resume right away!</p>
                    <button>Buy Promotion</button>
            </div>
    </>
}