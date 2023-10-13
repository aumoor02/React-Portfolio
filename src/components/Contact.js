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
        <div>
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
                        <Label htmlFor="firstName" md="2">
                            First Name
                        </Label>
                        <Col md="10">
                            <Field
                                className="form-control"
                                name="firstName"
                                placeholder="First Name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="lastName" md="2">
                            Last Name
                        </Label>
                        <Col md="10">
                            <Field
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="phoneNum" md="2">
                            Phone
                        </Label>
                        <Col md="10">
                            <Field
                                className="form-control"
                                name="phoneNum"
                                placeholder="Phone"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md="2">
                            Email
                        </Label>
                        <Col md="10">
                            <Field
                                className="form-control"
                                name="email"
                                placeholder="Email"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md="2">
                            Message
                        </Label>
                        <Col md="10">
                            <Field
                                className="form-control"
                                name="message"
                                as="textarea"
                                rows="12"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
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
