import React,{useState} from 'react'
import FormInput from './FormInput';
import CustomButton from './CustomButton';
// import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import './SignUp.scss'
function SignUp() {
    const initialState ={
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const [state, setstate] = useState(initialState);
    const {displayName, email, password, confirmPassword}=state;
    
    const handleSubmit =  (e) => {
            e.preventDefault()
            setstate({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        
    const handleChange =e=> {
      const {name,value}= e.target
      setstate({...state, [name]:value})
    }    
    return (
        <div className='sign-up'>
            <h2 className='title'>
                I do not have a account
            </h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
            
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
