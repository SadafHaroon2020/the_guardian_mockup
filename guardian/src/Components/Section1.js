import React from 'react';
import App from '../App.css'
import Image1 from '../images/image1.JPG'
import Image2 from '../images/2048.jpg'
import Image3 from '../images/5352.jpg'

class Section1  extends React.Component {

    render() { 
        return ( 
            <div className = "sec1Container">
              <div className='sec1Box1'>
                 <h2>Headlines</h2>
                 <img className="box1Image" src ={Image1} alt = "sectionimage"/>
              </div>
              <div className='sec1Box2'>
              <div className='greyText'>
                  <p>The US presidential campaign is usually in full swing by this stage of the political cycle, but the coronavirus pandemic has put a halt to rallies . David Smith in Washington looks at how the race is playing out</p>
              </div>
                 <div className="box2Image"><img src ={Image2} alt = "sectionimage"/></div>
              </div>
            
              <div className='sec1Box3'>
                 <div className="childbox3 box3ImgDiv"><img className="box3Image" src ={Image3} alt = "sectionimage"/></div>
                 <div className="childbox3 redText">
                     <p><h3>Science/Technology</h3></p>
                 </div>
                 <div className="childbox3 greyText">
                     <h5>Nasa’s Lucy mission has passed a critical milestone in its development: all components of the spacecraft passed a system integration review (SIR) on 27 July, and it can now be assembled and tested in preparation for its October 2021 launch.</h5>
                 </div>

              </div>

            </div>
         );
    }
}
 
export default Section1;