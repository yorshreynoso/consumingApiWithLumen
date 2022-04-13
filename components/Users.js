import Router from 'next/router';

const Users = (props) => {

  return (
      <ul className='list-group'>
          {
            props.users.data.map(user => (
                <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center' 
                    key={user.id} onClick={e => Router.push('/users/[id]', `/users/${user.id}`)}>
                    <div>
                        <h5>{user.first_name} {user.last_name}</h5>
                        <p>Email: {user.email}</p>
                        <img src={user.avatar} style={{borderRadius:'50%'}}></img>

                    </div>
                </li>
            ))
          }
      </ul>
  )
}

export default Users;
