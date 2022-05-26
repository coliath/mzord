
export default function JobCreate() {
  return (
    <div>
      <ul className="flex items-center space-x-3 px-8 py-6 font-semibold text-slate-500">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </li>
        <li className="text-gray-400">&rsaquo;</li>
        <li>
          Recorded Future
        </li>
        <li className="text-gray-400">&rsaquo;</li>
        <li>
          Create A Job Post
        </li>
      </ul>

      <div className="p-8 bg-white rounded shadow-md grid grid-cols-6 gap-6">
        <div className="-ml-8 -my-8 py-8 pl-8 border-t-4 border-yellow-400">
          <img src="/assets/recordedfuture.png" alt="logo"/>
          <p className="mt-2 text-gray-400 text-sm">
            London, United Kingdom
          </p>
          <ul className="mt-6 space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-600 text-semibold">
                Software Sales
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 text-semibold">
                5-30M Revenue
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-600 text-semibold">
                50-100 Employees
              </p>
            </li>
          </ul>
        </div>
        
        {/* create */}
        <div className="col-span-3">
          <h1 className="text-2xl font-bold">
            Create a New Job Post!
          </h1>
          <p>This is a free service for QuotaPath Members</p>
          
          <form className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <label className="label">Job Title</label>
              <input className="input" placeholder="Job Title"></input>
            </div>
            <div>
              <label className="label">Location</label>
              <input className="input" placeholder="Job Title"></input>
            </div>
            <div className="col-span-full">
              <label className="label">Job Description</label>
              <input className="input pb-32" placeholder="Write your description here"></input>
            </div>
            <div>
              <label className="label">Job Title</label>
              <input className="input" placeholder="Job Title"></input>
            </div>
            <div>
              <label className="label">Job Title</label>
              <input className="input" placeholder="Job Title"></input>
            </div>
            <div>
              <label className="label">Job Title</label>
              <input className="input" placeholder="Job Title"></input>
            </div>
            <div>
              <label className="label">Job Title</label>
              <input className="input" class="textarea input" placeholder="Job Title"></input>
            </div>
          </form>
        </div>

        {/* comp plan */}
        <div className="-ml-8 pl-8 col-span-2">

          <div>
            <label className="label">Attached Comp Plan::</label>

            <select id="sortBy" className="input bg-slate-700 border-slate-700 pr-6 text-white" class="input">
              <option>Account Executive New Biz</option>
              <option>Account Executive Reoccuring</option>
              <option>Sales Development Rep</option>
              <option>Sales Manager</option>
            </select>
          </div>

          <div className="mt-6 flex justify-between text-sm">
            <button className="px-4 py-2 text-slate-500 border-2 border-gray-200 rounded leading-tight font-semibold hover:opacity-50">
              Industry Comparison &uarr;
            </button>
            <div className="flex justify-end space-x-3">
              <button className="px-4 py-2 bg-teal-500 rounded font-semibold text-white hover:bg-blue-600">
                Comp Plan &darr;
              </button>
              <button className="px-4 py-2 bg-blue-900 rounded font-bold text-white hover:opacity-50">
                Apply Now &rarr;
              </button>
            </div>
          </div>

          <ul className="mt-6 grid grid-cols-3 leading-none border-b border-gray-300">
            <li className="p-3 border-t border-gray-300">
              <b className="text-sm font-semibold text-gray-500 tracking-normal">On-Time Earnings:</b>
              <p className="font-bold">$140,000/yr</p>
            </li>
            <li className="p-3 border-t border-x border-gray-300">
              <b className="text-sm font-semibold text-gray-500 tracking-normal">Avg Sales Price:</b>
              <p className="font-bold">$20,000/yr</p>
            </li>
            <li className="p-3 border-t border-gray-300">
              <b className="text-sm font-semibold text-gray-500 tracking-normal">Base:Variable</b>
              <p className="font-bold">50:50</p>
            </li>

            <li className="p-3 border-t border-gray-300">
              <b className="text-sm font-semibold text-gray-500 tracking-normal">Annualized Quota:</b>
              <p className="font-bold">$700,000</p>
            </li>
            <li className="p-3 border-t border-x border-gray-300">
              <b className="text-sm font-semibold text-gray-500 tracking-normal">Monthly Multiplier</b>
              <p className="font-bold">5x</p>
            </li>
            <li className="p-3 border-t border-gray-300">
              <b className="text-sm font-semibold text-gray-500 tracking-normal">Deals per Period</b>
              <p className="font-bold">15+</p>
            </li>
          </ul>

          <ul className="py-4">
            <li>
              <h3 className="uppercase font-bold text-gray-400 text-xs">Quota Paths</h3>
            </li>
           
            <li className="mt-2 flex px-4 py-2 rounded flex-between bg-slate-500 border border-slate-7 text-white text-bold">
              <p className="font-semibold">
                Monthly Base
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xs font-semibold">
                  view details
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>              
              </div>
            </li>

            <li className="mt-2 flex px-4 py-2 rounded flex-between bg-slate-500 border border-slate-7 text-white text-bold">
              <p className="font-semibold">
                Quarterly Bonus
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-xs font-semibold">
                  view details
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>              
              </div>
            </li>


          </ul>

          <div className="mt-4">
            <img src="/assets/graph.png" alt="graph" className="border-2 border-gray-300 rounded"/>
          </div>
        </div>

      </div>

    </div>
  )
}