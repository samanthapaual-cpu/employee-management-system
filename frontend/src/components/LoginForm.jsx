import LoginLeftSide from "./loginLeftSide";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

const LoginForm = ({ role, title, subtitle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Login logic will go here
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <LoginLeftSide />

            <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16">
                <div className="w-full max-w-md animate-fade-in">

                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-700 text-sm mb-10 transition-colors"
                    >
                        <ArrowLeftIcon size={16} />
                        Back to portals
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-2xl">{title}</h1>
                        <p>{subtitle}</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                            {error}
                        </div>
                    )}

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="john@example.com"
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pr-11"
                                    placeholder="Enter your password"
                                />

                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword
                                        ? <EyeOffIcon size={18} />
                                        : <EyeIcon size={18} />
                                    }
                                </button>
                            </div>
                        </div>
                        
                       
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors disabled:opacity-50"
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </button>


                    </form>

                </div>
            </div>
        </div>
    );
};

export default LoginForm;
