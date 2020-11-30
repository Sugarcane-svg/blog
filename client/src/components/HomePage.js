import React, { useEffect, useState } from 'react'
//useState = save info and keep track of it
//useEffect = when page loaded, it render whatever it renders.
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export default function HomePage() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/posts') //retrieve all data from database
            .then((res) => setPost(res.data)) //assign all info into empty array
            .catch((err) => console.log(err))  //display errors if any
    }, [])
    return (
        <>
            {posts.map(post => {
                return (
                    <Card key={post.id}>
                        <Card.Body>
                            <Card.Title as={link} to={`/post/${post.id}`}>{post.title}</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}
