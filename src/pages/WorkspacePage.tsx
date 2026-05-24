import { motion } from "motion/react";
import FlipWord from "../components/FlipWord";

const workspacePricing = [
  { name: "Daily Pass", price: 40, period: "/day", features: ["Access to open-plan zones", "High-speed connectivity"], featured: false },
  { name: "Performance", price: 450, period: "/month", features: ["Dedicated desk", "5 hours of focus pod credits", "Unlimited hydration"], featured: true },
  { name: "Elite", price: 750, period: "/month", features: ["Private office option", "Unlimited focus pod access", "2 guest passes per month", "Mail handling"], featured: false }
];

const features = [
  { icon: "wifi", title: "High-Speed Connectivity", desc: "Enterprise-grade fiber internet ensuring zero latency for heavy data processing and video conferencing." },
  { icon: "meeting_room", title: "Private Focus Pods", desc: "Acoustically treated environments for deep concentration, client calls, and undisturbed productivity." },
  { icon: "groups", title: "Collaborative Zones", desc: "Open-plan areas designed to foster community, networking, and dynamic team interactions." }
];

const amenities = [
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWXa0YHbYphV3KyRO0-hsbh0EFKywNU8YPIFohChTkyceIj5qxwuQJq96NyChbInxYdHc57OB2_oBP_4ebTmW-_CKMj4O6rbgKp9jOEoXZFDwI2FRTSwrAFdVBHlRNOpr9u7N2hwqzq0YxShU1OT_My6q-D2VqiTf8m9C5xzmSfRLXWKWK_zJ7z3TSULxA5iD-tedqdu1oCnLXMePmkXD-egPP36RkdA7zi7dQ0vyTwjgQNIenYCSFdfJIuTk-9cvwyHsrRwQtti2-", label: "FIBER", span: 2 },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUkFtmwV07NLEB1LN6dy_I12PoiRXkC4d-fopJ49o-3v6A-dLQRtiHl-VJgnYHHczryp2QifcgaijPtWLUyGuy_tl9c2vqgrlq0U6u65aeeLHD67vTX2FZvDvpayMAi5iCzrVGnEoolP73d7C0V99bj-kHkX4DGvVIlvy-PKGbVbfD7VeDtBXwx0zpb3jzWn2xClq4bR-L7kpGXF4rzPglg5nI9KF9GlAlQFUxljWlIjzPRDDY23V_oOOtWI0kQEayO3HrZG7Fa_AC", label: "PODS", span: 1 },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyVTyqtV2lfZDtoSbp7YEvzo3B0eflOngA_UXLwVxo6NeJDYpEL-ZobNKNO_Xc8ydJ4AJDG7UnU9ygjJ8n1AdAa04Nbgqe1nQ_9WKbT6jzt8TZC_StUId6aXFpk49RJNJdMU26CuRyIPKDw7cvcCvNkK8EgSxgE28rhTZYc5qVLnT6okH0gHG1cbz4nJssLI99p5ap5APb9DR-auA2UpuNhWVT910jENkJTR2OtId8elS5Tb2cINvgmMMATCbqMQSyMc6JOU37D7O8", label: "RECOVERY", span: 1 },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD58a7kqYnWG5fcbEVNLrzUpTx1HZOkRmLsiRwh-yBT2tXvYZ7nR81SMlmUBRwhfSuAtPqgc-SYohKOdROLNMzbJlAxvEtkLM_ZmcvTRr6JH9-hBYVQ_4S8KmK7ZIuZCpIqfkVrr2e1aww5spODo_cLvFixgO4ASx0VPfQ9mdyLL6T5R71103TgnwFQrjuTDdyH4fdIGhgaVRmcVbKrc6vxoITShEKVv53zQ7GXQCpKJQOYA-FYO0OtoKrtzpHWQHLrkJbLo8oHwpcr", label: "LOUNGE", span: 2 }
];

export default function WorkspacePage() {
  const openLeadModal = () => {
    window.dispatchEvent(new CustomEvent("open-lead-modal", { detail: { plan: "Enterprise" } }));
  };

  return (
    <div className="pt-24 selection:bg-primary-container selection:text-on-primary-container">
      {/* Hero */}
      <section className="px-6 md:px-16 py-16 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="md:col-span-5 flex flex-col justify-center pr-0 md:pr-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-primary"></div>
              <span className="font-label-md text-label-md uppercase text-primary tracking-widest">Facility</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display-xl text-5xl md:text-7xl text-on-surface mb-8 uppercase"
            >
              <FlipWord word="WORKSPACE" />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg"
            >
              A high-performance co-working environment designed specifically for athletes and fitness professionals. Transition seamlessly from elite training to focused deep work without leaving the facility.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={openLeadModal}
                className="bg-primary-container text-black font-label-md text-label-md uppercase px-8 py-4 rounded font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(42,183,255,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                BOOK A DESK
              </button>
              <button className="border border-primary text-primary font-label-md text-label-md uppercase px-8 py-4 rounded font-bold transition-all duration-300 hover:bg-primary/10 flex items-center justify-center cursor-pointer">
                MEMBERSHIP OPTIONS
              </button>
            </motion.div>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8 mt-12 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                alt="Workspace"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhyG4Q06qQaddZhIkXvLo4ioPzMoXpd0PDt2BPrGBNt2Q_D_53wFYzxwciNvYjKJmp8TKdgOpAHRKGT9_Nt-3cCtW6U5bnZAwqrDPL_e3anRBhn_kX0iQwfFF6iTCLE3ypejs2UZOEnEaXcKjJ5eIU1yTj9yYr1l6F-_UkOFbtllofZ21vbORjrj5La-djqlltHjKjfEC4mUMjA_V2wqjhc0eTu_Azhp28k1-phE5q4R1yoD2obJcKatgQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c141c] to-transparent opacity-60"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feat, idx) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="bg-[#0D1117] p-6 rounded-lg border border-white/5 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary text-2xl font-bold">◆</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{feat.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-surface-container-low py-16 px-6 md:px-16 w-full">
        <div className="max-w-[1920px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="font-headline-lg text-3xl md:text-5xl text-on-surface mb-4 uppercase">
              <FlipWord word="WORKSPACE MEMBERSHIPS" triggerOnView />
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Flexible high-performance environments for focused deep work.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workspacePricing.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 border rounded-xl flex flex-col hover:border-primary/50 transition-colors duration-300 relative ${
                  plan.featured
                    ? "bg-surface-container-highest border-primary shadow-2xl md:-translate-y-4"
                    : "bg-surface border-outline-variant/30"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-label-md text-label-md uppercase px-4 py-1 rounded-full font-bold whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="font-display-xl text-5xl text-on-surface">${plan.price}</span>
                  <span className="font-body-md text-on-surface-variant">{plan.period}</span>
                </div>
                <div className="h-px w-full bg-outline-variant/30 mb-6"></div>
                <ul className="flex flex-col gap-4 mb-8 flex-grow">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span className="font-body-md text-on-surface-variant">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openLeadModal}
                  className={`w-full font-label-md text-label-md uppercase py-3 rounded font-bold transition-all duration-300 cursor-pointer ${
                    plan.featured
                      ? "bg-primary-container text-black shadow-[0_0_20px_rgba(42,183,255,0.3)] hover:scale-105"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  SELECT {plan.name.toUpperCase()}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="px-6 md:px-16 w-full max-w-[1920px] mx-auto pb-24 pt-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-headline-lg text-3xl md:text-5xl text-on-surface uppercase mb-12"
        >
          <FlipWord word="THE AMENITIES" triggerOnView />
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {amenities.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`${item.span === 2 ? "md:col-span-2" : "md:col-span-1"} relative overflow-hidden rounded-2xl border border-white/10 group`}
            >
              <img
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <span className="absolute bottom-4 left-4 font-label-md text-[10px] tracking-widest uppercase text-white bg-black/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
