import FeatureCard from "./components/FeatureCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-300">
      <div className="mt-24 mx-auto w-3/4 flex flex-col items-center">
        <div className="bg-purple-300 shadow-lg rounded-lg border border-gray-300 p-8 w-full text-center">
          <div className="text-black text-7xl font-roboto font-bold mb-4">
            Welcome to Aqua Watch
          </div>
          <div className="text-black text-5xl font-roboto font-light">
            Real-time Monitoring and Analytics for your Water Systems
          </div>
          <div className="bg-blue-500 text-white text-4xl font-roboto font-light rounded-full mt-8 px-12 py-4 cursor-pointer">
            Explore Now
          </div>
        </div>
      </div>

      <div className="mt-24 mx-auto w-3/4 flex flex-wrap justify-between">
        <FeatureCard
          title="Real-time Monitoring"
          description="Get instant updates on your water usage with our real-time monitoring tools."
        />
        <FeatureCard
          title="Usage Tracking"
          description="Track your water usage patterns and identify areas to save water."
        />
        <FeatureCard
          title="Data Analytics"
          description="Analyze your water usage with our powerful analytic tools."
        />
        <FeatureCard
          title="User Management"
          description="Manage multiple users and permissions easily within the platform."
        />
        <FeatureCard
          title="Alerts"
          description="Receive alerts from unusual water usage and potential leaks."
        />
        <FeatureCard
          title="Mobile App Integration"
          description="Stay connected with our mobile app integration for on-the-go monitoring."
        />
      </div>

      <div className="flex justify-center mt-12">
        <div className="bg-blue-500 rounded-full p-4 text-white text-lg font-roboto font-medium cursor-pointer">
          Sign Up Now
        </div>
      </div>
      <Footer />
    </div>
  );
}
