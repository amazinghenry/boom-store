import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SignIn  from "./components/auth/auth-sign-in";
import SignUp  from "./components/auth/auth-sign-up";
import LogOut  from "./components/auth/auth-logout";
import PasswordReset from './components/auth/auth-password-reset';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import UserProfile from './components/user-profile/UserProfile';
import CreateMovieForm from './components/movie-form/CreateMovieForm';
import ContactUs from './components/contact/Contact';
import MovieDetail from './components/movie-list/MovieDetail';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = { <Home />} />
      <Route path='about' element = { <About />} />
      <Route path='contact' element = { <ContactUs />} />
      <Route path="/movie/:id/:slug" element={ <MovieDetail  />} />
      <Route path='signin' element = { <SignIn /> } />
      <Route path='signup' element = { <SignUp /> } />
      <Route path='logout' element = { <LogOut /> } />
      <Route path='passwordreset' element = { <PasswordReset /> } />
      <Route path='profile' element = { <UserProfile /> } />
      <Route path='addmovie' element = { <CreateMovieForm /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
