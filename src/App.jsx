import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Componenets/About'
import Contacts from './Componenets/Contacts'
import Home from './Componenets/Home'
import NotFound from './Componenets/NotFound'
import MainLayout from './layout/MainLayout'
import Courses from './Componenets/Courses'
import SingleCourse from './Componenets/SingleCourse'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
