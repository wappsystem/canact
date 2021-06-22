(function(){
    var modules={
        "survey-data": {url:"$H/m/survey-data.html",Table:"canact-survey",form_module:"survey-form",report:"$H/oq.html",router:1},
        "survey-form": {url:"$H/m/survey-form.html",Table:"canact-survey",report:"$H/oq.html",router:1},
        "not_elig": {url:"$H/m/not_elig.html"},
        "report-form": {url:"$H/m/report-form.html",Table:"canact-report",task_name:"Report Details"},
        "report-form-edit": {url:"$H/m/report-form-edit.html",Table:"canact-report",task_name:"Report Details"},
        "report-canact":{url:"$H/oq.html"},
        "report":       {url:"$H/m/oq-panel-report.html"},
        "cannabis-ii-form": {url:"$H/m/cannabis-ii-form.html",Table:"canact-cannabis-ii",task_name:"II. PREVIOUS AND CURRENT CANNABIS USE"},
        "cannabis-iii-form": {url:"$H/m/cannabis-iii-form.html",Table:"canact-cannabis-iii",task_name:"III. CANNABIS CULTIVATION"},
        "cannabis-iv-form": {url:"$H/m/cannabis-iv-form.html",Table:"canact-cannabis-iv",task_name:"IV. ACCESS TO MEDICINAL CANNABIS"},
        "cannabis-v-form": {url:"$H/m/cannabis-v-form.html",Table:"canact-cannabis-v",task_name:"V. PRESCRIBED MEDICINAL CANNABIS  "},
        "cannabis-vi-form": {url:"$H/m/cannabis-vi-form.html",Table:"canact-cannabis-vi",task_name:"VI. NON-PRESCRIBED MEDICINAL CANNABIS  "},
        "cannabis-vii-form": {url:"$H/m/cannabis-vii-form.html",Table:"canact-cannabis-vii",task_name:"VII. RECREATIONAL CANNABIS  "},
        "cannabis-viii-form": {url:"$H/m/cannabis-viii-form.html",Table:"canact-cannabis-viii",task_name:"VIII. HARMFUL EFFECTS  "},
        "cannabis-ix-form": {url:"$H/m/cannabis-ix-form.html",Table:"canact-cannabis-xi",task_name:"XI. LEGISLATION "},

    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}
})();
