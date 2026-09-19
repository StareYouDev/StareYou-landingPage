import { HeadsetIcon, LinkIcon, PlusIcon, SettingsIcon, ShieldCheckIcon, SparklesIcon } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslations } from 'next-intl'

export function FaqSection() {
    const t = useTranslations('Faq')

    const items = [
        { key: 'what', icon: SparklesIcon },
        { key: 'ecommerce', icon: LinkIcon },
        { key: 'timeline', icon: SettingsIcon },
        { key: 'improve', icon: ShieldCheckIcon },
        { key: 'support', icon: HeadsetIcon },
    ] as const

    return (
        <div id="faq" className='py-24 sm:py-32'>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
                    {t('title')}
                </h2>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                    {t('description')}
                </p>
            </div>
            <Accordion className='max-w-4xl mx-auto' defaultValue={['item-1']}>
                {items.map((item, index) => (
                    <AccordionItem key={item.key} value={`item-${index + 1}`}>
                        <AccordionTrigger className='py-4 **:data-[slot=accordion-trigger-icon]:hidden'>
                            <span className='flex items-center gap-4'>
                                <item.icon className='size-4 shrink-0' />
                                <span>{t(`items.${item.key}.title`)}</span>
                            </span>
                            <PlusIcon className='text-muted-foreground pointer-events-none ml-auto size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45' />
                        </AccordionTrigger>
                        <AccordionContent className='text-muted-foreground'>{t(`items.${item.key}.content`)}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

