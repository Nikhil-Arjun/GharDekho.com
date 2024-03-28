import Searchbar from "../../components/searchBar/Searchbar";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Embark on Your Journey Home: Where Every Brick Tells a Story, Every
            Room Holds a Dream, and Every Corner Welcomes You to a Lifetime of
            Memories.
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="background image" />
      </div>
    </div>
  );
};

export default HomePage;
