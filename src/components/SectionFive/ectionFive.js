import React from 'react';
import Icon5 from '../img/Vector Smart Object.png'
import Icon6 from '../img/zoom.png'
import Icon7 from '../img/customer.png'
import Icon8 from '../img/report (1)1.png'
import './SectionFive.css'

const ectionFive = () => {
    return (
        <div className="FiveBgcolor">
            <div className="container pt-5 pb-4">
                 <div className="row">
                     
                     <div className="col-md-3 d-flex">
                     <div className="mr-2">
                            <img src={Icon5} alt="" />
                            </div>
                            <div>
                                <h2>100%</h2>
                                <h5>Guaranteed</h5>
                            </div>
                     </div>   <div className="col-md-3 d-flex">
                     <div className="mr-2">
                            <img src={Icon6} alt="" />
                            </div>
                            <div>
                                <h2>770K+</h2>
                                <h5>Satisfied Client</h5>
                            </div>
                     </div>
                     <div className="col-md-3 d-flex">
                     <div className="mr-2">
                            <img src={Icon7} alt="" />
                            </div>
                            <div>
                                <h2>500</h2>
                                <h5>Sites scanned daily</h5>
                            </div>
                     </div>
                     <div className="col-md-3 d-flex">
                     <div className="mr-2">
                            <img src={Icon8} alt="" />
                            </div>
                            <div>
                                <h2>100%</h2>
                                <h5>Authenticate Report generate</h5>
                            </div>
                     </div>

                     </div>
                 </div>
            </div>
    );
};

export default ectionFive;