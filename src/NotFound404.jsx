import React, { useEffect, useState } from "react";

function NotFound404() {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="container">
        <img
          src="public/404 Error-amico.png"
          className="img-fluid w-50"
          alt=""
        />
        {showMessage && (
          <p className="text-center">
            <strong> This page does not exist</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default NotFound404;
