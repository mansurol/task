import React from 'react';
import './SectionSeven.css'
import Icon14 from '../img/left-quotes-sign.png'
import Icon15 from '../img/Layer 1.png'
const SectionSeven = () => {
    return (
        <div className="container">
            <div>
             <div className="HrStyle ">
                     <b><hr /></b>
                     </div>

                     <div className="text-center">
                         <h2>WHAT OUR CUSTOMERS SAY</h2>
                     </div>


                     <div className="row pt-5 ">
                         <div className="col-md-6">
                         <div className="clintBox ">
                             <div className="text-center p-3">
                                 <img src={Icon14} alt="" />
                             </div>
                            <p>    Lorem Ipsum is simply dummy text of the printing and typesetting
                             industry. Lorem Ipsum has been the industry's standard dummy 
                             text ever since the 1500s,</p>
                             <div className="text-center">
                             <img src={Icon15} alt="" />

                             </div>
                             <div className="HRstyleColor">
                                <b><hr /></b>
                             </div>
                             <div className="text-center">
                             <h3><b>Al James, CTO</b></h3>
                             <p>Ometria</p>
                             </div>
                             


                         </div>
                         </div>
                         <div className="col-md-6">
                         <div className="clintBox">
                         <div className="text-center p-3">
                                 <img src={Icon14} alt="" />
                             </div>
                              <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                 industry. Lorem Ipsum has been the industry's standard dummy 
                                 text ever since the 1500s,</p>
                                 <div className="text-center">
                             <img src={Icon15} alt="" />
                           </div>
                           <div className="HRstyleColor">
                                <b><hr /></b>
                             </div>
                             <div className="text-center">
                             <h3><b>Al James, CTO</b></h3>
                             <p>Ometria</p>
                             </div>
                        </div>
                         </div>
                     </div>
                     </div>
        </div>
    );
};

export default SectionSeven;