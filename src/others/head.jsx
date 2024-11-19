// eslint-disable-next-line react/prop-types
const Head = ({ pageName }) => {
  return (
    <>
      <div className="header flex justify-between bg-slate-600 p-10 items-center">
        <h2 className="text-2xl text-slate-100">
          Hello{" "}
          <span className="text-2xl font-bold text-slate-300 uppercase">
            Nasif 👋
          </span>
        </h2>
        <h2 className="text-slate-300 text-3xl font-bold uppercase ">
          {pageName}
        </h2>
        <p className="text-red-500 font-bold text-2xl underline hover:cursor-pointer hover:text-slate-100">
          Logout
        </p>
      </div>
    </>
  );
};

export default Head;
