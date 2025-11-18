import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/layout"

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path="/" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
