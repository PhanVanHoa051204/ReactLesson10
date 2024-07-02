import React from 'react'

export default function PvhListUsers({renderPvhListUsers}) {
    console.log("PvhListUsers",renderPvhListUsers);
    let pvhElementUser = renderPvhListUsers.map((pvhUser,index)=>{
        return(
            <>
                <tr>
                    <td>{pvhUser.id}</td>
                    <td>{pvhUser.UserName}</td>
                    <td>{pvhUser.Password}</td>
                    <td>{pvhUser.Email}</td>
                    <td>{pvhUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {pvhElementUser}
            </tbody>
        </table>
    </div>
  )
}
