import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";

function LabDashboard() {
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

            <div className="relative">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
                    <div className="absolute top-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
                </div>
            </div>


            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-6 md:py-8">

                <header className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative flex items-center justify-center h-14 w-14 rounded-xl ring-1 ring-white/10 bg-white/5 backdrop-blur shadow-lg shadow-cyan-500/10">
                            <span className="text-white text-sm font-semibold tracking-tight">DR</span>
                            <span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-slate-900 text-[10px] font-semibold ring-2 ring-slate-900">AI</span>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">Redcliffe Lab</h1>
                            <p className="text-sm text-slate-400">Cardiology, Radiology • Reg. No: <span className="text-slate-200">MH-2014-9821</span></p>
                        </div>
                    </div>
                    <div className="flex-1 hidden md:flex justify-end">

                        <form id="aadhaar-search" className="w-full max-w-md">
                            <div className="relative">

                                <input id="aadhaar-input" pattern="[0-9]{12}"
                                    placeholder="Search patient by Aadhaar number (12 digits)"
                                    className="w-full rounded-xl bg-white/5 text-sm text-slate-200 placeholder:text-slate-500 ring-1 ring-white/10 px-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
                                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-200 ring-1 ring-cyan-400/30 hover:bg-cyan-500/20">
                                    <IoIosSearch className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </header>
                <div className="mt-6 border-t border-white/10"></div>


                <main id="page-doctor" className="mt-6 space-y-6">
                    <section className="rounded-2xl  backdrop-blur-md ring-1 ring-white/10 shadow-xl shadow-black/30">
                        <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Recent Lab Tests</h2>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                Last 30 days
                            </div>
                        </div>

                        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {[
                                {
                                    name: "Rahul Verma",
                                    tests: "X -rays, CT scan",
                                    date: "Sep 12, 2025",
                                    id: "PA-9012-3381"
                                },
                                {
                                    name: "Meera Nair",
                                    tests: "MRI",
                                    date: "Sep 09, 2025",
                                    id: "PA-8831-1120"
                                },
                                {
                                    name: "Sanjay Kumar",
                                    tests: "CT scan",
                                    date: "Sep 03, 2025",
                                    id: "PA-4410-7782"
                                }
                            ].map((patient, i) => (
                                <article
                                    key={i}
                                    className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                            <div className="text-slate-200">{patient.name}</div>
                                        </div>
                                        <button
                                            className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                            data-patient-id={patient.id}
                                            data-patient-name={patient.name}
                                        >
                                            <MdPersonSearch />
                                        </button>
                                    </div>
                                    <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Lab Tests</div>
                                        <div className="text-sm text-slate-200">{patient.tests}</div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                        <div className="inline-flex items-center gap-1.5">{patient.date}</div>
                                        <span className="inline-flex items-center gap-1 text-teal-300"></span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>


                <main id="page-patient" className="mt-6 space-y-6">
                    <section className="rounded-2xl  backdrop-blur-md ring-1 ring-white/10 shadow-xl shadow-black/30">
                        <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Previous Lab Tests</h3>
                            <button
                                id="open-modal"
                                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-3.5 py-2 text-sm text-cyan-200 ring-1 ring-cyan-400/30 hover:bg-cyan-500/20 hover:text-cyan-100 transition"
                            >
                                Add New Test
                            </button>
                        </div>

                        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {[
                                {
                                    name: "Aditi Sharma",
                                    tests: "ECG",
                                    date: "Aug 22, 2025"
                                },
                                {
                                    name: "Arjun Mehta",
                                    tests: "Echocardiogram",
                                    date: "Jun 05, 2025"
                                },
                                {
                                    name: "Neha Kapoor",
                                    tests: "Angiography",
                                    date: "Mar 18, 2025"
                                }
                            ].map((patient, i) => (
                                <article
                                    key={i}
                                    className="group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">{patient.date}</div>
                                    </div>
                                    <div className="mt-1 text-slate-200">{patient.name}</div>
                                    <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                        <div className="text-xs uppercase tracking-wider text-slate-400">LAB tests</div>
                                        <div className="text-sm text-slate-200">{patient.tests}</div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>

            </div>

            {/* <Add Diagnosis ? */}

            {/* <AddDiagnosis /> */}
        </div>
    )
}

export default LabDashboard