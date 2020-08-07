import React from 'react';
import Image3000 from '../images/3000.jpg'
import Image300 from '../images/300.jpg'
import Image4000 from '../images/4000.jpg'
import Image4592 from '../images/4592.jpg'
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
              {/* <div className="pgBox3">
                     <div className="box3child redText1">
                        <p><h3>Media</h3></p>
                     </div>
                     <div className="box3child greyText1">
                         <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque voluptatem est. Velit perferendis harum, ducimus, similique pariatur, aspernatur sapiente dolor maiores laudantium consequatur illo assumenda minima eveniet laboriosam recusandae?</h5>
                     </div>
                     <div className="box3child redText1">
                         <p><h3>Industry</h3></p>
                     </div>
                     <div className="box3child greyText1">
                         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet pariatur dolore accusamus quo debitis magnam mollitia id corrupti, obcaecati non deleniti dolores eligendi labore ducimus, est, ratione expedita doloribus!</h5>
                     </div>
                 </div> */}
              <div className='pg2Box2'>
                 <div className="childbox3 box3ImgDiv"><img className="pg2Image" src ={Image4000} alt = "sectionimage"/></div>
                 <div className="childbox3 redText">
                     <p><h3>Science/Technology</h3></p>
                 </div>
                 <div className="childbox3 greyText">
                     <h5>Nasa’s Lucy mission has passed a critical milestone in its development: all components of the spacecraft passed a system integration review (SIR) on 27 July, and it can now be assembled and tested in preparation for its October 2021 launch.</h5>
                 </div>
                 </div>
                 <div className='pg2Box2'>
                 <div className="childbox3 box3ImgDiv"><img className="pg2Image" src ={Image4592} alt = "sectionimage"/></div>
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
                 </div>
                
                 {/* <div className="pgBox3">
                     <div className="box3child redText">
                        <p><h3>Media</h3></p>
                     </div>
                     <div className="box3child greyText">
                         <p><h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eaque voluptatem est. Velit perferendis harum, ducimus, similique pariatur, aspernatur sapiente dolor maiores laudantium consequatur illo assumenda minima eveniet laboriosam recusandae?</h5></p>
                     </div>
                     <div className="box3child redText">
                         <p><h3>Industry</h3></p>
                     </div>
                     <div className="box3child greyText">
                         <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis amet pariatur dolore accusamus quo debitis magnam mollitia id corrupti, obcaecati non deleniti dolores eligendi labore ducimus, est, ratione expedita doloribus!</h5>
                     </div>
                 </div> */}

              </div>
            
          
         );
    }
}
 
export default Section2;