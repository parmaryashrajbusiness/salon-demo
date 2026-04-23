import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const salonData = {
  name: "Luxe Aura Salon",
  tagline: "Hair, beauty & grooming studio",
  subtitle:
    "Modern salon for hair, skin, beauty, and grooming services in a clean, stylish, and comfortable setting.",
  badge: "Open daily • By appointment & walk-in",
  rating: "Your Rating",
  reviews: "Your Reviews",
  years: "7+ years",
  address: "Sample Address, Ahmedabad, Gujarat",
  phoneDisplay: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  whatsappHref:
    "https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20an%20appointment",
  instagramHref: "https://instagram.com/your_salon_handle",
  instagramHandle: "@your_salon_handle",
  openingHours: "Mon - Sun • 10:00 AM to 10:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=PASTE_REAL_MAP_EMBED_LINK_HERE",
  heroImage:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  storyImage:
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
};

const services = [
  {
    id: 1,
    category: "Hair",
    name: "Haircut & Styling",
    price: "₹299 onwards",
    duration: "45 min",
    image:
      "https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?auto=format&fit=crop&w=900&q=80",
    desc: "Haircut with styling consultation and finishing for a clean daily look or special occasion.",
  },
  {
    id: 2,
    category: "Beard",
    name: "Beard Sculpt & Groom",
    price: "₹199 onwards",
    duration: "30 min",
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=900&q=80",
    desc: "Beard trimming, shaping, detailing, and finishing for a sharp and well-groomed appearance.",
  },
  {
    id: 3,
    category: "Skin",
    name: "Facial & Skin Care",
    price: "₹699 onwards",
    duration: "60 min",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80",
    desc: "Skin care session designed to refresh, cleanse, and restore a healthy, well-maintained look.",
  },
  {
    id: 4,
    category: "Spa",
    name: "Hair Spa Therapy",
    price: "₹799 onwards",
    duration: "50 min",
    image:
      "https://plus.unsplash.com/premium_photo-1664475130052-f58aaf58854e?auto=format&fit=crop&w=900&q=80",
    desc: "Hair and scalp treatment for nourishment, softness, and improved texture with a relaxing salon experience.",
  },
  {
    id: 5,
    category: "Beauty",
    name: "Manicure & Pedicure",
    price: "₹599 onwards",
    duration: "55 min",
    image:
      "https://images.unsplash.com/photo-1663229050022-ac26de6f05d3?auto=format&fit=crop&w=900&q=80",
    desc: "Hand and foot care with attention to detail, hygiene, and a neat polished finish.",
  },
  {
    id: 6,
    category: "Bridal",
    name: "Bridal / Party Makeup",
    price: "Custom package",
    duration: "By consultation",
    image:
      "https://plus.unsplash.com/premium_photo-1661387527207-6b2919ed49d5?auto=format&fit=crop&w=900&q=80",
    desc: "Makeup and grooming service for weddings, events, shoots, and festive occasions.",
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
  "https://plus.unsplash.com/premium_photo-1661380558859-40df8dd91dfd?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80",
];

const testimonials = [
  {
    name: "Priya Mehta",
    role: "Hair Styling Client",
    text: "Very neat setup, friendly staff, and a smooth overall experience. The haircut and styling were exactly what I wanted.",
  },
  {
    name: "Rahul Shah",
    role: "Regular Grooming Client",
    text: "Clean ambience, good service, and easy booking. I have visited more than once and the experience has been consistently good.",
  },
  {
    name: "Kavya Patel",
    role: "Bridal Makeup Client",
    text: "The team was patient, professional, and attentive throughout. I was very happy with the final look and the service quality.",
  },
];

const features = [
  "Clean and hygienic salon environment",
  "Experienced staff and personalized attention",
  "Quick booking through phone or WhatsApp",
  "Comfortable ambience for men and women",
  "Well-presented services and transparent pricing",
  "Suitable for regular visits and special occasions",
];

const stats = [
  { label: "Average Rating", value: "4.9/5" },
  { label: "Client Reviews", value: "250+" },
  { label: "Years of Service", value: "7+" },
  { label: "Popular Services", value: "20+" },
];

const packages = [
  {
    name: "Classic Care",
    price: "₹999",
    info: "Haircut, beard grooming, wash, and basic styling",
  },
  {
    name: "Glow & Care",
    price: "₹1,999",
    info: "Hair spa, facial, haircut, and finishing",
  },
  {
    name: "Occasion Ready",
    price: "₹4,999",
    info: "Event grooming and makeup package by consultation",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {(eyebrow || title || subtitle) && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10 max-w-3xl"
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/80">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function LazyImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-zinc-900", className)}>
      <div
        className={cn(
          "absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-800 via-zinc-900 to-black transition-opacity duration-500",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition duration-700",
          loaded ? "scale-100 opacity-100" : "scale-105 opacity-0",
          imgClassName
        )}
      />
    </div>
  );
}

