import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-venture-gray text-white">
      <div className="container mx-auto px-4 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and About */}
          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cb18fa3f24c776b9e1c289f6781e8b0d1e530af4?width=181"
              alt="CGC Logo"
              className="h-16 mb-6"
            />
            <p className="text-sm font-open-sans mb-4">
              State Highway 12A, Chandigarh - Sirhind Road, Mohali, 140307
            </p>

            <h3 className="text-venture-red-light text-base font-bold font-open-sans mb-4">
              About Us
            </h3>
            <p className="text-sm font-open-sans mb-6 text-justify">
              Welcome to CGC Jhanjeri, one of the best colleges in North India
              known for delivering excellent placements in top-ranked companies.
              <br />
              <br />
              We offer various Undergraduate and Postgraduate Courses like
              B.Tech, BCA, BBA, B.Com, Law, Journalism, Pharmacy, Fashion
              Designing, Paramedical Science, MBA, MCA at affordable fees in
              Chandigarh. Enroll yourself to experience a vibrant future.
            </p>

            <h3 className="text-venture-red-light text-base font-bold font-open-sans mb-4">
              Institutes
            </h3>
            <ul className="text-sm font-open-sans space-y-2 underline">
              <li>Chandigarh Engineering College</li>
              <li>Chandigarh School Of Business</li>
              <li>Chandigarh Law College</li>
              <li>Chandigarh Pharmacy College</li>
              <li>Chandigarh College of Engineering</li>
            </ul>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold font-open-sans text-sm">
                  Virtual tour
                </span>
                <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 0C6.61305 0 4.32387 0.948212 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18C11.3869 18 13.6761 17.0518 15.364 15.364C17.0518 13.6761 18 11.3869 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0Z"
                    fill="white"
                  />
                </svg>
                <span className="text-sm font-open-sans">360°</span>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ca3bf0dd8fb180e41c1e745718ecb37273e08b8d?width=131"
                alt="Virtual Tour"
                className="h-14"
              />
            </div>
          </div>

          {/* Column 2 - Apply Here & Quick Links */}
          <div>
            <h3 className="text-venture-red-light text-base font-bold font-open-sans mb-4">
              Apply Here
            </h3>
            <ul className="text-sm font-open-sans space-y-2 underline mb-8">
              <li>Admissions</li>
              <li>Online Admission</li>
              <li>Education Loan</li>
              <li>Placements</li>
              <li>How to Apply?</li>
              <li>Scholarship</li>
              <li>Pay Fees Online</li>
              <li>Hostels</li>
              <li>Cultural Activities</li>
              <li>Library</li>
              <li>Student Care Centre</li>
              <li>Contact Us</li>
              <li>Mandatory Disclosure</li>
            </ul>

            <h3 className="text-venture-red-light text-base font-bold font-open-sans mb-4">
              Quick Links
            </h3>
            <ul className="text-sm font-open-sans space-y-2 underline">
              <li>International Tie Ups</li>
              <li>CGC Mohali Brochure 2025-26</li>
              <li>Careers</li>
              <li>Mandatory Disclosure</li>
              <li>Grievance Redressal Cell</li>
              <li>Gallery</li>
              <li>Blogs</li>
              <li>News</li>
              <li>Events</li>
              <li>CSR Activities</li>
              <li>Registrar Office</li>
              <li>Autonomous College</li>
              <li>Sustainable Development Goals</li>
            </ul>
          </div>

          {/* Column 3 - Admission Offices */}
          <div>
            <h3 className="text-venture-red-light text-base font-bold font-open-sans mb-4">
              Admission Offices
            </h3>
            <div className="text-sm font-open-sans space-y-4">
              <div>
                <span className="font-bold">Chandigarh:</span> SCO 185, 2nd
                floor, Sector 37-C, Chandigarh Phone No.{" "}
                <span className="underline">+91 9875942703</span>
              </div>
              <div>
                <span className="font-bold">Hamirpur (Himachal Pradesh):</span>{" "}
                Near Canara Bank, Main Bus Stand, Hamirpur, Himachal Pradesh
                Phone No. <span className="underline">+91 8725082014</span>
              </div>
              <div>
                <span className="font-bold">Palampur (Himachal Pradesh):</span>{" "}
                2nd floor, Palampur City Mall Adjoining Town House Cafe, Near
                Vishal Megamart Palampur Phone No.{" "}
                <span className="underline">+91 9517900618</span>
              </div>
              <div>
                <span className="font-bold">Lucknow (Uttar Pradesh):</span>{" "}
                Office No.1 B, Govinda Building, 1-A, Shahanajaf road, Opposite
                Police Commisoner Residence, Hazratganj, Lucknow-226001 Phone
                No. <span className="underline">+91 9115581115</span>
              </div>
              <div>
                <span className="font-bold">Saharanpur (Uttar Pradesh):</span>{" "}
                SCO 1-2 1st Floor, Above Van Heusen, Gill Colony,
                Saharanpur-247001 Phone No.{" "}
                <span className="underline">+91 9115581118</span>
              </div>
              <div>
                <span className="font-bold">Jammu (Jammu & Kashmir):</span> Shop
                No. 7A 2 South Block, Basement Bahu Plaza, Jammu-180020 Phone
                No. <span className="underline">+91 8713097550</span>,{" "}
                <span className="underline">+91 8725082013</span>
              </div>
              <div>
                <span className="font-bold">Ambala (Haryana):</span> Shop No.
                50A, First Floor, Jaggi City Centre, Ambala City, Haryana-134011
                Phone No. <span className="underline">+91 9115880338</span>
              </div>
              <div>
                <span className="font-bold">Patna (Bihar):</span> M-2/22, Ground
                Floor, Hazari singh lane, Sri Krishna Puri, Boring Road, Behind
                Sri Bhadra kali Mandir, Patna-800001 Phone No.{" "}
                <span className="underline">+91 9115581114</span>
              </div>
              <div>
                <span className="font-bold">Bhutan:</span> LOSEL PHENDEY
                Education Consultancy & Placement Firm Zomlha Building, 2nd
                Floor, Room #136 Thimphu, Bhutan Phone No.{" "}
                <span className="underline">+975-17485767</span>,{" "}
                <span className="underline">+975-77200230</span>
              </div>
              <div>
                <span className="font-bold">Nepal:</span> Admission Helpline
                Phone No. <span className="underline">+91 9875943267</span>
              </div>
            </div>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h3 className="text-venture-red-light text-base font-bold font-open-sans mb-4">
              Contact Us
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-venture-red-light text-sm">
                    Toll Free No:
                  </p>
                  <p className="text-sm underline">1800-274-0444</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-venture-red-light text-sm">
                    General Helpline No:
                  </p>
                  <p className="text-sm underline">+91-0172-3505300</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-venture-red-light text-sm">
                    Email:
                  </p>
                  <p className="text-sm underline">info@cgc.ac.in</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {/* Social Media Icons */}
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M10.5 6.975V9.15H12.45C12.6 9.15 12.675 9.3 12.675 9.45L12.375 10.875C12.375 10.95 12.225 11.025 12.15 11.025H10.5V16.5H8.25V11.1H6.975C6.825 11.1 6.75 11.025 6.75 10.875V9.45C6.75 9.3 6.825 9.225 6.975 9.225H8.25V6.75C8.25 5.475 9.225 4.5 10.5 4.5H12.525C12.675 4.5 12.75 4.575 12.75 4.725V6.525C12.75 6.675 12.675 6.75 12.525 6.75H10.725C10.575 6.75 10.5 6.825 10.5 6.975Z"
                    stroke="black"
                    strokeWidth="0.8"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M10.4558 7.794L16.1517 1.125H14.8017L9.85735 6.91537L5.90635 1.125H1.3501L7.32385 9.882L1.3501 16.875H2.7001L7.92235 10.7595L12.095 16.875H16.6512L10.4558 7.794Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9.00073 7.1625C9.68848 6.45975 10.584 6 11.6257 6C12.7197 6 13.769 6.4346 14.5425 7.20818C15.3161 7.98177 15.7507 9.03098 15.7507 10.125V15.75H14.2507V10.125C14.2507 9.42881 13.9742 8.76113 13.4819 8.26884C12.9896 7.77656 12.3219 7.5 11.6257 7.5C10.9295 7.5 10.2619 7.77656 9.76958 8.26884C9.27729 8.76113 9.00073 9.42881 9.00073 10.125V15.75H7.50073V6.375H9.00073V7.1625Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M12.75 15H5.25C3 15 1.5 13.5 1.5 11.25V6.75C1.5 4.5 3 3 5.25 3H12.75C15 3 16.5 4.5 16.5 6.75V11.25C16.5 13.5 15 15 12.75 15Z"
                    stroke="black"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50">
            <div className="flex flex-wrap gap-4">
              <span>Privacy policy</span>
              <span>Terms of use</span>
              <span>Refund policy</span>
              <span>FAQ</span>
            </div>
            <div>
              <span>
                Copyright © 2025 Chandigarh Group of Colleges Jhanjeri
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
