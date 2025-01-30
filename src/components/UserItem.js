import React from "react";

const UserItem = ({ user, onDelete, onEdit }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.company.name}</td>
      <td>
        <button className="edit-btn" onClick={() => onEdit(user)}>
          Edit
        </button>
        <button className="delete-btn" onClick={() => onDelete(user.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
