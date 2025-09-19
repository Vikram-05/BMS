import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { TbMedicineSyrup } from "react-icons/tb";
import { RiTestTubeFill } from "react-icons/ri";
import { TbReportMedical } from "react-icons/tb";
import { MdOutlinePreview } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";

function AiGenerated() {
  return (
    <div div className="min-h-screen bg-black text-neutral-100 antialiased overflow-x-hidden" style={{
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"
    }}>

      <div className="relative ">
        <div className="absolute inset-0 pointer-events-none">
          <div className=" absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className=" absolute top-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
        </div>
        <div className="relative z-10">
        </div>
      </div>
      <main className="relative mx-auto max-w-7xl px-4 py-8 ">

        <header className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">

              <button id="shareBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-400 transition">
                <IoIosArrowBack />
                Back
              </button>
            </div>

            {/* logo */}
            {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900/70 shadow-[0_0_0_2px_rgba(0,0,0,0.4),0_0_24px_rgba(168,85,247,0.18)]">
              <span className="text-sm font-semibold tracking-tight text-cyan-300">HC</span>
            </div> */}
            <div className="flex flex-col">
              <span className="text-sm text-slate-400">SwasthyaId</span>
              <span className="text-base font-medium tracking-tight text-slate-200/90">Diagnosis Details</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.04)]">Active Diagnosis</span>
          </div>
        </header>


        <div className="mb-4 group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="text-sm flex  gap-2 items-start justify-center">
                  <span className="font-medium text-slate-100 tracking-tight">Patient : </span>
                  <span className="text-slate-400">Aarav Mehta</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm flex  gap-2 items-start justify-center">
                  <span className="font-medium text-slate-100 tracking-tight">Age : </span>
                  <span className="text-slate-400">42</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm flex  gap-2 items-start justify-center">
                  <span className="font-medium text-slate-100 tracking-tight">Gender : </span>
                  <span className="text-slate-400">male</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm flex  gap-2 items-start justify-center">
                  <span className="font-medium text-slate-100 tracking-tight">Blood groop : </span>
                  <span className="text-slate-400">O+</span>
                </div>
              </div>

            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center gap-2">
                <i data-lucide="stethoscope" className="h-4 w-4 text-emerald-300"></i>
                <div className="text-sm">
                  <span className="text-slate-400">Doctor</span>
                  <span className="ml-2 font-medium text-slate-100 tracking-tight">Dr. Jane Doe</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <i data-lucide="clock-4" className="h-4 w-4 text-fuchsia-300"></i>
                <div className="text-sm text-slate-300">Diagnosed on Sep 18, 2025</div>
              </div>
            </div>
          </div>
        </div>


        <div className="relative ">
          <div className="absolute inset-0 pointer-events-none">

            <div className=" absolute top-140 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
          </div>
          <div className="relative z-10">
          </div>
        </div>


        <div className=" grid grid-cols-1 gap-8 lg:grid-cols-12">



          <section className="order-1 lg:order-2 lg:col-span-12">
            <div className="mb-4  relative rounded-xl ring-1 ring-white/10 p-4  border border-white/10 bg-gradient-to-b from-white/5 
shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
              <div className="mb-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Diagnosis Summary</h2>
                <p className="mt-2 text-sm text-slate-400">Overview of the condition, prescriptions, and recommended investigations</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center gap-2">
                  <i data-lucide="activity" className="h-5 w-5 text-cyan-300"></i>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-100 text-center">Hypertension — Stage II</h3>
                </div>
              </div>

              <div className='flex gap-3  justify-center flex-wrap lg:flex-2'>
                <div className="mb-2 lg:w-[45%] w-full">
                  <div className="mb-2 flex items-center gap-2">
                    <FaUserDoctor className="h-4 w-4 text-fuchsia-300" />
                    <span className="text-sm font-medium text-slate-300">Doctor’s Comments</span>
                  </div>
                  <div className="mt-3 text-sm rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                    BP remains elevated across multiple readings. Recommend lifestyle modifications (low-salt diet, regular aerobic exercise, stress reduction). Monitor BP twice daily and maintain a log. Immediate review if headaches, chest pain, or visual changes occur.
                  </div>

                  <div className='mt-3'>
                    <div className="mb-2 flex items-center gap-2">
                      <RiTestTubeFill className="h-4 w-4 text-cyan-300" />
                      <span className="text-sm font-medium text-slate-300">Recommended Tests</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">ECG</span>
                      <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">Echocardiogram</span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">Chest X-Ray</span>
                      <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">Lipid Profile</span>
                      <span className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">HbA1c</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 lg:w-[50%] w-full">
                  <div className="mb-2 flex items-center gap-2">
                    <TbMedicineSyrup className="h-4 w-4 text-fuchsia-300" />
                    <span className="text-sm font-medium text-slate-300">Medicines Prescribed</span>
                  </div>
                  <ul className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                    <li className="grid grid-cols-1 gap-2  p-3 sm:grid-cols-3 border-b-1">
                      <div className="text-slate-200">Medicine Name</div>
                      <div className="text-slate-400">Time</div>
                      <div className="text-slate-400">Duration</div>
                    </li>
                    <li className="grid grid-cols-1 gap-2  p-3 sm:grid-cols-3">
                      <div className="text-slate-200">Amlodipine 5 mg</div>
                      <div className="text-slate-400">Once daily</div>
                      <div className="text-slate-400">6 weeks</div>
                    </li>
                    <li className="grid grid-cols-1 gap-2  p-3 sm:grid-cols-3">
                      <div className="text-slate-200">Metoprolol 25 mg</div>
                      <div className="text-slate-400">Once daily (morning)</div>
                      <div className="text-slate-400">6 weeks</div>
                    </li>
                    <li className="grid grid-cols-1 gap-2  p-3 sm:grid-cols-3">
                      <div className="text-slate-200">Atorvastatin 20 mg</div>
                      <div className="text-slate-400">Once daily (night)</div>
                      <div className="text-slate-400">8 weeks</div>
                    </li>
                  </ul>
                </div>
              </div>


            </div>

            {/* AI GENERATED */}
            <div className="mb-4 relative rounded-xl ring-1 ring-white/10 p-4 border border-white/10 bg-gradient-to-b from-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 py-2">AI Simplified Report</h2>
                </div>
                <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-200">Patient-friendly</span>
              </div>

              {/* AI Output */}
              <div id="ai-result">
                <div className="mt-3 text-sm rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                  <ul className="space-y-3 text-[15px] leading-relaxed text-slate-200">
                    <li className="flex gap-2"><span>🧑‍⚕️</span> <span>Your blood pressure is higher than normal. We’ll work to bring it down safely over the next few weeks.</span></li>
                    <li className="flex gap-2"><span>💊</span> <span>Medicines help relax blood vessels and steady your heart rate. Take them at the same time every day.</span></li>
                    <li className="flex gap-2"><span>🧪</span> <span>Blood tests will check cholesterol and sugar levels. These can affect blood pressure and heart health.</span></li>
                    <li className="flex gap-2"><span>🩻</span> <span>ECG/X-Ray help us see how your heart is working. These are quick and painless.</span></li>
                    <li className="flex gap-2"><span>📉</span> <span>Record your BP twice daily and note headaches, chest pain, or vision changes. Contact us if these occur.</span></li>
                  </ul>
                </div>

                {/* 🧠 Structured Insights */}
                <div className="  mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                  {/* Health Overview */}
                  <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
                    <h4 className="text-slate-100 text-lg font-semibold mb-2">🧠 Health Overview</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Condition: Hypertension Stage II</li>
                      <li>• Risk: Cardiovascular, Kidney Stress</li>
                      <li>• BMI: 28.7 (Overweight)</li>
                      <li>• Last BP Reading: 158/96 mmHg</li>
                    </ul>
                  </div>

                  {/* Medication Guidance */}
                  <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
                    <h4 className="text-slate-100 text-lg font-semibold mb-2">💊 Medication Guidance</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Amlodipine: Reduces vessel tension</li>
                      <li>• Metoprolol: Slows heart rate</li>
                      <li>• Atorvastatin: Controls cholesterol</li>
                      <li>• Best taken: Morning (except statin at night)</li>
                    </ul>
                  </div>

                  {/* Medical History & Risks */}
                  <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
                    <h4 className="text-slate-100 text-lg font-semibold mb-2">🧾 History & Risk Factors</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>• Family history of heart disease</li>
                      <li>• Sedentary lifestyle</li>
                      <li>• Mild elevated HbA1c in last test</li>
                      <li>• LDL cholesterol borderline high</li>
                    </ul>
                  </div>

                  {/* Vital Trend Summary (Optional - Simulated) */}
                  <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 md:col-span-2">
                    <h4 className="text-slate-100 text-lg font-semibold mb-2">📊 Vital Trends (Past Month)</h4>
                    <ul className="grid grid-cols-2 gap-3 text-slate-300 text-sm">
                      <li>• BP: 150–160 / 90–100 mmHg</li>
                      <li>• HR: 82–88 bpm</li>
                      <li>• LDL: 138 mg/dL</li>
                      <li>• HbA1c: 6.1%</li>
                    </ul>
                  </div>

                  {/* Follow-up Plan */}
                  <div className=" rounded-lg bg-white/5 ring-1 ring-white/10 p-4 xl:col-span-3">

                    <h4 className="text-slate-100 text-lg font-semibold mb-2">📋 Next Steps</h4>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li>✅ Continue medication consistently.</li>
                      <li>📅 Next appointment: Oct 15, 2025 (Cardiology)</li>
                      <li>🧪 Upcoming tests: Lipid Profile, HbA1c, ECG</li>
                      <li>💬 Contact physician if symptoms worsen.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


            {/* LAB REPORT */}
            <div className="mb-4 group relative rounded-xl ring-1 ring-white/10 p-4 hover:ring-cyan-400/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition border border-white/10 bg-gradient-to-b from-white/5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
            
              {/* it is for gradient */}
              <div className="absolute ">
                <div className="absolute inset-0 pointer-events-none">

                  <div className=" absolute -top-40 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
                </div>
                <div className="relative z-10">
                </div>
              </div>

              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TbReportMedical data-lucide="folder-open" className="h-5 w-5 text-fuchsia-300" />
                  <h2 className="text-2xl font-semibold tracking-tight text-slate-100">Lab Reports & Documents</h2>
                </div>
                <span className="text-xs text-slate-400">3 reports</span>
              </div>

              <div className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">



                <div className="group rounded-xl  p-3 transition-colors hover:border-cyan-500/30">
                  <div className="aspect-video overflow-hidden rounded-lg ">
                    <img src="https://www.researchgate.net/publication/324433237/figure/tbl1/AS:631610596667451@1527599109852/Complete-blood-count-CBC-results.png" alt="ECG" className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-200 tracking-tight">Blood Test - CBC</p>
                      <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-200">PDF</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                        <MdOutlinePreview className="h-3.5 w-3.5" /> View
                      </button>
                      <button className="-cursor-pointer inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs text-cyan-200 hover:border-cyan-400/60 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                        <FaDownload className="h-3.5 w-3.5" /> Download
                      </button>
                    </div>
                  </div>
                </div>

                <div className="group rounded-xl  p-3 transition-colors hover:border-cyan-500/30">
                  <div className="aspect-video overflow-hidden rounded-lg ">
                    <img src="https://c8.alamy.com/comp/ECYB87/normal-electrocardiogram-ECYB87.jpg" alt="ECG" className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-200 tracking-tight">ECG</p>
                      <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-200">PDF</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                        <MdOutlinePreview className="h-3.5 w-3.5" /> View
                      </button>
                      <button className="-cursor-pointer inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs text-cyan-200 hover:border-cyan-400/60 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                        <FaDownload className="h-3.5 w-3.5" /> Download
                      </button>
                    </div>
                  </div>
                </div>
                <div className="group rounded-xl  p-3 transition-colors hover:border-cyan-500/30">
                  <div className="aspect-video overflow-hidden rounded-lg ">
                    <img src="https://www.aafp.org/content/dam/brand/aafp/pubs/afp/issues/2019/0415/p490-t1.gif" alt="ECG" className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-200 tracking-tight">Kidney Stone</p>
                      <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-[10px] text-cyan-200">PDF</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="cursor-pointer inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:border-slate-700 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800/70">
                        <MdOutlinePreview className="h-3.5 w-3.5" /> View
                      </button>
                      <button className="-cursor-pointer inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs text-cyan-200 hover:border-cyan-400/60 hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/20">
                        <FaDownload className="h-3.5 w-3.5" /> Download
                      </button>
                    </div>
                  </div>
                </div>


              </div>


            </div>



          </section>
        </div>
      </main>
    </div>

  )
}

export default AiGenerated