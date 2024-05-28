import { useRoutes, Navigate } from 'react-router-dom'
import PreviousRoute from './pages/previousRoute'
import Login from './pages/home'
import SighUp from './pages/signUp'
import ReRouteSignIn from './pages/reRouteSignIn'
import ReRouteSignUp from './pages/reRouteSignUp'
import AddRoute from './pages/addRoute'
import MainLayout from './layoutes/MainLayout'

export default function Router() {

    const elements = useRoutes([
        {
            path: "auth", children: [
                { path: "login", element: <Login /> },
                { path: "signUp", element: <SighUp /> }
            ]
        },
        //ראוטר ללקוח רשום
        {
            path: "home", element: <MainLayout />, children: [
                { path: "previousRoute", element: <PreviousRoute /> },
                { path: "reRouteSignIn", element: <ReRouteSignIn /> },
                { path: "addRoute", element: <AddRoute /> }]

        },
        { path: "reRouteSignUp", element: <ReRouteSignUp /> },
        { path: "/", element: <Navigate to="auth/login" /> },
        { path: '*', element: <Navigate to='/' /> }
    ])

    return <div style={{ height: '100vh', width: '100vw' }}>
        {elements}
    </div>
}