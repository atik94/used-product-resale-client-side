import React from "react";

const Banner = () => {
  return (
    <div className="hero  bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-05/laptop-marquee-16x9.png.rendition.intel.web.864.486.png"
          className="rounded-lg w-1/2 shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Used laptop are resale here!</h1>
          <p className="py-6">
            laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal
            computer generally smaller than a briefcase that can easily be transported and conveniently used in
            temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