function handleWhatsAppClick(e, href, label = "WhatsApp Booking") {
  e.preventDefault();

  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label,
      transport_type: "beacon",
    });
    console.log("WhatsApp event fired"); // 👈 add this
  }

  setTimeout(() => {
    window.open(href, "_blank", "noopener,noreferrer");
  }, 800);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "px-3 pt-3" : "px-0 pt-0"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between border border-transparent px-4 py-4 sm:px-6 lg:px-8",
            scrolled
              ? "rounded-2xl border-white/10 bg-black/60 shadow-2xl shadow-black/30 backdrop-blur-xl"
              : "bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-orange-500 text-sm font-bold text-black shadow-lg shadow-orange-900/30">
              LA
            </div>
            <div>
              <div className="text-sm font-semibold tracking-wide text-white">
                {salonData.name}
              </div>
              <div className="text-xs text-zinc-400">
                Hair, beauty & grooming
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#booking"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Book Now
            </a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-3 top-20 z-40 rounded-3xl border border-white/10 bg-black/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-black"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#090909_0%,#0f0f0f_40%,#090909_100%)]" />
      <div className="absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:pb-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-amber-200 backdrop-blur"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
            {salonData.badge}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Salon care that looks good,
            <span className="bg-gradient-to-r from-amber-200 via-white to-orange-300 bg-clip-text text-transparent">
              {" "}
              feels good, and books easily
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg"
          >
            {salonData.subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#booking"
              className="rounded-full bg-white px-7 py-4 text-center text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
            <a
              href={salonData.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => handleWhatsAppClick(e, salonData.whatsappHref, "Hero WhatsApp Booking")}
              className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-7 py-4 text-center text-sm font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              WhatsApp Booking
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {[`${salonData.rating} ★ Rated`, salonData.reviews, salonData.openingHours].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200 backdrop-blur-xl"
                >
                  {item}
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-amber-400/20 via-transparent to-orange-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4">
            <div className="relative overflow-hidden rounded-[1.65rem]">
              <LazyImage
                src={salonData.heroImage}
                alt="Salon interior"
                priority
                className="aspect-[4/4.5] sm:aspect-[4/4.2]"
                imgClassName="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                <div className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                  Hair • Beauty • Grooming
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                  A polished salon experience from start to finish
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-zinc-200 sm:text-base">
                  Professional service, comfortable ambience, and quick booking
                  options for everyday visits and special occasions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceSection() {
  const categories = ["All", ...new Set(services.map((service) => service.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = useMemo(() => {
    if (activeCategory === "All") return services;
    return services.filter((service) => service.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section
      id="services"
      className="py-20 sm:py-24"
      eyebrow="Our services"
      title="Popular salon services"
      subtitle="Browse services for hair, skin, beauty, grooming, and special occasions."
    >
      <Reveal className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-medium transition",
              activeCategory === category
                ? "border-white bg-white text-black"
                : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
            )}
          >
            {category}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredServices.map((service, index) => (
          <Reveal key={service.id} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] shadow-xl shadow-black/10 transition"
            >
              <div className="overflow-hidden">
                <LazyImage
                  src={service.image}
                  alt={service.name}
                  className="aspect-[4/3]"
                  imgClassName="transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/70">
                      {service.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {service.name}
                    </h3>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">
                    {service.price}
                  </div>
                </div>
                <p className="text-sm leading-6 text-zinc-400">{service.desc}</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-zinc-500">
                    Duration: {service.duration}
                  </span>
                  <a
                    href="#booking"
                    className="font-medium text-white transition hover:text-amber-200"
                  >
                    Book this service →
                  </a>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function StorySection() {
  return (
    <Section
      className="pb-20"
      eyebrow="Why choose us"
      title="Comfort, care, and attention to detail"
      subtitle="A good salon visit is not only about the final result. It is also about hygiene, staff behaviour, ambience, and consistency."
    >
      <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
            <LazyImage
              src={salonData.storyImage}
              alt="Salon staff at work"
              className="aspect-[4/3] rounded-[1.4rem]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-zinc-200"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-300/15 text-amber-200">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{feature}</h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                      Designed for clients who value good service, a neat
                      environment, and an easy booking experience.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <Section
      className="py-20 sm:py-24"
      eyebrow="Packages"
      title="Salon packages for regular care and special occasions"
      subtitle="Choose a package for quick selection, better value, and a more convenient booking experience."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <Reveal key={pkg.name} delay={index * 0.06}>
            <div
              className={cn(
                "relative h-full rounded-[2rem] border p-7",
                index === 1
                  ? "border-amber-300/30 bg-gradient-to-b from-amber-300/10 to-white/[0.03]"
                  : "border-white/10 bg-white/[0.03]"
              )}
            >
              {index === 1 && (
                <div className="absolute right-6 top-6 rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-white">{pkg.name}</h3>
              <div className="mt-4 text-4xl font-bold text-white">
                {pkg.price}
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{pkg.info}</p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li>• Suitable for regular grooming or event prep</li>
                <li>• Clear service combination and pricing</li>
                <li>• Easy to choose while booking</li>
              </ul>
              <a
                href="#booking"
                className={cn(
                  "mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition",
                  index === 1
                    ? "bg-white text-black hover:scale-[1.02]"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                )}
              >
                Choose package
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function GallerySection() {
  return (
    <Section
      id="gallery"
      className="pb-20 sm:pb-24"
      eyebrow="Gallery"
      title="A look inside the salon"
      subtitle="Show the salon interior, styling work, beauty services, beard grooming, and client results."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <Reveal key={image} delay={index * 0.03}>
            <motion.div
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03]"
            >
              <LazyImage
                src={image}
                alt={`Salon gallery ${index + 1}`}
                className="aspect-[4/3]"
                imgClassName="transition duration-700 hover:scale-105"
              />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ReviewsSection() {
  return (
    <Section
      id="reviews"
      className="pb-20"
      eyebrow="Client reviews"
      title="What clients say"
      subtitle="Good service, a clean setup, and consistent results are what make clients return again."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.05}>
            <div className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <div className="mb-4 text-lg text-amber-300">★★★★★</div>
              <p className="text-sm leading-7 text-zinc-300">“{item.text}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-zinc-500">{item.role}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function BookingSection() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const initialState = {
    name: "",
    phone: "",
    service: "",
    date: "",
    note: "",
  };

  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    const finalValue =
      name === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setForm((prev) => ({ ...prev, [name]: finalValue }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccess(false);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter full name";
    if (!/^\d{10}$/.test(form.phone))
      next.phone = "Phone number must be 10 digits";
    if (!form.service) next.service = "Please select a service";
    if (!form.date) next.date = "Please select a preferred date";
    return next;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSuccess(false);
      return;
    }
    setSuccess(true);
    setForm(initialState);
  };

  return (
    <Section
      id="booking"
      className="pb-20 sm:pb-24"
      eyebrow="Appointment"
      title="Book your salon visit"
      subtitle="Send a request online or contact the salon directly through call or WhatsApp."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">
              Visit, call, or message directly
            </h3>
            <div className="mt-6 space-y-5 text-sm leading-6 text-zinc-300">
              <div>
                <div className="text-zinc-500">Address</div>
                <div className="mt-1">{salonData.address}</div>
              </div>
              <div>
                <div className="text-zinc-500">Working Hours</div>
                <div className="mt-1">{salonData.openingHours}</div>
              </div>
              <div>
                <div className="text-zinc-500">Call Us</div>
                <a
                  href={salonData.phoneHref}
                  className="mt-1 inline-block text-white underline underline-offset-4"
                >
                  {salonData.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="text-zinc-500">WhatsApp</div>
                <a
                  href={salonData.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => handleWhatsAppClick(e, salonData.whatsappHref, "Booking Info WhatsApp")}
                  className="mt-1 inline-block text-emerald-300 underline underline-offset-4"
                >
                  Chat directly for quick booking
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={salonData.phoneHref}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Call Now
              </a>
              <a
                href={salonData.whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleWhatsAppClick(e, salonData.whatsappHref, "Booking Section WhatsApp Now")}
                className="rounded-2xl bg-white px-5 py-4 text-center text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <form
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.03] p-6 sm:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Enter your full name"
                  className={inputClass(errors.name)}
                />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  inputMode="numeric"
                  placeholder="Enter 10 digit phone"
                  className={inputClass(errors.phone)}
                />
              </Field>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <Field label="Service" error={errors.service}>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={inputClass(errors.service)}
                >
                  <option value="" className="bg-zinc-950">
                    Choose service
                  </option>
                  {services.map((service) => (
                    <option
                      key={service.id}
                      value={service.name}
                      className="bg-zinc-950"
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date" error={errors.date}>
                <input
                  type="date"
                  min={today}
                  name="date"
                  value={form.date}
                  onChange={onChange}
                  className={inputClass(errors.date)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Notes">
                <textarea
                  name="note"
                  value={form.note}
                  onChange={onChange}
                  rows={4}
                  placeholder="Preferred time, special request, or occasion"
                  className={inputClass()}
                />
              </Field>
            </div>

            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                >
                  Appointment request sent successfully. The salon will confirm
                  by call or WhatsApp.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Send Appointment Request
              </button>
              <a
                href={salonData.whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleWhatsAppClick(e, salonData.whatsappHref, "Booking Form WhatsApp")}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book on WhatsApp
              </a>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-zinc-400">{label}</span>
      {children}
      {error ? (
        <span className="mt-2 block text-sm text-red-400">{error}</span>
      ) : null}
    </label>
  );
}

function inputClass(hasError) {
  return cn(
    "w-full rounded-2xl border bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-white/30",
    hasError ? "border-red-500/80" : "border-white/10"
  );
}

function ContactSection() {
  return (
    <Section
      id="contact"
      className="pb-20 sm:pb-24"
      eyebrow="Location"
      title="Easy to find. Easy to contact."
      subtitle="Keep the salon address, working hours, phone number, Instagram, and map visible for a smooth customer experience."
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">
              Salon information
            </h3>
            <div className="mt-6 space-y-5 text-sm leading-6 text-zinc-300">
              <div>
                <div className="text-zinc-500">Address</div>
                <p className="mt-1">{salonData.address}</p>
              </div>
              <div>
                <div className="text-zinc-500">Hours</div>
                <p className="mt-1">{salonData.openingHours}</p>
              </div>
              <div>
                <div className="text-zinc-500">Phone</div>
                <a
                  href={salonData.phoneHref}
                  className="mt-1 inline-block text-white underline underline-offset-4"
                >
                  {salonData.phoneDisplay}
                </a>
              </div>
              <div>
                <div className="text-zinc-500">Instagram</div>
                <a
                  href={salonData.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-white underline underline-offset-4"
                >
                  {salonData.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3">
            <iframe
              src={salonData.mapEmbed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-[1.4rem]"
              title="Salon map"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-lg font-semibold text-white">
            {salonData.name}
          </div>
          <div className="mt-1 text-sm text-zinc-500">
            {salonData.tagline}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>
          <a href="#gallery" className="transition hover:text-white">
            Gallery
          </a>
          <a href="#reviews" className="transition hover:text-white">
            Reviews
          </a>
          <a href="#booking" className="transition hover:text-white">
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={salonData.phoneHref}
        className="rounded-full border border-white/10 bg-black/75 px-5 py-3 text-sm font-semibold text-white shadow-xl backdrop-blur-xl transition hover:scale-105"
      >
        Call
      </a>
      <a
        href={salonData.whatsappHref}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => handleWhatsAppClick(e, salonData.whatsappHref, "Floating WhatsApp")}
        className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default function SalonWebsitePro() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#090909] text-white selection:bg-amber-300 selection:text-black">
      <Header />
      <Hero />
      <StatsSection />
      <ServiceSection />
      <StorySection />
      <PackagesSection />
      <GallerySection />
      <ReviewsSection />
      <BookingSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}