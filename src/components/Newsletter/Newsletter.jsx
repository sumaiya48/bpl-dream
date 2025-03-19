
const Newsletter = () => {
    return (
        <div className="border-2 p-3 rounded-xl w-11/12 mb-3 lg:w-9/12 mx-auto bg-white bg-opacity-30">
            <div className="text-center space-y-1 lg:space-y-3 py-10 lg:py-24 rounded-xl bg-[url('/src/assets/bg-shadow.png')] bg-cover bg-white">
            <h3 className="text-xl lg:text-3xl font-bold">Subscribe to our Newsletter</h3>
            <p className="text-xs lg:text-lg text-gray-400">Get the latest updates and news right in your inbox!</p>
            <div className="space-y-2">
            <input type="text" placeholder="Enter your name" className="input input-md ml-1 lg:mr-4" />
            <button className="bg-gradient-to-r from-[#f9a8d4] to-[#fbbf24] text-black px-7 py-2 rounded-xl">
    Subscribe
</button>

            </div>
        </div>
        </div>
    );
};

export default Newsletter;