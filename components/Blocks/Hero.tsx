"use client"

import { Badge } from '@/components/ui/badge'
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { motion, type Variants } from "motion/react"
import { useTranslations } from "next-intl"

// Animation variants for staggered children
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
}

const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",  // Using named easing instead of custom bezier
        },
    },
}

const liveScreenshot = (url: string) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400`

const projects = [
    {
        key: 'carakaSandy',
        url: 'https://caraka-sandy.vercel.app/',
        image: liveScreenshot('https://caraka-sandy.vercel.app/'),
    },
    {
        key: 'evaraRust',
        url: 'https://evara-rust.vercel.app/',
        image: liveScreenshot('https://evara-rust.vercel.app/'),
    },
    {
        key: 'rstkyg',
        url: 'https://rstkyg.vercel.app/',
        image: liveScreenshot('https://rstkyg.vercel.app/'),
    },
] as const

const ProjectPreview = ({
    name,
    type,
    image,
}: {
    name: string
    type: string
    image: string
}) => (
    <div
        className="group/preview relative overflow-hidden aspect-[1.08] rounded-[1.45rem]"
        role="img"
        aria-label={name}
        style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20 transition-opacity duration-500 group-hover/preview:from-black/75" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
            <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] opacity-75">{type}</p>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{name}</h3>
            </div>
        </div>
    </div>
)

export const FeaturedProjects = () => {
    const t = useTranslations('FeaturedProjects')

    return (
        <motion.section
            id="projects"
            className="relative mx-auto max-w-7xl py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="mb-16 text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{t('eyebrow')}</p>
                <h2 className="mb-4 text-4xl font-bold text-neutral-800 dark:text-neutral-100 md:text-5xl">
                    {t('title')}
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
                    {t('description')}
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project) => {
                    const name = t(`items.${project.key}.name`)
                    const type = t(`items.${project.key}.type`)
                    return (
                        <a
                            key={project.key}
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={t('visitAria', { name })}
                            className="group relative overflow-hidden rounded-[1.6rem] border border-gray-200/80 bg-white p-1.5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-950"
                        >
                            <ProjectPreview name={name} type={type} image={project.image} />
                        </a>
                    )
                })}
            </div>
        </motion.section>
    )
}

const Hero = () => {
    const t = useTranslations('Hero')

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex items-center justify-center"
                variants={fadeUpVariants}
            >
                <Badge className="h-auto text-sm font-medium px-4 py-2 " variant={'outline'}>
                    {t('badge')}
                </Badge>
            </motion.div>

            <div className="text-center mt-8">
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    variants={fadeUpVariants}
                >
                    {t('title')}
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    variants={fadeUpVariants}
                >
                    {t('description')}
                </motion.p>
            </div>

            <motion.div
                className="my-6 mb-12 flex items-center justify-center gap-x-4"
                variants={fadeUpVariants}
            >
                <ShimmerButton>{t('cta')}</ShimmerButton>
            </motion.div>

        </motion.div>
    )
}

export default Hero