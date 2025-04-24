import React from "react";
import "./StoryLightbox.css";
interface Props {
  onClose: () => void;
}

const StoryLightbox: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="lightbox-overlay">
      <div className="lightbox-content">
        <button className="lightbox-close" onClick={onClose}>×</button>

        {/* Main Title */}
        <h1 style={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "bold", marginBottom: ".5rem" }}>
          Baby’s Day Out – A ToyBuddy Initiative
        </h1>

        {/* Section Title */}
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            borderBottom: "2px solid #3b82f6",
            display: "inline-block",
            marginBottom: ".5rem"
          }}
        >
          Why We Collect Baby Gear
        </h2>

        {/* Paragraphs */}
        <p style={{ marginBottom: ".5rem" }}>
          Your baby's outgrown gear isn't just clutter — it's comfort waiting to be shared.
        </p>
        <p style={{ marginBottom: ".5rem" }}>
          At Baby’s Day Out, we collect baby gear to support traveling families and those in need.
          We sanitize, inspect, and redistribute the gear with love and care.
        </p>
        <p style={{ marginBottom: ".5rem" }}>
          By donating or sharing your gear, you're making space at home — and making a lasting impact elsewhere.
        </p>

        {/* How You Help */}
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            borderBottom: "2px solid #3b82f6",
            display: "inline-block",
            marginBottom: ".5rem"
          }}
        >
          As Providers (How You Help)
        </h3>

        <ul style={{ paddingLeft: "1.25rem", listStyleType: "disc", lineHeight: "1.75rem", marginBottom: "1rem" }}>
          <li>
            There are entrepreneurial opportunities for local families to share their baby gear with parents travelling to their cities.
          </li>
          <li>
            Be part of CSR activities to provide and donate baby gear items to underprivileged families.
          </li>
        </ul>

        {/* Contact Info */}
        <div style={{ textAlign: "center", marginTop: ".5rem" }}>
          <p style={{ fontWeight: 500 }}>
            Visit us at:{" "}
            <a
              href="https://www.toybuddyshop.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              www.toybuddyshop.in
            </a>
          </p>
          <p style={{ fontWeight: 500, marginTop: "0.1rem" }}>
            Call Now:{" "}
            <a href="tel:8121377793" style={{ color: "#3b82f6", textDecoration: "underline" }}>
              8121377793
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryLightbox;
