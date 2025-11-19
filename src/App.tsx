import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/layout"
import { Members } from "./pages/members"

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path="/" element={<Home/>} />
                    <Route path="/integrantes" element={<Members/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
