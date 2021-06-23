import React from 'react';
import './SectionFour.css'
import Icon1 from'../img/clipboard.png'
import Icon2 from'../img/Vector Smart Object1.png'
import Icon3 from'../img/Vector Smart Object.png'
import Icon4 from'../img/real-time.png'

const SectionFour = () => {
    return (
        <div className="container pb-5">
            <div>
                <div className="HrStyle"><b><hr /></b></div>
                <h3 className="text-center TRUSTEDBYIT pb-5">WHAT THIRDEYE LOOKS FOR ON YOUR SITE</h3>
                </div>
                <div className="d-flex">
                    <div className="col-6 d-flex">
                         <div>
                             <img src={Icon1} alt="" />
                         </div>
                         <div className="ml-2" >
                         <div className="HrStyleGreen"><b><hr /></b></div>
                         <h3>Self-Security Assessment</h3>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates in nisi laboriosam necessitatibus libero maiores error placeat sapiente!</p>
                         </div>
                    </div>
                    <div className="col-6 d-flex">
                         <div >
                             <img src={Icon2} alt="" />
                         </div>
                         <div  className="ml-2">
                         <div className="HrStyleGreen"><b><hr /></b></div>
                         <h3>Self-Security Assessment</h3>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates in nisi laboriosam necessitatibus libero maiores error placeat sapiente!</p>
                         </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-6 d-flex">
                         <div>
                             <img src={Icon3} alt="" />
                         </div>
                         <div className="ml-2" >
                         <div className="HrStyleGreen"><b><hr /></b></div>
                         <h3>Self-Security Assessment</h3>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates in nisi laboriosam necessitatibus libero maiores error placeat sapiente!</p>
                         </div>
                    </div>
                    <div className="col-6 d-flex">
                         <div >
                             <img src={Icon4} alt="" />
                         </div>
                         <div  className="ml-2">
                         <div className="HrStyleGreen"><b><hr /></b></div>
                         <h3>Self-Security Assessment</h3>
                         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est voluptates in nisi laboriosam necessitatibus libero maiores error placeat sapiente!</p>
                         </div>
                    </div>
                </div>
        </div>
    );
};

export default SectionFour;