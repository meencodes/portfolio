export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <p className="text-gray-400">
              นักพัฒนาที่มุ่งมั่นสร้างประสบการณ์ดิจิทัลที่ดีที่สุดให้กับผู้ใช้
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">ลิงค์</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">เกี่ยวกับฉัน</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">ผลงาน</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">ทักษะ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">ติดต่อ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">ติดตาม</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}