
const Footer = () => {
    return (
        <div className="bg-[#06091A] text-white">

            <div className="flex justify-center lg:pb-5 lg:pt-60 ">
            <img className=" " src="/src/assets/logo-footer.png" alt="" />

            </div>
            <div className="footer sm:footer-horizontal  lg:pl-64 p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="bg-gradient-to-r from-[#f9a8d4] to-[#fbbf24] text-black px-7 py-2 rounded-r-xl">Subscribe</button>
      </div>
    </fieldset>
  </form>
                </nav>
            </div>

            <hr className=" text-gray-400" />

            <div className="footer sm:footer-horizontal footer-center  p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hikmahh IT</p>
  </aside>
</div>
        </div>
    );
};

export default Footer;