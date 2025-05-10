'use client'
import { useState , useCallback } from 'react';

export default function AddButton(){

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleSubmit= useCallback(
        async function onClick(){
            /*try{
                const newUser = await createUser({
                    name,
                    email,
                    password,
                });
                console.log(newUser);
            }catch(error){
                console.error(error);
            }*/
        },
        [name, email, password], //이거 없으면 변경사항을 인지못함
    );

    return(
        <>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            
            <button
                onClick={() => handleSubmit()}
                className="bg-blue-500">
                Click me
            </button>
        </>
    );
}