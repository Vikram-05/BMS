import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { BsGenderMale, BsGenderFemale, } from "react-icons/bs";
import { MdOutlineBloodtype } from "react-icons/md";
import { FaIdCard, FaHeartbeat } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { BsLungs } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";
import { GiKidneys } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { UserInfo } from '../contexts/UserInfoProvider';
import axios from 'axios';
import AddDiagnosis from '../components/AddDiagnosis';


function PatientDetails() {
  
   const [isClick,setIsClick] = useState(false)
      const toggle = () => {
          if(isClick) setIsClick(false)
              else setIsClick(true)
      }

  const [PatientGender, setPatientGender] = useState("Male");
  const [allDiagnosis, setAllDiagnosis] = useState([])
  const {
    setUserId,
    setUserFullName,
    setUserEmail,
    setAadhar,
    setUserRole,
    setUserAge,
    setUserPhoneNumber,
    setUserGender, setUserBloodGroup
  } = useContext(UserInfo);

  const icons = [<FaHeartbeat />, <BsLungs />, <LuBrain />, <GiKidneys />, <FaRegEye />]

  const {
    userId,
    userFullName,
    userEmail,
    userAadhar,
    userRole,
    userAge,
    userGender,
    userPhoneNumber,
    userBloodGroup
  } = useContext(UserInfo);

  useEffect(() => {
    const userId1 = localStorage.getItem("userId");

    const isReload = async() => {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/${userId1}`);

      const { fullName, aadhar, phoneNumber, email, password, age, bloodGroup, gender, id, role } = response.data
      localStorage.setItem("userId", id);
      console.log("aa ", fullName, aadhar, phoneNumber, email, password, age, bloodGroup, gender, id, gender)
      setUserId(id);
      setUserRole(role);
      setAadhar(aadhar);
      setUserFullName(fullName);
      setUserPhoneNumber(phoneNumber);
      setUserEmail(email);
      setUserAge(age);
      setUserGender(gender);
      setUserBloodGroup(bloodGroup)
    }
    isReload()

    const getDiagnosis = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/diagnosis/patientId/${userId1}`
        );
        setAllDiagnosis(response.data);
        setAllDiagnosis(response.data);
        console.log("rd => ", response.data)
      } catch (error) {
        console.error("Error fetching diagnosis:", error);
      }
    };

    if (userId1) {
      getDiagnosis();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-neutral-100 antialiased" style={{
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji"
    }}>
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
          <div className="absolute top-40 left-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
        </div>
      </div>

      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-md bg-gradient-to-br from-cyan-400/80 to-emerald-400/80 flex items-center justify-center ring-1 ring-white/20">
              <i data-lucide="activity" className="w-4 h-4 text-black/80"></i>
            </div>
            <span className="text-[15px] font-medium text-neutral-300">Health Vault</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6">

          </nav>
          <div className="flex items-center gap-2">

            <button id="shareBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-400 transition">
              <IoIosArrowBack />
              Back
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 space-y-8">

        <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-4">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop&crop=faces" alt="Profile photo" className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover ring-1 ring-white/20" />
              <div>
                <h1 className=" translate-y-1.5 text-3xl sm:text-4xl tracking-tight font-semibold text-white">{userFullName}</h1>

              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggle} className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-400 transition">

                Add Diagnosis
              </button>

              <button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-400 transition">

                Share
              </button>
            </div>
          </div>
          
          {isClick && <AddDiagnosis/>}


          <div className="mt-6 sm:mt-8 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <FaIdCard size={25} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">AADHAAR</p>
                  <p className="text-sm font-medium text-neutral-200">{userAadhar}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  {PatientGender === "Male" ? <BsGenderMale /> : <BsGenderFemale />}
                </div>
                <div>
                  <p className="text-xs text-neutral-400">GENDER</p>
                  <p className="text-sm font-medium text-neutral-200">{userGender} ({userAge})</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <MdOutlineBloodtype size={25} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">BLOOD GROUP</p>
                  <p className="text-sm font-medium text-neutral-200">{userBloodGroup}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <AiOutlineMobile size={25} />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">PHONE</p>
                  <p className="text-sm font-medium text-neutral-200">+91 {userPhoneNumber}</p>
                  <p className="text-xs text-neutral-400">{userEmail}</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* <--------CHRONIC ILLNESS---------> */}
        <div className='flex gap-4 '>
          <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-6 w-1/2 ">
            <h3 className='font-semibold'>Chronic Illnesses</h3>
            <div className='flex mt-6 space-x-3 flex-wrap gap-3 '>
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 ">
                Diabetes
              </button>
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                Blood Pressure
              </button>
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                Cancer
              </button>
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                Artharitis
              </button>
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                Parkinsons
              </button>
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                Parkinsons
              </button>

            </div>
          </section>
          <div className='flex gap-3 w-1/2'>

            <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-6 w-1/2">
              <h3 className='font-semibold'>Allergies</h3>
              <div className='flex mt-6 space-x-3 flex-wrap gap-3 ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 ">
                  Lactose
                </button>
                <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                  Aspirin
                </button>
                <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                  Peanuts
                </button>

              </div>
            </section>
            <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-6 w-1/2">
              <h3 className='font-semibold'>Regular Medicine</h3>
              <div className='flex mt-6 space-x-3 flex-wrap gap-3 ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 ">
                  Glycomet
                </button>
                <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                  Insulin
                </button>
                <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2 mt">
                  NexovasGP
                </button>

              </div>
            </section>
          </div>
        </div>


        <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">

            <div className="md:col-span-4">

              <div className="group relative">

                <input id="searchInput" placeholder="e.g., Hypertension" className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30" />
              </div>
              <p className="mt-1 text-[11px] text-neutral-500">Search by condition or doctor</p>
            </div>

            <div className="md:col-span-2">
              <div className="relative">
                <input id="fromDate" placeholder="dd-mm-yyyy" className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30" />
              </div>
              <p className="mt-1 text-[11px] text-neutral-500">From date</p>
            </div>

            <div className="md:col-span-2">

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                  <i data-lucide="calendar" className="w-4.5 h-4.5"></i>
                </div>
                <input id="toDate" placeholder="dd-mm-yyyy" className="w-full rounded-lg border border-white/10 bg-white/5 pl-10 pr-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500/30" />
              </div>
              <p className="mt-1 text-[11px] text-neutral-500">To date</p>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center gap-3 h-full">


              </div>
            </div>

            <div className="md:col-span-2 flex items-center justify-end gap-2">
              <button id="clearBtn" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition -translate-y-2">
                Clear
              </button>
              <button id="applyBtn" className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-cyan-500/90 to-emerald-500/90 hover:from-cyan-400 hover:to-emerald-400 transition -translate-y-2">
                Apply
              </button>
            </div>
          </div>
        </section>







        <section>
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Diagnosis History</h2>
            <div className="text-sm text-neutral-400"><span id="resultsCount">{allDiagnosis.length}</span> results</div>
          </div>

          <div id="cardsGrid" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 ">
            {/* -----------DIAGNOSIS-HISTORY-CARD----------------- */}

            {allDiagnosis.map((item, index) => (
              <article
                key={index}
                data-status="verified"
                data-title={item.title}
                data-doctor={item.doctor}
                data-date={item.date}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 border border-white/10 flex items-center justify-center">
                      {icons[index % icons.length]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[18px] sm:text-lg font-semibold tracking-tight text-white">
                          {item.description}
                        </h3>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-sm text-neutral-400">
                        <span className="inline-flex items-center gap-1.5">
                          {item.doctorName}
                        </span>
                        <span className="text-neutral-600">•</span>
                        <span className="inline-flex items-center gap-1.5">
                          {new Date(item.createdAt).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 transition"
                  >
                    Full report
                  </a>
                </div>
              </article>
            ))}




          </div>
        </section>
      </main>




    </div>
  )
}

export default PatientDetails