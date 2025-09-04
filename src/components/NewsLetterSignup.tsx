export default function NewsletterSignup() {
  return (
    <section className="bg-black text-white py-12 px-4">
      <div className="max-w-[850px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Text */}
        <div className="text-center md:text-left ">
          <h2 className="text-2xl md:text-2xl font-bold">
            Want tips & tricks to optimize your flow?
          </h2>
          <p className="mt-2 text-gray-400">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>

        {/* Email input */}
        <div className="flex gap-4 md:mt-[-20px] mr-[-45px]">
        <form className="bg-gray-300 flex w-64 max-w-md gap-3 rounded-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg text-black"
          />
        </form>
          <button
            type="submit"
            className="bg-green-500 w-24 px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Notify
          </button>
          </div>
      </div>

      {/* Privacy note */}
      <p className="text-gray-500 text-sm text-center md:pl-[40pc] sm:mt-4">
        We care about the protection of your data. Read our{" "}
        <a href="#" className="underline text-green-500">Privacy Policy</a>.
      </p>
    </section>
  );
}
