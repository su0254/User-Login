import { createBrowserRouter } from "react-router"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"


export const router =createBrowserRouter([

    {
        path: '/', element: <Header/>,
        errorElement: <h1>error</h1>,
        children: [
            { path: '/', element: <Home/> },
            { path: 'about', element: <About/> },
        ]
    }
])