import React from 'react';

const studentNames = [
  { "FounderName": "Mr. RAJAT SONI", "StartupName": "V2R AUTOINFINITE PRIVATE LIMITED", "Story": "VentureNest provided the critical infrastructure we needed to prototype our automotive solutions. The mentorship on IP rights was invaluable." },
  { "FounderName": "Mr. Akash Shrivastava", "StartupName": "Lorro Digital Pvt. Ltd.", "Story": "The networking opportunities at VentureNest helped us secure our first three major clients. It's the perfect launchpad for digital ventures." },
  { "FounderName": "Mr. Vishal", "StartupName": "Jagdev Organics Pvt Ltd", "Story": "From lab access to market connect, VentureNest supported our organic product journey every step of the way. Truly a transformative experience." },
  { "FounderName": "Mr Harrish Babber", "StartupName": "Escapekar", "Story": "Escapekar grew from a concept to a platform thanks to the business modeling workshops and funding guidance at VentureNest." },
  { "FounderName": "Mr. Narinder Singh", "StartupName": "Nhanks Waste Recyclers Pvt.Ltd", "Story": "Sustainable solutions need specialized support. VentureNest's focus on social impact startups gave us the push we needed." },
  { "FounderName": "Mr Karan Kumar Aggrawal", "StartupName": "Indi Tech", "Story": "The technical mentorship here is unmatched. We scaled our tech stack and team efficiently under the guidance of industry experts." },
  { "FounderName": "Mr. Jaskaranpreet Singh", "StartupName": "Juniva Organics", "Story": "Juniva Organics found its footing here. The incubation support helped us navigate regulatory challenges and reach the market faster." },
  { "FounderName": "Mr. Tanzil Arshad Khan", "StartupName": "Edshire Global Skills Pvt. Ltd.", "Story": "Edshire's vision to upskill the workforce was amplified by VentureNest's strategic partnerships and connection to educational networks." },
  { "FounderName": "Ms. Arshpreet Ahluwalia", "StartupName": "Juara Organics", "Story": "The supportive environment at VentureNest allowed us to experiment and refine our products with confidence. A great place to grow." },
  { "FounderName": "Mr. Vivek Kumar", "StartupName": "Groming Young Minds Innovative Pvt. Ltd" },
  { "FounderName": "Mr. Nirdosh Arora", "StartupName": "Ashab Group" },
  { "FounderName": "Mr. Ashish Chhabra", "StartupName": "EDS Wagon Tech Pvt. Ltd" },
  { "FounderName": "Mr. Anand Kumar", "StartupName": "Kulhad" },
  { "FounderName": "Mr. Risahbh Naithani", "StartupName": "Veritex Innovations" },
  { "FounderName": "Mr. Shreyansh Tiwari", "StartupName": "Tarang" },
  { "FounderName": "Mr. Yuvraj Bhadauriya", "StartupName": "Armbot" },
  { "FounderName": "Mr. Surya N", "StartupName": "NIL" },
  { "FounderName": "Mr. Shivang Tiwari", "StartupName": "Techealth Apex Pvt. Ltd" },
  { "FounderName": "Mr. Divyansh Sood", "StartupName": "Videlec" },
  { "FounderName": "Mr. Tejinder Pal Singh Jassal", "StartupName": "Dulcimer Innovations Pvt. Ltd." },
  { "FounderName": "Mr. Pratham Arora", "StartupName": "Start Spark Pvt. Ltd." },
  { "FounderName": "Mr. Harkanwar Singh", "StartupName": "Tics Food Works Pvt. Ltd." },
  { "FounderName": "Mr. Anshul Sethi", "StartupName": "TrashTech" },
  { "FounderName": "Mr. Pulkesh Gautam", "StartupName": "Kakumei" },
  { "FounderName": "Mr. Gurwant Singh", "StartupName": "B.G. Innovatech Pvt. Ltd." },
  { "FounderName": "Iresh Kumar Singla", "StartupName": "Apna Mandir" },
  { "FounderName": "Pulkesh Gautam", "StartupName": "Vidyutam Verde NCESOL Pvt. Ltd." },
  { "FounderName": "Nripen Kumar", "StartupName": "Neuralink" },
  { "FounderName": "Mr. Aditya Raj Saxena", "StartupName": "ANTHRONEX" },
  { "FounderName": "Rishi Raj Dutta", "StartupName": "Aastra" },
  { "FounderName": "Jaskaran Singh", "StartupName": "HIKK" },
  { "FounderName": "Navneet Yaduvanshi", "StartupName": "Aasyra" },
  { "FounderName": "Dr. Varsha Grover", "StartupName": "NA(Healing Waves)" },
  { "FounderName": "Mr. Parag Shrivastava", "StartupName": "Tech-She" },
  { "FounderName": "Mr. Pranshu", "StartupName": "Defenciq Tech" },
  { "FounderName": "Ms. Ritika", "StartupName": "NA( Mosquito Repellent Accessories)" },
  { "FounderName": "Dr. Swati Sharma", "StartupName": "SVN SCIENTIFIC VISION PRIVATE LIMITED" },
  { "FounderName": "Mr. Vedant Ashok Daware", "StartupName": "Frii Jal" },
  { "FounderName": "Ms. Vanshika", "StartupName": "Vee Gamma" },
  { "FounderName": "Mr. Kunwar Singh", "StartupName": "NA(Dual Battery Technology)" },
  { "FounderName": "Mr. MD Mustafa Yusuf", "StartupName": "BookEvm" },
  { "FounderName": "Shivam Chauhan", "StartupName": "Stoc ML" },
  { "FounderName": "Shekhar Kashyap", "StartupName": "UnifHub" },
  { "FounderName": "Aditya Raj", "StartupName": "A Bagwani" },
  { "FounderName": "Abhishek Sharma", "StartupName": "The Hard Millenium" },
  { "FounderName": "Aditya Raj", "StartupName": "NMAK (No More Andha Kannon)" },
  { "FounderName": "Moinak Dey", "StartupName": "Rheonix" }
];

