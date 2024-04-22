import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Leftbar from './Component/Leftbar/Leftbar';
import Update from './Component/Update/Update';
import Rightbar from './Component/Rightbar/Rightbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        {/* <div className='container'> */}
          <div className='row'>
            <div className='col-md-3'>
             <Leftbar/>
            </div>
            <div className='col-md-6'>
             <Update/>
            </div>
            <div className='col-md-3'>
             <Rightbar/>
            </div>
          </div>
        {/* </div> */}
    </div>
  );
}

export default App;
