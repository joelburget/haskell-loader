var spawnSync = require('spawn-sync');

module.exports = function(source) {
    this.cacheable && this.cacheable();

    // get javascript from haste
    var result = spawnSync('haste-streaming', [], {
        input: source
    });

    if (result.status !== 0) {
        this.emitError(result.stderr);
    } else {
        // If `onHotLoad` or `onHotUnload` is defined, swap in our definition.
        return result.stdout.toString().replace(
            /var (.*?) = require\(.*\)\['onHotLoad'\];/,
            "var $1 = function(f) { hotLoad = f; };"
        ).replace(
            /var (.*?) = require\(.*\)\['onHotUnload'\];/,
            "var $1 = function(f) { hotUnload = f; };"
        );
    }
};
