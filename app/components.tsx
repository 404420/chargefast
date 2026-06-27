import Link from 'next/link';
import { BatteryCharging, Menu, Search, ShieldCheck, ShoppingCart, Truck } from 'lucide-react';
import { Product } from './data/products';

export function TopNav() {
  return (
    <header className="site-header">
      <div className="guarantee">« 30 DAY MONEY-BACK GUARANTEE »</div>
      <nav className="nav-bar" aria-label="Main navigation">
        <div className="nav-left">
          <Link href="/products/trio-magsafe-station">TRIO STATION <span className="hot-pill">Hot</span></Link>
          <Link href="/shop">BUY 2 GET 1 FREE <span className="deal-pill">Deal</span></Link>
          <Link href="/shop">SHOP ALL</Link>
        </div>
        <Link className="brand" href="/">CHARGEFAST</Link>
        <div className="nav-actions">
          <Search size={20} aria-hidden="true" />
          <span>USD</span>
          <button className="track-button">TRACK YOUR ORDER</button>
          <ShoppingCart size={22} aria-hidden="true" />
          <Menu className="mobile-menu" size={24} aria-hidden="true" />
        </div>
      </nav>
      <Link href="/shop" className="promo-strip">« BUY 2 GET 1 FREE »</Link>
    </header>
  );
}

export function DeviceMockup({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? 'device-mockup large' : 'device-mockup'} aria-hidden="true">
      <div className="phone"><span /><b>10% Charged</b></div>
      <div className="watch"><span /><b>10%</b></div>
      <div className="buds" />
      <div className="charger-base" />
      <div className="charge-ring ring-one" />
      <div className="charge-ring ring-two" />
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link className={`product-card tint-${product.tint}`} href={`/products/${product.slug}`}>
      <div className="product-visual">
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <DeviceMockup />
      </div>
      <span className="product-name">{product.name}</span>
      <span className="stars">{product.rating}</span>
      <span className="price-row">
        {product.oldPrice ? <span className="old-price">{product.oldPrice}</span> : null}
        <span>{product.price}</span>
      </span>
    </Link>
  );
}

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Store benefits">
      <div><Truck size={22} /><strong>FAST</strong><span>DELIVERY</span></div>
      <div><ShieldCheck size={22} /><strong>EASY</strong><span>RETURNS</span></div>
      <div><BatteryCharging size={22} /><strong>SECURE</strong><span>CHARGING</span></div>
      <div><ShoppingCart size={22} /><strong>24/7</strong><span>SUPPORT</span></div>
    </section>
  );
}
