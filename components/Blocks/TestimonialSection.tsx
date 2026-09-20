import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Marquee } from '@/components/ui/marquee';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/utils';

const reviews = [
  {
    key: 'sarah',
    username: '@sarahlee',
    img: 'https://notion-avatars.netlify.app/api/avatar/?face=8&nose=7&mouth=4&eyes=0&eyebrows=6&glasses=11&hair=19&accessories=0&details=0&beard=0&halloween=0&christmas=0',
  },
  {
    key: 'marcus',
    username: '@marcusg',
    img: 'https://notion-avatars.netlify.app/api/avatar/?face=1&nose=10&mouth=8&eyes=11&eyebrows=1&glasses=14&hair=40&accessories=0&details=0&beard=0&halloween=0&christmas=0',
  },
  {
    key: 'emily',
    username: '@emilystone',
    img: 'https://notion-avatars.netlify.app/api/avatar/?face=8&nose=7&mouth=4&eyes=0&eyebrows=6&glasses=11&hair=19&accessories=0&details=0&beard=0&halloween=0&christmas=0',
  },
  {
    key: 'david',
    username: '@davidkim',
    img: 'https://notion-avatars.netlify.app/api/avatar/?face=1&nose=10&mouth=8&eyes=11&eyebrows=1&glasses=14&hair=40&accessories=0&details=0&beard=0&halloween=0&christmas=0',
  },
  {
    key: 'priya',
    username: '@priyashah',
    img: 'https://notion-avatars.netlify.app/api/avatar/?face=8&nose=7&mouth=4&eyes=0&eyebrows=6&glasses=11&hair=19&accessories=0&details=0&beard=0&halloween=0&christmas=0',
  },
  {
    key: 'alex',
    username: '@alexmurphy',
    img: 'https://notion-avatars.netlify.app/api/avatar/?face=1&nose=10&mouth=8&eyes=11&eyebrows=1&glasses=14&hair=40&accessories=0&details=0&beard=0&halloween=0&christmas=0',
  },
] as const;

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/10 bg-muted/40',
        // dark styles
        'dark:border-gray-50/10 dark:bg-gray-50/10',
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
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialSection() {
  const t = useTranslations('Testimonials');

  return (
    <div id="testimonials" className="max-w-7xl mx-auto py-24 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
          {t('title')}
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          {t('description')}
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard
              key={review.username}
              img={review.img}
              name={t(`reviews.${review.key}.name`)}
              body={t(`reviews.${review.key}.body`)}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard
              key={review.username}
              img={review.img}
              name={t(`reviews.${review.key}.name`)}
              body={t(`reviews.${review.key}.body`)}
            />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </div>
    </div>
  );
}
