import HeaderBrowse from "../components/Header.Browse";

const BrowsePage = () => {
  return (
    <div className="bg-black overflow-y-auto min-h-[120vh]">
      <HeaderBrowse />
      <div className="w-full h-[200px] bg-slate-800"></div>
    </div>
  );
};

export default BrowsePage;
