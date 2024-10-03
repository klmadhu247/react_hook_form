import React from "react";
import './register.css'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    firstName: yup.string().required('First Name is Mandate'),
    lastName: yup.string().required('Last Name is Mandate'),
    email: yup.string().email().required('please enter valid email'),
    age: yup.number().integer().positive().required(),
    password: yup.string().required().min(4,'Min 4 Char required').max(15,'Enter upto 15 Char alone'),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null]).required('Password should match')

})





function RegistrationForm(){

    const form = useForm({resolver:yupResolver(schema)})

    const {register,handleSubmit,control, formState:{errors}} = form;

    console.log(errors)

    

    return(
        <div>
            <h3>Register Here</h3>  

           

            <form onSubmit={handleSubmit((data)=>{
                console.log(data)
            })} style={{display:"flex", flexDirection:'column', alignItems:"center",margin:'10px'}}>
               <input {...register('firstName')} type="text" placeholder="First Name" />
               {errors?.firstName&& <p>{errors.firstName.message}</p>}
               <input {...register('lastName')} type="text" placeholder="Last Name"/>
               <p>{errors.lastName?.message}</p>
               <input {...register('email')} type="email" placeholder="Email"/>
               <p>{errors.email?.message}</p>
               <input {...register('age')}  type='number' placeholder="Age"/>
               <p>{errors.age?.message}</p>
               <input {...register('password')} type="password" placeholder="Password"/>
               <p>{errors.password?.message}</p>

               <input {...register('confirmPassword')} type="password" placeholder="Confirm Password"/>
               <p>{errors.confirmPassword?.message}</p>
               <input type="submit"/>

            </form>
            <DevTool control={control}/>
        </div>
    )
}
export default RegistrationForm;