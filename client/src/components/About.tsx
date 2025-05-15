import { motion } from "framer-motion";

const About = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Quick Implementation",
      description: "Launch digital lending operations in weeks, not months.",
      bgColor: "bg-[hsl(var(--jupita-primary))]/10",
      textColor: "text-[hsl(var(--jupita-primary))]",
      delay: 0
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-grade security and compliance with financial regulations.",
      bgColor: "bg-[hsl(var(--jupita-accent))]/10",
      textColor: "text-[hsl(var(--jupita-accent))]",
      delay: 0.1
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Scalable Platform",
      description: "Grow from hundreds to millions of customers without system constraints.",
      bgColor: "bg-[hsl(var(--jupita-secondary))]/10",
      textColor: "text-[hsl(var(--jupita-secondary))]",
      delay: 0.2
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Dedicated Support",
      description: "Expert implementation assistance and ongoing technical support.",
      bgColor: "bg-[hsl(var(--jupita-success))]/10",
      textColor: "text-[hsl(var(--jupita-success))]",
      delay: 0.3
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 reveal"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Jupita
          </h2>
          <p className="text-[hsl(var(--jupita-gray))] text-lg max-w-2xl mx-auto">
            Our mission is to transform credit operations through technology
            that's both powerful and accessible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="text-center p-6 reveal"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: benefit.delay }}
            >
              <div
                className={`w-16 h-16 rounded-full ${benefit.bgColor} flex items-center justify-center mx-auto mb-4`}
              >
                <div className={`h-8 w-8 ${benefit.textColor}`}>
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-[hsl(var(--jupita-gray))]">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
