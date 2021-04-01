export interface form {
  country: string;
  city: string;
  street: string;
  addressnumber: number;
  
}

export const checkLocation = (e: any, form: form) => {
  const span = document.querySelector(".span_" + e.target.name);

  if (!e.target.value) {
    if (span) span.innerHTML = "All fields are required";
    return true;
  }
  span.innerHTML="";
  

};
export const validateLocation = (e: any, form: form) => {

    const val=/^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$/;
    return val.test(form.country)


};


