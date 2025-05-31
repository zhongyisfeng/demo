import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function School() {
  const facilities = [
    {
      title: "Animation Studios",
      description: "State-of-the-art animation studios equipped with industry-standard software and hardware.",
    },
    {
      title: "Drawing Studios",
      description: "Spacious studios for life drawing and traditional animation techniques.",
    },
    {
      title: "Computer Labs",
      description: "Modern computer labs with the latest animation and design software.",
    },
    {
      title: "Sound Studios",
      description: "Professional sound recording and editing facilities.",
    },
  ];

  const programs = [
    {
      title: "Bachelor of Animation",
      duration: "4 years",
      description: "A comprehensive program covering both traditional and digital animation techniques.",
    },
    {
      title: "Computer Animation",
      duration: "3 years",
      description: "Focused on 3D animation, modeling, and visual effects.",
    },
    {
      title: "Visual Effects",
      duration: "1 year (Graduate Certificate)",
      description: "Advanced training in visual effects for film and television.",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Sheridan College</h1>
          <p className="text-xl text-gray-600 mb-8">
            Canada's Premier Animation School
          </p>
          <div className="relative h-64 mb-8">
            <Image
              src="/images/sheridan-campus.jpg"
              alt="Sheridan College Campus"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-gray-600">
            Sheridan College's animation program is internationally renowned for producing
            outstanding animators and artists who work at major studios worldwide.
          </p>
        </section>

        {/* Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Animation Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-500 mb-4">{program.duration}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">World-Class Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Connections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Industry Connections</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Sheridan maintains strong connections with leading animation studios and
              production companies worldwide. Our students benefit from:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Industry mentorship programs</li>
              <li>Internship opportunities at major studios</li>
              <li>Guest lectures from industry professionals</li>
              <li>Networking events and career fairs</li>
              <li>Industry-sponsored projects</li>
            </ul>
          </div>
        </section>

        {/* Alumni Success */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Alumni Success</h2>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Our graduates have gone on to work at prestigious studios including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-600">
              <div>Pixar</div>
              <div>Disney</div>
              <div>DreamWorks</div>
              <div>Blue Sky</div>
              <div>Industrial Light & Magic</div>
              <div>Nelvana</div>
              <div>Corus Entertainment</div>
              <div>Ubisoft</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 