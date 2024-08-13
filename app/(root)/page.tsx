import Image from "next/image";

const Home = () => {
  return (
    <div className="relative bg-no-repeat bg-cover w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src="https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/articles/lead-images/aural%20learning.jpeg.webp"
          alt="bg image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative top-1/3 z-30 text-white ml-4 xs:ml-16">
          <h1 className="text-4xl">Language Tester</h1>
          <h3 className="text-4xl text-yellow my-6 xl:my-10">
            შეამოწმე შენი ცოდნა ნებისმიერ <br />
            დროს!
          </h3>
          <p className="text-xl max-w-[450px]">
            რუსულის გრამატიკის და ლექსიკონის სწრაფი ტესტირება, პასუხებითა და
            სწრაფი შედეგით!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
