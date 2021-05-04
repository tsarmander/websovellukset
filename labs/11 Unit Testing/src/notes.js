var notes = (function() {
    var list = [];

    return {
        add: function(note) {
            if (note) {
                if(typeof note === 'string' && note.trim()) {
                    var item = {timestamp: Date.now(), text: note};
                    list.push(item);
                    return true;
                }
                return false;
            }
            return false;
        },
        remove: function(index) {},
        count: function() {
            return list.length;
        },
        clear: function() {
            list.splice(0, list.length);
        },
        list: function() {},
        find: function(str) {}
    }
}());