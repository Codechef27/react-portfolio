import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';
import { MdClose } from 'react-icons/md'



function ContactForm({ showForm, setShowForm }) {
  const [formState, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(` Name, Email & Message required!`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormData({
        ...formState,
        [event.target.name]: event.target.value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
    // setShowForm((prev) => !prev)
  }

  return (
    <>
      {showForm ? (
        <section className="formCont container">
          <form id="contact-form" onSubmit={handleSubmit} className="form my-2">
            <h5 className="formTitle">Contact</h5>

            <label htmlFor="name"></label>
            <input
              name="name"
              type="text"
              placeholder="Name:"
              defaultValue={name}
              onBlur={handleChange}
            ></input>

            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="Enter email:"
              defaultValue={email}
              onBlur={handleChange}
            ></input>

            <label htmlFor="message"></label>
            <textarea
              className="text-area"
              name="message"
              placeholder="Send me a message:"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            ></textarea>
            <MdClose
              className="closeModal"
              aria-label="Close modal"
              onClick={() => setShowForm((prev) => !prev)}
            />

            {errorMessage && (
              <div>
                <p className="errorText">{errorMessage}</p>
              </div>
            )}
            <button className="formBtn" type="submit">
              Submit
            </button>
          </form>
        </section>
      ) : null}
    </>
  );
}

export default ContactForm; 