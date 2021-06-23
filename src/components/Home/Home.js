import React from 'react';
import Header from '../Header/header'
import SectionTwo from '../DataProcecs/DataProcess'
import SectionThree from '../SectionThree/SectionThree'
import SectionFour from '../SectionFour/SectionFour'
import SectionFive from '../SectionFive/ectionFive'
import SectionSix from '../SectionSix/SectionSix'
import SectionSeven from '../SectioSeven/SectionSeven'
import SectionEight from '../SectionEight/SectionEight'
import SectionNine from '../SectionNine/SectionNine'
import SectionTen from '../SectionTen/SectionTen'
import Footer from '../SectionEleven/footer'
import LastSection from '../LastSection/LastSection'
const Home = () => {
    return (
        <div>
             <Header/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <SectionTen/>
      <Footer/>
      <LastSection/>

        </div>
    );
};

export default Home;