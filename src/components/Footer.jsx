import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mx-auto bg-gray-50 text-slate-600 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <Image
                          src={"/logo.png"}
                          alt="logo"
                          loading="eager"
                          width={32}
                          height={32}
                          className="object-cover h-auto w-auto"
                        />
              <span className="font-black text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500">
            BookVibe
          </span>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Empowering readers across Bangladesh with a smart, simple online book borrowing platform.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-3">
                Follow Us
              </span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-500 hover:shadow-sm transition-all">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-500 hover:shadow-sm transition-all">
                  <FaInstagram className="text-sm" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-500 hover:shadow-sm transition-all">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-pink-600 hover:border-pink-500 hover:shadow-sm transition-all">
                  <FaGithub className="text-sm" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-pink-500/30 pb-1 inline-block">
              Contact
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-600">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-pink-600 shrink-0 shadow-sm">
                  <FaEnvelope />
                </div>
                <span>support@bookvibe.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-pink-600 shrink-0 shadow-sm">
                  <FaPhoneAlt />
                </div>
                <span>+880 1827-802961</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-pink-600 shrink-0 shadow-sm">
                  <FaMapMarkerAlt />
                </div>
                <span>Dhanmondi, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-pink-500/30 pb-1 inline-block">
              Product
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> All Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> Borrow Requests
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> My Reading List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> Active Membership
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-pink-500/30 pb-1 inline-block">
              Support
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-600 transition-colors flex items-center gap-1.5">
                  <span className="text-pink-500">•</span> Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 BookVibe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700 transition-colors">Terms</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-700 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;