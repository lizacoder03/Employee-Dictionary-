function SearchFilter({
  searchTerm,
  setSearchTerm,
  department,
  setDepartment,
  employeeCount,
}) {
  return (
    <section className="filter-section">
      <div className="employee-count">
        <span>Total Employees</span>
        <strong>{employeeCount}</strong>
      </div>

      <div className="filter-controls">
        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
          <option value="Operations">Operations</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;