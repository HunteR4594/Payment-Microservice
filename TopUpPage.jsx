import React from "react";
import { Link } from "react-router-dom"; // back navigation
import "./topUp.css";

const TopUpPage = () => {
  return (
    <div className="box">

      {/* Back Button */}
      <Link to="/" className="btn btn-outline-secondary mb-3">
        <ion-icon name="arrow-back-outline" className="me-1"></ion-icon> Back
      </Link>

      {/* Section 1: Amount */}
      <div className="card mb-3 p-3 section">
        <h5>Step 1. Top up amount</h5>
        <div className="brand mb-2">
          <span className="brand-text">Foodpanda Pay</span>
        </div>
        <p className="balance text-muted mb-2">Balance: ₱ 0.00</p>

        <div className="d-flex gap-2 mb-2">
          <button className="btn btn-outline-secondary flex-fill">₱ 200</button>
          <button className="btn btn-outline-secondary flex-fill">₱ 500</button>
          <button className="btn btn-outline-secondary flex-fill">₱ 1,000</button>
        </div>

        <input type="number" className="form-control mb-1" placeholder="₱ Enter amount" />
        <small className="text-muted">Enter an amount from ₱ 50.00</small>
      </div>

      {/* Section 2: Payment Method */}
      <div className="card mb-3 p-3 section">
        <h5>Step 2. Payment method</h5>

        {/* GCash Option */}
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="paymethod" id="gcash" />
          <label className="form-check-label d-flex align-items-center p-2 border rounded" htmlFor="gcash">
            <ion-icon name="wallet-outline" className="me-2 fs-3"></ion-icon>
            GCash (Alipay+ Partner)
          </label>
        </div>

        {/* Credit Card Option */}
        <div className="form-check mb-2">
          <input className="form-check-input" type="radio" name="paymethod" id="card" defaultChecked />
          <label className="form-check-label p-2 border rounded w-100" htmlFor="card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <ion-icon name="card-outline" className="fs-3"></ion-icon>
              <span className="fw-bold">Credit Card</span>
              <ion-icon name="logo-visa" className="fs-3 ms-3"></ion-icon>
              <ion-icon name="logo-mastercard" className="fs-3"></ion-icon>
            </div>

            <input className="form-control mb-2" placeholder="Card number" />
            <div className="d-flex gap-2 mb-2">
              <input className="form-control" placeholder="MM/YY" />
              <input className="form-control" placeholder="CVC" />
            </div>
            <input className="form-control mb-2" placeholder="Name of the card holder" />
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="saveCard" defaultChecked />
              <label className="form-check-label" htmlFor="saveCard">
                Save this card for a faster checkout next time
              </label>
            </div>
          </label>
        </div>

      </div>

      {/* Confirm Button */}
      <button className="btn btn-primary w-100" disabled>Confirm Top-up</button>
    </div>
  );
};

export default TopUpPage;
