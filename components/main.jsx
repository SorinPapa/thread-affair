import HomeNewsletter from "./homepage/home-newsletter";

export default function Main() {
  return (
    <main className="content ">
      <header className="content-header"></header>

      <section className="content-main">
        <section className="home-catalog-preview container">
          <header>
            <h1 className="section-title">
              <span>Glamour</span> Suits
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits. For the finest
              custom tailored experience, be sure to explore our selection of
              premium fabrics from one of the world's oldest fabric mills,
              Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles">
            {/* insert product-tile */}
          </section>

          <footer>
            <a href="" title="see more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

          <HomeNewsletter></HomeNewsletter>

        <section className="home-payment container">
          <header>
            <h1 className="section-title">
              <span>How to</span> Pay
            </h1>
          </header>

          <ul>
            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>

            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>

            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>

            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>

            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>

            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>

            <li>
              <img src="images\payment\amazon.jpg" alt="" />
            </li>


          </ul>
        </section>

      </section>
    </main>
  );
}
