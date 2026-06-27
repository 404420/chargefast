import Link from 'next/link';
import { Gift, ShieldCheck, Truck, Zap } from 'lucide-react';
import { ProductImage, TopNav } from '../../components';
import { getProduct, products } from '../../data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);

  return (
    <main>
      <TopNav />
      <section className="product-page">
        <div className="gallery">
          {product.badge ? <span className="gallery-badge">{product.badge}</span> : null}
          <ProductImage product={product} variant="gallery" />
          <div className="thumb-row">
            <div>{product.category.toUpperCase()}</div>
            <div>FAST USB-C PD</div>
            <div>READY TO SHIP</div>
          </div>
        </div>
        <div className="buy-panel">
          <div className="breadcrumbs">HOME / SHOP / {product.category.toUpperCase()}</div>
          <h1>{product.name}</h1>
          <div className="review-row"><span>{product.rating}</span> ({product.reviews} customer reviews)</div>
          <p className="stock">In stock</p>
          <h2><Zap size={20} /> SELECT QUANTITY</h2>
          <div className="bundle-options">
            <label>
              <input type="radio" name="bundle" />
              <span>Buy 1 Set</span>
              <strong>{product.price}</strong>
            </label>
            <label className="selected">
              <input type="radio" name="bundle" defaultChecked />
              <span>Buy 2 Get <em>+ 1 FREE</em><small><Gift size={14} /> FREE 1x {product.name}</small></span>
              <strong>$78.00 <del>$117.00</del></strong>
              <b>Most popular</b>
            </label>
            <label>
              <input type="radio" name="bundle" />
              <span>Buy 4 Get <em>+ 2 FREE</em><small><Truck size={14} /> FREE shipping</small></span>
              <strong>$156.00 <del>$234.00</del></strong>
            </label>
          </div>
          <div className="ideal-row">
            {['iPhone', 'Apple Watch', 'AirPods', 'Travel', 'Desk'].map((item) => <span key={item}>{item} ✓</span>)}
          </div>
          <div className="unlock"><Gift size={16} /> You pay for 2. We send 3. Free shipping unlocked.</div>
          <button className="cart-button">ADD TO CART — <span>$78.00</span></button>
          <div className="assurance-row">
            <span><ShieldCheck size={18} /> 30-day guarantee</span>
            <span><Truck size={18} /> Free shipping over $50</span>
            <span><ShieldCheck size={18} /> Secure checkout</span>
          </div>
          <ul className="bullet-list">
            {product.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
          <Link className="back-link" href="/shop">Back to shop</Link>
        </div>
      </section>
    </main>
  );
}
