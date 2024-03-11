const Footer = () => {
  return (
    <div className="footer py-4 px-[5%] pt-6 pb-8 md:bg-[#000000bb]">
      <p className="text-neutral-500">Questions? Call x-xxx-xxx-xxxx</p>
      <div className="text-sm grid grid-cols-footer gap-4 my-6">
        <span className="text-neutral-500">FAQ</span>
        <span className="text-neutral-500">Help Center</span>
        <span className="text-neutral-500">Netflix Shop</span>
        <span className="text-neutral-500">Terms of Use</span>
        <span className="text-neutral-500">Privacy</span>
        <span className="text-neutral-500">Cookies Preferences</span>
        <span className="text-neutral-500">Corporate Information</span>
        <span className="text-neutral-500">
          Do not Sell or Share My Personal Information
        </span>
        <span className="text-neutral-500">Ad Choices</span>
      </div>
    </div>
  );
};

export default Footer;
