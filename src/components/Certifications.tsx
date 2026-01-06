import React, { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const certifications = [
    {
      title: "Databases and SQL for Data Science with Python",
      organization: "IBM",
      description: "Comprehensive course covering database fundamentals, SQL queries, and Python integration for data science applications. Gained expertise in data manipulation, analysis, and visualization using SQL and Python libraries.",
      link: "https://www.coursera.org/account/accomplishments/verify/NUDX912IJ7HS",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Python for Data Science, AI & Development",
      organization: "IBM",
      description: "Intensive program focusing on Python programming for data science and AI development. Covered data structures, libraries like NumPy and Pandas, and machine learning fundamentals for practical AI applications.",
      link: "https://www.coursera.org/account/accomplishments/verify/EWI659DC8BI0",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      organization: "LinkedIn",
      description: "Explored the fundamentals of generative AI technologies and their applications in various industries. Learned about AI ethics, implementation strategies, and career opportunities in the rapidly evolving AI landscape.",
      link: "https://www.linkedin.com/learning/certificates/743de8dcf68bf6352870d17dd9d8c3e25e17a7529218541141d438fa113492e8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BuOFTGne3R7G91O3i2OVroA%3D%3D",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      organization: "Amazon Web Services (AWS)",
      description: "Comprehensive foundation course in cloud computing concepts and AWS services. Gained understanding of cloud architecture, security, pricing models, and core AWS services for building scalable applications.",
      link: "https://www.credly.com/badges/5732bcde-458e-4eeb-8133-44f87f6c8fa5/linked_in_profile",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Git and Github",
      organization: "Presidency University",
      description: "Mastered version control systems using Git and GitHub for collaborative software development. Learned branching strategies, merge conflicts resolution, and best practices for code management in team environments.",
      link: "#",
      gradient: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-pink-900/10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-center transform transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } gradient-text`}>
            Certifications
          </h2>
          
          <p className={`text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Professional certifications validating expertise across various technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`glass rounded-xl p-6 transform transition-all duration-700 hover:scale-105 neon-glow ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1 + 0.4}s` }}
              >
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.gradient} text-white flex-shrink-0`}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 leading-tight">{cert.title}</h3>
                    <p className="text-blue-400 text-sm font-medium">{cert.organization}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                {cert.link !== "#" ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${cert.gradient} text-white text-sm rounded-lg hover:opacity-90 transition-all duration-300 neon-glow`}
                  >
                    <span className="mr-2">View Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="inline-flex items-center px-4 py-2 bg-gray-600 text-gray-300 text-sm rounded-lg cursor-not-allowed">
                    <span className="mr-2">Certificate Unavailable</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;