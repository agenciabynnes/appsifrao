// Initialize your app
var myApp = new Framework7({
    // Default title for modals
    modalTitle: 'Sifrão',
    tapHold: true,
    tapHoldPreventClicks: true,
     // Enable Material theme
    material: true,
    swipePanel: 'left',
    swipePanelNoFollow: 'true',
    swipePanelActiveArea: '80',
    swipeBackPage: false,
    fastClick: true,
    notificationCloseOnClick: true,
    notificationHold: 7000,
    preloadPreviousPage: true,
    imagesLazyLoadThreshold: 100,

}); 
//var mySwiper = new Swiper('.swiper-container');
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        direction: 'horizontal',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        setWrapperSize: true
    });
    //mySwiper.update(true);
//window.screen.lockOrientation('portrait');
//intel.xdk.device.setRotateOrientation("portrait");

///////////////////////// iniciar dom /////////////////////////
var $$ = Dom7;
var $server = 'http://sifrao.bynn.es/';

ofertasHome();
if (localStorage.getItem("email")) {
    $$(".profile_nome").html(localStorage.getItem("name"));
    $$(".profile_detalhes").html(localStorage.getItem("email"));
    if (localStorage.getItem("picture")) {
        $$(".profile_foto img").attr("src",localStorage.getItem("picture"));
    }
    if (localStorage.getItem("cover")) {
        $$(".profile").append("<img src='"+localStorage.getItem('cover')+"' class='imgCover'>");
    }
}

myApp.onPageReinit('home', function (page) {
        $$(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $$(".profile").addClass("bg-brown");
        $$("body").removeClass("theme-brown theme-red theme-green theme-purple theme-indigo theme-amber theme-orange");
        $$("body").addClass("theme-brown");
        //ofertasHome();
    if (localStorage.getItem("email")) {
        $$(".profile_nome").html(localStorage.getItem("name"));
        $$(".profile_detalhes").html(localStorage.getItem("email"));
        if (localStorage.getItem("picture")) {
            $$(".profile_foto img").attr("src",localStorage.getItem("picture"));
        }
        if (localStorage.getItem("cover")) {
            $$(".profile").append("<img src='"+localStorage.getItem('cover')+"' class='imgCover'>");
        }
    }
});

//logado();

/*var device = Framework7.prototype.device;
if (device.android) {
console.log('this is android');

StatusBar.backgroundColorByHexString("#303E8C");
//StatusBar.overlaysWebView(true);
}*/

/*if ($("html").hasClass("android")) {
    StatusBar.backgroundColorByHexString("#303E8C");
}*/

document.addEventListener("backbutton", voltar, false);


function voltar(){
    
    if ($('.modal.modal-in').length > 0 || $('.actions-modal.modal-in').length > 0 || $('.popup.modal-in').length > 0) { 
        myApp.closeModal('.popup.modal-in');
        myApp.closeModal('.modal.modal-in');
        myApp.closeModal('.actions-modal.modal-in');
    } else {
        mainView.router.back();
    }
}

document.addEventListener("offline", onOffline, false);

function onOffline() {
    /*myApp.addNotification({
        title: "Conexão falhou!",
        //subtitle: e.payload.subtitle,
        message: 'Você precisa de conexão com a internet para acessar o Aptohome',
        media: '<img src='+e.payload.media+'>',
    });*/
    myApp.alert('Você precisa de conexão com a internet');
}
function onOnline() {
    //myApp.popup(".popup-off");
}

document.addEventListener("online", onOnline, false);


///////////////////////// tab enter ///////////////////////////////
function tabenter(event,campo){
    var tecla = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    //alert("entrei"+tecla+" - "+campo);
    if (tecla==13) {
        //alert("entrei"+tecla+" - "+campo);
        event.preventDefault();
        campo.focus();
        return false;
    }
}

///////////////////////// auto focus ///////////////////////////////
  if (myApp.device.android) {
    var getPos = function (obj) {
      var left, top;
      left = top = 0;
      if (obj.offsetParent) {
          do {
              left += obj.offsetLeft;
              top  += obj.offsetTop;
          } while (obj = obj.offsetParent);
      }
      return {
          x : left,
          y : top
      };
    };

        window.addEventListener('native.keyboardshow', function (e){
        window.keyboardHeight = e.keyboardHeight;
        var y = getPos(document.activeElement).y;
        $$($$(document.activeElement).parents('.page-content')).scrollTop(y-e.keyboardHeight/2);
    });
  }

///////////////////////// abrir panel left /////////////////////////
$$('.open-left-panel').on('click', function (e) {
    // 'left' position to open Left panel
    myApp.openPanel('left');
});

///////////////////////// abrir panel right /////////////////////////
$$('.open-right-panel').on('click', function (e) {
    // 'right' position to open Right panel
    myApp.openPanel('right');
});

// fechar panel
$$('.panel-close').on('click', function (e) {
    myApp.closePanel();
});

//abrir panel
$$('.open-panel').on('click', function (e) {
    // 'left' position to open Left panel
    myApp.openPanel('left');
});

document.addEventListener('deviceready', logadoInitApp, false);

document.addEventListener('app.Ready', logadoInitApp, false);
///////////////////////// Add view /////////////////////////
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true,
    domCache: true //enable inline pages
});

///////////////////////// abrir ligacao /////////////////////////
function openURL(alvo){
    //alert(alvo);
    window.open(alvo);
    //window.open(alvo, '_system', 'location=yes');
}

///////////////////////// abrir browser /////////////////////////
function openURLBrowser(alvo){
    //alert(alvo);
    //window.open(alvo);
    window.open(alvo, '_system', 'location=yes');
}


///////////////////// retirar caracteres em branco ////////////////////////////////
    function trimespaco(alvo) {

        while(alvo.indexOf(" ") != -1){
            alvo = alvo.replace(" ", "");
        }

        return alvo;
    }
////////////////////////// rotacao do aparelho /////////////////////////

function onportrait(){
    window.screen.lockOrientation('portrait');
    return;
}

function onlandscape(){
    window.screen.lockOrientation('landscape');
    return;
}


///////////////////////// help //////////////////////////

    //$$('.help').click(function () {
    function help(){
        //function () { mainView.router.load({pageName: 'popup-help'});
      var mySwiper = myApp.swiper('.swiper-container', {
        pagination:'.swiper-pagination',
        direction: 'horizontal',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        setWrapperSize: true
      });
        //var mainView = myApp.addView('.view-main');
        //mainView.router.load({pageName: 'popup-help'});
        myApp.popup(".popup-help");
        mySwiper.update(true);
    }
    //});

///////////////////////// login ///////////////////////////

$$('.button-login-email').on('click', function(){
    $$email = $$('#txtemail').val();
    $$senha = $$('#txtsenha').val();
    
    if ($$senha!="" && $$email!="") {
        myApp.showIndicator();
        $.ajax({
            url: $server+"Gerar_json.php?email="+$$email+"&senha="+$$senha+"&op=login&action=email",
            dataType: "json",
            success: function(data){
                myApp.hideIndicator();
                if (data) {
                    console.log(data);

                    localStorage.setItem("email", data.email);
                    localStorage.setItem("name", data.nome);
                    localStorage.setItem("userID", data.id);
                    if (data.id_facebook) {
                        localStorage.setItem("userIDFace", data.id_facebook);
                    }
                    atualizartoken();
                    myApp.hideIndicator();
                    window.location = "index.html";

                } else {
                    myApp.hideIndicator();
                    myApp.alert('E-mail e/ou senha inválidos!');
                }

            }
            ,error:function(data){
                //console.log(data);
                myApp.hideIndicator();
                myApp.alert('E-mail e/ou senha inválidos!');
            }
        });
    }else{
        myApp.alert("Opps! Favor preencher todos os campos.");
    }

});

///////////////////////// esqueceu a senha ///////////////////////////

$$('.button-esqueceu-senha').on('click', function(){
    $$email = $$('#txtemailesqueceu').val();
    if ($$email!="") {
        myApp.showIndicator();
        $.ajax({
             type: "GET",
             url: $server+"Gerar_json.php?email="+$$email+"&op=login&action=esqueceu",
             async: false,
             beforeSend: function(x) {
              if(x && x.overrideMimeType) {
               x.overrideMimeType("application/j-son;charset=UTF-8");
              }
              myApp.showIndicator();
        },
            dataType: "json",
            success: function(data){
                if (data) {
                    console.log(data);
                    myApp.hideIndicator();
                    myApp.alert('Enviamos um e-mail com as instruções de recuperação de senha');
                } else {
                    myApp.hideIndicator();
                    myApp.alert('E-mail não cadastrado!');
                }

            }
            ,error:function(data){
                console.log(data);
                myApp.hideIndicator();
            }
        });
    }else{
        myApp.alert("Opps! Favor preencher todos os campos.");
    }
});

/////////////////////////// cadatsro email ///////////////////////////

$$('.button-login-cadastro').on('click', function(){

    $$nome = $$('#txtcadastronome').val();
    $$email = $$('#txtcadastroemail').val();
    $$senha = $$('#txtcadastrosenha').val();
    $$resenha = $$('#txtcadastroresenha').val();
    if ($$nome!="" && $$email!="" && $$senha!="" && $$resenha!="") {
        if ($$senha!=$$resenha) {
            myApp.alert("Opss. As senhas que você digitou não coincidem.");
        } else{
            $.ajax({
                 type: "GET",
                 url: $server+"Gerar_json.php?email="+$$email+"&op=login&action=getFace",
                 async: false,
                 beforeSend: function(x) {
                  if(x && x.overrideMimeType) {
                   x.overrideMimeType("application/j-son;charset=UTF-8");
                  }
                  myApp.showIndicator();
            },
                dataType: "json",
                success: function(data){
                    if (!data) {

                        var data = new Date();
                        var str_data = data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate();

                        $.ajax({
                            url: $server+"Gerar_json.php?op=cadastro&data_cadastro="+str_data+"&senha="+$$senha+"&nome="+$$nome+"&email="+$$email,
                            dataType : "json",
                            success: function(data) {
                                if (data) {

                                    localStorage.setItem("email", data.email);
                                    localStorage.setItem("name", data.nome);
                                    localStorage.setItem("userID", data.id);
                                    if (data.id_facebook) {
                                        localStorage.setItem("userIDFace", data.id_facebook);
                                    }
                                    atualizartoken();
                                    myApp.hideIndicator();
                                    console.log(data);
                                    window.location = "index.html";
                                }
                            }
                        });
                    } else {
                        myApp.hideIndicator();
                        myApp.alert("Opss! Email já cadastrado.");
                    }
                },error:function(data){
                    //console.log(data);
                    myApp.hideIndicator();
                    myApp.alert("Opss! Email já cadastrado.");
                }
            });
        }
    }else{
        myApp.alert("Opss! Favor preencher todos os campos.");
    }
});

