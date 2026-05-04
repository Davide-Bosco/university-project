import ContactSection from '../components/ContactSection';

export default function Contatti() {
  return (
    <div className="min-h-screen bg-white pt-32">
      <ContactSection />

      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3180524609415!2d9.185924315556892!3d45.46427997910093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6cd7c0a6f1b%3A0x7b4e9c0e8e0c7c7d!2sMilano%2C%20Italy!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mappa Milano"
        ></iframe>
      </div>
    </div>
  );
}
