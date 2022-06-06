
import Sidebar from "../components/sidebar.jsx";
import SubnavList from "../components/subnavList.jsx";

export default function Templates() {
  return (
    <div>
      <Sidebar />
      <SubnavList />

      <div className='pl-28 pr-12 mt-8 mb-24'>
        <div className="flex-between">
          <h1 className="font-bold text-2xl">Compensation Plan Templates</h1>
          <select className="input w-48 text-sm text-qpSlate-500 font-semibold" id="plan-sort" name="plan-sort" type="select" >
            <option>Sort by Most Recent</option>
            <option>Sort by Most Coolest</option>
            <option>Sort by Hippest</option>
          </select>
        </div> 

        {/* plans header */}
        <div className="mt-6 p-6 space-y-4 card w-full">
          <h3 className="text-sm font-semibold uppercase text-qpSlate-400">Modelable Plans</h3>
          <ul>
            <li>
              <div>

              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
