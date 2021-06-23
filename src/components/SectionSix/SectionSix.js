 import React from 'react';
 import './SextionSix.css'
 import ImgComputer from '../img/download.png'
 import Icon9 from '../img/scan.png'
 import Icon10 from '../img/Vector Smart Object.png'
 import Icon11 from '../img/team.png'
 import Icon12 from '../img/report (1).png'
 import Icon13 from '../img/vulnerability (1).png'
 const SectionSix = () => {
     return (
         <div className="container">
             <div className="row">
                 <div className="col-md-6 mt-5 ImgStyleComputer">
                 <img src={ImgComputer} alt="" />
                 </div>

                 <div className="pt-5  col-md-6">
                 <div className="HrStyle ">
                     <b><hr /></b>
                     </div>

                     <div className="text-center">
                         <h2>Features of  Thirdeye</h2>
                         <p>Facilities you will get using this scanner </p>
                     </div>
                     <div>
                       
                     </div>

                     <div className="row FullBoxInMiddle">
                        <div className="pl-5">
                            <div className="box">
                                <div className="text-center p-3">
                                <div>
                                    <img src={Icon9} alt="" />
                                </div>
                                 <small>Automate your scan</small>
                                </div>
                             
                              
                            </div>
                        </div>
                        <div className="pl-5">
                        <div className="box">
                                <div className="text-center p-3">
                                <div>
                                    <img src={Icon10} alt="" />
                                </div>
                                <small>Invite your other organization users</small>
                                </div>
                             
                              
                            </div>
                        </div>
                     </div>
                     <div className="row FullBoxInMiddle pt-4">
                        <div className="pl-5">
                        <div className="box">
                                <div className="text-center p-3">
                                <div>
                                    <img src={Icon11} alt="" />
                                </div>
                               <small>Work together with programmer and Developer</small>
                                </div>
                             
                              
                            </div>
                        </div>
                        <div className="pl-5">
                        <div className="box">
                                <div className="text-center p-3">
                                <div>
                                    <img src={Icon12} alt="" />
                                </div>
                                 <small>Generate automated report</small>
                                </div>
                             
                              
                            </div>
                        </div>
                     </div>
                     <div className="row LastBoxInMiddle pt-4">
                        <div className="pl-5">
                        <div className="box">
                                <div className="text-center p-3">
                                <div>
                                    <img src={Icon13} alt="" />
                                </div>
                                <small>Find the most common vulnerabilities</small>
                                </div>
                             
                              
                            </div>
                        </div>
                        
                     </div>
                   
                 </div>
                  

             </div>
         </div>
     );
 };
 
 export default SectionSix;