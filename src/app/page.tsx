import Calendar from "./components/Calendar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-grow flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8 text-purple-800">Event Calendar</h1>
        <Calendar />
      </main>
      <Footer />
    </div>
  );
}