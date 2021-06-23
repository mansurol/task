import React, { useState } from 'react';
import FakeData from '../FakeData/companyName'
import SectionTwo from '../SectionTwo/SectionTwo';
import './Dataproces.css'
const DataProcess = () => {
    const Data6 = FakeData;
    const [Data,setData] = useState(Data6)
    return (
        <div className="pt-2 pb-4">
        <div className="container">
        <div>
        <div className="HrStyle"><b><hr /></b></div>
        <h3 className="text-center TRUSTEDBYIT">TRUSTED BY IT & TELECOM COMPANIES LIKE</h3>
    </div>
  
        </div>
        <div className="bgColor ">
        <div className="container d-flex">
            {
            Data.map(result => <SectionTwo DataIn={result}/> )
          
            }
        </div>
        </div>
        </div>
    );
};

export default DataProcess;