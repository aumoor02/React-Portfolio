import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validateContactForm from "../utils/validateContactForm";

const Contact = () => {

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
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
                    agree: false,
                    contactType: "By Phone",
                    feedback: "",
                }} 
                onSubmit={handleSubmit}
                validate={validateContactForm}
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
                            <ErrorMessage name='firstName'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
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
                            <ErrorMessage name='lastName'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
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
                            <ErrorMessage name='phoneNum'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
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
                            <ErrorMessage name='email'>
                                {(msg) => <p className="text-danger">{msg}</p>}
                            </ErrorMessage>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="feedback" md="2">
                            Message
                        </Label>
                        <Col md="10">
                            <Field
                                className="form-control"
                                name="feedback"
                                as="textarea"
                                rows="12"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
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
