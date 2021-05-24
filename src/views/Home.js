import React from 'react';
import '../variable/variable.scss';
import './Home.scss';
import { Container } from "react-bootstrap";
import Navigation from '../components/Navigation';
import posts from '../data/posts';

const Home = () => (
    <>
        <div className="Home">                    
            <Container>
                <Navigation posts={posts}/>                
            </Container>
        </div>

    </>
)

export default Home;