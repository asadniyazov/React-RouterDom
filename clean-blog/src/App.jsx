import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Sample_Post from './Pages/Sample_Post/Sample_Post';
import Contact from './Pages/Contact/Contact';
import Mainlayout from './Layout/MainLayout/Mainlayout';
function App() {
 

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sample_post" element={<Sample_Post />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>No page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
