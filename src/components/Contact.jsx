import React,{useState } from "react";
import { useForm,} from "react-hook-form";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const [userName,setUserName]=useState("");
const [userSubject,setUserSubject]=useState("");
const [userMessage,setUserMessage]=useState("");
  const onSubmit = (data, e) => {
    e.target.reset();
    // setUserData(JSON.stringify(data));
    console.log("Message submited: " + JSON.stringify(data));
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                // {...register("name", { required: true })}
                type="text"
                name="name"
                onChange={(e)=>setUserName(e.target.value)}
                placeholder="YOUR NAME"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col */}

          {/* <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div> */}
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                // {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                onChange={(e)=>setUserSubject(e.target.value)}
              />
              {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                // {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
                onChange={(e)=>setUserMessage(e.target.value)}
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span>
                <a  className="button-text" style={{textDecoration:"none"}}href={`mailto:shahidafridics@gmail.com?subject= ${userSubject}&body=User Name : ${userName}%0D%0A%0D%0A Message : ${userMessage}`}>Send E-Mail</a>
                {/* <a href={`mailto:support@beddwell.com?body= Order Id : ${getid.orderId} %0D%0A%0D%0AProduct Name :  ${data.productName} %0D%0A%0D%0ATotal Price : ₹  ${data.totalPrice}`} style={{textDecoration:"underline"}}> <span class="badge bg-danger">Cancel Order</span></a> */}
                </span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
