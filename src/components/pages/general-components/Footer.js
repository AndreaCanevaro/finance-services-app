import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-link-items">
            <h5>Rivkin Securities</h5>
            <div className="footer-link-items-column">
              <h6>Address</h6>
              <p>
                1 Kings Cross Road, <br></br>
                Rushcutters Bay, NSW 2011
              </p>
            </div>

            <div className="footer-link-items-column">
              <h6>Phone</h6>
              <p>
                1 300 748 546 <br></br>
                (1300 RIVKIN)
              </p>
            </div>
          </div>
          <div className="footer-link-items-redes">
            <h5>Follow Us</h5>
            <ul>
              <li>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover: text-red-500"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://twitter.com">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover: text-red-500"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover: text-red-500"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="hover: text-red-500"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-items">
            <h5>Explore</h5>
            <a href="https://rivkin.com.au">Resources</a>
          </div>
        </div>

        <div className="copyright-links">
          <ul className="flex">
            <li>
              <span>© 2022 Rivkin</span>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="https://rivkin.com.au">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="https://rivkin.com.au">FSG</a>
            </li>
            <li>
              <a href="https://rivkin.com.au">Privacy Policy</a>
            </li>
            <li>
              <a href="https://rivkin.com.au">Important Reading</a>
            </li>
            <li>
              <a href="https://rivkin.com.au">
                Trading &amp; Performance Policy
              </a>
            </li>
            <li>
              <a href="https:///rivkin.com.au">Key Concepts</a>
            </li>
          </ul>
        </div>

        <div className="disclaimer">
          <p className="extra-small-text color-grey">
            <span className="color-orange">DISCLAIMER:</span> Rivkin aims to
            provide clear and simple information to those visiting our website.
            If any part of this disclaimer does not make sense, please phone
            Rivkin on 02 8302 3600 and ask to speak with a member of our Dealing
            and Relationship Management Team. Rivkin provides general advice and
            dealing services on securities, derivatives and superannuation
            (SMSF). Rivkin also provide SMSF administration and accounting
            services. Rivkin does not provide advice that takes into account
            your, or anybody else’s, investment objectives, financial situation
            or needs. We strongly suggest that you consult an independent,
            licenced financial advisor before acting upon any information
            contained on this website. Investing in and trading securities (such
            as shares listed on the ASX) and/or derivatives (such as Contracts
            for Difference or ‘CFDs’) carry financial risks. CFDs carry with
            them various additional risks that differ from more simple
            securities such as fully-paid company shares. Some of these risks
            include not owning the underlying instrument from which a price is
            being derived, settling trades ‘over the counter’ with a financial
            institution rather than on a stock exchange, and using leverage to
            gain access to trades that may have a higher face value than your
            initial deposit. This risk of leverage means that it is possible to
            lose more than your initial investment. Our aim is to create more
            life choices for our clients, which means improving the wealth of
            clients throughout many market cycles by nurturing a relationship
            spanning many years. If you are not comfortable with your
            understanding of the risks involved before using a Rivkin product
            and service, please contact our office to seek further information
            or a Product Disclosure Statement, or make an appointment to sit
            with one of our friendly financial experts. It is in our interest
            for your Rivkin experience to be a rewarding and comfortable one.
            Rivkin is a trading name of Rivkin Securities Pty Ltd ABN
            87123290602, which holds Australian Financial Services Licence No.
            332 802
          </p>
          <p className="extra-small-text color-grey">
            <span className="color-orange">
              TRADING PERFORMANCE DISCLAIMER:
            </span>{" "}
            Rivkin advise you not to rely solely on back tested data or
            statistics in order to make any trading decisions. We suggest you
            contact our relationship managers to arrange access to our live
            membership site on trial basis. Here you will be able to view all
            actual historical trading recommendations (and results) provided to
            clients over the last 20 years which can be used to inform your own
            assessment of the potential returns based on your individual
            situation. Please be advised that past performance is not a reliable
            indicator of future performance. The value of your investment may
            rise and fall, and you may not receive the amount originally
            invested.
          </p>
          <p className="extra-small-text color-grey">
            <span className="color-orange">
              MAINSTREAM SEPARATELY MANAGED ACCOUNT DISCLAIMER:
            </span>{" "}
            Perpetual is the both the Issuer and the Responsible Entity of the
            Mainstream Separately Managed Product, which means it is responsible
            for the overall governance and compliance of the product. Perpetual
            does this under The Trust Company (RE Services) Limited Responsible
            Entity, part of the Perpetual Group. ABN 45 003 278 831. AFSL No
            235150.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
