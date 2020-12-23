import { InvertColorsOff } from "@material-ui/icons";
import React from 'react';
import '../Components/Home.css';
import Product from "./Product";

const Home=(props)=> {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>

            <div className="home_row">
                <Product title="The lean start" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={2}/>
                <Product title="Kenwood kMix for Baring" price={239.0} rating={3} image="https://m.media-amazon.com/images/I/31cuj6H5YUL._AC_SY240_.jpg"/>
            </div>

            <div className="home_row">
                <Product title="The Economist - US Edition" price={25.00} rating={1} image="https://images-na.ssl-images-amazon.com/images/I/41kqUXMLelL._AC_UL270_SR206,270_.jpg"/>
                <Product title="DEA AS220075 MATER with Puls" price={76.00} rateing={2} image="https://images-na.ssl-images-amazon.com/images/I/51t0ynaUm6L._AC_UL270_SR270,270_.jpg"/>
                <Product title="Epever 20AM" price={178.00} rating={1} image="https://images-na.ssl-images-amazon.com/images/I/719vmfjZtTL._AC_UL270_SR270,270_.jpg"/>
            </div>
            <div className="home_row">
                <Product title="SAMSUNG 49-inch Odyssey G9" price={1,399.99} rating={4} image="https://m.media-amazon.com/images/I/41tH3ok3X9L._AC_SY200_.jpg"/>
            </div>
            </div>
        </div>
    )
}

export default Home;
