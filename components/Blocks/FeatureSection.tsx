"use client";

import { cn } from "@/lib/utils";
import {
    BookOpen,
    Clock,
    MessageCircle,
    Puzzle,
    Users,
    Zap,
} from "lucide-react";
import { motion } from "motion/react";

export function FeaturesSection() {
    const features = [
        {
            title: "Brand-first web design",
            description:
                "We build websites that feel premium, reflect your identity, and make your business look credible from the first impression.",
            icon: <BookOpen />,
        },
        {
            title: "Ecommerce websites that sell",
            description:
                "Launch polished storefronts with clean product pages, stronger UX, and customer journeys designed to increase conversions.",
            icon: <Clock />,
        },
        {
            title: "Portfolio & personal brand sites",
            description:
                "Showcase your work beautifully and turn attention into inquiries with a site built for trust and authority.",
            icon: <MessageCircle />,
        },
        {
            title: "High-converting landing pages",
            description: "Need a page for a campaign, launch, or offer? We craft focused pages built to drive leads and sales.",
            icon: <Zap />,
        },
        {
            title: "Performance & SEO",
            description: "Fast, efficient websites that load quickly, rank better, and give visitors a smoother experience on every device.",
            icon: <Puzzle />,
        },
        {
            title: "Support that keeps growing",
            description:
                "We stay with you after launch to refine your site, improve results, and help your online presence evolve with your brand.",
            icon: <Users />,
        },
    ];
    return (
        <div id="features" className="max-w-7xl mx-auto py-16">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    Why brands choose StareYou
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    We design websites that don’t just look good — they help your business attract attention, build trust, and turn visitors into customers.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <motion.div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
                index < 3 && "lg:border-b dark:border-neutral-800"
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-linear-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 group-hover/feature:text-primary group-hover/feature:scale-101 transition duration-200">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </motion.div>
    );
};
