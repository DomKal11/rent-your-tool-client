import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="overlay"></div>
      <video playsInline autostart="true" autoPlay loop muted id="background">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="title-menu container mx-auto">
      <h1 aria-label="Rent your tools!" className="text-nowrap"></h1>

      <div className="row cards-title-menu">
        <div className="card card-special">
          <Link to="/tools">
            <img
              className="card-img-top"
              src="/borrow.png"
              alt="borrow"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Borrow tools</h5>
              <p className="card-text">
                Do you have a project, but without a specific tool you can't
                complete it? Borrow tools from other users!
              </p>
            </div>
          </Link>
        </div>

        <div className="card card-special">
          <Link to="/add-tool">
            <img
              className="card-img-top"
              src="/rent.png"
              alt="rent"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Rent my tools</h5>
              <p className="card-text">
                Let your tools make money for you! Don't let your tools lie in
                the garage and lose its value there. Lend it to other trusted
                users!
              </p>
            </div>
          </Link>
        </div>

        <div className="card card-special">
          <Link to="/signup">
            <img
              className="card-img-top"
              src="/sign.png"
              alt="sign"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Sign Up!</h5>
              <p className="card-text">
                You need to register to use most of the rental's features!
              </p>
            </div>
          </Link>
        </div>
      </div>

      <p className="w-50 mx-auto">
        Let your tools make money for you! Don't let your tools lie in the
        garage and lose its value there. Lend it to other trusted users!
      </p>
    </div>
    </>
  );
}

export default HomePage;
