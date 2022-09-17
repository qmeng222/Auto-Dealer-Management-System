import "./index.css";

function MainPage() {
  return (
    <>
      <div className="px-4 py-5 text-center" id="mainContainer">
        <h1 className="display-5 fw-bold" id="mainHeading">
          <i>CarCar</i>
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-0" id="slogan">
            <b>The pinnacle solution for dealership management!</b>
          </p>
        </div>
      </div>

      <div className="py-1 text-center" id="mainContainer">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/2400x1200/?mercedes"
                className="d-block w-100"
                alt="slider1: capable"
              />

              <div className="carousel-caption d-none d-md-block bg-gray">
                <h3>Test drives for real life</h3>
                <p>24-hour take home test drives</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/2400x1200/?car"
                className="d-block w-100"
                alt="slider2: adaptive"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>Love it or return it</h3>
                <p>30-day money back (up to 1500 mi.)</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/2400x1200/?bmw"
                className="d-block w-100"
                alt="slider3: accountable"
              />

              <div className="carousel-caption d-none d-md-block">
                <h3>All major syestems covered</h3>
                <p>90 days or 4,000 miles (whichever comes first)</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <footer className="bg-dark text-light text-center fixed-bottom py-3">
          © 2022 Copyright: CarCar | All rights reserved
        </footer>
      </div>
    </>
  );
}

export default MainPage;
