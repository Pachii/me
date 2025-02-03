import { useState } from "react";

interface Props {
  email: string;
}

export default function ContactButton({ email }: Props) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Click-to-copy button */}
      <button
        type="button"
        onClick={copyEmail}
        className="cursor-pointer hover:bg-sky-200 transition-colors duration-300 focus:outline-none"
      >
        {copied ? email + " (copied)" : email}
      </button>
    </div>
  );
}
