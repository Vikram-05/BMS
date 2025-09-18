import React from 'react'

function DoctorDashboard() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 antialiased font-sans selection:bg-cyan-500/20 selection:text-cyan-200"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}
        >

            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl"></div>
                <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/10 via-slate-950 to-slate-950"></div>
            </div>

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
                            <div className="relative">
                                <i data-lucide="search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"></i>
                                <input id="aadhaar-input" pattern="[0-9]{12}"
                                    placeholder="Search patient by Aadhaar number (12 digits)"
                                    className="w-full rounded-xl bg-white/5 text-sm text-slate-200 placeholder:text-slate-500 ring-1 ring-white/10 px-9 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
                                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-200 ring-1 ring-cyan-400/30 hover:bg-cyan-500/20">
                                    <i data-lucide="scan-search" className="h-4 w-4"></i> Search
                                </button>
                            </div>
                        </form>
                    </div>
                </header>


                <div className="mt-6 border-t border-white/10"></div>


                <main id="page-doctor" className="mt-6 space-y-6">

                    <section className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-xl shadow-black/30">
                        <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-cyan-500/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                                    <i data-lucide="stethoscope" className="h-5 w-5 text-cyan-300"></i>
                                </div>
                                <div>
                                    <div className="text-white font-semibold tracking-tight text-lg">Dr. Aditi Sharma</div>
                                    <div className="text-sm text-slate-400">Cardiology • 12 yrs experience</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:flex items-center gap-3 text-sm">
                                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/40 ring-1 ring-white/10 px-3 py-2">
                                    <i data-lucide="mail" className="h-4 w-4 text-slate-400"></i>
                                    <span className="text-slate-300">aditi.sharma@hospital.org</span>
                                </div>
                                <div className="inline-flex items-center gap-2 rounded-xl bg-slate-900/40 ring-1 ring-white/10 px-3 py-2">
                                    <i data-lucide="phone" className="h-4 w-4 text-slate-400"></i>
                                    <span className="text-slate-300">+91 98765 43210</span>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-xl shadow-black/30">
                        <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Recent Diagnoses</h2>
                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                <i data-lucide="clock" className="h-4 w-4"></i>
                                Last 30 days
                            </div>
                        </div>
                        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                            <article className="group relative rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Rahul Verma</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-9012-3381" data-patient-name="Rahul Verma">
                                        <i data-lucide="user-round-search" className="h-4.5 w-4.5"></i>
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Primary Hypertension</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">
                                        <i data-lucide="calendar" className="h-4 w-4"></i>
                                        Sep 12, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">
                                        <i data-lucide="badge-check" className="h-4 w-4"></i> Verified
                                    </span>
                                </div>
                            </article>

                            <article className="group relative rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Meera Nair</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-8831-1120" data-patient-name="Meera Nair">
                                        <i data-lucide="user-round-search" className="h-4.5 w-4.5"></i>
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Arrhythmia (Atrial Fibrillation)</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">
                                        <i data-lucide="calendar" className="h-4 w-4"></i>
                                        Sep 09, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">
                                        <i data-lucide="badge-check" className="h-4 w-4"></i> Verified
                                    </span>
                                </div>
                            </article>

                            <article className="group relative rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                        <div className="text-slate-200">Sanjay Kumar</div>
                                    </div>
                                    <button className="view-profile inline-flex items-center justify-center h-9 w-9 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 text-cyan-200 hover:bg-cyan-500/20 transition"
                                        data-patient-id="PA-4410-7782" data-patient-name="Sanjay Kumar">
                                        <i data-lucide="user-round-search" className="h-4.5 w-4.5"></i>
                                    </button>
                                </div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Hyperlipidemia</div>
                                </div>
                                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                                    <div className="inline-flex items-center gap-1.5">
                                        <i data-lucide="calendar" className="h-4 w-4"></i>
                                        Sep 03, 2025
                                    </div>
                                    <span className="inline-flex items-center gap-1 text-teal-300">
                                        <i data-lucide="badge-check" className="h-4 w-4"></i> Verified
                                    </span>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>

                <main id="page-patient" className="mt-6 space-y-6">

                    <section className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-xl shadow-black/30">
                        <div className="p-5 md:p-6 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <button id="back-to-doctor" className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                                    <i data-lucide="arrow-left" className="h-4 w-4 text-slate-300"></i>
                                </button>
                                <div>
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Patient</div>
                                    <h2 id="patient-name" className="text-xl md:text-2xl font-semibold tracking-tight text-white">—</h2>
                                </div>
                            </div>
                            <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 px-3 py-2">
                                <div className="text-[10px] uppercase tracking-wider text-slate-400">Unique ID</div>
                                <div id="patient-id" className="text-sm text-slate-200">—</div>
                            </div>
                        </div>
                    </section>


                    <section className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 shadow-xl shadow-black/30">
                        <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Previous Diagnoses</h3>
                            <button id="open-modal" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/10 px-3.5 py-2 text-sm text-cyan-200 ring-1 ring-cyan-400/30 hover:bg-cyan-500/20 hover:text-cyan-100 transition">
                                <i data-lucide="plus" className="h-4 w-4"></i>
                                Add New Diagnosis
                            </button>
                        </div>
                        <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                            <article className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Doctor</div>
                                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                                        <i data-lucide="calendar" className="h-4 w-4"></i> Aug 22, 2025
                                    </div>
                                </div>
                                <div className="mt-1 text-slate-200">Dr. Aditi Sharma</div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Hypertensive Heart Disease</div>
                                </div>
                            </article>

                            <article className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Doctor</div>
                                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                                        <i data-lucide="calendar" className="h-4 w-4"></i> Jun 05, 2025
                                    </div>
                                </div>
                                <div className="mt-1 text-slate-200">Dr. Arjun Mehta</div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Dyslipidemia</div>
                                </div>
                            </article>

                            <article className="rounded-xl bg-slate-900/40 ring-1 ring-white/10 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Doctor</div>
                                    <div className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                                        <i data-lucide="calendar" className="h-4 w-4"></i> Mar 18, 2025
                                    </div>
                                </div>
                                <div className="mt-1 text-slate-200">Dr. Neha Kapoor</div>
                                <div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                                    <div className="text-xs uppercase tracking-wider text-slate-400">Main Condition</div>
                                    <div className="text-sm text-slate-200">Prehypertension</div>
                                </div>
                            </article>
                        </div>
                    </section>
                </main>
            </div>


            <div id="diagnosis-modal" className="fixed inset-0 z-50 ">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-x-0 top-8 mx-auto w-[95%] max-w-3xl rounded-2xl bg-slate-950/80 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
                    <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                                <i data-lucide="file-plus-2" className="h-4 w-4 text-cyan-300"></i>
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold tracking-tight text-white">Add New Diagnosis</h4>
                        </div>
                        <button id="close-modal" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 ring-1 ring-white/10">
                            <i data-lucide="x" className="h-4 w-4"></i>
                        </button>
                    </div>

                    <form id="diagnosis-form" className="p-5 md:p-6 space-y-5">

                        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                            <div className="text-xs uppercase tracking-wider text-slate-400">Section 1</div>
                            <label className="mt-1 block text-sm text-slate-200">Main Medical Condition</label>
                            <input id="condition-input" placeholder="e.g., Primary Hypertension" className="mt-2 w-full rounded-lg bg-slate-900/50 text-sm text-slate-200 placeholder:text-slate-500 ring-1 ring-white/10 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
                        </div>


                        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                            <div className="text-xs uppercase tracking-wider text-slate-400">Section 2</div>
                            <label className="mt-1 block text-sm text-slate-200">Recommended Tests</label>

                            <div className="mt-2">
                                <div id="tests-select" className="relative">
                                    <button type="button" id="tests-trigger" className="w-full text-left rounded-lg bg-slate-900/50 text-sm text-slate-200 ring-1 ring-white/10 px-3.5 py-2.5 hover:ring-cyan-400/30 flex items-center justify-between">
                                        <span id="tests-placeholder" className="text-slate-500">Select tests</span>
                                        <i data-lucide="chevron-down" className="h-4 w-4 text-slate-400"></i>
                                    </button>


                                    <div id="tests-panel" className="absolute z-10 mt-2 w-full rounded-xl bg-slate-950/95 backdrop-blur ring-1 ring-white/10 shadow-xl shadow-black/30 p-2 hidden">
                                        <div className="max-h-56 overflow-y-auto divide-y divide-white/5">

                                            <label className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                                                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md ring-1 ring-white/20 bg-white/5">
                                                    <input type="checkbox" value="ECG" className="peer sr-only" />
                                                    <i data-lucide="check" className="h-3.5 w-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition"></i>
                                                </span>
                                                <span className="text-sm text-slate-200">ECG</span>
                                            </label>
                                            <label className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                                                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md ring-1 ring-white/20 bg-white/5">
                                                    <input type="checkbox" value="MRI" className="peer sr-only" />
                                                    <i data-lucide="check" className="h-3.5 w-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition"></i>
                                                </span>
                                                <span className="text-sm text-slate-200">MRI</span>
                                            </label>
                                            <label className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                                                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md ring-1 ring-white/20 bg-white/5">
                                                    <input type="checkbox" value="X-ray" className="peer sr-only" />
                                                    <i data-lucide="check" className="h-3.5 w-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition"></i>
                                                </span>
                                                <span className="text-sm text-slate-200">X-ray</span>
                                            </label>
                                            <label className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                                                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md ring-1 ring-white/20 bg-white/5">
                                                    <input type="checkbox" value="Lipid Profile" className="peer sr-only" />
                                                    <i data-lucide="check" className="h-3.5 w-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition"></i>
                                                </span>
                                                <span className="text-sm text-slate-200">Lipid Profile</span>
                                            </label>
                                            <label className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                                                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md ring-1 ring-white/20 bg-white/5">
                                                    <input type="checkbox" value="CBC" className="peer sr-only" />
                                                    <i data-lucide="check" className="h-3.5 w-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition"></i>
                                                </span>
                                                <span className="text-sm text-slate-200">CBC</span>
                                            </label>
                                            <label className="flex items-center gap-3 px-2 py-2 hover:bg-white/5 rounded-lg cursor-pointer">
                                                <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md ring-1 ring-white/20 bg-white/5">
                                                    <input type="checkbox" value="Echocardiogram" className="peer sr-only" />
                                                    <i data-lucide="check" className="h-3.5 w-3.5 text-cyan-300 opacity-0 peer-checked:opacity-100 transition"></i>
                                                </span>
                                                <span className="text-sm text-slate-200">Echocardiogram</span>
                                            </label>
                                        </div>
                                    </div>


                                    <div id="tests-chips" className="mt-2 hidden flex-wrap gap-2"></div>
                                </div>
                            </div>
                        </div>


                        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                            <div className="text-xs uppercase tracking-wider text-slate-400">Section 3</div>
                            <div className="flex items-center justify-between mt-1">
                                <label className="block text-sm text-slate-200">Medicine Details</label>
                                <button type="button" id="add-row" className="inline-flex items-center gap-1.5 rounded-lg bg-teal-500/10 px-2.5 py-1.5 text-xs text-teal-200 ring-1 ring-teal-400/30 hover:bg-teal-500/20">
                                    <i data-lucide="plus" className="h-4 w-4"></i>Add Row
                                </button>
                            </div>

                            <div className="mt-3 overflow-hidden rounded-lg ring-1 ring-white/10">
                                <div className="grid grid-cols-12 bg-slate-900/50 text-xs text-slate-400">
                                    <div className="col-span-5 px-3 py-2">Medicine Name</div>
                                    <div className="col-span-3 px-3 py-2">Frequency</div>
                                    <div className="col-span-3 px-3 py-2">Duration</div>
                                    <div className="col-span-1 px-3 py-2 text-center">—</div>
                                </div>
                                <div id="med-rows" className="divide-y divide-white/10">

                                </div>
                            </div>
                        </div>


                        <div className="flex items-center justify-end gap-3 pt-2">
                            <button type="button" id="close-modal-bottom" className="rounded-xl px-3.5 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/10">Cancel</button>
                            <button type="submit" className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 bg-cyan-300/90 hover:bg-cyan-300 focus:outline-none ring-1 ring-cyan-200 overflow-hidden">
                                <span className="absolute inset-0 -z-10 bg-cyan-500/30 blur-2xl"></span>
                                <i data-lucide="sparkles" className="h-4 w-4"></i>
                                Save Diagnosis
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard