import React from 'react';
import './card.css';
import { fadeIn } from 'react-animations';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';

export default function Display_Cards() {

    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }


    return <>
        <div className='main_Container'>
            <div className='txtcontainer'>
            <StyleRoot className='testcontainer'>
            <div className="test" style={styles.bounce}>
            </div>
        </StyleRoot>
            <Roll left>
                <h3>RESUME ABOVE YOUR </h3>
                <h3>EXPECTATIONS</h3>
                <div className='underline'></div>
            </Roll>
            <Bounce left>
                <p>Promotion is a beautiful resume theme which is a combination of latest web technologies with modern and clean design. Almost all the elements are professionally animated, so it gives your website a live feeling and your visitors will enjoy browsing your website even more. Live animation + your motivated resume will change your future!</p>
                <div className='butoonn'>Buy 40$</div>
                </Bounce>
            </div>
            {/* Picutures Section..... */}
           
        
            <div className='piccontainer'>

                {/* 1st image... */}
                <div className='monitor'>
                <Fade right>
                    <a href='#'>  <div className='sub_monitor'></div>
                        {/* <h2>Live Preview</h2> */}
                        <h4 className='txtfielddemo'>Standard Demo</h4> </a>
                </Fade>
                </div>

                {/* 2nd image.... */}
                <div className='monitor'>
                <Fade right>
                    <a href='#'><div className='sub_monitor2'></div>
                        <h4 className='txtfielddemo'>Team CV Demo</h4>
                    </a>
                    </Fade>
                </div>
                {/* 3rd Image........ */}
                <div className='monitor'>
                <Fade right>
                    <a href='#'><div className='sub_monitor3'></div>
                        <h4 className='txtfielddemo'>Photography Demo</h4></a>
                        </Fade>
                </div>
                {/* 4th Image........... */}
                <div className='monitor'>
                <Fade right>
                    <a href='#'><div className='sub_monitor4'></div>
                        <h4 className='txtfielddemo'>Resume Demo</h4></a>
                        </Fade>
                </div>
                {/* 5th Image.......... */}
                <div className='monitor'>
                <Fade right>
                    <a href='#'><div className='sub_monitor5'></div>
                        <h4 className='txtfielddemo'>TimeLine Demo</h4></a>
                        </Fade>
                </div>
                {/* 6th image....... */}
                <div className='monitor'>
                <Fade right>
                    <a href='#'><div className='sub_monitor6'></div>
                        <h4 className='txtfielddemo'>Upcoming Demo</h4></a>
                        </Fade>
                </div>
            </div>
          
        </div>

       

    </>
}