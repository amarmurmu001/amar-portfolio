import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';
import { FiCode, FiLayout, FiGrid, FiMonitor, FiPenTool, FiPackage, FiArrowRight, FiStar } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiPenTool />,
      title: "Figma Web Design",
      description: "Professional web design services using Figma. Get pixel-perfect designs with modern UI/UX principles.",
      price: "Starting at $300",
      deliveryTime: "3-5 days",
      features: [
        "Custom UI Design",
        "Interactive Prototypes",
        "Design System Creation",
        "Component Library",
        "Responsive Layouts",
        "Design Handoff Files"
      ]
    },
    {
      id: 2,
      icon: <FiPackage />,
      title: "SaaS Website",
      description: "Complete SaaS website development with modern tech stack and scalable architecture.",
      price: "Starting at $1500",
      deliveryTime: "15-20 days",
      features: [
        "Custom Dashboard",
        "User Authentication",
        "Payment Integration",
        "API Development",
        "Database Design",
        "Admin Panel"
      ]
    },
    {
      id: 3,
      icon: <FiLayout />,
      title: "Landing Page",
      description: "High-converting landing pages designed to capture leads and boost conversions.",
      price: "Starting at $500",
      deliveryTime: "5-7 days",
      features: [
        "Conversion-Focused Design",
        "Mobile Optimization",
        "A/B Testing Setup",
        "Lead Capture Forms",
        "Performance Optimization",
        "Analytics Integration"
      ]
    },
    {
      id: 4,
      icon: <FiGrid />,
      title: "Portfolio Website",
      description: "Showcase your work with a stunning portfolio website that stands out.",
      price: "Starting at $800",
      deliveryTime: "7-10 days",
      features: [
        "Custom Design",
        "Project Showcase",
        "Contact Form",
        "SEO Optimization",
        "Blog Integration",
        "Social Media Links"
      ]
    },
    {
      id: 5,
      icon: <FiCode />,
      title: "Web Development",
      description: "Full-stack web development using React, Node.js, and modern technologies.",
      price: "Starting at $1000",
      deliveryTime: "10-15 days",
      features: [
        "React/Next.js Development",
        "Backend Integration",
        "Database Setup",
        "API Development",
        "Performance Optimization",
        "Deployment Setup"
      ]
    },
    {
      id: 6,
      icon: <FiMonitor />,
      title: "Website Maintenance",
      description: "Keep your website up-to-date with regular maintenance and updates.",
      price: "Starting at $200/month",
      deliveryTime: "Ongoing",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Content Updates",
        "Technical Support",
        "Monthly Reports"
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Startup Founder",
      location: "Bangalore, India",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      text: "Working with Amar was a fantastic experience. He delivered our startup's website ahead of schedule and the design exceeded our expectations. His attention to detail and understanding of modern web design trends really shows in the final product.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "E-commerce Manager",
      location: "Mumbai, India",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      text: "The e-commerce platform Amar developed for us has significantly improved our online sales. His technical expertise and responsive design approach helped us reach more customers on mobile devices.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Marketing Director",
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      text: "Amar's web development skills are top-notch. He created a beautiful, fast-loading website that perfectly represents our brand. His communication was clear and he was always available for updates.",
      rating: 5
    }
  ];

  const handleOrder = (service) => {
    window.location.href = `mailto:amarmurmu001@gmail.com?subject=Order: ${service.title}&body=Hi, I'm interested in your ${service.title} service.%0D%0A%0D%0APrice: ${service.price}%0D%0ADelivery Time: ${service.deliveryTime}`;
  };

  return (
    <div className="services-page">
      <motion.h1 
        className="services-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Services
      </motion.h1>

      <motion.div 
        className="services-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="service-left">
              <div className="service-icon">{service.icon}</div>
              <div>
                <div className="service-price">{service.price}</div>
                <div className="service-delivery">{service.deliveryTime}</div>
              </div>
            </div>

            <div className="service-content">
              <h2>{service.title}</h2>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="service-right">
              <button 
                className="order-button"
                onClick={() => handleOrder(service)}
              >
                Order Now <FiArrowRight />
              </button>
              <div className="order-text">
                Click to send order details via email
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="testimonials-section">
        <h2 className="testimonials-title">Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-image"
                />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-location">{testimonial.location}</p>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="star-icon" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 