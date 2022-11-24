import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Display_Cards from './components/Display_Cards/cards';
import Features from './components/Feaures_Section/Features';
import Layout from './components/Promotion_Layouts/Layout';
import {Ad} from './components/Promotion_Layouts/Layout';
import Services from './components/Services_Section/Services';
import Team from './components/Team/team';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Display_Cards/>
      <Features/>
      <Layout/>
      <Ad/>
      <Services/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
