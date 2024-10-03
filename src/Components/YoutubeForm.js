import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm (){

const form = useForm();

const {register, control, handleSubmit, formState:{errors}} = form;

const onSubmit =(data)=>
{
    console.log('The form is submitted', data)
}

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <label>UserName</label>
                <input type="text"  id="username" {...register('username', {required:'User Name Mandatory',minLength:{ value: 5,message:'Minium 5 Characters needed'}})}/>
                {errors?.username &&<p>{errors.username.message}</p>}
                <label>Email</label>
                <input type="email"  id="email" {...register('email',{required:'Email should not be left empty'})}/>
                <label>Channel</label>
                <input type="text"  id="channel"  {...register('channel')}/>
                <input type="submit" {...register('Submit')} style={{marginTop:'20px'}}/>
            </form>
            <DevTool control={control}/>
        </div>
    )
}

export default YoutubeForm;