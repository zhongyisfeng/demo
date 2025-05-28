import Image from 'next/image';

export default function About() {
  const skills = [
    { name: "角色动画", level: 90 },
    { name: "场景动画", level: 85 },
    { name: "视觉特效", level: 80 },
    { name: "故事板设计", level: 85 },
    { name: "3D建模", level: 75 },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 个人介绍 */}
        <section className="text-center mb-16">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full rounded-full bg-gray-200">
              {/* 这里可以放置个人照片 */}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">您的名字</h1>
          <p className="text-xl text-gray-600 mb-8">动画师 / 视觉艺术家</p>
          <div className="prose prose-lg mx-auto">
            <p>
              我是一名充满热情的动画创作者，拥有X年的行业经验。
              专注于角色动画和视觉特效的制作，善于将创意理念转化为生动的视觉作品。
            </p>
          </div>
        </section>

        {/* 技能展示 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">专业技能</h2>
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

        {/* 教育背景 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">教育背景</h2>
          <div className="border-l-2 border-gray-200 pl-8 space-y-8">
            <div>
              <h3 className="font-semibold text-xl">动画艺术学士</h3>
              <p className="text-gray-600">某知名艺术学院 | 2018-2022</p>
              <p className="mt-2">
                主修动画设计与制作，辅修视觉特效。在校期间参与多个获奖项目。
              </p>
            </div>
            {/* 可以添加更多教育经历 */}
          </div>
        </section>

        {/* 工作经历 */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">工作经历</h2>
          <div className="border-l-2 border-gray-200 pl-8 space-y-8">
            <div>
              <h3 className="font-semibold text-xl">资深动画师</h3>
              <p className="text-gray-600">某动画工作室 | 2022-至今</p>
              <ul className="mt-2 list-disc list-inside text-gray-600">
                <li>负责角色动画设计和制作</li>
                <li>参与多个商业项目的视觉特效制作</li>
                <li>指导初级动画师，提供技术支持</li>
              </ul>
            </div>
            {/* 可以添加更多工作经历 */}
          </div>
        </section>
      </div>
    </div>
  );
} 