/////////////////////////// atualizar token ///////////////////////////

function atualizartoken(){
    console.log("atualizartoken");
    $.ajax({
        url: $server+"Gerar_json.php?op=cliente&action=edit&id="+localStorage.getItem("userID")+"&token="+localStorage.getItem("userToken"),
        dataType : "json",
        success: function(data) {
            if (data) {
                console.log("Token gravado: "+data);
            }
        }
    });
}

///////////////////////////// sair ////////////////////////////

function sair() {
    myApp.confirm('Deseja realmente sair?', function () {

        localStorage.clear();

        $$(".profile_foto img").remove("img");
        $$(".profile_nome").html("Visitante");
        $$(".profile_detalhes").html("seu@email.com.br");
        $(".profile_foto").html('<img src="images/sem_avatar_icone.jpg"></div>');

        facebookConnectPlugin.getLoginStatus(function(success){
            if(success.status === 'connected'){
                facebookConnectPlugin.logout(function (success){
                    console.log(success);
                });
            }
        });
        navigator.app.exitApp();
        //window.location = "index.html";
    });
}

///////////////////////////// logado ////////////////////////////

function logado() {
    //logado //
    
    if (localStorage.getItem("moradorIdmorador") && localStorage.getItem("sindicoIdsindico")) {

        profileSindico();     
        myApp.closeModal(".login-screen");
        //popupBanner();
        console.log("morador/sindico");

    } else if (localStorage.getItem("sindicoEmail")) {

        profileSindico();        
        myApp.closeModal(".login-screen"); 
        //popupBanner();   
        console.log("sindico");    

    } else if (localStorage.getItem("moradorEmail")) {

        profile();        
        myApp.closeModal(".login-screen");
        //popupBanner();
        console.log("morador");

    } else if (localStorage.getItem("administradoraEmail")) {

        profileAdministradora();        
        myApp.closeModal(".login-screen");
        //popupBanner();
        console.log("administradora");

    } else if (localStorage.getItem("portariaEmail")) {

        profilePortaria();        
        myApp.closeModal(".login-screen");
        //popupBanner();
        console.log("portaria");

    }

    else {
        myApp.loginScreen();
    }
}

//////////////////////////// profile /////////////////////////////

function profile(){
//console.log("profile");
    // profile
    var profile_image = "<img src="+localStorage.getItem("profileImage")+">";
    $('.profile_foto').html(profile_image);
    $('.profile_nome').html(localStorage.getItem("moradorNome"));

    if(localStorage.getItem("blocoNum")){
        var bloco_num = "Bloco: " + localStorage.getItem("blocoNum") + " | ";
    }
    var profile_detalhes = "Condomínio: " + localStorage.getItem("condominioNome") + " <br>"+ bloco_num + "Apto: " + localStorage.getItem("domicilioNum");

    $('.profile_detalhes').html(profile_detalhes);
        
        //popupBanner();
        //mainView.router.loadPage("bannercont");
        //myApp.alert('Morador editado om sucesso!', 'Aptohome', function () { mainView.router.load({pageName: 'bannercont'});popupBanner();});
}
myApp.onPageReinit('home', function (page) {

});
// Pull to refresh content
var ptrContent = $$('.ofertasHome');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {

        ofertasHome();
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
});


