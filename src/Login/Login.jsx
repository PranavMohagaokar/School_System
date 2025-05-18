import React, { useState } from 'react'


const Login = ({handleLogin}) => {
    
    console.log(handleLogin)
    //Step-21
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //step-20
    const submitHandler=(e)=>{
        e.preventDefault() 
        // e.preventDefault() this method help to relod the form after pressing log In
        // console.log("form submitted ")
        // console.log("email is ",email, "and" ,"password is ",password)

        handleLogin(email,password)//Function calls the if else statement for checking admin and user in A
        setEmail("")
        setPassword("")
    }
    //


  return (
   <>
   
   <div className='text-5xl  flex items-center flex-nowrap justify-center py-2'>
   <h1 className='' >Login Form</h1>
   </div>

    <div id='worklist' className=' flex h-screen w-screen items-center justify-center'>
    
    
        <div className='border-2 border-yellow-600 p-20 rounded-xl' >
            <form className='flex flex-col items-center justify-center '
                    //step-20
                    onSubmit={(e)=>{
                        submitHandler(e)
                    }}
                     
            >
                <input
                // STEP-21
                    value={email} 
                    // Write anything it still invisible since usestate email is empty
                 onChange={(e)=>{
                    // console.log(e.target.value)
                    setEmail(e.target.value)//Here we are assign value from input to use state to store it
                 }}
                 //
                 required
                  className='text-white outline-none bg-transparent border-2 border-yellow-700 text-xl py-3 px-4 rounded-full placeholder:text-grey-300 ' type="email" placeholder='Enter your email'
                   />
                {/* required - property makes it mandatory to fill the form first */}
                <input
                // STEP-21
                    value={password} 
                    // Write anything it still invisible since usestate email is empty
                 onChange={(e)=>{
                    // console.log(e.target.value)
                    setPassword(e.target.value)//Here we are assign value from input to use state to store it
                 }}
                 //
                 required
                  className='text-white outline-none bg-transparent border-2 border-yellow-700 text-xl py-3 px-4 rounded-full mt-3 placeholder:text-grey-300' type="password" placeholder='Enter your Password'
                  />
                <button className='text-white outline-none  border-2 border-none bg-yellow-600 text-xl py-3 px-4 rounded-full mt-2 placeholder:text-white'>Log In</button>
            </form>

        </div>
      
    </div>
    
    </>
  )
}

export default Login
