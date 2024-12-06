// src/components/Footer/IconCard.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Contact } from "./FooterList";

interface IconCardProps {
  contact: Contact;
}

export const IconCard: React.FC<IconCardProps> = ({ contact }) => {
  return (
    <a href={contact.href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={contact.icon}
        className="text-white text-xl hover:text-blue-500 transition duration-300"
      />
    </a>
  );
};
