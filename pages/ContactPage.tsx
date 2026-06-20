import React from 'react';
import { MapPin, Mail, Building2, User, Phone, MessageSquare, Send, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              KLE Technological University,<br />
              Dr. M. S. Sheshgiri Campus,<br />
              Udyambagh, Belagavi – 590008,<br />
              Karnataka, India
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <a
              href="mailto:cnest.mss@kletech.ac.in"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              cnest.mss@kletech.ac.in
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
            <a
              href="tel:08312491836"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              0831-2491836
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="mb-12 max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-10 border border-blue-100 dark:border-gray-700 transition-colors duration-300 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 dark:bg-purple-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-4 shadow-lg">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Get in Touch</h2>
                <p className="text-gray-600 dark:text-gray-400">We'd love to hear from you. Fill out the form below and we'll get back to you soon.</p>
              </div>

              <form className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-5 py-4 bg-white dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-4 bg-white dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-5 py-4 bg-white dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-5 py-4 bg-white dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="incubation">🚀 Incubation Inquiry</option>
                    <option value="partnership">🤝 Partnership Opportunity</option>
                    <option value="general">💬 General Inquiry</option>
                    <option value="other">📋 Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-white dark:bg-gray-700/50 border-2 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
                    placeholder="Tell us about your idea, project, or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                  We typically respond within 24-48 hours
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto transition-colors duration-300">
          <div className="p-6 bg-blue-900 dark:bg-blue-800 text-white">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Our Location</h2>
            </div>
            <p className="text-blue-100 dark:text-blue-200 mt-2">
              KLE Technological University's, Dr. M. S. Sheshgiri Campus<br />
              Angol Main Rd, Udyambag, Belagavi, Karnataka 590006
            </p>
          </div>
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6901291080335!2d74.49383589678958!3d15.820284900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf65ce55555555%3A0x9b70f622a9a0fb44!2sKLE%20Technological%20University&#39;s%2C%20Dr.%20M.%20S.%20Sheshgiri%20Campus!5e0!3m2!1sen!2sin!4v1767033188281!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KLE Dr. M. S. Sheshgiri Campus Location"
            ></iframe>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-blue-100 dark:border-gray-600">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Connect With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/kle-cnest/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Follow on LinkedIn</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">KLE CNEST — Latest updates &amp; news</p>
                </div>
              </a>

              {/* WhatsApp Community */}
              <a
                href="https://whatsapp.com/channel/0029VakCgp65kg6xvcpMEO1K"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.526 5.865L0 24l6.312-1.493A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.791 9.791 0 01-5.034-1.388l-.361-.214-3.741.885.936-3.637-.235-.374A9.773 9.773 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">WhatsApp Community</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">KLE CTIE Belagavi Campus Channel</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/cnest_ctie_kledrmsscet/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-opacity group-hover:opacity-90" style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Follow on Instagram</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">@cnest_ctie_kledrmsscet</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
