import React from 'react';
import './SectionTen.css';
import Button from 'react-bootstrap/Button'
import Img7 from '../img/Vector Smart Object copy 3 (1).png'
const SectionTen = () => {
    return (
        <div className="container">
            <div className="pt-5 pb-5">
              <div>  
                  <div className="HrStyle ">
                     <b><hr /></b>
                     </div>
                     <div className="text-center pb-5">
                         <h2>RESOURCES</h2>
                     </div>
                 </div>

             <div className="row">
                 <div className="col-md-4">
                     <div className="text-center">
                        <h3>Guides</h3>
                     </div>
                     <div className="HrMaster">
                         <hr />
                     </div>
                     <div className="SectionTenImgStyle"> 
                         <img src={Img7} alt="" />
                     </div>
                     <div className="SectionTenContent pl-2 pb-2">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sit assumenda magnam.</p>
                     <Button variant="secondary">Learn More</Button>
                     </div>
                     
                 </div>

                 <div className="col-md-4">
                     <div className="text-center">
                        <h3>Tips & Tricks</h3>
                     </div>
                     <div className="HrMaster">
                         <hr />
                     </div>
                     <div className="SectionTenImgStyle"> 
                         <img src={Img7} alt="" />
                     </div>
                     <div className="SectionTenContent pl-2 pb-2">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sit assumenda magnam.</p>
                     <Button variant="secondary">Learn More</Button>
                     </div>
                     
                 </div>

                 <div className="col-md-4">
                     <div className="text-center">
                        <h3>Blog</h3>
                     </div>
                     <div className="HrMaster">
                         <hr />
                     </div>
                     <div className="SectionTenImgStyle"> 
                         <img src={Img7} alt="" />
                     </div>
                     <div className="SectionTenContent pl-2 pb-2">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi sit assumenda magnam.</p>
                     <Button variant="secondary">Learn More</Button>
                     </div>
                     
                 </div>

             </div>
             </div>
        </div>
    );
};

export default SectionTen;