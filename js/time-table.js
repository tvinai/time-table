(function () {

    let $container = $('#container');

    $container.empty();

    let $table = tableBuilder.generateTable();
    let $header = tableBuilder.generateTableHeader();
    let $tr = tableBuilder.generateTR();

    $table.addClass('bordered-table');

    $table.append($header);
    $header.append($tr);

    dayOfWeek.forEach(function (day) {
        let $th = tableBuilder.generateTH();
        $th.text(day);
        $tr.append($th);
    });

    let $body = tableBuilder.generateTableBody();
    $table.append($body);

    let eventMap = eventOrganizer.eventMap;

    for (let i = 0; i < 24; i++) {

        $tr = tableBuilder.generateTR();
        $body.append($tr);

        dayOfWeek.forEach(function (day) {

            let eventDay = eventMap[day];
            let event = '';
            if (eventDay !== undefined && eventDay[i] !== undefined) {
                event = eventDay[i];
            }

            let diplayText = `${i}:00`.padStart(5, '0');;
            if (day.length > 0) { 
                diplayText = event;
            }

            let $td = tableBuilder.generateTD();
            $td.text(diplayText);
            $tr.append($td);

            if (event.length > 0) {
                $td.addClass('booked');
            }
        });

    }

    $container.append($table);

})();
