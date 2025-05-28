export default function Contact() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">联系我</h1>
        <p className="text-center text-gray-600 mb-12">
          如果您对我的作品感兴趣，或者想要讨论合作机会，请随时与我联系。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 联系表单 */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">发送消息</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  消息
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                发送消息
              </button>
            </form>
          </div>

          {/* 其他联系方式 */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">其他联系方式</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">邮箱</h3>
                <p className="text-gray-600">your.email@example.com</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">电话</h3>
                <p className="text-gray-600">+86 xxx xxxx xxxx</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">社交媒体</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-600 hover:text-gray-900">微博</a>
                  <a href="#" className="block text-gray-600 hover:text-gray-900">抖音</a>
                  <a href="#" className="block text-gray-600 hover:text-gray-900">Bilibili</a>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">工作时间</h3>
                <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                <p className="text-gray-600">周末: 根据约定</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 