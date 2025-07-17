export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            สวัสดีครับ
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            ฉันคือ <span className="text-blue-600 font-semibold">นักพัฒนา Full Stack</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            ผมสนใจการพัฒนาเว็บไซต์และแอปพลิเคชันที่สร้างประสบการณ์ที่ดีให้กับผู้ใช้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              ดูผลงาน
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              ติดต่อฉัน
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}