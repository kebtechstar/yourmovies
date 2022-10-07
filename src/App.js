import './App.css';
import './components/Header'
import Header from './components/Header';
import Movies from './components/Movies';
import Popular from './components/Popular';
import { MovieProvider } from './MovieContext';



function App() {


   return (
    
    <div className='centralContainer'>

      <div className='contain'>
        <MovieProvider>
          
           <Header />
            <Popular />
            <Movies />
        </MovieProvider>
      

      </div>

    </div>
  );
}

export default App;
