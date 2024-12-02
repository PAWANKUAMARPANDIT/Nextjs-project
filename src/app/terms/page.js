const Terms = () => {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Terms of Service
        </h1>
  
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg mb-8">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
  
        <div className="space-y-8">
          <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              By accessing and using our services, you agree to be bound by these terms and conditions.
              Please read them carefully before proceeding.
            </p>
          </section>
        </div>
      </div>
    );
  };
export default Terms;