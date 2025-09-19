import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaBriefcaseMedical } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function AddDiagnosis({setIsClick}) {
    return (
        <div>
            {/* add diagnosis */}
            <div id="diagnosis-modal" className="fixed inset-0 z-50 ">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-x-0 top-8 mx-auto w-[95%] max-w-3xl rounded-2xl bg-slate-950/80 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl shadow-black/40">
                    <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30 flex items-center justify-center">
                                
                            <FaBriefcaseMedical  className="h-4 w-4 text-cyan-300" />
                            </div>
                            <h4 className="text-lg md:text-xl font-semibold tracking-tight text-white">Add New Diagnosis</h4>
                        </div>
                        <button id="close-modal" className="rounded-lg p-2 text-slate-300 hover:bg-white/10 ring-1 ring-white/10">
                            <IoClose onClick={()=>{setIsClick(false)}} className="h-4 w-4 text-cyan-300" />
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
                            <button onClick={()=>{setIsClick(false)}} type="button" id="close-modal-bottom" className="rounded-xl px-3.5 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/10">Cancel</button>
                            <button type="submit" className="relative inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-900 bg-cyan-300/90 hover:bg-cyan-300 focus:outline-none ring-1 ring-cyan-200 overflow-hidden">
                                <span className="absolute inset-0 -z-10 bg-cyan-500/30 blur-2xl"></span>
                                <IoMdAdd data-lucide="sparkles" className="h-4 w-4"/>
                                Add Diagnosis
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDiagnosis