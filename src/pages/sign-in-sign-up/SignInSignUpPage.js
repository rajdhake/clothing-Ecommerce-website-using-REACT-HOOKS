import React from 'react'
import './SignInSignUpPage.scss'
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'


function SignInSignUpPage() {
    return (
        <div className='sign-in-and-sign-up'>
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SignInSignUpPage
