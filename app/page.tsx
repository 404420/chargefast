import Link from 'next/link';
import { ArrowRight, BatteryCharging, Zap } from 'lucide-react';
import { products } from './data/products';
import { ProductCard, TopNav, TrustBar } from './components';

export default function Home() {
  return (
    <main>
      <TopNav />
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/charger-hero.jpg">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-kicker"><Zap size={18} /> Charge every device faster</span>
          <h1>POWER UP <em>EVERYTHING</em></h1>
          <p>MagSafe stations, Apple Watch docks, AirPods chargers, braided USB-C cables and solar charging kits for everyday carry.</p>
          <Link href="/shop" className="primary-cta">SHOP ALL <ArrowRight size={22} /></Link>
          <span className="review-line">★★★★★ Trusted by fast-moving tech users</span>
        </div>
      </section>
      <TrustBar />
      <section className="feature-band">
        <div>
          <BatteryCharging size={28} />
          <h2>Built for iPhone, Apple Watch, AirPods and USB-C gear.</h2>
        </div>
        <p>Launch with a focused catalog and expand into solar panels, GaN adapters, travel charging kits and premium cables without changing the brand.</p>
      </section>
      <section className="product-section">
        <div className="section-heading">
          <span />
          <h2>BESTSELLING CHARGING SOLUTIONS</h2>
          <span />
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
    </main>
  );
}
