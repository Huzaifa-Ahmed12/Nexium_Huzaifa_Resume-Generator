  "use client";

  import { useState } from "react";
  import Navbar from "@/components/navbar";
  import HeroSection from "@/components/HeroSection";
  import Footer from "@/components/Footer";
  import { Star, Download, Eye, Sparkles, X } from "lucide-react";

  export default function Home() {
    const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePreview = (templateNumber: number) => {
      setSelectedTemplate(templateNumber);
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedTemplate(null);
    };

    return (
      <>
      
        <Navbar />
        <main className="pt-2">
          {/* Hero Section with updated header and background */}
          {/* Hero Section with custom background and unique features */}
  <section className="relative bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center relative z-10">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 font-montserrat tracking-tight animate-fade-in-up">
        Recruma: Tailor-Made Resumes for Dream Jobs
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-poppins animate-fade-in-up stagger-1">
        Supercharge your job hunt with AI-enhanced, professionally styled resume templates.
      </p>

      <div className="mt-10 flex justify-center space-x-4 animate-float">
        <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
          Build My Resume
        </button>
        <button className="bg-white text-purple-600 border border-purple-400 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-200 shadow-sm hover:scale-105">
          Watch Demo
        </button>
      </div>

      {/* Scroll down indicator */}
      <div className="mt-16 animate-bounce">
        <span className="text-purple-600 font-semibold text-sm">Scroll Down</span>
        <div className="w-6 h-6 mx-auto mt-1 border-2 border-purple-600 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        </div>
      </div>
    </div>

    {/* Floating animated icons (decorative) */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-10 w-8 h-8 bg-purple-300 rounded-full blur-sm opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-300 rounded-full blur-sm opacity-50 animate-float-slower"></div>
      <div className="absolute top-1/2 left-1/3 w-5 h-5 bg-blue-300 rounded-full blur-sm opacity-50 animate-float-fast"></div>
    </div>
  </section>

          {/* Template Showcase Section */}
          <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-teal-50 to-indigo-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 font-montserrat animate-fade-in-up">
                  Eye-Catching Resume Templates
                </h2>
                <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto font-poppins animate-fade-in-up stagger-1">
                  Stand out with modern, professionally designed templates tailored for every career path.
                </p>
              </div>
              {/* Why Choose Recruma */}
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 font-montserrat">Why Choose Recruma?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "AI-Powered Builder", desc: "Get intelligent suggestions and formatting assistance.", icon: <Sparkles className="w-8 h-8 text-blue-500" /> },
          { title: "Modern Templates", desc: "Professionally designed for every industry.", icon: <Star className="w-8 h-8 text-amber-400" /> },
          { title: "Instant Download", desc: "Generate and save your resume within seconds.", icon: <Download className="w-8 h-8 text-green-500" /> },
          { title: "No Login Needed", desc: "Start building right away without account hassle.", icon: <X className="w-8 h-8 text-red-500" /> },
        ].map((item, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-200">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10 font-montserrat">What Users Are Saying</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Ayesha Malik", comment: "Recruma helped me land my dream job in just two weeks!", stars: 5 },
          { name: "Rohan Gupta", comment: "So easy to use and beautifully designed templates.", stars: 4 },
          { name: "Mira Chen", comment: "I love the instant preview and AI suggestions. Game changer!", stars: 5 },
        ].map((user, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <p className="text-gray-700 text-sm italic">"{user.comment}"</p>
            <div className="mt-4 flex items-center justify-center space-x-1 text-amber-400">
              {[...Array(user.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <div className="mt-2 text-sm font-semibold text-gray-800">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Stats Counter */}
  <section className="py-16 bg-white text-center">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
      {[
        { number: "15K+", label: "Resumes Created" },
        { number: "200+", label: "Companies Hired" },
        { number: "98%", label: "Success Rate" },
        { number: "24/7", label: "Support" },
      ].map((stat, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-600">{stat.number}</h3>
          <p className="text-gray-700 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>

  {/* FAQ Section */}
  <section className="py-16 bg-gradient-to-tr from-indigo-50 via-purple-50 to-blue-50">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10 font-montserrat">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {[
          {
            question: "Is Recruma free to use?",
            answer: "Yes! You can build and preview resumes for free. Some advanced templates may be premium."
          },
          {
            question: "Can I download resumes in PDF format?",
            answer: "Absolutely. You can download your resume as a high-quality PDF instantly."
          },
          {
            question: "Do I need an account?",
            answer: "No login is required to start creating. Just build and download!"
          },
        ].map((faq, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-md">
            <h4 className="font-semibold text-lg text-gray-800 mb-2">{faq.question}</h4>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>


              {/* Template Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                {[1, 2, 3, 4, 5, 6].map((template, index) => (
                  <div
                    key={template}
                    className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-teal-100 hover:scale-105 animate-fade-in-up hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img
                        src={`/template${template}.png`}
                        alt={`Template ${template}`}
                        className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                          <button
                            onClick={() => handlePreview(template)}
                            className="flex-1 bg-white/90 backdrop-blur-md text-gray-800 px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base hover:scale-105 animate-wiggle"
                          >
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Preview Template</span>
                          </button>
                          <button className="flex-1 bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:from-teal-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base hover:scale-105 animate-wiggle">
                            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Start with This</span>
                          </button>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkles className="w-4 h-4 text-teal-500 animate-pulse" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 font-montserrat">Template {template}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current animate-pulse" />
                          <span className="text-xs sm:text-sm text-gray-600 font-poppins">4.{template + 2}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm font-poppins">
                        {template === 1 ? 'Perfect for creatives and designers.' :
                        template === 2 ? 'Ideal for corporate professionals.' :
                        template === 3 ? 'Great for tech and engineering fields.' :
                        template === 4 ? 'Suited for marketing and communication roles.' :
                        template === 5 ? 'Focused on sales and business growth.' :
                        'Versatile and modern design for all industries.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-teal-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 font-montserrat animate-float hover-glow">
                  Explore More Designs
                </button>
              </div>
            </div>
          </section>

          <Footer />

          {/* Template Preview Modal remains unchanged */}
          {isModalOpen && selectedTemplate && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
              {/* Modal content remains unchanged */}
            </div>
          )}
        </main>
      </>
    );
  }