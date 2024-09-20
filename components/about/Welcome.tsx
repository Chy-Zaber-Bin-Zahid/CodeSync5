import Image from "next/image";

const Welcome = () => {
  return (
    <div className="flex justify-between w-4/5 mx-auto items-center">
      <h1 className="text-slate-700 flex-1">
        Welcome to <span className="text-red-800">XYZ</span> Limited
      </h1>
      <div className=" h-96 relative flex-1">
        {" "}
        <Image
          src="/assets/about/HelloIllustration.jpg"
          alt="Hello Illustration"
          layout="fill"
          objectFit="fill"
          className="rounded-lg"
          blurDataURL="data:..."
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Welcome;
