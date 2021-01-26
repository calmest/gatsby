import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <p>Feel free to reach me at anytime.</p>
          <form action="https://formspree.io/f/xvovaagr" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <input
                type="phone"
                placeholder="Phone"
                name="phone"
                className="form-control"
              />
              <textarea
                name="message"
                rows="8"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" value="SEND" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
