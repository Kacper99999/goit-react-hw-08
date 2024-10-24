import './App.css'
import { useEffect, lazy } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { PrivateRoute } from './components/route/PrivateRoute';
import { RestrictedRoute } from './components/route/RestrictedRoute';
import { refreshUser } from './redux/operations/auth.operations';
import { useAuth } from './hooks';



const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));



function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])

  return  (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route 
      path='/register'
      element={<RestrictedRoute redirectTo = "/contacts" component={<RegisterPage />}/>}
      />
      <Route
      path='/login'
      element={<RestrictedRoute redirectTo = "/contacts" component={<LoginPage />}/>}
      />
      <Route 
      path='/contacts'
      element={<PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>}
      />
      </Route>
    </Routes>
  )
}

export default App
