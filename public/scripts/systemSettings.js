var URL = location.protocol + '//' + location.host;

$(document).ready(function() {
    var diseasesAPI = URL + "/app/getdiseases/";

    $.getJSON(diseasesAPI).done(function(allDiseases) {
           var diseasesScoresCheckboxes = [];

           for(var disease in allDiseases) {
             var diseaseScoreCheckbox = [];
        	   diseaseScoreCheckbox[0] = disease;
        	   diseaseScoreCheckbox[1] = allDiseases[disease]; // This is the score.
             diseaseScoreCheckbox[2] = "<input type=\"checkbox\" name=\"DD[]\" value=\"" + disease + "\">";

        	   diseasesScoresCheckboxes.push(diseaseScoreCheckbox)
           }

           $('#diseases-table').dataTable({
		      data: diseasesScoresCheckboxes,
		      columns:[{
	              title: "Enfermedad",
                  width: "50%"
	          },{
	              title: "Riesgo",
                  width: "20%"
	          },{
	              title: "Seleccionar",
                  width: "30%"
	          }],
		      scrollY: '40vh',
		      scrollCollapse: true,
		      paging: false,
                info: false,
                language: {
                  searchPlaceholder: "Buscar x Enfermedad...",
                  sSearch: ""
                },
		 });
    });
});


// fill the rooms table
$(document).ready(function() {
    var roomsAPI = URL + "/app/getrooms/";

    $.getJSON(roomsAPI).done(function(allRooms) {
           var roomsScoresCheckboxes = [];

           for(var room in allRooms) {
               if (room !== 'noroom') {
                    var roomScoreCheckbox = [];
                    roomScoreCheckbox[0] = room;
                    roomScoreCheckbox[1] = "<input type=\"checkbox\" name=\"RD[]\" value=\"" + room + "\">";

                    roomsScoresCheckboxes.push(roomScoreCheckbox);
               }
           }

           $('#rooms-table').dataTable({
		      data: roomsScoresCheckboxes,
		      columns:[{
	              title: "Servicio",
                  width: "60%"
                },{
	              title: "Seleccionar",
                  width: "40%"
	           }],
		      scrollY: '40vh',
		      scrollCollapse: true,
		      paging: false,
                info: false,
                language: {
                  searchPlaceholder: "Buscar x servicio...",
                  sSearch: ""
                },
		 });
    });
});
