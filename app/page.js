import { Showcase } from "./components/content/Showcase";

export default function Home() {
  return (
    <div className="pt-10">
      <h1 className="text-3xl font-bold text-center">こんにちは</h1>
      <p className="text-3xl font-bold text-center">Welcome to Momo Learn</p>

      <Showcase />
    </div>
  );
}
