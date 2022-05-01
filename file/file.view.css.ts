namespace $ {

	const { rem, px } = $mol_style_unit
	const { hsla } = $mol_style_func
	
	$mol_style_define( $my_gitlab_file , {

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
