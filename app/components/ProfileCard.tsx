// app/components/ProfileCard.tsx
'use client'
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="bg-[#fcd535] rounded-xl p-4 text-center w-full max-w-[300px] mx-auto">
      <div className="w-full aspect-[3/4] overflow-hidden rounded-md mb-4">
        <Image
          src="/myPhoto.jpg"
          alt="Profile"
          width={300}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-xl font-extrabold text-[#062a5c] leading-tight">
        Christopher E. Guipo
      </h1>
      <p className="text-md text-[#062a5c] font-bold">Virtual Assistant</p>
    </div>
  );
};

export default ProfileCard;
