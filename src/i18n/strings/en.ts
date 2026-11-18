import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Luffly · Sailboat maintenance',
		description:
			'Luffly is the maintenance logbook for cruising sailboats: what needs doing before launch, during the season and at haul-out, across the seven systems of your boat. For iPhone. No account, no ads.',
	},
	nav: { season: 'Season', systems: 'Systems', pro: 'Pro', support: 'Support', privacy: 'Privacy', terms: 'Terms' },
	hero: {
		kicker: 'For cruising sailboats · iPhone',
		title: 'Your sailboat, up to date',
		lead: 'Know what needs doing before launch, during the season and at haul-out. From the standing rigging to the liferaft, Luffly keeps track of every element and reminds you before anything is due.',
		note: 'No account · No ads · Works offline',
	},
	store: { download: 'Download on the', downloadBig: 'App Store', soon: 'Coming soon', soonSub: 'to the App Store' },
	shots: [],
	season: {
		title: 'Organised by season',
		lead: 'The Season tab tells you what’s due now. The calendar follows a Mediterranean year by default, launching in May and hauling out in October, and you can change it in Settings › Your season.',
		phases: [
			{ name: 'Before launch', when: 'December to May', text: 'Antifouling, anodes, seacocks, the rig check and the liferaft service: the jobs to do while she’s on the hard.' },
			{ name: 'Season', when: 'June to September', text: 'Engine hours, checklists for leaving and returning to port, and whatever falls due while you sail.' },
			{ name: 'At haul-out', when: 'October and November', text: 'Winterising the engine, sails to the sailmaker and the job list for the yard.' },
		],
		note: 'Overdue · Due soon · Up to date · No data: the colours of the navigation lights, always with a word next to them.',
	},
	systems: {
		title: 'The seven systems of a sailboat',
		lead: 'Tell Luffly which sailboat you have, its engine and three key dates, and it sets up the elements for your length. You can fill in the rest later.',
		list: [
			{ name: 'Standing rigging', examples: 'Yearly inspection and replacement by age, with what riggers and insurers say' },
			{ name: 'Running rigging', examples: 'Halyards and sheets, furler and halyard exits' },
			{ name: 'Sails', examples: 'Check at the sailmaker, age and hours of each sail' },
			{ name: 'Hull & underwater', examples: 'Antifouling, anodes, seacocks and the saildrive diaphragm' },
			{ name: 'Deck', examples: 'Winches and deck gear' },
			{ name: 'Auxiliary engine', examples: 'Oil and filter, impeller and propeller, by hours or months, whichever comes first' },
			{ name: 'Safety', examples: 'Liferaft service, flares, extinguishers and the EPIRB, by the manufacturer’s dates' },
		],
		note: 'The intervals are starting points taken from manufacturers, riggers and sailmakers. Follow your own manual or your professional’s advice: every value can be changed.',
	},
	featuresTitle: 'A logbook that works for you',
	features: [
		{
			title: 'Every element has its clock',
			items: [
				'Years, seasons or engine hours, whichever comes first',
				'A reminder before each due date and another on the day',
				'Log the last service once and Luffly works out the next one',
			],
		},
		{
			title: 'A history worth showing',
			items: [
				'Each intervention with date, cost, yard or DIY, photos and notes',
				'What the season has cost you, at a glance',
				'A PDF logbook for a buyer, your insurer or your mechanic',
			],
		},
		{
			title: 'Papers and checklists',
			items: [
				'Reminders before the ITB and the insurance expire',
				'Checklists for leaving, returning to port and winterising',
				'Your papers on board, available offline when someone asks for them at sea',
			],
		},
	],
	privacy: {
		title: 'Your boat’s data stays yours',
		lead: 'Luffly has no accounts and no servers of its own. Your boats, interventions and photos are stored on your iPhone and in your own private iCloud, which only you can access.',
		points: ['No sign-up, no ads, no analytics', 'Reminders are scheduled on your iPhone', 'Works offline, with no coverage at sea'],
		link: 'Read the privacy policy',
	},
	pro: {
		title: 'Luffly Pro',
		lead: 'The free plan shows the whole boat and keeps reminders on for the 15 elements that matter most. Pro tracks every element and adds the money and the paperwork.',
		free: 'Free',
		freeItems: [
			'The season and all seven systems',
			'Reminders for 15 elements, plus the ITB and the insurance',
			'The full history, checklists and iCloud sync',
			'1 boat and 1 photo per intervention',
		],
		items: [
			'Reminders for every element of the boat',
			'Sail inventory and rigging age advice',
			'Costs by system, the next 12 months’ estimate and engine cost per hour',
			'Papers on board and every expiry date',
			'Regulations and safety equipment by zone, and cruising abroad',
			'Spares on board and the job list for the yard',
			'PDF logbook for a sale and CSV export',
			'Unlimited boats and photos',
		],
		yearly: 'Yearly',
		lifetime: 'Lifetime',
		perYear: '/ year',
		once: 'one-time',
		trial: (d) => `${d}-day free trial`,
		launch: (regular) => `Launch price, later ${regular}`,
		fine: 'Prices in euros; the App Store shows the price for your country. The free trial is for new subscribers. The yearly plan renews automatically unless cancelled at least 24 hours before the end of the period, and can be managed in your Apple Account settings.',
	},
	footer: { made: 'Made by', contact: 'Contact' },
	legal: { updated: 'Last updated', privacyTitle: 'Privacy Policy', termsTitle: 'Terms of Use', supportTitle: 'Support' },
	notFound: { title: 'Page not found', body: 'This page doesn’t exist, or it has moved.', home: 'Back to Luffly' },
	language: 'Language',
};

export default strings;
