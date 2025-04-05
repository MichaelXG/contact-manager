// ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm({ onAdd }) {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.telefone || !form.email) return;
    onAdd(form);
    setForm({ nome: '', telefone: '', email: '' });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
      />
      <input
        type="text"
        name="telefone"
        placeholder="Telefone"
        value={form.telefone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
