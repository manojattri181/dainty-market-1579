import React from "react";

const TrackSection = () => {
  return (
    <div>
      <div className="lg:ml-44 lg:w-3/4 md:text-center sm:text-center md:w-full m-auto sm:w-full py-11">
        <section>
          <div className="flex flex-col md:flex-row">
            <div>
              <img
                src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/phone.png"
                alt="Time Tracking Integration with your phone"
                width="90%"
              />
            </div>
            <div className="text-left mt-32">
              <h2 className=" font-bold text-4xl mt-6 mb-6">
                Track Everywhere
              </h2>
              <p className=" font-medium text-base text-gray-500 mx-0.5">
                Track your time everywhere you work with our mobile apps for iOS
                and Android.
              </p>
              <div className="flex flex-row">
                <div className="shadow-xl w-10 h-10 rounded-lg bg-gray-900 mt-8  mx-1.5">
                  <img
                    className="no-mobile"
                    src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/home/download-section/playstore.png"
                    alt="PlayStore"
                  />
                </div>
                <div className="shadow-xl w-10 h-10 rounded-lg bg-gray-900 mt-8  mx-1.5">
                  <img
                    className="w-8 h-8 rounded-full mt-1 mx-1"
                    src="https://www.pngitem.com/pimgs/m/198-1985099_apple-app-store-icon-free-png-and-svg.png"
                    // width="70%"
                    alt="PlayStore"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrackSection;
