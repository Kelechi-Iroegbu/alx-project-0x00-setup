import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      <div className="flex flex-col gap-4">

        {/* Small Buttons */}
        <Button title="Small - Rounded SM" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded MD" styles="text-sm rounded-md" />
        <Button title="Small - Rounded Full" styles="text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - Rounded SM" styles="text-base rounded-sm" />
        <Button title="Medium - Rounded MD" styles="text-base rounded-md" />
        <Button title="Medium - Rounded Full" styles="text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large - Rounded SM" styles="text-xl rounded-sm" />
        <Button title="Large - Rounded MD" styles="text-xl rounded-md" />
        <Button title="Large - Rounded Full" styles="text-xl rounded-full" />

      </div>
    </main>
  );
};

export default Landing;
