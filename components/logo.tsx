import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/assets/images/Drille Digital Logo White.svg"
            alt="Drille Digital"
            width={120}
            height={28}
            className={cn('h-7 w-auto', className)}
            priority
        />
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <Image
            src="/assets/images/Drille Digital Logo White.svg"
            alt="Drille Digital"
            width={18}
            height={18}
            className={cn('size-5', className)}
            priority
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/assets/images/Drille Digital Logo White.svg"
            alt="Drille Digital"
            width={71}
            height={25}
            className={cn('size-7 w-7', className)}
        />
    )
}