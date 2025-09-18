import React from 'react'
import { doctorInfo } from '../contexts/DoctorInfoProvider';

function DoctorSignup() {
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
    specialization: '',
    licence: '',
    gender: ''
  });
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
    
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/doctor/signup`, submitData);

    const {fullName,aadhar,phoneNumber,email,password,id,role,licence,specialization} = response.data
    localStorage.setItem("doctorId",id);
    console.log("aa ",fullName,aadhar,phoneNumber,email,password,age,bloodGroup,gender,id,gender)
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
    
    // Reset form
    setFormData({
      fullName: '',
      aadhar: '',
      phoneNumber: '',
      email: '',
      password: '',
      age: '',
      bloodGroup: '',
      gender: ''
    });
    
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

  

    return (
        <div className="h-auto bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-100"  style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial' }}>


            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(80%50%_at_50%-20%,rgba(34,211,238,0.15),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(16,185,129,0.1),transparent)]"></div>
                <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(90deg,rgba(148,163,184,.15)_1px,transparent_1px),linear-gradient(0deg,rgba(148,163,184,.15)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
            </div>

            <main className="  relative mx-auto max-w-7xl px-4 py-8 lg:py-12 flex flex-col justify-center items-center">
         
                <header className="mb-8 flex items-center justify-between  w-full">
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

             
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:w-[60%]  ">
 
                    <section className="order-1 lg:order-none lg:col-span-12 w-full">

                        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-[0_0_0_1px_rgba(2,6,23,0.8),0_10px_40px_-10px_rgba(34,211,238,0.18)] backdrop-blur">
                            <div className="mb-6 text-center">
                                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Create Doctor Account</h1>
                                <p className="mt-2 text-sm text-slate-400">Join securely in minutes</p>
                            </div>

                            <form id="signupForm" novalidate className="space-y-5 ">
                
                                <div className="group">
                                    <label for="aadhaar" className="mb-2 block text-sm text-slate-300">Aadhaar Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="credit-card" className="h-4 w-4"></i>
                                        </div>
                                        <input id="aadhaar" name="aadhaar" inputmode="numeric" autocomplete="off" placeholder="000-0000-0000"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                            maxlength="14" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400 opacity-0 transition-opacity" id="aadhaar-valid"></i>
                                            <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400 opacity-0 transition-opacity" id="aadhaar-invalid"></i>
                                        </div>
                                    </div>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="aadhaar-error">Enter a valid 12-digit Aadhaar (###-####-####).</p>
                                </div>
                                <div className="group">
                                    <label for="License" className="mb-2 block text-sm text-slate-300">License Registration Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="credit-card" className="h-4 w-4"></i>
                                        </div>
                                        <input id="License" name="License" inputmode="numeric" autocomplete="off" placeholder="00000"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15"
                                            maxlength="5" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400 opacity-0 transition-opacity" id="License-valid"></i>
                                            <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400 opacity-0 transition-opacity" id="License-invalid"></i>
                                        </div>
                                    </div>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="License-error">Enter a valid 12-digit License (#####).</p>
                                </div>

                      
                                <div className="group">
                                    <label for="fullName" className="mb-2 block text-sm text-slate-300">Full Name</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="user" className="h-4 w-4"></i>
                                        </div>
                                        <input id="fullName" name="fullName" type="text" autocomplete="name" placeholder="First Last"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400 opacity-0 transition-opacity" id="name-valid"></i>
                                            <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400 opacity-0 transition-opacity" id="name-invalid"></i>
                                        </div>
                                    </div>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="name-error">Please enter your full name.</p>
                                </div>


                                <div className="group">
                                    <label for="Specialization" className="mb-2 block text-sm text-slate-300">Specialization</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="user" className="h-4 w-4"></i>
                                        </div>
                                        <input id="Specialization" name="Specialization" type="text" autocomplete="name" placeholder="Specialization"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400 opacity-0 transition-opacity" id="name-valid"></i>
                                            <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400 opacity-0 transition-opacity" id="name-invalid"></i>
                                        </div>
                                    </div>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="name-error">Please enter your specialization</p>
                                </div>
                           
                                <div className="group">
                                    <label for="email" className="mb-2 block text-sm text-slate-300">Email</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="mail" className="h-4 w-4"></i>
                                        </div>
                                        <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400 opacity-0 transition-opacity" id="email-valid"></i>
                                            <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400 opacity-0 transition-opacity" id="email-invalid"></i>
                                        </div>
                                    </div>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="email-error">Enter a valid email address.</p>
                                </div>

                           
                                <div className="group">
                                    <label for="phone" className="mb-2 block text-sm text-slate-300">Phone Number</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="phone" className="h-4 w-4"></i>
                                        </div>
                                        <input id="phone" name="phone" inputmode="numeric" autocomplete="tel" placeholder="10-digit number"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15" maxlength="10" />
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <i data-lucide="check-circle-2" className="h-5 w-5 text-emerald-400 opacity-0 transition-opacity" id="phone-valid"></i>
                                            <i data-lucide="alert-circle" className="h-5 w-5 text-rose-400 opacity-0 transition-opacity" id="phone-invalid"></i>
                                        </div>
                                    </div>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="phone-error">Enter a valid 10-digit phone number.</p>
                                </div>

                 
                                <div className="group">
                                    <label for="password" className="mb-2 block text-sm text-slate-300">Password</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                                            <i data-lucide="key-round" className="h-4 w-4"></i>
                                        </div>
                                        <input id="password" name="password" type="password" autocomplete="new-password" placeholder="Create a strong password"
                                            className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-10 py-3 pr-12 text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-500/15" />
                                        <button type="button" id="togglePassword" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:text-slate-200 hover:outline-none hover:ring-2 hover:ring-slate-700/60">
                                            <i data-lucide="eye" className="h-4 w-4"></i>
                                        </button>
                                    </div>
                              
                                  
                                </div>

               
                             

           
                                <div className="group">
                                    <label className="flex cursor-pointer items-start gap-3">
                                        <input id="terms" type="checkbox" className="peer sr-only" />
                                        <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-md border border-slate-700 bg-slate-900 transition-all peer-checked:border-emerald-400/70 peer-checked:bg-emerald-500/20">
                                            <i data-lucide="check" className="h-3.5 w-3.5 text-emerald-400 opacity-0 transition-opacity peer-checked:opacity-100"></i>
                                        </span>
                                        <span className="text-sm text-slate-300">
                                            I agree to the <a href="#" className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline">Terms & Conditions</a> and <a href="#" className="text-cyan-300 underline-offset-2 hover:text-cyan-200 hover:underline">Privacy Policy</a>.
                                        </span>
                                    </label>
                                    <p className="mt-1 hidden text-sm text-rose-400" id="terms-error">You must agree to continue.</p>
                                </div>

                           
                                <div className="pt-2">
                                    <button id="submitBtn" type="submit"
                                        className="group inline-flex w-full items-center justify-center rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-cyan-500/20 px-4 py-3 text-center text-base font-medium tracking-tight text-slate-100 shadow-[0_0_0_1px_rgba(8,145,178,0.2),0_10px_30px_-10px_rgba(34,211,238,0.35)] transition-all hover:border-cyan-400/60 hover:shadow-[0_0_0_1px_rgba(8,145,178,0.35),0_16px_40px_-12px_rgba(34,211,238,0.5)] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/20">
                                        <i data-lucide="user-plus" className="mr-2 h-5 w-5 text-cyan-300 transition-transform group-hover:scale-110"></i>
                                        Sign Up
                                    </button>
                                    <div className="mt-3 text-center text-sm text-slate-400">
                                        Already have an account?
                                        <a href="#" className="ml-1 font-medium text-cyan-300 hover:text-cyan-200 hover:underline underline-offset-2">Log in</a>
                                    </div>
                                </div>

                  
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
    )
}

export default DoctorSignup;