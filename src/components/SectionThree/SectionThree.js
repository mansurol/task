import React from 'react';
import Button from 'react-bootstrap/Button';
import IMG from '../img/4.png'
import './SectionThree.css'
const SectionThree = () => {
    return (
        <div className="container">
             <div>
        <div className="HrStyle"><b><hr /></b></div>
        <h3 className="text-center TRUSTEDBYIT">WHAT A FULL SCAN?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis repellendus dolore earum nostrum assumenda similique in, repudiandae modi eum! Deserunt quam reiciendis optio magni voluptatibus accusamus labore, facere porro suscipit veritatis laudantium debitis quasi veniam ab mollitia, distinctio <span className="lastPeraStyle">blanditiis atque ipsa! Nihil soluta, consequuntur sed velit maiores reprehenderit minima provident suscipit!</span> </p>
    </div>
    <div className="FULLSCAN pb-5 pt-4">
    <Button  variant="secondary">FULL SCAN</Button>

    </div>

    <div className="d-flex pb-5">
        <div className="col-6">
            <h3>Sample Report</h3>
            <p>Lorem ipsum dolor sit amet consectetur  animi!</p>
            <ul>
             <li>Lorem ipsum dolor sit amet, reiciendis molestias sequi incidunt, maxime dolorem deleniti nam.</li>
             <li>Lorem ipsum d dolore tempore asperiores voluptatum ducimus ad eaque, quam eligendi tenetur distinctio explicabo.</li>
            <li>Lorem ipsum, dolor sit ad quae!  autem reiciendis facilis harum nostrum placeat!</li>
            </ul>  
        </div>
        <div  className="col-6 bigImgStyle">
            <img src={IMG} alt="" />
        </div>
    </div>
            
        </div>
    );
};

export default SectionThree;