import './styles/layout.scss'
import Header from './layout/Header'
import Footer from './layout/Footer'
import View from './components/View'
function App() {
  return (
    <div className="App">
        <Header />
        <div className='user-view-grid'>
            <div className='side-bar-wrapper mx-2 lg:mx-0 mt-2 lg:mt-0' id='viewSideBar'>
              <p>Preview</p>
            </div>
              <div className='tab-section-wrapper ml-8' id='tabSection'>
               <View />
              </div>            
          </div>
        <Footer />
    </div>
  );
}

export default App;


