
const LoginLeftSide = () => {
    return (
        <div className="hidden md:flex w-1/2 bg-slate-950 relative overflow-hidden border-r border-slate-200">
            <div className="flex flex-col items-center justify-center text-center p-12 w-full h-full">

                <h1 className="text-6xl lg:text-7xl font-bold text-white tracking-widest mb-4">
                    OXAIRO
                    <span className="text-blue-500">.</span>
                </h1>

                <p className="text-sm lg:text-base text-slate-400 tracking-[0.25em] uppercase">
                    Employee Management System
                </p>

                <div className="w-16 h-1 bg-blue-500 rounded-full mt-6 mb-6"></div>

                <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                    Build a better future with OXAIRO.
                </p>

            </div>
        </div>
    );
};

export default LoginLeftSide;
