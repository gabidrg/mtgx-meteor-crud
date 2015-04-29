// XML export is defined as a server side route
// The XML formatting is handled using xmlbuilder NPM package:
// https://github.com/oozcitak/xmlbuilder-js/wiki

Router.route('/export/xml', {
  where: 'server',
  action: function() {
    // Using xmlbuilder to create an xml representation of data
    if (Programs.find().count() > 0) {
      var builder = Meteor.npmRequire('xmlbuilder');
      var programsXml = builder.create('programs',
                                      {version: '1.0', encoding: 'UTF-8', standalone: true},
                                      {headless: false});

      cursor = Programs.find({}, {sort: {created: -1}});
      cursor.forEach(function (program) {
        programsXml.ele('program')
          .ele('date')
            .txt(!program.date ? "" : moment(program.date).format())
            .up()
          .ele('start_time')
            .txt(program.start_time)
            .up()
          .ele('leadtext')
            .txt(program.leadtext)
            .up()
          .ele('name')
            .txt(program.name)
            .up()
          .ele('b-line')
            .txt(program.bline)
            .up()
          .ele('synopsis')
            .txt(program.synopsis)
            .up()
          .ele('url')
            .txt(program.url)
            .up()
      });

      programsXml.end({pretty: true});
    }
    else {
      // Normally we should start with head data. Sample xml file did not included it.
      // var programsXml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
      var programsXml = "<Programs>";
      programsXml += "</Programs>";
    }

    this.response.writeHead(200, {'Content-Type': 'application/xml'});
    this.response.end(programsXml.toString());
  }
});
