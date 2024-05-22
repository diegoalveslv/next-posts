"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ children }) {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Creating post...</p>;
  }

  return <button>{children}</button>;
}
