import logo from './logo.svg';
import './App.css';
import Section1 from './sec1';
import Section2 from './sec2';
import Section3 from './sec3';
import Section4 from './sec4';
import Section5 from './sec5';

function App() {

  return <><nav className="navbar navbar-expand-lg">
            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="index.html" className="navbar-brand mx-auto mx-lg-0">First</a>

                <div className="d-flex align-items-center d-lg-none">
                    <i className="navbar-icon bi-telephone-plus me-3"></i>
                    <a className="custom-btn btn" href="#section_5">
                        120-240-9600
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-5">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_1">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_2">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_4">Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_5">Contact</a>
                        </li>
                    </ul>

                    <div className="d-lg-flex align-items-center d-none ms-auto">
                        <i className="navbar-icon bi-telephone-plus me-3"></i>
                        <a className="custom-btn btn" href="#section_5">
                            120-240-9600
                        </a>
                    </div>
                </div>
                

            </div>
        </nav>

   <main>     
      
  <Section1/>
  <Section2/>
  <Section3/>
  <Section4/>
  <Section5/>
  </main>
           
 
        

       

        <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-12">
                        <div className="copyright-text-wrap">
                            <p className="mb-0">
                                <span className="copyright-text">Copyright © 2036 <a href="#">First Portfolio</a> Company. All rights reserved.</span>
                                Design: 
                                <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
  
  </>
}

export default App;
