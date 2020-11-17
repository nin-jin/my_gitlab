namespace $ {

	const { rem, px } = $mol_style_unit
	
	$mol_style_define( $my_gitlab_file , {

		box: {
			shadow: [{
				x: 0,
				y: 0,
				blur: 0,
				spread: px(1),
				color: $mol_theme.line,
			}],
		},

		margin: $mol_gap.block,
		
	} )

}
