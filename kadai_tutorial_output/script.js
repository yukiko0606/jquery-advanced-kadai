$(function(){
    //マウスが重なった時
    $('.button-more').on('mouseover',function(){
        $(this).animate({
            //半透明
            opacity: 0.5,
            marginLeft: 20,
        },100);
    });

    //マウスが離れた時
    $('.button-more').on('mouseout', function(){
        $(this).animate({
            //不透明
            opacity: 1,
            marginLeft: 0,
        },100);
    });
    //カルーセルの表示
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false
    });

    //送信ボタンを押下した時
    $('#submit').on('click',function(evnt){
        //formタグによる送信を阻止
        evnt.preventDefault();

        let result = inputCheck();
        if(result.error){
            alert(result.message);
        }else{
            alert('お問い合わせを送信しました。');
        }
    });

    //イベントblur：フォーカスが外れた時
    $('#name').blur(function(){
        inputCheck();
    });
    $('#furigana').blur(function(){
        inputCheck();
    });
    $('#email').blur(function(){
        inputCheck();
    });
    $('#tel').blur(function(){
        inputCheck();
    });
    $('#message').blur(function(){
        inputCheck();
    });

    $('#agree').on('click',function(){
        inputCheck();
    });

    //入力チェック
    function inputCheck() {
        let result;
        //メッセージが格納
        let message = '';
        //エラー判定
        let err = false;
        
        //名前の入力チェック
        if($('#name').val() == ''){
            $('#name').css('background-color','#f79999');
            message += 'お名前を入力してください。\n';
            err = true;
        }else{
            //元に戻す
            $('#name').css('background-color','#fafafa');
        }
        //フリガナの入力チェック
        if($('#furigana').val() == ''){
            $('#furigana').css('background-color','#f79999');
            message += 'フリガナを入力してください。\n';
            err = true;
        }else{
            //元に戻す
            $('#furigana').css('background-color','#fafafa');
        }
        //お問い合わせ内容の入力チェック
        if($('#message').val() == ''){
            $('#message').css('background-color','#f79999');
            message += 'お問い合わせ内容を入力してください。\n';
            err = true;
        }else{
            //元に戻す
            $('#message').css('background-color','#fafafa');
        }
        //メールアドレスのチェック
        let emailVal = $('#email').val();
        if((emailVal.indexOf('@') == -1) || (emailVal.indexOf('.') == -1) || (emailVal == '')){
            $('#email').css('background-color','#f79999');
            message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
            err = true;
        }else{
            //元に戻す
            $('#email').css('background-color','#fafafa');
        }
        //電話番号のチェック
        let telVal = $('#tel').val();
        if(telVal != '' && telVal.indexOf('-') == -1){
            $('#tel').css('background-color','#f79999');
            message += '電話番号に「-」が含まれていません。\n';
            err = true;
        }else{
           //元に戻す
           $('#tel').css('background-color','#fafafa'); 
        }
        //チェックボックス
        if(!($('#agree').prop('checked'))){
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
            err = true;
        }

        //画像の切り替え　src属性の設定
        if(err){
            $('#submit').attr('src','images/button-submit.png');
        }else{
            $('#submit').attr('src','images/button-submit-blue.png');
        }
        //オブジェクトとして返す(複数の変数を戻り値としたい場合)
        result = {
            error: err,
            message: message
        }

        return result; 
    };

});
