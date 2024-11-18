import { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contact, setContact] = useState({
    title: "Contact us", // Default values to display immediately
    subTitle: "We love conversations. Let’s talk!",
  });

  const [isLoading, setIsLoading] = useState(true); // State to handle loading

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const db = getDatabase();
      const userId = new Date().getTime(); // Unique ID based on timestamp
      await set(ref(db, "contact/" + userId), {
        name,
        email,
        message,
        timestamp: new Date().toISOString(),
      });

      setFormData({ name: "", email: "", message: "" }); // Reset form after submission
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error writing to Firebase:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  // Fetch contact data from Firebase on component mount
  useEffect(() => {
    const db = getDatabase();
    const contactRef = ref(db, "contact/");

    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setContact(data); // Update state only if data is valid
      }
      setIsLoading(false); // Set loading to false after data is fetched
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-wrapper">
          <form id="contact-form" role="form" onSubmit={handleSubmit}>
            <div className="section-title">
              {/* Show title and subtitle immediately */}
              <h2>
                {contact.title || "Contact us"}{" "}
                <small>
                  {contact.subTitle || "We love conversations. Let’s talk!"}
                </small>
              </h2>
              {/* Optional loader */}
              {isLoading && <p>Loading...</p>}
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                className="form-control"
                rows={6}
                placeholder="Tell us about your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="btn btn-primary mt-3">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
