import styles from "@/components/Blocks/Newsletter/newsletter.module.scss";

export default function Newsletter({ content }) {
  return (
    <div className={styles.newsletterContainer}>
      {content.title && <h2>{content.title}</h2>}
      {content.text && <p>{content.text}</p>}
      {content.cta && (
        <form
          action="https://gmail.us18.list-manage.com/subscribe/post?u=a9075ea1f679647474e5717c0&amp;id=004a453847&amp;f_id=0050e7e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <input type="email" name="EMAIL" id="mce-EMAIL" required />
          <input type="hidden" name="tags" value="43788" />

          <input
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
            type="text"
            name="b_a9075ea1f679647474e5717c0_004a453847"
            tabIndex="-1"
            value=""
          />
          <button
            type="submit"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          >
            {content.cta}
          </button>
        </form>
      )}
    </div>
  );
}
