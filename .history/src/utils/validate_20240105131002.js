const Validate = (email) => {
    const emailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(email);
    const passwordValid =/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if (!emailValid) return "Email is not valid";
    if (!passwordValid) return "Password is not valid";
  
    return null;
  };
  export default Validate;