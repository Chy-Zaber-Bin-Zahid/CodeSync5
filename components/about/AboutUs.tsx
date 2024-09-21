import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-2 w-4/5 mx-auto my-32">
      <h1 className="">
        About <span className="text-red-800">US</span>{" "}
      </h1>
      <p className="text-2xl text-slate-700 leading-relaxed">
        Welcome to XYZ Ltd! We are a leading software consultancy firm that
        specializes in providing cutting-edge solutions to businesses of all
        sizes. Our team of expert consultants is committed to delivering
        personalized and innovative services that meet the unique needs of our
        clients.
      </p>
      <div className="w-3/5 mx-auto h-96 relative my-8">
        <Image
          src="/assets/about/TeamIllustration.jpg"
          alt="Team Illustration"
          layout="fill"
          objectFit="contain"
          className="rounded-lg absolute inset-0"
          blurDataURL="data:..."
          placeholder="blur"
        />
      </div>
      <p className="text-2xl leading-relaxed text-slate-700">
        At <span className="text-red-800">XYZ Solutions</span> , we believe that
        technology can transform businesses, and our goal is to help our clients
        harness the power of technology to achieve their strategic objectives.
        We have a passion for innovation and a dedication to excellence, and we
        strive to provide the best possible service to every client we work
        with.
      </p>
    </div>
  );
};

export default AboutUs;
