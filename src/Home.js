import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
           />
        <div className="home__row">
          <Product
            id="123"
            title={
              "Dokotoo Womens 2023 Chiffon Elegant Mini Short Skirt Dresses"
            }
            price={39.96}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/61leJAons9L._MCnd_AC_UL400_.jpg"
            }
          />
          <Product
            id="456"
            title={
              "Vera Wang Princess Eau de Toilette Spray for Women, Vanilla, 3.4 Fl Ounce"
            }
            price={145}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/51Y4JAroljL._AC_UL400_.jpg"
            }
          />
          <Product
            id="789"
            title={"COVERGIRL Lash Blast Clean Volume Mascara, Very Black"}
            price={12.95}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/71IwjANfH4L._AC_UL400_.jpg"
            }
          />
          <Product
            id="1011"
            title={
              "Exfoliating Dermaplaning Tool, Face & Eyebrow Razor For Women"
            }
            price={17.82}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81QS6eYjhPL._AC_UL320_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="1213"
            title={
              "Honest Beauty Hydrogel Cream with Hyaluronic Acid, Jojoba, + Squalane | Oil Free, Lightweight, Moisturizing"
            }
            price={21.99}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/61M+DTm6yxL._AC_UL400_.jpg"
            }
          />
          <Product
            id="1415"
            title={
              "CeraVe Eye Cream for Wrinkles | Fragrance Free & Ophthalmologist Tested"
            }
            price={47}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81tNeFIOGYL._AC_UL400_.jpg"
            }
          />
          <Product
            id="1617"
            title={
              "Organic HIBISCUS OIL (Hibiscus Sabdariffa) JAPANESE Vitamin E oil for FACE, SKIN, HAIR GROWTH"
            }
            price={120}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/51Cjjci8DaL._AC_UL400_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="1819"
            title={
              "Orca Beauty Hair Treatment Set - Purple Shampoo And Conditioner Set + Keratin Hair Mask Bundle - For Dry Damaged Hair And Growth, Color Treated Hair"
            }
            price={29.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71tT2goqL2L._AC_UL400_.jpg"
            }
          />
          <Product
            id="2021"
            title={
              "COCOTIQUE - Beauty & Self-Care Subscription Box for Skincare, Body Care, and Curly/Textured Hair Care"
            }
            price={88.95}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81d8r6JC5cL._AC_UL400_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="2223"
            title={
              "Act Anticavity Mouthwash, Arctic Blast, 18 Ounce (Pack of 3)"
            }
            price={18.49}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/81XbUGoWbNL._AC_UL400_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
