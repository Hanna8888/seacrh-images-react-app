import React, {useEffect, useState} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from "./components/ImageSearch";
import './index.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=30128778-47d1a31c8dc23d7e595c19c44&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [term]);


    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6} className="mt-5 mb-5"><ImageSearch searchText={(text) => setTerm(text)}/></Col>
                <Col md={11} className="mt-5">{!isLoading && images.length === 0 &&
                <h1 className='text-center mx-auto mt-5'>No Images Found</h1>}

                    {isLoading ? <h1 className='text-center mx-auto mt-5'>Loading...</h1> : <div className="wrapper">
                        {images.map(image => (
                            <ImageCard key={image.id} image={image}/>
                        ))}</div>}
                </Col>
            </Row>
        </Container>
    );
}


export default App;
