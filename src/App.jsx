import { useState } from 'react';

function App() {
  const [useCoins, setUseCoins] = useState(false);

  return (
    <div className="checkout-page">
      {/* Header */}
      <header className="header">
        {/*<div className="container-fluid px-4 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-4">
              <div className="logo d-flex align-items-center gap-2">
                <span className="logo-text">Kapebara</span>
              </div>
              <nav className="d-flex gap-4">
                <a href="#home" className="nav-link">Home</a>
                <a href="#menu" className="nav-link">Menu</a>
                <a href="#order" className="nav-link">Your Order</a>
              </nav>
            </div>
            <div className="d-flex align-items-center gap-3">
              <button className="icon-btn"> bell icon</button>
              <button className="icon-btn user-btn">user icon</button>
              <button className="btn btn-dark rounded-pill px-4">Log Out</button>
            </div>
          </div>
        </div>*/}
      </header>

      <div className="container py-4">
        {/* Back button and title */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <button className="back-btn">←</button>
          <h1 className="checkout-title mb-0">Checkout</h1>
        </div>

        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-6">
            {/* Delivery Details Card */}
            <div className="card p-4 mb-4">
              <h3 className="section-title mb-4">Delivery Details</h3>
              
              <div className="d-flex gap-3 mb-3">
                <span className="icon">'motor icon'</span>
                <div>
                  <div className="text-muted">Receive by:</div>
                  <div>[Delivery Day], [Delivery Time]</div>
                </div>
              </div>

              <div className="d-flex gap-3 mb-4">
                <span className="icon">'pin icon'</span>
                <div>
                  <div className="text-muted">Deliver to</div>
                  <div>[Landmark]</div>
                </div>
              </div>

              <h4 className="section-subtitle mb-3">Additional Details</h4>
              
              <div className="mb-3">
                <label className="form-label">Address Details (Optional)</label>
                <input 
                  type="text" 
                  className="form-control form-input"
                  placeholder="Building name, unit, floor"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Delivery Instructions (Optional)</label>
                <input 
                  type="text" 
                  className="form-control form-input"
                  placeholder="Notes to Rider"
                />
              </div>

              <button className="btn btn-dark w-100 py-3 rounded-pill">
                Save Details
              </button>
            </div>

            {/* Payment Details Card */}
            <div className="card p-4 mb-4">
              <h3 className="section-title mb-4">Payment Details</h3>
              
              <div className="d-flex justify-content-between align-items-center mb-4 clickable">
                <span>Payment Method</span>
                <span className="text-muted d-flex align-items-center gap-2">
                  Select payment method →
                </span>
              </div>
            </div>

            {/* Vouchers and Discount Card */}
            <div className="card p-4">
              <h3 className="section-title mb-4">Vouchers and Discount</h3>
              
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-input"
                  placeholder="Enter Voucher or Discount Code"
                />
              </div>

              <a href="#vouchers" className="text-decoration-none text-dark">
                View available vouchers and discount
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            {/* Order Summary Card */}
            <div className="card p-4 mb-4">
              <h3 className="section-title mb-4">Order Summary</h3>
              
              <div className="d-flex justify-content-between mb-3">
                <span>[N]x</span>
                <span>[Item Name]</span>
                <span>[PRICE].00</span>
              </div>
            </div>

            {/* Order Totals Card */}
            <div className="card p-4">
              <h3 className="section-title mb-4">Order Totals</h3>
              
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>[PRICE].00</span>
              </div>

              <div className="mb-2">
                <div className="d-flex justify-content-between">
                  <span>Discount</span>
                  <span>-[PRICE].00</span>
                </div>
                <small className="text-muted">[type of voucher discount]</small>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Delivery fee discount</span>
                <span>[PRICE].00</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Delivery fee discount</span>
                <span>-[PRICE].00</span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>VAT</span>
                <span>[PRICE].00</span>
              </div>

              <div className="coins-section p-3 mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <div className="fw-bold">Kapebara Coins</div>
                    <small className="text-muted">Use [x] coins to save [discount price]</small>
                  </div>
                  <div className="form-check form-switch">
                    <input 
                      className="form-check-input coins-toggle" 
                      type="checkbox" 
                      id="coinsSwitch"
                      checked={useCoins}
                      onChange={(e) => setUseCoins(e.target.checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <span>Coins discount</span>
                <span>-[PRICE].00</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4 fs-4 fw-bold">
                <span>TOTAL</span>
                <span>[PRICE].00</span>
              </div>

              <button className="btn btn-dark btn-lg w-100 py-3 rounded-pill">
                Place Order - [Price].00
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .checkout-page {
          min-height: 100vh;
          background-color: #f5f5f5;
        }

        .header {
          background-color: #fff;
          border-bottom: 1px solid #e0e0e0;
        }

        .logo-icon {
          font-size: 1.5rem;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d2d2d;
        }

        .nav-link {
          color: #2d2d2d;
          text-decoration: none;
          font-weight: 500;
        }

        .nav-link:hover {
          color: #000;
        }

        .icon-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
        }

        .user-btn {
          background-color: #2d2d2d;
          color: white;
          border-radius: 50%;
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-btn {
          background: none;
          border: none;
          font-size: 2rem;
          cursor: pointer;
          padding: 0;
          line-height: 1;
        }

        .checkout-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d2d2d;
        }

        .card {
          background: white;
          border: none;
          border-radius: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2d2d2d;
        }

        .section-subtitle {
          font-size: 1.2rem;
          font-weight: 600;
          color: #2d2d2d;
        }

        .icon {
          font-size: 1.5rem;
        }

        .form-input {
          border-radius: 0.5rem;
          border: 1px solid #e0e0e0;
          padding: 0.75rem 1rem;
        }

        .form-input:focus {
          border-color: #2d2d2d;
          box-shadow: 0 0 0 0.2rem rgba(45, 45, 45, 0.1);
        }

        .clickable {
          cursor: pointer;
          transition: all 0.2s;
        }

        .clickable:hover {
          background-color: #f8f8f8;
          border-radius: 0.5rem;
          padding: 0.5rem;
          margin: -0.5rem;
        }

        .coins-section {
          background-color: #f8f8f8;
          border-radius: 0.75rem;
        }

        .coins-toggle {
          transform: scale(1.5);
          cursor: pointer;
        }

        .btn-dark {
          background-color: #2d2d2d;
          border: none;
          font-weight: 600;
        }

        .btn-dark:hover {
          background-color: #1a1a1a;
        }

        .gap-4 {
          gap: 1.5rem;
        }

        .gap-3 {
          gap: 1rem;
        }

        .gap-2 {
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default App;