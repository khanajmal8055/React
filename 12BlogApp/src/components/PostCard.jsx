import React from 'react'
import databaseService from '../appwrite/DB_service'

import { Link } from 'react-router-dom'

function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full  bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={databaseService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='font-bold text-2xl'>{title}</h2>
        </div>

    </Link>
  )
}

export default PostCard