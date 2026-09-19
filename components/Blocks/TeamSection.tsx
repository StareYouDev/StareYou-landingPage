"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export function TeamSection() {
    const t = useTranslations("Team");

    const teamMembers = [
        {
            key: "firas",
            image: "/team/phillip.png",
            initials: "FK",
        },
        {
            key: "khalid",
            image: "/team/james.png",
            initials: "KL",
        },
    ] as const;

    return (
        <div id="team" className="max-w-7xl mx-auto py-16 px-4">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    {t("title")}
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    {t("description")}
                </p>
            </motion.div>

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
                {teamMembers.map((member, index) => {
                    const name = t(`members.${member.key}.name`);
                    return (
                        <motion.div
                            key={member.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <Card className="group hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-neutral-800 h-full">
                                <CardContent className="p-6 text-center">
                                    <Avatar className="w-32 h-32 mx-auto mb-4">
                                        <AvatarImage src={member.image} alt={name} />
                                        <AvatarFallback className="text-2xl bg-neutral-200 dark:bg-neutral-800">
                                            {member.initials}
                                        </AvatarFallback>
                                    </Avatar>

                                    <h3 className="text-xl font-bold mb-1 text-neutral-800 dark:text-neutral-100">
                                        {name}
                                    </h3>

                                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
                                        {t(`members.${member.key}.role`)}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                                        {t(`members.${member.key}.description`)}
                                    </p>

                                    <div className="flex justify-center gap-3">
                                        <a
                                            href="#"
                                            className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                            aria-label={t("social.facebook")}
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                            aria-label={t("social.twitter")}
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                            aria-label={t("social.github")}
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="#"
                                            className="text-neutral-600 hover:text-primary dark:text-neutral-400 dark:hover:text-primary transition-colors"
                                            aria-label={t("social.instagram")}
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
