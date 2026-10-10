
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100/30">
            <Sidebar />

            <main className="flex-1 min-w-0 overflow-y-auto">
                <div className="p-4 pt-16 sm:p-6 sm:pt-6 lg:p-8 max-w-[1600px] mx-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Layout;
