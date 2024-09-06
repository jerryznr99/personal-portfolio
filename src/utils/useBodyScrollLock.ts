import { useState, useEffect } from "react";

const useBodyScrollLock = (): [boolean, () => void] => {
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const bodyStyle = document.body.style;
    bodyStyle.overflowY = isLocked ? "hidden" : "auto";
    return () => {
      bodyStyle.overflowY = "auto";
    };
  }, [isLocked]);

  const toggle = () => setIsLocked((prevState) => !prevState);

  return [isLocked, toggle];
};

export default useBodyScrollLock;
