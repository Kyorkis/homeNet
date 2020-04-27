import React from 'react';
import {connect, useSelector,useDispatch} from'react-redux';
import {fetchServicesRequest,fetchAllServices} from '../../actions/actionCreators';
import {Message} from '../Message/Message';
import Table from 'react-bootstrap/Table'

const servicesUrl = `http://localhost:7777/services`

function Services(props){
    console.log(props,"in services")
    const {
        items = [], 
        hasError,
    } = useSelector(state => state.services);

    const dispatch = useDispatch();
    
    React.useEffect( () => {
        dispatch(fetchAllServices(servicesUrl));
        return () => {};
    },[]);

    const handleRepeate = () => {
        dispatch(fetchAllServices(servicesUrl));
    };
    
    return (
        ((hasError) && <Message message={hasError} isHide={!hasError} handleRepeate={handleRepeate} />) || 
        (   <Table stripped bordered variant="white">
                { 
                items.map( (item) => {
                    return (
                        <tr>
                            <td>
                                <a style={{textDecoration:"none",listStyleType:'none',color:"black"}} href={`/services/${item.id}`}>
                                    <span className="item-text">{item.name}</span>
                                </a>
                            </td>
                            <td><span className="item-price">{item.price}</span></td>
                            <td><a style={{textDecoration:"none",listStyleType:'none',color:"black"}} href={`/services/${item.id}`}>
                                    <div style={{backgroundColor:"red",borderRadius:"5px",height:'30px',width:'150px',color:"white",position:"relative"}}>
                                        <span style={{position:'absolute',left:'12%'}}>Редактировать</span>
                                    </div>
                                </a></td>
                        </tr>
                    )
                } )
                }   
            </Table>
            
            
            
        )
    );

}

const mapStateToProps = (state,ownProps) => {
    const {services: {items, isLoading, hasError}} = state;
    return {...ownProps, items, isLoading, hasError};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ...ownProps,
    };
};

const ConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(Services);
export {ConnectedComponent as Services};