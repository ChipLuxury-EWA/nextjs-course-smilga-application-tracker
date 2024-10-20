import Image from "next/image";
import Logo from "@/assets/logo.svg";
import LandingImg from "@/assets/landing.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" />
        <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
          <div>
            <h1 className="capitalize text-4xl md:text-7xl font-bold">
              Apli
              <span className="text-primary">Track</span>
            </h1>
            <p className="leading-loose max-w-md mt-4">
              ApliTrack is a simple job tracking application to help you stay organized and on top of your job search. Add, edit,
              and delete job applications, track their status, and add notes and reminders.
            </p>
            <Button asChild className="mt-4">
              <Link href="/add-job">Get Started</Link>
            </Button>
          </div>
          <Image src={LandingImg} alt="landing" className="hidden lg:block" />
        </section>
      </header>
    </main>
  );
}
