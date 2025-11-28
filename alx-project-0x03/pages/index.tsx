// Remove problematic next/router import for now
// import { useRouter } from 'next/router';

import Layout from '../components/layouts/Layout';
import Button from '../components/common/Button';

const Home = () => {
  // Remove router for now to simplify
  // const router = useRouter();
  
  const handleClick = () => {
    console.log('Button clicked!');
    // router.push('/some-page'); // Add this back later
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Splash App</h1>
        <p className="text-center text-gray-600 mb-8">
          A modern Next.js application with TypeScript and Tailwind CSS
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={handleClick}>
            Get Started
          </Button>
          <Button variant="secondary" onClick={handleClick}>
            Learn More
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;