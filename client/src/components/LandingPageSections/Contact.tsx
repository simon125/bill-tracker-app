// node modules
import React from 'react';
// local modules
import EmailForm from '../EmailForm/EmailForm';
import SocialLink from '../SocialLink/SocialLink';
import { H3, Paragraph, ColorLayer } from './LandingPageSection.styled';

const Contact = () => {
  return (
    <section id="contact" className="contact-container">
      <ColorLayer />
      <div className="contact-container__row">
        <div className="contact-container__col">
          <H3 className="contact-title">
            If you are interested in contact with me you can do this by my
            socials or just send email by form!
          </H3>
          <Paragraph>
            Feel free to review app from technical perspective,I invite you to
            visit repo with <b>Bill Tracker</b> source code, report any ideas
            issues which can improve my app. I'll be grateful If you point me
            better practices.
          </Paragraph>
          <Paragraph>
            Please notice that it is one person project, and this is kind of
            development sandbox but useful tool for me.
          </Paragraph>
        </div>

        <EmailForm />
      </div>
      <div className="social-container">
        <SocialLink
          href="https://www.linkedin.com/in/szymon-oleszek/"
          icon="fab fa-linkedin"
        />
        <SocialLink
          href="https://github.com/simon125/bill-tracker-app"
          icon="fab fa-github-square"
        />
        <SocialLink
          href="https://www.facebook.com/szymon.piotr.oleszek"
          icon="fab fa-facebook-square"
        />
        <SocialLink href="mailto:szymqwerty@gmail.com" icon="fas fa-envelope" />
      </div>
    </section>
  );
};

export default Contact;
