import Link from "next/link";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-3">
      {/* Shield Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/images/logo/logo_sh.png"
          alt="St George High School Shield"
          width={50}
          height={60}
          className="h-12 w-auto lg:h-14"
          priority
        />
      </div>
      
      {/* School Name in Brown */}
      <div className="flex flex-col">
        <div className="text-amber-800 font-bold text-base lg:text-lg leading-tight">
          ST. GEORGE
        </div>
        <div className="text-amber-700 font-semibold text-xs lg:text-sm leading-tight">
          HIGH SCHOOL
        </div>
        <div className="text-amber-600 text-xs font-medium">
          MALAD, MUMBAI
        </div>
      </div>
    </Link>
  );
};

export default Logo;
