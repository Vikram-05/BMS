import React from 'react'

function AiGenerated() {
    return (
        <div className="bg-[#0A0F14] text-slate-200 antialiased ">
   
            <div className="min-h-screen flex flex-col">
              
                <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0A0F14]/70 bg-[#0A0F14]/60 border-b border-white/10">
                    <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center gap-3">
                                <button id="backBtn" className="group inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-white/10 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors">
                                    <i data-lucide="arrow-left" className="w-4 h-4"></i>
                                    <span className="text-sm">Back to Patient Profile</span>
                                </button>
                                <div className="hidden md:flex items-center text-sm text-slate-400">
                                    <a href="#" className="hover:text-slate-200 transition-colors">Doctor Dashboard</a>
                                    <i data-lucide="chevron-right" className="w-4 h-4 mx-2 text-slate-500"></i>
                                    <a href="#" className="hover:text-slate-200 transition-colors">Patient</a>
                                    <i data-lucide="chevron-right" className="w-4 h-4 mx-2 text-slate-500"></i>
                                    <span className="text-slate-300">Diagnosis Details</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-sm">
                                    <i data-lucide="share-2" className="w-4 h-4"></i>
                                    <span>Share with Lab/Doctor</span>
                                </button>
                                <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors text-sm">
                                    <i data-lucide="printer" className="w-4 h-4"></i>
                                    <span>Print</span>
                                </button>
                                <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-gradient-to-r from-sky-500 to-emerald-500 text-white hover:from-sky-400 hover:to-emerald-400 transition-colors text-sm shadow-sm shadow-sky-500/10">
                                    <i data-lucide="download" className="w-4 h-4"></i>
                                    <span>Download Full Report</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                
                <main className="flex-1">
                    <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
             
                            <section className="xl:col-span-3 2xl:col-span-3">
                                <div className="mb-4">
                                    <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Diagnosis Details</h1>
                                    <p className="text-sm text-slate-400 mt-1">Comprehensive record of the patient’s current diagnosis, tests, medicines and reports.</p>
                                </div>

                              
                                <div className="rounded-xl border border-white/10 bg-[#0C1219] overflow-hidden">
                                    <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-sky-500/20 to-emerald-500/20 ring-1 ring-white/10 flex items-center justify-center">
                                                <i data-lucide="stethoscope" className="w-5 h-5 text-sky-400"></i>
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-400">Patient</div>
                                                <div className="text-base font-medium text-white">Rahul Mehta</div>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                            Verified
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                     
                                        <div className="p-4 sm:p-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="id-card" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Aadhaar Number</div>
                                                        <div className="text-slate-200">XXXX-XXXX-1234</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="user" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Gender & Age</div>
                                                        <div className="text-slate-200">Male, 36</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="droplet" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Blood Group</div>
                                                        <div className="text-slate-200">B+</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                  
                                        <div className="p-4 sm:p-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="calendar" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Date of Diagnosis</div>
                                                        <div className="text-slate-200">18 Sep 2025, 10:45 AM</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="activity" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Diagnosis ID</div>
                                                        <div className="text-slate-200">DX-24-98172</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="shield-check" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Priority</div>
                                                        <div className="text-slate-200">Standard</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

    
                                        <div className="p-4 sm:p-6">
                                            <div className="space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="badge-check" className="w-4 h-4 text-sky-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Doctor</div>
                                                        <div className="text-slate-200">Dr. Aisha Verma</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="heart-pulse" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Specialization</div>
                                                        <div className="text-slate-200">Cardiology</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <i data-lucide="scan-line" className="w-4 h-4 text-slate-400"></i>
                                                    <div className="text-sm">
                                                        <div className="text-slate-400">Consultation Mode</div>
                                                        <div className="text-slate-200">In-person</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

          
                                <div className="mt-6 rounded-xl border border-white/10 bg-[#0C1219] p-5 sm:p-6 relative overflow-hidden">
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent"></div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <div className="text-sm text-slate-400">Main Medical Condition</div>
                                            <h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white mt-1">Suspected Mild Myocardial Ischemia</h2>
                                            <p className="text-sm text-slate-400 mt-2">
                                                Patient reports intermittent chest discomfort and exertional dyspnea. No acute distress at examination; vitals stable. Recommend risk stratification and imaging.
                                            </p>
                                        </div>
                                        <div className="hidden sm:flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 text-sky-300 bg-sky-500/10 px-2 py-1 text-xs">
                                                <i data-lucide="sparkles" className="w-3.5 h-3.5"></i> AI-assisted
                                            </span>
                                        </div>
                                    </div>
                                </div>

           
                                <div className="mt-6 rounded-xl border border-white/10 bg-[#0C1219]">
                                    <div className="px-5 sm:px-6 py-4 border-b border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="beaker" className="w-5 h-5 text-sky-400"></i>
                                            <h3 className="text-base font-medium text-white tracking-tight">Recommended Tests</h3>
                                        </div>
                                        <span className="text-xs text-slate-400">4 tests</span>
                                    </div>
                                    <ul className="divide-y divide-white/10">
                                      <li className="p-4 sm:p-5 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                                    <i data-lucide="x-ray" className="w-4.5 h-4.5 text-slate-300"></i>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white">Chest X-Ray (PA View)</div>
                                                    <div className="text-xs text-slate-400">Baseline imaging</div>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border border-sky-500/30 text-sky-300 bg-sky-500/10">Requested</span>
                                        </li>
                                        <li className="p-4 sm:p-5 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                                    <i data-lucide="brain-circuit" className="w-4.5 h-4.5 text-slate-300"></i>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white">Cardiac MRI</div>
                                                    <div className="text-xs text-slate-400">Assess perfusion/viability</div>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border border-amber-500/30 text-amber-300 bg-amber-500/10">Pending Report</span>
                                        </li>
                                        <li className="p-4 sm:p-5 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                                    <i data-lucide="activity-square" className="w-4.5 h-4.5 text-slate-300"></i>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white">ECG</div>
                                                    <div className="text-xs text-slate-400">Resting 12-lead</div>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">Completed</span>
                                        </li>
                                        <li className="p-4 sm:p-5 flex items-center justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
                                                    <i data-lucide="droplets" className="w-4.5 h-4.5 text-slate-300"></i>
                                                </div>
                                                <div>
                                                    <div className="text-sm text-white">Blood Test Panel</div>
                                                    <div className="text-xs text-slate-400">Troponin I, Lipid profile</div>
                                                </div>
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium border border-sky-500/30 text-sky-300 bg-sky-500/10">Requested</span>
                                        </li>
                                    </ul>
                                </div>

                              
                                <div className="mt-6 rounded-xl border border-white/10 bg-[#0C1219] overflow-hidden">
                                    <div className="px-5 sm:px-6 py-4 border-b border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="pill" className="w-5 h-5 text-emerald-400"></i>
                                            <h3 className="text-base font-medium text-white tracking-tight">Prescribed Medicines</h3>
                                        </div>
                                        <span className="text-xs text-slate-400">Updated today</span>
                                    </div>
                      
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full text-sm">
                                            <thead>
                                                <tr className="text-left text-slate-400 border-b border-white/10">
                                                    <th className="px-5 sm:px-6 py-3 font-medium">Medicine Name</th>
                                                    <th className="px-5 sm:px-6 py-3 font-medium">Frequency</th>
                                                    <th className="px-5 sm:px-6 py-3 font-medium">Duration</th>
                                                    <th className="px-5 sm:px-6 py-3 font-medium">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/10">
                                                <tr className="hover:bg-white/5">
                                                    <td className="px-5 sm:px-6 py-4 text-white">Aspirin 75 mg</td>
                                                    <td className="px-5 sm:px-6 py-4">1 time/day</td>
                                                    <td className="px-5 sm:px-6 py-4">30 days</td>
                                                    <td className="px-5 sm:px-6 py-4 text-slate-300">Post-meal; monitor for GI discomfort</td>
                                                </tr>
                                                <tr className="hover:bg-white/5">
                                                    <td className="px-5 sm:px-6 py-4 text-white">Atorvastatin 20 mg</td>
                                                    <td className="px-5 sm:px-6 py-4">1 time/day</td>
                                                    <td className="px-5 sm:px-6 py-4">90 days</td>
                                                    <td className="px-5 sm:px-6 py-4 text-slate-300">Night dose; recheck lipid panel in 6 weeks</td>
                                                </tr>
                                                <tr className="hover:bg-white/5">
                                                    <td className="px-5 sm:px-6 py-4 text-white">Metoprolol 25 mg</td>
                                                    <td className="px-5 sm:px-6 py-4">2 times/day</td>
                                                    <td className="px-5 sm:px-6 py-4">30 days</td>
                                                    <td className="px-5 sm:px-6 py-4 text-slate-300">Hold if HR &lt; 60 bpm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                           
                                <div className="mt-6 rounded-xl border border-white/10 bg-[#0C1219]">
                                    <div className="px-5 sm:px-6 py-4 border-b border-white/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <i data-lucide="file-stack" className="w-5 h-5 text-sky-400"></i>
                                            <h3 className="text-base font-medium text-white tracking-tight">Reports & Documents</h3>
                                        </div>
                                        <div className="text-xs text-slate-400">Uploaded by lab and care team</div>
                                    </div>
                                    <div className="p-4 sm:p-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              
                                            <div className="group rounded-lg border border-white/10 bg-[#0B1117] hover:bg-white/5 transition-colors">
                                                <div className="p-4 flex items-start gap-3">
                                                    <div className="h-10 w-10 rounded-md bg-red-500/10 ring-1 ring-red-500/30 flex items-center justify-center">
                                                        <i data-lucide="file-text" className="w-5 h-5 text-red-300"></i>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-white truncate">Blood Test Report.pdf</div>
                                                        <div className="text-xs text-slate-400">Uploaded 18 Sep 2025</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2">
                                                    <button data-preview="pdf" data-name="Blood Test Report.pdf" className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                                        <i data-lucide="eye" className="w-4 h-4"></i> Preview
                                                    </button>
                                                    <button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                                        <i data-lucide="download" className="w-4 h-4"></i> Download
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="group rounded-lg border border-white/10 bg-[#0B1117] hover:bg-white/5 transition-colors">
                                                <div className="p-4 flex items-start gap-3">
                                                    <div className="h-10 w-10 rounded-md bg-sky-500/10 ring-1 ring-sky-500/30 flex items-center justify-center">
                                                        <i data-lucide="image" className="w-5 h-5 text-sky-300"></i>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-white truncate">Chest X-Ray.png</div>
                                                        <div className="text-xs text-slate-400">Uploaded 17 Sep 2025</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2">
                                                    <button data-preview="image" data-name="Chest X-Ray.png" data-src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop" className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                                        <i data-lucide="eye" className="w-4 h-4"></i> Preview
                                                    </button>
                                                    <button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                                        <i data-lucide="download" className="w-4 h-4"></i> Download
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="group rounded-lg border border-white/10 bg-[#0B1117] hover:bg-white/5 transition-colors">
                                                <div className="p-4 flex items-start gap-3">
                                                    <div className="h-10 w-10 rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
                                                        <i data-lucide="file-text" className="w-5 h-5 text-emerald-300"></i>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="text-sm font-medium text-white truncate">ECG Summary.pdf</div>
                                                        <div className="text-xs text-slate-400">Uploaded 16 Sep 2025</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-3 border-t border-white/10 flex items-center gap-2">
                                                    <button data-preview="pdf" data-name="ECG Summary.pdf" className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                                        <i data-lucide="eye" className="w-4 h-4"></i> Preview
                                                    </button>
                                                    <button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                                        <i data-lucide="download" className="w-4 h-4"></i> Download
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="rounded-xl border border-white/10 bg-[#0C1219] p-5 sm:p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <i data-lucide="notepad-text" className="w-5 h-5 text-slate-300"></i>
                                            <h3 className="text-base font-medium text-white tracking-tight">Doctor’s Comments</h3>
                                        </div>
                                        <div className="text-sm text-slate-300 leading-6">
                                            - Encourage graded exercise; avoid strenuous activity for 2 weeks.<br />
                                            - Begin primary prevention measures and dietary modifications.<br />
                                            - Return immediately if chest pain worsens or is persistent for &gt; 10 minutes.
                                        </div>
                                    </div>
                                    <div className="rounded-xl border border-white/10 bg-[#0C1219] p-5 sm:p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <i data-lucide="message-square" className="w-5 h-5 text-slate-300"></i>
                                            <h3 className="text-base font-medium text-white tracking-tight">Patient Remarks</h3>
                                        </div>
                                        <div className="text-sm text-slate-300 leading-6">
                                            “Mild tightness after climbing stairs; improves with rest. No dizziness or palpitations.”
                                        </div>
                                    </div>
                                  
                                    <div className="rounded-xl border border-white/10 bg-[#0C1219] p-5 sm:p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            <i data-lucide="sparkles" className="w-5 h-5 text-sky-300"></i>
                                            <h3 className="text-base font-medium text-white tracking-tight">AI Simplified Remarks</h3>
                                        </div>
                                        <div className="text-sm text-slate-300 leading-6">
                                            - Your symptoms suggest a mild, temporary reduction in blood flow to the heart.<br />
                                            - Keep activities light (easy walks) for 1–2 weeks and take medicines as prescribed.<br />
                                            - Get urgent help if chest pain lasts more than 10 minutes, spreads to arm/jaw, or causes breathlessness.
                                        </div>
                                        <p className="text-xs text-slate-500 mt-3">Note: This summary is for understanding only and does not replace medical advice.</p>
                                    </div>
                                </div>
                            </section>

                          
                            <aside className="xl:col-span-2 2xl:col-span-2">
                                <div className="sticky top-20">
                                    <div className="mb-4">
                                        <h2 className="text-xl tracking-tight font-semibold text-white">Mobile Preview</h2>
                                        <p className="text-sm text-slate-400">How this page adapts on smaller screens.</p>
                                    </div>

                                    <div className="mx-auto w-[380px] max-w-full rounded-[28px] border border-white/10 bg-black/40 p-3">
                                        <div className="rounded-[22px] overflow-hidden border border-white/10 bg-[#0B1117]">
                                          
                                            <div className="p-4 border-b border-white/10">
                                                <div className="flex items-center justify-between">
                                                    <button className="inline-flex items-center gap-2 px-2 py-1.5 rounded-md border border-white/10 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors text-xs">
                                                        <i data-lucide="arrow-left" className="w-4 h-4"></i>
                                                        <span>Back</span>
                                                    </button>
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-1.5 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition">
                                                            <i data-lucide="share-2" className="w-4 h-4"></i>
                                                        </button>
                                                        <button className="p-1.5 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition">
                                                            <i data-lucide="printer" className="w-4 h-4"></i>
                                                        </button>
                                                        <button className="px-2.5 py-1.5 rounded-md bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-xs hover:from-sky-400 hover:to-emerald-400">
                                                            <i data-lucide="download" className="w-4 h-4"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <div className="text-xs text-slate-400">Diagnosis</div>
                                                    <div className="text-lg tracking-tight font-semibold text-white">Rahul Mehta</div>
                                                    <div className="mt-1 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                                        Verified
                                                    </div>
                                                </div>
                                            </div>

                           
                                            <div className="divide-y divide-white/10">
                                                <div className="p-4">
                                                    <div className="text-[11px] text-slate-400 mb-2">Patient</div>
                                                    <div className="grid grid-cols-2 gap-3">
                                                        <div>
                                                            <div className="text-[11px] text-slate-400">Aadhaar</div>
                                                            <div className="text-sm text-white">XXXX-XXXX-1234</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[11px] text-slate-400">Gender & Age</div>
                                                            <div className="text-sm text-white">Male, 36</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[11px] text-slate-400">Blood</div>
                                                            <div className="text-sm text-white">B+</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-[11px] text-slate-400">Date</div>
                                                            <div className="text-sm text-white">18 Sep 2025</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4">
                                                    <div className="text-[11px] text-slate-400 mb-1">Doctor</div>
                                                    <div className="text-sm text-white">Dr. Aisha Verma</div>
                                                    <div className="text-xs text-slate-400">Cardiology</div>
                                                </div>

                                                <div className="p-4">
                                                    <div className="text-[11px] text-slate-400">Main Condition</div>
                                                    <div className="text-base tracking-tight font-semibold text-white mt-0.5">Suspected Mild Myocardial Ischemia</div>
                                                    <p className="text-xs text-slate-400 mt-1">
                                                        Intermittent chest discomfort; recommend risk stratification and imaging.
                                                    </p>
                                                </div>

                                                <div className="p-4">
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-[11px] text-slate-400">Recommended Tests</div>
                                                        <span className="text-[10px] text-slate-500">4</span>
                                                    </div>
                                                    <div className="mt-2 space-y-2">
                                                        <div className="flex items-center justify-between">
                                                            <div className="text-sm text-white">Chest X-Ray</div>
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-sky-500/30 text-sky-300 bg-sky-500/10">Requested</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div className="text-sm text-white">Cardiac MRI</div>
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-amber-500/30 text-amber-300 bg-amber-500/10">Pending</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div className="text-sm text-white">ECG</div>
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">Completed</span>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div className="text-sm text-white">Blood Panel</div>
                                                            <span className="text-[10px] px-2 py-0.5 rounded-full border border-sky-500/30 text-sky-300 bg-sky-500/10">Requested</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4">
                                                    <div className="text-[11px] text-slate-400 mb-2">Medicines</div>
                                                    <div className="space-y-2">
                                                        <div className="rounded-md border border-white/10 p-3">
                                                            <div className="text-sm text-white">Aspirin 75 mg</div>
                                                            <div className="text-[11px] text-slate-400">1 time/day • 30 days</div>
                                                            <div className="text-[11px] text-slate-300 mt-1">Post-meal</div>
                                                        </div>
                                                        <div className="rounded-md border border-white/10 p-3">
                                                            <div className="text-sm text-white">Atorvastatin 20 mg</div>
                                                            <div className="text-[11px] text-slate-400">1 time/day • 90 days</div>
                                                            <div className="text-[11px] text-slate-300 mt-1">Night dose</div>
                                                        </div>
                                                        <div className="rounded-md border border-white/10 p-3">
                                                            <div className="text-sm text-white">Metoprolol 25 mg</div>
                                                            <div className="text-[11px] text-slate-400">2 times/day • 30 days</div>
                                                            <div className="text-[11px] text-slate-300 mt-1">Hold if HR &lt; 60</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4">
                                                    <div className="text-[11px] text-slate-400 mb-2">Reports & Documents</div>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center justify-between rounded-md border border-white/10 p-3">
                                                            <div className="flex items-center gap-2 min-w-0">
                                                                <i data-lucide="file-text" className="w-4 h-4 text-red-300"></i>
                                                                <span className="text-sm text-white truncate">Blood Test Report.pdf</span>
                                                            </div>
                                                            <button className="p-1.5 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition">
                                                                <i data-lucide="download" className="w-4 h-4"></i>
                                                            </button>
                                                        </div>
                                                        <div className="flex items-center justify-between rounded-md border border-white/10 p-3">
                                                            <div className="flex items-center gap-2 min-w-0">
                                                                <i data-lucide="image" className="w-4 h-4 text-sky-300"></i>
                                                                <span className="text-sm text-white truncate">Chest X-Ray.png</span>
                                                            </div>
                                                            <button className="p-1.5 rounded-md border border-white/10 hover:bg-white/5 hover:border-white/20 transition">
                                                                <i data-lucide="eye" className="w-4 h-4"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="p-4">
                                                    <div className="text-[11px] text-slate-400">Notes</div>
                                                    <div className="text-xs text-slate-300 mt-1">
                                                        Graded exercise; dietary changes; return if symptoms worsen.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-lg border border-white/10 bg-[#0C1219] p-4">
                                        <div className="text-sm text-slate-300">
                                            Tip: On small screens, tables convert into compact cards for readability.
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </main>

  
                <div className="md:hidden sticky bottom-0 z-40 backdrop-blur bg-[#0A0F14]/80 border-t border-white/10">
                    <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between gap-2">
                        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors text-sm">
                            <i data-lucide="share-2" className="w-4 h-4"></i>
                            Share
                        </button>
                        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-slate-200 hover:text-white hover:border-white/20 hover:bg-white/5 transition-colors text-sm">
                            <i data-lucide="printer" className="w-4 h-4"></i>
                            Print
                        </button>
                        <button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-gradient-to-r from-sky-500 to-emerald-500 text-white hover:from-sky-400 hover:to-emerald-400 transition-colors text-sm shadow-sm shadow-sky-500/10">
                            <i data-lucide="download" className="w-4 h-4"></i>
                            Report
                        </button>
                    </div>
                </div>
            </div>

      
            <div id="previewModal" className="hidden fixed inset-0 z-50">
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 h-full w-full flex items-center justify-center p-4">
                    <div className="w-full max-w-3xl rounded-xl border border-white/10 bg-[#0C1219] overflow-hidden shadow-2xl">
                        <div className="px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <i data-lucide="file" className="w-5 h-5 text-slate-300"></i>
                                <span id="previewTitle" className="text-sm text-white">Preview</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button id="modalDownload" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                    <i data-lucide="download" className="w-4 h-4"></i> Download
                                </button>
                                <button id="closeModal" className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20 transition">
                                    <i data-lucide="x" className="w-4 h-4"></i> Close
                                </button>
                            </div>
                        </div>
                        <div className="p-4 sm:p-6">
                            <div id="previewContent" className="aspect-[16/9] w-full rounded-lg border border-white/10 bg-[#0B1117] flex items-center justify-center overflow-hidden">
                     
                                <div className="flex flex-col items-center text-slate-400">
                                    <i data-lucide="file-search" className="w-10 h-10 mb-2"></i>
                                    <p className="text-sm">Select a document to preview</p>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-3">Note: Previews are illustrative and may differ from actual lab formats.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiGenerated