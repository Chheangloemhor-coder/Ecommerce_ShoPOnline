import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaHeadset,
  FaClock,
  FaHdd,
  FaSyncAlt,
  FaCalendarCheck,
  FaStar,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaMicrochip,
} from 'react-icons/fa';
import { serviceList } from '../data/ServiceData';

function Service() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  // Booking form state
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    device: '',
    service: 'Hardware Repair',
    urgency: 'standard',
    notes: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'repair', name: 'Laptop & Hardware Repair' },
    { id: 'upgrade', name: 'Upgrades & PC Builds' },
    { id: 'software', name: 'Software & Data Recovery' },
    { id: 'business', name: 'Enterprise & IT' },
    { id: 'trade', name: 'Trade-In & Sales' },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? (serviceList || [])
      : (serviceList || []).filter((s) => s.category === activeCategory);

  const faqs = [
    {
      q: 'How long does a standard laptop diagnosis take?',
      a: 'We offer free initial diagnostics. In most cases, our technicians can diagnose common issues (such as battery, display, RAM, or storage) within 30 to 60 minutes while you wait in our store.',
    },
    {
      q: 'What is your "No Fix, No Fee" policy?',
      a: 'If we cannot resolve the issue with your device or if replacement parts are unavailable, you will not be charged a single dollar for our repair labor.',
    },
    {
      q: 'Do you provide a warranty on repairs and upgrades?',
      a: 'Yes! All hardware repairs come with a standard 90-day warranty. New upgraded components like SSDs and RAM include 1 to 3 years official manufacturer warranty.',
    },
    {
      q: 'Can I keep my data safe during repair?',
      a: 'Absolutely. We place extreme emphasis on user privacy. We recommend backing up data where possible, and for standard screen/keyboard/battery repairs your storage drive is completely untouched.',
    },
    {
      q: 'Do you offer pickup and delivery in Phnom Penh?',
      a: 'Yes! We collaborate with reliable delivery riders across Phnom Penh. You can request a device pickup through our booking form or by messaging our Telegram support team.',
    },
  ];

  const handleOpenModal = (serviceName = '') => {
    setSelectedServiceForModal(serviceName);
    setBookingData((prev) => ({
      ...prev,
      service: serviceName || 'General Tech Inspection',
    }));
    setIsModalOpen(true);
    setBookingSuccess(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const randomId = 'SRV-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setBookingSuccess(true);
  };

  return (
    <div className="bg-amber-50/40 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-amber-500 via-orange-500 to-amber-600 p-8 sm:p-14 text-white shadow-xl mb-12">
          <div className="max-w-3xl relative z-10">
            <span className="bg-amber-950/70 border border-amber-300/40 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-200 mb-4 shadow-sm">
              <FaTools className="text-amber-400 shrink-0" />
              <span>Official Service Center • 20+ Years Trusted in Cambodia</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white">
              Professional Computer Services, Repairs & Upgrades
            </h1>
            <p className="mt-4 text-base sm:text-lg text-amber-100 leading-relaxed font-normal">
              Whether your gaming rig needs a liquid cooling tune-up, your laptop suffered liquid damage, or you need instant SSD and RAM expansion — our certified technicians deliver speedy, guaranteed repairs with 100% genuine parts.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
              <button
                onClick={() => handleOpenModal('General Tech Inspection')}
                className="rounded-xl bg-amber-950 hover:bg-amber-900 px-6 py-3.5 text-base font-bold text-amber-300 shadow-lg transition hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <FaCalendarCheck /> Book a Service Online
              </button>
              <a
                href="#pricing-table"
                className="rounded-xl bg-white/20 hover:bg-white/30 border border-white/40 px-6 py-3.5 text-base font-bold text-white transition hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaClock /> View Transparent Rates
              </a>
              <a
                href="tel:+85511213818"
                className="rounded-xl bg-amber-600 hover:bg-amber-700 px-5 py-3.5 text-base font-bold text-white transition hover:scale-105 flex items-center justify-center gap-2"
              >
                <FaPhoneAlt /> Call: +855 11 213818
              </a>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute -right-16 -bottom-16 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute right-10 top-10 w-64 h-64 bg-orange-400/30 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 4 Guarantees Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="rounded-2xl bg-white p-6 shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 text-2xl">
              <FaShieldAlt />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">1-2 Yrs Warranty</h3>
              <p className="text-sm text-gray-500 mt-1">Full warranty on all labor and replacement parts.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3.5 rounded-2xl bg-orange-500/10 text-orange-600 text-2xl">
              <FaCheckCircle />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">No Fix, No Fee</h3>
              <p className="text-sm text-gray-500 mt-1">Zero charge if we cannot diagnose or fix your issue.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-600 text-2xl">
              <FaClock />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">Fast Turnaround</h3>
              <p className="text-sm text-gray-500 mt-1">Same-day service available for urgent maintenance.</p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm border border-amber-100 flex items-start gap-4 hover:shadow-md transition">
            <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-600 text-2xl">
              <FaMicrochip />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-lg">100% Genuine Parts</h3>
              <p className="text-sm text-gray-500 mt-1">Certified OEM parts directly from authorized suppliers.</p>
            </div>
          </div>
        </div>

        {/* Service Categories Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Explore Our Technical Services
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Select a category to view specialized repair solutions and upgrade packages.
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-800 rounded-full w-fit">
              Showing {filteredServices.length} Services
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-amber-100/60 border border-amber-200/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((srv) => {
            const Icon = srv.icon || FaTools;
            return (
              <div
                key={srv.id}
                className="rounded-3xl bg-white p-6 sm:p-7 shadow-sm border border-amber-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300 relative group"
              >
                {srv.popular && (
                  <span className="absolute top-5 right-5 bg-linear-to-r from-amber-500 to-orange-500 text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                    Popular
                  </span>
                )}

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl mb-5 group-hover:bg-amber-600 group-hover:text-white transition duration-300">
                    <Icon />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">
                    {srv.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    {srv.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <FaCheckCircle className="text-emerald-500 shrink-0 text-sm" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-amber-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Turnaround
                    </span>
                    <span className="text-xs font-bold text-gray-700 flex items-center gap-1 mt-0.5">
                      <FaClock className="text-amber-500" /> {srv.time}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Starting At
                    </span>
                    <span className="text-base font-extrabold text-amber-700">
                      {srv.price}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenModal(srv.title)}
                  className="mt-5 w-full rounded-xl bg-amber-100/70 hover:bg-amber-600 text-amber-800 hover:text-white font-bold text-sm py-2.5 transition duration-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <FaCalendarCheck /> Book This Service
                </button>
              </div>
            );
          })}
        </div>

        {/* Transparent Rates & Pricing Table */}
        <div id="pricing-table" className="mb-16 scroll-mt-6">
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-amber-100">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Transparent & Honest Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
                Common Service & Repair Price Guide
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                We believe in total transparency. Final quotes are confirmed after free diagnostics, with zero hidden charges.
              </p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="text-xs text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md sm:hidden font-medium inline-flex items-center gap-1">
                 Scroll table horizontally to view rates
              </span>
            </div>

            <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
              <table className="w-full text-left border-collapse min-w-125px">
                <thead>
                  <tr className="border-b border-amber-200 bg-amber-50/60 text-xs font-black text-amber-900 uppercase">
                    <th className="py-3.5 px-4 rounded-l-xl">Service Item</th>
                    <th className="py-3.5 px-4">Estimated Time</th>
                    <th className="py-3.5 px-4">Warranty</th>
                    <th className="py-3.5 px-4 text-right rounded-r-xl whitespace-nowrap">Est. Cost (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      Laptop & PC Hardware Diagnostics
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">30 - 60 mins</td>
                    <td className="py-3.5 px-4 text-emerald-600 font-medium">Free Always</td>
                    <td className="py-3.5 px-4 font-extrabold text-emerald-600 text-right">$0.00</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      Thermal Paste Repasting & Deep Cleaning
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">1 - 2 hours</td>
                    <td className="py-3.5 px-4 text-gray-600">30 Days</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800 text-right">$15 - $25</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      Windows 11 / macOS Clean Install + All Drivers
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">1 - 2 hours</td>
                    <td className="py-3.5 px-4 text-gray-600">30 Days</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800 text-right">$10 - $20</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      RAM Upgrade (8GB / 16GB / 32GB DDR4/DDR5)
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">30 mins</td>
                    <td className="py-3.5 px-4 text-blue-600 font-medium">1 - 3 Years</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800 text-right">$25 - $75</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      NVMe SSD Upgrade (512GB / 1TB / 2TB + OS Clone)
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">1 - 2 hours</td>
                    <td className="py-3.5 px-4 text-blue-600 font-medium">3 Years</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800 text-right">$40 - $120</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      Laptop Screen Replacement (FHD 144Hz / 2K)
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">Same Day</td>
                    <td className="py-3.5 px-4 text-gray-600">6 Months</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800 text-right">$55 - $150</td>
                  </tr>
                  <tr className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      Motherboard Micro-Soldering & IC Chip Repair
                    </td>
                    <td className="py-3.5 px-4 text-gray-600">1 - 2 days</td>
                    <td className="py-3.5 px-4 text-gray-600">90 Days</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800 text-right">$35 - $90</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200/60">
              <div className="text-xs text-amber-900">
                <span className="font-bold">Need a specific quote for your laptop model?</span> Contact our technicians directly with your exact model code.
              </div>
              <button
                onClick={() => handleOpenModal('Custom Hardware Quote')}
                className="px-5 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition whitespace-nowrap cursor-pointer"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>

        {/* 5-Step Repair Process */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full">
              Seamless Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
              How Our Service Process Works
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              From the moment you drop off your equipment until final testing, we keep you informed every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Bring or Book', desc: 'Drop off in Phnom Penh or request a secure courier pickup.' },
              { step: '02', title: 'Free Diagnostic', desc: 'Full hardware & thermals inspection to pinpoint the exact fault.' },
              { step: '03', title: 'Price Approval', desc: 'We present clear upfront pricing before touching a single screw.' },
              { step: '04', title: 'Precision Fix', desc: 'Skilled repair using genuine parts followed by stress benchmarks.' },
              { step: '05', title: 'Warranty Handover', desc: 'Collect your device with official receipt and 90-day guarantee.' },
            ].map((st, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-amber-100 shadow-sm relative hover:border-amber-400 transition"
              >
                <div className="text-2xl font-black text-amber-500/30 mb-2">
                  {st.step}
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">
                  {st.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-amber-100 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-amber-100 rounded-2xl overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-amber-50/30 hover:bg-amber-50/70 transition cursor-pointer font-bold text-gray-800 text-base"
                  >
                    <span>{faq.q}</span>
                    <span className="text-amber-600 text-sm">
                      {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 text-sm text-gray-600 bg-white leading-relaxed border-t border-amber-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Help & Store Banner */}
        <div className="rounded-3xl bg-linear-to-r from-amber-950 via-stone-900 to-amber-950 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-amber-400 text-xs font-black uppercase tracking-wider">
              Need Instant Support?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
              Speak With a Senior Technician Today
            </h3>
            <p className="text-stone-300 text-sm mt-2 leading-relaxed">
              Have an urgent breakdown or question? Chat with our hardware engineers on Telegram or call us directly during open hours (8:00 AM - 8:00 PM every day).
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => handleOpenModal('Emergency Tech Assistance')}
              className="rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold px-6 py-3.5 text-sm transition hover:scale-105 cursor-pointer shadow-lg flex items-center gap-2"
            >
              <FaCalendarCheck /> Book Free Inspection
            </button>
            <Link
              to="/about"
              className="rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-3.5 text-sm transition hover:scale-105"
            >
              Visit Store Location →
            </Link>
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl md:max-w-2xl w-full p-6 sm:p-8 md:p-10 shadow-2xl relative border border-amber-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 text-2xl cursor-pointer p-1 transition"
            >
              <FaTimes />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  Service Request Received!
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-3 max-w-lg mx-auto">
                  Thank you, <span className="font-bold text-gray-900">{bookingData.name}</span>. Our technician will call or message your phone number (<span className="font-bold text-gray-900">{bookingData.phone}</span>) within 30 minutes to confirm your diagnostic slot.
                </p>

                <div className="my-6 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-left">
                  <div className="text-xs text-amber-800 font-bold uppercase tracking-wider">
                    Service Ticket Reference
                  </div>
                  <div className="text-2xl font-black text-amber-900 mt-1">
                    {ticketId}
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Service: <span className="font-semibold text-gray-800">{bookingData.service}</span> • Device: <span className="font-semibold text-gray-800">{bookingData.device || 'Unspecified'}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 text-base transition cursor-pointer shadow-md"
                >
                  Done & Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Quick Online Booking
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                    Schedule Service & Repair
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Fill out this form and our senior technical engineers will prepare your diagnostic plan upfront.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="name"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Phone / Telegram *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="phone"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Device Brand & Model
                      </label>
                      <input
                        type="text"
                        placeholder="device"
                        value={bookingData.device}
                        onChange={(e) => setBookingData({ ...bookingData, device: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={bookingData.service}
                        onChange={(e) => setBookingData({ ...bookingData, service: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden bg-white transition cursor-pointer"
                      >
                        <option value="General Tech Inspection">Free Diagnostic Inspection</option>
                        <option value="Motherboard & Chip-Level Repair">Motherboard & Chip Repair</option>
                        <option value="Screen & Display Replacement">Screen Replacement</option>
                        <option value="High-Speed NVMe SSD Upgrade">SSD Upgrade & OS Clone</option>
                        <option value="Custom Gaming & Workstation Builds">Custom PC Building</option>
                        <option value="Battery & Power System Fix">Battery & Charging Fix</option>
                        <option value="Deep Thermal Cleaning & Repaste">Thermal Cleaning & Repaste</option>
                        <option value="Clean OS Install & Optimization">Windows / macOS Reinstall</option>
                        <option value="Emergency Data Recovery">Data Recovery</option>
                        <option value="Corporate Office IT & Maintenance">Corporate IT Setup</option>
                        <option value="Tech Trade-In & Buyback">Trade-in / Buyback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                        Urgency Level
                      </label>
                      <select
                        value={bookingData.urgency}
                        onChange={(e) => setBookingData({ ...bookingData, urgency: e.target.value })}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden bg-white transition cursor-pointer"
                      >
                        <option value="standard">Standard (Within 24-48h)</option>
                        <option value="urgent">Urgent / Same-Day Rush</option>
                        <option value="weekend">Drop-off on Weekend</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                      Describe the Problem / Symptoms
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Laptop turns on but no display, or overheating when playing games..."
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm sm:text-base focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 outline-hidden transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 text-base shadow-lg transition hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    Confirm Service Booking
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;
