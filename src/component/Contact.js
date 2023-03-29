import React, { useEffect, useState } from 'react'


export default function Contact() {
    const [users,setUsers]=useState([])
    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [username,setUsername]=useState("")
    const [userId,setUserId]=useState(null)
    useEffect(()=>{
        getUsers();
    },[])
    function getUsers(){
        fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
            result.json().then((resp)=>{
                setUsers(resp)
                setId(resp[0].id)
                setName(resp[0].name)
                setUsername(resp[0].username)
                setUserId(resp[0].id)
            })
        })
    }
    console.log(users)

    function deleteUser(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getUsers()
            })
        })
    }

    function selectUser(id){
        console.warn("function called",users[id-1])
        let item=users[id-1]
        setId(item.id)
        setName(item.name)
        setUsername(item.username)
        setUserId(item.id)
    }

    function updateUser(){
        let item={id,name,username,userId}
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(item)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                getUsers()
            })
        })
    }

  return (
    <div>
        
        <h1><u>contact page</u></h1>
        <h2>CRUD Operation</h2>
        <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/><br/>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
            <button onClick={updateUser}>update user</button>

        </div>
        <table border="1" style={{float: 'left'}}>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <td>Operation</td>
                </tr>
                {
                    users.map((item,i)=>
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td><button onClick={()=>deleteUser(item.id)}>delete</button></td>
                            <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </div>
  )
}
