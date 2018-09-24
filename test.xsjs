$.response.contentType = "text/plain";
try {
    var connection = $.hdb.getConnection();
    var body;
    var dStmt = connection.executeQuery('select * from "INRCA7"."shell.app.local-ddc.INRCA7::comment"');
    for(var i = 1; i < dStmt.length; i++) {
        body = dStmt[i];
    }
     $.response.setBody(JSON.stringify(dStmt)); 
}
catch (err) {
	$.response.setBody(err.message);
}
