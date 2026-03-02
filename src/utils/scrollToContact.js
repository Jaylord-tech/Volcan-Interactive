const CONTACT_OFFSETS = {
  "/services": 30,
  default: 90,
};

export const getContactOffset = (pathname) =>
  Object.prototype.hasOwnProperty.call(CONTACT_OFFSETS, pathname)
    ? CONTACT_OFFSETS[pathname]
    : CONTACT_OFFSETS.default;

export const scrollToContact = ({ offset, maxTries = 6, delay = 140 } = {}) => {
  let tries = 0;

  const tryScroll = () => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const targetTop = contactSection.getBoundingClientRect().top + window.pageYOffset;
    const nextTop = Math.max(targetTop - (offset ?? 0), 0);
    window.scrollTo({ top: nextTop, left: 0, behavior: "smooth" });

    tries += 1;
    if (tries < maxTries) {
      setTimeout(tryScroll, delay);
    }
  };

  tryScroll();
};
