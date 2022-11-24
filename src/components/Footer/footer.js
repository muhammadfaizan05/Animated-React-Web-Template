import React from "react";
import'./footer.css';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';

export default function Footer(){


    return<>
    <div className="footer-clean">
        <footer>
          <div className="footer_container">
          <LightSpeed bottom cascade>
              <div className="card_line">
                <h3>Services</h3>
                <ul>
                  <li><a href="#">Web design</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Hosting</a></li>
                </ul>
              </div>
              </LightSpeed>
              <LightSpeed bottom cascade>
              <div className="card_line">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Legacy</a></li>
                </ul>
              </div>
              </LightSpeed>
              <LightSpeed bottom cascade>
              <div className="card_line">
                <h3>Careers</h3>
                <ul>
                  <li><a href="#">Job openings</a></li>
                  <li><a href="#">Employee success</a></li>
                  <li><a href="#">Benefits</a></li>
                </ul>
              </div>
              </LightSpeed>
              <div className="social">
              <Bounce bottom cascade>
                <img src="facebook icon.png"  className="icons"></img>
                <img src="instagram icon.png"  className="icons"></img>
                <img src="linkedin_icon.png" className="icons" ></img>
                <img src="twitter_icon.png"  className="icons"></img>
                <img src="youtube_icon.png"  className="icons"></img>
                </Bounce>
                <p className="copyright">Company Name © 2018</p>
              </div>
            </div>
        </footer>
      </div>
    </>
}