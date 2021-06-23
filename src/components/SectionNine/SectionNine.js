import React from 'react';
import './SectionNine.css'
import Img5 from '../img/download (3).png'
const SectionNine = () => {
    return (
        <div className="FullDivBgcolor">
            <div className="container">
                <div className="row">
                     <div className="col-md-6">
                     <div>
                    <img src={Img5} alt="" />
                </div>
                     </div>
              <div>
              <div className="col-md-6 ">
                <div className="SectionNineCulamTwo pt-5 ">
                <div className="HrStylex">
                     <b><hr /></b>
                     </div>

                    <div className="SectionNineCulamTwoP"> <p>Ready to get started with your<br/> <span className="spaing">30-day trial?</span></p></div>
                <div className="buttonColorStyele pt-5">
                    <div className="buttonBox ">
                        <div className="text-center p-1"><a href="">Try for free</a></div>
                    </div>
                 </div>
                </div>
                </div>
              </div>
                </div>
            </div>
        </div>
    );
};

export default SectionNine;