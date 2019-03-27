export const rhymeTabs = {
	a: [
		{
			pattern: 'an',
			sound: 'en',
			rule: 'isNotVoAfter'
		},
		{
			pattern: 'ai',
			sound: 'ai',
			rule: false
		},
		{
			pattern: 'am',
			sound: 'en',
			rule: false
		},
		{
			pattern: 'ain',
			sound: 'in',
			rule: false
		},
		{
			pattern: 'au',
			sound: 'o',
			rule: false
		},
		{
			pattern: 'a',
			sound: 'a',
			rule: false
		}
	],
	e: [
		{
			pattern: 'eau',
			sound: 'o',
			rule: false
		},

		{
			pattern: 'eu',
			sound: 'eu',
			rule: false
		},

		{
			pattern: 'en',
			sound: 'en',
			rule: false
		},

		{
			pattern: 'ei',
			sound: 'è',
			rule: false
		},

		{
			pattern: 'em',
			sound: 'en',
			rule: 'isFollowedby:b,p,t'
		},

		{
			pattern: 'er',
			sound: 'ai',
			rule: false
		},

		{
			pattern: 'ez',
			sound: 'ai',
			rule: false
		},

		{
			pattern: 'es',
			sound: 'ai',
			rule: false
		},

		{
			pattern: 'et',
			sound: 'ai',
			rule: false
		},

		{
			pattern: 'ein',
			sound: 'in',
			rule: false
		},

		{
			pattern: 'est',
			sound: 'ai',
			rule: false
		},
		{
			pattern: 'e',
			sound: 'eu',
			rule: 'isLast'
		}
	],
	i: [
		{
			pattern: 'in',
			sound: 'in',
			rule: false
		},
		{
			pattern: 'im',
			sound: 'in',
			rule: false
		},
		{
			pattern: 'ien',
			sound: 'in',
			rule: false
		}
	],
	o: [
		{
			pattern: 'ou',
			sound: 'ou',
			rule: false
		},
		{
			pattern: 'oi',
			sound: 'oua',
			rule: false
		},
		{
			pattern: 'on',
			sound: 'on',
			rule: false
		},
		{
			pattern: 'oin',
			sound: 'oin',
			rule: false
		}
	],
	u: [
		{
			pattern: 'ui',
			sound: 'ui',
			rule: false
		},
		{
			pattern: 'uoi',
			sound: 'oua',
			rule: false
		},
		{
			pattern: 'ue',
			sound: 'eu',
			rule: 'isLast'
		},
		{
			pattern: 'uo',
			sound: 'o',
			rule: false
		}
	],
	y: []
};
