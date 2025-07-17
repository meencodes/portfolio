interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  link: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "เว็บไซต์ขายของออนไลน์ที่สมบูรณ์แบบพร้อมระบบชำระเงิน",
      image: "🛍️",
      tech: ["Next.js", "Stripe", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "แอปพลิเคชันจัดการงานที่ช่วยให้ทีมทำงานร่วมกันได้อย่างมีประสิทธิภาพ",
      image: "📋",
      tech: ["React", "Node.js", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "แดชบอร์ดแสดงข้อมูลสภาพอากาศพร้อมการพยากรณ์",
      image: "🌤️",
      tech: ["Vue.js", "API Integration", "Chart.js"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          ผลงานของฉัน
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  ดูรายละเอียด →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}