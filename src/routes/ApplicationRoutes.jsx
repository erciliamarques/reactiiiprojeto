import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../Pages/Sobre/Sobre'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Comentarios from '../Pages/Comentarios/Comentarios'
import Menu from '../Componentes/Menu/Menu'

function ApplicationRoutes() {
    return (
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path="/" element={<Sobre />} />
            <Route path="portfolio" element={<Portfolio/>} />
            <Route path="comentarios" element={<Comentarios/>} />
                    </Routes>
        </BrowserRouter>   
        
      
    ) 
}

export default ApplicationRoutes