import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

export default function SuccessStory() {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "Product Manager at TechFlow",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            content: "Working with Dixit was an absolute pleasure. He completely transformed our outdated platform into a lightning-fast React application. The attention to detail and modern architecture he implemented helped us scale effortlessly."
        },
        {
            name: "David Chen",
            role: "CEO of StartupX",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            content: "Incredible backend expertise! The Node.js and MongoDB architecture he designed for us handled our massive data influx without a single hiccup. Truly a full-stack master who understands business logic as well as clean code."
        },
        {
            name: "Emily Rodriguez",
            role: "Design Lead at CreativeArts",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
            content: "I rarely meet developers who care as much about UI and animations as they do about the backend. He took our Figma designs and recreated them identically with Tailwind and Framer Motion. Exceptional work!"
        },
        {
            name: "Michael Chang",
            role: "CTO at FinTech Solutions",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
            content: "Delivered our complex e-commerce platform ahead of schedule. The integration with Stripe and the real-time inventory management features are flawless. Highly recommended!"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="w-full py-20 bg-[#0B0F19] relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-[#00E5FF] text-[13px] font-bold tracking-[0.25em] uppercase mb-4">
                        Client Reviews
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                        Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stories</span>
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Don't just take my word for it. Here is what some of my amazing clients have to say about our collaboration.
                    </p>
                </div>

                <div className="px-2" data-aos="fade-up" data-aos-delay="200">
                    <Slider {...settings} className="success-slider">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="px-4 py-2 h-full w-full">
                                <div className="bg-[#0B0F19] rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 hover:bg-[#151925] transition-all duration-300 relative group flex flex-col h-full min-h-[300px]">
                                    <FaQuoteLeft className="text-4xl text-cyan-500/20 absolute top-6 right-6 group-hover:text-cyan-500/40 transition-colors" />
                                    
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar key={i} className="text-cyan-400 fill-cyan-400" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 leading-relaxed mb-8 relative z-10 italic flex-grow">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-800">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30"
                                        />
                                        <div>
                                            <h4 className="text-white font-bold">{testimonial.name}</h4>
                                            <p className="text-xs text-gray-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
