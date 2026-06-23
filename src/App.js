import React from "react";
import "../styles.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="meenu" id="menu-icon"></div>
          <nav id="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
              <li><a href="login.html">Sign In</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <h2 style={{ color: "white" }}>
            Welcome to<strong> Friends Restaurant</strong>
          </h2>
          <p>Order your favorite food from the comfort of your home.</p>
          <br />
          <a href="menu.html" className="btn">
            Order Now
          </a>
        </div>
      </section>
      <br />
      <section className="menu">
        <div className="container">
          <h2>Menu</h2>
          <div className="menu-items">
            <div className="menu-item">
              <img src="images/butter-chicken--600x600.jpg" alt="Butter Chicken" />
              <h3>Butter Chicken</h3>
            </div>
            <div className="menu-item">
              <img src="images/download.jpeg" alt="Paneer Tikka" />
              <h3>Paneer Tikka</h3>
            </div>
            <div className="menu-item">
              <img src="images/veg.webp" alt="Vegetable Biryani" />
              <h3>Vegetable Biryani</h3>
            </div>
            <div className="menu-item">
              <img src="images/Matar-Paneer-500x500.jpg" alt="Vegetable Biryani" />
              <h3>Vegetable Biryani</h3>
            </div>
            <div className="menu-item">
              <img src="images/gulab.jpg" alt="Vegetable Biryani" />
              <h3>Gulab Jamun</h3>
            </div>
            <div className="menu-item">
              <img src="images/homemade-ice-cream.jpg" alt="Vegetable Biryani" />
              <h3>Icecream</h3>
            </div>
          </div>
          <div className="more-button-container">
            <a href="menu.html" className="more-button">
              More
            </a>
          </div>
        </div>
        <br />
      </section>
      <section className="contact">
        <div className="container2">
          <h2>Contact Us</h2>
          <div className="container">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <p>mitu4846t@gmail.com</p>
              </div>
              <br />
              <div className="info-item">
                <h3>Phone</h3>
                <p>+91 7876706817</p>
              </div>
              <br />
              <div className="info-item">
                <h3>Address</h3>
                <p>123 Street Name, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container3">
          <h2>About Us</h2>
          <div className="about-content">
            <p>
              <strong> Welcome to Friend Restaurant</strong>, where we bring friends and flavors together!
            </p>
            <p>
              At<strong> Friend Restaurant</strong>, we believe that food is not just about sustenance, but about creating lasting memories with loved ones. Our journey began with a simple idea: to create a space where people can gather, share delicious meals, and forge meaningful connections.
            </p>
            <p>
              Our passion for food goes beyond just cooking; it's about creating culinary experiences that delight the senses and warm the heart. From our kitchen to your table, we are dedicated to serving high-quality, flavorful dishes made with fresh, locally-sourced ingredients.
            </p>
            <p>
              We believe in the power of food to bring people together, and we're committed to creating a welcoming environment where everyone feels like a friend.
            </p>
            <p>
              <strong>Thank you for choosing Friend Restaurant.</strong> We can't wait to become your favorite dining destination!
            </p>
          </div>
        </div>
      </section>
      <br />
      <section className="reviews">
        <h2>Customer Reviews</h2>
        <div className="container1">
          <div className="review">
            <div className="reviewer-info">
              <img src="images/negi.webp" alt="Reviewer Image" />
              <div className="info">
                <h3>Abhishek Negi</h3>
              </div>
            </div>
            <p className="review-text">The food was delicious! Highly recommended.</p>
          </div>
          <div className="review">
            <div className="reviewer-info">
              <img src="images/aniket.webp" alt="Reviewer Image" />
              <div className="info">
                <h3>Aniket Verma</h3>
              </div>
            </div>
            <p className="review-text">Provide great facility,must visit place</p>
          </div>
          <div className="review">
            <div className="reviewer-info">
              <img src="images/cof.jpg" alt="Reviewer Image" />
              <div className="info">
                <h3>Areen Verma</h3>
              </div>
            </div>
            <p className="review-text">The food was delicious! Highly recommended.</p>
          </div>
        </div>
      </section>
      <footer>
        <div className="container4">
          <nav>
            <ul className="footer-nav">
              <li><a href="#">Home</a></li>
              <li><a href="menu.html">Menu</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
              <li><a href="login.html">Sign In</a></li>
              <li><a href="signup.html">Sign Up</a></li>
            </ul>
          </nav>
          <ul className="social-icons">
            <li>
              <a href="#" className="fa fa-facebook-f">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="fa fa-instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="fa fa-twitter">
                Twitter
              </a>
            </li>
          </ul>
          <p>&copy; 2024 Online Food Ordering</p>
        </div>
      </footer>
    </>
  );
}

export default App;
