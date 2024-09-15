"use client";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpDownIcon,
  BadgeDollarSignIcon,
  BookUserIcon,
  ChartLineIcon,
  GitForkIcon,
  HandCoinsIcon,
  HeartHandshakeIcon,
  PackageOpenIcon,
  RedoDotIcon,
  RotateCcwIcon,
  ShoppingBasketIcon,
  SignpostIcon,
  SmilePlusIcon,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import contact from "@/lib/contact";

const carousel = [
  { icon: <HandCoinsIcon />, title: "Profitability Margins" },
  { icon: <PackageOpenIcon />, title: "Utilization of resources" },
  { icon: <BadgeDollarSignIcon />, title: "Activity based budgeting" },
  { icon: <ShoppingBasketIcon />, title: "Procurement optimization" },
  {
    icon: <ArrowUpDownIcon />,
    title: "Intercompany transaction costs vs true costs",
  },
  { icon: <BookUserIcon />, title: "Cost of customers" },
  { icon: <HeartHandshakeIcon />, title: "Sales channel strategy" },
  { icon: <ChartLineIcon />, title: "Optimize bidding pricing" },
  { icon: <RotateCcwIcon />, title: "Employee turnover cost" },
  { icon: <SmilePlusIcon />, title: "Quality of employees vs cost" },
  { icon: <GitForkIcon />, title: "Identify best practices" },
  {
    icon: <SignpostIcon />,
    title: "Planning direct and indirect costs of future ventures",
  },
  {
    icon: <RedoDotIcon />,
    title: "Overtime usage optimization",
  },
];

const inputClass = "p-1 rounded";

const IconDisplay = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex w-56 flex-col items-center justify-center gap-2">
      <div className="rounded-full bg-white p-4">{icon}</div>
      <h3 className="h-12 text-center font-semibold">{title}</h3>
    </div>
  );
};

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState<
    "unsubmitted" | "submitting" | "success" | "emailfield" | "senderror"
  >("unsubmitted");
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const firstInView = useInView(firstRef, {
    once: true,
    amount: "all",
    margin: "0px 200px 0px 200px",
  });
  const secondInView = useInView(secondRef, {
    once: true,
    amount: "all",
    margin: "0px 200px 0px 200px",
  });
  const thirdInView = useInView(thirdRef, {
    once: true,
    amount: "all",
    margin: "0px 200px 0px 200px",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
    if (isSubmitting !== "unsubmitted") return;
    setIsSubmitting("submitting");
    // const result = await contact({ name, email, subject, content: message });
    // setIsSubmitting(result);
  };
  return (
    <article className="">
      <div className="relative flex h-screen items-center justify-center">
        <Image
          src="/images/business.jpg"
          className="-z-10 w-full object-cover"
          // placeholder="blur"
          fill={true}
          alt="bg"
        />
        <div className="w-page max-w-full">
          <div className="w-96 p-2 text-5xl font-black text-white">
            COSTING <span className="text-lightgold">&</span> PROFITABILITY MADE
            INTELLIGENT
          </div>
        </div>
      </div>
      <div className="inline-flex w-full flex-nowrap overflow-hidden bg-lightgold py-24 [mask-image:_linear-gradient(to_right,transparent_0,_lightgold_128px,_lightgold_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-infinite-scroll gap-6 md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {carousel.map(({ icon, title }) => (
            <IconDisplay key={title + "1"} icon={icon} title={title} />
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll gap-6 md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {carousel.map(({ icon, title }) => (
            <IconDisplay key={title + "2"} icon={icon} title={title} />
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center bg-white py-24">
        <div id="aboutus" className="w-page max-w-full scroll-mt-24">
          <h1 className="p-2 text-2xl font-black">ABOUT US</h1>
          <div className="flex flex-col gap-12 p-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={firstInView ? { opacity: 1, x: 0 } : {}}
              transition={{ bounce: 0 }}
              ref={firstRef}
              className="sm:w-96"
            >
              <h2 className="text-xl font-bold">Who are we?</h2>
              <p>
                We are a business intelligence consultancy. Our specialty is
                analytical costing modeling.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={secondInView ? { opacity: 1, x: 0 } : {}}
              transition={{ bounce: 0, delay: 0.2 }}
              ref={secondRef}
              className="sm:w-96 sm:self-center"
            >
              <h2 className="text-xl font-bold">Why costing?</h2>
              <p>
                Our cost models produce a transparent view of the casual costs
                relations and capacities of your company, allowing for a
                constant process of learning, improvement and review, resulting
                in growth of profitability margins.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={thirdInView ? { opacity: 1, x: 0 } : {}}
              transition={{ bounce: 0, delay: 0.4 }}
              ref={thirdRef}
              className="sm:w-96 sm:self-end"
            >
              <h2 className="text-xl font-bold">Why In Sight Analytics?</h2>
              <p>
                We see your company as if it was our own, what matters to you
                matters to us. Our delivery will accommodate your needs as well
                as your wishes. We never forget that our success is measured by
                that of our clients. Even the best costing models can’t perform
                magic. Create a model with us, use it well, and it will come
                close to it.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="flex scroll-mt-24 flex-col items-center bg-black py-24"
      >
        <div className="flex w-page max-w-full flex-col gap-4 px-2">
          <h1 className="text-2xl font-black text-white">CONTACT US</h1>
          <div className="flex w-full gap-2">
            <div className="w-60">
              <p className="text-white">
                Have business or technical queries? Send an Email to{" "}
                <a
                  href="mailto: grisha@in-sight-analytics.com"
                  className="whitespace-nowrap font-semibold text-lightgold visited:text-darkgold"
                >
                  grisha@in-sight-analytics.com
                </a>{" "}
                or fill out the form and we will contact you shortly!
              </p>
            </div>
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className={inputClass}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className={inputClass}
                  />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className={inputClass}
                  />
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  className={`${inputClass} flex-grow resize-none`}
                />
              </div>
              <div className="flex justify-between">
                <p className="text-xs text-red-500">All fields are required</p>
                <button
                  onClick={submit}
                  className="h-9 w-24 self-end rounded-md bg-lightgold font-semibold"
                >
                  {isSubmitting === "submitting" ? (
                    <div className="flex items-center justify-center gap-1">
                      <span className="sr-only">Loading...</span>
                      <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.3s]"></div>
                      <div className="h-3 w-3 animate-bounce rounded-full bg-black [animation-delay:-0.15s]"></div>
                      <div className="h-3 w-3 animate-bounce rounded-full bg-black"></div>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
