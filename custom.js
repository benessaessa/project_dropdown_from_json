var myJson = {
    "drugs": [
        {
            "name": " Cold ",
            "id": "usa",
            "states": [
                {
                    "name": " Cold with hyper ",
                    "id": "usaState1",
                    "drug": [
                        {"ndrug":"used hypertension two times a day"},
                        {"ndrug":"used hypertension two times a day"},
                        {"ndrug":"used hypertension two times a day"},
                        {"ndrug":"used hypertension two times a day"}
                    ]
                },
				 {
                    "name": "Cold without hyp ",
                    "id": "usaState2",
                    "drug": [
                        {"ndrug":"used no hypertension two times a day"},
                        {"ndrug":"used no hypertension two times a day"},
                        {"ndrug":"used no hypertension two times a day"},
                        {"ndrug":"used no hypertension two times a day"}
                    ]
                },
            ]
        },
        {
            "name": "Abdomen",
            "id": "aus",
            "states": [
                {
                    "name": "Diarrhea",
                    "id": "ausState1",
                    "drug": [
                        {"ndrug":"used diarrhea two times a day"},
                        {"ndrug":"used diarrhea two times a day"},
                        {"ndrug":"used diarrhea two times a day"},
                        {"ndrug":"used diarrhea two times a day"}
                    ]
                },
                {
                    "name": " Constipation ",
                    "id": "ausState2",
                    "drug": [
                        {"ndrug":"used consitipation two times a day"},
                        {"ndrug":"used consitipation two times a day"},
                        {"ndrug":"used consitipation two times a day"},
                        {"ndrug":"used consitipation two times a day"}
                    ]
                }
            ]
        }
    ]
};



$.each(myJson.drugs, function (index, value) {
	"use strict";
    var drug_id;
    var state_id;
        
        $("#Drug").append('<option rel="' + index + '" value="'+value.id+'">'+value.name+'</option>');
        
        $("#Drug").change(function () {
            $("#state, #drugs_list").find("option:gt(0)").remove();
            $("#state").find("option:first");
            
            drug_id = $(this).find('option:selected').attr('rel');
            console.log("Drugs INDEX : " + drug_id);
            
            $.each(myJson.drugs[drug_id].states, function (index1, value1) {
                $("#state").find("option:first");
                $("#state").append('<option rel="' + index1 + '" value="'+value1.id+'">'+value1.name+'</option>');
            });
            
        });
    
        
        $("#state").change(function () {
            $("#drugs_list").find("option:gt(0)").remove();
            $("#drugs_list").find("option:first").text("Loading...");
            
            state_id = $(this).find('option:selected').attr('rel');
            console.log("State INDEX : " + state_id);
                        
            $.each(myJson.drugs[drug_id].states[state_id].drug, function (index2, value2) {
                $("#drugs_list").find("option:first").text("");
                $("#drugs_list").append('<option rel="' + index2 + '" value="'+ value2.id+'">'+ value2.ndrug +'</option>');
            });

        });    
});
