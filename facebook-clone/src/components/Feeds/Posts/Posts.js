import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from '../../../firebase'
function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => 
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }))) 
            )
    }, [])

    return (

        posts.map(post => <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            image={post.data.image}
            username={post.data.username}
            timestamp={post.data.timestamp}
        />)

    )
}

export default Posts
