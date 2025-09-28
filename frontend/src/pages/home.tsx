import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import "../pages/home.css";

const services = [
  { title: "Event Management", img: "https://picsum.photos/id/10/300/200" },
  { title: "Catering Services", img: "https://picsum.photos/id/20/300/200" },
  { title: "Decoration", img: "https://picsum.photos/id/30/300/200" },
  { title: "Photography", img: "https://picsum.photos/id/40/300/200" },
  { title: "DJ & Music", img: "https://picsum.photos/id/50/300/200" },
  { title: "Venue Booking", img: "https://picsum.photos/id/60/300/200" },
];

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <main className="content">
        <h1 className="title">OUR SERVICES</h1>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default Home;
