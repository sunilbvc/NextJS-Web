'use client'

import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  BarChart3,
  Zap,
  Shield,
  Globe,
  Rocket
} from 'lucide-react'

export default function TechnologyStack() {
  const techCategories = [
    {
      icon: Code2,
      title: "Frontend Technologies",
      description: "Modern, responsive, and performant user interfaces",
      technologies: [
        { name: "React.js", level: "Expert", color: "from-blue-500 to-cyan-600" },
        { name: "Next.js 14", level: "Expert", color: "from-gray-700 to-black" },
        { name: "TypeScript", level: "Advanced", color: "from-blue-600 to-blue-800" },
        { name: "Tailwind CSS", level: "Expert", color: "from-cyan-500 to-blue-600" },
        { name: "Framer Motion", level: "Advanced", color: "from-purple-500 to-pink-600" }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Robust server-side solutions and data management",
      technologies: [
        { name: "Laravel", level: "Expert", color: "from-red-500 to-orange-600" },
        { name: "Node.js", level: "Advanced", color: "from-green-500 to-green-700" },
        { name: "Firebase", level: "Expert", color: "from-yellow-500 to-orange-500" },
        { name: "MySQL", level: "Advanced", color: "from-blue-600 to-indigo-700" },
        { name: "MongoDB", level: "Intermediate", color: "from-green-600 to-green-800" }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and deployment solutions",
      technologies: [
        { name: "AWS", level: "Advanced", color: "from-orange-500 to-yellow-600" },
        { name: "Vercel", level: "Expert", color: "from-black to-gray-800" },
        { name: "Docker", level: "Intermediate", color: "from-blue-500 to-blue-700" },
        { name: "GitHub", level: "Expert", color: "from-gray-700 to-black" },
        { name: "CI/CD", level: "Advanced", color: "from-green-500 to-blue-600" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile & PWA",
      description: "Cross-platform mobile solutions and progressive web apps",
      technologies: [
        { name: "React Native", level: "Advanced", color: "from-blue-500 to-cyan-600" },
        { name: "PWA", level: "Expert", color: "from-purple-500 to-pink-600" },
        { name: "Responsive Design", level: "Expert", color: "from-green-500 to-emerald-600" },
        { name: "Mobile Optimization", level: "Expert", color: "from-blue-600 to-indigo-700" }
      ]
    },
    {
      icon: Palette,
      title: "Design & UX",
      description: "Beautiful, intuitive, and conversion-focused designs",
      technologies: [
        { name: "Figma", level: "Expert", color: "from-purple-500 to-pink-600" },
        { name: "Adobe Creative Suite", level: "Advanced", color: "from-red-500 to-orange-600" },
        { name: "UI/UX Principles", level: "Expert", color: "from-blue-500 to-cyan-600" },
        { name: "Prototyping", level: "Advanced", color: "from-green-500 to-emerald-600" }
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Marketing",
      description: "Data-driven insights and performance optimization",
      technologies: [
        { name: "Google Analytics", level: "Expert", color: "from-orange-500 to-red-600" },
        { name: "Google Ads", level: "Expert", color: "from-blue-500 to-blue-700" },
        { name: "Facebook Ads", level: "Advanced", color: "from-blue-600 to-indigo-700" },
        { name: "SEO Tools", level: "Expert", color: "from-green-500 to-emerald-600" },
        { name: "Conversion Tracking", level: "Advanced", color: "from-purple-500 to-pink-600" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900"
          >
            Our <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Technology Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            We leverage cutting-edge technologies and industry best practices to deliver 
            exceptional digital solutions that drive real business results.
          </motion.p>
        </div>

        {/* Technology Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-gray-300 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Technologies List */}
              <div className="p-6">
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                        <span className="font-medium text-gray-800">{tech.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${tech.color} text-white`}>
                        {tech.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Our Tech Stack Matters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Why Our Technology Stack Matters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Performance</h4>
                <p className="text-pink-100 text-sm">Lightning-fast websites and apps that users love</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Security</h4>
                <p className="text-pink-100 text-sm">Enterprise-grade security for your peace of mind</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Scalability</h4>
                <p className="text-pink-100 text-sm">Solutions that grow with your business</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how our technology expertise can bring your vision to life.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            >
              <Rocket className="w-5 h-5" />
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
