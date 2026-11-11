import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Reader from './pages/Reader.jsx'
import Upload from './pages/Upload.jsx'
import './App.css'

function App() {

  return (
    <>

        <BrowserRouter>
            <header>
                <nav>
                    <NavLink to="/">Reader</NavLink>
                    <NavLink to="/Upload">File Upload</NavLink>
                </nav>
            </header>


            <Routes>
                <Route path="/" element={<Reader />}/>
                <Route path="/Upload" element={<Upload />}/>
            </Routes>
        </BrowserRouter>


    </>
  )
}

export default App
