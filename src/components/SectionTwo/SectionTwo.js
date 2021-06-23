import React from 'react';
import './SectionTwo.css'
const SectionTwo = (props) => {
    console.log(props)
    const {Photo} = props.DataIn;
    return (
        <div className="logoStyle">
             <img src={Photo} alt=""/>
    
         
        </div> 
    );
};

export default SectionTwo;