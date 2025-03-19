import img1 from '/assets/banner-main.png'
const Banner = ({handleClaimCredit}) => {
    return (
        <div className="bg-black bg-[url('/assets/bg-shadow.png')] text-center text-white rounded-xl bg-cover space-y-3 py-10 mb-4">
           <div className="flex justify-center">
           <img src={img1} alt="" />
           </div>
            <h1 className="text-2xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p>Beyond Boundaries Beyond Limits</p>
            <button onClick={handleClaimCredit} className="bg-[#E7FE29] text-black p-3 rounded-lg">Claim Free Credit</button>
        </div>
    );
};

export default Banner;