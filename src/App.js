import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/ShopPage';
 import Header from './components/Header';
import SignInSignUpPage from './pages/sign-in-sign-up/SignInSignUpPage';
import { auth } from './firebase/firebase.utils';
import firebase from 'firebase/app'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/userAction';
import CheckoutPage from './pages/checkout/CheckoutPage';



function App() {

  const currentUser = useSelector(state=> state.user.currentUser)
  const dispatch = useDispatch()

//  const [currentUser, setCurrentUser] = useState(null)
 const unsubscribeFromAuth =null; //for  cleanup
 useEffect(()=>{
   const unsubscribeFromAuth=auth.onAuthStateChanged( user=>{
    dispatch(setCurrentUser(user))
   })
   return() => {                  //for cleanup
    unsubscribeFromAuth();
   }
 }, [currentUser])
 console.log(currentUser)

  return (
    <div >
      <Header  />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route exact  path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={()=> currentUser? (<Redirect to='/'/>): (<SignInSignUpPage/>)}/>
        
      </Switch>
    </div>
  );
}

export default App; 









