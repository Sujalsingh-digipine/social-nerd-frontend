import { useState } from "react";

type AlertType = "success" | "error" | "info" | "warning";

interface AlertOptions {
  type: AlertType;
  message: string;
  duration?: number; 
}

export const useAlert = () => {
  const [alert, setAlert] = useState<AlertOptions | null>(null);

  const showAlert = (
    type: AlertType,
    message: string,
    duration: number = 3
  ) => {
    setAlert({ type, message, duration });

    if (duration > 0) {
      setTimeout(() => {
        hideAlert();
      }, duration * 1000);
    }
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return {
    alert,
    showAlert,
    hideAlert,
    isVisible: alert !== null,
  };
};
