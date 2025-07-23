import React ,{useState , useEffect} from 'react'
import {Container, PostCard } from '../components'
import databaseService from '../appwrite/DB_service'
function AllPosts() {
    const [posts , setPosts] = useState([])
    useEffect(() =>{
      databaseService.getAllPost([]).then((posts) => {
        if(posts){
          setPosts(posts.documents)
        }
      } , [])
    
    })


  return (
    <div className='w-full py-8' >
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='w-1/4 p-2'>
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts