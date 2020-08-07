import React from 'react';
import Image3000 from '../images/3000.jpg'
import Image300 from '../images/300.jpg'
class Section2  extends React.Component {

    render() { 
        return ( 
            <div className="pg2">
             <div className='pg2Box1'>
                 <div className="childbox3 box3ImgDiv"><img className="pg2Image" src ={Image3000} alt = "sectionimage"/></div>
                 <div className="childbox3 redText">
                     <p><h3>Science/Technology</h3></p>
                 </div>
                 <div className="childbox3 greyText">
                     <h5>Nasa’s Lucy mission has passed a critical milestone in its development: all components of the spacecraft passed a system integration review (SIR) on 27 July, and it can now be assembled and tested in preparation for its October 2021 launch.</h5>
                 </div>

              </div>
              <div className='pg2Box2'>
                 <div className="childbox3 box3ImgDiv"><img className="pg2Image" src ={Image300} alt = "sectionimage"/></div>
                 <div className="childbox3 redText">
                     <p><h3>Science/Technology</h3></p>
                 </div>
                 <div className="childbox3 greyText">
                     <h5>Nasa’s Lucy mission has passed a critical milestone in its development: all components of the spacecraft passed a system integration review (SIR) on 27 July, and it can now be assembled and tested in preparation for its October 2021 launch.</h5>
                 </div>
                 <div className="pgBox3"></div>
                 <div className="pgBox4"></div>

              </div>
            
            </div>
         );
    }
}
 
export default Section2;