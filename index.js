var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyBEcihy5bdbT37Y'}).base('appJnAa3LR49sNpsB');

base('[2] Workshop technique - Questions théoriques')
    .select({
        // Selecting the first 3 records in Grid view:
        // maxRecords: 3,
        view: "Grid view",
        fields: [
            'Competence',
            'Status',
            'Question',
            'Response'
        ],
        cellFormat: "json"
    })
    .eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        // console.log('Records', records);

        records.forEach(function(record) {
            console.log('Record', record.fields);
            console.log('QuestionS ', record.get('Question'));
            console.log('Responses ', record.get('Response'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
