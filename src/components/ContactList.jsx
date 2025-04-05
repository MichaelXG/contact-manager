// ContactList.jsx
import React, { useState } from "react";
import "./ContactList.css";

export default function ContactList({ contacts, onUpdate, onDelete }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({ name: "", phone: "", email: "" });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditData(contacts[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdate(editingIndex, editData);
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  if (contacts.length === 0)
    return <p className="empty">Nenhum contato adicionado.</p>;

  return (
    <ul className="contact-list">
      {contacts.map((c, i) => (
        <li key={i} className="contact-item">
          {editingIndex === i ? (
            <div className="edit-form">
              <input
                name="name"
                value={editData.name}
                onChange={handleChange}
                placeholder="Nome"
              />
              <input
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                placeholder="Telefone"
              />
              <input
                name="email"
                value={editData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="btn-group">
                <button onClick={handleSave}>💾 Salvar</button>
                <button onClick={handleCancel} className="cancel">
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="contact-info">
              <div>
                <strong>{c.name}</strong> <br />
                📞 {c.phone} <br />
                ✉️ {c.email}
              </div>
              <div className="btn-group">
                <button onClick={() => handleEdit(i)}>✏️ Editar</button>
                <button onClick={() => onDelete(i)} className="delete">
                  🗑️ Excluir
                </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
