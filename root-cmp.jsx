const { Route, Routes } = ReactRouterDOM
const Router = ReactRouterDOM.HashRouter

import { AppHeader } from "./cmps/app-header.jsx"
import { Home } from "./views/home.jsx"



export function App() {
    return <Router>
        <section className="app">
            <AppHeader />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </section>
    </Router>
}
