import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdPersonSearch } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

function DoctorDashboard() {
    const [isClick, setIsClick] = useState(false)
    const toggle = () => {
        if (isClick) setIsClick(false)
        else setIsClick(true)
    }
    return (
        <div className="min-h-screen bg-black text-neutral-100 antialiased overflow-x-hidden" style={{
            fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"
        }}
        >

            <div className="relative ">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
                    <div className="absolute top-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
                </div>
                <div className="relative z-10">
                </div>
            </div>

            <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 ml-2 ">
                        <div className="size-8 rounded-md bg-gradient-to-br from-cyan-400/80 to-emerald-400/80 flex items-center justify-center ring-1 ring-white/20">
                            <i data-lucide="activity" className="w-4 h-4 text-black/80"></i>
                        </div>
                        <span className="text-[15px] font-medium text-neutral-300">SwasthyaID</span>
                    </div>

                    <div className="flex items-center gap-2">

                        <button id="shareBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-400 transition">
                            <IoIosArrowBack />
                            Back
                        </button>
                    </div>
                </div>
            </header>


            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 md:py-8">

                <header className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center h-14 w-14 rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur shadow-lg shadow-cyan-500/10">
                            <span className="text-white text-sm font-semibold tracking-tight">DR</span>
                            <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-slate-900 text-[10px] font-semibold ring-2 ring-slate-900">AI</span>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Dr. Aditi Sharma</h1>
                            <p className="text-sm text-slate-400">Cardiologist • Reg. No: <span className="text-slate-200">MH-2014-9821</span></p>
                        </div>
                    </div>
                    <div className="flex-1 hidden md:flex justify-end">

                        <form id="aadhaar-search" className="w-full max-w-md">
                            <div className="flex justify-between w-full rounded-xl bg-white/5 text-sm ring-1 ring-white/10 group">

                                <input id="aadhaar-input"
                                    placeholder="Search patient by Aadhaar number (12 digits)"
                                    className="  w-full px-4 bg-transparent py-3 text-slate-200 placeholder:text-slate-500 overflow-hidden p-1 outline-none  focus:outline-none 0" />
                                <button className="cursor-pointer rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-200 ring-1 ring-cyan-400/30 hover:bg-cyan-500/20">
                                    <IoIosSearch className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </header>


                <div className="mt-6 border-t border-white/10"></div>


                <main id="page-doctor" className="mt-6 space-y-6">

                    <section className="rounded-2xl  backdrop-blur-md ring-1 ring-white/10 border border-white/10 bg-gradient-to-b from-white/5
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                        <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                                    <FaLocationDot />
                                </div>
                                <div>
                                    <div className="text-white font-semibold tracking-tight text-lg">Aster CMI Hospital</div>
                                    <div className="text-sm text-slate-400">Hebbal / Bangalore area</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:flex items-center gap-3 text-sm">
                                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/40 ring-1 ring-white/10 px-3 py-2">
                                    <span className="text-slate-300">aditi.sharma@hospital.org</span>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/40 ring-1 ring-white/10 px-3 py-2">

                                    <span className="text-slate-300">+91 98765 43210</span>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="rounded-2xl  backdrop-blur-md ring-1 ring-white/10  sborder border-white/10 bg-gradient-to-b 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                        <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Recent Diagnoses</h2>
                            <div className="flex items-center gap-2 text-xs text-slate-400">

                                Last 30 days
                            </div>
                        </div>
                        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                            <article className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Rahul Verma</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-9012-3381" data-patient-name="Rahul Verma">
                                        <MdPersonSearch />
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Primary Hypertension</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">

                                        Sep 12, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">

                                    </span>
                                </div>
                            </article>

                           <article className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Meera Nair</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-8831-1120" data-patient-name="Meera Nair">
                                        <MdPersonSearch />
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Arrhythmia (Atrial Fibrillation)</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">

                                        Sep 09, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">

                                    </span>
                                </div>
                            </article>

                            <article className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Sanjay Kumar</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-4410-7782" data-patient-name="Sanjay Kumar">
                                        <MdPersonSearch />
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Hyperlipidemia</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">

                                        Sep 03, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">

                                    </span>
                                </div>
                            </article>
                            <article className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Arvind Reddy</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-4410-7782" data-patient-name="Sanjay Kumar">
                                        <MdPersonSearch />
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Asthma</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">

                                        Sep 07, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">

                                    </span>
                                </div>
                            </article>
                            <article className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Karan Malhotra</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-4410-7782" data-patient-name="Sanjay Kumar">
                                        <MdPersonSearch />
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Chronic Kidney Disease</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">

                                        Sep 14, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">

                                    </span>
                                </div>
                            </article>
                            <article className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Ananya Deshmukh</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-4410-7782" data-patient-name="Sanjay Kumar">
                                        <MdPersonSearch />
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Type 2Diabetes Mellitus</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">

                                        Sep 15, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">

                                    </span>
                                </div>
                            </article>


                        </div>
                    </section>
                </main>


            </div>

            {/* <Add Diagnosis ? */}

            {/* <AddDiagnosis /> */}
        </div>





    )
}

export default DoctorDashboard