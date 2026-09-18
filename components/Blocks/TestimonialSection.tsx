import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Marquee } from "@/components/ui/marquee"

import { cn } from "@/lib/utils"

const reviews = [
    {
        name: "Sarah Lee",
        username: "@sarahlee",
        body: "StareYou rebuilt our site and it finally feels like our brand. The new design made customers take us seriously right away.",
        img: "https://notion-avatars.netlify.app/api/avatar?preset=female-1",
    },
    {
        name: "Marcus Green",
        username: "@marcusg",
        body: "Our ecommerce launch looked premium and converted much better than the old version. The whole process was fast and clear.",
        img: "https://notion-avatars.netlify.app/api/avatar/?face=1&nose=10&mouth=8&eyes=11&eyebrows=1&glasses=14&hair=40&accessories=0&details=0&beard=0&halloween=0&christmas=0",
    },
    {
        name: "Emily Stone",
        username: "@emilystone",
        body: "We needed a portfolio website that felt polished and professional. StareYou delivered exactly that and more.",
        img: "https://notion-avatars.netlify.app/api/avatar/?face=13&nose=7&mouth=11&eyes=3&eyebrows=12&glasses=3&hair=40&accessories=0&details=0&beard=0&halloween=0&christmas=0",
    },
    {
        name: "David Kim",
        username: "@davidkim",
        body: "The site feels premium, loads fast, and we’ve already seen more qualified enquiries coming through.",
        img: "https://notion-avatars.netlify.app/api/avatar/?face=9&nose=3&mouth=7&eyes=10&eyebrows=12&glasses=1&hair=35&accessories=0&details=0&beard=0&halloween=0&christmas=0",
    },
    {
        name: "Priya Shah",
        username: "@priyashah",
        body: "StareYou understood our business and built a website that reflects who we are. It has been a massive upgrade.",
        img: "https://notion-avatars.netlify.app/api/avatar/?face=8&nose=7&mouth=4&eyes=0&eyebrows=6&glasses=11&hair=19&accessories=0&details=0&beard=0&halloween=0&christmas=0",
    },
    {
        name: "Alex Murphy",
        username: "@alexmurphy",
        body: "From strategy to launch, the whole experience felt smooth and strategic. We now have a much stronger online presence.",
        img: "https://notion-avatars.netlify.app/api/avatar/?face=1&nose=1&mouth=1&eyes=1&eyebrows=1&glasses=1&hair=1&accessories=1&details=1&beard=1&halloween=1&christmas=1",
    },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string
    name: string
    username: string
    body: string
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/10 bg-muted/40",
                // dark styles
                "dark:border-gray-50/10 dark:bg-gray-50/10"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                        alt={name}
                        src={img}
                        loading="lazy"
                        width="120"
                        height="120"
                    />
                    <AvatarFallback>
                        {name
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                    </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    )
}

export function TestimonialSection() {
    return (
        <div id="testimonials" className="max-w-7xl mx-auto py-24 sm:py-32">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    What clients say about working with StareYou
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    Our clients come to us for clean design and strong results — and stay because the websites help them look more credible and win more business.
                </p>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
            </div>
        </div>
    )
}
