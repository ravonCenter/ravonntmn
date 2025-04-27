const Footer = () => {
  return (
    <footer className="relative w-full py-12 px-6 bg-gradient-to-r from-indigo-600 via-blue-500 to-teal-500 text-white">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">

        {/* About Section */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">Ravon Muloqot</h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-6">
            Ravon Muloqot O'quv markazi Samarqand viloyatidagi top o'quv markazlardan biri bo'lib, 10 dan ortiq hamkorlar bilan ishlaydi:
          </p>
          <ul className="flex flex-wrap gap-4">
            {["EduAction", "Innovative Exam Center", "Elita Academic School"].map((partner, index) => (
              <li key={index} className="bg-teal-700 text-white py-2 px-4 rounded-md text-sm transition-all transform hover:scale-105">
                {partner}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Aloqaga Chiqing</h1>
          <ul className="space-y-4">
            <li className="bg-teal-700 py-2 px-4 rounded-md text-lg transition-transform transform hover:scale-105">
              <a href="tel:+998910336616" className="text-white">+998 91 033 66 16</a>
            </li>
            <li className="bg-teal-700 py-2 px-4 rounded-md text-lg transition-transform transform hover:scale-105">
              <a href="https://t.me/Fakhriddin_oo6" target="_blank" rel="noopener noreferrer" className="text-white">Admin</a>
            </li>
            <li className="bg-teal-700 py-2 px-4 rounded-md text-lg transition-transform transform hover:scale-105">
              <a href="https://t.me/RavonmuloqotNTM" target="_blank" rel="noopener noreferrer" className="text-white">Telegram</a>
            </li>
            <li className="bg-teal-700 py-2 px-4 rounded-md text-lg transition-transform transform hover:scale-105">
              <a href="https://www.instagram.com/ravonmuloqot.uz?igsh=b3F5dGZobzFvcWg4" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
            </li>
          </ul>
        </div>
        
        {/* Map Section */}
        <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">Bizning manzil:</h1>
          <a href="https://www.google.com/maps?q=39.402994,67.246605" target="_blank" rel="noopener noreferrer">
            <img className="w-full sm:w-[250px] h-[200px] mx-auto p-2 rounded-md transition-transform transform hover:scale-105" src="/map.png" alt="Location Map" />
          </a>
        </div>
      </div>

      {/* Bottom Section (Optional) */}
      <div className="w-full text-center mt-8 text-gray-200">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Ravon Muloqot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
