import react from "react";
const PrivacyPolicy = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-8">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
  
          <div className="space-y-8">
            <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Your privacy is important to us. This Privacy Policy,
                use, and protect your personal information.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };
export default PrivacyPolicy;  