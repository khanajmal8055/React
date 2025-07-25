import React ,{useState,useEffect} from 'react'
import databaseService from '../appwrite/DB_service'

import {Container , PostCard} from '../components'

function Home() {
    const [posts,setPosts] = useState([])
    useEffect(()=> {
        databaseService.getAllPost().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    } ,[])
  
    if(posts.length === 0){
        return (
            <div className='py-8 w-full mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-white'>
                                Login To Read  Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return(
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                         <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home