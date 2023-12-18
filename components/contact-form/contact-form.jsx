import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
  return (
    <main id="form">
      <div className="container section section-pad">
        <h1 className="section-title text-center">Contact us</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-6">
            <Form className="border p-4 rounded-3 bg-light">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control placeholder="Enter last name" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" placeholder="message" />
              </Form.Group>

              <Button variant="secondary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;
