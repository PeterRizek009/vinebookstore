 const Newsletter = () => {
  return (
    <div className="px-10 py-16 text-center bg-gray-100">

      <h2 className="text-2xl font-bold">
        Subscribe To Our Newsletter
      </h2>

      <div className="mt-6 flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="border px-4 py-2 w-64 rounded-l-lg"
        />
        <button className="bg-red-500 text-white px-4 rounded-r-lg">
          Send
        </button>
      </div>

    </div>
  );
};


export default Newsletter;