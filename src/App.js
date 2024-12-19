
import './App.css';
import Count from './components/Count/Count';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
