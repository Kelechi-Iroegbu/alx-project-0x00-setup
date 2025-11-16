import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      {/* Render the Card component */}
      <Card />
      <Card />
      <Card />
    </main>
  );
};

export default Landing;