// // "use client"

import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Image from "next/image";
import { motion } from "framer-motion";
import MainPage from "../Mainpage/Mainpage";

const categories = ["CEO", "President", "Vice President","Secretary", "Advisor", "Treasurer", "Head", "Developers"];

export default function Member() {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch((window.API_BASE_URL || (window.API_BASE_URL || (window.API_BASE_URL || 'https://venturenestbackend.cgcuniversity.in'))) + '/api/team'); // ⬅️ Use your deployed backend URL
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="m">
      <MainPage headingText="Team" />
      <div className="mt-[4em]">
        {categories.map((category) => {
          const filteredMembers = teamData.filter((member) => member.category === category);

          if (filteredMembers.length === 0) return null;

          return (
            <div key={category} className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 capitalize">
                {category === "CEO" ? "Chief Executive Officer" : category}
              </h2>

              <div className="flex flex-wrap justify-center gap-10">
                {filteredMembers.map((member, idx) => (
                  <motion.div
                    key={member._id || idx}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Profile Image */}
                    <div className="absolute -top-10">
                      <div className="rounded-full overflow-hidden w-54 h-54 border-4 border-white shadow-md">
                        <img
                          src={member.imgUrl}
                          alt={member.name}
                          width={126}
                          height={126}
                          objectFit="cover"
                        />
                      </div>
                    </div>

                    {/* Card */}
                    <Card
                      className="pt-24 w-[380px] h-[200px] md:w-[400px] text-center rounded-4xl border-4 shadow-xl"
                      style={{
                        backgroundColor: "#243137",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <CardContent>
                        <h3 className="text-[1.4em] font-semibold text-[#bd9f67]">{member.name}</h3>
                        <p className="text-[1em] text-gray-300">{member.role}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
