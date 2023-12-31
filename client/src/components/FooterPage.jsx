import React, { useEffect, useState } from "react";
import { FaRegCopyright } from "react-icons/fa";

export default function FooterPage() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <FaRegCopyright /> <span>TechTonicTales | {currentYear}</span>
    </footer>
  );
}
