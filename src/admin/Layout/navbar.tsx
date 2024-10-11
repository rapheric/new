
const AdminNavbar = () => {
  return (
    
    <header className="bg-slate-400 shadow p-4 flex items-center justify-between">
      <div className="">
      <h1 className="text-xl font-bold">DLMP ADMIN</h1>
      </div>
    <div>
      <div className=" ">
      <form className="flex">
            <input
              type="text"
             
              className="flex-1 p-2 bg-white text-white rounded-l-md focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md">
              Search
            </button>
          </form>
    </div>
    </div>
    </header>
  );
};

export default AdminNavbar;
