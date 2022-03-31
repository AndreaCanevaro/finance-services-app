import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar2.css";

function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <div
      data-elementor-type="header"
      data-elementor-id="19"
      className="elementor elementor-19 elementor-location-header"
      data-elementor-settings="[]"
    >
      <div className="elementor-section-wrap">
        <header
          className="elementor-section elementor-top-section elementor-element elementor-element-75d04f2b elementor-section-content-middle elementor-section-height-min-height sticky-header elementor-hidden-phone elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-sticky--effects"
          data-id="75d04f2b"
          data-element_type="section"
          data-settings='{"background_background":"classNameic","sticky":"top","sticky_on":["desktop"],"sticky_effects_offset":90,"sticky_offset":0}'
          style=""
        >
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-row">
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4cf7fdff"
                data-id="4cf7fdff"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-2eb52d63 logo elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                      data-id="2eb52d63"
                      data-element_type="widget"
                      data-widget_type="theme-site-logo.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-image">
                          <a href="https://rivkin.com.au">
                            <img
                              width="200"
                              height="109"
                              src="/images/logo-w.png"
                              className="attachment-full size-full"
                              alt=""
                              loading="lazy"
                            />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-36fe032 elementor-hidden-phone"
                data-id="36fe032"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-ea0a0bb uael-nav-menu__align-center uael-submenu-open-hover uael-submenu-icon-arrow uael-submenu-animation-none uael-link-redirect-child uael-nav-menu__breakpoint-tablet elementor-widget elementor-widget-uael-nav-menu"
                      data-id="ea0a0bb"
                      data-element_type="widget"
                      data-widget_type="uael-nav-menu.default"
                    >
                      <div className="elementor-widget-container">
                        <div
                          className="uael-nav-menu uael-layout-horizontal uael-nav-menu-layout uael-pointer__underline uael-animation__fade"
                          data-layout="horizontal"
                        >
                          <div
                            className="uael-nav-menu__toggle elementor-clickable"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <div className="uael-nav-menu-icon">
                              <i
                                aria-hidden="true"
                                tabindex="0"
                                className="fas fa-align-justify"
                              ></i>{" "}
                            </div>
                          </div>
                          <nav
                            className="uael-nav-menu__layout-horizontal uael-nav-menu__submenu-arrow uael-dropdown"
                            data-toggle-icon='<i aria-hidden="true" tabindex="0" className="fas fa-align-justify"></i>'
                            data-close-icon='<i aria-hidden="true" tabindex="0" className="far fa-window-close"></i>'
                            data-full-width="yes"
                          >
                            <ul className="uael-nav-menu uael-nav-menu-custom uael-custom-wrapper">
                              <li
                                className="menu-item menu-item-has-children parent elementor-repeater-item-ce716a9 parent-has-child"
                                data-dropdown-width="section"
                                data-dropdown-pos=""
                              >
                                <div className="uael-has-submenu-container">
                                  <a
                                    href="https://rivkin.com.au"
                                    className="uael-menu-item"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    RIVKIN SOLUTIONS
                                    <span className="uael-menu-toggle sub-arrow parent-item">
                                      <i className="fa"></i>
                                    </span>
                                  </a>
                                </div>
                                <ul
                                  className="sub-menu parent-has-template"
                                  style="width: 340px; left: 0px; box-shadow: none; border: none; border-radius: 0px; position: absolute;"
                                >
                                  <div className="menu-item saved-content child elementor-repeater elementor-repeater-item-b2d3ec4">
                                    <div
                                      data-elementor-type="section"
                                      data-elementor-id="499"
                                      className="elementor elementor-499 elementor-location-header"
                                      data-elementor-settings="[]"
                                    >
                                      <div className="elementor-section-wrap">
                                        <section
                                          className="elementor-section elementor-top-section elementor-element elementor-element-47e68cbd elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
                                          data-id="47e68cbd"
                                          data-element_type="section"
                                        >
                                          <div className="elementor-container elementor-column-gap-default">
                                            <div className="elementor-row">
                                              <div
                                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4798672e"
                                                data-id="4798672e"
                                                data-element_type="column"
                                              >
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                  <div className="elementor-widget-wrap">
                                                    <section
                                                      className="elementor-section elementor-inner-section elementor-element elementor-element-193b1bf elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                      data-id="193b1bf"
                                                      data-element_type="section"
                                                    >
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                          <div
                                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-295f391"
                                                            data-id="295f391"
                                                            data-element_type="column"
                                                          >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                              <div className="elementor-widget-wrap">
                                                                <div
                                                                  className="elementor-element elementor-element-1627328 elementor-widget elementor-widget-heading"
                                                                  data-id="1627328"
                                                                  data-element_type="widget"
                                                                  data-widget_type="heading.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <h3 className="elementor-heading-title elementor-size-default">
                                                                      <a href="https://rivkin.com.au">
                                                                        <strong>
                                                                          The
                                                                          Rivkin
                                                                          Report
                                                                        </strong>
                                                                        <br></br>
                                                                        <small>
                                                                          Manage
                                                                          shares
                                                                          alongside
                                                                          our
                                                                          experts.
                                                                        </small>
                                                                      </a>
                                                                    </h3>{" "}
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="elementor-element elementor-element-7d753d1 elementor-align-left elementor-widget elementor-widget-button"
                                                                  data-id="7d753d1"
                                                                  data-element_type="widget"
                                                                  data-widget_type="button.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <div className="elementor-button-wrapper">
                                                                      <a
                                                                        href="https://rivkin.com.au"
                                                                        target="_blank"
                                                                        className="elementor-button-link elementor-button elementor-size-sm"
                                                                        role="button"
                                                                      >
                                                                        <span className="elementor-button-content-wrapper">
                                                                          <span className="elementor-button-text">
                                                                            1
                                                                            month
                                                                            free
                                                                            trial
                                                                            →
                                                                          </span>
                                                                        </span>
                                                                      </a>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bf9655d"
                                                            data-id="bf9655d"
                                                            data-element_type="column"
                                                          >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                              <div className="elementor-widget-wrap">
                                                                <div
                                                                  className="elementor-element elementor-element-544bc94 elementor-widget elementor-widget-heading"
                                                                  data-id="544bc94"
                                                                  data-element_type="widget"
                                                                  data-widget_type="heading.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <h3 className="elementor-heading-title elementor-size-default">
                                                                      <a href="https://rivkin.com.au">
                                                                        <strong>
                                                                          Rivkin
                                                                          Super
                                                                        </strong>
                                                                        <br></br>
                                                                        <small>
                                                                          Greater
                                                                          flexibility
                                                                          and
                                                                          tax
                                                                          effective
                                                                          <br></br>{" "}
                                                                          access
                                                                          to
                                                                          funds.
                                                                        </small>
                                                                      </a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                    <section
                                                      className="elementor-section elementor-inner-section elementor-element elementor-element-bde8f63 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                      data-id="bde8f63"
                                                      data-element_type="section"
                                                    >
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                          <div
                                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-442d761"
                                                            data-id="442d761"
                                                            data-element_type="column"
                                                          >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                              <div className="elementor-widget-wrap">
                                                                <div
                                                                  className="elementor-element elementor-element-7edbf9f elementor-widget elementor-widget-heading"
                                                                  data-id="7edbf9f"
                                                                  data-element_type="widget"
                                                                  data-widget_type="heading.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <h3 className="elementor-heading-title elementor-size-default">
                                                                      <a href="https://rivkin.com.au">
                                                                        <strong>
                                                                          Rivkin
                                                                          Managed
                                                                          Investments
                                                                        </strong>
                                                                        <br></br>
                                                                        <small>
                                                                          Handover
                                                                          the
                                                                          legwork
                                                                          to our
                                                                          team
                                                                          of
                                                                          experts.
                                                                        </small>
                                                                      </a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2844aea"
                                                            data-id="2844aea"
                                                            data-element_type="column"
                                                          >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                              <div className="elementor-widget-wrap">
                                                                <div
                                                                  className="elementor-element elementor-element-32f86dd elementor-widget elementor-widget-heading"
                                                                  data-id="32f86dd"
                                                                  data-element_type="widget"
                                                                  data-widget_type="heading.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <h3 className="elementor-heading-title elementor-size-default">
                                                                      <a href="https://rivkin.com.au">
                                                                        <strong>
                                                                          Rivkin
                                                                          Partner
                                                                          Solutions
                                                                        </strong>
                                                                        <br></br>
                                                                        <small>
                                                                          Partner's
                                                                          clients
                                                                          growing
                                                                          their
                                                                          wealth.
                                                                        </small>
                                                                      </a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-734c15b"
                                                data-id="734c15b"
                                                data-element_type="column"
                                                data-settings='{"background_background":"classNameic"}'
                                              >
                                                <div className="elementor-column-wrap elementor-element-populated">
                                                  <div className="elementor-widget-wrap">
                                                    <div
                                                      className="elementor-element elementor-element-4c69350 elementor-widget elementor-widget-text-editor"
                                                      data-id="4c69350"
                                                      data-element_type="widget"
                                                      data-widget_type="text-editor.default"
                                                    >
                                                      <div className="elementor-widget-container">
                                                        <div className="elementor-text-editor elementor-clearfix">
                                                          <p>
                                                            ADDITIONAL SERVICES
                                                          </p>{" "}
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <section
                                                      className="elementor-section elementor-inner-section elementor-element elementor-element-8a698d2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                      data-id="8a698d2"
                                                      data-element_type="section"
                                                    >
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-row">
                                                          <div
                                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fa20cf8"
                                                            data-id="fa20cf8"
                                                            data-element_type="column"
                                                          >
                                                            <div className="elementor-column-wrap elementor-element-populated">
                                                              <div className="elementor-widget-wrap">
                                                                <div
                                                                  className="elementor-element elementor-element-a1ffc66 elementor-widget elementor-widget-heading"
                                                                  data-id="a1ffc66"
                                                                  data-element_type="widget"
                                                                  data-widget_type="heading.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <h3 className="elementor-heading-title elementor-size-default">
                                                                      <a href="https://rivkin.com.au">
                                                                        Accounting{" "}
                                                                        <small>
                                                                          →
                                                                        </small>
                                                                      </a>
                                                                    </h3>{" "}
                                                                  </div>
                                                                </div>
                                                                <div
                                                                  className="elementor-element elementor-element-a168ac4 elementor-widget elementor-widget-heading"
                                                                  data-id="a168ac4"
                                                                  data-element_type="widget"
                                                                  data-widget_type="heading.default"
                                                                >
                                                                  <div className="elementor-widget-container">
                                                                    <h3 className="elementor-heading-title elementor-size-default">
                                                                      <a href="https://rivkin.com.au/brokerage/">
                                                                        Brokerage{" "}
                                                                        <small>
                                                                          →
                                                                        </small>
                                                                      </a>
                                                                    </h3>{" "}
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div
                                                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-381b8be"
                                                            data-id="381b8be"
                                                            data-element_type="column"
                                                          >
                                                            <div className="elementor-column-wrap">
                                                              <div className="elementor-widget-wrap"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </section>
                                      </div>
                                    </div>
                                  </div>
                                </ul>
                              </li>
                              <li
                                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-e2ca42b"
                                data-dropdown-width="default"
                                data-dropdown-pos="left"
                              >
                                <a
                                  href="https://rivkin.com.au"
                                  target="_blank"
                                  className="uael-menu-item"
                                >
                                  INVESTMENT PORTFOLIO
                                  <span className="uael-menu-toggle sub-arrow parent-item">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-e43ae30"
                                data-dropdown-width="default"
                                data-dropdown-pos="left"
                              >
                                <a
                                  href="https://rivkin.com.au"
                                  className="uael-menu-item"
                                >
                                  MORE SERVICES
                                  <span className="uael-menu-toggle sub-arrow parent-item">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </li>
                              <li
                                className="menu-item menu-item-has-children parent parent-has-no-child elementor-repeater-item-66ffe72"
                                data-dropdown-width="default"
                                data-dropdown-pos="left"
                              >
                                <a
                                  href="https://rivkin.com.au"
                                  className="uael-menu-item"
                                >
                                  Search
                                  <span className="uael-menu-toggle sub-arrow parent-item">
                                    <i className="fa"></i>
                                  </span>
                                </a>
                              </li>
                            </ul>{" "}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-744fa16"
                data-id="744fa16"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-bb128af elementor-hidden-phone elementor-widget elementor-widget-eael-creative-button"
                      data-id="bb128af"
                      data-element_type="widget"
                      data-widget_type="eael-creative-button.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="eael-creative-button-wrapper">
                          <a
                            className="eael-creative-button eael-creative-button--winona"
                            href="https://rivkin.com.au"
                            target="_blank _blank"
                            data-text="Login"
                          >
                            <div className="creative-button-inner">
                              <span className="cretive-button-text">
                                Sign Up
                              </span>
                              <span className="eael-creative-button-icon-right">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-external-link-alt"
                                ></i>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-5dc65e18"
                data-id="5dc65e18"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-be66fd9 elementor-hidden-phone elementor-widget elementor-widget-eael-creative-button"
                      data-id="be66fd9"
                      data-element_type="widget"
                      data-widget_type="eael-creative-button.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="eael-creative-button-wrapper">
                          <a
                            className="eael-creative-button eael-creative-button--winona"
                            href="https://rivkin.com.au"
                            target="_blank _blank"
                            data-text="Login"
                          >
                            <div className="creative-button-inner">
                              <span className="cretive-button-text">Login</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <header
          className="elementor-section elementor-top-section elementor-element elementor-element-8917ed5 elementor-section-content-middle elementor-section-height-min-height sticky-header elementor-hidden-desktop elementor-section-boxed elementor-section-height-default elementor-section-items-middle elementor-sticky--effects"
          data-id="8917ed5"
          data-element_type="section"
          data-settings='{"background_background":"classNameic","sticky":"top","sticky_on":["desktop"],"sticky_effects_offset":90,"sticky_offset":0}'
          style=""
        >
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-row">
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-667db8a"
                data-id="667db8a"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-38cba5a logo elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
                      data-id="38cba5a"
                      data-element_type="widget"
                      data-widget_type="theme-site-logo.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-image">
                          <a href="https://rivkin.com.au">
                            <img
                              width="300"
                              height="109"
                              src="/images/logo-w.png"
                              className="attachment-full size-full"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-5948400 elementor-hidden-desktop elementor-hidden-phone"
                data-id="5948400"
                data-element_type="column"
              >
                <div className="elementor-column-wrap">
                  <div className="elementor-widget-wrap"></div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-19179f8 elementor-hidden-desktop"
                data-id="19179f8"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-4903112 uael-menu-item-space-between uael-submenu-icon-arrow uael-link-redirect-child elementor-widget elementor-widget-uael-nav-menu"
                      data-id="4903112"
                      data-element_type="widget"
                      data-widget_type="uael-nav-menu.default"
                    >
                      <div className="elementor-widget-container">
                        <div
                          className="uael-nav-menu__toggle elementor-clickable uael-flyout-trigger"
                          tabindex="0"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="uael-nav-menu-icon">
                            <i
                              aria-hidden="true"
                              tabindex="0"
                              className="fas fa-align-justify"
                            ></i>{" "}
                          </div>
                        </div>
                        <div className="uael-flyout-wrapper">
                          <div className="uael-flyout-overlay elementor-clickable"></div>
                          <div className="uael-flyout-container">
                            <div
                              id="uael-flyout-content-id-4903112"
                              className="uael-side uael-flyout-left uael-flyout-open"
                              data-layout="left"
                              data-flyout-type="normal"
                            >
                              <div className="uael-flyout-content push">
                                <nav>
                                  <ul
                                    id="menu-1-4903112"
                                    className="uael-nav-menu"
                                  >
                                    <li
                                      id="menu-item-2466"
                                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children parent uael-has-submenu uael-creative-menu parent-has-child"
                                    >
                                      <div className="uael-has-submenu-container">
                                        <a
                                          href="https://rivkin.com.au/solutions/"
                                          className="uael-menu-item"
                                          aria-haspopup="true"
                                          aria-expanded="false"
                                        >
                                          Solutions
                                          <span className="uael-menu-toggle sub-arrow uael-menu-child-0">
                                            <i className="fa"></i>
                                          </span>
                                        </a>
                                      </div>
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-2465"
                                          className="menu-item menu-item-type-post_type menu-item-object-page uael-creative-menu"
                                        >
                                          <a
                                            href="https://rivkin.com.au"
                                            className="uael-sub-menu-item"
                                            style="padding-left: 20px;"
                                          >
                                            RIVKIN REPORT
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-2463"
                                          className="menu-item menu-item-type-post_type menu-item-object-page uael-creative-menu"
                                        >
                                          <a
                                            href="https://rivkin.com.au"
                                            className="uael-sub-menu-item"
                                            style="padding-left: 20px;"
                                          >
                                            INVESTMENT PORTFOLIOS
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-2464"
                                          className="menu-item menu-item-type-post_type menu-item-object-page uael-creative-menu"
                                        >
                                          <a
                                            href="https://rivkin.com.au"
                                            className="uael-sub-menu-item"
                                            style="padding-left: 20px;"
                                          >
                                            MORE SERVICES
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-2977"
                                          className="menu-item menu-item-type-post_type menu-item-object-page uael-creative-menu"
                                        >
                                          <a
                                            href="https://rivkin.com.au"
                                            className="uael-sub-menu-item"
                                            style="padding-left: 20px;"
                                          >
                                            Search
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-2978"
                                          className="menu-item menu-item-type-post_type menu-item-object-page uael-creative-menu"
                                        >
                                          <a
                                            href="https://rivkin.com.au"
                                            className="uael-sub-menu-item"
                                            style="padding-left: 20px;"
                                          >
                                            Contact Us
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-2976"
                                          className="menu-item menu-item-type-post_type menu-item-object-page uael-creative-menu"
                                        >
                                          <a
                                            href="https://rivkin.com.au"
                                            className="uael-sub-menu-item"
                                            style="padding-left: 20px;"
                                          >
                                            Sign Up
                                          </a>
                                        </li>
                                      </ul>
                                    </li>
                                    <li
                                      id="menu-item-539"
                                      className="menu-item menu-item-type-custom menu-item-object-custom parent uael-creative-menu"
                                    >
                                      <a
                                        href="https://rivkin.com.au"
                                        className="uael-menu-item"
                                      >
                                        RIVKIN REPORT
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-795"
                                      className="menu-item menu-item-type-post_type menu-item-object-page parent uael-creative-menu"
                                    >
                                      <a
                                        href="https://rivkin.com.au"
                                        className="uael-menu-item"
                                      >
                                        INVESTMENT PORTFOLIOS
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-784"
                                      className="menu-item menu-item-type-post_type menu-item-object-page parent uael-creative-menu"
                                    >
                                      <a
                                        href="https://rivkin.com.au"
                                        className="uael-menu-item"
                                      >
                                        MORE SERVICES
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-842"
                                      className="menu-item menu-item-type-custom menu-item-object-custom parent uael-creative-menu"
                                    >
                                      <a
                                        href="https://rivkin.com.au"
                                        className="uael-menu-item"
                                      >
                                        Contact Us
                                      </a>
                                    </li>
                                    <li
                                      id="menu-item-843"
                                      className="menu-item menu-item-type-custom menu-item-object-custom parent uael-creative-menu"
                                    >
                                      <a
                                        href="https://rivkin.com.au"
                                        className="uael-menu-item"
                                      >
                                        Sign Up
                                      </a>
                                    </li>
                                  </ul>
                                </nav>
                                <div
                                  className="elementor-clickable uael-flyout-close"
                                  tabindex="0"
                                >
                                  <i
                                    aria-hidden="true"
                                    tabindex="0"
                                    className="far fa-window-close"
                                  ></i>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-a0d4694 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="a0d4694"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row"></div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Navbar2;
