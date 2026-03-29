import Link from 'next/link';

const products = [
  { name: 'ZGU Hoodie', category: 'Clothing', price: 'UGX 85,000', image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80' },
  { name: 'ZGU Polo Shirt', category: 'Clothing', price: 'UGX 55,000', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&q=80' },
  { name: 'ZGU Cap', category: 'Accessories', price: 'UGX 35,000', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80' },
  { name: 'ZGU Backpack', category: 'Accessories', price: 'UGX 120,000', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80' },
  { name: 'ZGU Mug', category: 'Lifestyle', price: 'UGX 25,000', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80' },
  { name: 'ZGU Notebook Set', category: 'Stationery', price: 'UGX 30,000', image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80' },
  { name: 'ZGU Water Bottle', category: 'Lifestyle', price: 'UGX 40,000', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80' },
  { name: 'ZGU Lanyard', category: 'Accessories', price: 'UGX 15,000', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80' },
];

const categories = ['All', 'Clothing', 'Accessories', 'Lifestyle', 'Stationery'];

export default function ShopPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 40% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">ZGU Shop</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            ZGU Shop
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Official Zenith Global University merchandise. Wear your pride.
          </p>
        </div>
      </div>

      {/* Products */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat}
                className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-200 ${
                  cat === 'All'
                    ? 'bg-[var(--navy)] text-white'
                    : 'bg-white text-gray-600 hover:border-[var(--gold)] hover:text-[var(--gold)] border border-gray-200'
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.name}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden h-52">
                  <img src={product.image} alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-wide">{product.category}</span>
                  <h3 className="text-[var(--navy)] font-bold text-lg mt-1 mb-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--navy)] font-bold">{product.price}</span>
                    <button className="bg-[var(--navy)] text-white text-xs px-4 py-2 rounded font-bold uppercase tracking-wide hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: '🚚', title: 'Kampala Delivery', desc: 'Free delivery on orders above UGX 100,000 within Kampala' },
            { icon: '↩️', title: 'Easy Returns', desc: '7-day return policy on all unused merchandise' },
            { icon: '🔒', title: 'Secure Payment', desc: 'Pay via MTN MoMo, Airtel Money or bank transfer' },
          ].map((item) => (
            <div key={item.title} className="text-white">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}