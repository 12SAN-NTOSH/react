import React, { useState, useEffect } from "react";
import "../styles/Admin.css";

function Admin({
  setLogo,
  setCompanyName,
  setCompanyAddress,
  setCompanyEmail,
}) {
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State for feedback message
  const [messageType, setMessageType] = useState(""); // State for message type (success/error)

  useEffect(() => {
    // Reset fields if logo is uploaded
    if (logoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setLogo(reader.result); // Set logo for Header
      };
      reader.readAsDataURL(logoFile);
    }
  }, [logoFile, setLogo]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
    }
  };

  const handleSaveChanges = () => {
    // Validate inputs and save changes
    if (name || address || email) {
      setCompanyName(name || "My Store"); // Set to default if empty
      setCompanyAddress(address || "123 Main St, City, Country"); // Set to default if empty
      setCompanyEmail(email || "info@mystore.com"); // Set to default if empty

      // Set success message
      setMessage("Changes saved successfully!");
      setMessageType("success");
    } else {
      // Set error message if no input is provided
      setMessage("Cannot save: Please fill at least one field.");
      setMessageType("error");
    }

    // Clear message after a delay
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <form>
        <div className="form-group">
          <label htmlFor="logoUpload">Upload Logo:</label>
          <input
            type="file"
            id="logoUpload"
            accept="image/*"
            onChange={handleLogoChange}
          />
        </div>
        {logoPreview && (
          <div className="logo-preview">
            <h3>Logo Preview:</h3>
            <img
              src={logoPreview}
              alt="Logo Preview"
              className="preview-image"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter company name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyAddress">Company Address:</label>
          <input
            type="text"
            id="companyAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter company address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyEmail">Company Email:</label>
          <input
            type="email"
            id="companyEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter company email"
          />
        </div>
        <button type="button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </form>

      {message && <div className={`message ${messageType}`}>{message}</div>}
    </div>
  );
}

export default Admin;
