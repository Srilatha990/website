
import './App.css';
import AboutPage from './components/aboutpage';
import Home from './components/home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Servicepage from './components/servicepage';
import Menupage from './components/menupage';
import Contactpage from './components/contactpage';
import Login from './components/login';
import Register from './components/register';
import Error from './components/error';
import Cartpage from './components/cartpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div className='header-sec'>
            <div className='container'>
              <div className='row'>
                <div className='col-3 brand-logo'>
                  <h3>Restoran</h3>
                </div>
                <div className='col-5 info'>
                  <Link to='/' className='n'>HOME</Link>
                  <Link to='/aboutpage' className='n'>ABOUT</Link>
                  <Link to='/servicepage' className='n'>SERVICE</Link>
                  <Link to='/menupage' className='n'>MENU</Link>
                  <Link to='/contactpage' className='n'>CONTACT</Link>
                </div>
                <div className='col-2 l-btn'>
                  <Link to='/login'><button>Login</button></Link>
                </div>
                <div className='col-2 cart'>
                  <Link to='/cartpage' className='n'><span className='bi bi-cart'></span></Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutpage' element={<AboutPage/>}/>
            <Route path='/servicepage' element={<Servicepage/>}/>
            <Route path='/menupage' element={<Menupage/>}/>
            <Route path='/contactpage' element={<Contactpage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/error' element={<Error/>}/>
            <Route path='/cartpage' element={<Cartpage/>}/>
          </Routes>
        </section>
        <footer>
          <div className='footer-sec'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3'>
                  <div className='f1'>
                    <div className='c'>
                      <h6>Company</h6>
                      <hr className='small-line' />
                    </div>
                    <a>About Us</a>
                    <a>Contact Us</a>
                    <a>Reservation</a>
                    <a>Privacy Policy</a>
                    <a>Terms and Condition</a>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='f2'>
                    <div className='c'>
                      <h6>Contact</h6>
                      <hr className='small-line' />
                    </div>
                    <div className='cont'>
                      <span className='bi bi-geo-alt'></span>
                      <p>123 Street, New York, USA</p>
                    </div>
                    <div className='cont'>
                      <span className='bi bi-telephone-fill'></span>
                      <p>+012 345 67890</p>
                    </div>
                    <div className='cont'>
                      <span className='bi bi-envelope-fill'></span>
                      <p>info@example.com</p>
                    </div>
                    <div className='social'>
                      <div class="icon">
                        <span class="bi bi-twitter"></span>
                      </div>
                      <div class="icon">
                        <span class="bi bi-facebook"></span>
                      </div>
                      <div class="icon">
                        <span class="bi bi-youtube"></span>
                      </div>
                      <div class="icon">
                        <span class="bi bi-linkedin"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='f3'>
                    <div className='c'>
                      <h6>opening</h6>
                      <hr className='small-line' />
                    </div>
                    <a>Monday - Saturday</a>
                    <p>09AM - 09PM</p>
                    <a>Sunday</a>
                    <p>10AM - 08PM</p>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='c'>
                    <h6>Newsletter</h6>
                    <hr className='small-line' />
                  </div>
                  <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                  <div class="newsletter">
                    <form action="/subscribe" method="POST">
                      <input type="email" placeholder="your email" className='email-box' required />
                      <button type="submit" className='f-btn'>Sign Up</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
