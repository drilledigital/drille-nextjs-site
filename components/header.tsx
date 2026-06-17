'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Works', href: '/work' },
    { name: 'About', href: '/#about' },
    { name: 'Labs', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const [theme, setTheme] = React.useState<'dark' | 'light'>('dark')
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.01)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    React.useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')
        if (sections.length === 0) return

        const updateTheme = () => {
            const probeY = 40
            let current: 'dark' | 'light' = 'dark'
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                if (rect.top <= probeY && rect.bottom > probeY) {
                    const t = section.getAttribute('data-nav-theme')
                    if (t === 'dark' || t === 'light') current = t
                }
            })
            setTheme(current)
        }

        updateTheme()
        window.addEventListener('scroll', updateTheme, { passive: true })
        window.addEventListener('resize', updateTheme)
        return () => {
            window.removeEventListener('scroll', updateTheme)
            window.removeEventListener('resize', updateTheme)
        }
    }, [])

    const isDark = theme === 'dark'

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-[9998] w-full pt-2">
                <div className={cn(
                    'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-500 lg:px-12',
                    scrolled && (isDark
                        ? 'bg-black/40 backdrop-blur-xl ring-1 ring-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
                        : 'bg-white/50 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]')
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className={cn('flex items-center space-x-2 transition-colors duration-500', isDark ? 'text-white' : 'text-black')}>
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn('in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200 transition-colors', isDark ? 'text-white' : 'text-black')} />
                                <X className={cn('in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 transition-colors', isDark ? 'text-white' : 'text-black')} />
                            </button>
                        </div>

                        <div className="hidden lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className={cn('block duration-150 transition-colors', isDark ? 'text-white hover:text-white/70' : 'text-black hover:text-black/60')}>
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn(
                            'in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent',
                            isDark ? 'bg-black' : 'bg-white'
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn('block duration-150', isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black')}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Link
                                    href="https://calendly.com/drillemanagement/new-meeting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        'group relative inline-flex items-center gap-2 h-10 pl-5 pr-1.5 rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:scale-[1.03]',
                                        isDark ? 'bg-white text-black' : 'bg-black text-white'
                                    )}>
                                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                    <span className="relative text-sm font-semibold">Book A Call</span>
                                    <span className={cn(
                                        'relative flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-500 group-hover:rotate-45',
                                        isDark ? 'bg-black text-white' : 'bg-white text-black'
                                    )}>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
