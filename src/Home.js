import React from "react";
import Product from "./Product";
import "./Home.css";



function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/New_Family/M-series_1500x600_2._CB406906625_.jpg"
        alt="Mobiles"
      />
      <div className="display_row">
        <Product
          id={1}
          title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
          price={13999}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_FMwebp_QL70_.jpg"
        />
        <Product
          id={2}
          title="LG 108 cm (43 Inches) Full HD Smart LED TV 43LM5600PTC (Dark Iron Gray) (2019 Model))"
          price={28999}
          rating={4}
          image="https://images-eu.ssl-images-amazon.com/images/I/411Lgbgj9OL._AC_US218_FMwebp_QL70_.jpg"
        />
      </div>

      <div className="display_row">
        <Product
          id={3}
          title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)"
          price={13999}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_FMwebp_QL70_.jpg"
        />
        <Product
          id={4}
          title="Sony SA-D40 4.1 Channel Multimedia Speaker System with Bluetooth (Black)"
          price={7999}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/61EW1LZ2NHL._AC_UL100_SR100,100_.jpg"
        />
        <Product
          id={5}
          title="IFB 30 L Convection Microwave Oven (30BRC2, Black)"
          price={14990}
          rating={4}
          image="https://m.media-amazon.com/images/I/81D8pNFmWzL._AC_UY218_.jpg"

        />
      </div>

      <div className="display_row">
        <Product
          id={6}
          title="Voltas 1.5 Ton 3 Star Split AC (Copper 183EZA White)"
          price={32999}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/511fs9x31bL._AC_UL270_SR270,270_.jpg"
        />
      </div>

    </div>
  );
}

export default Home;
