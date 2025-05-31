export default function Contact() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
        <p className="text-center text-gray-600 mb-12">
          If you're interested in my work or would like to discuss collaboration opportunities, please feel free to contact me.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
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
                  Email
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
                  Message
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
                Send Message
              </button>
            </form>
          </div>

          {/* Other Contact Methods */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Other Contact Methods</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Email</h3>
                <p className="text-gray-600">fengxinming@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Phone</h3>
                <p className="text-gray-600">+86 138 1234 5678</p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Social Media</h3>
                <div className="space-y-2">
                  <a href="https://weibo.com/zhongyisfeng" className="block text-gray-600 hover:text-gray-900">Weibo</a>
                  <a href="https://www.douyin.com/zhongyisfeng" className="block text-gray-600 hover:text-gray-900">Douyin</a>
                  <a href="https://space.bilibili.com/zhongyisfeng" className="block text-gray-600 hover:text-gray-900">Bilibili</a>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Working Hours</h3>
                <p className="text-gray-600">Monday to Friday: 9:00 - 18:00</p>
                <p className="text-gray-600">Weekend: By appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 