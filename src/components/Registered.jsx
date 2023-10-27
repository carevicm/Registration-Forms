import { useNavigate } from "react-router-dom";
import Button from "./ButtonComponent/Button";

function WelcomeRegistered() {
  const navigate = useNavigate();
  
  const onHandleSubmit = () => {
    navigate("/signin");
  };

  return (
    <main 
    className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#475569] via-[#3f3f46] to-[#44403c]"
    aria-labelledby="welcomeTitle"
  >
    <section className="flex flex-col w-full max-w-xl items-center p-6 bg-white bg-opacity-80 rounded-3xl shadow-lg backdrop-blur-md">
      <h1 id="welcomeTitle" className="text-base text-[#5473E3] pb-4">
        Welcome! You are registered
      </h1>
      <Button type="button" onClick={onHandleSubmit}>
        Log Out
      </Button>
    </section>
  </main>
  );
}

export default WelcomeRegistered;
