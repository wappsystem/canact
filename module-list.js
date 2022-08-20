(function(){
    var modules={
        "panel-main":    		{url:"$H/m/panel-main.html",router:1},
        "panel-child":    		{url:"$H/m/panel-child.html"},
        "panel-export":         {url:"$H/m/export/panel-export.html",router:1},
        "export-data":   {url:"$H/m/export/export-data.html",Table:"canact-export",form_module:"export-form"},
        "export-form":   {url:"$H/m/export/export-form.html",Table:"canact-export"},
        
        "participant-data":   	{url:"$H/m/survey-data.html",Table:"canact-survey",form_module:"participant-form",
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-canact",
                                            online_questionnaire:"online-questionnaire"},                                    
        "participant-form":   	{url:"$H/m/survey-form.html",Table:"canact-survey"},

        "survey-data": {url:"$H/m/survey-data.html",Table:"canact-survey",form_module:"survey-form",report:"$H/oq.html"},
        "survey-form": {url:"$H/m/survey-form.html",Table:"canact-survey",report:"$H/oq.html",router:1},
        "not_elig": {url:"$H/m/not_elig.html"},
        "report-form": {url:"$H/m/report-form.html",Table:"canact-report",task_name:"Report Details"},
        "report-form-edit": {url:"$H/m/report-form-edit.html",Table:"canact-report",task_name:"Report Details"},
        "report-canact":{url:"$H/oq.html"},
        "report":       {url:"$H/m/oq-panel.html"},
        "online-questionnaire":{url:"$H/m/oq-panel.html"},
        "cannabis-ii-data": {url:"$H/m/cannabis-ii-data.html",Table:"canact-cannabis-ii",form_module:"cannabis-ii-form",task_name:"II. PREVIOUS AND CURRENT CANNABIS USE"},
        "cannabis-iii-data": {url:"$H/m/cannabis-iii-data.html",Table:"canact-cannabis-iii",form_module:"cannabis-iii-form",task_name:"III. CANNABIS CULTIVATION"},
        "cannabis-iv-data": {url:"$H/m/cannabis-iv-data.html",Table:"canact-cannabis-iv",form_module:"cannabis-iv-form",task_name:"IV. ACCESS TO MEDICINAL CANNABIS"},
        "cannabis-v-data": {url:"$H/m/cannabis-v-data.html",Table:"canact-cannabis-v",form_module:"cannabis-v-form",task_name:"V. PRESCRIBED MEDICINAL CANNABIS"},
        "cannabis-vi-data": {url:"$H/m/cannabis-vi-data.html",Table:"canact-cannabis-vi",form_module:"cannabis-vi-form",task_name:"VI. NON-PRESCRIBED MEDICINAL CANNABIS"},
        "cannabis-vii-data": {url:"$H/m/cannabis-vii-data.html",Table:"canact-cannabis-vii",form_module:"cannabis-vii-form",task_name:"VII. RECREATIONAL CANNABIS"},
        "cannabis-viii-data": {url:"$H/m/cannabis-viii-data.html",Table:"canact-cannabis-viii",form_module:"cannabis-viii-form",task_name:"VIII. ADVERSE EFFECTS"},
        "cannabis-ix-data": {url:"$H/m/cannabis-ix-data.html",Table:"canact-cannabis-xi",form_module:"cannabis-ix-form",task_name:"IX. LEGISLATION"},
        "cannabis-ii-form": {url:"$H/m/cannabis-ii-form.html",Table:"canact-cannabis-ii",task_name:"II. PREVIOUS AND CURRENT CANNABIS USE"},
        "cannabis-iii-form": {url:"$H/m/cannabis-iii-form.html",Table:"canact-cannabis-iii",task_name:"III. CANNABIS CULTIVATION"},
        "cannabis-iv-form": {url:"$H/m/cannabis-iv-form.html",Table:"canact-cannabis-iv",task_name:"IV. ACCESS TO MEDICINAL CANNABIS"},
        "cannabis-v-form": {url:"$H/m/cannabis-v-form.html",Table:"canact-cannabis-v",task_name:"V. PRESCRIBED MEDICINAL CANNABIS  "},
        "cannabis-vi-form": {url:"$H/m/cannabis-vi-form.html",Table:"canact-cannabis-vi",task_name:"VI. NON-PRESCRIBED MEDICINAL CANNABIS  "},
        "cannabis-vii-form": {url:"$H/m/cannabis-vii-form.html",Table:"canact-cannabis-vii",task_name:"VII. RECREATIONAL CANNABIS  "},
        "cannabis-viii-form": {url:"$H/m/cannabis-viii-form.html",Table:"canact-cannabis-viii",task_name:"VIII. ADVERSE EFFECTS  "},
        "cannabis-ix-form": {url:"$H/m/cannabis-ix-form.html",Table:"canact-cannabis-xi",task_name:"IX. LEGISLATION "},
        "cannabis-lab-analysis-data": {url:"$H/m/cannabis-lab-analysis-data.html",Table:"canact-cannabis-lab",form_module:"cannabis-lab-analysis-form",task_name:"Analysis of your cannabis"},
        "cannabis-lab-analysis-form": {url:"$H/m/cannabis-lab-analysis-form.html",Table:"canact-cannabis-lab",task_name:"Analysis of your cannabis"},
        "cannabis-lab-form": {url:"$H/m/cannabis-lab-form.html",Table:"canact-cannabis-lab",task_name:"Free analysis of your cannabis"},
        "cannabis-thank-you-form": {url:"$H/m/cannabis-thank-you-form.html",Table:"canact-cannabis-thank-you",task_name:"What are the new cannabis laws in the ACT?"},
        "cannabis-prelab-i-analysis-data": {url:"$H/m/cannabis-prelab-i-analysis-data.html",Table:"canact-cannabis-prelab",form_module:"cannabis-prelab-i-analysis-form",task_name:"Analysis info and Consent"},
        "cannabis-prelab-i-analysis-form": {url:"$H/m/cannabis-prelab-i-analysis-form.html",Table:"canact-cannabis-prelab",task_name:"CANNABIS SAMPLE ANALYSIS"},

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
