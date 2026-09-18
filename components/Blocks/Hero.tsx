"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowUpRight, X } from "lucide-react"
import { motion, type Variants } from "motion/react"
import { useState } from "react"

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

const projects = [
    {
        name: 'Luma Studio',
        type: 'Portfolio Website',
        description: 'Luxury personal brand site built to showcase premium services and attract high-value clients.',
        tag: 'Branding + UX',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85',
    },
    {
        name: 'Northlane',
        type: 'Ecommerce Store',
        description: 'Modern storefront focused on product discovery, conversion flow, and mobile shopping experience.',
        tag: 'Shopify + Design',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85',
    },
    {
        name: 'Harbor Co.',
        type: 'Business Website',
        description: 'Clean service website designed to improve trust, clarity, and inbound leads for a growing company.',
        tag: 'Strategy + Web',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85',
    },
]

const ProjectPreview = ({ project, expanded = false }: { project: (typeof projects)[number]; expanded?: boolean }) => (
    <div
        className={`group/preview relative overflow-hidden ${expanded ? 'aspect-video rounded-2xl' : 'aspect-[1.08] rounded-[1.45rem]'}`}
        role="img"
        aria-label={`${project.name} website preview`}
        style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20 transition-opacity duration-500 group-hover/preview:from-black/75" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-white">
            <span className="rounded-full border border-white/35 bg-black/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur-md">
                {project.tag}
            </span>
            <span className="text-xs font-medium opacity-75">01 / 03</span>
        </div>

        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 text-white">
            <div>
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] opacity-75">{project.type}</p>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
            </div>
        </div>
    </div>
)

export const FeaturedProjects = () => {
    const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

    return (
        <>
            <motion.section
            id="projects"
            className="relative mx-auto max-w-7xl py-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="mb-16 text-center">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Selected work</p>
                <h2 className="mb-4 text-4xl font-bold text-neutral-800 dark:text-neutral-100 md:text-5xl">
                    Featured projects
                </h2>
                <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
                    A look at the websites we create for ambitious brands, stores, and creators.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="group relative overflow-hidden rounded-[1.6rem] border border-gray-200/80 bg-white p-1.5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-950"
                    >
                        <ProjectPreview project={project} />

                        <div className="absolute bottom-5 right-5">
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="rounded-full bg-white/90 px-4 text-black shadow-lg backdrop-blur transition-colors hover:bg-white"
                                onClick={() => setActiveProject(project)}
                            >
                                Preview website
                                <ArrowUpRight />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            </motion.section>

            {activeProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${activeProject.name} website preview`}>
                    <div className="relative w-full max-w-4xl rounded-3xl bg-background p-3 shadow-2xl sm:p-5">
                        <button
                            type="button"
                            aria-label="Close website preview"
                            className="absolute right-5 top-5 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white transition-transform hover:scale-105"
                            onClick={() => setActiveProject(null)}
                        >
                            <X className="size-4" />
                        </button>
                        <ProjectPreview project={activeProject} expanded />
                    </div>
                </div>
            )}
        </>
    )
}

const Hero = () => {
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
                    Custom websites for brands, stores & creators 🚀
                </Badge>
            </motion.div>

            <div className="text-center mt-8">
                <motion.h1
                    className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                    variants={fadeUpVariants}
                >
                    Websites that look premium and convert.
                </motion.h1>
                <motion.p
                    className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    variants={fadeUpVariants}
                >
                    We build custom websites for businesses, ecommerce brands, portfolios, and personal brands — from online stores and service sites to modern landing pages that turn visitors into clients.
                </motion.p>
            </div>

            <motion.div
                className="my-6 mb-12 flex items-center justify-center gap-x-4"
                variants={fadeUpVariants}
            >
                <ShimmerButton>Book a Free Strategy Call</ShimmerButton>
            </motion.div>

        </motion.div>
    )
}

export default Hero