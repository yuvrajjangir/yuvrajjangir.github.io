import React, { useState, useEffect, useRef } from "react";
import { Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import "react-phone-number-input/style.css";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail, CgPhone } from "react-icons/cg";
import axios from "axios";

function Contact() {
  const [contactdetail, setContactDetail] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [phoneNumber, setPhoneNumber] = useState();
  const [formComplete, setFormComplete] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const countries = [
    { value: "+1", label: "United States (+1)" },
    { value: "+44", label: "United Kingdom (+44)" },
    { value: "+91", label: "India (+91)" },
  ];

  const isFormComplete = () => {
    for (const field in contactdetail) {
      if (contactdetail[field] === "") {
        return false;
      }
    }
    return true;
  };

  // const validateAndSubmit = () => {
  //   const data = {
  //     name: register('name').value,
  //     email: register('email').value,
  //     phone: register('phone').value,
  //     message: register('message').value,
  //   };

  //   if (!data.name || !data.email || !data.phone || !data.message) {
  //     toast({
  //       title: 'Please fill in all fields!',
  //       status: 'error',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   } else {
  //     // Here, you can handle form submission logic, like sending data to the backend
  //     console.log(data);
  //     toast({
  //       title: 'Form submitted!',
  //       status: 'success',
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  const fetchcontact = async (e) => {
    e.preventDefault();
    setButtonClicked(true);
    try {
      const response = await axios.post(
        "https://portfolio-backend-0mu3.onrender.com/submit-contact",
        contactdetail,
      );
      console.log(response.data);
      setContactDetail({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => {
        setShowAlert(true);

        setTimeout(() => {
          setShowAlert(false);
        }, 3000); // Hide after 3 seconds
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setContactDetail({
      ...contactdetail,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    setFormComplete(isFormComplete());
  }, [contactdetail]);

  return (
    <div id="contact">
      <Col md={12} className="home-about-social">
        <h1>
          {" "}
          Feel Free To<span className="purple"> Connect</span>
        </h1>
        <p style={{ fontSize: "20px" }}></p>
        <div id="contact-phone">
          <span className="purple">8094374577</span>
        </div>
        <div id="contact-email">
          <span className="purple">yuvijangir78@gmail.com</span>
        </div>
        <ul className="home-about-social-links">
          <li className="social-icons">
            <a
              href="mailto:yuvijangir78@gmail.com"
              target="_blank"
              rel="noreferrer"
              id="contact-email"
              className="icon-colour  home-social-icons"
            >
              <CgMail />
            </a>
          </li>
          <li style={{ marginBottom: "-0.6rem" }} className="social-icons">
            <a
              href="tel:+918094374577"
              target="_blank"
              rel="noreferrer"
              id="contact-phone"
              className="icon-colour  home-social-icons"
            >
              <CgPhone />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://github.com/yuvrajjangir"
              target="_blank"
              rel="noreferrer"
              id="contact-github"
              className="icon-colour  home-social-icons"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://twitter.com/theycallmeuvvv"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/yuvraj-jangir-646583242/"
              target="_blank"
              rel="noreferrer"
              id="contact-linkedin"
              className="icon-colour  home-social-icons"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.instagram.com/theycallmeuvvv/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </Col>
      <form onSubmit={fetchcontact}>
        <VStack className="contact-form" spacing="4" width="380px" m="auto">
          <FormControl
            className="form-control"
            isInvalid={errors.name}
            style={{ background: "white", border: "none" }}
          >
            <FormLabel htmlFor="name">Your Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              name="name"
              value={contactdetail.name}
              onChange={handleChange}
            />
            {/* <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage> */}
          </FormControl>

          <FormControl
            className="form-control"
            isInvalid={errors.email}
            style={{ background: "white", border: "none" }}
          >
            <FormLabel htmlFor="email">Your Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              name="email"
              onChange={handleChange}
              type="email"
              value={contactdetail.email}
            />
            {/* <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage> */}
          </FormControl>

          <FormControl
            className="form-control"
            isInvalid={errors.phone}
            style={{ background: "white", border: "none" }}
          >
            <FormLabel htmlFor="phone">Your Phone Number</FormLabel>
            <Input
              placeholder="Enter Your phone number"
              value={contactdetail.phone}
              onChange={handleChange}
              name="phone"
              type="tel"
            />
            {/* <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage> */}
          </FormControl>

          <FormControl
            className="form-control"
            isInvalid={errors.message}
            style={{ background: "white", border: "none" }}
          >
            <FormLabel htmlFor="message">Enter Your Message Here</FormLabel>
            <Input
              placeholder="Enter Your Message"
              name="message"
              value={contactdetail.message}
              onChange={handleChange}
              as="textarea"
            />
            {/* <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage> */}
          </FormControl>
        </VStack>
        <Button
          className={formComplete ? "submit-button show" : "submit-button"}
          type="submit"
          disabled={buttonClicked}
        >
          Submit
        </Button>
      </form>
      {showAlert && (
        <Alert
          style={{ marginTop: "-45px" }}
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          mt={4}
        >
          <AlertIcon boxSize="40px" mr={0} color="white" />
          <Box style={{ marginBottom: "10px" }} color="white">
            Message sent!
          </Box>
        </Alert>
      )}
    </div>
  );
}

export default Contact;
