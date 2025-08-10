import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { headerData } from "../Header/Navigation/menuData";

const footer = () => {
  return (
    <footer className="bg-deepSlate py-16">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4 md:col-span-12 lg:col-span-4'>
            {/* Footer Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo/logo_sh.png"
                  alt="St George High School Shield"
                  width={60}
                  height={72}
                  className="h-16 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-black font-bold text-xl leading-tight">
                  ST. GEORGE
                </div>
                <div className="text-black font-semibold text-sm leading-tight">
                  HIGH SCHOOL
                </div>
                <div className="text-black/70 text-xs font-medium">
                  MALAD, MUMBAI
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className='flex items-center gap-4 mt-6'>
              <Link href="#" className='hover:text-primary text-black text-3xl transition-colors duration-300'>
                <Icon icon="tabler:brand-facebook" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl transition-colors duration-300'>
                <Icon icon="tabler:brand-twitter" />
              </Link>
              <Link href="#" className='hover:text-primary text-black text-3xl transition-colors duration-300'>
                <Icon icon="tabler:brand-instagram" />
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mb-6 text-xl font-semibold text-black">Links</h3>
            <ul className="space-y-3">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-black/60 hover:text-primary transition-colors duration-300 text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="mb-6 text-xl font-semibold text-black">School Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm">
                  About School
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm">
                  Principal's Message
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-black/60 hover:text-primary transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-4 md:col-span-4 lg:col-span-4'>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Icon
                  icon="tabler:map-pin"
                  className="text-primary text-2xl mt-1 flex-shrink-0"
                />
                <div>
                  <h5 className="text-black font-medium text-sm">Address</h5>
                  <p className="text-black/60 text-sm mt-1">St. George High School<br />Malad West, Mumbai<br />Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon
                  icon="tabler:phone"
                  className="text-primary text-2xl mt-1 flex-shrink-0"
                />
                <div>
                  <h5 className="text-black font-medium text-sm">Phone</h5>
                  <p className="text-black/60 text-sm mt-1">+91 (022) 2881-XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Icon
                  icon="tabler:mail"
                  className="text-primary text-2xl mt-1 flex-shrink-0"
                />
                <div>
                  <h5 className="text-black font-medium text-sm">Email</h5>
                  <p className="text-black/60 text-sm mt-1">info@stgeorgehighschool.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-black/10'>
          <div className='lg:flex items-center justify-between'>
            <h4 className='text-black/50 text-sm text-center lg:text-start font-normal'>© 2025 St George High School. All Rights Reserved.</h4>
            <div className="flex gap-6 mt-4 lg:mt-0 justify-center lg:justify-start">
              <Link href="/" className='text-black/50 text-sm font-normal hover:text-primary transition-colors duration-300'>Privacy Policy</Link>
              <Link href="/" className='text-black/50 text-sm font-normal hover:text-primary transition-colors duration-300'>Student Handbook</Link>
            </div>
            <h4 className='text-black/50 text-sm text-center lg:text-start font-normal mt-4 lg:mt-0'>Accredited by State Education Board</h4>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer;
