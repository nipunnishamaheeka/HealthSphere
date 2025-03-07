import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BsEyeSlash, BsEye } from "react-icons/bs";

interface LoginFormData {
    email: string;
    password: string;
    agreeToTerms: boolean;
}

export const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        agreeToTerms: false,
    });
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Login attempt:", formData);
    };

    return (
        // <div className="min-h-screen bg-green-600 flex items-center justify-center p-6">
        <div className="w-screen h-screen bg-gradient-to-r from-blue-500 to-white flex items-center justify-center p-6">

            {/*<div className="w-full max-w-5xl bg-white rounded-lg shadow-lg grid md:grid-cols-2 m-4">*/}
            <div className="w-2/4 max-w-3xl bg-white rounded-lg shadow-lg grid md:grid-cols-2">
                {/* Left Column */}
                <div className="p-8 flex flex-col justify-between bg-white">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-600">Welcome to</h1>
                        <h2 className="text-2xl font-bold text-blue-700">
                            HealthSphere
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. We are
                            delighted to offer a modern and user-friendly service to ensure
                            you have the best experience.
                        </p>
                        <Link
                            to="/register"
                            className="mt-4 inline-block text-blue-700 font-bold hover:text-green-700"
                        >
                            Join Now!
                        </Link>
                    </div>
                    <div className="mt-6">
                        <img
                            src="https://img.freepik.com/free-photo/couple-training-together-gym_1303-25229.jpg?t=st=1736679472~exp=1736683072~hmac=dc75302385a58197bde1918d92dcdb041bc1f4219ceb1599239f141e74192586&w=1380"
                            alt="Farmers working"
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="bg-gray-50 p-8 flex flex-col justify-center min-h-[60vh] rounded-lg shadow-lg">
                    <div className="max-w-sm mx-auto">
                        <div className="flex justify-end mb-4">
                            {/* Optional: Add Sign In/Back buttons here if needed */}
                        </div>
                        <h3 className="text-3xl font-bold mb-1 text-gray-800">Sign In</h3>
                        <h4 className="text-lg font-semibold text-gray-600">Stay updated on your professional world</h4>
                        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                            {/* Email Input */}
                            <div>
                                <Label htmlFor="email" value="Email"/>
                                <TextInput
                                    id="email"
                                    type="email"
                                    icon={HiMail}
                                    placeholder="name@gmail.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    required
                                />
                            </div>
                            {/* Password Input */}
                            <div>
                                <Label htmlFor="password" value="Password"/>
                                <div className="relative">
                                    <TextInput
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-5 top-1/2 -translate-y-1/2 bg-transparent p-0 text-gray-500 hover:text-gray-700 focus:outline-none"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <BsEye size={20}/> : <BsEyeSlash size={20}/>}
                                    </button>
                                </div>
                            </div>
                            {/* Terms Checkbox */}
                            <div className="flex items-center gap-2 mt-4 ">
                                <Checkbox
                                    id="termsCheck"
                                    checked={formData.agreeToTerms}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            agreeToTerms: e.target.checked,
                                        })
                                    }
                                />
                                <Label htmlFor="termsCheck">
                                    I agree to all Terms, Privacy Policy, and Fees
                                </Label>
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-12 text-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none disabled:bg-blue-300 flex items-center justify-center"
                                disabled={!formData.agreeToTerms}
                            >
                                Sign In
                            </Button>



                            {/* Centered Sign Up Link */}
                            <div className="mt-6 text-center">
                                <Label htmlFor="signup" className="block text-gray-600">
                                    Or Sign Up Using
                                </Label>
                                <Link to="/signup"
                                      className="text-blue-500 hover:underline text-sm font-semibold mt-2 inline-block">Sign
                                    Up</Link>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;
