import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            loader: () => fetch('http://localhost:5000/users'),
        },
        {
            path: '/users/add',
            element: <AddUser /> // <AddUser /> is a component
        }
    ])

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
