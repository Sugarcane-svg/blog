import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

export default function MyForm(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    //capture title and body
    const onChangeTitle = (e) => { //function accept 'event' as e
        setTitle(e.target.value);
    }
    const onChangeBody = (e) => {
        setBody(e.target.value);
    }

    //make sure what you type goes into database
    const onSubmit = async (e) => {
        e.preventDefault(); //prevent page reloading
        // const data = {
        // title,
        // body
        // }
        await axios.post('http://localhost:5000/api/v1/posts', { title, body }) //go post sth into database
        props.history.push('/');
    }
    return (
        <>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="title" value={title} onChange={onChangeTitle} />
                    {/*Form.Control doesn't give us the permission to insert info, so we need onChange*/}
                </Form.Group>

                <Form.Group>
                    <Form.Label>Body</Form.Label>
                    <Form.Control as="textarea" rows={3} value={body} onChange={onChangeBody} />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
