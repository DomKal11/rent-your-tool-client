import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="row-2">
        <div className="container">
          <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
            <div className="col-12">
              <div className="row row-2">
                <div className="col-sm-3 text-md-center">
                  <ul className="list-unstyled">
                    <li className="mt-0">
                      <h5>
                        <span>
                          <i
                            className="fa fa-firefox text-light"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <b> Rent your tools</b>
                      </h5>
                    </li>
                    <li>
                      Borrow or rent tools. The rent-your-tools bears no
                      responsibility. If you rent your tools, consider
                      insurance.
                    </li>
                  </ul>
                </div>
                <div className="col-sm-3 my-sm-0 mt-5">
                  <ul className="list-unstyled">
                    <li className="mt-0">Frontend repo</li>
                    <li>
                      <Link
                        to="https://github.com/DomKal11/rent-your-tool-client"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/github.png"
                          className="img-fluid "
                          width="25"
                          alt="github1"
                        ></img>
                      </Link>
                    </li>
                    <li>&nbsp;</li>
                  </ul>
                </div>
                <div className="col-sm-3 my-sm-0 mt-5">
                  <ul className="list-unstyled">
                    <li className="mt-0">Backend repo</li>
                    <li>
                      <Link
                        to="https://github.com/DomKal11/rent-your-tool"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/github.png"
                          className="img-fluid "
                          width="25"
                          alt="github2"
                        ></img>
                      </Link>
                    </li>
                    <li>&nbsp;</li>
                  </ul>
                </div>
                <div className="col-sm-3 my-sm-0 mt-5">
                  <ul className="list-unstyled">
                    <li className="mt-0">Heroku API:</li>
                    <li>
                      <Link
                        to="https://rentyourtools.herokuapp.com/api/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="/heroku.png"
                          className="img-fluid "
                          width="25"
                          alt="heroku"
                        ></img>
                      </Link>
                    </li>
                    <li>&nbsp;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
            <div className="col-12">
              <div className="row my-4 row-1 no-gutters">
                <div className="col-sm-3 col-auto text-center">
                  <small>&#9400; Rent-your-tools</small>
                </div>
                <div className="col-md-3 col-auto "></div>
                <div className="col-md-3 col-auto"></div>
                <div className="col my-auto text-md-left text-right ">
                  {" "}
                  <small>
                    {" "}
                    dominikkaloc@gmail.com{" "}
                    <span>
                      <img
                        src="https://i.imgur.com/TtB6MDc.png"
                        className="img-fluid "
                        width="25"
                        alt="icon1"
                      ></img>
                    </span>{" "}
                    <span>
                      <img
                        src="https://i.imgur.com/N90KDYM.png"
                        className="img-fluid "
                        width="25"
                        alt="icon2"
                      ></img>
                    </span>
                  </small>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
