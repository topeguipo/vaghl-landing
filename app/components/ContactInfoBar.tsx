// app/components/ContactInfoBar.tsx

const ContactInfoBar = () => {
  return (
    <div className="mt-6 space-y-3 text-base text-white text-left w-full max-w-[300px]">
      <div className="flex items-center gap-2">
        <span>📍</span>
        <span>General Santos City, Philippines</span>
      </div>
      <div className="flex items-center gap-2">
        <span>📧</span>
        <span>topeguipo@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <span>🌐</span>
        <span>www.vaghl.com</span>
      </div>
      <div className="flex items-center gap-2">
        <span>📞</span>
        <span>+63:912:345 6789</span>
      </div>
    </div>
  );
};

export default ContactInfoBar;
