import {useState} from 'react';
import emailjs from '@emailjs/browser';
import { BsSend } from "react-icons/bs";
import { motion } from "framer-motion";
import Modal from "../Components/Modal.tsx";
import Swal from 'sweetalert2';



import './Styles/ContactMe.scss'
import MainImage from "./Images/ContactMe/MainImage.png"
import Keyboard from "./Images/ContactMe/keyboard.png"
import Mail from "./Images/ContactMe/mail.png"



function ContactMe() {


  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });

  const [dataSend, setDataSend] = useState(false);
  const [openModal, setopenModal] = useState(false);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {
      user_name: formData.user_name.trim() === "",
      user_email: formData.user_email.trim() === "",
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some(Boolean);
  };
  

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredFields = {
      user_name: "name",
      user_email: "email",
      message: "message",
    };

    const missingFields = Object.entries(requiredFields)
    .filter(([field]) => !formData[field as keyof typeof formData].trim())
    .map(([, label]) => label);

    if (missingFields.length > 0) {
      Swal.fire({
        icon: "warning",
        title: "Missing information",
        text: `Please enter your ${missingFields.join(", ")}.`,
        confirmButtonText: "OK",
      });

      return;
    }

    setDataSend(true);
    setopenModal(true);

    if (!validate()) return;

    emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      console.log("SUCCESS!");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

      setDataSend(false);

      setTimeout(() => {
        setopenModal(false);
      }, 1000);
    })


    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <motion.div  id='Contact'
    initial={{
      opacity: 0,
      x: 120
    }}
    whileInView={{
      opacity: 1,
      x: 0
    }}
    transition={{
      duration: 2,
      ease: "easeOut"
    }}
    // viewport={{ once: true }}

    className='ContacMe'> 

      <Modal dataSend={dataSend} open={openModal}  message={"Sending message"} messageTwo={"Message sent successfully!"} classModal="modal_Send"/>

      <div className='container_Title_image'> 
        <h2>Got a project in <span>mind?</span></h2>
        <img className='mainImage' src={MainImage} alt="" />
      </div>
      <div className='container_Form_images'> 
        <img className='Keyboard' src={Keyboard} alt=" " />
        <form className='formImputsContainer' onSubmit={sendEmail}>

          <div className='container_Name_Email'> 

            <div className='container_Name'> 
              {errors.user_name && dataSend && <p className='Error'>Missing name</p>}
              <p>Your name</p>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>

            <div className='container_Email'> 
              {errors.user_email && dataSend && <p className='Error'>Missing email</p>}
              <p>Your email</p>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className='container_Message'> 
            {errors.message && dataSend && <p className='Error'>Missing message</p>}
            <p>Your Message</p>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className='container_Submmit'> 
            <input disabled={dataSend} className='buttonSendFromContactMe' type="submit" value="Send Message" />
            <BsSend/>
          </div>
        </form>
        <img className='mail' src={Mail} alt=" " />
      </div>
    </motion.div>
  )
}

export default ContactMe