const express = require('express'); // preparation: create function contains express library
const pool = require('./db');
const cors = require('cors');
const app = express(); //to get the full access in express library, the instance variable is necessary



//after nodemon server.js excuted
app.use(express.json()) // to show addition insert info, this line is necessary
//get data from frontend
app.use(cors()); //allow front end communicate with back end
app.get('/api/v1/posts', async (req, res) => {
    try {
        const posts = await pool.query(
            'SELECT * FROM posts'
        )

        res.json(posts);
    } catch (error) {
        console.log(error.message);
    }
})

//get the specific rows from database with matched id
app.get('/api/v1/posts/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await pool.query(
            'SELECT * FROM posts WHERE id = $1', [id]
        )

        res.json(post.rows);
    } catch (error) {
        console.log(error.message);
    }
})


//post info we get from form from front-end to DB
app.post('/api/v1/posts/', async (req, res) => {
    try {
        //const { id } = req.params
        //const { title, body } = req.body.data; //with .data, we need object in Form.js
        const { title, body } = req.body
        await pool.query(
            'INSERT INTO posts (title, body) VALUES($1, $2)', [title, body]
        )

        res.send({ success: true, message: "we have added something" })
    } catch (error) {
        console.log(error.message);
    }
});

//delete request
app.delete('/api/v1/posts/:id', async (req, res) => {
    try {
        const { id } = req.params
        //const { title } = req.body
        await pool.query(
            'DELETE FROM posts WHERE id = $1', [id]
        )

        res.send({ success: true, message: "we have deleted something" })
    } catch (error) {
        console.log(error.message);
    }
});

//put/update request
app.put('/api/v1/posts/:id', async (req, res) => {
    try {
        const { id } = req.params //navigation bar from browser
        const { title, body } = req.body //html hierachy the body part
        await pool.query(
            'UPDATE posts SET title = $1, body = $2, id = $3', [title, body, id]
        )

        res.send({ success: true, message: "we have updated something" })
    } catch (error) {
        console.log(error.message);
    }
});

//launches the server
app.listen(5000); //5000/8000 are fine.