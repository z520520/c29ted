/**
 * Created by C on 2017/8/15.
 */
$(function () {
    //��ҳ�˵���̬��Ⱦ
    getIndexMenu();
    getDissale();
})
//��ҳ�˵���̬��Ⱦ
function getIndexMenu(){
    $.ajax({
        url: url + "api/getindexmenu",
        success: function (result) {
            //׼��ģ��
            //�����ݺ�ģ��
            var indexMenuHtml = template('indexMenuTpl',result);
            //html
            $('#menu .row').html(indexMenuHtml);
        }
    })
}
//��ҳ�ۿ�
function getDissale(){
    $.ajax({
        url:url+"api/getmoneyctrl",
        success:function(data){
            console.log(data);
            var html = template('indexDissaleTpl' , {data:data.result});
            console.log(html);
            $('#dissale .dissaleList').html(html);
        }
    })
}

