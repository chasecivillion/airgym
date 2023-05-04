import React from 'react'

function TravelerCard({name, image, users}) {

  const emailList = []
  for (let i = 0; i < users.length; i++ ) {
    emailList.push(
        users[i].email
    )
  }
  
  return (
    <div>
        {name}
        <img src={image} alt="hotel"/>
        <ul>
            {emailList.map((email)=> (
                <li key={email}>{email}</li>
            ))}
        </ul>
    </div>
)
}
export default TravelerCard