namespace $ {

	const { rem, px } = $mol_style_unit
	const { hsla } = $mol_style_func
	
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
		
		border: {
			radius: rem(.25),
		},

		Label: {
			background: {
				color: hsla( 0, 0, 50, .2 )
			},
		},

	} )

}
