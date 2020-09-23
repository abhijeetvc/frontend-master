import React, { Component } from 'react'
import ApiService from '../../service/ApiService'
import './style.css'

class AddUserComponent extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
            firstName:'',
            lastName:'',
            email:'',
            age:'',
            country:'',
            message:''

        }

        this.saveUser=this.saveUser.bind(this)
    }

    onChange=(e)=>
            this.setState({[e.target.name]:e.target.value})

    saveUser=(e)=>{
        e.preventDefault()
        let user={
            username:this.state.username,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            age:this.state.age,
            country:this.state.country
        }

        ApiService.addUser(user)
                .then(res=>{
                    this.setState({message:"User added successfully"})
                    this.props.history.push('/getUser')
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
                        <label>Password</label>
                        <input type="password" 
                               placeholder="password" 
                               name="password"
                               className="form-control"
                               value={this.state.password}
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

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        )
    }
}

export default AddUserComponent