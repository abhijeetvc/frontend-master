import React, { Component } from 'react'
import ApiService from '../../service/ApiService';

class EditUserComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            id:'',
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            age:'',
            country:''
        }
        this.bind=this.updateUser.bind(this)
        this.bind=this.loadUser.bind(this)
    }

    componentDidMount(){
        this.loadUser()
    }

    onChange=(e)=>this.setState({[e.target.name]:e.target.value})

    loadUser(){
        ApiService.fetchUserById(window.localStorage.getItem("userId"))
            .then((response)=>{
                let user=response.data.result
                this.setState({
                    id:user.id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    username:user.username,
                    email:user.email,
                    age:user.age,
                    country:user.country
                })
            })
    }

    updateUser=(e)=>{
        e.preventDefault()
        let user={
            id:this.state.id,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            username:this.state.username,
            email:this.state.email,
            age:this.state.age,
            country:this.state.country
        }
        console.log("444444444444444444")
        ApiService.editUserById(user)
        .then((response)=>{
            console.log("5555555555555555555")
            this.setState({message:"User updated"})
            this.props.history.push("/getUser")
        })

    }

    render(){
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                    <div className="form-group">
                        <label>UserName</label>
                        <input type="text" 
                               placeholder="username" 
                               name="username"
                               className="form-control"
                               value={this.state.username}
                               onChange={this.onChange}/>           
                    </div>

                    <div className="form-group">
                        <label>FirstName</label>
                        <input type="text" 
                               placeholder="firstname" 
                               name="firstName"
                               className="form-control"
                               value={this.state.firstName}
                               onChange={this.onChange}/>           
                    </div>

                    <div className="form-group">
                        <label>LastName</label>
                        <input type="text" 
                               placeholder="lastname" 
                               name="lastName"
                               className="form-control"
                               value={this.state.lastName}
                               onChange={this.onChange}/>           
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" 
                               placeholder="email" 
                               name="email"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChange}/>           
                    </div>

                    <div className="form-group">
                        <label>Age</label>
                        <input type="number" 
                               placeholder="age" 
                               name="age"
                               className="form-control"
                               value={this.state.age}
                               onChange={this.onChange}/>           
                    </div>

                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" 
                               placeholder="country" 
                               name="country"
                               className="form-control"
                               value={this.state.country}
                               onChange={this.onChange}/>           
                    </div>

                    <button className="btn btn-success" onClick={this.updateUser}>Update</button>
                </form>
            </div>
        )
    }
}

export default EditUserComponent