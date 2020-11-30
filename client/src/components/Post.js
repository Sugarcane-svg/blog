import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function Post(props) {
    //console.log(props);
    const [post, setPost] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/${props.match.params.id}`)
            .then((res) => setPost(res.data))
            .catch((err) => console.log(err))
    }, [])// [] tell useEffect to only update server only when the webpage is updated
    return (
        <>
            {post.map(post => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )
            })}
        </>
    )
}

