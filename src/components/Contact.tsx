import { Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-200">
          <div className="bg-slate-800 py-10 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Let's Talk About Your Project</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We value personal service over automated chats. Call our office to speak directly with our team about your gutter needs.
            </p>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">

              <div className="text-center md:text-left space-y-8">
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-orange-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Call Us Directly</h3>
                  <a href="tel:318-442-8224" className="text-3xl md:text-4xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                    (318) 442-8224
                  </a>
                  <p className="text-stone-500 mt-2">Mon-Fri: 7am - 5pm</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Our Locations</h3>
                  <div className="text-stone-600 text-lg space-y-3">
                    <p>
                      <strong className="block text-stone-800 text-base">Alexandria Office</strong>
                      5001 Sarah Street<br />
                      Alexandria, LA 71303
                    </p>
                    <p>
                      <strong className="block text-stone-800 text-base">Pineville Office</strong>
                      6001 Pentecostal Way<br />
                      Pineville, LA 71360
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-px h-64 bg-stone-200"></div>

              <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 max-w-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-600" />
                  Why Call Us?
                </h3>
                <ul className="space-y-4 text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Speak to a real person, not a robot.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Get answers to your technical questions immediately.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold">•</span>
                    <span>Schedule a free, no-obligation estimate at your convenience.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
