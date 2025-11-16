import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      <div className="flex flex-col gap-4">

        {/* Existing sizes */}
        <Button title="Small - Rounded LG" styles="text-sm rounded-lg" />
        <Button title="Medium - Rounded LG" styles="text-base rounded-lg" />
        <Button title="Large - Rounded LG" styles="text-xl rounded-lg" />

      </div>
    </main>
  );
};

export default Landing;
