namespace $.$$ {

	export class $my_gitlab extends $.$my_gitlab {

		@ $mol_memo.field
		get $() {

			const $ = super.$
			return super.$.$mol_ambient({

				$mol_support_css_overflow_anchor: ()=> {
					return this.lazy() ? false : $.$mol_support_css_overflow_anchor()
				}

			})
			
		}

		lazy( next?: boolean ) {
			const arg = next === undefined ? undefined : next ? 'true' : 'false'
			return this.$.$mol_state_arg.value( 'lazy', arg ) === 'true'
		}

		lazy_string( next?: string ) {
			return this.$.$mol_state_arg.value( 'lazy', next ) ?? 'false'
		}

		anchoring( next?: boolean ) {
			const arg = next === undefined ? undefined : String( next ) 
			return this.$.$mol_state_arg.value( 'anchoring', arg ) !== 'false'
		}

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

		@ $mol_mem_key
		file_expanded( id: string, next?: boolean ) {
			return next ?? ( this.$.$mol_state_arg.value( 'collapse' ) !== '' )
		}

	}

}
