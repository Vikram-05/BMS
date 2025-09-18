import React from 'react'

function PatientDashboard2() {
    return (
        <div className="antialiased bg-slate-950 text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200" style={{
            fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Helvetica Neue, Arial'
        }}>

            <div className="min-h-screen flex flex-col">

                <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">

                        <a href="#" className="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                            <div className="h-7 w-7 grid place-items-center rounded-md bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-cyan-300 ring-1 ring-inset ring-white/10">
                                <span className="text-[11px] font-semibold tracking-tight">MA</span>
                            </div>
                            <span className="text-sm font-semibold tracking-tight text-slate-100/90">MediAI</span>
                        </a>

                        <div className="hidden sm:block h-6 w-px bg-white/10"></div>


                        <div className="flex-1 min-w-0 ">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-white/10">
                                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop" alt="Patient Avatar" className="h-full w-full object-cover" />
                                </div>
                                <div className="min-w-0">
                                    <h1 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-100 truncate">
                                        Patient Dashboard — Arjun Mehta
                                    </h1>
                                    <p className="text-xs text-slate-400 truncate">Aadhaar: 1234 5678 9012</p>
                                </div>
                            </div>
                        </div>


                        <div className="hidden md:flex items-center gap-2">
                            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-slate-200 hover:text-slate-100 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                <i data-lucide="arrow-left" className="h-4 w-4"></i>
                                Back to Doctor/Lab Portal
                            </a>
                            <button id="printAllBtn" className="inline-flex items-center gap-2 rounded-lg bg-slate-800/60 border border-white/10 px-3.5 py-2 text-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                <i data-lucide="printer" className="h-4 w-4"></i>
                                Print
                            </button>
                            <button id="exportAllBtn" className="inline-flex items-center gap-2 rounded-lg bg-cyan-500/10 text-cyan-200 border border-cyan-500/30 px-3.5 py-2 text-sm hover:bg-cyan-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                <i data-lucide="download" className="h-4 w-4"></i>
                                Export
                            </button>
                        </div>


                        <div className="md:hidden">
                            <button id="mobileMenuBtn" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" aria-label="More">
                                <i data-lucide="more-horizontal" className="h-5 w-5"></i>
                            </button>
                        </div>
                    </div>
                </header>


                <main className="flex-1">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

                        <section className="mb-8">
                            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 shadow-xl shadow-black/20">
                                <div className="p-5 sm:p-6 border-b border-white/10">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-100">Patient Information</h2>
                                        <div className="flex items-center gap-2">
                                            <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                                <i data-lucide="edit-3" className="h-4 w-4"></i>
                                                Edit
                                            </button>
                                            <button id="shareAllBtn" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 text-emerald-200 border border-emerald-500/30 px-3 py-1.5 text-xs hover:bg-emerald-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40">
                                                <i data-lucide="share-2" className="h-4 w-4"></i>
                                                Share
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 sm:p-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                                        {/* Full Name */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Full Name</p>
                                            <p className="mt-1 text-sm font-semibold text-slate-100 tracking-tight">Arjun Mehta</p>
                                        </div>

                                        {/* Aadhaar Number */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Aadhaar Number</p>
                                            <p className="mt-1 text-sm font-semibold text-slate-100 tracking-tight">1234 5678 9012</p>
                                        </div>

                                        {/* Gender */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Gender</p>
                                            <p className="mt-1 text-sm font-semibold text-slate-100 tracking-tight">Male</p>
                                        </div>

                                        {/* Age */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Age</p>
                                            <p className="mt-1 text-sm font-semibold text-slate-100 tracking-tight">42</p>
                                        </div>

                                        {/* Blood Group */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Blood Group</p>
                                            <p className="mt-1 text-sm font-semibold text-slate-100 tracking-tight">B+</p>
                                        </div>

                                        {/* Phone */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Phone</p>
                                            <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-100 tracking-tight">
                                                <i data-lucide="phone" className="h-4 w-4 text-slate-400"></i>
                                                +91 98765 43210
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Email</p>
                                            <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-100 tracking-tight">
                                                <i data-lucide="mail" className="h-4 w-4 text-slate-400"></i>
                                                arjun.mehta@example.com
                                            </div>
                                        </div>

                                        {/* Profile Photo */}
                                        <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4 w-full">
                                            <p className="text-xs text-slate-400">Profile</p>
                                            <div className="mt-2 flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg overflow-hidden ring-1 ring-white/10">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=crop"
                                                        alt="Profile"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                <button className="text-xs text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                                    <i data-lucide="upload-cloud" className="h-4 w-4"></i>
                                                    Update Photo
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </section>


                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-[18px] sm:text-[20px] tracking-tight font-semibold text-slate-100">Diagnosis History</h2>
                                <p className="text-xs text-slate-400"><span id="resultCount">6</span> records</p>
                            </div>


                            <div className="mb-5 rounded-2xl border border-white/10 bg-slate-900/40 p-3 sm:p-4">
                                <div className="flex flex-col sm:flex-row gap-3 sm:items-end">

                                    <div className="flex-1">
                                        <label className="text-xs text-slate-400">Search</label>
                                        <div className="mt-1 relative">
                                            
                                            <input id="searchInput" type="text" placeholder="Condition or doctor…" className="w-full rounded-lg bg-slate-950 placeholder:text-slate-500 border border-white/10 pl-9 pr-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 hover:border-white/20" />
                                        </div>
                                    </div>

                                    <div className="sm:w-44">
                                        <label className="text-xs text-slate-400">From</label>
                                        <input id="fromDate" type="date" className="mt-1 w-full rounded-lg bg-slate-950 border border-white/10 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 hover:border-white/20 [color-scheme:dark]" />
                                    </div>

                                    <div className="sm:w-44">
                                        <label className="text-xs text-slate-400">To</label>
                                        <input id="toDate" type="date" className="mt-1 w-full rounded-lg bg-slate-950 border border-white/10 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 hover:border-white/20 [color-scheme:dark]" />
                                    </div>

                                    <div className="sm:w-48">
                                        <label className="text-xs text-slate-400">Status</label>
                                        <div className="relative mt-1">
                                            <button id="statusDropdownBtn" data-open="false" className="w-full inline-flex items-center justify-between rounded-lg bg-slate-950 border border-white/10 px-3 py-2 text-sm text-slate-200 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                                <span id="statusDropdownLabel">All</span>
                                                <i data-lucide="chevron-down" className="h-4 w-4 text-slate-400"></i>
                                            </button>
                                            <div id="statusDropdown" className="hidden absolute z-20 mt-2 w-full rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur p-1 shadow-lg shadow-black/30">
                                                <button data-status="all" className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-white/5">All</button>
                                                <button data-status="verified" className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-white/5">Verified</button>
                                                <button data-status="pending" className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-white/5">Pending</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button id="clearFilters" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40">
                                            <i data-lucide="x" className="h-4 w-4"></i>
                                            Clear
                                        </button>
                                        <button id="shareFilteredBtn" className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 text-emerald-200 border border-emerald-500/30 px-3 py-2 text-sm hover:bg-emerald-500/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40">
                                            <i data-lucide="send" className="h-4 w-4"></i>
                                            Share
                                        </button>
                                    </div>
                                </div>
                            </div>


                            <div id="diagnosisGrid" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                                <article className="rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/50 transition-colors" data-card data-condition="Hypertension Stage 2" data-doctor="Neha Kapoor" data-date="2025-08-10" data-verified="true">
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-0.5">
                                                <i data-lucide="activity" className="h-5 w-5 text-cyan-300"></i>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <h3 className="text-[16px] tracking-tight font-semibold text-slate-100 truncate">Hypertension Stage 2</h3>
                                                        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                                            <span className="inline-flex items-center gap-1.5">
                                                                <i data-lucide="user" className="h-3.5 w-3.5"></i> Dr. Neha Kapoor
                                                            </span>
                                                            <span className="inline-flex items-center gap-1.5">
                                                                <i data-lucide="calendar" className="h-3.5 w-3.5"></i> 10 Aug 2025
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 flex items-center gap-2">
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[11px]">
                                                            <i data-lucide="badge-check" className="h-3.5 w-3.5"></i> Verified
                                                        </span>
                                                        <div className="flex items-center gap-1.5">
                                                            <button className="icon-btn" data-card-share title="Share" aria-label="Share">
                                                                <i data-lucide="share-2" className="h-4 w-4 text-slate-300"></i>
                                                            </button>
                                                            <button className="icon-btn" data-card-print title="Print" aria-label="Print">
                                                                <i data-lucide="printer" className="h-4 w-4 text-slate-300"></i>
                                                            </button>
                                                            <button className="icon-btn" data-card-export title="Export" aria-label="Export">
                                                                <i data-lucide="download" className="h-4 w-4 text-slate-300"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-slate-400">Tap to view details</div>
                                            <button className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" data-expand>
                                                <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                Expand
                                            </button>
                                        </div>
                                        <div className="mt-3 hidden" data-details>
                                            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Recommended Tests</p>
                                                <ul className="text-sm text-slate-200 space-y-1.5">
                                                    <li className="flex items-center gap-2"><i data-lucide="heart-pulse" className="h-4 w-4 text-cyan-300"></i> ECG</li>
                                                    <li className="flex items-center gap-2"><i data-lucide="activity-square" className="h-4 w-4 text-cyan-300"></i> 24-hr Blood Pressure Monitoring</li>
                                                    <li className="flex items-center gap-2"><i data-lucide="beaker" className="h-4 w-4 text-cyan-300"></i> Kidney Function Test</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Prescribed Medicines</p>
                                                <div className="space-y-2">
                                                    <div className="grid grid-cols-5 gap-2 text-xs text-slate-400">
                                                        <div className="col-span-3">Medicine</div>
                                                        <div>Frequency</div>
                                                        <div>Duration</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Amlodipine 5 mg</div>
                                                        <div>Once daily</div>
                                                        <div>8 weeks</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Hydrochlorothiazide 12.5 mg</div>
                                                        <div>Once daily</div>
                                                        <div>8 weeks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                                    <i data-lucide="file-text" className="h-4 w-4"></i>
                                                    View Full Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>


                                <article className="rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/50 transition-colors" data-card data-condition="Type 2 Diabetes Mellitus" data-doctor="Rohan Iyer" data-date="2025-07-22" data-verified="true">
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-[16px] tracking-tight font-semibold text-slate-100 truncate">Type 2 Diabetes Mellitus</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="user" className="h-3.5 w-3.5"></i> Dr. Rohan Iyer</span>
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="calendar" className="h-3.5 w-3.5"></i> 22 Jul 2025</span>
                                                </div>
                                            </div>
                                            <div className="shrink-0 flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[11px]">
                                                    <i data-lucide="badge-check" className="h-3.5 w-3.5"></i> Verified
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <button className="icon-btn" data-card-share title="Share">
                                                        <i data-lucide="share-2" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-print title="Print">
                                                        <i data-lucide="printer" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-export title="Export">
                                                        <i data-lucide="download" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-slate-400">Tap to view details</div>
                                            <button className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" data-expand>
                                                <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                Expand
                                            </button>
                                        </div>
                                        <div className="mt-3 hidden" data-details>
                                            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Recommended Tests</p>
                                                <ul className="text-sm text-slate-200 space-y-1.5">
                                                    <li className="flex items-center gap-2"><i data-lucide="beaker" className="h-4 w-4 text-cyan-300"></i> HbA1c</li>
                                                    <li className="flex items-center gap-2"><i data-lucide="beaker" className="h-4 w-4 text-cyan-300"></i> Fasting Plasma Glucose</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Prescribed Medicines</p>
                                                <div className="space-y-2">
                                                    <div className="grid grid-cols-5 gap-2 text-xs text-slate-400">
                                                        <div className="col-span-3">Medicine</div>
                                                        <div>Frequency</div>
                                                        <div>Duration</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Metformin 500 mg</div>
                                                        <div>Twice daily</div>
                                                        <div>12 weeks</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Glimepiride 2 mg</div>
                                                        <div>Once daily</div>
                                                        <div>12 weeks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                                    <i data-lucide="file-text" className="h-4 w-4"></i>
                                                    View Full Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>


                                <article className="rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/50 transition-colors" data-card data-condition="Acute Bronchitis" data-doctor="S. Rao" data-date="2025-05-03" data-verified="false">
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-[16px] tracking-tight font-semibold text-slate-100 truncate">Acute Bronchitis</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="user" className="h-3.5 w-3.5"></i> Dr. S. Rao</span>
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="calendar" className="h-3.5 w-3.5"></i> 03 May 2025</span>
                                                </div>
                                            </div>
                                            <div className="shrink-0 flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[11px]">
                                                    <i data-lucide="clock" className="h-3.5 w-3.5"></i> Pending
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <button className="icon-btn" data-card-share title="Share">
                                                        <i data-lucide="share-2" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-print title="Print">
                                                        <i data-lucide="printer" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-export title="Export">
                                                        <i data-lucide="download" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-slate-400">Tap to view details</div>
                                            <button className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" data-expand>
                                                <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                Expand
                                            </button>
                                        </div>
                                        <div className="mt-3 hidden" data-details>
                                            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Recommended Tests</p>
                                                <ul className="text-sm text-slate-200 space-y-1.5">
                                                    <li className="flex items-center gap-2"><i data-lucide="scan" className="h-4 w-4 text-cyan-300"></i> Chest X-Ray</li>
                                                    <li className="flex items-center gap-2"><i data-lucide="beaker" className="h-4 w-4 text-cyan-300"></i> Complete Blood Count (CBC)</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Prescribed Medicines</p>
                                                <div className="space-y-2">
                                                    <div className="grid grid-cols-5 gap-2 text-xs text-slate-400">
                                                        <div className="col-span-3">Medicine</div>
                                                        <div>Frequency</div>
                                                        <div>Duration</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Azithromycin 500 mg</div>
                                                        <div>Once daily</div>
                                                        <div>3 days</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Dextromethorphan Syrup</div>
                                                        <div>Thrice daily</div>
                                                        <div>5 days</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                                    <i data-lucide="file-text" className="h-4 w-4"></i>
                                                    View Full Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <article className="rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/50 transition-colors" data-card data-condition="Migraine without aura" data-doctor="Priya Sharma" data-date="2025-03-11" data-verified="true">
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-[16px] tracking-tight font-semibold text-slate-100 truncate">Migraine without aura</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="user" className="h-3.5 w-3.5"></i> Dr. Priya Sharma</span>
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="calendar" className="h-3.5 w-3.5"></i> 11 Mar 2025</span>
                                                </div>
                                            </div>
                                            <div className="shrink-0 flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[11px]">
                                                    <i data-lucide="badge-check" className="h-3.5 w-3.5"></i> Verified
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <button className="icon-btn" data-card-share title="Share">
                                                        <i data-lucide="share-2" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-print title="Print">
                                                        <i data-lucide="printer" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-export title="Export">
                                                        <i data-lucide="download" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-slate-400">Tap to view details</div>
                                            <button className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" data-expand>
                                                <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                Expand
                                            </button>
                                        </div>
                                        <div className="mt-3 hidden" data-details>
                                            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Recommended Tests</p>
                                                <ul className="text-sm text-slate-200 space-y-1.5">
                                                    <li className="flex items-center gap-2"><i data-lucide="scan" className="h-4 w-4 text-cyan-300"></i> MRI Brain (if indicated)</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Prescribed Medicines</p>
                                                <div className="space-y-2">
                                                    <div className="grid grid-cols-5 gap-2 text-xs text-slate-400">
                                                        <div className="col-span-3">Medicine</div>
                                                        <div>Frequency</div>
                                                        <div>Duration</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Sumatriptan 50 mg</div>
                                                        <div>PRN</div>
                                                        <div>—</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Naproxen 250 mg</div>
                                                        <div>As needed</div>
                                                        <div>—</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                                    <i data-lucide="file-text" className="h-4 w-4"></i>
                                                    View Full Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>


                                <article className="rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/50 transition-colors" data-card data-condition="Dyslipidemia" data-doctor="Anil Verma" data-date="2024-12-12" data-verified="false">
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-[16px] tracking-tight font-semibold text-slate-100 truncate">Dyslipidemia</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="user" className="h-3.5 w-3.5"></i> Dr. Anil Verma</span>
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="calendar" className="h-3.5 w-3.5"></i> 12 Dec 2024</span>
                                                </div>
                                            </div>
                                            <div className="shrink-0 flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 text-[11px]">
                                                    <i data-lucide="clock" className="h-3.5 w-3.5"></i> Pending
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <button className="icon-btn" data-card-share title="Share">
                                                        <i data-lucide="share-2" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-print title="Print">
                                                        <i data-lucide="printer" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-export title="Export">
                                                        <i data-lucide="download" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-slate-400">Tap to view details</div>
                                            <button className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" data-expand>
                                                <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                Expand
                                            </button>
                                        </div>
                                        <div className="mt-3 hidden" data-details>
                                            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Recommended Tests</p>
                                                <ul className="text-sm text-slate-200 space-y-1.5">
                                                    <li className="flex items-center gap-2"><i data-lucide="beaker" className="h-4 w-4 text-cyan-300"></i> Lipid Profile</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Prescribed Medicines</p>
                                                <div className="space-y-2">
                                                    <div className="grid grid-cols-5 gap-2 text-xs text-slate-400">
                                                        <div className="col-span-3">Medicine</div>
                                                        <div>Frequency</div>
                                                        <div>Duration</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Atorvastatin 10 mg</div>
                                                        <div>Once daily</div>
                                                        <div>12 weeks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                                    <i data-lucide="file-text" className="h-4 w-4"></i>
                                                    View Full Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>


                                <article className="rounded-2xl border border-white/10 bg-slate-900/40 hover:bg-slate-900/50 transition-colors" data-card data-condition="Lower back pain" data-doctor="Kabir Singh" data-date="2024-10-08" data-verified="true">
                                    <div className="p-4 border-b border-white/10">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <h3 className="text-[16px] tracking-tight font-semibold text-slate-100 truncate">Lower back pain</h3>
                                                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="user" className="h-3.5 w-3.5"></i> Dr. Kabir Singh</span>
                                                    <span className="inline-flex items-center gap-1.5"><i data-lucide="calendar" className="h-3.5 w-3.5"></i> 08 Oct 2024</span>
                                                </div>
                                            </div>
                                            <div className="shrink-0 flex items-center gap-2">
                                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 text-[11px]">
                                                    <i data-lucide="badge-check" className="h-3.5 w-3.5"></i> Verified
                                                </span>
                                                <div className="flex items-center gap-1.5">
                                                    <button className="icon-btn" data-card-share title="Share">
                                                        <i data-lucide="share-2" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-print title="Print">
                                                        <i data-lucide="printer" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                    <button className="icon-btn" data-card-export title="Export">
                                                        <i data-lucide="download" className="h-4 w-4 text-slate-300"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="text-xs text-slate-400">Tap to view details</div>
                                            <button className="inline-flex items-center gap-1.5 text-sm text-cyan-300 hover:text-cyan-200 px-2 py-1 rounded-md hover:bg-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40" data-expand>
                                                <i data-lucide="chevron-down" className="h-4 w-4"></i>
                                                Expand
                                            </button>
                                        </div>
                                        <div className="mt-3 hidden" data-details>
                                            <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Recommended Tests</p>
                                                <ul className="text-sm text-slate-200 space-y-1.5">
                                                    <li className="flex items-center gap-2"><i data-lucide="scan" className="h-4 w-4 text-cyan-300"></i> MRI Lumbar Spine</li>
                                                    <li className="flex items-center gap-2"><i data-lucide="scan" className="h-4 w-4 text-cyan-300"></i> X-Ray Lumbosacral</li>
                                                </ul>
                                            </div>
                                            <div className="mt-3 rounded-xl border border-white/10 bg-slate-950/50 p-3">
                                                <p className="text-xs text-slate-400 mb-2">Prescribed Medicines</p>
                                                <div className="space-y-2">
                                                    <div className="grid grid-cols-5 gap-2 text-xs text-slate-400">
                                                        <div className="col-span-3">Medicine</div>
                                                        <div>Frequency</div>
                                                        <div>Duration</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Ibuprofen 400 mg</div>
                                                        <div>As needed</div>
                                                        <div>5 days</div>
                                                    </div>
                                                    <div className="grid grid-cols-5 gap-2 text-sm text-slate-200">
                                                        <div className="col-span-3">Physiotherapy</div>
                                                        <div>Thrice weekly</div>
                                                        <div>4 weeks</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 flex items-center justify-end gap-2">
                                                <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                                    <i data-lucide="file-text" className="h-4 w-4"></i>
                                                    View Full Report
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                </main>


                <footer className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-xs text-slate-500">For assistance, contact support@mediai.health</p>
                        <div className="flex items-center gap-3">
                            <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                <i data-lucide="book-open" className="h-4 w-4"></i>
                                Documentation
                            </button>
                            <button className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                                <i data-lucide="shield-check" className="h-4 w-4"></i>
                                Privacy
                            </button>
                        </div>
                    </div>
                </footer>
            </div>


            <div id="shareModal" className="hidden fixed inset-0 z-50">
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
                <div className="relative mx-auto max-w-lg mt-20 rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
                    <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between">
                        <div>
                            <h3 className="text-[18px] tracking-tight font-semibold">Share Report</h3>
                            <p id="shareSubtitle" className="text-xs text-slate-400 mt-1">Select recipients and permissions</p>
                        </div>
                        <button id="closeShareModal" className="h-9 w-9 grid place-items-center rounded-lg border border-white/10 hover:bg-white/5">
                            <i data-lucide="x" className="h-4 w-4"></i>
                        </button>
                    </div>
                    <div className="p-5 sm:p-6 space-y-4">

                        <div>
                            <label className="text-xs text-slate-400">Recipient Email</label>
                            <div className="mt-1 relative">
                                <i data-lucide="mail" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"></i>
                                <input id="shareEmail" type="email" placeholder="doctor@hospital.com" className="w-full rounded-lg bg-slate-950 border border-white/10 pl-9 pr-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/30" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            <button id="toggleDoctor" type="button" className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950 px-3 py-3 hover:border-white/20">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-5 w-5 rounded-md grid place-items-center bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                                        <i data-lucide="stethoscope" className="h-3.5 w-3.5"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">Share with Doctor</p>
                                        <p className="text-xs text-slate-400">Allow viewing</p>
                                    </div>
                                </div>
                                <span className="ui-switch" data-state="on">
                                    <span className="block h-5 w-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 relative">
                                        <span className="dot absolute left-4 top-0.5 h-4 w-4 rounded-full bg-emerald-400 shadow"></span>
                                    </span>
                                </span>
                            </button>
                            <button id="toggleLab" type="button" className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950 px-3 py-3 hover:border-white/20">
                                <div className="flex items-center gap-2.5">
                                    <div className="h-5 w-5 rounded-md grid place-items-center bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                                        <i data-lucide="flask-conical" className="h-3.5 w-3.5"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-slate-200">Share with Lab</p>
                                        <p className="text-xs text-slate-400">Allow downloads</p>
                                    </div>
                                </div>
                                <span className="ui-switch" data-state="off">
                                    <span className="block h-5 w-9 rounded-full bg-slate-700 border border-white/10 relative">
                                        <span className="dot absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-slate-400 shadow"></span>
                                    </span>
                                </span>
                            </button>
                        </div>

                        <div>
                            <label className="text-xs text-slate-400">Message (optional)</label>
                            <textarea id="shareMessage" rows="3" placeholder="Notes for the recipient…" className="mt-1 w-full rounded-lg bg-slate-950 border border-white/10 px-3 py-2 text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"></textarea>
                        </div>
                    </div>
                    <div className="p-5 sm:p-6 border-t border-white/10 flex items-center justify-between">
                        <button id="cancelShare" className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-slate-300 hover:bg-white/5">
                            Cancel
                        </button>
                        <div className="flex items-center gap-2">
                            <button id="copyLink" className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800/60 border border-white/10 px-3.5 py-2 text-sm hover:bg-slate-800">
                                <i data-lucide="link" className="h-4 w-4"></i>
                                Copy Link
                            </button>
                            <button id="confirmShare" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/15 text-emerald-200 border border-emerald-500/30 px-3.5 py-2 text-sm hover:bg-emerald-500/25">
                                <i data-lucide="send" className="h-4 w-4"></i>
                                Share Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <div id="mobileMenuSheet" className="hidden fixed inset-0 z-40">
                <div className="absolute inset-0 bg-slate-950/60"></div>
                <div className="absolute inset-x-0 bottom-0 rounded-t-2xl border border-white/10 bg-slate-900 p-4 space-y-2">
                    <button id="mobilePrint" className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm hover:bg-white/5">
                        <i data-lucide="printer" className="h-4 w-4"></i> Print
                    </button>
                    <button id="mobileExport" className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm hover:bg-white/5">
                        <i data-lucide="download" className="h-4 w-4"></i> Export
                    </button>
                    <button id="mobileShare" className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm hover:bg-white/5">
                        <i data-lucide="share-2" className="h-4 w-4"></i> Share
                    </button>
                    <button id="mobileClose" className="w-full mt-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm hover:bg-white/5">
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PatientDashboard2