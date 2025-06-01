let eventOrganizer = (function () {

    let eventMap = {}

    events.forEach(function (event) {

        let start = event.start;
        let end = event.end;

        if (start >= end) {
            return;
        }

        if (eventMap[event.day] === undefined) {
            eventMap[event.day] = {};
        }

        let eventDay = eventMap[event.day];
        for (let i = start; i < end; i++) {
            eventDay[i] = event.text;
        }

    });

    console.log(eventMap);

    return {
        eventMap: eventMap
    }

})();
