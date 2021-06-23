import React from 'react';
import './SectionEight.css'
import Icon17 from '../img/tick.png'
import Button from 'react-bootstrap/Button'
const SectionEight = () => {
    return (
        <div className="container">
             <div className="LineHight">
             <div className="HrStyle ">
                     <b><hr /></b>
                     </div>

                     <div className="text-center ">
                         <h2>PRICING</h2>
                     </div>

                     <div className="row pb-5 pt-5">
                          <div className=" pt-5">
                            <div className=" boxCatagoriesOne pt-5">
                                 <div className="BorderInSideBar"><p>SENSETIVE FILE CHECKER</p></div>
                                 <div className="BorderInSideBar"><p>PHP INFO CHECK</p></div>
                                 <div className="BorderInSideBar"><p>EMAIL SPOOFING</p></div>
                                 <div className="BorderInSideBar"><p>CLICKJACKING</p></div>
                                 <div className="BorderInSideBar"><p>OPEN REDIRECT</p></div>
                                 <div className="BorderInSideBar"><p>XSS</p></div>
                                 <div className="BorderInSideBar"><p>SQL INJECTION</p></div>
                                 <div className="BorderInSideBar"><p>HTML INJECTION</p></div>
                                 <div><p>SUBDOMAIN TAKEOVER</p></div>
                            </div>
                            </div>
                            <div className=" boxCatagories mr-3">
                                <div className="text-center pt-3">
                                 <h2>BASIC</h2>
                                 <small className="success">1 user</small>
                                 <p>$49 /month</p>
                                 </div>
                                 <div className="d-flex flex-column tickImg">
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>


                                 </div>
                                 <div className="text-center design">
                                 <p className="success">Free trial</p>
                                 <Button variant="dark">SING UP</Button>
                                 </div>

                            </div>
                            <div className="boxCatagories mr-3">
                            <div className="text-center pt-3">
                                 <h2>MEDIUM</h2>
                                 <small className="success">5 user</small>
                                 <p>$199 /month</p>
                                 </div>
                                 <div className="d-flex flex-column tickImg">
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>


                                 </div>
                                 <div className="text-center design">
                                 <p className="success">Free trial</p>
                                 <Button variant="dark">SING UP</Button>
                                 </div>
                            </div>
                            <div className="boxCatagories mr-3">
                            <div className="text-center pt-3">
                                 <h2>ADVANCED</h2>
                                 <small className="success">20 user</small>
                                 <p>$349 /month</p>
                                 </div>
                                 <div className="d-flex flex-column tickImg">
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>
                                      <div className="pt-1"><img src={Icon17} alt="" /></div>


                                 </div>
                                 <div className="text-center design">
                                 <p className="success">Free trial</p>
                                 <Button variant="dark">SING UP</Button>
                                 </div>
                            </div>
                            <div className="boxCatagories pt-3">
                            <div className="text-center">
                                 <h2>CUSTOM</h2>
                                 
                                 <p>On demand</p>
                                <div className="contentStyle">

                                <p>Go beyond scanning what
                                    you build and host with Get
                                    it All! Designed for large 
                                   organizations, this scalable 
                                    offering is made for easy 
                                   and flexible roll-out and 
                                    provides additional 
                                    Enterprise support, 
                                    including:</p>
                                 </div>
                                 <div className="text-left">
                                 <ul>
                                      <li>Specific functionality</li>
                                      <li>Custom scan limits</li>
                                      <li>More Users</li>
                                 </ul>
                                 </div>

                                
                               
                                 </div >

                            </div>
                
                     </div>
             </div>
        </div>
    );
};

export default SectionEight;