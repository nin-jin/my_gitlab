namespace $ {

	const { rem } = $mol_style_unit
	
	$mol_style_define( $my_gitlab , {

		$mol_scroll: {
			overflowAnchor: 'none',
		},
		
		'@': {
			'my_gitlab_anchoring': {
				true: {
					$mol_scroll: {
						overflowAnchor: 'auto'
					},
				},
			}
		},
		
		File_views: {
			padding: $mol_gap.block,
			display: 'flex',
		},

		Foot: {
			padding: $mol_gap.block,
			justifyContent: 'flex-end',
			flex: {
				wrap: 'wrap',
			},
		},

	} )

}
