import React, { useState, useEffect, useRef, Suspense } from "react";
import termsData from "../../data/termsData";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import { ClipLoader } from "react-spinners";


import FormPage from "../../components/FormComponent/FormPage";

const LazySignUpForm = React.lazy(() => import('./LazySignUpForm'));

const SignUpPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  


  const navigate = useNavigate();
  const passwordRef = useRef(null);

  useEffect(() => {
  
    if (passwordRef.current && passwordRef.current.value) {
      setShowPassword(false);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onHandleSubmit = (values, actions) => {
    console.log("Form values:", values);
  

    if (values.name && values.email && values.phoneNumber && values.password) {
      navigate("/homepage");
    } else {
      console.error('Error registering user: Missing required fields.');
    
    }
    actions.setSubmitting(false);
  };
  
  

  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handlePopupClick = (contentKey) => {
    setPopupContent(termsData[contentKey]);
    setShowPopup(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const phoneInput = document.querySelector(
        'input[name="phoneNumberUniqueName"]'
      );
      if (phoneInput && phoneInput.value !== phoneNumber) {
        const numericPhone = phoneInput.value.replace(/\D+/g, "");
        setPhoneNumber(numericPhone);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [phoneNumber]);

  useEffect(() => {
    const setAriaLabelInterval = setInterval(() => {
      const selectedFlag = document.querySelector('.react-tel-input .selected-flag');
      if (selectedFlag && !selectedFlag.getAttribute('aria-label')) {
        selectedFlag.setAttribute('aria-label', 'Toggle country code dropdown');
      }
    }, 500); 

    return () => clearInterval(setAriaLabelInterval);
  }, []);

  return (
    <FormPage
      title="Sign Up"
      isSignUp={true}
      handlePopupClick={handlePopupClick}
      showPopup={showPopup}
      popupContent={popupContent}
      onClosePopup={() => setShowPopup(false)}
    >
       <Suspense fallback={<div className="flex justify-center items-center h-full"><ClipLoader color="#123abc" size={50} /></div>}>
      <LazySignUpForm  
          onHandleSubmit={onHandleSubmit}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
          setPasswordStrength={setPasswordStrength}
          passwordStrength={passwordStrength}
          passwordRef={passwordRef}
          rememberMe={rememberMe}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Suspense>
    </FormPage>
  );
};

export default SignUpPage;
