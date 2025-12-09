import React from "react";
import { Link } from "react-router-dom"; // for navigation
import "../style.css";

const WalletPage = () => {
  return (
    <>
      {/* FULL-WIDTH PAGE HEADER */}
      <div className="page-header d-flex align-items-center">
        <span className="back-arrow me-2">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </span>
        <h2 className="header-title mb-0">KapeBara</h2>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container-xl">
        <div className="row g-4">

          {/* LEFT COLUMN */}
          <div className="col-12 col-lg-4">

            {/* Wallet Card */}
            <div className="balance-card shadow-sm">
              <div className="balance-header">
                <div className="logo d-flex align-items-center">
                  <span className="logo-text">KapeBara Wallet</span>
                </div>
              </div>
              <div className="balance-label">Available balance</div>
              <div className="balance-amount">₱ 0.00</div>
              <div className="wallet-coins">0.00 KapeBara Coins</div>
              <a href="#" className="view-history">View coin history</a>
            </div>

            {/* Top Up Button */}
            <Link
              to="/topup"
              className="top-up-btn d-flex align-items-center justify-content-center"
            >
              <span className="wallet-icon">
                <ion-icon name="wallet-outline"></ion-icon>
              </span>
              <span className="top-up-text">Top up</span>
            </Link>

          </div>

          {/* RIGHT COLUMN */}
          <div className="col-12 col-lg-8">

            {/* Recent Activities */}
            <div className="activities-section shadow-sm mt-3">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="section-title d-flex gap-2 align-items-center">
                  <span className="icon">
                    <ion-icon name="time-outline"></ion-icon>
                  </span>
                  <span>Recent Wallet Activities</span>
                </div>
                <a href="#" className="view-all-link">View all</a>
              </div>

              {/* Example activity items */}
              <div className="activity-item d-flex">
                <div className="activity-icon"><ion-icon name="document-text-outline"></ion-icon></div>
                <div className="activity-info flex-grow-1">
                  <div className="activity-header d-flex justify-content-between">
                    <span className="activity-type">Order</span>
                    <span className="activity-date">MM-DD-YYYY</span>
                  </div>
                  <div className="activity-details">KapeBara – XBranchX</div>
                </div>
                <div className="activity-right text-end">
                  <span className="activity-amount negative">- ₱ 0.00</span>
                  <span className="arrow"><ion-icon name="chevron-forward-outline"></ion-icon></span>
                </div>
              </div>

              <div className="activity-item d-flex">
                <div className="activity-icon"><ion-icon name="reload-outline"></ion-icon></div>
                <div className="activity-info flex-grow-1">
                  <div className="activity-header d-flex justify-content-between">
                    <span className="activity-type">Top-up</span>
                    <span className="activity-date">MM-DD-YYYY</span>
                  </div>
                  <div className="activity-details">Wallet Top-up</div>
                </div>
                <div className="activity-right text-end">
                  <span className="activity-amount positive">+ ₱ 0.00</span>
                  <span className="arrow"><ion-icon name="chevron-forward-outline"></ion-icon></span>
                </div>
              </div>

              <div className="activity-item d-flex">
                <div className="activity-icon"><ion-icon name="document-text-outline"></ion-icon></div>
                <div className="activity-info flex-grow-1">
                  <div className="activity-header d-flex justify-content-between">
                    <span className="activity-type">Order</span>
                    <span className="activity-date">MM-DD-YYYY</span>
                  </div>
                  <div className="activity-details">KapeBara – XBranchX</div>
                </div>
                <div className="activity-right text-end">
                  <span className="activity-amount negative">- ₱ 0.00</span>
                  <span className="arrow"><ion-icon name="chevron-forward-outline"></ion-icon></span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default WalletPage;
