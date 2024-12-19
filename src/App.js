import logo from './logo.svg';
import './App.css';
import Count from './Count';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div> 
        <Header />
      </div> 
      <div className='compteur'>
        <Count />
      </div> 
      <div className='footerr'>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
