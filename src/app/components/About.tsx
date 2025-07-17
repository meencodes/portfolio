export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            เกี่ยวกับฉัน
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
                <div className="text-white text-8xl">👨‍💻</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                ผู้พัฒนาที่หลงใหลในเทคโนโลยี
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ผมเป็นนักพัฒนาที่มีประสบการณ์ในการสร้างเว็บไซต์และแอปพลิเคชัน
                ด้วยเทคโนโลยีสมัยใหม่ ผมเชื่อว่าการเขียนโค้ดที่ดีต้องมีทั้งความสวยงาม
                และประสิทธิภาพ
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ผมมีความเชี่ยวชาญในการพัฒนาทั้งส่วน Frontend และ Backend
                โดยใช้เทคโนโลยีต่างๆ เช่น React, Next.js, Node.js, และ Python
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
