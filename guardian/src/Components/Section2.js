import React from 'react';
import Img2048 from '../images/2048.jpg'
class Section2  extends React.Component {

    render() { 
        return ( 
            <div>
                  <div className = "imgHolder">
                <img src={Img2048} alt = "section image"/>
                </div>
                <div className = "textHolder">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quaerat exercitationem tempore, deleniti vero soluta ex eius?</p>
                </div>
            </div>
         );
    }
}
 
export default Section2;