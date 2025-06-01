let tableBuilder = (function () {

    let generateTable = function () {
        return $('<table>');
    }

    let generateTableHeader = function () {
        return $('<thead>');
    }

    let generateTableBody = function () {
        return $('<tbody>');
    }

    let generateTR = function () {
        return $('<tr>');
    }

    let generateTH = function () {
        return $('<th>');
    }

    let generateTD = function () {
        return $('<td>');
    }

    return {
        generateTable: generateTable,
        generateTableHeader: generateTableHeader,
        generateTableBody: generateTableBody,
        generateTR: generateTR,
        generateTH: generateTH,
        generateTD: generateTD
    }

})();
