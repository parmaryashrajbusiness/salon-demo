import { useMemo, useState } from "react";

export default function GentlemanUnisexSalonDemo() {

  const salonData = {
  name: "Premium Unisex Salon",
  tagline: "Modern grooming for men & women",
  displayPhone: "+91 99999 99999",
  telLink: "tel:+919999999999",
  whatsappUrl: "https://api.whatsapp.com/send?phone=919999999999&text=Hi%20I%20want%20to%20book%20an%20appointment",
  address: "Your salon address here",
  map: "https://www.google.com/maps/embed?pb=...",
  rating: "4.8★",
  reviews: "100+ Reviews",
};

  const services = [
    { name: "Haircut & Styling", price: "₹149 onwards", desc: "Clean cuts, trendy styling, and personalized grooming for men and women." },
    { name: "Beard Styling", price: "₹99 onwards", desc: "Sharp beard shaping, trimming, and finishing with a premium look." },
    { name: "Hair Spa", price: "₹399 onwards", desc: "Relaxing treatment for nourishment, smoothness, and scalp care." },
    { name: "Facial & Skin Care", price: "₹499 onwards", desc: "Glow-boosting skin treatment for fresh and healthy-looking skin." },
    { name: "Manicure & Pedicure", price: "₹299 onwards", desc: "Complete hand and foot care for a neat and polished finish." },
    { name: "Bridal / Party Grooming", price: "Custom package", desc: "Special-event grooming and beauty services for memorable occasions." },
  ];

  const highlights = [
    "4.8★ rated by 188+ customers",
    "Professional and attentive staff",
    "Clean, hygienic, relaxing salon experience",
    "Popular for beard styling and grooming",
  ];

  const testimonials = [
    {
      name: "Bodra Vraj",
      text: "I was really impressed with the beard styling service. They shaped it beautifully and gave me some great tips for maintenance.",
    },
    {
      name: "Happy Customer",
      text: "Both my wife and I received excellent services, from haircuts to manicures. The staff were professional throughout.",
    },
    {
      name: "Regular Client",
      text: "The atmosphere is relaxing, hygiene standards are high, and the overall service feels premium and worth it.",
    },
  ];

  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  const initialFormData = {
    fullName: "",
    phoneNumber: "",
    service: "",
    preferredDate: "",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const cleanedValue = name === "phoneNumber" ? value.replace(/\D/g, "").slice(0, 10) : value;

    setFormData((prev) => ({
      ...prev,
      [name]: cleanedValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Please select a preferred date.";
    } else if (formData.preferredDate < today) {
      newErrors.preferredDate = "Date must be today or a future date.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setSuccessMessage("Appointment request sent successfully. The salon will contact you soon.");
    setFormData(initialFormData);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_28%),linear-gradient(180deg,#111111_0%,#0a0a0a_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-24 -left-10 h-56 w-56 rounded-full bg-white blur-3xl sm:h-72 sm:w-72" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-zinc-500 blur-3xl sm:h-64 sm:w-64" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div>
            <div className="mb-4 inline-flex max-w-full items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 backdrop-blur sm:text-sm">
              Premium grooming experience near you
            </div>
            <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {salonData.name}
            </h1>
            <p className="mt-3 text-base text-zinc-300 sm:text-lg md:text-xl">
              Premium salon services for men and women — haircut, beard styling,
              skin care, spa, and complete grooming under one roof.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black sm:text-sm">{salonData.rating} Rating</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 sm:text-sm">
                {salonData.reviews}
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-zinc-200 sm:text-sm">Open till 10 PM</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#booking"
                className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black transition hover:scale-[1.02]"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Services
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur sm:rounded-[28px] sm:p-4">
              <div className="aspect-[4/3] rounded-[20px] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-4 sm:rounded-[22px] sm:p-6">
                <div className="flex h-full flex-col justify-between rounded-[18px] border border-white/10 bg-black/40 p-4 sm:rounded-[20px] sm:p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 sm:text-sm sm:tracking-[0.25em]">Signature Experience</p>
                    <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">Style. Comfort. Confidence.</h3>
                    <p className="mt-3 max-w-md text-sm text-zinc-300 sm:text-base">
                      A modern unisex salon experience designed for quality grooming,
                      hygiene, and customer satisfaction.
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs sm:gap-3 sm:text-sm">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-lg font-bold sm:text-xl">188+</div>
                      <div className="text-zinc-400">Reviews</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-lg font-bold sm:text-xl">4.8★</div>
                      <div className="text-zinc-400">Google Rating</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <div className="text-lg font-bold sm:text-xl">10 PM</div>
                      <div className="text-zinc-400">Closing Time</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-zinc-400">Location</p>
                <p className="mt-2 text-sm font-medium text-zinc-100 sm:text-base">
                  {salonData.address}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-zinc-400">Best Known For</p>
                <p className="mt-2 text-sm font-medium text-zinc-100 sm:text-base">
                  Beard styling, attentive service, hygiene, and relaxing atmosphere
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Services</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Professional grooming services</h2>
          </div>
          <p className="max-w-xl text-sm text-zinc-400 sm:text-base">
            Designed to present the salon as premium, trustworthy, and easy to book online.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:rounded-[28px] sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-lg font-semibold sm:text-xl">{service.name}</h3>
                <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold text-black">{service.price}</span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Why choose us</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Where grooming meets trust</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Clean and hygienic environment",
                  "Skilled staff with customer-first attitude",
                  "Comfortable unisex salon setup",
                  "Convenient location in Surat",
                  "Strong online reputation",
                  "Quality service at affordable pricing",
                ].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-black/30 p-5 text-sm text-zinc-200 sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-black/30 p-5 shadow-2xl sm:rounded-[32px] sm:p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Customer love</p>
              <div className="mt-6 space-y-4">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-2 text-yellow-300">★★★★★</div>
                    <p className="text-sm leading-6 text-zinc-300">“{item.text}”</p>
                    <p className="mt-3 text-sm font-semibold text-white">— {item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-10 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Appointment</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Book your salon visit</h2>
            <p className="mt-4 max-w-lg text-sm text-zinc-400 sm:text-base">
              This section is intentionally simple and business-friendly. Customers can send a quick appointment request and the salon can confirm by phone or WhatsApp.
            </p>

            <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[28px] sm:p-6">
              <div className="space-y-4 text-sm text-zinc-300">
                <div>
                  <div className="text-zinc-500">Address</div>
                  <div className="mt-1">{salonData.address}</div>
                </div>
                <div>
                  <div className="text-zinc-500">Working Hours</div>
                  <div className="mt-1">Open daily • Closes at 10:00 PM</div>
                </div>
                <div>
                  <div className="text-zinc-500">Booking Method</div>
                  <div className="mt-1">Request online, then confirm via call or WhatsApp</div>
                </div>
                <div>
                  <div className="text-zinc-500">Call Us</div>
                  <a href={salonData.telLink} className="mt-1 inline-block text-white underline underline-offset-4">{salonData.displayPhone}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[32px] sm:p-6 md:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full rounded-2xl border px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/30 ${errors.fullName ? "border-red-500 bg-red-500/10" : "border-white/10 bg-black/40"}`}
                    placeholder="Enter your name"
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">Phone Number</label>
                  <input
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    inputMode="numeric"
                    maxLength={10}
                    className={`w-full rounded-2xl border px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/30 ${errors.phoneNumber ? "border-red-500 bg-red-500/10" : "border-white/10 bg-black/40"}`}
                    placeholder="Enter 10 digit phone number"
                  />
                  {errors.phoneNumber && <p className="mt-2 text-sm text-red-400">{errors.phoneNumber}</p>}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">Service</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full rounded-2xl border px-4 py-3 text-white outline-none focus:border-white/30 ${errors.service ? "border-red-500 bg-red-500/10" : "border-white/10 bg-black/40"}`}
                  >
                    <option value="" className="bg-neutral-900">Choose service</option>
                    <option value="Haircut & Styling" className="bg-neutral-900">Haircut & Styling</option>
                    <option value="Beard Styling" className="bg-neutral-900">Beard Styling</option>
                    <option value="Hair Spa" className="bg-neutral-900">Hair Spa</option>
                    <option value="Facial & Skin Care" className="bg-neutral-900">Facial & Skin Care</option>
                    <option value="Manicure & Pedicure" className="bg-neutral-900">Manicure & Pedicure</option>
                    <option value="Bridal / Party Grooming" className="bg-neutral-900">Bridal / Party Grooming</option>
                  </select>
                  {errors.service && <p className="mt-2 text-sm text-red-400">{errors.service}</p>}
                </div>
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">Preferred Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={today}
                    className={`w-full rounded-2xl border px-4 py-3 text-white outline-none focus:border-white/30 ${errors.preferredDate ? "border-red-500 bg-red-500/10" : "border-white/10 bg-black/40"}`}
                  />
                  {errors.preferredDate && <p className="mt-2 text-sm text-red-400">{errors.preferredDate}</p>}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">Notes</label>
                <textarea
                  rows={4}
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-white/30"
                  placeholder="Any preferred time or special request?"
                />
              </div>

              {successMessage && (
                <div className="rounded-2xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  {successMessage}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button type="submit" className="w-full rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01] sm:w-auto">
                  Send Appointment Request
                </button>
                <a
                  href={salonData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-2xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/5 sm:w-auto"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Visit us</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">Easy to find, easy to visit</h2>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              Located in Vishal Nagar, Surat, the salon is positioned to attract local walk-ins and repeat customers. A proper website improves trust and helps customers discover services before visiting.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-4 sm:rounded-[32px]">
            <iframe
              src={salonData.map}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <div className="text-lg font-semibold sm:text-xl">{salonData.name}</div>
            <div className="mt-1 text-sm text-zinc-500">Premium grooming experience for men and women in Surat.</div>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-zinc-400 sm:gap-4">
            <a href="#services" className="relative z-20 hover:text-white">Services</a>
            <a href="#booking" className="relative z-20 hover:text-white">Book Appointment</a>
            <a href={salonData.telLink} className="relative z-20 hover:text-white">Call Now</a>
            <a
              href={salonData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 hover:text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        href={salonData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-[999] rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-600"
      >
        WhatsApp
      </a>
    </div>
  );
}
