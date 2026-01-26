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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-16">
          <span className="text-brand-red text-5xl font-bold font-jakarta">Student </span>
          <span className="text-brand-dark text-5xl font-bold font-jakarta">Stories</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentNames.slice(0, 8).map((student, idx) => (
            <div key={idx} className="bg-gray-100 p-8 relative">
              <svg className="absolute top-8 left-8 w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 40 40">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8665 30.824C13.1838 31.368 11.2425 31.3573 9.65584 30.544C5.99184 28.6613 4.40517 23.808 5.87984 18.6666C6.54117 16.36 7.7065 14.12 10.1705 11.8613C12.6345 9.59998 16.0532 8.26665 17.6372 8.26665C17.7705 8.26453 17.9029 8.28874 18.0268 8.33788C18.1507 8.38702 18.2637 8.46014 18.3594 8.55304C18.455 8.64593 18.5313 8.75678 18.584 8.87924C18.6367 9.00169 18.6648 9.13334 18.6665 9.26665C18.6665 9.81865 18.1972 10.2666 17.6372 10.2666C15.8265 10.2666 14.2078 11.2533 12.2905 12.704C10.8238 13.816 9.67717 15.2373 9.04517 16.4746C7.83184 18.8426 7.79184 22.1813 9.75183 23.0693C10.2069 22.5528 10.7677 22.1403 11.3962 21.8596C12.0247 21.579 12.7062 21.4367 13.3945 21.4426C16.5945 21.4426 18.4798 24.016 18.3972 26.3466C18.3198 28.5733 16.9038 30.16 14.8665 30.824ZM30.8665 30.824C29.1838 31.368 27.2425 31.3573 25.6558 30.544C21.9918 28.6613 20.4052 23.808 21.8798 18.6666C22.5412 16.36 23.7065 14.12 26.1705 11.8613C28.6345 9.59998 32.0532 8.26665 33.6372 8.26665C33.7705 8.26453 33.9029 8.28874 34.0268 8.33788C34.1507 8.38702 34.2637 8.46014 34.3594 8.55304C34.455 8.64593 34.5313 8.75678 34.584 8.87924C34.6367 9.00169 34.6648 9.13334 34.6665 9.26665C34.6665 9.81865 34.1972 10.2666 33.6372 10.2666C31.8265 10.2666 30.2078 11.2533 28.2905 12.704C26.8238 13.816 25.6772 15.2373 25.0452 16.4746C23.8318 18.8426 23.7918 22.1813 25.7518 23.0693C26.6932 22.04 27.9225 21.4426 29.3945 21.4426C32.5945 21.4426 34.4798 24.016 34.3972 26.3466C34.3198 28.5733 32.9038 30.16 30.8665 30.824Z" fillOpacity="0.4"/>
              </svg>
              
              <div className="mt-16 mb-6">
                <p className="text-brand-dark leading-relaxed">
                  "{student.Story}"
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-6 border-t border-gray-400">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold text-gray-600">
                  {student.FounderName.charAt(0)}
                </div>
                <div>
                  <div className="text-brand-red font-bold">{student.FounderName}</div>
                  <div className="text-gray-600 text-sm font-medium">Founder, {student.StartupName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
