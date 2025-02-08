import bg from "../Rectangle 1.png"
import Image from "next/image";
import contact from "../Vector.png"
import address from "../Vector (1).png"
import location from "../Vector (2).png"


export default function Contact() {
    return (
        <div>
            {/* contact hero */}
            <div className="relative  py-16 font-[sans-serif]">
  <div className="absolute inset-0">
    <Image
      src={bg}
      alt="Background Image"
      className="w-full h-full object-cover opacity-100"
    />
  </div>
  <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      CONTACT
    </h1>
    <p className="text-lg md:text-xl mb-12">
      HOME -- Contact
    </p>
    
  </div>
</div>

            {/* contact */}
      <div className="contact-container">
        <h1>Get In Touch With Us</h1>
        <p className="contact-description">
          For more information about our products & services, please feel free to drop us an email. 
          Our staff is always here to help you out. Do not hesitate!
        </p>
  
        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info">
            <div className="contact-info-item">
              <Image src={contact} alt="Address" />
              <div>
                <h3>Address</h3>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="contact-info-item">
              <Image src={address} alt="Phone" />
              <div>
                <h3>Phone</h3>
                <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="contact-info-item">
            <Image src={location} alt="Phone" />
              <div>
                <h3>Working Time</h3>
                <p>Monday–Friday: 9:00 - 22:00<br />Saturday–Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
  
          {/* Contact Form Section */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label>Your name</label>
                <input type="text" placeholder="Abc" />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" placeholder="Abc@def.com" />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="This is optional" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Hi! I'd like to ask about"></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
  