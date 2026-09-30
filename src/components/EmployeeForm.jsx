import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  employeeId: "",
  department: "IT",
  gender: "Male",
  phone: "",
  localAddress: "",
  permanentAddress: "",
};

function EmployeeForm({ onSave, editingEmployee, onCancelEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    } else {
      setForm(initialForm);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.employeeId ||
      !form.phone ||
      !form.localAddress ||
      !form.permanentAddress
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSave(form);

    if (!editingEmployee) {
      setForm(initialForm);
    }
  };

  return (
    <section className="form-section">
      <div className="section-title">
        <div>
          <span className="section-label">
            {editingEmployee ? "UPDATE" : "NEW EMPLOYEE"}
          </span>

          <h2>
            {editingEmployee ? "Edit Employee" : "Add Employee"}
          </h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-group">
          <label>Employee Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter employee name"
          />
        </div>

        <div className="form-group">
          <label>Employee ID *</label>
          <input
            type="text"
            name="employeeId"
            value={form.employeeId}
            onChange={handleChange}
            placeholder="Example: EMP001"
            disabled={Boolean(editingEmployee)}
          />
        </div>

        <div className="form-group">
          <label>Department *</label>

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
          >
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Operations">Operations</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender *</label>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>

        <div className="form-group full-width">
          <label>Local Address *</label>
          <textarea
            name="localAddress"
            value={form.localAddress}
            onChange={handleChange}
            placeholder="Enter local address"
            rows="3"
          />
        </div>

        <div className="form-group full-width">
          <label>Permanent Address *</label>
          <textarea
            name="permanentAddress"
            value={form.permanentAddress}
            onChange={handleChange}
            placeholder="Enter permanent address"
            rows="3"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="primary-btn">
            {editingEmployee ? "Update Employee" : "Add Employee"}
          </button>

          {editingEmployee && (
            <button
              type="button"
              className="secondary-btn"
              onClick={onCancelEdit}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default EmployeeForm;