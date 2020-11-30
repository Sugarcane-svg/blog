import HomePage from './components/HomePage';
import MyNavbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import MyForm from './components/Form';
import { Container } from 'react-bootstrap'
import Post from './components/Post'

function App() {
    return (
        <>
            <MyNavbar />
            <Container>
                <Switch>

                    <Route exact path='/' component={HomePage} />
                    {/*navigate between pages with exact path, without exact, it always shows homepage*/}
                    <Route path='/addpost' component={MyForm} />
                    <Route path='/post/:id' component={Post} />

                </Switch>
            </Container>
        </>
    )
}

export default App;