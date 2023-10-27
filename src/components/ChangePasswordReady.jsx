import { useNavigate } from "react-router-dom";
import Button from "./ButtonComponent/Button";

function Registered() {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate("/signin");
  };

  return (
    <main 
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#475569] via-[#3f3f46] to-[#44403c]"
    aria-labelledby="passwordUpdatedTitle"
  >
    <section className="flex flex-col w-full max-w-xl items-center p-6 bg-white bg-opacity-80 rounded-3xl shadow-lg backdrop-blur-md">
      <h1 id="passwordUpdatedTitle" className="text-base text-[#5473E3] mb-4">
        Your password has been updated!
      </h1>

      <Button onClick={handleGoBack} className="w-full">
        Go back to Sign In Page
      </Button>
    </section>
  </main>
  );
}

export default Registered;
