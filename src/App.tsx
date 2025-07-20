import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Factory,
  Shield, 
  Truck, 
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Users,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Zap
} from 'lucide-react';
import { Helmet } from "react-helmet-async";
import bannner from './assets/bannner.jpg';
import gas from './assets/gas.jpg';
import o2 from './assets/o2.png';
import N2o from './assets/N2o.png';
import Calibration from './assets/cCalibration.png';
import lab_gases from './assets/lab_gases.png';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const products = [
    {
      name: 'Industrial Gases',
      description: 'Oxygen, Nitrogen, Argon, Carbon Dioxide, Argon + Carbon Dioxide mixture, dissolved acetylene, Ammonia, Refrigeration Gases and all others.',
      image: N2o
    },
    {
      name: 'Medical Gases',
      description: 'Medical Oxygen, Nitrous Oxide, Carbon Dioxide, Liquid Nitrogen and A mixture of O2 (oxygen), N2 (nitrogen), and CO2 (carbon dioxide) is referred to as a tri-gas mixture.',
      image: o2
    },
    {
      name: 'Laboratories like Research Institutions & Universities',
      description: 'Oxygen, Argon, Nitrogen, Hydrogen, Helium, Carbon Dioxide, Carbon Monoxide, Nitric Oxide, Zero Air, Synthetic Air, Methane, Ethylene, Ammonia Both pure & mixed gases are supplied. Purity: Ultra high pure – 99.9995% / 5.5 Grade High pure – 99.99% / 5.0 Grade (Along with purity certificate)', 
      image: lab_gases
    },
    {
      name: 'Calibration Gases',
      description: 'Di, Tri, Tetra composition as you like, the ratio in ppm level',
      image: Calibration
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Medical Officer',
      company: 'City General Hospital',
      content: 'Success Traders has been our trusted partner for medical gases for over 5 years. Their reliability and quality standards are exceptional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      position: 'Operations Manager',
      company: 'Steel Works Industries',
      content: 'The industrial gas supply from Success Traders has significantly improved our production efficiency. Outstanding service and competitive pricing.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Rodriguez',
      position: 'Quality Manager',
      company: 'TechFlow Manufacturing',
      content: 'Their nitrogen gas quality is consistently excellent, and their delivery schedules are always on time. Highly recommended for industrial applications.',
      rating: 5,
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>Success Traders Karaikudi | Industrial, Medical & Lab Gases Supplier</title>
        <meta name="description" content="Supplier of Industrial, Medical, and Laboratory Gases - certified quality, reliable delivery. Serving since 1995. Success Traders Karaikudi." />
        <meta property="og:title" content="Success Traders" />
        <meta property="og:description" content="Trusted supplier of oxygen, nitrogen, industrial and medical gases." />
        <meta property="og:image" content="https://your-real-image-url.com/banner.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Success Traders",
            "url": "https://success-traders.netlify.app/",
            "logo": "https://success-traders.netlify.app/assets/bannner.jpg",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 9345735928",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English","Tamil"]
            }],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "NO.204 VOC Road",
              "addressLocality": "Karaikudi",
              "postalCode": "630001",
              "addressCountry": "IN"
            }
          }
        `}</script>
      </Helmet>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  {/* <Zap className="h-8 w-8 text-blue-600 mr-2" /> */}
                  <div>
                    <span className="text-xl font-bold text-gray-900">Success Traders</span>
                    <div className="text-xs text-gray-500">Air gas products</div>
                  </div>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                    About
                  </button>
                  <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                    Products
                  </button>
                  <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors">
                    Testimonials
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-red-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <button onClick={() => scrollToSection('home')} className="block text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium w-full text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium w-full text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('products')} className="block text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium w-full text-left">
                  Products
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="block text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium w-full text-left">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('contact')} className="block bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium w-full text-left hover:bg-red-700">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl 
                font-bold text-white leading-tight">
                  Supplier of Industrial, Medical, and Laboratory Gases.
                </h1>
                <div className="text-lg text-red-400 font-semibold mb-4">Air gas products</div>
                <p className="mt-6 text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Your trusted partner for high-quality oxygen, nitrogen, industrial, and medical gases. 
                  Delivering excellence with reliability and safety at the forefront.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Explore Products
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="border-2 border-red-500 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
                
                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-red-400">40+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-red-400">1000+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-red-400">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-blue-800 rounded-2xl p-8 lg:p-12">
                  <img 
                    src={bannner} 
                    alt="Gas cylinders and industrial equipment" 
                    className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Certified Quality</div>
                        <div className="text-sm text-gray-600">ISO 9001:2015</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About Success Traders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Leading the industry with innovative gas solutions and uncompromising quality standards
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At Success Traders, we are committed to providing the highest quality gas solutions 
                  to industries and healthcare facilities. Our mission is to ensure safe, reliable, 
                  and efficient gas supply that meets the demanding requirements of our clients.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6" >We provide a comprehensive range of <b>Industrial Gases, Medical Gases, and high-purity gases for Laboratories, Research Institutions, and Universities. Our Calibration Gases, including Di, Tri, and Tetra mixtures, ensure precise measurements and reliable performance across applications.</b></p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We are doing the bussiness since 1995, we have built a reputation 
                  for excellence, innovation, and customer satisfaction. Our team of experts ensures 
                  that every product meets stringent quality standards and safety regulations.
                </p>
              </div>
              <div>
                <img 
                  src={gas} 
                  alt="Gas production facility at Success Traders karaikudi"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-slate-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h4>
                <p className="text-gray-600">Rigorous testing and quality control for every product</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Reliable Delivery</h4>
                <p className="text-gray-600">On-time delivery with flexible scheduling options</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-slate-700" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Industry Certified</h4>
                <p className="text-gray-600">ISO certified and compliant with industry standards</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h4>
                <p className="text-gray-600">Dedicated customer support and technical expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Products Gas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <b>Supplier of Industrial, Medical, and Laboratory Gases</b>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {products.map((product, index) => {
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed"><b>{product.description}</b></p>
                    
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Get Quote
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trusted by industry leaders and healthcare professionals worldwide
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Testimonial Carousel */}
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-xl p-8 mx-4">
                        <div className="flex items-center justify-center mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-blue-400 fill-current" />
                          ))}
                        </div>
                        
                        <p className="text-gray-700 mb-8 leading-relaxed italic text-lg text-center">
                          "{testimonial.content}"
                        </p>
                        
                        <div className="flex items-center justify-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                          <div className="text-center">
                            <div className="font-semibold text-gray-900 text-lg">{testimonial.name}</div>
                            <div className="text-sm text-gray-600">{testimonial.position}</div>
                            <div className="text-sm text-red-600 font-medium">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial 
                        ? 'bg-red-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Auto-scroll effect */}
            <div className="hidden">
              {setTimeout(() => {
                const interval = setInterval(() => {
                  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                }, 5000);
                return () => clearInterval(interval);
              }, 1000)}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Ready to discuss your gas supply needs? Contact our experts today
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-gray-300">+91 9345735928</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-slate-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">successtraders.muthu@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Address</div>
                      <div className="text-gray-300">NO.204 VOC Road Karaikudi - 630001</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-slate-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Business Hours</div>
                      <div className="text-gray-300">Monday 10AM - 8PM</div>
                      <div className="text-gray-300">Tuesday 10AM - 8PM</div>
                      <div className="text-gray-300">Wednesday 10AM - 8PM</div>
                      <div className="text-gray-300">Thursday 10AM - 8PM</div>
                      <div className="text-gray-300">Friday 10AM - 8PM</div>
                      <div className="text-gray-300">Saturday 10AM - 8PM</div>
                      <div className="text-gray-300">Sunday 10AM - 8PM</div>
                      <div className="text-gray-300">24/7 Emergency Support Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gas Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>Select gas type</option>
                      <option>O2 (Oxygen)</option>
                      <option>Mo2 (Molybdenum Dioxide)</option>
                      <option>N2O (Nitrous Oxide)</option>
                      <option>CO2 (Carbon Dioxide)</option>
                      <option>N2 (Nitrogen)</option>
                      <option>Ar (Argon)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="flex items-center justify-center md:justify-start">
                {/* <Factory className="h-8 w-8 text-red-400 mr-2" /> */}
                <div>
                  <span className="text-xl font-bold text-white">Success Traders</span>
                  <div className="text-xs text-gray-400">Air gas products</div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              
              <div className="text-gray-400 text-sm text-center md:text-right">
                © 2024 Success Traders. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
