import React from 'react';

function User(props) {

    console.log(
        'Right now selected user is',
        props.selectedUser
    )

    return (
        <div className="User">
            <strong>User</strong>
            <p>Name: {props.name}</p>
            <p>Rank: {props.rank}</p>
            <button
                onClick={() => {

                    props.setSelectedUser(props.name)
                    // change the selectedUser of parent component
                    console.log('Select user', props.name)
                }}
            >
                Select user
            </button>
        </div>
    );
}

export default User;
