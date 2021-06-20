(function(){
    var modules={
        "survey-data": {url:"$H/m/survey-data.html",Table:"canact-survey",form_module:"survey-form",report:"$H/oq.html",router:1},
        "survey-form": {url:"$H/m/survey-form.html",Table:"canact-survey",report:"$H/oq.html",router:1},
        "not_elig": {url:"$H/m/not_elig.html"},
        "report-form": {url:"$H/m/report-form.html",Table:"canact-report",task_name:"Report Details"},
        "report-form-edit": {url:"$H/m/report-form-edit.html",Table:"canact-report",task_name:"Report Details"},
        "report-canact":{url:"$H/oq.html"},

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
