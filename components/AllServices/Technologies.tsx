const Technologies = () => {
  return (
    <div className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">
        Technologies We Use
      </h2>
      <div className="max-w-big-screen mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-primaryText bg-opacity-90 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">React JS</h3>
          <p className="text-center">
            Highly flexible front-end framework for building user interfaces.
          </p>
        </div>
        <div className="bg-primaryText bg-opacity-90 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Next JS</h3>
          <p className="text-center">
            Server-side rendering and full-stack capabilities for modern web
            apps.
          </p>
        </div>
        <div className="bg-primaryText bg-opacity-90 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Node JS</h3>
          <p className="text-center">
            A robust back-end JavaScript environment for scalable applications.
          </p>
        </div>
        <div className="bg-primaryText bg-opacity-90 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Python</h3>
          <p className="text-center">
            Amazing language for AI, machine learning, and data analysis.
          </p>
        </div>
        <div className="bg-primaryText bg-opacity-90 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">GSAP</h3>
          <p className="text-center">
            GreenSock Animation Platform for fluid animations on the web.
          </p>
        </div>
        <div className="bg-primaryText bg-opacity-90 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Postgres</h3>
          <p className="text-center">
            Powerful open-source relational database for data storage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
