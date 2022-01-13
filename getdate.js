exports.getDate = function() {
    let Current = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
    let time = Current.toLocaleDateString('en-US', options);
    return time;
}