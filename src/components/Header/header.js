import React from 'react';
import Button from 'react-bootstrap/Button';
import './header.css'
const header = () => {
    return (
      <div className="fullBgImg">
        <div className="container  ">
          <div className="text-center ">
            <div className="pt-5 ml-5">

            <h2 className="text-white  pt-5 Headline">TECHFORING VULNERABILLY SCANNER</h2>
            <p className=" text-white HeadlineDetails ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero animi iure expedita repellat? Ratione cupiditate at aliquid rem blanditiis magni natus sunt provident! Alias, commodi placeat ab nesciunt assumenda magnam.</p>
            <div className="inputBox">
                <div className="pb-3">
                <input className="w-50 p-1 inputBoxinput " type="text" placeholder="https//www.techforing.com/"/>
                </div>
                <div className="pb-3">
                <input className="w-50 p-1 " type="text" placeholder="your email address"/>
               </div>
           
               </div>
               </div>
          
               <div className=" pb-5 buttonFree ">
              <Button variant="success" >FREE SCAN</Button>
          </div>
          </div>
        


       </div>
       </div>
    );
};

export default header;