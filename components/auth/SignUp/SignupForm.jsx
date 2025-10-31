"use client";
import React, { useState } from "react";
import { User, Mail, Lock, Phone, ShieldCheck } from "lucide-react";
import { toast } from "react-toastify";
import { Spinner } from "@/components/Spinner";

export const SignUpForm = () => {
    const [otpForm, setOtpForm] = useState(false);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(null)
    console.log();

    const [isLoading, setIsLoading] = useState(false)

    // Handle Signup form submit
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            if (!password) {
                setIsLoading(true)
            }
            if (!email) {
                setIsLoading(true)
            }

            if (!fullname) {
                setIsLoading(true)
            }

            if (!phone) {
                setIsLoading(true)
            }

            if (!username) {
                setIsLoading(true)
            }
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/create-account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    username,
                    password,
                    phone,
                }),
            });
            console.log("Data");
            console.log(res);
            setIsLoading(false)
            const data = await res.json();

            if (res.ok) {
                if (data.success) toast.success(data.message);
                if (!data.success) toast.error(data.message);

                setOtpForm(true);
            } else {
                toast.error(data?.message || "Signup failed");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Handle OTP verification
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)


            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/verify-otp`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                    inputValue: email,
                    otp
                }),
            });
            console.log("Data");
            console.log(res);
            setIsLoading(false)
            const data = await res.json();

            if (res.ok) {
                if (data.success) toast.success(data.message);
                if (!data.success) toast.error(data.message);

                setOtpForm(true);
            } else {
                toast.error(data?.message || "Signup failed");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div>
            {!otpForm ? (
                // --- Signup Form ---
                <form className="space-y-6" onSubmit={submitForm}>
                    {/* Full Name */}
                    <div className="flex items-center border-b-2 border-gray-700 focus-within:border-emerald-400 transition">
                        <User className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Full name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-200 placeholder-gray-500 outline-none"

                            autoComplete="name"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border-b-2 border-gray-700 focus-within:border-emerald-400 transition">
                        <Mail className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-200 placeholder-gray-500 outline-none"

                            autoComplete="email"
                        />
                    </div>

                    {/* Username */}
                    <div className="flex items-center border-b-2 border-gray-700 focus-within:border-emerald-400 transition">
                        <User className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-200 placeholder-gray-500 outline-none"

                        />
                    </div>

                    {/* Phone */}
                    <div className="flex items-center border-b-2 border-gray-700 focus-within:border-emerald-400 transition">
                        <Phone className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="tel"
                            placeholder="+91 8888888888"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-200 placeholder-gray-500 outline-none"

                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border-b-2 border-gray-700 focus-within:border-emerald-400 transition">
                        <Lock className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="password"
                            placeholder="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full py-2 bg-transparent text-gray-200 placeholder-gray-500 outline-none"
                            // 
                            autoComplete="new-password"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                    >
                        Send OTP
                    </button>
                </form>
            ) : (
                // --- OTP Verification Form ---
                <form className="space-y-6" onSubmit={handleOtpSubmit}>
                    <div className="flex items-center justify-center mb-4">
                        <ShieldCheck className="w-10 h-10 text-emerald-400" />
                    </div>

                    <p className="text-gray-400 text-center text-sm mb-6">
                        Enter the OTP sent to your Email ID.
                    </p>

                    <div className="flex justify-between space-x-3">
                        <input
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value)
                            }}
                            type="number"
                            maxLength={6}
                            className="w-full h-16 bg-transparent border-2 border-gray-700 rounded-lg text-center text-2xl text-gray-200 focus:border-emerald-400 outline-none"

                        />
                    </div>

                    <button

                        type="submit"
                        className="w-full py-3 mt-8 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 transition"
                    >
                        Verify OTP
                    </button>

                    <p
                        onClick={() => setOtpForm(false)}
                        className="text-center text-sm text-emerald-400 hover:text-cyan-400 cursor-pointer mt-6 transition"
                    >
                        ← Back to Signup
                    </p>
                </form>
            )}
        </div>
    );
};
