import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👥</div>
        <h3>No Employees Found</h3>
        <p>Try changing your search or department filter.</p>
      </div>
    );
  }

  return (
    <section className="employee-section">
      <div className="list-heading">
        <h2>Employee List</h2>
        <span>{employees.length} employees</span>
      </div>

      <div className="employee-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.employeeId}
            employee={employee}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}

export default EmployeeList;