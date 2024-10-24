const { useState } = require("react");

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingName, setEditingName] = useState('');

    //function addUser
    const addUser = () => {
        if(name.trim() !== ''){
            setUsers([...users,name]);
            setName('');
        }
    };

    //function delUser
    const deleteUser = (index) => {
        setUsers(users.filter((_,i) => i !== index));
    }

    //function save
    const saveEdit = () => {
        const updateUsers = [...users];
        updateUsers[editingIndex] = editingName;
        setUsers(updateUsers);
        setEditingIndex(null);
        setEditingName('');
    };

    //function edit
    const startEditing = (index) => {
        setEditingIndex(index);
        setEditingName(users[index]);
    };
    
    return(
        <div style={containerStyle}>
            <h1>User List</h1>
            <div>
                <input 
                type="text"
                placeholder="Enter Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button onClick={addUser} style={buttonStyle}>Add User</button>
            </div>

            <ul>
                {users.map((user, index) => 
                <li key={index} style={listItemStyle}>
                    {editingIndex === index ? (
                        <div>
                            <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            />
                            <button onClick={saveEdit} style={buttonStyle}>Save</button>
                            <button onClick={() => setEditingIndex(null)} style={buttonStyle}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                            {user}
                            <button onClick={() => startEditing(index)} style={buttonStyle}>Edit</button>
                            <button onClick={() => deleteUser(index)} style={buttonStyle}>Delete</button>
                        </div>
                    )}
                </li>
            )}
            </ul>

        </div>
    );
};

const containerStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '300px',
    textAlign: 'center',
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '5px 10px',
    cursor: 'pointer',
  };
  
  const listItemStyle = {
    marginBottom: '10px',
  };

  export default UserList;