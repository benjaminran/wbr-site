/* Webhook Listener
*
*  Requires that NodeJS package Gith be installed (with npm use `npm install gith`)
*/

console.log("foo");
// Listen on port 9001
var gith = require('gith').create( 9001 );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

gith({
    repo: 'fideloper/example'
}).on( 'all', function( payload ) {
    console.log("bar");
    if( payload.branch === 'staging' )
    {
        // Exec a shell script
        execFile('/path/to/hook.sh', function(error, stdout, stderr) {
            // Log success in some manner
            console.log( 'exec complete' );
        });
    }
});
