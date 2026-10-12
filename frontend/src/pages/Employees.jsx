
import { useCallback, useEffect, useState } from "react"
import { dummyEmployeeData, DEPARTMENTS } from "../assets/assets"
import { Plus, Search, X } from "lucide-react"
import EmployeeCard from "../components/EmployeeCard"

const Employees = () => {
    const [employees, setEmployees] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")
    const [selectDept, setSelectedDept] = useState("")
    const [editEmployee, setEditEmployee] = useState(null)
    const [showCreateModal, setShowCreateModal] = useState(false)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        position: "",
        department: ""
    })

    const fetchEmployees = useCallback(async () => {
        setLoading(true)

        setEmployees(
            dummyEmployeeData.filter((emp) =>
                selectDept ? emp.department === selectDept : true
            )
        )

        setLoading(false)
    }, [selectDept])

    useEffect(() => {
        fetchEmployees()
    }, [fetchEmployees])

    // Open the Add Employee form
    const handleAdd = () => {
        setEditEmployee(null)
        setFormData({
            firstName: "",
            lastName: "",
            position: "",
            department: ""
        })
        setShowCreateModal(true)
    }

    // Open the Edit Employee form
    const handleEdit = (employee) => {
        setEditEmployee(employee)
        setFormData({
            firstName: employee.firstName,
            lastName: employee.lastName,
            position: employee.position,
            department: employee.department
        })
        setShowCreateModal(true)
    }

    // Add or update an employee
    const handleSubmit = (e) => {
        e.preventDefault()

        if (editEmployee) {
            setEmployees((prev) =>
                prev.map((emp) =>
                    emp.id === editEmployee.id
                        ? { ...emp, ...formData }
                        : emp
                )
            )
        } else {
            const newEmployee = {
                id: Date.now(),
                ...formData
            }

            setEmployees((prev) => [...prev, newEmployee])
        }

        setShowCreateModal(false)
        setEditEmployee(null)
    }

    // Delete an employee
    const handleDelete = (employee) => {
        const confirmed = window.confirm(
            `Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`
        )

        if (confirmed) {
            setEmployees((prev) =>
                prev.filter((emp) => emp.id !== employee.id)
            )
        }
    }

    const filtered = employees.filter((emp) =>
        `${emp.firstName} ${emp.lastName} ${emp.position}`
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return (
        <div className="animate-fade-in">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h1 className="page-title">Employees</h1>
                    <p className="page-subtitle">
                        Manage your team members
                    </p>
                </div>

                <button
                    onClick={handleAdd}
                    className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                    <Plus size={16} />
                    Add Employee
                </button>
            </div>

            {/* Search bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />

                    <input
                        placeholder="Search employees..."
                        className="w-full pl-10!"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>

                <select
                    value={selectDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="max-w-40"
                >
                    <option value="">All Departments</option>

                    {DEPARTMENTS.map((deptName) => (
                        <option key={deptName} value={deptName}>
                            {deptName}
                        </option>
                    ))}
                </select>
            </div>

            {/* Employee Cards */}
            {loading ? (
                <div className="flex justify-center p-12">
                    <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rounded-full" />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                    {filtered.length === 0 ? (
                        <p className="col-span-full text-center py-16 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                            No employees found
                        </p>
                    ) : (
                        filtered.map((emp) => (
                            <EmployeeCard
                                key={emp.id}
                                employee={emp}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        ))
                    )}
                </div>
            )}

            {/* Add / Edit Employee Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

                        {/* Modal Header */}
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">
                                    {editEmployee
                                        ? "Edit Employee"
                                        : "Add Employee"}
                                </h2>

                                <p className="text-sm text-slate-500 mt-1">
                                    Enter the employee details below.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowCreateModal(false)}
                                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Employee Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        firstName: e.target.value
                                    })
                                }
                                className="w-full"
                                required
                            />

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        lastName: e.target.value
                                    })
                                }
                                className="w-full"
                                required
                            />

                            <input
                                type="text"
                                name="position"
                                placeholder="Position"
                                value={formData.position}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        position: e.target.value
                                    })
                                }
                                className="w-full"
                                required
                            />

                            <select
                                name="department"
                                value={formData.department}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        department: e.target.value
                                    })
                                }
                                className="w-full"
                                required
                            >
                                <option value="" disabled>
                                    Select Department
                                </option>

                                {DEPARTMENTS.map((deptName) => (
                                    <option key={deptName} value={deptName}>
                                        {deptName}
                                    </option>
                                ))}
                            </select>

                            {/* Form Buttons */}
                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowCreateModal(false)
                                        setEditEmployee(null)
                                    }}
                                    className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="btn-primary"
                                >
                                    {editEmployee
                                        ? "Save Changes"
                                        : "Add Employee"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Employees
