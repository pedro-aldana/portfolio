
import { Provider } from 'react-redux';
import store from 'store'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from 'containers/pages/Home';
import Projects from 'containers/pages/Projects';
import ProjectDetail from 'containers/pages/ProjectDetail';
import Redes from 'containers/pages/Redes';
import Contact from 'containers/pages/Contact';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/proyectos' element={<Projects/>}/>
          <Route path='/proyecto/:slug' element={<ProjectDetail/>}/>
          <Route path='/redes' element={<Redes/>}/>
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>


      </Router>


    </Provider>
  );
}

export default App;
