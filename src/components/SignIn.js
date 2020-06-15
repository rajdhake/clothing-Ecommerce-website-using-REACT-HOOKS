import React, {useState} from 'react'
import './SignIn.scss'
import FormInput from './FormInput'
import CustomButton from './CustomButton'
import { signInWithGoogle } from './../firebase/firebase.utils';



function SignIn() {
   const [user, setUser]= useState({
       email:'',
       password:''
   })
   const {email, password}= user
 

  const handleSubmit = (e) => {
      e.preventDefault()
      setUser({
       email:'',
       password:''
      })
       
  }
  

   const handleChange =e=>{
       const {name,value}=e.target
       setUser({...user, [name]:value})
   }
    return (
        <div className='sign-in'>
            <h2>I already have an  account</h2>
            <span>Sign in with your email and password</span>    

            <form onSubmit={ handleSubmit}>
                <FormInput
                 name='email'
                 type='email'
                 label='email'
                 value={email} 
                 onChange= {handleChange} />
               
                <FormInput
                 name='password'
                 type='password' 
                 label='password' 
                 value={password}  
                 onChange= {handleChange}
                  />
               
              

                <CustomButton type='submit'> Sign In </CustomButton>
                
                <CustomButton onClick={signInWithGoogle} > Sign In With Google </CustomButton>
             
            </form>
        </div>
    )
}

export default SignIn
