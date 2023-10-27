import React, { useState, useCallback, Suspense } from "react";
import termsData from "../../data/termsData";
import FormPage from "../../components/FormComponent/FormPage";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const LazySignInForm = React.lazy(() => import('./LazySignInForm'));

const SignInPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const onHandleSubmit = (values, actions) => {
    if (values.email && values.password) {
      navigate("/homepage");
    } else {
      if (!values.email) {
        actions.setFieldError("email", "Username is required");
      }
      if (!values.password) {
        actions.setFieldError("password", "Password is required");
      }
    }
    actions.setSubmitting(false);
  };

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);
  const handleCheckboxChange = (event) => {
    setRememberMe(event.target.checked);
  };
  const handlePopupClick = useCallback((contentKey) => {
    setPopupContent(termsData[contentKey]);
    setShowPopup(true);
  }, []);

  return (
    <React.Fragment>
      <FormPage
        title="Sign In"
        isSignUp={false}
        handlePopupClick={handlePopupClick}
        showPopup={showPopup}
        popupContent={popupContent}
        onClosePopup={() => setShowPopup(false)}
      >
      <Suspense
          fallback={
            <div className="flex justify-center items-center h-full">
              <ClipLoader color="#123abc" size={50} />
            </div>
          }
        >
  <LazySignInForm 
    onHandleSubmit={onHandleSubmit}
    showPassword={showPassword}
    togglePasswordVisibility={togglePasswordVisibility}
    setPasswordStrength={setPasswordStrength}
    passwordStrength={passwordStrength}
    rememberMe={rememberMe}
    handleCheckboxChange={handleCheckboxChange}
  />
</Suspense>

      </FormPage>
    </React.Fragment>
  );
};

export default SignInPage;
