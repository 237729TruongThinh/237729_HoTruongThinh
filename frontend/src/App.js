import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employeeId: '',
    fullName: '',
    gender: 'Nam',
    dateOfBirth: '',
    department: '',
    position: '',
    email: '',
    phone: '',
    hireDate: '',
    status: 'Dang lam viec'
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get(API_URL);
      setEmployees(res.data);
    } catch (err) {
      console.error('Loi tai danh sach nhan vien:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
        setEditingId(null);
      } else {
        await axios.post(API_URL, formData);
      }
      setFormData({
        employeeId: '',
        fullName: '',
        gender: 'Nam',
        dateOfBirth: '',
        department: '',
        position: '',
        email: '',
        phone: '',
        hireDate: '',
        status: 'Dang lam viec'
      });
      fetchEmployees();
    } catch (err) {
      console.error('Loi khi luu nhan vien:', err);
    }
  };

  const handleEdit = (emp) => {
    setEditingId(emp._id);
    setFormData(emp);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Ban co chac chan muon xoa nhan vien nay?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        fetchEmployees();
      } catch (err) {
        console.error('Loi khi xoa nhan vien:', err);
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Quan Ly Nhan Su - 237729 Ho Truong Thinh</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', maxWidth: '600px' }}>
        <input name="employeeId" placeholder="Ma NV (VD: NV004)" value={formData.employeeId} onChange={handleChange} required />
        <input name="fullName" placeholder="Ho va Ten" value={formData.fullName} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="Nam">Nam</option>
          <option value="Nu">Nu</option>
        </select>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        <input name="department" placeholder="Phong ban" value={formData.department} onChange={handleChange} required />
        <input name="position" placeholder="Chuc vu" value={formData.position} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input name="phone" placeholder="So dien thoai" value={formData.phone} onChange={handleChange} required />
        <input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} required />
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Dang lam viec">Dang lam viec</option>
          <option value="Da nghi viec">Da nghi viec</option>
        </select>
        <button type="submit" style={{ gridColumn: 'span 2', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          {editingId ? 'Cap Nhat Nhan Vien' : 'Them Nhan Vien'}
        </button>
      </form>

      <table border="1" cellPadding="8" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th>Ma NV</th>
            <th>Ho Ten</th>
            <th>Gioi Tinh</th>
            <th>Phong Ban</th>
            <th>Chuc Vu</th>
            <th>Email</th>
            <th>SDT</th>
            <th>Trang Thai</th>
            <th>Thao Tac</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.employeeId}</td>
              <td>{emp.fullName}</td>
              <td>{emp.gender}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.status}</td>
              <td>
                <button onClick={() => handleEdit(emp)} style={{ marginRight: '5px' }}>Sua</button>
                <button onClick={() => handleDelete(emp._id)}>Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;