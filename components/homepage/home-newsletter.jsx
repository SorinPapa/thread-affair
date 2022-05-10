export default function HomeNewsletter() {
  return (
    <section className="home-newsletter">
      <form action="" className="container">
        <label htmlFor="newletterEmail">
          Subscribe to our
          <span>newsletter</span>
        </label>

        <input type="email"
        placeholder="enter yout email adrress to receive the latest news"
        id="newletterEmail"
        name="newletterEmail"
        required ></input>

        <button type="submit" title="Subscribe">
          Subscribe
        </button>
      </form>
    </section>
  )
}
