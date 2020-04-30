import React from 'react';
import { getDataAsync } from './../../redux/actions/userActions';
import { connect } from 'react-redux';

class User extends React.Component{
    componentDidMount(){
        this.props.getDataAsync();
    }
  render(){
      const userData = this.props.jsonData;
    return(
        <div>
            
            {
                userData.map(el => 
                   <ul key={el.id}>
                       <li> ID             : {el.id}</li>
                       <li> user's name    :{el.name}</li>
                       <li> user's email   :{el.email}</li>
                       <li> user's phone   :{el.phone}</li>
                       <li> user's website :{el.website}</li>
                       <li> Address :{el.address.city}</li>
                       <li> Company Name :{el.company.name}</li>
                   </ul>
                    )
            }
        </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => ({
    jsonData:userReducer.jsonData
   });
const mapDispatchToProps = dispatch => ({
  getDataAsync: () => dispatch(getDataAsync())
 });
 
export default connect(mapStateToProps, mapDispatchToProps)(User);
