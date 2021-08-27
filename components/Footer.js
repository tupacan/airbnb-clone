function Footer() {
    return (
        <footer className="px-5 py-10 bg-gray-100 border-t">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-start space-y-2 pb-5">
                    <h5 className="uppercase font-semibold text-sm text-gray-900">About</h5>
                    <p className=" cursor-pointer hover:underline">How Airbnb works</p>
                    <p className=" cursor-pointer hover:underline">Newsroom</p>
                    <p className=" cursor-pointer hover:underline">Airbnb 2021</p>
                    <p className=" cursor-pointer hover:underline">Investors</p>
                    <p className=" cursor-pointer hover:underline">Airbnb Plus</p>
                    <p className=" cursor-pointer hover:underline">Airbnb Luxe</p>
                    <p className=" cursor-pointer hover:underline">HotelTonight</p>
                    <p className=" cursor-pointer hover:underline">Airbnb for Work</p>
                    <p className=" cursor-pointer hover:underline">Made possible by Hosts</p>
                    <p className=" cursor-pointer hover:underline">Careers</p>
                    <p className=" cursor-pointer hover:underline">Founders' Letter</p>
                </div>

                <div className="flex flex-col items-start space-y-2 border-t-2 sm:border-t-0 py-5">
                    <h5 className="uppercase font-semibold text-sm text-gray-900">Community</h5>
                    <p className=" cursor-pointer hover:underline">Diversity & Belonging</p>
                    <p className=" cursor-pointer hover:underline">Against Discrimination</p>
                    <p className=" cursor-pointer hover:underline">Accessibility</p>
                    <p className=" cursor-pointer hover:underline">Airbnb Associates</p>
                    <p className=" cursor-pointer hover:underline">Frontline Stays</p>
                    <p className=" cursor-pointer hover:underline">Guest Referrals</p>
                    <p className=" cursor-pointer hover:underline">Gift cards</p>
                    <p className=" cursor-pointer hover:underline">Airbnb.org</p>
                </div>

                <div className="flex flex-col items-start space-y-2 border-t-2 sm:border-t-0 py-5">
                    <h5 className="uppercase font-semibold text-sm text-gray-900">Host</h5>
                    <p className=" cursor-pointer hover:underline">Host your home</p>
                    <p className=" cursor-pointer hover:underline">Host an Online Experience</p>
                    <p className=" cursor-pointer hover:underline">Host an Experience</p>
                    <p className=" cursor-pointer hover:underline">Responsible hosting</p>
                    <p className=" cursor-pointer hover:underline">Resource Center</p>
                    <p className=" cursor-pointer hover:underline">Community Center</p>
                </div>
                <div className="flex flex-col items-start space-y-2 border-t-2 sm:border-t-0 py-5">
                    <h5 className="uppercase font-semibold text-sm text-gray-900">Support</h5>
                    <p className=" cursor-pointer hover:underline">Our COVID-19 Response</p>
                    <p className=" cursor-pointer hover:underline">Help Center</p>
                    <p className=" cursor-pointer hover:underline">Cancellation options</p>
                    <p className=" cursor-pointer hover:underline">Neighborhood Support</p>
                    <p className=" cursor-pointer hover:underline">Trust & Safety</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
