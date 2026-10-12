
import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const EmployeeCard = ({ employee, onDelete, onEdit }) => {
    return (
        <div className="group relative card overflow-hidden">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">

                <div className="w-full h-full flex items-center justify-center">
                    {/* Circle Icons */}
                    <div className="w-20 h-20 rounded-full bg-indigo-100
                    flex items-center justify-center">
                        <span className="text-2xl font-medium text-indigo-500">
                            {employee.firstName?.[0]} {employee.lastName?.[0]}
                        </span>
                    </div>
                </div>

            </div>

            <div className="p-5">
                <h3 className="text-slate-900 font-semibold">
                    {employee.firstName} {employee.lastName}
                </h3>

                <p className="text-xs text-slate-500">
                    {employee.position}
                </p>

                <p className="text-sm text-slate-500 mt-2">
                    {employee.department}
                </p>

                {/* Edit and Delete Buttons */}
                <div className="flex gap-2 mt-4">
                    <button
                        onClick={() => onEdit(employee)}
                        className="flex-1 flex items-center justify-center gap-2
                        rounded-lg border border-slate-200 py-2 text-sm
                        text-slate-600 hover:bg-blue-50 hover:text-blue-600
                        hover:border-blue-200 transition-colors"
                    >
                        <Pencil size={12} />
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(employee)}
                        className="flex-1 flex items-center justify-center gap-2
                        rounded-lg border border-red-200 py-2 text-sm
                        text-red-500 hover:bg-red-50 transition-colors"
                    >
                        <Trash2 size={12} />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
