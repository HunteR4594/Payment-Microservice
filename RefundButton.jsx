import React, { useState } from "react";
import "./refund.css";

const RefundButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="refund-btn" onClick={() => setOpen(true)}>
        Refund
      </button>

      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Confirm Refund</h2>
            <p>Are you sure you want to refund this transaction?</p>

            <div className="modal-actions">
              <button className="confirm-btn">Confirm</button>
              <button className="cancel-btn" onClick={() => setOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RefundButton;
