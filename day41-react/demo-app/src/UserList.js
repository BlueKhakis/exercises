import React from 'react';
import User from './User';

const userList = [
    {
        name: "John",
        rank: 2
    },
    {
        name: "Anne",
        rank: 1
    }
];

function UserList() {
    const [selectedUser, setSelectedUser] = React.useState( "" );

    return (
        <div className="UserList">

            <p>Selected user: {selectedUser}</p>

            {userList.map( ( user, i ) => (

                <User
                    key={i}
                    name={user.name}
                    rank={user.rank}
                    selectedUser={selectedUser}
                    setSelectedUser={setSelectedUser}
                />

            ) )}
        </div>
    );
}

export default UserList;