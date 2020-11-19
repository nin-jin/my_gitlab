namespace $.$$ {

	export class $my_gitlab extends $.$my_gitlab {

		search( next?: string ) {
			return this.$.$mol_state_arg.value( 'search', next ) ?? ''
		}

		search_start( event: Event ) {
			this.Search().Suggest().Filter().focused( true )
			event.preventDefault()
		}

		@ $mol_mem
		files() {

			const uri = `web.js`
			const lines = this.$.$mol_fetch.text( uri ).split('\n')
			
			return $mol_array_chunks( lines, ()=> Math.random() > .99 )
		}

		@ $mol_mem
		file_views() {
			return this.files().map( (_,i) => this.File_view( i ) )
		}

		file_text( id: number ) {
			return this.files()[ id ]
		}

	}

}
