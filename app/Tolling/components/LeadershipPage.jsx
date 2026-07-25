import Leadership from "./Leadership";

const servicesData = [
  // Slide 1 – three services
  [
    {
      image: "/clients/ramNivs.jpeg",
      title: " Ajay Kumar",
      designation:"Managing Director & CEO",
      description: "A law graduate and former President of the prestigious Faculty of Law, University of Delhi, Ajay Kumar brings over 15 years of diverse business leadership experience across multiple industries. A successful entrepreneur with exceptional program management capabilities, he has led numerous business ventures with a strong focus on operational excellence and sustainable growth. Under his leadership, the organization has achieved consistent expansion and currently manages business operations with an annual turnover exceeding ₹22 Crore, driving innovation, client satisfaction, and long-term value creation."
    },
    {
      image: "/clients/ramNivs.jpeg",
      title: "Brigadier Umesh Kumar Rai",
      designation:"Chief Operating Officer (COO)",
      description: "An accomplished Indian Army Infantry veteran, Brigadier Umesh Kumar Rai brings disciplined leadership, strategic decision-making, and extensive operational expertise to the organization. With over 9 years of experience in the tolling industry, he has successfully overseen complex highway operations, managed challenging environments, and ensured seamless toll plaza performance. As COO, he leads all aspects of toll operations, focusing on operational efficiency, safety, compliance, and delivering outstanding service standards across every project."
    },
    {
      image: "/clients/ramNivs.jpeg",
      title: "Hare Krishna",
      designation:"Director – Strategy",
      description: "A distinguished alumnus of IIT Kanpur and IIM Lucknow, Hare Krishna possesses more than 16 years of experience in real estate, infrastructure private equity investment, and strategic business management. His expertise in analytical problem-solving, infrastructure investments, and toll operations enables the organization to make informed strategic decisions and drive sustainable growth. He is responsible for long-term business planning, performance monitoring, and identifying opportunities that strengthen the company's competitive position."
    },
     {
      image: "/clients/ramNivs.jpeg",
      title: " Akanksha Rajeev",
      designation:"Director – Information Technology",
      description: "A Computer Science Engineer from Maryland, USA, Akanksha Rajeev has over 12 years of experience working with leading global IT organizations in IT Consulting and Project Management. She leads the company's technology initiatives, ensuring robust digital infrastructure, efficient IT operations, and continuous technological advancement. Her focus on innovation, system reliability, and digital transformation enables the organization to support modern infrastructure operations with secure and efficient technology solutions."
    },
    
  ],
  //  [
  //   {
  //     image: "/clients/ramNivs.jpeg",
  //     title: " Akanksha Rajeev",
  //     designation:"Director – Information Technology",
  //     description: "A Computer Science Engineer from Maryland, USA, Akanksha Rajeev has over 12 years of experience working with leading global IT organizations in IT Consulting and Project Management. She leads the company's technology initiatives, ensuring robust digital infrastructure, efficient IT operations, and continuous technological advancement. Her focus on innovation, system reliability, and digital transformation enables the organization to support modern infrastructure operations with secure and efficient technology solutions."
  //   },
    // {
    //   image: "/clients/ramNivs.jpeg",
    //   title: "Kamal Basumatari",
    //   designation:"",
    //   description: "General Manager – Head of Sales & Operations"
    // },
    
    
  // ],
  
];

export default function LeadershipPage() {
  return <Leadership slides={servicesData} />;
} 