const StudentStories = () => {
  return (
    <section className="py-24 font-jakarta relative border-t-4 border-[#9E0203]">
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center">
            <span className="text-[#9E0203] font-bold uppercase tracking-[0.3em] text-xs block mb-4 bg-[#9E0203]/10 px-4 py-2 rounded-full border border-[#9E0203]/30">Success Stories</span>
            <h2 className="text-black text-4xl md:text-6xl font-black uppercase tracking-tight text-center">
               Student <span className="text-[#9E0203]">Chronicles</span>
            </h2>
            <div className="mt-6 w-24 h-1.5 bg-blue-900 rounded-full"></div>
        </div>

        {/* SOLID GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentNames.slice(0, 9).map((student, idx) => {
             // Initials
             const initials = student.FounderName.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();
            
            return (
              <div 
                key={idx} 
                className="group relative h-full flex flex-col"
              >
                {/* Decoration Accent Top */}
                <div className="h-1 bg-gradient-to-r from-[#9E0203] to-blue-900 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                
                {/* Card Container: Navy Blue Background */}
                <div className="flex-1 bg-[#0B1120] border-l-4 border-[#9E0203] p-8 flex flex-col justify-between hover:bg-[#111827] transition-colors duration-300 relative overflow-hidden">
                    
                    {/* Subtle Background Number */}
                     <span className="absolute -right-4 -top-8 text-[120px] font-black text-white/5 z-0 select-none">
                        {idx + 1}
                     </span>

                    {/* Quote Icon */}
                    <div className="relative z-10 text-[#9E0203] mb-6">
                       <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.084 14.929 15.564C15.536 15.044 16.596 14.544 18.109 14.064V12.645C17.069 12.885 16.329 13.065 15.889 13.185C15.449 13.305 15.149 13.405 14.989 13.485V10.125C14.989 7.365 16.549 5.285 19.668 3.885L20.598 6.045C18.678 6.845 17.718 8.245 17.718 10.245V11.205C18.278 11.205 18.798 11.325 19.278 11.565C19.758 11.805 20.148 12.145 20.448 12.585C20.748 13.025 20.898 13.565 20.898 14.205C20.898 14.925 20.658 15.585 20.178 16.185C19.698 16.785 19.068 17.265 18.288 17.625C17.508 17.985 16.638 18.165 15.678 18.165C15.278 18.165 14.718 18.125 13.998 18.045V21H14.017ZM6.017 21L6.017 18C6.017 16.896 6.321 16.084 6.929 15.564C7.536 15.044 8.596 14.544 10.109 14.064V12.645C9.069 12.885 8.329 13.065 7.889 13.185C7.449 13.305 7.149 13.405 6.989 13.485V10.125C6.989 7.365 8.549 5.285 11.668 3.885L12.598 6.045C10.678 6.845 9.718 8.245 9.718 10.245V11.205C10.278 11.205 10.798 11.325 11.278 11.565C11.758 11.805 12.148 12.145 12.448 12.585C12.748 13.025 12.898 13.565 12.898 14.205C12.898 14.925 12.658 15.585 12.178 16.185C11.698 16.785 11.068 17.265 10.288 17.625C9.508 17.985 8.638 18.165 7.678 18.165C7.278 18.165 6.718 18.125 5.998 18.045V21H6.017Z" /></svg>
                    </div>

                    {/* Story Text */}
                    <div className="relative z-10 mb-8 min-h-[80px]">
                      <p className="text-gray-300 font-medium leading-relaxed text-lg">
                        "{student.Story || "Helping us build the future with immense support."}"
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/10 mb-6"></div>

                    {/* Footer: User Details */}
                    <div className="flex items-center space-x-4 relative z-10">
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-blue-900/50 text-blue-200 border border-blue-800 flex items-center justify-center font-bold text-sm tracking-widest rounded-none shrink-0">
                          {initials}
                      </div>
                      
                      {/* Text Info */}
                      <div className="overflow-hidden">
                          <h4 className="font-bold text-white truncate uppercase text-sm tracking-wide">{student.FounderName.replace("Mr. ","").replace("Ms. ","")}</h4>
                          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest truncate mt-1">{student.StartupName}</p>
                      </div>
                    </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
