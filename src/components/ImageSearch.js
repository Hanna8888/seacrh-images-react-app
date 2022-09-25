import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    };

    return (
        <InputGroup md={6} xs={4} className="justify-content-center">
            <Form.Control
                placeholder="Search image"
                aria-label="Search image"
                aria-describedby="Search image"
                onChange={e => setText(e.target.value)}
                type='text'
            />
            <Button type='submit' variant="outline-secondary" id="button-addon1" onClick={onSubmit}>
                Search
            </Button>
        </InputGroup>
    )
}

export default ImageSearch;
 