import Image from 'next/image';

export default function About() {
  const skills = [
    { name: "Character Animation", level: 90 },
    { name: "Scene Animation", level: 85 },
    { name: "Visual Effects", level: 80 },
    { name: "Storyboard Design", level: 85 },
    { name: "3D Modeling", level: 75 },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Personal Introduction */}
        <section className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full rounded-full bg-gray-200">
              {/* Place for personal photo */}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Simon Feng</h1>
          <p className="text-xl text-gray-600 mb-8">Animator / Visual Artist</p>
          <div className="prose prose-lg mx-auto">
            <p>
              I am a passionate animation creator with 5 years of industry experience.
              Specializing in character animation and visual effects production,
              I excel at transforming creative concepts into vibrant visual works.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Professional Skills</h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Education</h2>
          <div className="border-l-2 border-gray-200 pl-8 space-y-8">
            <div>
              <h3 className="font-semibold text-xl">Bachelor of Animation Arts</h3>
              <p className="text-gray-600">Prestigious Art Academy | 2018-2022</p>
              <p className="mt-2">
                Majored in Animation Design and Production, with a minor in Visual Effects.
                Participated in multiple award-winning projects during my studies.
              </p>
            </div>
            {/* More education history can be added */}
          </div>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Work Experience</h2>
          <div className="border-l-2 border-gray-200 pl-8 space-y-8">
            <div>
              <h3 className="font-semibold text-xl">Senior Animator</h3>
              <p className="text-gray-600">Animation Studio | 2022-Present</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>Responsible for character animation design and production</li>
                <li>Involved in visual effects production for multiple commercial projects</li>
                <li>Mentor junior animators and provide technical support</li>
              </ul>
            </div>
            {/* More work experience can be added */}
          </div>
        </section>
      </div>
    </div>
  );
} 