//////////////////////////////////// cidades /////////////////////
function cidades(){ 
    myApp.showIndicator();

        $.ajax({
            url: $server+"Gerar_json.php?op=cidades",
            dataType : "json",
            success: function(data) {
                //console.log(data);
                var qtd = data.cidades.length;
                var dataCidades = "";
                var selectCidade = "";
                if (data!=null) {
                    for (var i = 0; i < qtd; i++) {
                        if (localStorage.getItem("idCidade")==data.cidades[i].id) {
                            selectCidade = " bg-gray color-white";
                        }
                        dataCidades += '<li class="item-content'+selectCidade+'">'+
                                            '<a href="#" class="item-link link-cidades">'+
                                                '<div class="item-inner">'+
                                                    '<div class="item-title" onClick="alteraCidade('+data.cidades[i].id+')">'+data.cidades[i].descricao+'/'+data.cidades[i].uf+'</div>'+
                                                '</div>'+
                                            '</a>'+
                                        '</li>';
                        selectCidade = "";
                    }
                    $('#cidades-cont').html(dataCidades);
                    myApp.hideIndicator();
                }else{
                    myApp.hideIndicator();
                    $('#cidades-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                }
            }
        });
}
//////////////////////////////////// ofertasHome /////////////////////

function ofertasHome(){ 

    myApp.showIndicator();
    $('#ofertasHome-cont').html("");
    $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-indigo bg-amber bg-orange");
    $(".profile").addClass("bg-brown");
    $("body").removeClass("theme-brown theme-red theme-green theme-purple theme-indigo theme-amber theme-orange");
    $("body").addClass("theme-brown");
    if (!localStorage.getItem("idCidade")) {
        localStorage.setItem("idCidade","1");
    }

        $.ajax({
            url: $server+"Gerar_json.php?idCidade="+localStorage.getItem("idCidade")+"&op=oferta",
            dataType : "json",
            success: function(data) {
                //console.log(data);
                if (data!=null) {
                    var qtd = data.oferta.length;
                    var imgOferta = "";
                    var dataOferta = "";
                    var opcoes = false;
                    var bgTheme;
                    var bgThemeLight;
                    var colorTheme;
                    var bgThemeTrans;
                    var idCategoria;

                    for (var i = 0; i < qtd; i++) {
                        if (data.oferta[i].Opcoes) {
                            opcoes = true;
                        }
                        idCategoria = data.oferta[i].IdCategoria;

                        if (idCategoria=="11") {
                            bgTheme = "bg-red";
                            colorTheme = "color-red";
                            bgThemeLight = "bg-deeporange";
                            bgThemeTrans = "bg-red-light"
                        }
                        if (idCategoria=="20") {
                            bgTheme = "bg-green";
                            bgThemeLight = "bg-lightgreen";
                            colorTheme = "color-green";
                            bgThemeTrans = "bg-green-light"
                        }
                        if (idCategoria=="2") {
                            bgTheme = "bg-purple";
                            bgThemeLight = "bg-pink";
                            colorTheme = "color-purple";
                            bgThemeTrans = "bg-purple-light"
                        }
                        if (idCategoria=="3") {
                            bgTheme = "bg-indigo";
                            bgThemeLight = "bg-blue";
                            colorTheme = "color-indigo";
                            bgThemeTrans = "bg-indigo-light"
                        }
                        if (idCategoria=="10") {
                            bgTheme = "bg-amber";
                            bgThemeLight = "bg-yellow";
                            colorTheme = "color-amber";
                            bgThemeTrans = "bg-amber-light"
                        }  
                        if (idCategoria=="9") {
                            bgTheme = "bg-orange";
                            bgThemeLight = "bg-amber";
                            colorTheme = "color-orange";
                            bgThemeTrans = "bg-orange-light"
                        } 
                        var imgDestOferta = "";
                        if (data.oferta[i].Img) {
                            imgDestOferta = data.oferta[i].Img[0];
                        }
                        imgOferta = '<div class="card-content"><img data-src="'+imgDestOferta+'" class="lazy lazy-fadein" width="100%"><div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>';

                        dataOferta += '<li data-index="'+i+'" class="'+bgThemeTrans+'">'+
                                            '<a href="#ofertascont" onclick="ofertascont('+data.oferta[i].Id+','+idCategoria+','+opcoes+',\'home\');" class="item-link">'+
                                                '<div class="card-cont ks-facebook-card">'+
                                                    imgOferta+
                                                    '<div class="card-content-inner">'+
                                                        '<div class="card-content-price">'+
                                                            '<div class="facebook-price-valor color-white '+bgTheme+'">R$ '+formatReal(getMoney(data.oferta[i].Valor))+'</div>'+
                                                            '<div class="facebook-price-valor-promo color-white '+bgThemeLight+'">R$ '+formatReal(getMoney(data.oferta[i].ValorPromo))+'</div>'+
                                                        '</div>'+
                                                        '<div class="card-content-info">'+
                                                            '<div class="facebook-date '+colorTheme+'">'+data.oferta[i].EmpresaNome+'</div>'+
                                                            '<div class="facebook-title">'+data.oferta[i].Titulo+'</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</a>'+
                                        '</li>';
                        imgOferta = "";
                    }

                    $('#ofertashome-cont').html(dataOferta);
                    myApp.initImagesLazyLoad(".page");

                myApp.hideIndicator();
                }else{
                    myApp.hideIndicator();
                    $('#ofertashome-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                }
            }
             ,error:function(data){
                myApp.hideIndicator();
                $('#ofertashome-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                //myApp.alert('Erro! Tente novamente.', 'Aptohome');
             }
        });
}


// Pull to refresh content
var ptrContent = $$('.ofertas');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {

        ofertas();
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
});

/////////////////////////////////////  ofertas ///////////////////////
function ofertas(idCategoria){

    if (idCategoria) {
        localStorage.setItem("idCategoria", idCategoria);
    } else {
        var idCategoria;
        idCategoria = localStorage.getItem("idCategoria");
    }

    var bgTheme;
    var bgThemeLight;
    var colorTheme;
    var bgThemeTrans;

    if (idCategoria=="11") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-red");
        $("body").removeClass();
        $("body").addClass("theme-red");
        bgTheme = "bg-red";
        colorTheme = "color-red";
        bgThemeLight = "bg-deeporange";
        bgThemeTrans = "bg-red-light";
        $$('.nameofertas').html("GASTRONOMIA");
    }
    if (idCategoria=="20") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-green");
        $("body").removeClass();
        $("body").addClass("theme-green");
        bgTheme = "bg-green";
        bgThemeLight = "bg-lightgreen";
        colorTheme = "color-green";
        bgThemeTrans = "bg-green-light";
        $$('.nameofertas').html("VIAGENS");
    }
    if (idCategoria=="2") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-purple");
        $("body").removeClass();
        $("body").addClass("theme-purple");
        bgTheme = "bg-purple";
        bgThemeLight = "bg-pink";
        colorTheme = "color-purple";
        bgThemeTrans = "bg-purple-light";
        $$('.nameofertas').html("ESTÉTICA");
    }
    if (idCategoria=="3") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-indigo");
        $("body").removeClass();
        $("body").addClass("theme-indigo");
        bgTheme = "bg-indigo";
        bgThemeLight = "bg-blue";
        colorTheme = "color-indigo";
        bgThemeTrans = "bg-indigo-light";
        $$('.nameofertas').html("EVENTOS");
    }
    if (idCategoria=="10") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-amber");
        $("body").removeClass();
        $("body").addClass("theme-amber");
        bgTheme = "bg-amber";
        bgThemeLight = "bg-yellow";
        colorTheme = "color-amber";
        bgThemeTrans = "bg-amber-light";
        $$('.nameofertas').html("PRODUTOS");
    }  
    if (idCategoria=="9") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-orange");
        $("body").removeClass();
        $("body").addClass("theme-orange");
        bgTheme = "bg-orange";
        bgThemeLight = "bg-amber";
        colorTheme = "color-orange";
        bgThemeTrans = "bg-orange-light";
        $$('.nameofertas').html("SERVIÇOS");
    }  

    myApp.showIndicator();
    $('#ofertas-cont').html("");

        $.ajax({
            url: $server+"Gerar_json.php?idCategoria="+localStorage.getItem("idCategoria")+"&idCidade="+localStorage.getItem("idCidade")+"&op=oferta",
            dataType : "json",
            success: function(data) {
                //console.log(data);
                if (data!=null) {
                    var qtd = data.oferta.length;
                    var imgOferta = "";
                    var dataOferta = "";
                    var opcoes = false;
                    for (var i = 0; i < qtd; i++) {
                        if (data.oferta[i].Opcoes) {
                            opcoes = true;
                        }
                        imgOferta = '<div class="card-content"><img data-src="'+data.oferta[i].Img[0]+'" class="lazy lazy-fadein" width="100%"><div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>';

                        dataOferta += '<li data-index="'+i+'" class="'+bgThemeTrans+'">'+
                                            '<a href="#ofertascont" onclick="ofertascont('+data.oferta[i].Id+','+idCategoria+','+opcoes+',\'filter\');" class="item-link">'+
                                                '<div class="card-cont ks-facebook-card">'+
                                                    imgOferta+
                                                    '<div class="card-content-inner">'+
                                                        '<div class="card-content-price">'+
                                                            '<div class="facebook-price-valor color-white '+bgTheme+'">R$ '+formatReal(getMoney(data.oferta[i].Valor))+'</div>'+
                                                            '<div class="facebook-price-valor-promo color-white '+bgThemeLight+'">R$ '+formatReal(getMoney(data.oferta[i].ValorPromo))+'</div>'+
                                                        '</div>'+
                                                        '<div class="card-content-info">'+
                                                            '<div class="facebook-date '+colorTheme+'">'+data.oferta[i].EmpresaNome+'</div>'+
                                                            '<div class="facebook-title">'+data.oferta[i].Titulo+'</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</a>'+
                                        '</li>';
                        imgOferta = "";
                    }

                    $('#ofertas-cont').html(dataOferta);
                    myApp.initImagesLazyLoad(".page");
                myApp.hideIndicator();
                }else{
                    myApp.hideIndicator();
                    $('#ofertas-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                }
            }
             ,error:function(data){
                myApp.hideIndicator();
                $('#ofertas-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                //myApp.alert('Erro! Tente novamente.', 'Aptohome');
             }
        });
}

// Pull to refresh content
var ptrContent = $$('.meuscupons');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {

        meusCupons();
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
});
/////////////////////////////////////  meus cupons ///////////////////////


$$('.scroll-submenu-meuscupons').on('scroll', function (e) {
    if($$('.scroll-submenu-meuscupons').scrollTop()>0){
        $$('.sub-menu-meuscupons').attr("id","sub-menu-meuscupons-fixed");
        $$('.scroll-submenu-meuscupons').css('padding-top', '100px');
    } else {
        $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
        $$('.scroll-submenu-meuscupons').removeAttr('style');
    }
});

$$('.tab-meuscupons-baixados').on('show', function () {
    var coords = $$('.scroll-submenu-meuscupons').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.baixados-meuscupons').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    $$('.scroll-submenu-meuscupons').scrollTop(0);

});
 
$$('.tab-meuscupons-usados').on('show', function () {
    var coords = $$('.scroll-submenu-meuscupons').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.usados-meuscupons').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    $$('.scroll-submenu-meuscupons').scrollTop(0);

});
 
$$('.tab-meuscupons-expirados').on('show', function () {
    var coords = $$('.scroll-submenu-meuscupons').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.expirados-meuscupons').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    $$('.scroll-submenu-meuscupons').scrollTop(0);

});

$$('.ofertasList').on('taphold', function () {
  myApp.alert($(this).attr("data-oferta"));
});

function meusCupons(){

    if (localStorage.getItem("userID")) {
        mainView.router.load({pageName: "meuscupons"});
        myApp.showTab('#tabmeuscupons1');
        myApp.showIndicator();
        $('#ofertas-cont').html("");

            //baixados
            $.ajax({
                url: $server+"Gerar_json.php?op=compra&ativo=1&idCliente="+localStorage.getItem("userID")+"&action=getCliente",
                dataType : "json",
                success: function(data) {
                    //console.log(data);

                    $$('.scroll-submenu-meuscupons').scrollTop(0);
                    $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
                    $$('.scroll-submenu-meuscupons').removeAttr('style');

                    if (data!=null) {
                        var qtd = data.oferta.length;
                        var imgOfertaBaixados = "";
                        var imgOfertaUsados = "";
                        var imgOfertaExpirados = "";
                        var dataOfertaBaixados = "";
                        var dataOfertaUsados = "";
                        var dataOfertaExpirados = "";
                        var opcoes = false;
                        for (var i = 0; i < qtd; i++) {
                            if (data.oferta[i].Opcoes) {
                                opcoes = true;
                            }

                            var bgTheme;
                            var bgThemeLight;
                            var colorTheme;
                            var bgThemeTrans;
                            var idCategoria = data.oferta[i].IdCategoria;

                            if (idCategoria=="11") {
                                bgTheme = "bg-red";
                                colorTheme = "color-red";
                                bgThemeLight = "bg-deeporange";
                                bgThemeTrans = "bg-red-light";
                            }
                            if (idCategoria=="20") {
                                bgTheme = "bg-green";
                                bgThemeLight = "bg-lightgreen";
                                colorTheme = "color-green";
                                bgThemeTrans = "bg-green-light";
                            }
                            if (idCategoria=="2") {
                                bgTheme = "bg-purple";
                                bgThemeLight = "bg-pink";
                                colorTheme = "color-purple";
                                bgThemeTrans = "bg-purple-light";
                            }
                            if (idCategoria=="3") {
                                bgTheme = "bg-indigo";
                                bgThemeLight = "bg-blue";
                                colorTheme = "color-indigo";
                                bgThemeTrans = "bg-indigo-light";
                            }
                            if (idCategoria=="10") {
                                bgTheme = "bg-amber";
                                bgThemeLight = "bg-yellow";
                                colorTheme = "color-amber";
                                bgThemeTrans = "bg-amber-light";
                            }  
                            if (idCategoria=="9") {
                                bgTheme = "bg-orange";
                                bgThemeLight = "bg-amber";
                                colorTheme = "color-orange";
                                bgThemeTrans = "bg-orange-light";
                            } 

                            imgOfertaBaixados = '<div class="card-content"><img src="'+data.oferta[i].Img[0]+'" width="100%"><div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>';

                            dataOfertaBaixados += '<li data-index="'+i+'" class="swipeout ofertasList '+bgThemeTrans+' swipeout-devcupom" data-oferta="'+data.oferta[i].Id+'">'+
                                                '<a href="#ofertascont" onclick="ofertascont('+data.oferta[i].Id+','+idCategoria+','+opcoes+',\'meuscupons\');" class="swipeout-content item-link">'+
                                                    '<div class="card-cont ks-facebook-card">'+
                                                        imgOfertaBaixados+
                                                        '<div class="card-content-inner">'+
                                                            '<div class="card-content-price">'+
                                                                '<div class="facebook-price-valor color-white '+bgTheme+'">R$ '+formatReal(getMoney(data.oferta[i].Valor))+'</div>'+
                                                                '<div class="facebook-price-valor-promo color-white '+bgThemeLight+'">R$ '+formatReal(getMoney(data.oferta[i].ValorPromo))+'</div>'+
                                                            '</div>'+
                                                            '<div class="card-content-info">'+
                                                                '<div class="facebook-date '+colorTheme+'">'+data.oferta[i].EmpresaNome+'</div>'+
                                                                '<div class="facebook-title">'+data.oferta[i].Titulo+'</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</a>'+
                                                '<div class="swipeout-actions-right">'+
                                                    '<a href="#" onclick="devCupom('+data.oferta[i].IdCupom+','+i+');" data-order="'+i+'" class="bg-red">Devolver</a>'+
                                                '</div>'+
                                            '</li>';
                            imgOferta = "";

                        }

                        $$('.scroll-submenu-meuscupons').scrollTop(0);
                        $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
                        $$('.scroll-submenu-meuscupons').removeAttr('style');

                        $('#meuscupons-baixados-cont').html(dataOfertaBaixados);
                        //$$('.nameofertasCupons').html("MEUS CUPONS");
                        myApp.initImagesLazyLoad(".page");
                    myApp.hideIndicator();
                    }else{
                        myApp.hideIndicator();
                        $('#meuscupons-baixados-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                    }
                }
                 ,error:function(data){
                    myApp.hideIndicator();
                    $('#meuscupons-baixados-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                    //myApp.alert('Erro! Tente novamente.', 'Aptohome');
                 }
            });

            //usados
            $.ajax({
                url: $server+"Gerar_json.php?op=compra&ativo=2&idCliente="+localStorage.getItem("userID")+"&action=getCliente",
                dataType : "json",
                success: function(data) {
                    //console.log(data);

                    $$('.scroll-submenu-meuscupons').scrollTop(0);
                    $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
                    $$('.scroll-submenu-meuscupons').removeAttr('style');

                    if (data!=null) {
                        var qtd = data.oferta.length;
                        var imgOfertaBaixados = "";
                        var imgOfertaUsados = "";
                        var imgOfertaExpirados = "";
                        var dataOfertaBaixados = "";
                        var dataOfertaUsados = "";
                        var dataOfertaExpirados = "";
                        var opcoes = false;
                        for (var i = 0; i < qtd; i++) {
                            if (data.oferta[i].Opcoes) {
                                opcoes = true;
                            }

                            var bgTheme;
                            var bgThemeLight;
                            var colorTheme;
                            var bgThemeTrans;
                            var idCategoria = data.oferta[i].IdCategoria;

                            if (idCategoria=="11") {
                                bgTheme = "bg-red";
                                colorTheme = "color-red";
                                bgThemeLight = "bg-deeporange";
                                bgThemeTrans = "bg-red-light";
                            }
                            if (idCategoria=="20") {
                                bgTheme = "bg-green";
                                bgThemeLight = "bg-lightgreen";
                                colorTheme = "color-green";
                                bgThemeTrans = "bg-green-light";
                            }
                            if (idCategoria=="2") {
                                bgTheme = "bg-purple";
                                bgThemeLight = "bg-pink";
                                colorTheme = "color-purple";
                                bgThemeTrans = "bg-purple-light";
                            }
                            if (idCategoria=="3") {
                                bgTheme = "bg-indigo";
                                bgThemeLight = "bg-blue";
                                colorTheme = "color-indigo";
                                bgThemeTrans = "bg-indigo-light";
                            }
                            if (idCategoria=="10") {
                                bgTheme = "bg-amber";
                                bgThemeLight = "bg-yellow";
                                colorTheme = "color-amber";
                                bgThemeTrans = "bg-amber-light";
                            }  
                            if (idCategoria=="9") {
                                bgTheme = "bg-orange";
                                bgThemeLight = "bg-amber";
                                colorTheme = "color-orange";
                                bgThemeTrans = "bg-orange-light";
                            } 


                            imgOfertaUsados = '<div class="card-content"><img src="'+data.oferta[i].Img[0]+'" width="100%"><div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>';

                            dataOfertaUsados += '<li data-index="'+i+'" class="ofertasList '+bgThemeTrans+'" data-oferta="'+data.oferta[i].Id+'">'+
                                                '<a href="#" class="swipeout-content item-link">'+
                                                    '<div class="card-cont ks-facebook-card">'+
                                                        imgOfertaUsados+
                                                        '<div class="card-content-inner">'+
                                                            '<div class="card-content-price">'+
                                                                '<div class="facebook-price-valor color-white '+bgTheme+'">R$ '+formatReal(getMoney(data.oferta[i].Valor))+'</div>'+
                                                                '<div class="facebook-price-valor-promo color-white '+bgThemeLight+'">R$ '+formatReal(getMoney(data.oferta[i].ValorPromo))+'</div>'+
                                                            '</div>'+
                                                            '<div class="card-content-info">'+
                                                                '<div class="facebook-date '+colorTheme+'">'+data.oferta[i].EmpresaNome+'</div>'+
                                                                '<div class="facebook-title">'+data.oferta[i].Titulo+'</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</a>'+
                                            '</li>';
                            imgOfertaUsados = "";
                        
                        }

                        $$('.scroll-submenu-meuscupons').scrollTop(0);
                        $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
                        $$('.scroll-submenu-meuscupons').removeAttr('style');

                        $('#meuscupons-usados-cont').html(dataOfertaUsados);
                        //$$('.nameofertasCupons').html("MEUS CUPONS");
                        myApp.initImagesLazyLoad(".page");
                    myApp.hideIndicator();
                    }else{
                        myApp.hideIndicator();
                        $('#meuscupons-usados-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                    }
                }
                 ,error:function(data){
                    myApp.hideIndicator();
                    $('#meuscupons-usados-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                    //myApp.alert('Erro! Tente novamente.', 'Aptohome');
                 }
            });

            //expirados
            $.ajax({
                url: $server+"Gerar_json.php?op=compra&ativo=3&idCliente="+localStorage.getItem("userID")+"&action=getCliente",
                dataType : "json",
                success: function(data) {
                    //console.log(data);

                    $$('.scroll-submenu-meuscupons').scrollTop(0);
                    $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
                    $$('.scroll-submenu-meuscupons').removeAttr('style');

                    if (data!=null) {
                        var qtd = data.oferta.length;
                        var imgOfertaBaixados = "";
                        var imgOfertaUsados = "";
                        var imgOfertaExpirados = "";
                        var dataOfertaBaixados = "";
                        var dataOfertaUsados = "";
                        var dataOfertaExpirados = "";
                        var opcoes = false;
                        for (var i = 0; i < qtd; i++) {
                            if (data.oferta[i].Opcoes) {
                                opcoes = true;
                            }

                            var bgTheme;
                            var bgThemeLight;
                            var colorTheme;
                            var bgThemeTrans;
                            var idCategoria = data.oferta[i].IdCategoria;

                            if (idCategoria=="11") {
                                bgTheme = "bg-red";
                                colorTheme = "color-red";
                                bgThemeLight = "bg-deeporange";
                                bgThemeTrans = "bg-red-light";
                            }
                            if (idCategoria=="20") {
                                bgTheme = "bg-green";
                                bgThemeLight = "bg-lightgreen";
                                colorTheme = "color-green";
                                bgThemeTrans = "bg-green-light";
                            }
                            if (idCategoria=="2") {
                                bgTheme = "bg-purple";
                                bgThemeLight = "bg-pink";
                                colorTheme = "color-purple";
                                bgThemeTrans = "bg-purple-light";
                            }
                            if (idCategoria=="3") {
                                bgTheme = "bg-indigo";
                                bgThemeLight = "bg-blue";
                                colorTheme = "color-indigo";
                                bgThemeTrans = "bg-indigo-light";
                            }
                            if (idCategoria=="10") {
                                bgTheme = "bg-amber";
                                bgThemeLight = "bg-yellow";
                                colorTheme = "color-amber";
                                bgThemeTrans = "bg-amber-light";
                            }  
                            if (idCategoria=="9") {
                                bgTheme = "bg-orange";
                                bgThemeLight = "bg-amber";
                                colorTheme = "color-orange";
                                bgThemeTrans = "bg-orange-light";
                            } 

                            imgOfertaExpirados = '<div class="card-content"><img src="'+data.oferta[i].Img[0]+'" width="100%"><div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>';

                            dataOfertaExpirados += '<li data-index="'+i+'" class="ofertasList '+bgThemeTrans+'" data-oferta="'+data.oferta[i].Id+'">'+
                                                '<a href="#" class="swipeout-content item-link">'+
                                                    '<div class="card-cont ks-facebook-card">'+
                                                        imgOfertaExpirados+
                                                        '<div class="card-content-inner">'+
                                                            '<div class="card-content-price">'+
                                                                '<div class="facebook-price-valor color-white '+bgTheme+'">R$ '+formatReal(getMoney(data.oferta[i].Valor))+'</div>'+
                                                                '<div class="facebook-price-valor-promo color-white '+bgThemeLight+'">R$ '+formatReal(getMoney(data.oferta[i].ValorPromo))+'</div>'+
                                                            '</div>'+
                                                            '<div class="card-content-info">'+
                                                                '<div class="facebook-date '+colorTheme+'">'+data.oferta[i].EmpresaNome+'</div>'+
                                                                '<div class="facebook-title">'+data.oferta[i].Titulo+'</div>'+
                                                            '</div>'+
                                                        '</div>'+
                                                    '</div>'+
                                                '</a>'+
                                            '</li>';
                            imgOfertaExpirados = "";
                        
                        }

                        $$('.scroll-submenu-meuscupons').scrollTop(0);
                        $$('.sub-menu-meuscupons').removeAttr("id","sub-menu-meuscupons-fixed");
                        $$('.scroll-submenu-meuscupons').removeAttr('style');

                        $('#meuscupons-expirados-cont').html(dataOfertaExpirados);
                        //$$('.nameofertasCupons').html("MEUS CUPONS");
                        myApp.initImagesLazyLoad(".page");
                    myApp.hideIndicator();
                    }else{
                        myApp.hideIndicator();
                        $('#meuscupons-expirados-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                    }
                }
                 ,error:function(data){
                    myApp.hideIndicator();
                    $('#meuscupons-expirados-cont').html("<li class='semregistro'>Nenhum registro cadastrado</li>");
                    //myApp.alert('Erro! Tente novamente.', 'Aptohome');
                 }
            });

    }else{
        myApp.modal({
            title:  'Opss',
            text: 'Para acessar os seus cupons, você precisa estar logado no Sifrão',
            buttons: [
              {
                text: 'Fechar',
              },
              {
                text: 'Logar',
                onClick: function() {
                  mainView.router.load({pageName: "login"});
                }
              },
            ]
        });
    }
}



function nl2br (str, is_xhtml) {   
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
}

$$('.scroll-submenu-oferta').on('scroll', function (e) {
    if($$('.scroll-submenu-oferta').scrollTop()>269){
        $$('.sub-menu-oferta').attr("id","sub-menu-oferta-fixed");
        $$('.scroll-submenu-oferta').css('padding-top', '100px');
    } else {
        $$('.sub-menu-oferta').removeAttr("id","sub-menu-oferta-fixed");
        $$('.scroll-submenu-oferta').removeAttr('style');
    }
});

$$('.tab-oferta-opcoes').on('show', function () {
    var coords = $$('.scroll-submenu-oferta').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.opcoes-oferta').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    if (top>269) {
        $$('.scroll-submenu-oferta').scrollTop(270);
    } else {
        $$('.scroll-submenu-oferta').scrollTop(top);
    }
    /*$('body').height()-265
    $$('.scroll-submenu-oferta').scrollTop($$('.scroll-submenu-oferta').scrollTop());
    $$('.tab-oferta-opcoes').css("height","");
    $$('.tab-oferta-descricao').css("height","0");
    $$('.tab-oferta-regras').css("height","0");
    $$('.tab-oferta-local').css("height","0");*/
});
 
$$('.tab-oferta-descricao').on('show', function () {
    var coords = $$('.scroll-submenu-oferta').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.descricao-oferta').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    if (top>269) {
        $$('.scroll-submenu-oferta').scrollTop(270);
    } else {
        $$('.scroll-submenu-oferta').scrollTop(top);
    }
    /*$$('.scroll-submenu-oferta').scrollTop($$('.scroll-submenu-oferta').scrollTop());
    $$('.tab-oferta-opcoes').css("height","0");
    $$('.tab-oferta-descricao').css("height","");
    $$('.tab-oferta-regras').css("height","0");
    $$('.tab-oferta-local').css("height","0");*/
});
 
$$('.tab-oferta-regras').on('show', function () {
    var coords = $$('.scroll-submenu-oferta').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.regras-oferta').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    if (top>269) {
        $$('.scroll-submenu-oferta').scrollTop(270);
    } else {
        $$('.scroll-submenu-oferta').scrollTop(top);
    }
    /*$$('.scroll-submenu-oferta').scrollTop($$('.scroll-submenu-oferta').scrollTop());
    $$('.tab-oferta-opcoes').css("height","0");
    $$('.tab-oferta-descricao').css("height","0");
    $$('.tab-oferta-regras').css("height","");
    $$('.tab-oferta-local').css("height","0");*/
});

$$('.tab-oferta-local').on('show', function () {
    var coords = $$('.scroll-submenu-oferta').offset();
    var top = coords.top;
    var newHeight = "";
    newHeight = $$('.local-oferta').height() + 270;
    //$$('.scroll-tab').css('height', newHeight+'px');

    if (top>269) {
        $$('.scroll-submenu-oferta').scrollTop(270);
    } else {
        $$('.scroll-submenu-oferta').scrollTop(top);
    }
    /*$$('.scroll-submenu-oferta').scrollTop($$('.scroll-submenu-oferta').scrollTop());
    $$('.tab-oferta-opcoes').css("height","0");
    $$('.tab-oferta-descricao').css("height","0");
    $$('.tab-oferta-regras').css("height","0");
    $$('.tab-oferta-local').css("height","");*/
});


$$('#tab1').on('show', function () {

});

/////////////////////////////////////  oferta conteudo /////////////////////////
function ofertascont(idOferta, idCategoria, opcoes, alvo){

if (!opcoes) {
    

    $$('.tabs').removeAttr("style");
    $$('.tab-link-highlight').css("width","33.3333%");
    $$('.tab-link-highlight').css("transform","translate3d(0%, 0px, 0px)");


    $$('.oferta-opcoes').remove();
    $$('.oferta-descricao').addClass("active");
    $$('.oferta-descricao').attr("href","#tab1");
    $$('.oferta-regras').attr("href","#tab2");
    $$('.oferta-regras').removeClass("active");
    $$('.oferta-local').attr("href","#tab3");
    $$('.oferta-local').removeClass("active");

    $$('.tab-oferta-descricao').attr("id","tab1");
    $$('.tab-oferta-regras').attr("id","tab2");
    $$('.tab-oferta-regras').addClass("swiper-slide-next");
    $$('.tab-oferta-local').attr("id","tab3");

    $$('.tab-oferta-opcoes').remove();

}

    var bgTheme;
    var bgThemeLight;
    var colorTheme;
    var bgThemeTrans;

    if (idCategoria=="11") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-red");
        $("body").removeClass();
        $("body").addClass("theme-red");
        bgTheme = "bg-red";
        colorTheme = "color-red";
        bgThemeLight = "bg-deeporange";
        bgThemeTrans = "bg-red-light";
    }
    if (idCategoria=="20") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-green");
        $("body").removeClass();
        $("body").addClass("theme-green");
        bgTheme = "bg-green";
        bgThemeLight = "bg-lightgreen";
        colorTheme = "color-green";
        bgThemeTrans = "bg-green-light";
    }
    if (idCategoria=="2") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-purple");
        $("body").removeClass();
        $("body").addClass("theme-purple");
        bgTheme = "bg-purple";
        bgThemeLight = "bg-pink";
        colorTheme = "color-purple";
        bgThemeTrans = "bg-purple-light";
    }
    if (idCategoria=="3") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-indigo");
        $("body").removeClass();
        $("body").addClass("theme-indigo");
        bgTheme = "bg-indigo";
        bgThemeLight = "bg-blue";
        colorTheme = "color-indigo";
        bgThemeTrans = "bg-indigo-light"
    }
    if (idCategoria=="10") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-amber");
        $("body").removeClass();
        $("body").addClass("theme-amber");
        bgTheme = "bg-amber";
        bgThemeLight = "bg-yellow";
        colorTheme = "color-amber";
        bgThemeTrans = "bg-amber-light";
    }  
    if (idCategoria=="9") {
        $(".profile").removeClass("bg-brown bg-red bg-green bg-purple bg-red bg-indigo bg-amber bg-orange");
        $(".profile").addClass("bg-orange");
        $("body").removeClass();
        $("body").addClass("theme-orange");
        bgTheme = "bg-orange";
        bgThemeLight = "bg-amber";
        colorTheme = "color-orange";
        bgThemeTrans = "bg-orange-light";
    }  
    myApp.showIndicator();
    $('#ofertascont-cont').html("");
    $('.descricao-oferta').html("");
    $('.regras-oferta').html("");
    $('.local-oferta').html("");
    var datamural = "";

    // fechar speed dial
    $(".speed-dial").removeClass("speed-dial-opened");
    
        $.ajax({
            url: $server+"Gerar_json.php?idOferta="+idOferta+"&op=oferta",
            dataType : "json",
            success: function(data) {

                    $$('.scroll-submenu-oferta').scrollTop(0);
                    $$('.sub-menu-oferta').removeAttr("id","sub-menu-oferta-fixed");
                    $$('.scroll-submenu-oferta').removeAttr('style');
                    var qtd = data.oferta.length;
                    var imgOferta = "";
                    var dataOferta = "";
                    var dataLocal = "";
                    for (var i = 0; i < qtd; i++) {

                        //imgOferta = '<div class="card-content"><img data-src="'+data.oferta[i].Img[0]+'" class="lazy lazy-fadein" width="100%"><div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>';
                        imgOferta = '<div class="card-content">'+
                                    '<div class="swiper-container swiper-ofertascont">'+
                                        '<div class="swiper-pagination"></div>'+
                                        '<div class="swiper-wrapper">';
                                        for (var e = 0; e < data.oferta[i].Img.length; e++) {
                                            imgOferta += '<div class="swiper-slide"><img data-src="'+data.oferta[i].Img[e]+'" class="swiper-lazy" width="100%"><span class="preloader"><span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span></span></div>';
                                        }
                        imgOferta +=    '</div>'+
                                    '</div>'+
                                    '<div class="validade">Válido até: '+formatDate(data.oferta[i].dataValidade)+'</div><div class="desconto '+bgThemeLight+' color-white">'+Math.round(data.oferta[i].Desconto)+'%</div></div>'+
                                '</div>';

                        dataOferta += 
                                                '<div class="card-cont ks-facebook-card">'+
                                                    imgOferta+
                                                    '<div class="card-content-inner '+bgThemeTrans+'">'+
                                                        '<div class="card-content-price">'+
                                                            '<div class="facebook-price-valor color-white '+bgTheme+'">R$ '+formatReal(getMoney(data.oferta[i].Valor))+'</div>'+
                                                            '<div class="facebook-price-valor-promo color-white '+bgThemeLight+'">R$ '+formatReal(getMoney(data.oferta[i].ValorPromo))+'</div>'+
                                                        '</div>'+
                                                        '<div class="card-content-info">'+
                                                            '<div class="facebook-date '+colorTheme+'">'+data.oferta[i].EmpresaNome+'</div>'+
                                                            '<div class="facebook-title">'+data.oferta[i].Titulo+'</div>'+
                                                        '</div>'+
                                                        '<div class="clear"></div>'+
                                                    '</div>'+
                                                '</div>';
                        dataLocal += '<div class="local-container">'+
                                        '<div class="local-end">'+
                                            '<div class="local-bairro '+colorTheme+'">'+data.oferta[i].EmpresaBairro+'</div>'+
                                            '<div class="local-rua">'+data.oferta[i].EmpresaEndereco+', '+data.oferta[i].EmpresaNumero+'</div>'+
                                        '</div>'+

                                        '<div class="clear"></div>'+
                                    '</div>'+
                                    '<div class="local-map">'+
                                        '<a href="#">'+
                                            '<img src="https://maps.googleapis.com/maps/api/staticmap?size=480x300&zoom=18&markers=icon:http://sifrao.bynn.es/admin/img/maker-sifrao.png|'+data.oferta[i].EmpresaEndereco+','+data.oferta[i].EmpresaNumero+','+data.oferta[i].EmpresaBairro+','+data.oferta[i].EmpresaCidade+','+data.oferta[i].EmpresaEstado+'">'+
                                        '</a>'+
                                    '</div>';

                        imgOferta = "";
                        $('#ofertascont-cont').html(dataOferta);
                        $('.descricao-oferta').html(nl2br(data.oferta[i].Descricao));
                        $('.regras-oferta').html(nl2br(data.oferta[i].Regras));
                        $('.local-oferta').html(dataLocal);

                        $('.speed-dial-buttons .fone').attr('onclick','window.open(\"tel:'+data.oferta[i].EmpresaTel+'\")');
                        $('.speed-dial-buttons .ir').attr('onclick','window.open(\'maps://maps.apple.com/?daddr='+data.oferta[i].EmpresaEndereco+','+data.oferta[i].EmpresaNumero+','+data.oferta[i].EmpresaBairro+','+data.oferta[i].EmpresaCidade+','+data.oferta[i].EmpresaEstado+','+data.oferta[i].EmpresaNome+'\',"_system")');
                        $('.speed-dial-buttons .share').attr('onclick','window.open(\"maps://maps.apple.com/?q='+data.oferta[i].EmpresaEndereco+','+data.oferta[i].EmpresaNumero+','+data.oferta[i].EmpresaBairro+','+data.oferta[i].EmpresaCidade+','+data.oferta[i].EmpresaEstado+','+data.oferta[i].EmpresaNome+'\","_system")');
                        $('.local-map a').attr('onclick','window.open(\"http://maps.google.com/maps?daddr='+data.oferta[i].EmpresaLat+','+data.oferta[i].EmpresaLong+'?q='+data.oferta[i].EmpresaNome+'\","_system")');

                        $$('.nameofertascont').html(data.oferta[i].EmpresaNome);
                        myApp.initImagesLazyLoad(".page");
                        
                        var baixarCupom = '<a href="#" id="baixarCupom" onClick="baixarCupom('+data.oferta[i].Id+')" class="button-action button button-big button-fill button-raised color-green"><i class="fa fa-download"></i> BAIXAR CUPOM</a>';
                        var usarCupom = "";
                        $('.button-cupom').html(baixarCupom);

                        if (localStorage.getItem("userID")) {

                            $.ajax({
                                url: $server+"Gerar_json.php?op=compra&idOferta="+idOferta+"&idCliente="+localStorage.getItem("userID")+"&action=getOfertaCliente",
                                dataType : "json",
                                success: function(data) {
                                    if (data) {
                                        usarCupom = '<a href="#" id="usarCupom" onClick="usarCupom('+data[0].id+','+localStorage.getItem("userID")+');" class="button-action button button-big button-fill button-raised color-green"><i class="fa fa-ticket"></i> USAR CUPOM</a>';
                                        $('.button-cupom').html(usarCupom);
                                    }
                                }
                            });
                        }
                    };
                    $$('.scroll-submenu-oferta').scrollTop(0);
                    $$('.sub-menu-oferta').removeAttr("id","sub-menu-oferta-fixed");
                    $$('.scroll-submenu-oferta').removeAttr('style');
/*'<div class="facebook-title">'+$("<div />").html(descricao).text();+'</div>'+
var descricao = data.oferta[i].Descricao;*/

                    if (!opcoes) {
                        myApp.showTab('#tab1');

                        $$('.tabs').removeAttr("style");
                        $$('.tab-link-highlight').css("width","33.3333%");
                        $$('.tab-link-highlight').css("transform","translate3d(0%, 0px, 0px)");

                        $$('.oferta-opcoes').remove();
                        $$('.oferta-descricao').addClass("active");
                        $$('.oferta-descricao').attr("href","#tab1");
                        $$('.oferta-regras').attr("href","#tab2");
                        $$('.oferta-regras').removeClass("active");
                        $$('.oferta-local').attr("href","#tab3");
                        $$('.oferta-local').removeClass("active");

                        $$('.tab-oferta-descricao').attr("id","tab1");
                        $$('.tab-oferta-regras').attr("id","tab2");
                        $$('.tab-oferta-regras').addClass("swiper-slide-next");
                        $$('.tab-oferta-local').attr("id","tab3");

                        $$('.tab-oferta-opcoes').remove();

                        $$('.tab-oferta-descricao').removeClass("swiper-slide-next swiper-slide-prev swiper-slide-active active");
                        $$('.tab-oferta-descricao').addClass("swiper-slide-active active");
                        $$('.tab-oferta-regras').removeClass("swiper-slide-next swiper-slide-prev swiper-slide-active active");
                        $$('.tab-oferta-local').removeClass("swiper-slide-active");
                        $$('.tab-oferta-regras').removeClass("swiper-slide-next swiper-slide-prev swiper-slide-active active");
                        $$('.tab-oferta-local').removeClass("swiper-slide-next swiper-slide-prev swiper-slide-active active");
                    }

                myApp.hideIndicator();

                var mySwiperOfertascont = myApp.swiper('.swiper-ofertascont', {
                    pagination:'.swiper-ofertascont .swiper-pagination',
                    direction: 'horizontal',
                    autoplay: 4000,
                    /*autoplayStopOnLast: true,
                    watchSlidesProgress: true,
                    watchSlidesVisibility: true,
                    setWrapperSize: true,*/
                    preloadImages: false,
                    lazyLoading: true
                });

            }
             ,error:function(data){
                myApp.hideIndicator();
             }
        });

}
function ativarSwiper(){
    console.log("ativarSwiper");
mySwiperOfertascont.update(true);
}
myApp.onPageInit('ofertascont', function (page) {
    console.log("ofertascont");

});
/////////////////////////////////////  baixar cupom /////////////////////////
function baixarCupom(id){

    if (localStorage.getItem("userID")) {
        myApp.confirm('Deseja baixar esse cupom?<br>Você tem 3 dias para ultilizar o cupom.', function () {
            $.ajax({
                url: $server+"Gerar_json.php?op=compra&idOferta="+id+"&idCidade="+localStorage.getItem("idCidade")+"&idCliente="+localStorage.getItem("userID")+"&name="+localStorage.getItem("name")+"&action=add",
                dataType : "json",
                success: function(data) {
                    if (data) {
                        var usarCupom = '<a href="#" id="usarCupom" onClick="usarCupom('+data+','+localStorage.getItem("userID")+');" class="button-action button button-big button-fill button-raised color-green"><i class="fa fa-ticket"></i> USAR CUPOM</a>';
                        $('.button-cupom').html(usarCupom);
                    }
                }
            });
        });

    }else{
        myApp.modal({
            title:  'Opss',
            text: 'Para baixar um cupom, você precisa estar logado no Sifrão',
            buttons: [
              {
                text: 'Fechar',
              },
              {
                text: 'Logar',
                onClick: function() {
                  mainView.router.load({pageName: "login"});
                }
              },
            ]
        });
    }
}
/////////////////////////////////////  usar cupom /////////////////////////
function  usarCupom(id,userID){
    console.log("entrei usarCupom");
   cordova.plugins.barcodeScanner.scan(
      function (result) {
          console.log("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        if (!result.cancelled) {
            
            $.ajax({
                url: $server+"Gerar_json.php?op=compra&idCupom="+id+"&vendedor="+result.text+"&idCliente="+localStorage.getItem("userID")+"&action=usarCupom",
                dataType : "json",
                success: function(data) {
                    if (data==1) {
                        myApp.alert("Cupom ultilizado com sucesso!");
                        window.location = "index.html";
                    }else if (data==2){
                        myApp.alert("Erro! Favor tentar novamente");
                    }
                }
            });            
        }
      }, 
      function (error) {
          console.log("Scanning failed: " + error);
      }
   );
}

/////////////////////////////////////  devolver cupom /////////////////////////

function devCupom(id,eq){
        myApp.confirm('Deseja realmente devolver o cupom?', function () {
            $.ajax({
                url: $server+"Gerar_json.php?op=compra&idCupom="+id+"&idCliente="+localStorage.getItem("userID")+"&action=devCupom",
                dataType : "json",
                success: function(data) {
                    myApp.swipeoutDelete($$('li.ofertasList').eq($("li.ofertasList[data-index="+eq+"]").index()));
                    //console.log(myApp.swipeoutDelete($$('li.ofertasList').eq($("li.ofertasList[data-index="+eq+"]").index())));
                }
            });
        });
}

function logadoInitApp(){
console.log("getLocation");
getLocation();
        facebookConnectPlugin.getLoginStatus(function(success){
            if(success.status === 'connected'){

                facebookConnectPlugin.api('/me?fields=email,name,gender,cover,picture&locale=pt_BR&access_token=' + success.authResponse.accessToken, null,
                    function (result) {


                        $.ajax({
                             type: "GET",
                             url: $server+"Gerar_json.php?email="+result.email+"&op=login&action=getFace",
                             async: false,
                             beforeSend: function(x) {
                              if(x && x.overrideMimeType) {
                               x.overrideMimeType("application/j-son;charset=UTF-8");
                              }
                              myApp.showIndicator();
                        },
                            dataType: "json",
                            success: function(data){
                                myApp.hideIndicator();
                                if (!data) {
                                    //atualizartoken();
                                    var data = new Date();
                                    var str_data = data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate();
                                    $.ajax({
                                        url: $server+"Gerar_json.php?op=cadastro&data_cadastro="+str_data+"&id_facebook="+result.userID+"&userToken="+localStorage.getItem('userToken')+"&nome="+result.name+"&email="+result.email+"&bairro="+localStorage.getItem('bairro')+"&sexo="+result.gender,
                                        dataType : "json",
                                        success: function(data) {
                                            if (data) {
                                                localStorage.setItem("userID", data.id);
                                                console.log(data);
                                            }
                                        }
                                    });
                                } else {
                                    localStorage.setItem("userID", data.id);
                                    //atualizartoken();
                                    $.ajax({
                                        url: $server+"Gerar_json.php?op=cliente&action=edit&id="+data.id+"&id_facebook="+result.userID+"&userToken="+localStorage.getItem('userToken')+"&nome="+result.name+"&email="+result.email+"&bairro="+localStorage.getItem('bairro')+"&sexo="+result.gender,
                                        dataType : "json",
                                        success: function(data) {
                                            if (data) {
                                                console.log(data);
                                            }
                                        }
                                    });
                                }
                                console.log("Result: "+ JSON.stringify(result));
                                localStorage.setItem("email", result.email);
                                localStorage.setItem("name", result.name);
                                localStorage.setItem("userIDFace", result.id);
                                localStorage.setItem("picture", "http://graph.facebook.com/"+result.id+"/picture?type=large");
                                localStorage.setItem("cover", result.cover.source);
                                $$(".profile_foto img").attr("src",localStorage.getItem("picture"));
                                $$(".profile_nome").html(localStorage.getItem("name"));
                                $$(".profile_detalhes").html(localStorage.getItem("email"));
                                $$(".profile").append("<img src='"+result.cover.source+"' class='imgCover'>");
                                atualizartoken();
                            },error:function(data){
                                myApp.alert("Opps! Favor tentar novamente.");
                            }
                        });
                    },
                    function (result) {
                        console.log(result);
                        localStorage.clear();
                    }
                );
            }
        });
}

function loginInitApp(){
        facebookConnectPlugin.getLoginStatus(function(success){
            console.log("status = "+success.status);
            if (success.status!="connected") {
                facebookConnectPlugin.login(["public_profile", "email"], fbLoginSuccess,
                  function (error) {
                    console.error(error)
                  }
                );
            } else{
                facebookConnectPlugin.getLoginStatus(function(success){
                    if(success.status === 'connected'){

                        facebookConnectPlugin.api('/me?fields=email,name,cover,picture&locale=pt_BR&access_token=' + success.authResponse.accessToken, null,
                            function (result) {
                                console.log("Result: "+ JSON.stringify(result));
                                localStorage.setItem("email", result.email);
                                localStorage.setItem("name", result.name);
                                localStorage.setItem("userIDFace", result.id);
                                localStorage.setItem("picture", "http://graph.facebook.com/"+result.id+"/picture?type=large");
                                localStorage.setItem("cover", result.cover.source);
                                $$(".profile_foto img").attr("src",localStorage.getItem("picture"));
                                $$(".profile_nome").html(localStorage.getItem("name"));
                                $$(".profile_detalhes").html(localStorage.getItem("email"));
                                $(".profile").append("<img src='"+result.cover.source+"' class='imgCover'>");
                                atualizartoken();
                                mainView.router.refreshPreviousPage();
                            },
                            function (result) {
                                console.log(result);
                                localStorage.clear();
                            }
                        );
                    }
                });
            }
        });
}

var fbLoginSuccess = function (userData) {
    
        console.log("UserInfo: " + JSON.stringify(userData));

        localStorage.setItem("userIDFace", userData.authResponse.userID);
        localStorage.setItem("accessToken", userData.authResponse.accessToken);
        getUserData(userData.authResponse.userID);
    
}

function getUserData(userId){
    console.log("entrei getUserData");
    facebookConnectPlugin.api("me/?fields=email,name,cover,picture", ["public_profile", "email"],
        function onSuccess (result) {
            console.log("Result: "+ JSON.stringify(result));

            $.ajax({
                 type: "GET",
                 url: $server+"Gerar_json.php?email="+result.email+"&op=login&action=getFace",
                 async: false,
                 beforeSend: function(x) {
                  if(x && x.overrideMimeType) {
                   x.overrideMimeType("application/j-son;charset=UTF-8");
                  }
                  myApp.showIndicator();
            },
                dataType: "json",
                success: function(data){
                    myApp.hideIndicator();
                    if (!data) {
                        var data = new Date();
                        var str_data = data.getFullYear()+'-'+(data.getMonth()+1)+'-'+data.getDate();
                        $.ajax({
                            url: $server+"Gerar_json.php?op=cadastro&data_cadastro="+str_data+"&id_facebook="+result.id+"&token="+localStorage.getItem('userToken')+"&nome="+result.name+"&email="+result.email+"&cidade="+localStorage.getItem("idCidade")+"&bairro="+localStorage.getItem("bairro")+"&sexo="+result.gender,
                            dataType : "json",
                            success: function(data) {
                                if (data) {
                                    localStorage.setItem("userID", data.id);
                                    console.log(data);
                                }
                            }
                        });
                    } else {
                        localStorage.setItem("userID", data.id);
                        $.ajax({
                            url: $server+"Gerar_json.php?op=cliente&action=edit&id="+data.id+"&id_facebook="+result.id+"&token="+localStorage.getItem('userToken')+"&nome="+result.name+"&email="+result.email+"&cidade="+localStorage.getItem("idCidade")+"&bairro="+localStorage.getItem("bairro")+"&sexo="+result.gender,
                            dataType : "json",
                            success: function(data) {
                                if (data) {
                                    console.log(data);
                                }
                            }
                        });
                    }

                    localStorage.setItem("email", result.email);
                    localStorage.setItem("name", result.name);
                    localStorage.setItem("picture", "http://graph.facebook.com/"+userId+"/picture?type=large");
                    localStorage.setItem("cover", result.cover.source);
                    $$(".profile_foto img").attr("src",localStorage.getItem("picture"));
                    $$(".profile_nome").html(localStorage.getItem("name"));
                    $$(".profile_detalhes").html(localStorage.getItem("email"));
                    $$(".profile").append("<img src='"+result.cover.source+"' class='imgCover'>");

                    mainView.router.back();
                },error:function(data){
                    myApp.alert("Opps! Favor tentar novamente.");
                }
            });
        }
    );
}

////// convide //////
function convide(){

    facebookConnectPlugin.appInvite(
        {
            url: "https://fb.me/1813948832161939",
            picture: "https://lh6.ggpht.com/j7Z4ILacjWSK6irNy6pS4zgTmtEdVZjEOYq9tWN7v-n0L8SQJNhslube7biAPQiXuSM=w300-rw"
        },
        function(obj){
            if(obj) {
                if(obj.completionGesture == "cancel") {
                    // user canceled, bad guy
                } else {
                    myApp.alert("Amigos convidados com sucesso.");
                }
            } else {
                // user just pressed done, bad guy
            }
        },
        function(obj){
            // error
            console.log(obj);
        }
    );

}

/*
 Limpa os arquivos selecionados
 */
function limpar()
{
    var input = $("#imagem");
    input.replaceWith(input.val('').clone(true));
}
//////////////////////////// Alterar de cidade ///////////////////////////////////////////////////
function alteraCidade(id){
    localStorage.setItem("idCidade", id);
    window.location = "index.html";
}
//////////////////////////// Get Cidade e UF ///////////////////////////////////////////////////

function getLocation(){

    navigator.geolocation.getCurrentPosition(onSuccess);
        function onSuccess(pos){
            console.log(pos.coords.latitude+" - "+pos.coords.longitude);
            localStorage.setItem("userLatitude", pos.coords.latitude);
            localStorage.setItem("userLongitude", pos.coords.longitude);

            var geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+pos.coords.latitude+","+pos.coords.longitude+"&key=AIzaSyDF3Z31QBkZ5Nf5zJyMYfqcU5KXJCRXIeI";

            $.getJSON(geocodingAPI, function (json) {
                if (json.status == "OK") {
                    //Check result 0
                    var result = json.results[0];
                    //look for locality tag and administrative_area_level_1
                    var district = "";
                    var city = "";
                    var state = "";
                    for (var i = 0, len = result.address_components.length; i < len; i++) {
                        var ac = result.address_components[i];
                        if(ac.types.indexOf("sublocality") >= 0) district = ac.long_name;
                        if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
                        if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.short_name;
                    }
                    if (state !="" && city !="") {
                        //console.log("entrei");
                        //localStorage.setItem("city", city);
                        //localStorage.setItem("state", state);
                        $.ajax({
                            url: $server+"Gerar_json.php?op=cidades",
                            dataType : "json",
                            success: function(data) {
                                //console.log(data);
                                var qtd = data.cidades.length;
                                if (data!=null) {
                                    for (var i = 0; i < qtd; i++) {
                                        if (data.cidades[i].descricao==city && data.cidades[i].uf==state){
                                            if (!localStorage.getItem("idCidade")) {
                                                localStorage.setItem("idCidade", data.cidades[i].id);
                                            }
                                            localStorage.setItem("bairro", district);
                                        }else{
                                            if (!localStorage.getItem("idCidade")) {
                                                localStorage.setItem("idCidade", "1");
                                            }
                                        }
                                    }

                                }else{
                                    if (!localStorage.getItem("idCidade")) {
                                        localStorage.setItem("idCidade", "1");
                                    }
                                }
                            }
                        });
                        localStorage.setItem("bairro", district);
                        console.log("infos geo: " + city + ", " + state + ", " + district + "!");
                    }else if (!localStorage.getItem("idCidade")) {
                        localStorage.setItem("idCidade", "1");
                    }
                    //setTimeout("ofertasHome()",1000);
                }
            });
        }
}

myApp.onPageReinit('maps', function (page) {
    maps();
});
///////////////////////// maps aqui perto ////////////////////////
var map;

function maps(){
    ofertasListMap = [];
    ofertasMap = [];

    $.ajax({
        url: $server+"Gerar_json.php?idCidade="+localStorage.getItem("idCidade")+"&op=oferta",
        dataType : "json",
        success: function(data) {
            //console.log(data);
            if (data!=null) {
                var qtd = data.oferta.length;
                var imgOferta = "";
                var dataOferta = "";
                var opcoes = false;
                var info;
                var idCategoria;

                for (var i = 0; i < qtd; i++) {

                    if (data.oferta[i].Opcoes) {
                        opcoes = true;
                    }
                
                    idCategoria = data.oferta[i].IdCategoria;
                    
                    info = '<a href="#ofertascont" onclick="ofertascont('+data.oferta[i].Id+','+idCategoria+','+opcoes+',\'home\');">'+
                                '<div style="display:block;max-width:360px;height:80px;overflow: hidden;">'+
                                    '<div style="width:80px;height:80px;float:left;overflow: auto;">'+
                                        '<img src="'+data.oferta[i].Img[0]+'" style="height:80px;padding-right:5px">'+
                                    '</div>'+
                                    '<div style="max-width:130px;height:80px;float:left;margin-left:5px;">'+
                                        '<strong>'+data.oferta[i].EmpresaNome.substring(0, 20)+'</strong><br>'+
                                        data.oferta[i].Titulo.substring(0, 40)+'<br>'+
                                        '<span style="text-decoration:line-through;font-size:11px;color:gray">R$ '+data.oferta[i].Valor+' </span><span style="color:green"><strong> R$ '+data.oferta[i].ValorPromo+'</strong></span>'+
                                    '</div>'+
                                '</div>'+
                            '</a>';
                    ofertasListMap.push(info);
                    ofertasListMap.push(data.oferta[i].Latitude);
                    ofertasListMap.push(data.oferta[i].Longitude);
                    ofertasListMap.push(i);
                    ofertasListMap.push(idCategoria);
                    servidor = "dentro";
                    ofertasMap.push(ofertasListMap);
                    ofertasListMap = [];

                }
                localStorage.setItem("ofertasMap", JSON.stringify(ofertasMap));
                //console.log(ofertasMap);
            }
        }
        ,error:function(data){
            localStorage.setItem("ofertasMap","");
        }
    });

    setTimeout("ofertasMaps()",1000);

}

function ofertasMaps(){
    var locations = [];
    if (localStorage.getItem("ofertasMap")!="") {
        locations = jQuery.parseJSON(localStorage.getItem("ofertasMap"));
    }


            /*navigator.geolocation.getCurrentPosition(mapCenterInt);
                function mapCenterInt(){
                    mapCenter = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
                }*/

        //navigator.geolocation.getCurrentPosition(onSuccess);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(localStorage.getItem("userLatitude"),localStorage.getItem("userLongitude")),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    /*var image = {
        url: 'images/icon-maps.png'
    };*/

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: {url: 'images/icon-maps-'+locations[i][4]+'.png'}
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

/*
//////////////////////////// verificando suporte ao banco de dados ///////////////////////

function getopenDb() { 
    try {
        if (window.openDatabase) {                    
            return window.openDatabase;                    
        } else {
            alert('No HTML5 support');
            return undefined;
        }
    }
    catch (e) {
        alert(e);
        return undefined;
    }            
}


//////////////////////////// criando banco de dados ///////////////////////
var db = createTable();
function createTable() {
    var openDB = getopenDb();
    if(!openDB)
    {                
        return;               
    }
    else
    {
        db = openDB('sifrao', '1.0', 'banco de dados sifrao', 2*1024*1024);
        db.transaction(function (t) { 
        t.executeSql('CREATE TABLE IF NOT EXISTS meuscupons(idCupom INT NOT NULL );', [], null, null);               
        
    });
    return db;
    }            
}
//////////////////////////// inserindo no banco de dados ///////////////////////
function insert(idCupom) {
    if(!db)
    {                
        return;                
    }

    db.transaction(function (t) { 
        t.executeSql("INSERT INTO meuscupons('idCupom') values('" + idCupom + "');", [], null, null);
        //alert("Row Inserted!");

    });

        var q = "select * from meuscupons where idCupom";
        var meusCuponsSave = [];
        db.transaction(function (t) {
            t.executeSql(q, null, function (t, data) {
            var len = data.rows.length, i;
            
              for (i = 0; i < len; i++) {
                meusCuponsSave.push(data.rows.item(i).idCupom);
              }
              localStorage.setItem("meusCuponsSave", meusCuponsSave);
            });
        });

}
//////////////////////////// verificando se cupom existe no banco de dados ///////////////////////
function selCupom(idCupom) {
    
    var q = "select * from meuscupons where idCupom="+idCupom;
    
    db.transaction(function (t) {
        t.executeSql(q, null, function (t, data) {
            return data.rows.length;
        });
    });
}
//////////////////////////// listando meus cupons no banco de dados ///////////////////////
function meusCuponsBd(idCupons) {
    
    var q = "select * from meuscupons where idCupom IN("+idCupons+")";
    
    db.transaction(function (t) {
        t.executeSql(q, null, function (t, data) {
        var len = data.rows.length, i;
          for (i = 0; i < len; i++) {
            alert(data.rows.item(i).text);
          }
            return data.rows.length;
        });
    });
}
*/
/////////////////////////// push ///////////////////////////
    /*
        var pushNotification;
        function onDeviceReady() {    
        //window.open = cordova.InAppBrowser.open;

        //document.addEventListener("backbutton", myApp.closeModal(".actions-modal"), false);
                //navigator.splashscreen.hide();
                //intel.xdk.device.hideSplashScreen(); 
                $("#console").append('<p>-> Aplicativo iniciado!</p>');
                
                // Instanciando plugin Push...
                pushNotification = window.plugins.pushNotification;

                // Iniciar serviço de Push no aplicativo...
                pushNotification.register(
                    function (result) {
                        $("#console").append('<p>-> SUCESSO: '+ result+'</p>');
                    }, 
                    function (error) {
                        $("#console").append('<p>-> ERRO: '+error+'</p>');
                    }, 
                    {
                        "senderID":"214666097431",
                        "ecb":"capturarEventos"
                    }
                );
                
            }
            
            // capturar notificações recebidos da API Google Cloud Messaging (GCM)...
            function capturarEventos(e) {
               console.log('EVENTO CAPTURADO:' + e.event);
                switch( e.event )
                {
                    // Dispositivo registrado no GCM!!!
                    case 'registered':
                            
                        console.log('APARELHO REGISTRADO:' + e.regid);
                        localStorage.setItem("token", e.regid);
                        //console.log("TOKEN = " + e.regid);

                        break;
                    
                    // Chegou uma notificação push!!!
                    case 'message':

                        switch( e.payload.item ){
                            case 'comuncondominio':
                            badgecomunicado++;
                            $('.badgecomunicado').html('<span class="badge bg-red">'+badgecomunicado+'</span>');
                            break;
                            case 'comunportaria':
                            badgecomunicado++;
                            $('.badgecomunicado').html('<span class="badge bg-red">'+badgecomunicado+'</span>');
                            break;
                            case 'comunmorador':
                            badgecomunicado++;
                            $('.badgecomunicado').html('<span class="badge bg-red">'+badgecomunicado+'</span>');
                            break;
                            case 'transparencia':
                            badgetransparencia++;
                            $('.badge'+e.payload.item).html('<span class="badge bg-red">'+badgetransparencia+'</span>');
                            break;
                        }
                        
                        // Verificar se push message chegou com o app aberto (em foreground)...
                        // Em caso positivo, lançamos um alerta (som, janela, etc.) para chamar atenção...  

                        if (e.foreground)
                        {
                            console.log('CAPTURADO PUSH COM APP ABERTO!');

                            myApp.addNotification({
                                title: e.payload.title,
                                subtitle: e.payload.subtitle,
                                message: e.payload.message,
                                media: '<img src='+e.payload.media+'>',
                                onClick: function () { 
                                    switch( e.payload.item ){
                                        case 'comuncondominio':
                                        mainView.router.load({pageName: "comunicadocont"});
                                        comuncondominiocont(e.payload.id);
                                        break;
                                        case 'comunportaria':
                                        mainView.router.load({pageName: "comunicadocont"});
                                        comunportariacont(e.payload.id);
                                        break;
                                        case 'comunmorador':
                                        mainView.router.load({pageName: "comunicadocont"});
                                        comunmoradorcont(e.payload.id);
                                        break;
                                        case 'transparencia':
                                        mainView.router.load({pageName: "transparenciacont"});
                                        transparenciacont(e.payload.id);
                                        break;
                                    }
                                }
                            });
                        }
                        else
                        {   
                            // caso contrário, foram lançados porque o usuário tocou uma notificação na bandeja de notificação...
                            if (e.coldstart){
                                
                                switch( e.payload.item ){
                                    case 'comuncondominio':
                                    mainView.router.load({pageName: "comunicadocont"});
                                    comuncondominiocont(e.payload.id);
                                    break;
                                    case 'comunportaria':
                                    mainView.router.load({pageName: "comunicadocont"});
                                    comunportariacont(e.payload.id);
                                    break;
                                    case 'comunmorador':
                                    mainView.router.load({pageName: "comunicadocont"});
                                    comunmoradorcont(e.payload.id);
                                    break;
                                    case 'transparencia':
                                    mainView.router.load({pageName: "transparenciacont"});
                                    transparenciacont(e.payload.id);
                                    break;
                                }

                                console.log('CAPTURADO PUSH COM APP EM COLDSTART!');
                            }else{
                                switch( e.payload.item ){
                                    case 'comuncondominio':
                                    mainView.router.load({pageName: "comunicadocont"});
                                    comuncondominiocont(e.payload.id);
                                    break;
                                    case 'comunportaria':
                                    mainView.router.load({pageName: "comunicadocont"});
                                    comunportariacont(e.payload.id);
                                    break;
                                    case 'comunmorador':
                                    mainView.router.load({pageName: "comunicadocont"});
                                    comunmoradorcont(e.payload.id);
                                    break;
                                    case 'transparencia':
                                    mainView.router.load({pageName: "transparenciacont"});
                                    transparenciacont(e.payload.id);

                                    break;
                                }
                                console.log('CAPTURADO PUSH COM APP EM BACKGROUND!');
                        }
                        }
                        console.log('TITULO: ' + e.payload.title);
                        console.log('SUBTITULO: ' + e.payload.subtitle);
                        console.log('MEDIA: ' + e.payload.media);
                        console.log('MENSAGEM: ' + e.payload.message);
                        console.log('ID: ' + e.payload.id);
                        
                        break;
                    
                    case 'error':
                          console.log('<p>-> ERRO:' + e.msg+'</p>' );
                        break;
                    
                    default:
                          console.log('<p>-> EVENTO: Desconhecido, um envento estranho foi capturado.</p>');
                        break;
                }
            }*/
        
        document.addEventListener('app.Ready', onDeviceReady, true);

        function onDeviceReady() {

            var push = PushNotification.init({ "android": {"senderID": "214666097431"},
                 "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

            push.on('registration', function(data) {
                console.log('APARELHO REGISTRADO:' + data.registrationId);
                localStorage.setItem("userToken", data.registrationId);
                // data.registrationId
            });

            push.on('notification', function(data) {
                if (data.additionalData.foreground) {

                    console.log('CAPTURADO PUSH COM APP ABERTO!');

                    myApp.addNotification({
                        title: data.title,
                        subtitle: data.subtitle,
                        message: data.message,
                        media: '<img src='+data.media+'>',
                        onClick: function () { 
                            mainView.router.load({pageName: data.item+'cont'});
                            switch( data.item ){
                                case 'comunicado':
                                comunicadocont(data.id);
                                break;
                                case 'transparencia':
                                transparenciacont(data.id);
                                break;
                            }
                        }
                    });
                }

                // data.message,
                // data.title,
                // data.count,
                // data.sound,
                // data.image,
                // data.additionalData
                console.log('TITULO: ' + data.title);
                console.log('SUBTITULO: ' + data.subtitle);
                console.log('MEDIA: ' + data.media);
                console.log('MENSAGEM: ' + data.message);
                console.log('ID: ' + data.id);
                console.log('ITEMALVO: ' + action+'('+data.id+')');
            });

            push.on('error', function(e) {
                console.log(e.message);
                // e.message
            });
        }


function dataamericana(data){
    split = data.split('/');
    novadata = split[2] + "-" +split[1]+"-"+split[0];
    //data_americana = new Date(novadata);
    //alert(novadata);
    return (novadata);
}
function convertMysqldate(dateStr) {    
// Assuming input:2014-01-30 16:21:09
            var t = dateStr.split(/[- :]/);
            //var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            var monthNames = ["01", "02", "03", "04", "05", "06","07", "08", "09", "10", "11", "12"];
            var year = t[0];
            var month = monthNames[parseInt(t[1]-1)];
            var day = t[2];
            var hourTmp = t[3];
            var minute = t[4];
            var seconds = t[5];
            if (parseInt(hourTmp) > 12) {
                var hour = parseInt(parseInt(hourTmp) - 12) + ':' + minute + ':' + seconds + ' PM';
            } else if (parseInt(hourTmp) === 12) {
                hour = parseInt(hourTmp) + ':' + minute + ':' + seconds + ' PM';
            } else {
               hour = parseInt(hourTmp) + ':' + minute + ':' + seconds + ' AM';
            }
            //return (hour + '<br>' + day + ' ' + month + ' ' + year);
            return (day + '/' + month + '/' + year +' - '+ hour);
}

function convertToAmericanDate(dateStr) {    
// Assuming input:2014-01-30 16:21:09
            var t = dateStr.split(/[/ :]/);
            //var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            var monthNames = ["01", "02", "03", "04", "05", "06","07", "08", "09", "10", "11", "12"];
            var year = t[0];
            var month = monthNames[parseInt(t[1]-1)];
            var day = t[2];
            var hourTmp = t[3];
            var minute = t[4];
            var seconds = t[5];
            if (parseInt(hourTmp) > 12) {
                var hour = parseInt(parseInt(hourTmp) - 12) + ':' + minute + ':' + seconds + ' PM';
            } else if (parseInt(hourTmp) === 12) {
                hour = parseInt(hourTmp) + ':' + minute + ':' + seconds + ' PM';
            } else {
               hour = parseInt(hourTmp) + ':' + minute + ':' + seconds + ' AM';
            }
            //return (hour + '<br>' + day + ' ' + month + ' ' + year);
            //return (year + '/' + month + '/' + day +' - '+ hour);
            return (day + '/' + month + '/' + year +' - '+ hour);
}

function formatDate(dateStr) {    
// Assuming input:2014-01-30 16:21:09
            var t = dateStr.split(/[- :]/);
            //var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
            var monthNames = ["01", "02", "03", "04", "05", "06","07", "08", "09", "10", "11", "12"];
            var year = t[0];
            var month = monthNames[parseInt(t[1]-1)];
            var day = t[2];

            return (day + '/' + month + '/' + year);
}

function formatTime(secs){
   var times = new Array(3600, 60, 1);
   var time = '';
   var tmp;
   for(var i = 0; i < times.length; i++){
      tmp = Math.floor(secs / times[i]);
      if(tmp < 1){
         tmp = '00';
      }
      else if(tmp < 10){
         tmp = '0' + tmp;
      }
      time += tmp;
      if(i < 2){
         time += ':';
      }
      secs = secs % times[i];
   }
   return time;
}

function getMoney( str )
{
        return parseInt( str.replace(/[\D]+/g,'') );
}

function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}