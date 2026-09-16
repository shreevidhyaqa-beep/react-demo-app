function Home() {
	return (
		<main className="home-page">
			<section className="hero-section">
				<h1>Welcome to Our Store</h1>
				<p>Discover quality products at great prices.</p>
				<button type="button">Shop Now</button>
			</section>

			<section className="featured-section">
				<h2>Featured Products</h2>
				<div className="product-list">
					<article className="product-card">
						<h3>Latest Styles</h3>
						<p>Find something new for every occasion.</p>
					</article>
					<article className="product-card">
						<h3>Best Sellers</h3>
						<p>Shop products loved by our customers.</p>
					</article>
					<article className="product-card">
						<h3>Great Deals</h3>
						<p>Save more with our special offers.</p>
					</article>
				</div>
			</section>
		</main>
	);
}

export default Home;
