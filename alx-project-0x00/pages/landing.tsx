import Button from "@/components/Button";
<Card />
const Landing: React.FC = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      <div className="flex flex-col gap-4">

        {/* Rounded SM */}
        <Button title="Small - Rounded SM" styles="text-sm rounded-sm" />
        <Button title="Medium - Rounded SM" styles="text-base rounded-sm" />
        <Button title="Large - Rounded SM" styles="text-xl rounded-sm" />

        {/* Rounded FULL */}
        <Button title="Small - Rounded FULL" styles="text-sm rounded-full" />
        <Button title="Medium - Rounded FULL" styles="text-base rounded-full" />
        <Button title="Large - Rounded FULL" styles="text-xl rounded-full" />

      </div>
    </main>
  );
};

export default Landing;

