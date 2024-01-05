const Validate = () => {
    const emailValid = "/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/";
    const passwordValid =
      "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$";
    if (!emailValid) return "Email is not valid";
    if (!passwordValid) return "Password is not valid";
  
    return null;
  };
  export default Validate;