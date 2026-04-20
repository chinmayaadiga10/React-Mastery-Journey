import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./public/Images/brand_logo.png" alt="logo_image" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
