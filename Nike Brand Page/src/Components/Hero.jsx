import "./Hero.css";

const Hero = () => {
  return (
    <main className="Hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="action-btn">
          <button>Shop Now</button>
          <button id="category">Category</button>
        </div>
        <div className="purchase-btn">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="./Images/flipkart.png" alt="flipkart-logo" />
            <img src="./Images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="./Images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};

export default Hero;
