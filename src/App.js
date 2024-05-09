import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './cmp/home';
import Blog from './cmp/blog';
import Contact from './cmp/contact';
import AboutUs from './cmp/about';
import NotFound from './cmp/notfound';
import 'animate.css';
const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='*' element={<NotFound />} />
      
    </Routes>
    </BrowserRouter>
  )
}
export default App