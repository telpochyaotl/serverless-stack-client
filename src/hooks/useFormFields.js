import { useState } from "react";

export default function useFormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  // returns all the fields and a function that sets the value to the
  // field in the event in the fields object
  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}
