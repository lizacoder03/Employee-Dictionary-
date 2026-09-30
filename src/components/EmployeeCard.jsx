function EmployeeCard({ employee, onEdit, onDelete }) {
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <article className="employee-card">
      <div className="employee-top">
        <div className="employee-avatar">
          {getInitials(employee.name)}
        </div>

        <div className="employee-basic">
          <h3>{employee.name}</h3>
          <span>{employee.employeeId}</span>
        </div>
      </div>

      <div className="employee-details">
        <div className="detail">
          <span>Department</span>
          <strong>{employee.department}</strong>
        </div>

        <div className="detail">
          <span>Gender</span>
          <strong>{employee.gender}</strong>
        </div>

        <div className="detail">
          <span>Phone</span>
          <strong>{employee.phone}</strong>
        </div>

        <div className="detail">
          <span>Local Address</span>
          <strong>{employee.localAddress}</strong>
        </div>

        <div className="detail">
          <span>Permanent Address</span>
          <strong>{employee.permanentAddress}</strong>
        </div>
      </div>

      <div className="employee-actions">
        <button
          type="button"
          className="edit-btn"
          onClick={() => onEdit(employee)}
        >
          ✏️ Edit
        </button>

        <button
          type="button"
          className="delete-btn"
          onClick={() => onDelete(employee.employeeId)}
        >
          🗑️ Delete
        </button>
      </div>
    </article>
  );
}

export default EmployeeCard;