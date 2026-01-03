import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqsSection() {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16">
			<div className="space-y-2">
				<h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
				<p className="text-muted-foreground max-w-2xl">
					Here are some common questions and answers that we get asked on a regular. If
					you don't find the answer you're looking for, feel free to reach out.
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg "
				defaultValue="item-1"
			>
				{questions.map((item) => (
					<AccordionItem
						value={item.id}
						key={item.id}
						className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
					>
						<AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
							{item.title}
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground pb-4 px-4">
							{item.content}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}

const questions = [
	{
		id: 'item-1',
		title: 'What services does Drille Digital offer?',
		content:
			'We specialize in web design, branding, UI/UX, app design, and digital strategy. Our subscription model allows clients to request ongoing design support or one-off projects tailored to their needs.',
	},
	{
		id: 'item-2',
		title: 'Who can benefit from working with Drille Digital',
		content:
			'Startups, small businesses, entrepreneurs, and established brands looking to elevate their digital presence, streamline workflows, or improve conversions can all benefit from our services.',
	},
	{
		id: 'item-3',
		title: 'Can Drille Digital redesign my existing website or brand?',
		content:
			'Yes! We help refresh websites, logos, brand assets, and marketing materials to better reflect your vision and improve engagement with your audience.',
	},
	{
		id: 'item-4',
		title: 'How do I get started with Drille Digital?',
		content:
			'Simply reach out through our website or contact email. We’ll discuss your goals, recommend the best plan, and start the onboarding process so you can submit your first design request quickly.',
	},
	{
		id: 'item-5',
		title: 'How does the subscription-based design model work?',
		content:
			'Clients subscribe monthly or yearly for unlimited design requests (one at a time). We prioritize and complete requests efficiently while maintaining high-quality standards.',
	},
	{
		id: 'item-6',
		title: 'Can Drille Digital redesign my existing website or brand?',
		content:
			'Yes! We help refresh websites, logos, brand assets, and marketing materials to better reflect your vision and improve engagement with your audience.',
	},
	{
		id: 'item-7',
		title: 'How long does it take to complete a project?',
		content:
			'Most requests are completed within a few days to a week, depending on complexity. Larger projects like full websites or app designs may take longer, but timelines are communicated upfront.',
	},
];
