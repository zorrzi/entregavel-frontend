import { redirect, RouteObject } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './dashboard/nested/home/homepage'; 
import NewEvent from './dashboard/nested/new-event/new-event';

const routes : RouteObject[] = [
    {
        path: "user/dashboard",
        element: <Dashboard />,
        id: "dashboard",
        children: [
            {
                index: true,
                loader: async () => redirect('/user/dashboard/home')
            },
            {
                path: "home",
                element: <Home />,
                id: "home"
                
            },
            {
                path: "new-event",
                element: <NewEvent />,
                id: "new-event"
                
            }
        ]
    }
]

export default routes;