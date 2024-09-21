import Navbar from "../components/navbar";
import DashboardCards from "./dasgbordCard";
import UserLists from "./users";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="mt-28 ml-64 w-3/4 mx-auto xls:w-[90%] xls:mx-2 xs:mx-2 xs:w-[90%]">
        <h1 className="text-center text-4xl font-extrabold text-blue-900 mb-10">
          Performance
        </h1>
        <DashboardCards />
        <div className="overflow-x-auto">
          <UserLists />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
