import logo from './logo.svg';
import './App.css';
import Count from './Count';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='compteur'>
        <Count />
      </div>  
      <Footer />
      
    </div>
  );
}

export default App;
