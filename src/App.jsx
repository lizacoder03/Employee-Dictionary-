import { useMemo, useState } from "react";

import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import SearchFilter from "./components/SearchFilter";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";

import "./App.css";

const initialEmployees = [
  {
    name: "Souvik Baidya",
    employeeId: "EMP001",
    department: "IT",
    gender: "Male",
    phone: "9876543210",
    localAddress: "Barrackpore, Kolkata",
    permanentAddress: "West Bengal, India",
  },
  {
    name: "Rahul Sharma",
    employeeId: "EMP002",
    department: "Finance",
    gender: "Male",
    phone: "9876543211",
    localAddress: "Salt Lake, Kolkata",
    permanentAddress: "Howrah, West Bengal",
  },
  {
    name: "Priya Das",
    employeeId: "EMP003",
    department: "HR",
    gender: "Female",
    phone: "9876543212",
    localAddress: "Dum Dum, Kolkata",
    permanentAddress: "Kolkata, West Bengal",
  },
  {
    name: "Ananya Roy",
    employeeId: "EMP004",
    department: "Marketing",
    gender: "Female",
    phone: "9876543213",
    localAddress: "New Town, Kolkata",
    permanentAddress: "Barasat, West Bengal",
  },
];

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

  const [searchTerm, setSearchTerm] = useState("");

  const [department, setDepartment] = useState("All");

  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleSaveEmployee = (employee) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((item) =>
          item.employeeId === employee.employeeId
            ? employee
            : item
        )
      );

      setEditingEmployee(null);
    } else {
      setEmployees((prev) => [
        ...prev,
        employee,
      ]);
    }
  };

  const handleDeleteEmployee = (employeeId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmed) return;

    setEmployees((prev) =>
      prev.filter(
        (employee) =>
          employee.employeeId !== employeeId
      )
    );

    if (
      editingEmployee?.employeeId === employeeId
    ) {
      setEditingEmployee(null);
    }
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(search) ||
        employee.employeeId.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search) ||
        employee.phone.includes(search);

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });
  }, [employees, searchTerm, department]);

  return (
    <div className="app">
      <Header />

      <main className="container">
        <EmployeeForm
          onSave={handleSaveEmployee}
          editingEmployee={editingEmployee}
          onCancelEdit={() =>
            setEditingEmployee(null)
          }
        />

        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          department={department}
          setDepartment={setDepartment}
          employeeCount={employees.length}
        />

        <EmployeeList
          employees={filteredEmployees}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;