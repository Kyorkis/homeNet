import React from 'react';
import {connect, useSelector, useDispatch} from'react-redux';
import { fetchServiceRequest,fetchServiceById,changeServiceField } from '../../actions/actionCreators';
import { NotFound } from '../NotFound/NotFound';
import { Message } from '../Message/Message';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Service(props){
    const {match: {params: {id: serviceId } } } = props;
    const {
        service:{
            item: {id, name = '', price = '', content = ''}, 
            isLoading, 
            hasError,
        },
        services: {items = []}
    } = useSelector(state => state);
    const dispatch = useDispatch();
    const notFound = (items.filter( (o) => { return o.id === serviceId } ).length <= 0);
    let newItem = {}
    
    const onChangeField=(e,changedItem=props.item)=>{
        console.log('change',e.target.name,e.target.value)
        changedItem[e.target.name]=e.target.value
        console.log('chnIt',changedItem)
        newItem = changedItem
        return newItem
    }
    
    const onChangeButtonClick=(id)=>{
        console.log("id in click",id)
        
        console.log(newItem)
        
        dispatch(changeServiceField(newItem))
        window.location.assign('http://localhost:3000/services')
    }

    React.useEffect( () => {
        dispatch(fetchServiceById(serviceId));
        return () => {};
    },[serviceId]);

    const handleRepeate = () => {
        dispatch(fetchServiceById(serviceId));
    };
    console.log("propsindetails",props)
    return (
        ((hasError) && <Message message={hasError} isHide={!hasError} handleRepeate={handleRepeate} />) || 
        ( !isLoading && !id && items.length > 0 && notFound && <NotFound/> ) || 
        (   
            <Form className="pt-5 col-8 m-auto">
                <Form.Group>
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="text" name="name" placeholder={name} onChange={onChangeField}/>
                    <Form.Text className="text-muted">
                    Супер секретная инфа
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Стоимость</Form.Label>
                    <Form.Control type="text" name="price" placeholder={price} onChange={onChangeField}/>
                    <Form.Text className="text-muted">
                    Супер секретная инфа
                    </Form.Text>    
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control type="text"name='content' placeholder={content} onChange={onChangeField}/>
                    <Form.Text className="text-muted">
                    Супер секретная инфа
                    </Form.Text>    
                </Form.Group>
                <Button variant="danger" onClick={()=>{onChangeButtonClick(id)}}>Сохранить</Button>
                <Button variant="warning" className="ml-2">Отмена</Button>

            </Form>
            
        )
    );
}

const mapStateToProps = (state, ownProps) => {
    const {service: {item, isLoading, hasError}} = state;
    return {...ownProps, item, isLoading, hasError};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
    };
};

const ConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(Service);
export {ConnectedComponent as Service};