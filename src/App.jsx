import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Bannar from './Bannar';
import Services from './Services';
import PopService from './PopService';
import About from './Images/About';
import Why from './Why';
import PreService from './PreService';
import Sols from './Sols';
import Ques from './Images/Ques';
import Ad from './Images/Ad';
import Footer from './Footer';
import Projects from './Projects';

function App() {
  return (
    <>
      <Nav />
      <Bannar />
      <Services />
      <PopService/>
      <About />
      <Why/>
      <PreService />
      <Sols/>
      <Ques/>
      <Ad />
      <Footer />
      <Projects/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </>
  );
}

export default App;
