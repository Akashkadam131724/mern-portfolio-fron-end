import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

const ContactForm = () => {
  const server = import.meta.env.VITE_API_SERVER;
  const [loading, setLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const registerUser = async (formData) => {
    let submitData = JSON.stringify({
      ...formData,
      fname: formData.firstName,
      lname: formData.lastName,
    });
    delete submitData.firstName;
    delete submitData.lastName;
    try {
      const response = await fetch(`${server}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: submitData,
      });

      if (!response.ok) {
        // Handle non-successful responses
        throw new Error("Registration failed");
      }

      // Handle the successful registration
      const data = await response.json();
      console.log("User registered successfully:", data);
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  // Call the registerUser function with your form data

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate the field
    let fieldErrors = {};
    if (name === "firstName" && !value.trim()) {
      fieldErrors.firstName = "First name is required";
    } else if (name === "lastName" && !value.trim()) {
      fieldErrors.lastName = "Last name is required";
    } else if (name === "email") {
      if (!value.trim()) {
        fieldErrors.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        fieldErrors.email = "Invalid email address";
      }
    } else if (name === "message" && !value.trim()) {
      fieldErrors.message = "Message is required";
    } else if (name === "mobile") {
      if (!value.trim()) {
        fieldErrors.mobile = "Mobile number is required";
      } else if (!/^\d{10}$/i.test(value)) {
        fieldErrors.mobile =
          "Invalid mobile number. Please enter a 10-digit number.";
      }
    }

    // Set the errors for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors,
    }));

    // Clear the errors if the input is now valid
    if (Object.keys(fieldErrors).length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    const formErrors = {};
    if (!formData.firstName.trim()) {
      formErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      formErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }
    if (!formData.mobile.trim()) {
      formErrors.mobile = "Mobile number is required";
    }

    // If there are errors, setErrors and return
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await registerUser(formData);

      // Set submission message on success
      setSubmissionMessage("Form submitted successfully!");

      // Reset form and errors after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        mobile: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error.message);

      // Set submission message on failure
      setSubmissionMessage("Form submission failed. Please try again.");
    } finally {
      // Reset loading state after form submission, whether success or failure
      setLoading(false);
    }
  };

  return (
    <main id="form">
      <div className="container section section-pad">
        <h1 className="section-title text-center">Contact with me</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6">
            <Form
              className="border p-4 rounded-3 bg-light"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  isInvalid={!!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  isInvalid={!!errors.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="secondary"
                type="submit"
                className="w-100"
                disabled={loading}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" role="status" />
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
            {submissionMessage && (
              <div
                className={`mt-3 text-center text-${
                  submissionMessage.includes("failed") ? "danger" : "success"
                }`}
              >
                {submissionMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
