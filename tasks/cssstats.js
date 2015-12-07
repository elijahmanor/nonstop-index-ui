var gulp = require( "gulp" );
var fs = require( "fs" );
var cssstats = require( "cssstats" );
var specificityGraph = require( "specificity-graph" );
var fmt = require( "fmt" );
var babar = require('babar');

gulp.task( "cssstats", function() {
	var css = fs.readFileSync( "./public/css/app.css", "utf8" );
	var stats = cssstats( css );
	var declarations = stats.declarations;
	var selectors = stats.selectors;

	specificityGraph( "./client/specificity-graph", css, function( directory ) {
	  console.log( "specificity-graph files created in " + directory );
	});

	fmt.sep();
	fmt.title( "CSS Stats" );
	fmt.field( "Size", stats.size );
	fmt.field( "Rules", stats.rules.total );
	fmt.field( "Selectors", selectors.total );
	fmt.field( "Declarations", declarations.total );
	fmt.title( "Total Declarations" );
	fmt.field( "Color", declarations.properties[ "color" ].length );
	fmt.field( "Background Color", declarations.properties[ "background-color" ].length );
	fmt.field( "Font Families", declarations.properties[ "font-family" ].length );
	fmt.field( "Font Size", declarations.properties[ "font-size" ].length );
	fmt.title( "Unique Declarations" );
	fmt.field( "Color", declarations.getUniquePropertyCount( "color" ) );
	fmt.field( "Background Color", declarations.getUniquePropertyCount( "background-color" ) );
	fmt.field( "Font Families", declarations.getUniquePropertyCount( "font-family" ) );
	fmt.field( "Font Sizes", declarations.getUniquePropertyCount( "font-size" ) );
	fmt.title( "Specificity" );
	fmt.field( "Max", selectors.specificity.max );
	fmt.field( "Average", selectors.specificity.average );
	var specificity = selectors.getSpecificityGraph();
	specificity = specificity.map( function( value, index ) { return [ index, value ]; } );
	console.log( babar( specificity ) );
	fmt.sep();
});
