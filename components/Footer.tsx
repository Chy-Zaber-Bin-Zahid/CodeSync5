"use client";
import { LinkedinLogo, FacebookLogo, EnvelopeSimple } from "phosphor-react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Application", href: "/services/mobile-app-development" },
    { name: "E-Commerce", href: "/services/e-commerce" },
    { name: "AI Integration", href: "/services/ai-integration" },
    { name: "UI/UX Design", href: "/services/ui-ux" },
    { name: "Graphics Design", href: "/services/graphics" },
  ];

  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Meet the Team", href: "/meet-the-team" },
  ];

  const helpfulLinks = [
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
  ];

  const legalLinks = [
    { name: "Accessibility", href: "/accessibility" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FacebookLogo,
      href: "/facebook",
    },
    {
      name: "LinkedIn",
      icon: LinkedinLogo,
      href: "/linkedin",
    },
    {
      name: "Gmail",
      icon: EnvelopeSimple,
      href: "/gmail",
    },
  ];

  return (
    <footer className="bg-[#f0f4f8] dark:bg-gray-900">
      <div className="mx-auto max-w-big-screen px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          <div className="mt-8 flex-1 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-y-16">
            {/* Services Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Services
              </p>
              <ul className="pl-0 mt-6 space-y-4 text-md">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="underline-offset-2 duration-300 text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Company
              </p>
              <ul className="pl-0 mt-6 space-y-4 text-md">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="underline-offset-2 duration-300 text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Helpful Links Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Helpful Links
              </p>
              <ul className="pl-0 mt-6 space-y-4 text-md">
                {helpfulLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="underline-offset-2 duration-300 text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Section */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xl font-medium text-gray-900 dark:text-white">
                Legal
              </p>
              <ul className="pl-0 mt-6 space-y-4 text-md">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="underline-offset-2 duration-300 text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <ul className="pl-0 col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    rel="noreferrer"
                    target="_blank"
                    className="underline-offset-2 text-gray-700 transition duration-300 hover:opacity-75 dark:text-gray-200"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon size={24} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 dark:border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-md text-gray-500 dark:text-gray-400">
              &copy; {currentYear}. XYZ. All rights reserved.
            </p>

            <p>
              <Link
                href="/privacy-policy"
                className="text-gray-500 transition duration-300 hover:opacity-75 dark:text-gray-400"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
