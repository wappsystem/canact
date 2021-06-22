//-------------------------------------
var participant_name=function(record){ return record.UID;}
//-------------------------------------
//auto select particpant
var autocomplete_req_p={cmd:"find",table:$vm.module_list['survey-data'].Table,options:{},skip:0,limit:10}
var autocomplete_callback_p=function(items){ $("#F__ID input[name=Participant_uid]").val(items["UID"]);}
var autocomplete_list_p=function(records){
    var items=[];
    for(var i=0;i<records.length;i++){
        var obj={};
        if(records[i].Data.Screening_Number!= undefined ) obj.label=records[i].Data.Screening_Number;
        else obj.label=records[i].UID;
        obj['UID']=records[i].UID;
        items.push(obj);
    }
    return items;
}
var wait1=function(){
    $vm.autocomplete($('#Participant__ID'),autocomplete_req_p,autocomplete_list_p,autocomplete_callback_p);
}
var I=0; var loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed."); }
},100);
//-------------------------------------
//auto fill participant
var load=m.load;
m.load=function(){
    load();
    $('#title__ID').text($vm.module_list[$vm.vm['__ID'].name].task_name);
    if($vm.online_questionnaire==1) {
        $('#pdf__ID').hide();
        $('#participant_div__ID').hide();
    }
//--------------------------
    if(m.input!=undefined && m.input.participant_record!=undefined){
        //new from child panel
        $("#F__ID input[name=Participant]").val(participant_name(m.input.participant_record));
        $("#F__ID input[name=Participant_uid]").val(m.input.participant_record.UID);
    }
    else if(m.input!=undefined && m.input.record!=undefined){
        //modify
    }
    else{
        //new with no parent
    }
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
    if(m.load_2!=undefined) m.load_2();
}
//-------------------------------------
m.before_submit=function(data){
    if ($("#F__ID input[name=Participant]").val()=='' || $("#F__ID input[name=Participant_uid]").val()==''){
        $vm.alert("Please select a participant. Make sure Participant ID has a number.") 
        return false;    
    }
}
//-------------------------------------
