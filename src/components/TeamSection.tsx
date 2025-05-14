
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Manjunath Rao",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/manjunath-rao-9ab95721/",
      experience: "Infosys, MetricStream",
      education: "BE in CS from Bangalore Institute of Technology. 18 yrs. of experience in India, the US, and across the globe as a consultant and Product Manager"
    },
    {
      name: "Vishal Sheth",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/vpsheth/",
      experience: "GoCoop, Indecomm",
      education: "MS in Data Science. 12+ years experience as a developer and Architect. Experience in cloud technologies, video transcoding, Hadoop, and building servers"
    },
    {
      name: "Raghavendra K G",
      role: "COO & Co-Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/raghavendra-gopal-rao-43360818/",
      experience: "Kshema Tech, Lotus Labs",
      education: "MBA in IB. 20+ yrs. of experience as Sr Manager across Supply Chain, Project Management, Financial Accounting, and Secretarial & Operations domains"
    },
    {
      name: "Prakash B T",
      role: "Solution Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/prakashbt/",
      experience: "PMP, CSM Certified | Web Development Specialist",
      education: "20 years of experience in project management, product development, and web development."
    }
  ];

  return (
    <section id="team" className="py-20 bg-publicnext-grey">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our leadership team of industry experts dedicated to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-publicnext-purple hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-publicnext-purple font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs mb-1">Experience: {member.experience}</p>
                <p className="text-gray-600 text-xs">{member.education}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
