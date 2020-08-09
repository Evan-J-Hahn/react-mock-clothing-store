const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
			id: 1,
			linkUrl: 'shop/hats',
		},
		{
			title: 'jackets',
			imageUrl:
				'https://64.media.tumblr.com/fa76179add33697150171b0473c450f0/tumblr_oy8xwzX1h61ww4jrko1_640.jpg',
			id: 2,
			linkUrl: 'shop/jackets',
		},
		{
			title: 'sneakers',
			imageUrl:
				'https://64.media.tumblr.com/94252990b36c6f9f9836b304e00c5aed/tumblr_p7astf7lLD1qb6v7qo1_1280.jpg',
			id: 3,
			linkUrl: 'shop/sneakers',
		},
		{
			title: 'womens',
			imageUrl:
				'https://64.media.tumblr.com/695be1161a036e840506c222e948c1d3/tumblr_pcw4bhQRSw1xadxbho3_500.png',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens',
		},
		{
			title: 'mens',
			imageUrl:
				'https://64.media.tumblr.com/4c0e3ee8a38be8b423eebaac08433290/7dfe16ca53e4766e-8e/s500x750/174399c39e7b618ca5a7a022ed1af6b93e78949e.jpg',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens',
		},
	],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state
	}
}

export default directoryReducer
