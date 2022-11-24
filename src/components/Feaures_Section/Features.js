import React from "react";
import './features.css';
import Fade from 'react-reveal/Fade';

export default function Features(){


    return<>
        
        <div className="main_Section">
            <div className="Title">
            <div className="section_title">
                <h1>KEY FEATURES OF PROMOTION</h1>
                <div className="underline_section"></div>
                <p className="section_desc">Our goal was to pack Promotion with great features, here are some of Promotions best features.</p>
            </div>
            </div>
            <Fade bottom>
            <div className="card_boxes">
                    <div className="first_box box">
                            <img src="2.png" alt=""/>
                            <h3>SUPER RESPONSIVE DESIGN</h3>
                            <span>Promotion is super responsive, either you are using it on large screen monitors or tablets and smart phones, it works perfectly.</span>
                    </div>

                    <div className="second_box box">
                            <img src="14.png" alt="" />
                            <h3>USER FREINDLY CONTROL PANEL</h3>
                            <span>Enjoy Promotion’s user friendly control panel, which was made by most possible user needs and flexibility is mind.</span>
                    </div>

                    <div className="third_box box">
                            <img src="18.png" alt="" />
                            <h3>SPECIAL RESUME PAGE</h3>
                            <span>Promotion comes with a special toggle style resume page. You may add as many experiences, skills, educations and testimonials as you like.</span>
                    </div>

                  

                    <div className="fourth_box box">
                            <img src="5.png" alt="" />
                            <h3>TRANSLATION READY</h3>
                            <span>Promotion is ready to be translated to any language you want. Also it is compatible with WPML Multilingual Plugin, so you can have your website in different languages.</span>
                    </div>

                    <div className="fifth_box box">
                            <img src="12.png" alt="" />
                            <h3>FULL BACKGROUND PHOTO SLIDER</h3>
                            <span>Or maybe you got some excellent images to be shown on your website home page? You should go for Background Photo Slider.</span>
                    </div>

                    <div className="sixth_box box">
                            <img src="17.png" alt="" />
                            <h3>PRINT BUTTON</h3>
                            <span>Promotion got a print button on top of resume page, which easily makes it possible to print your resume in a clean and beautiful style.</span>
                    </div>

                    <div className="seven_box box">
                            <img src="16.png" alt="" />
                            <h3>RETINA READY</h3>
                            <span>Added sharp retina graphics for best display on HD devices and Retina screens. Retina ready it is!</span>
                    </div>

                    <div className="eight_box box">
                            <img src="4.png" alt="" />
                            <h3>GREAT SUPPORT FORUM</h3>
                            <span>Our support forum at support.pixflow.net will welcome you having any question in mind. We usually come back to you in less than 24 hours.</span>
                    </div>

                    <div className="nine_box box">
                            <img src="10.png" alt="" />
                            <h3>MORE THAN 600 GOOGLE FONT</h3>
                            <span>Easily change your website fonts using admin control panel. You can choose from more than 620 google fonts and have different fonts for headings, navigation and content text.</span>
                    </div>

                    <div className="ten_box box">
                            <img src="11.png" alt="" />
                            <h3>IMPORT DEMO CONTENT</h3>
                            <span>You can import our demo content to your website by one click. Either you want to see how does page layouts work or you want to build your website on top of our demo pages.</span>
                    </div>

                    <div className="eleven_box box">
                            <img src="3.png" alt="" />
                            <h3>SEO OPTIMIZEDT</h3>
                            <span>Promotion is coded with best SEO practices in mind, so your website contents will index correctly in search engines and your visitors can find you easily.</span>
                    </div>

                    <div className="twelve_box box last">
                            <img src="13.png" alt="" />
                            <h3>CRYSTAL CLEAR CODE</h3>
                            <span>There’s always some customers who want to dive into ocean of codes and catch their own fish! We got your back guys. :)</span>
                    </div>
            </div>
            </Fade>
        </div>

    </>
}