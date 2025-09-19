import React, { useState, useContext } from 'react';
import axios from 'axios';
import { doctorInfo } from '../contexts/DoctorInfoProvider';
import { useNavigate } from 'react-router-dom';

function DoctorSignup() {
    const navigate = useNavigate();
    const {
        setDoctorId,
        setDoctorFullName,
        setDoctorEmail,
        setDoctorAadhar,
        setRole,
        setDoctorLicense,
        setDoctorPhoneNumber,
        setDoctorSpecializations,
    } = useContext(doctorInfo);

    const [formData, setFormData] = useState({
        fullName: '',
        aadhar: '',
        phoneNumber: '',
        email: '',
        password: '',
        specialization: [],
        licence: '',
        gender: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'specialization') {
            const specializationArray = value
                .split(',')
                .map((item) => item.trim())
                .filter((item) => item); // remove empty entries
            setFormData((prev) => ({
                ...prev,
                [name]: specializationArray,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        // Clear error if any
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };


    // Format Aadhaar as user types
    const handleAadhaarChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

        // Format as ####-####-####
        if (value.length > 8) {
            value = `${value.slice(0, 4)}-${value.slice(4, 8)}-${value.slice(8, 12)}`;
        } else if (value.length > 4) {
            value = `${value.slice(0, 4)}-${value.slice(4)}`;
        }

        setFormData({
            ...formData,
            aadhar: value
        });

        if (errors.aadhar) {
            setErrors({
                ...errors,
                aadhar: ''
            });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Aadhaar validation (12 digits, can have dashes)
        const aadhaarRegex = /^\d{4}-?\d{4}-?\d{4}$/;
        if (!aadhaarRegex.test(formData.aadhar)) {
            newErrors.aadhar = 'Enter a valid 12-digit Aadhaar (####-####-####).';
        }
        // Specialization validation
        if (!Array.isArray(formData.specialization) || formData.specialization.length === 0) {
            newErrors.specialization = 'Please enter at least one specialization.';
        }


        // License validation (5 digits)
        const licenseRegex = /^\d{5}$/;
        if (!licenseRegex.test(formData.licence)) {
            newErrors.licence = 'Enter a valid 5-digit license number.';
        }

        // Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Please enter your full name.';
        }

        

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address.';
        }

        // Phone validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            newErrors.phoneNumber = 'Enter a valid 10-digit phone number.';
        }

        // Password validation (at least 6 characters)
        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        }

        // Gender validation
        if (!formData.gender) {
            newErrors.gender = 'Please select your gender.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            // Format aadhar without dashes for backend
            const submitData = {
                ...formData,
                aadhar: formData.aadhar.replace(/-/g, '')
            };
            console.log("sub > ", submitData)
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/doctor/signup`, submitData);

            const { fullName, aadhar, phoneNumber, email, id, role, licence, specialization } = response.data;
            localStorage.setItem("doctorId", id);

            setDoctorId(id);
            setRole(role);
            setDoctorAadhar(aadhar);
            setDoctorFullName(fullName);
            setDoctorPhoneNumber(phoneNumber);
            setDoctorEmail(email);
            setDoctorSpecializations(specialization);
            setDoctorLicense(licence);

            // Handle successful signup
            console.log('Signup successful:', response.data);
            alert('Account created successfully!');

            // Redirect to doctor dashboard
            navigate('/doctor-dashboard');

        } catch (error) {
            console.error('Signup error:', error);
            if (error.response && error.response.data) {
                alert(`Signup failed: ${error.response.data.message}`);
            } else {
                alert('Signup failed. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="h-auto bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-100" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial' }}>
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(80%50%_at_50%-20%,rgba(34,211,238,0.15),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(16,185,129,0.1),transparent)]"></div>
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(0deg,rgba(148,163,184,.15)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            </div>

            <main className="relative mx-auto max-w-7xl px-4 py-8 lg:py-12 flex flex-col justify-center items-center">
                <header className="mb-8 flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900/70 shadow-[0_0_0_2px_rgba(0,0,0,0.4),0_0_24px_rgba(34,211,238,0.18)]">
                            <span className="text-sm font-semibold tracking-tight text-cyan-300">HC</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm text-slate-400">Healthcare AI</span>
                            <span className="text-base font-medium tracking-tight text-slate-200/90">Doctor Portal</span>
                        </div>
                    </div>
                    <div className="hidden items-center gap-2 sm:flex text-xs text-slate-400">
                        <i data-lucide="shield-check" className="h-4 w-4 text-emerald-400/90"></i>
                        <span>• End-to-end encryption</span>
                    </div>
                </header>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:w-[60%]">
                    <section className="order-1 lg:order-none lg:col-span-12 w-full">
                        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(2,6,23,0.8),0_10px_40px_-10px_rgba(34,211,238,0.18)] backdrop-blur">
                            <div className="mb-6 text-center">
                                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Create Doctor Account</h1>
                                <p className="mt-2 text-sm text-slate-400">Join securely in minutes</p>
                            </div>

                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                {/* Aadhaar Input */}
                                <div className="group">
                                    <label htmlFor="aadhar" className="mb-2 block text-sm text-slate-300">Aadhaar Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="credit-card" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            id="aadhar"
                                            name="aadhar"
                                            inputMode="numeric"
                                            autoComplete="off"
                                            placeholder="0000-0000-0000"
                                            value={formData.aadhar}
                                            onChange={handleAadhaarChange}
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                            maxLength="14"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {formData.aadhar && !errors.aadhar && (
                                                <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400"></i>
                                            )}
                                            {errors.aadhar && (
                                                <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.aadhar && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.aadhar}</p>
                                    )}
                                </div>

                                {/* License Input */}
                                <div className="group">
                                    <label htmlFor="licence" className="mb-2 block text-sm text-slate-300">License Registration Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="credit-card" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            id="licence"
                                            name="licence"
                                            inputMode="numeric"
                                            autoComplete="off"
                                            placeholder="00000"
                                            value={formData.licence}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                            maxLength="5"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {formData.licence && !errors.licence && (
                                                <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400"></i>
                                            )}
                                            {errors.licence && (
                                                <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.licence && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.licence}</p>
                                    )}
                                </div>

                                {/* Full Name Input */}
                                <div className="group">
                                    <label htmlFor="fullName" className="mb-2 block text-sm text-slate-300">Full Name</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="user" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="First Last"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {formData.fullName && !errors.fullName && (
                                                <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400"></i>
                                            )}
                                            {errors.fullName && (
                                                <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.fullName && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.fullName}</p>
                                    )}
                                </div>

                                {/* Specialization Input */}
                                <div className="group">
                                    <label htmlFor="specialization" className="mb-2 block text-sm text-slate-300">Specialization</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="user" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            type="text"
                                            name="specialization"
                                            placeholder="e.g. Cardiology, Neurology"
                                            onChange={handleChange}
                                             className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                            value={formData.specialization.join(', ')} // Join back to string
                                        />
                                        {errors.specialization && <p className="text-red-500">{errors.specialization}</p>}

                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {formData.specialization && !errors.specialization && (
                                                <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400"></i>
                                            )}
                                            {errors.specialization && (
                                                <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.specialization && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.specialization}</p>
                                    )}
                                </div>

                                {/* Email Input */}
                                <div className="group">
                                    <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="mail" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {formData.email && !errors.email && (
                                                <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400"></i>
                                            )}
                                            {errors.email && (
                                                <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone Number Input */}
                                <div className="group">
                                    <label htmlFor="phoneNumber" className="mb-2 block text-sm text-slate-300">Phone Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="phone" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            inputMode="numeric"
                                            autoComplete="tel"
                                            placeholder="10-digit number"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                            maxLength="10"
                                        />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            {formData.phoneNumber && !errors.phoneNumber && (
                                                <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400"></i>
                                            )}
                                            {errors.phoneNumber && (
                                                <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400"></i>
                                            )}
                                        </div>
                                    </div>
                                    {errors.phoneNumber && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.phoneNumber}</p>
                                    )}
                                </div>

                                {/* Password Input */}
                                <div className="group">
                                    <label htmlFor="password" className="mb-2 block text-sm text-slate-300">Password</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="key-round" className="h-4 w-4"></i>
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            autoComplete="new-password"
                                            placeholder="Create a strong password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 pr-12 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:text-slate-200 hover:outline-none hover:ring-2 hover:ring-slate-700/60"
                                        >
                                            <i data-lucide={showPassword ? "eye-off" : "eye"} className="h-4 w-4"></i>
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.password}</p>
                                    )}
                                </div>

                                {/* Gender Selection */}
                                <div className="group">
                                    <span className="mb-2 block text-sm text-slate-300">Gender</span>
                                    <div className="flex flex-wrap gap-3">
                                        <label className="relative inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-slate-300 transition-colors hover:border-cyan-500/40 hover:bg-slate-900/70">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                checked={formData.gender === "Male"}
                                                onChange={handleChange}
                                                className="peer sr-only"
                                            />
                                            <span className="grid h-5 w-5 place-items-center rounded-md border border-slate-700 bg-slate-900 peer-checked:border-emerald-400/60 peer-checked:bg-emerald-500/20 transition-all">
                                                <span className="h-2.5 w-2.5 rounded-[6px] bg-emerald-400 opacity-0 transition-opacity peer-checked:opacity-100"></span>
                                            </span>
                                            <span>Male</span>
                                        </label>

                                        <label className="relative inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-slate-300 transition-colors hover:border-cyan-500/40 hover:bg-slate-900/70">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                checked={formData.gender === "Female"}
                                                onChange={handleChange}
                                                className="peer sr-only"
                                            />
                                            <span className="grid h-5 w-5 place-items-center rounded-md border border-slate-700 bg-slate-900 peer-checked:border-emerald-400/60 peer-checked:bg-emerald-500/20 transition-all">
                                                <span className="h-2.5 w-2.5 rounded-[6px] bg-emerald-400 opacity-0 transition-opacity peer-checked:opacity-100"></span>
                                            </span>
                                            <span>Female</span>
                                        </label>

                                        <label className="relative inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-2 text-slate-300 transition-colors hover:border-cyan-500/40 hover:bg-slate-900/70">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Other"
                                                checked={formData.gender === "Other"}
                                                onChange={handleChange}
                                                className="peer sr-only"
                                            />
                                            <span className="grid h-5 w-5 place-items-center rounded-md border border-slate-700 bg-slate-900 peer-checked:border-emerald-400/60 peer-checked:bg-emerald-500/20 transition-all">
                                                <span className="h-2.5 w-2.5 rounded-[6px] bg-emerald-400 opacity-0 transition-opacity peer-checked:opacity-100"></span>
                                            </span>
                                            <span>Other</span>
                                        </label>
                                    </div>
                                    {errors.gender && (
                                        <p className="mt-1 text-sm text-rose-400">{errors.gender}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group inline-flex w-full items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 px-4 py-3 text-center text-base font-medium tracking-tight text-slate-100 shadow-[0_0_0_1px_rgba(8,145,178,0.2),0_10px_30px_-10px_rgba(34,211,238,0.35)] transition-all hover:border-cyan-400/60 hover:shadow-[0_0_0_1px_rgba(8,145,178,0.35),0_16px_40px_-12px_rgba(34,211,238,0.5)] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <i data-lucide="user-plus" className="mr-2 h-5 w-5 text-cyan-300 transition-transform group-hover:scale-110"></i>
                                        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                                    </button>
                                    <div className="mt-3 text-center text-sm text-slate-400">
                                        Already have an account?
                                        <button
                                            type="button"
                                            onClick={() => navigate("/doctor-login")}
                                            className="ml-1 font-medium text-cyan-300 hover:text-cyan-200 hover:underline underline-offset-2"
                                        >
                                            Log in
                                        </button>
                                    </div>
                                </div>

                                {/* Security Note */}
                                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                                    <i data-lucide="lock" className="h-4 w-4 text-emerald-400"></i>
                                    <span>Your data is encrypted & secure</span>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default DoctorSignup;