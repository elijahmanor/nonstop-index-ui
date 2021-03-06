import lux from "lux.js";
import { reduce, get as _get, set as _set } from "lodash";

export default new lux.Store( {
	namespace: "project",
	state: {
		packages: {},
		projects: {}
	},
	handlers: {
		loadProjectsSuccess( { packages } ) {
			this.setState( this.reduceProjects( packages ) );
		}
	},
	reduceProjects( packages ) {
		return packages.reduce( ( memo, item ) => {
			const versionPath = [ "projects", item.project, "owners", item.owner, "branches", item.branch ];
			let versions = _get( memo, versionPath, [] );

			versions.push( item.file );
			_set( memo, versionPath, versions );
			memo.packages[item.file] = item;

			return memo;
		}, {
			projects: {},
			packages: {}
		} );
	},
	getProjects() {
		let projects = this.getState().projects;

		return reduce( projects, ( memo, project, name ) => {
			const owner = Object.keys( project.owners )[ 0 ];
			const branch = Object.keys( project.owners[ owner ].branches )[ 0 ];
			memo.push( {
				name,
				owner,
				branch
			} );
			return memo;
		}, [] );
	}
} );
