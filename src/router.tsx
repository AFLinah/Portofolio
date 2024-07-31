import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import Resume from "./components/Resume";

const router = createBrowserRouter([
    {path: "/", element: <HomePage/>},
    {path: "/resume", element: <Resume/>},
])

export default router;