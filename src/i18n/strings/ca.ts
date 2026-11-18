import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Luffly · El teu veler al dia',
		description:
			'Luffly és el quadern de manteniment per a velers de creuer: què toca abans d’avarar, durant la temporada i en treure-la, als set sistemes de la barca. Per a iPhone. Sense compte ni anuncis.',
	},
	nav: { season: 'Temporada', systems: 'Sistemes', pro: 'Pro', support: 'Ajuda', privacy: 'Privadesa', terms: 'Condicions' },
	hero: {
		kicker: 'Per a velers de creuer · iPhone',
		title: 'El teu veler al dia',
		lead: 'Què toca abans d’avarar, durant la temporada i en treure-la. De la jarcia fixa a la balsa salvavides, Luffly controla cada element i t’avisa abans que venci.',
		note: 'Sense compte · Sense anuncis · Funciona sense connexió',
	},
	store: { download: 'Descarrega-la a', downloadBig: 'l’App Store', soon: 'Molt aviat', soonSub: 'a l’App Store' },
	shots: [],
	season: {
		title: 'Ordenat per temporada',
		lead: 'La pestanya Temporada et diu què toca ara. El calendari segueix l’any mediterrani: s’avara al maig i es treu a l’octubre, i el pots canviar a Ajustos › La teva temporada.',
		phases: [
			{ name: 'Abans d’avarar', when: 'De desembre a maig', text: 'Patent, ànodes, aixetes de fons, la revisió de l’aparell i la de la balsa: el que es fa amb la barca en sec.' },
			{ name: 'Temporada', when: 'De juny a setembre', text: 'Hores de motor, llistes per salpar i tornar a port, i el que venci mentre navegues.' },
			{ name: 'En treure-la', when: 'Octubre i novembre', text: 'Hivernar el motor, les veles a la veleria i la llista de feines per al varador.' },
		],
		note: 'Vençut · Aviat · Al dia · Sense dades: els colors dels llums de navegació, sempre amb la paraula al costat.',
	},
	systems: {
		title: 'Els set sistemes d’un veler',
		lead: 'Digues a Luffly quin veler tens, el motor i tres dates clau, i et prepara els elements segons l’eslora. La resta la pots omplir més endavant.',
		list: [
			{ name: 'Jarcia fixa', examples: 'Revisió anual i canvi per edat, amb el que diuen aparelladors i asseguradores' },
			{ name: 'Jarcia de treball', examples: 'Drisses i escotes, enrotllador i sortides de drisses' },
			{ name: 'Veles', examples: 'Revisió a la veleria, edat i hores de cada vela' },
			{ name: 'Casc i obra viva', examples: 'Patent, ànodes, aixetes de fons i el diafragma del saildrive' },
			{ name: 'Coberta', examples: 'Winches i ferramenta de coberta' },
			{ name: 'Motor auxiliar', examples: 'Oli i filtre, rodet i hèlix, per hores o per mesos, el que arribi primer' },
			{ name: 'Seguretat', examples: 'Revisió de la balsa, bengales, extintors i radiobalisa, segons les dates del fabricant' },
		],
		note: 'Els intervals són un punt de partida, tret de fabricants, aparelladors i veleries. Segueix el teu manual o el criteri del teu professional: tots els valors es poden canviar.',
	},
	featuresTitle: 'Un quadern que treballa per tu',
	features: [
		{
			title: 'Cada element, el seu rellotge',
			items: [
				'Anys, temporades o hores de motor, el que arribi primer',
				'Un avís abans de cada venciment i un altre el mateix dia',
				'Registres el darrer servei i Luffly calcula el següent',
			],
		},
		{
			title: 'Un historial que es pot ensenyar',
			items: [
				'Cada intervenció amb data, cost, taller o jo mateix, fotos i notes',
				'El que t’ha costat la temporada, d’un cop d’ull',
				'Un llibre de manteniment en PDF per a un comprador, l’asseguradora o el teu mecànic',
			],
		},
		{
			title: 'Papers i llistes',
			items: [
				'Avisos abans que caduquin l’ITB i l’assegurança',
				'Llistes per salpar, tornar a port i hivernar',
				'Els teus papers a bord, disponibles sense connexió quan te’ls demanen al mar',
			],
		},
	],
	privacy: {
		title: 'Les dades de la teva barca són teves',
		lead: 'Luffly no té comptes ni servidors propis. Les teves barques, intervencions i fotos es desen al teu iPhone i al teu iCloud privat, on només hi entres tu.',
		points: ['Sense registre, sense anuncis, sense analítica', 'Els avisos es programen al teu iPhone', 'Funciona sense connexió, també sense cobertura al mar'],
		link: 'Llegeix la política de privadesa',
	},
	pro: {
		title: 'Luffly Pro',
		lead: 'El pla gratuït t’ensenya tota la barca i manté els avisos dels 15 elements més importants. Pro controla tots els elements i hi afegeix els costos i els papers.',
		free: 'Gratuït',
		freeItems: [
			'La temporada i els set sistemes',
			'Avisos de 15 elements, més l’ITB i l’assegurança',
			'Tot l’historial, les llistes i la sincronització amb iCloud',
			'1 barca i 1 foto per intervenció',
		],
		items: [
			'Avisos per a tota la barca',
			'Inventari de veles i edat de la jarcia',
			'Costos per sistema, previsió dels propers 12 mesos i cost del motor per hora',
			'Papers a bord i totes les caducitats',
			'Normativa i equip de seguretat per zona, i navegar a l’estranger',
			'Recanvis a bord i llista de feines per al varador',
			'PDF per a la venda i exportació CSV',
			'Barques i fotos il·limitades',
		],
		yearly: 'Anual',
		lifetime: 'Per sempre',
		perYear: '/ any',
		once: 'pagament únic',
		trial: (d) => `${d} dies de prova gratis`,
		launch: (regular) => `Preu de llançament, després ${regular}`,
		fine: 'Preus en euros; l’App Store mostra el preu del teu país. La prova gratis és per a subscriptors nous. El pla anual es renova automàticament si no el cancel·les com a mínim 24 hores abans que acabi el període, i es gestiona als ajustos del teu compte d’Apple.',
	},
	footer: { made: 'Fet per', contact: 'Contacte' },
	legal: { updated: 'Darrera actualització', privacyTitle: 'Política de privadesa', termsTitle: 'Condicions d’ús', supportTitle: 'Ajuda' },
	notFound: { title: 'Pàgina no trobada', body: 'Aquesta pàgina no existeix o ha canviat de lloc.', home: 'Torna a Luffly' },
	language: 'Idioma',
};

export default strings;
