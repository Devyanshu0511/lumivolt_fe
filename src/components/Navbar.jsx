// src/components/Navigation.jsx (or Navbar.jsx)
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import logoFull from "../assets/logo.png";
import "../assets/navbar.css";
import { useDarkMode } from "./Layout";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const location = useLocation();
  const { darkMode, setDarkMode } = useDarkMode();

  const themeClass = darkMode ? "navbar--dark" : "navbar--light";

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setProductsDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
    };

    if (productsDropdownOpen || aboutDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [productsDropdownOpen, aboutDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const scrollY = window.scrollY;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, [setDarkMode]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "About Us", path: "/about" },
        { name: "Board of Directors", path: "/board-of-directors" },
        { name: "Policies", path: "/policies" },
      ],
    },
    { name: "Technology", path: "/technology" },
    {
      name: "Products",
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Products", path: "/products" },
        { name: "Monofacial PERC", path: "/products/monofacial-perc" },
        { name: "Bifacial TOPCon", path: "/products/bifacial-topcon" },
        { name: "Ultra Series", path: "/products/ultra-series" },
      ],
    },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`navbar ${themeClass}${scrolled ? " navbar--scrolled" : ""}`}
      >
        <div className="navbar__inner">
          <div className="navbar__bar">
            <motion.div whileHover={{ scale: 1.03 }} className="navbar__brand">
              <Link to="/" className="navbar__brand-link" aria-label="Lumivolt Home">
                <motion.img
                  src={logoFull}
                  alt="Lumivolt — Harnessing the Sun"
                  className="navbar__logo"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45 }}
                />
              </Link>
            </motion.div>

            <div className="navbar__desktop">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="navbar__item dropdown-container"
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          if (item.name === "About") {
                            setAboutDropdownOpen(!aboutDropdownOpen);
                            setProductsDropdownOpen(false);
                          } else if (item.name === "Products") {
                            setProductsDropdownOpen(!productsDropdownOpen);
                            setAboutDropdownOpen(false);
                          }
                        }}
                        className="navbar__dropdown-btn"
                      >
                        {item.name}
                        <ChevronDown
                          className={`navbar__chevron${
                            (item.name === "About" ? aboutDropdownOpen : productsDropdownOpen)
                              ? " navbar__chevron--open"
                              : ""
                          }`}
                        />
                        <motion.span
                          className="navbar__underline"
                          layoutId="nav-underline"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          style={{ originX: 0 }}
                        />
                      </button>

                      <AnimatePresence>
                        {(item.name === "About" ? aboutDropdownOpen : productsDropdownOpen) && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="navbar__dropdown-panel"
                          >
                            <div className="navbar__dropdown-list">
                              {item.dropdownItems.map((dropdownItem, j) => (
                                <motion.div
                                  key={dropdownItem.path}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.05 }}
                                >
                                  <Link
                                    to={dropdownItem.path}
                                    onClick={() => {
                                      setProductsDropdownOpen(false);
                                      setAboutDropdownOpen(false);
                                    }}
                                    className="navbar__dropdown-link"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link to={item.path} className="navbar__link">
                      {item.name}
                      <motion.span
                        className="navbar__underline"
                        layoutId="nav-underline"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{ originX: 0 }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="button"
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1, rotate: darkMode ? 0 : 180 }}
                whileTap={{ scale: 0.9 }}
                className="navbar__theme-btn"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="navbar__icon" /> : <Moon className="navbar__icon" />}
              </motion.button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="navbar__menu-btn"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="navbar__menu-icon" />
              ) : (
                <Menu className="navbar__menu-icon" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {createPortal(
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`navbar__mobile-sheet navbar__mobile-sheet--${darkMode ? "dark" : "light"}`}
            >
              <div className="navbar__mobile-inner">
                {navItems.map((item) => (
                  <div key={item.path}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={item.path}
                        className="navbar__mobile-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>

                    {item.hasDropdown && (
                      <div className="navbar__mobile-sub">
                        {item.dropdownItems.map((dropdownItem, j) => (
                          <motion.div
                            key={dropdownItem.path}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.2, delay: j * 0.05 }}
                          >
                            <Link
                              to={dropdownItem.path}
                              className="navbar__mobile-sublink"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="navbar__mobile-theme-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      toggleDarkMode();
                      setMobileMenuOpen(false);
                    }}
                    className="navbar__mobile-theme-btn"
                  >
                    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                    {darkMode ? <Sun className="navbar__icon" /> : <Moon className="navbar__icon" />}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navigation;
