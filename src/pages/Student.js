import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function student() {

    const [students, setStudents] = useState([]);


    useEffect(() => {
        axios.get ('http://localhost:3000/students').then(res =>{
            
           
            console.log(res)
            setStudents(res.data.students);

        });





        

    },[] )


    var studentDetails = "";
    studentDetails = students.map( (item, index) => {
        return (
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <Link to="/" className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                    
                    
                </td>
            </tr>
        )

    });

    return (
       <div className="container mt-5"> 
       <div className="row">
        <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                    <h4>students List
                    <Link to="/" className="btn btn-primary float-end">Add Student</Link>    
                    </h4>

                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                          <tr>
                            <tr>ID</tr>
                            <tr>Name</tr>
                            <tr>Course</tr>
                            <tr>Email</tr>
                            <tr>Phone</tr>
                            <tr>Edit</tr>
                            <tr>Delete</tr>
                            </tr>  
                        </thead>
                        <tbody>
                            {studentDetails}

                        </tbody>
                    </table>

                </div>

            </div>

        </div>

 </div>

 </div> 
    )

}

export default student;