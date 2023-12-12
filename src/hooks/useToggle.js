import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const toggleOn = () => setIsOpen(true)
  const toggleOff = () => setIsOpen(false)

  return {
    isOpen,
    toggleOff,
    toggleOn
  }
}
