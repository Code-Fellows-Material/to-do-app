
import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});


  const handleSubmit = (event) => {
    console.log("IN FORM: handleSubmit() VALUES:", values)
    if (event) event.preventDefault();
    let decoupledValue = JSON.parse(JSON.stringify(values));
    callback(decoupledValue);
  };

  const handleChange = (event) => {
      event.persist();
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));  
  };

  const handleSlide = (val) => {
    setValues(values => ({ ...values, difficulty: val}));
  }

  return {
    handleSlide,
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;