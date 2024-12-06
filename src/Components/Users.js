import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap'

function Users() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let url = `https://jsonplaceholder.typicode.com/users`;
  //       const response = await fetch(url);
  //       const result = await response.json();
  //       console.log(result)
  //     } catch (error) {
  //       console.error("Error fetching data:", error); // Handle errors
  //     }
  //   }
  //   fetchData();     
  // }, [])


  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online"); // to chek offline or online

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url).then((response) => {
      response.json().then((result) => {
        setData(result)    // data ko state me save kiya
        setMode("online")
        localStorage.setItem("users", JSON.stringify(result))  // Save DATA in Local Storage   

      })
    }).catch((e) => {
      let collection = localStorage.getItem("users")   // Get Data from Loacl storage . when i offline 
      setMode("offline")
      setData(JSON.parse(collection));
    })
  }, [])


  return (
    <>
      <div>
        {
          mode === "offline" ?
            <div class="alert alert-warning" role="alert">
              You are OFFLINE
            </div>
            : null
        }
      </div>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr>
                <th scope="row">{++index}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default Users