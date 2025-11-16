import Button from "@/components/Button";

export default function Landing() {
  return (
    <div className="p-6 space-y-4">

      <h1 className="text-2xl font-bold">Landing Page Buttons</h1>

      <div className="flex gap-4 flex-wrap">

        {/* Small Buttons */}
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Small Mid Round" size="small" shape="rounded-md" />
        <Button title="Small Full Round" size="small" shape="rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium Rounded" size="medium" shape="rounded-sm" />
        <Button title="Medium Mid Round" size="medium" shape="rounded-md" />
        <Button title="Medium Full Round" size="medium" shape="rounded-full" />

        {/* Large Buttons */}
        <Button title="Large Rounded" size="large" shape="rounded-sm" />
        <Button title="Large Mid Round" size="large" shape="rounded-md" />
        <Button title="Large Full Round" size="large" shape="rounded-full" />

      </div>
    </div>
  );
}