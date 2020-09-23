import React from 'react'
import ApiService from '../../service/ApiService'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


class ListUserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            users:[],
            message:null
        }
        this.loadUserList=this.loadUserList.bind(this)
        this.addUser=this.addUser.bind(this)
        this.editUser=this.editUser.bind(this)
    }

    componentDidMount(){   //Component lifecycle method
        this.loadUserList()
    }

    loadUserList(){
        ApiService.fetchUsers()
        .then((res)=>{
            this.setState({users:res.data.result})
        })
    }

    addUser(){
        window.localStorage.removeItem("userId")
        this.props.history.push("/add-user")
    }

    editUser(id){
        window.localStorage.setItem("userId",id)
        this.props.history.push("/editUser")
    }

    render(){
        return(
            <div>
                <h2 className="text-center">User List</h2>
                <button className="btn btn-primary" style={{width:'100px'}} onClick={()=>this.addUser()}>Add User</button>
                <table className = "table table-striped">

                    <thead> 
                        
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Country</th>
                        </tr> 
                    
                    </thead>
                 
                   

                    <tbody>
                        {
                           this.state.users.map(
                               user=>
                                    <tr key={user.id}>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td>{user.country}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>this.deleteUser(user.id)}>Delete</button>
                                            <button className="btn btn-success" onClick={()=>this.editUser(user.id)}>Edit</button>

                                        </td>
                                    </tr>
                           )
                        }
                    </tbody>

                </table>
                </div>
    
        );
        }
        }
    

export default ListUserComponent