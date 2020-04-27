import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './Loading.css'
export function Loading(props){

    const {isLoading} = props;

    return (isLoading) && (
        <Spinner animation="border" role="status" variant="danger">
            <span className="sr-only">Loading...</span>
        </Spinner>
    );

}