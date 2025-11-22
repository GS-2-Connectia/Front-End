import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/layout"
import { Members } from "./pages/members"
import { About } from "./pages/about"
import { Profile } from "./pages/profile"

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path="/" element={<Home/>} />
                    <Route path="/integrantes" element={<Members/>} />
                    <Route path="/sobre" element={<About/>} />
                    <Route path="/usuario" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
