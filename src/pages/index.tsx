import { Montserrat } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APP_NAME, CHECKOUT_URL_STARTER } from "@/lib/constants";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NextSeo } from "next-seo";
import { Footer } from "@/components/website/footer.component";
import { CTA } from "@/components/website/cta.component";

const font = Montserrat({ subsets: ["latin"] });

const Card = ({ price, url }: { price: number; url: string }) => {
  return (
    <div className="w-full max-w-lg flex flex-col items-center justify-between h-56 xl:h-96 2xl:h-56 border-2 border-black rounded-3xl mx-auto gap-4">
      <div className="flex flex-row px-4 pt-6 gap-4">
        <div className="xl:text-3xl text-2xl font-semibold my-auto">
          <span>Lifetime access</span>
          <p className="xl:text-2xl text-xl font-normal pt-4 px-4">
            <ul style={{ listStyleType: "disc" }}>
              <li>100+ AI directories</li>
              <li>30+ AI newsletters</li>
              <li>Promotions and discounts</li>
              <li>Weekly updates</li>
            </ul>
          </p>
        </div>
        <div
          className="text-3xl py-10"
          style={{ borderLeft: "1px solid black", height: "200px" }}
        ></div>
        <div className="xl:text-5xl text-4xl my-auto font-semibold">
          ${price}
        </div>
      </div>
      <div className="pb-6">
        <Button
          variant="secondary"
          asChild
          className="text-xl rounded-lg border border-black hover:bg-main-grad"
        >
          <Link href={url}>Get Full List →</Link>
        </Button>
        <p className="pt-4 pb-4 text-center">One-time payment</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="AI Submit List - #1 List of AI Submission Websites and Newsletters to launch your AI startup"
        description="Get AI optical illusion art with your logo in few minutes. Upload logos, pick your styles & generate 50+ pictures. One-time payment."
        openGraph={{
          url: "https://aisubmitlist.com",
          title:
            "AI Submit List - #1 List of AI Submission Websites and Newsletters to launch your AI startup",
          description:
            "Get AI optical illusion art with your logo in few minutes. Upload logos, pick your styles & generate 50+ pictures. One-time payment.",
          siteName: "AI Submit List",
        }}
      />
      <main
        className={`flex min-h-screen w-full pt-10 sm:pt-20 flex-col px-8 sm:px-24 ${font.className}`}
      >
        <section className="">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[60%_40%] w-full">
              <div className="w-full">
                <p className="sm:text-3xl text-lg font-semibold tracking-wider">
                  {APP_NAME}
                </p>
                <h1 className="mt-4 text-2xl font-bold text-black lg:mt-14 sm:text-5xl xl:text-[64px]">
                  #1 List of AI Directories and Newsletters to launch your AI
                  startup
                </h1>
                <p className="mt-4 sm:mt-8 text-[15px] text-black lg:mt-14 sm:text-2xl leading-[150%]">
                  Launching an AI startup? You need to get the word out.
                </p>
                <p className="mt-4 sm:mt-8 text-[15px] text-black sm:text-2xl leading-[150%]">
                  We collected the best AI directories and newsletters to help
                  you get the first users and customers.
                </p>
                <p className="mt-4 sm:mt-8 text-[15px] text-black sm:text-2xl leading-[150%]">
                  Try it right now!
                </p>

                <Button
                  className="inline-flex items-center px-4 sm:px-8 py-4 sm:py-8 mt-4 sm:text-2xl font-semibold text-white bg-black transition-all duration-200 rounded-xl lg:mt-16"
                  role="button"
                  onClick={() => {
                    const element = document.getElementById("top-directories");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See Top AI directories →
                </Button>
              </div>
              <div className="pt-20 w-full mx-auto hidden sm:block">
                <Image
                  src="/lib.png"
                  alt="AI Submit List"
                  width={800}
                  height={800}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 sm:pt-48" id="top-directories">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="max-w-5xl">
              <p className="sm:text-3xl text-lg font-semibold tracking-wider">
                ▶︎ Top 10 AI directories by traffic
              </p>
              <h2 className="mt-4 text-2xl font-bold text-black lg:mt-14 sm:text-5xl xl:text-[64px]">
                Get the traffic and backlinks to your AI tool today
              </h2>
              <div className="mt-8">
                <iframe
                  className="airtable-embed w-full"
                  src="https://airtable.com/embed/app084FcVQzPVgifc/shrSEQ4OEWzaVo9fL?backgroundColor=yellow"
                  width="100%"
                  height="533"
                  style={{
                    background: "transparent",
                    border: "1px solid #ccc",
                  }}
                ></iframe>
              </div>
              <div>
                <Button
                  className="inline-flex items-center px-4 sm:px-8 py-4 sm:py-8 mt-4 sm:text-2xl font-semibold text-white bg-black transition-all duration-200 rounded-xl lg:mt-16"
                  role="button"
                  onClick={() => {
                    const element = document.getElementById("pricing");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get full access →
                </Button>
              </div>
            </div>
          </div>
        </section>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
