import { useRoutes , BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home';
import Project from './Pages/Projects/Project';
import MiniProject from './Pages/MiniProjects/MiniProject';
import Skill from './Pages/Skill/Skill';
import Contact from './Pages/Contact/Contact';

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path:'/projects', element:<Project />},
    { path:'/miniprojects', element:<MiniProject />},
    { path:'/skills', element:<Skill />},
    { path:'/contact', element:<Contact />},
  ])
  return routes
}

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRoutes />     
    </BrowserRouter>
  )
}

export default App
