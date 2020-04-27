import React from 'react';
import Button from 'react-bootstrap/Button'
export function Message(props){

    const {message, isHide, handleRepeate} = props;
    const [hide, setHide] = React.useState(false);
    
    React.useEffect ( () => {
        setHide(isHide);
        return () =>{ setHide(false)} ;
    },[message, isHide])

    return (
        <>
        {
            !hide && message && 
            (
                <div className="message">
                    {
                        (handleRepeate) && (
                            <div className='tryAgainComponent d-flex justify-content-around align-items-center p-3'>
                            <div className="ml-3 mr-2">Произошла ошибка!</div>
                            <div className="mr-3">
                                <Button variant="dark" onClick={ (evt) => { evt.preventDefault(); handleRepeate(); } }>Повторить запрос</Button>
                            </div>
                            
                            </div>
                        )    
                    }
                </div>
            )
        }
        </>
    )

}