import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from "formik";

const Contact = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();

        alert("Thank you for contacting me!");
    };

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    phoneNum: "",
                    email: "",
                    message: "",
                }} 
                onSubmit={handleSubmit}
            >
                <Form>
                    <FormGroup row>
                        <Label htmlFor="firstName">
                            First Name
                        </Label>
                        <Col>
                            <Field
                                className="form-control"
                                name="firstName"
                                placeholder="First Name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastName">
                            Last Name
                        </Label>
                        <Col>
                            <Field
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="phoneNum">
                            Phone
                        </Label>
                        <Col>
                            <Field
                                className="form-control"
                                name="phoneNum"
                                placeholder="Phone"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Col>
                            <Field
                                className="form-control"
                                name="email"
                                placeholder="Email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message">
                            Message
                        </Label>
                        <Col>
                            <Field
                                className="form-control"
                                name="message"
                                as="textarea"
                                rows="3"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col>
                            <Button type="submit">
                                Send
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
        </div>
    );
};

export default Contact;
