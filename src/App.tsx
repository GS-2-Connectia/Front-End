import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/layout"
import { Members } from "./pages/members"
import { About } from "./pages/about"
import { Profile } from "./pages/profile"
import { useContext } from "react"
import { AuthContext, AuthProvider } from "./context/auth-context"
import { CoursesProvider } from "./context/course-context"
import { Login } from "./pages/login"
import { Contact } from "./pages/contact"

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { user } = useContext(AuthContext);

  console.log(user);

  return user ? children : <Navigate to="/login" />;
}

function App() {

  return (
    <CoursesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
            <Route path="login" element={<Login />} />
              <Route index path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                } />
              <Route path="/integrantes" element={<Members />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/usuario" element={<Profile />} />
              <Route path="/contato" element={<Contact />} /> 
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </CoursesProvider>
  )
}

export default App
