import React from "react";

const UserItem = ({ user, onDelete, onEdit }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${user.name}?`
    );
    if (confirmDelete) {
      onDelete(user.id);
    }
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.company?.name || "N/A"}</td>
      <td>
        <button className="edit-btn" onClick={() => onEdit(user)}>
          ✏️ Edit
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          🗑️ Delete
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
