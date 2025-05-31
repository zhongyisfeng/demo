'use client';

import React from 'react';
import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: {siteConfig.contact.email}</p>
            <p>Phone: {siteConfig.contact.phone}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <div className="space-y-2">
              <a href={siteConfig.links.weibo} className="block hover:text-gray-300">Weibo</a>
              <a href={siteConfig.links.douyin} className="block hover:text-gray-300">Douyin</a>
              <a href={siteConfig.links.bilibili} className="block hover:text-gray-300">Bilibili</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <p className="text-sm">{siteConfig.contact.workingHours.weekdays}</p>
            <p className="text-sm">{siteConfig.contact.workingHours.weekends}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 