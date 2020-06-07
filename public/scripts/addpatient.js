var URL = location.protocol + '//' + location.host;

$(document).ready(function() {
    var diseasesAPI = URL + "/app/getdiseases";
    $.getJSON(diseasesAPI).done(function(allDiseases) {
         var diseasesScoresCheckboxes = [];

         for(var disease in allDiseases) {
             var diseaseScoreCheckbox = [];
             diseaseScoreCheckbox[0] = disease;
             diseaseScoreCheckbox[1] = allDiseases[disease]; // This is the score.

             var input = "<input type=\"checkbox\" name=\"PD[]\" value=\"" + disease + "\">";
             diseaseScoreCheckbox[2] = input;

             diseasesScoresCheckboxes.push(diseaseScoreCheckbox)
         }

         $('#add-new-patient').dataTable({
               data: diseasesScoresCheckboxes,
               columns:
               [
                   {
                       title: "Enfermedad"
                   },
                   {
                       title: "Riesgo"
                   },
                   {
                       title: "Diagnóstico"
                   },
               ],
               scrollY: '40vh',
               scrollCollapse: true,
               paging: false,
               info: false,
               language: {
                 sSearch: "Buscar x Enfermedad"
               }
          });
     });
});
