import { HeadsetIcon, LinkIcon, PlusIcon, SettingsIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FaqSection() {
    const items = [
        {
            icon: SparklesIcon,
            title: 'What does StareYou do?',
            content:
                'StareYou builds custom websites for businesses, ecommerce brands, creatives, and personal brands. We focus on premium design, strong messaging, and conversion-focused experiences that help you attract clients and grow revenue.'
        },
        {
            icon: LinkIcon,
            title: 'Can you build ecommerce websites?',
            content:
                'Yes. We design and build ecommerce websites that are visually polished, easy to shop, and structured to help customers convert. From product pages to storefront strategy, we handle the build with a sales-first approach.'
        },
        {
            icon: SettingsIcon,
            title: 'How long does a website take to build?',
            content:
                'Most projects take between 2 and 6 weeks depending on scope, pages, and complexity. We move quickly, but we also make sure the final site is polished, conversion-focused, and ready to represent your brand.'
        },
        {
            icon: ShieldCheckIcon,
            title: 'Do you only build websites, or can you also improve existing ones?',
            content:
                'We do both. If you already have a website, we can redesign it, improve the user experience, refresh the messaging, and optimize it to better convert visitors into customers.'
        },
        {
            icon: HeadsetIcon,
            title: 'Do you offer support after launch?',
            content:
                'Absolutely. We offer ongoing support and optimization so your site keeps performing as your business grows. That can include updates, improvements, SEO adjustments, and new landing page concepts.'
        }
    ]
    return (
        <div id="faq" className='py-24 sm:py-32'>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    Everything you need to know about how StareYou helps businesses build a stronger digital presence.
                </p>
            </div>
            <Accordion className='max-w-4xl mx-auto' defaultValue={['item-1']}>
                {items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className='py-4 **:data-[slot=accordion-trigger-icon]:hidden'>
                            <span className='flex items-center gap-4'>
                                <item.icon className='size-4 shrink-0' />
                                <span>{item.title}</span>
                            </span>
                            <PlusIcon className='text-muted-foreground pointer-events-none ml-auto size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45' />
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

