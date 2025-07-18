import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';


function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https:/api.github.com/users/hiteshchoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // } , [])
    return (
        <>
            <div className='bg-gray-400 text-3xl text-white p-4 '>
                GithubUser : {data.followers}
                <img className ='w-100 flex flex-wrap justify-items item-center' src={data.avatar_url} alt="" />
            </div>
        </>
    )
}

export default Github;

export const  githubInfo = async () => {
    const response = await fetch('https:/api.github.com/users/hiteshchoudhary')
    return response.json()
}
