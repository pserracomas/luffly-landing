import type { Strings } from '../ui';

const strings: Strings = {
	meta: {
		title: 'Luffly · Tu velero al día',
		description:
			'Luffly es el cuaderno de mantenimiento para veleros de crucero: qué toca antes de botar, durante la temporada y al sacarlo, en los siete sistemas del barco. Para iPhone. Sin cuenta ni anuncios.',
	},
	nav: { season: 'Temporada', systems: 'Sistemas', pro: 'Pro', support: 'Ayuda', privacy: 'Privacidad', terms: 'Condiciones' },
	hero: {
		kicker: 'Para veleros de crucero · iPhone',
		title: 'Tu velero al día',
		lead: 'Qué toca antes de botar, durante la temporada y al sacarlo. De la jarcia firme a la balsa salvavidas, Luffly controla cada elemento y te avisa antes de que venza.',
		note: 'Sin cuenta · Sin anuncios · Funciona sin conexión',
	},
	store: { download: 'Descárgala en el', downloadBig: 'App Store', soon: 'Muy pronto', soonSub: 'en el App Store' },
	shots: [],
	season: {
		title: 'Ordenado por temporada',
		lead: 'La pestaña Temporada te dice qué toca ahora. El calendario sigue el año mediterráneo: se bota en mayo y se saca en octubre, y lo puedes cambiar en Ajustes › Tu temporada.',
		phases: [
			{ name: 'Antes de botar', when: 'De diciembre a mayo', text: 'Patente, ánodos, grifos de fondo, la revisión del aparejo y la de la balsa: lo que se hace con el barco en seco.' },
			{ name: 'Temporada', when: 'De junio a septiembre', text: 'Horas de motor, listas para zarpar y volver a puerto, y lo que venza mientras navegas.' },
			{ name: 'Al sacarlo', when: 'Octubre y noviembre', text: 'Invernar el motor, las velas a la velería y la lista de trabajos para el varadero.' },
		],
		note: 'Vencido · Pronto · Al día · Sin datos: los colores de las luces de navegación, siempre con la palabra al lado.',
	},
	systems: {
		title: 'Los siete sistemas de un velero',
		lead: 'Dile a Luffly qué velero tienes, su motor y tres fechas clave, y te prepara los elementos según la eslora. El resto lo puedes rellenar más adelante.',
		list: [
			{ name: 'Jarcia firme', examples: 'Revisión anual y cambio por edad, con lo que dicen aparejadores y aseguradoras' },
			{ name: 'Jarcia de labor', examples: 'Drizas y escotas, enrollador y salidas de drizas' },
			{ name: 'Velas', examples: 'Revisión en la velería, edad y horas de cada vela' },
			{ name: 'Casco y obra viva', examples: 'Patente, ánodos, grifos de fondo y el diafragma del saildrive' },
			{ name: 'Cubierta', examples: 'Winches y herrajes de cubierta' },
			{ name: 'Motor auxiliar', examples: 'Aceite y filtro, rodete y hélice, por horas o por meses, lo que llegue antes' },
			{ name: 'Seguridad', examples: 'Revisión de la balsa, bengalas, extintores y radiobaliza, según las fechas del fabricante' },
		],
		note: 'Los intervalos son un punto de partida, sacados de fabricantes, aparejadores y velerías. Sigue tu manual o el criterio de tu profesional: todos los valores se pueden cambiar.',
	},
	featuresTitle: 'Un cuaderno que trabaja para ti',
	features: [
		{
			title: 'Cada elemento, su reloj',
			items: [
				'Años, temporadas u horas de motor, lo que llegue antes',
				'Un aviso antes de cada vencimiento y otro el mismo día',
				'Registras el último servicio y Luffly calcula el siguiente',
			],
		},
		{
			title: 'Un historial que se puede enseñar',
			items: [
				'Cada intervención con fecha, coste, taller o yo mismo, fotos y notas',
				'Lo que te ha costado la temporada, de un vistazo',
				'Un libro de mantenimiento en PDF para un comprador, la aseguradora o tu mecánico',
			],
		},
		{
			title: 'Papeles y listas',
			items: [
				'Avisos antes de que caduquen la ITB y el seguro',
				'Listas para zarpar, volver a puerto e invernar',
				'Tus papeles a bordo, disponibles sin conexión cuando te los piden en el mar',
			],
		},
	],
	privacy: {
		title: 'Los datos de tu barco son tuyos',
		lead: 'Luffly no tiene cuentas ni servidores propios. Tus barcos, intervenciones y fotos se guardan en tu iPhone y en tu iCloud privado, al que solo accedes tú.',
		points: ['Sin registro, sin anuncios, sin analítica', 'Los avisos se programan en tu iPhone', 'Funciona sin conexión, también sin cobertura en el mar'],
		link: 'Lee la política de privacidad',
	},
	pro: {
		title: 'Luffly Pro',
		lead: 'El plan gratuito te enseña todo el barco y mantiene los avisos de los 15 elementos más importantes. Pro controla todos los elementos y añade los costes y los papeles.',
		free: 'Gratis',
		freeItems: [
			'La temporada y los siete sistemas',
			'Avisos de 15 elementos, más la ITB y el seguro',
			'Todo el historial, las listas y la sincronización con iCloud',
			'1 barco y 1 foto por intervención',
		],
		items: [
			'Avisos para todo el barco',
			'Inventario de velas y edad de la jarcia',
			'Costes por sistema, previsión de los próximos 12 meses y coste del motor por hora',
			'Papeles a bordo y todas las caducidades',
			'Normativa y equipo de seguridad por zona, y navegar al extranjero',
			'Recambios a bordo y lista de trabajos para el varadero',
			'PDF para la venta y exportación CSV',
			'Barcos y fotos sin límite',
		],
		yearly: 'Anual',
		lifetime: 'De por vida',
		perYear: '/ año',
		once: 'pago único',
		trial: (d) => `${d} días de prueba gratis`,
		launch: (regular) => `Precio de lanzamiento, después ${regular}`,
		fine: 'Precios en euros; el App Store muestra el precio de tu país. La prueba gratis es para nuevos suscriptores. El plan anual se renueva automáticamente salvo que lo canceles al menos 24 horas antes de que acabe el periodo, y se gestiona en los ajustes de tu cuenta de Apple.',
	},
	footer: { made: 'Hecho por', contact: 'Contacto' },
	legal: { updated: 'Última actualización', privacyTitle: 'Política de privacidad', termsTitle: 'Condiciones de uso', supportTitle: 'Ayuda' },
	notFound: { title: 'Página no encontrada', body: 'Esta página no existe o ha cambiado de sitio.', home: 'Volver a Luffly' },
	language: 'Idioma',
};

export default strings;
