import { Shield, Building2, UserCheck, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Shield size={40} />,
      title: "Static Security Guard",
      desc: "On-site protection for buildings, property, and visitor control.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Construction Security",
      desc: "Monitoring construction sites, tools, and preventing theft or vandalism.",
    },
    {
      icon: <UserCheck size={40} />,
      title: "Concierge Security",
      desc: "Front desk security with visitor handling and access control.",
    },
    {
      icon: <Car size={40} />,
      title: "Mobile Patrol",
      desc: "Regular patrols with fast response, reports, and perimeter checks.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600">
          Professional security solutions tailored to protect your people and
          property.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="border border-gray-100 shadow-sm p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center"
          >
            <div className="text-[#007BFF] flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-[#0A2540]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
