(function(){
    var modules={
        "panel-main":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child":    			{url:"$H/m/panel-child.html"},
        "panel-export-screening":   {url:"$H/m/panel-export-screening.html",router:1},
        "panel-export-baseline":    {url:"$H/m/panel-export-baseline.html",router:1},
        "panel-export-week2":    {url:"$H/m/panel-export-week2.html",router:1},
        "panel-export-week4":    {url:"$H/m/panel-export-week4.html",router:1},
        "panel-export-week6":    {url:"$H/m/panel-export-week6.html",router:1},
        "panel-export-week8":    {url:"$H/m/panel-export-week8.html",router:1},
        "panel-export-week10":    {url:"$H/m/panel-export-week10.html",router:1},
        "panel-export-exit":    {url:"$H/m/panel-export-exit.html",router:1},
        "export-data-canact": {url:"$H/m/export-data.html",Table:"canact-export",form_module:"export-form-canact"},
        "export-form-canact": {url:"$H/m/export-form.html",Table:"canact-export"},
        
        "participant-data":   		{url:"$H/m/survey-data.html",Table:"canact-survey",form_module:"participant-form",router:1,
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-canact",
                                            online_questionnaire:"online-questionnaire-app-canact"
                                        },                                    
        "participant-form":   		{url:"$H/m/survey-form.html",Table:"canact-survey"},

        "survey-data": {url:"$H/m/survey-data.html",Table:"canact-survey",form_module:"survey-form",report:"$H/oq.html"},
        "survey-form": {url:"$H/m/survey-form.html",Table:"canact-survey",report:"$H/oq.html",router:1},
        "not_elig": {url:"$H/m/not_elig.html"},
        "report-form": {url:"$H/m/report-form.html",Table:"canact-report",task_name:"Report Details"},
        "report-form-edit": {url:"$H/m/report-form-edit.html",Table:"canact-report",task_name:"Report Details"},
        "report-canact":{url:"$H/oq.html"},
        "report":       {url:"$H/m/oq-panel-report.html"},
        "cannabis-ii-data": {url:"$H/m/cannabis-ii-data.html",Table:"canact-cannabis-ii",form_module:"cannabis-ii-form",task_name:"II. PREVIOUS AND CURRENT CANNABIS USE",router:1},
        "cannabis-iii-data": {url:"$H/m/cannabis-iii-data.html",Table:"canact-cannabis-iii",form_module:"cannabis-iii-form",task_name:"III. CANNABIS CULTIVATION",router:1},
        "cannabis-iv-data": {url:"$H/m/cannabis-iv-data.html",Table:"canact-cannabis-iv",form_module:"cannabis-iv-form",task_name:"IV. ACCESS TO MEDICINAL CANNABIS",router:1},
        "cannabis-v-data": {url:"$H/m/cannabis-v-data.html",Table:"canact-cannabis-v",form_module:"cannabis-v-form",task_name:"V. PRESCRIBED MEDICINAL CANNABIS  ",router:1},
        "cannabis-vi-data": {url:"$H/m/cannabis-vi-data.html",Table:"canact-cannabis-vi",form_module:"cannabis-vi-form",task_name:"VI. NON-PRESCRIBED MEDICINAL CANNABIS  ",router:1},
        "cannabis-vii-data": {url:"$H/m/cannabis-vii-data.html",Table:"canact-cannabis-vii",form_module:"cannabis-vii-form",task_name:"VII. RECREATIONAL CANNABIS  ",router:1},
        "cannabis-viii-data": {url:"$H/m/cannabis-viii-data.html",Table:"canact-cannabis-viii",form_module:"cannabis-viii-form",task_name:"VIII. UNEXPECTED ADVERSE EFFECTS  ",router:1},
        "cannabis-ix-data": {url:"$H/m/cannabis-ix-data.html",Table:"canact-cannabis-xi",form_module:"cannabis-ix-form",task_name:"XI. LEGISLATION ",router:1},
        "cannabis-ii-form": {url:"$H/m/cannabis-ii-form.html",Table:"canact-cannabis-ii",task_name:"II. PREVIOUS AND CURRENT CANNABIS USE"},
        "cannabis-iii-form": {url:"$H/m/cannabis-iii-form.html",Table:"canact-cannabis-iii",task_name:"III. CANNABIS CULTIVATION"},
        "cannabis-iv-form": {url:"$H/m/cannabis-iv-form.html",Table:"canact-cannabis-iv",task_name:"IV. ACCESS TO MEDICINAL CANNABIS"},
        "cannabis-v-form": {url:"$H/m/cannabis-v-form.html",Table:"canact-cannabis-v",task_name:"V. PRESCRIBED MEDICINAL CANNABIS  "},
        "cannabis-vi-form": {url:"$H/m/cannabis-vi-form.html",Table:"canact-cannabis-vi",task_name:"VI. NON-PRESCRIBED MEDICINAL CANNABIS  "},
        "cannabis-vii-form": {url:"$H/m/cannabis-vii-form.html",Table:"canact-cannabis-vii",task_name:"VII. RECREATIONAL CANNABIS  "},
        "cannabis-viii-form": {url:"$H/m/cannabis-viii-form.html",Table:"canact-cannabis-viii",task_name:"VIII. UNEXPECTED ADVERSE EFFECTS  "},
        "cannabis-ix-form": {url:"$H/m/cannabis-ix-form.html",Table:"canact-cannabis-xi",task_name:"XI. LEGISLATION "},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    }
})();
