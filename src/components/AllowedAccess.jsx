function AllowedAccess() {
  
  return (
    <main 
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#475569] via-[#3f3f46] to-[#44403c]"
      aria-labelledby="allowedAccessTitle"
    >
      <section className="flex flex-col w-full max-w-xl items-center p-6 bg-white bg-opacity-80 rounded-3xl shadow-lg backdrop-blur-md">
        <h1 id="allowedAccessTitle" className="text-2xl font-semibold text-gray-800">Welcome! Allowed Access</h1>
      </section>
    </main>
  );
}

export default AllowedAccess;
