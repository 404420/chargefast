import { ChevronDown } from 'lucide-react';
import { ProductCard, TopNav } from '../components';
import { products } from '../data/products';

const categories = ['Shop all', 'MagSafe chargers', 'USB-C cables', 'Solar chargers', 'GaN adapters', 'Other'];

export default function ShopPage() {
  return (
    <main>
      <TopNav />
      <section className="shop-hero">
        <h1>CHARGEFAST SPECIAL: <em>BUY 2 GET 1 FREE</em></h1>
        <p>Add 3 items in the cart and pay for 2.</p>
      </section>
      <section className="shop-wrap">
        <div className="category-tabs" aria-label="Product categories">
          {categories.map((category, index) => (
            <button className={index === 0 ? 'active' : ''} key={category}>{category}</button>
          ))}
        </div>
        <div className="section-heading">
          <span />
          <h2><ChevronDown size={24} /> MAGSAFE CHARGERS</h2>
          <span />
        </div>
        <div className="product-grid">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
        <div className="section-heading lower">
          <span />
          <h2><ChevronDown size={24} /> FAST CHARGING ESSENTIALS</h2>
          <span />
        </div>
        <div className="product-grid compact">
          {products.slice().reverse().map((product) => <ProductCard key={`second-${product.slug}`} product={product} />)}
        </div>
      </section>
    </main>
  );
}
