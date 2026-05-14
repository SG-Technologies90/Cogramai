import SectionHeader from '../ui/SectionHeader';
import { cartItems, orderSummary } from '../../data/cart';

function CartItemRow({ item, index }) {
  return (
    <div className={`cart-item reveal reveal-delay-${index + 1}`}>
      <div className={`cart-thumb ${item.thumbClass}`} style={{ borderRadius: '10px' }}>
        {item.emoji}
      </div>

      <div className="cart-item-info">
        <div className="cart-item-class">{item.classLabel}</div>
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-meta">{item.meta}</div>
      </div>

      <div className="cart-item-price">{item.price}</div>
    </div>
  );
}

export default function Cart() {
  const { subtotal, bundleDiscount, scholarship, total } = orderSummary;

  return (
    <section id="cart">
      <SectionHeader
        tag="🛒 Cart"
        tagStyle={{
          borderColor: 'rgba(244,114,182,0.3)',
          background: 'rgba(244,114,182,0.05)',
          color: 'var(--neon-pink)',
        }}
        title="Your Learning"
        highlight="Bundle"
        highlightGradient="linear-gradient(90deg, var(--neon-pink), var(--neon-purple))"
        subtitle="Curate your ideal study plan — bundle subjects, save more, learn everything."
      />

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item, i) => (
            <CartItemRow key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Order Summary Panel */}
        <div className="cart-panel reveal reveal-delay-2">
          <div className="cart-panel-title">Order Summary</div>

          <div className="cart-row">
            <span>Subtotal ({cartItems.length} courses)</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="cart-row">
            <span>Bundle Discount (15%)</span>
            <span style={{ color: '#4ade80' }}>−₹{bundleDiscount.toLocaleString('en-IN')}</span>
          </div>
          <div className="cart-row">
            <span>EDSAT Scholarship</span>
            <span style={{ color: '#4ade80' }}>−₹{scholarship.toLocaleString('en-IN')}</span>
          </div>

          <div className="cart-total">
            <span className="cart-total-label">Total</span>
            <span className="cart-total-num">₹{total.toLocaleString('en-IN')}</span>
          </div>

          <div
            style={{
              marginTop: '16px',
              padding: '12px',
              borderRadius: '10px',
              background: 'rgba(34,197,94,0.06)',
              border: '1px solid rgba(34,197,94,0.2)',
              fontSize: '12px',
              color: '#4ade80',
              textAlign: 'center',
            }}
          >
            🎉 You&apos;re saving ₹{(bundleDiscount + scholarship).toLocaleString('en-IN')} with bundle + scholarship!
          </div>

          <button className="btn-unlock">🔓 Unlock Knowledge</button>

          <div
            style={{
              marginTop: '16px',
              textAlign: 'center',
              fontSize: '11px',
              color: 'var(--text-dim)',
            }}
          >
            🔒 Secure payment · 7-day money-back guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
