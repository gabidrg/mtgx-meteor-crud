// Insert some dummy data for programs

if (Programs.find().count() === 0) {

    Programs.insert({
      date: "2009-04-16T17:33:00+00:00",
      start_time: "17:00",
      leadtext: "Fran är en något udda barnflicka. Hon kommer från den tuffa New York-stadsdelen Queens och är en kvinna med starka åsikter, ett ansikte som skulle platsa på Vogues omslag, samt en röst som kan spräcka glas!",
      name: "Program 1",
      bline: "Tysk thrillerserie",
      synopsis: "Maxwell ringer Fran och säger att han gjorde ett stort misstag för några månader sen. Fran blir alldeles till sig och hoppas att han ska förklara sin kärlek till henne. Istället handlar det bara om en skattedetalj. Fran flyttar ut och Sylvia tar över jobbet. Del 16:25",
      url: "http://www.domain.tld/programname"
    });

    Programs.insert({
      date: "2007-08-13T12:16:00+00:00",
      start_time: "21:00",
      leadtext: "Om familjerna Horton, Brady, Black, Kiriakis och deras vänner, grannar och rivaler i Salem, USA. Familjen Horton består bl a av Alice, sonen Mickey och barnbarnen Jennifer och Mike. Familjen Brady består bl aav Shawn och Caroline, som är familjens överhuvuden, samt Bo, Carrie, Samantha (Sami), Marlena, Roamn och John. Intriger, romanser och spänning präglar denna serier som startade i USA 1965 och har därmed varit under inspelning i 40 år.",
      name: "Program 2",
      bline: "Drama från 2003",
      synopsis: "Gänget berättar historier om hur de träffade varandra och reaktionen från Teds nya flickvän får nio av tio på knäpphetsskalan. Del 5:24",
      url: "http://www.domain.tld/programname"
    });

}
