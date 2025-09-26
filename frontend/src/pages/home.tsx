import React, { useEffect, useState } from "react";
import "./home.css"; // Move styles into a CSS file

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentStory, setCurrentStory] = useState<number | null>(null);

  const stories = [
    "https://picsum.photos/id/1011/600/800",
    "https://picsum.photos/id/1012/600/800",
    "https://picsum.photos/id/1013/600/800",
    "https://picsum.photos/id/1015/600/800",
    "https://picsum.photos/id/1025/600/800",
    "https://picsum.photos/id/1035/600/800",
  ];

  // Splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 sec
    return () => clearTimeout(timer);
  }, []);

  // Auto-close menu when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu") && !target.closest(".hamburger")) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // Auto change story every 5s
  useEffect(() => {
    if (currentStory !== null) {
      const timer = setTimeout(() => {
        setCurrentStory((prev) => (prev! + 1) % stories.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStory]);

  return (
    <div>
      {/* Loading screen */}
      {loading && (
        <div className="loading-screen">
          <img src="Untitled design.png" alt="DSs Logo" />
        </div>
      )}

      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <img src="Untitled design.png" alt="Logo" style={{ height: "70px" }} />
        </div>
        <div className="maintitle">D S S</div>
        <div
          className="hamburger"
          style={{ color: "#da9c00" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="menu">
          <a href="#">Home</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSejFz1JX_-FdUnjPxIvKR1e6nNM4PAQ30ug_I2GbzLgvAu3Iw/viewform?usp=sharing&ouid=102177105904817995434"
            target="_blank"
            rel="noreferrer"
          >
            Book
          </a>
          <a href="#">About Us</a>
          <a href="#">Profile</a>
        </div>
      )}

      {/* Stories Section */}
      <div className="stories-section">
        {["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"].map(
          (name, idx) => (
            <div
              key={idx}
              className="story"
              onClick={() => setCurrentStory(idx)}
            >
              <img src={`https://picsum.photos/id/101${idx + 1}/200`} alt={name} />
              <div className="story-name">{name}</div>
            </div>
          )
        )}
      </div>

      {/* Story Viewer */}
      {currentStory !== null && (
        <div className="story-viewer">
          <img src={stories[currentStory]} alt="Story" />
          <button className="close-btn" onClick={() => setCurrentStory(null)}>
            ✖
          </button>

          {/* Click zones */}
          <div
            className="click-zone left-zone"
            onClick={() =>
              setCurrentStory(
                (currentStory - 1 + stories.length) % stories.length
              )
            }
          ></div>
          <div
            className="click-zone right-zone"
            onClick={() =>
              setCurrentStory((currentStory + 1) % stories.length)
            }
          ></div>
        </div>
      )}

      {/* Services */}
      <h1 className="services-title">OUR SERVICES</h1>
      <div className="card-container">
        {[
          { title: "Event Management", img: "https://picsum.photos/id/10/200/150", link: "eventmanagment.html" },
          { title: "Catering Services", img: "https://picsum.photos/id/20/200/150", link: "catering.html" },
          { title: "Decoration", img: "https://picsum.photos/id/30/200/150", link: "decoration.html" },
          { title: "Photography", img: "https://picsum.photos/id/40/200/150", link: "photography.html" },
          { title: "DJ & Music", img: "https://picsum.photos/id/50/200/150", link: "dj_music.html" },
          { title: "Venue Booking", img: "https://picsum.photos/id/60/200/150", link: "venue_booking.html" },
        ].map((service, idx) => (
          <a key={idx} href={service.link} className="card-link">
            <div className="card">
              <div className="card-content">
                <img src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
              </div>
              <div className="blob"></div>
            </div>
          </a>
        ))}
      </div>

      <h1 style={{ textAlign: "center", color: "#da9c00" }}>Book Your Service</h1>
    </div>
  );
};

export default Home;
