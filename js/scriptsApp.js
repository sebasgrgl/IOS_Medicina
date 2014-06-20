//---------------------------------------------------- HOJA DE MANEJO DE SCRIPTS DE APLICACION ----------------------------------------------------

//FUNCIÓN PARA QUE AL INSTANTE DE OPRIMIR EL BOTON "INICIAR" EN EL MENU PRINCIPAL, SE DIRIJA A LA SEGUNDA PANTALLA
function goMenu(){
	//definición para hacer cambio de página usando efecto (el término changeHash se establece para definir si el hash en la barra de locación debe ser actualizada)
	$.mobile.changePage( "html/activity_menu_home.html", { transition: "fade"/**, changeHash: false**/ });
}

//FUNCIÓN PARA USAR AL FINAL DE CADA CHECKLIST DE LAS AUTOPSIAS EN EL BOTÓN "VOLVER A MENÚ PRINCIPAL
function goMenu1(){
	$.mobile.changePage( "./activity_menu_home.html", { transition: "fade"/**, changeHash: false**/ });
}

//FUNCIÓN PARA QUE AL OPRIMIR EL BOTÓN "ATRÁS" EN EL HEADER DEL MENÚ PRINCIPAL, REGRESE A LA PORTADA
function backamh(){
	$.mobile.changePage( "../activity_home.html", { transition: "flip"/**, changeHash: false**/ });
}

//FUNCIÓN PARA QUE AL OPRIMIR EL BOTÓN "ATRÁS" EN EL HEADER DEL MENÚ "CLINICA FORENSE", REGRESE AL MENÚ PRINCIPAL
function backapc(){
	$.mobile.changePage( "./activity_menu_home.html", { transition: "flip"/**, changeHash: false**/ });
}

//FUNCIÓN PARA QUE AL OPRIMIR EL BOTÓN "ATRÁS" EN EL HEADER DEL MENÚ "LESIONES PERSONALES" EN CLÍNICA FORENSE, REGRESE AL MENÚ PRINCIPAL DE LA SECCIÓN "CLÍNICA FORENSE"
function backapi(){
	$.mobile.changePage( "./activity_phorensic_clinic.html", { transition: "flip"/**, changeHash: false**/ });
}

function backapi1(){
	$.mobile.changePage( "./activity_personal_injuries.html", { transition: "flip"/**, changeHash: false**/ });
}

function backapi2(){
	$.mobile.changePage( "./activity_personal_injuries1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backasa1(){
	$.mobile.changePage( "./activity_sexual_abuse.html", { transition: "flip"/**, changeHash: false**/ });
}

function backasa2(){
	$.mobile.changePage( "./activity_sexual_abuse1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backaca1(){
	$.mobile.changePage( "./activity_clinic_age.html", { transition: "flip"/**, changeHash: false**/ });
}

function backaca2(){
	$.mobile.changePage( "./activity_clinic_age1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backad1(){
	$.mobile.changePage( "./activity_drunk.html", { transition: "flip"/**, changeHash: false**/ });
}

function backad2(){
	$.mobile.changePage( "./activity_drunk1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backagf1(){
	$.mobile.changePage( "./activity_autopsies.html", { transition: "flip"/**, changeHash: false**/ });
}

function backagf2(){
	$.mobile.changePage( "./activity_gun_fire1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backagf3(){
	$.mobile.changePage( "./activity_gun_fire2.html", { transition: "flip"/**, changeHash: false**/ });
}

function backagf4(){
	$.mobile.changePage( "./activity_gun_fire3.html", { transition: "flip"/**, changeHash: false**/ });
}

function backagf5(){
	$.mobile.changePage( "./activity_gun_fire4.html", { transition: "flip"/**, changeHash: false**/ });
}

function backafc(){
	$.mobile.changePage( "./activity_gun_fire5.html", { transition: "flip"/**, changeHash: false**/ });
}

function backak2(){
	$.mobile.changePage( "./activity_knife1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backak3(){
	$.mobile.changePage( "./activity_knife2.html", { transition: "flip"/**, changeHash: false**/ });
}

function backak4(){
	$.mobile.changePage( "./activity_knife3.html", { transition: "flip"/**, changeHash: false**/ });
}

function backak5(){
	$.mobile.changePage( "./activity_knife4.html", { transition: "flip"/**, changeHash: false**/ });
}

function backafc1(){
	$.mobile.changePage( "./activity_knife5.html", { transition: "flip"/**, changeHash: false**/ });
}

function backaa2(){
	$.mobile.changePage( "./activity_adult1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backaa3(){
	$.mobile.changePage( "./activity_adult2.html", { transition: "flip"/**, changeHash: false**/ });
}

function backaa4(){
	$.mobile.changePage( "./activity_adult3.html", { transition: "flip"/**, changeHash: false**/ });
}

function backaa5(){
	$.mobile.changePage( "./activity_adult4.html", { transition: "flip"/**, changeHash: false**/ });
}

function backafc2(){
	$.mobile.changePage( "./activity_adult5.html", { transition: "flip"/**, changeHash: false**/ });
}

function backacm(){
	$.mobile.changePage( "./activity_child1.html", { transition: "flip"/**, changeHash: false**/ });
}

function backacb2(){
	$.mobile.changePage( "./activity_childmenu.html", { transition: "flip"/**, changeHash: false**/ });
}

function backacb3(){
	$.mobile.changePage( "./activity_childborn2.html", { transition: "flip"/**, changeHash: false**/ });
}
function backacb4(){
	$.mobile.changePage( "./activity_childborn3.html", { transition: "flip"/**, changeHash: false**/ });
}
function backacb5(){
	$.mobile.changePage( "./activity_childborn4.html", { transition: "flip"/**, changeHash: false**/ });
}

function backafc3acb(){
	$.mobile.changePage( "./activity_childborn5.html", { transition: "flip"/**, changeHash: false**/ });
}

function backacl3(){
	$.mobile.changePage( "./activity_childlact2.html", { transition: "flip"/**, changeHash: false**/ });
}
function backacl4(){
	$.mobile.changePage( "./activity_childlact3.html", { transition: "flip"/**, changeHash: false**/ });
}
function backacl5(){
	$.mobile.changePage( "./activity_childlact4.html", { transition: "flip"/**, changeHash: false**/ });
}

function backafc3acl(){
	$.mobile.changePage( "./activity_childlact5.html", { transition: "flip"/**, changeHash: false**/ });
}

function backacs3(){
	$.mobile.changePage( "./activity_childschool2.html", { transition: "flip"/**, changeHash: false**/ });
}
function backacs4(){
	$.mobile.changePage( "./activity_childschool3.html", { transition: "flip"/**, changeHash: false**/ });
}
function backacs5(){
	$.mobile.changePage( "./activity_childschool4.html", { transition: "flip"/**, changeHash: false**/ });
}

function backafc3acs(){
	$.mobile.changePage( "./activity_childschool5.html", { transition: "flip"/**, changeHash: false**/ });
}




//FUNCIÓN PARA QUE AL OPRIMIR EL BOTÓN "HOME" EN EL HEADER, REGRESE AL MENÚ PRINCIPAL
function home(){
	$.mobile.changePage( "../activity_home.html", { transition: "slidefade" });
}

/**>>>>>>>>>> OPCIONES DE "CLÍNICA FORENSE" >>>>>>>>>>**/	

//FUNCIÓN PARA IR AL MENU DE "CLINICA FORENSE"
function goPhoresic(){
	$.mobile.changePage( "./activity_phorensic_clinic.html", { transition: "slidefade" });
}

//FUNCIÓN PARA IR AL MENU DE "Lesiones Personales"
function goPersonalInjuries(){
	$.mobile.changePage("./activity_personal_injuries.html", { transition: "slidefade" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Lesiones Personales"
function goPersonalInjuries1(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	var myCheck9 = document.getElementById('myCheck9');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked && myCheck9.checked){
		$.mobile.changePage("./activity_personal_injuries1.html",{ transition: "slidefade" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
		var delay=2000;//1 seconds
			setTimeout(function(){
			//your code to be executed after 1 seconds
			$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goPersonalInjuries2(){
	$.mobile.changePage("./activity_personal_injuries2.html",{ transition: "slidefade"});
}

function goPersonalInjuriesFinal(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	var myCheck9 = document.getElementById('myCheck9');
	var myCheck10 = document.getElementById('myCheck10');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked && myCheck9.checked && myCheck10.checked){
		$.mobile.changePage("./activity_menu_home.html",{ transition: "slidefade" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
		var delay=2000;//2 seconds
			setTimeout(function(){
			//your code to be executed after 1 seconds
			$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA IR AL MENU DE "Delito Sexual"
function goSexualAbuse(){
	$.mobile.changePage("./activity_sexual_abuse.html", { transition: "slide" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Delito Sexual"
function goSexualAbuse1(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	var myCheck9 = document.getElementById('myCheck9');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked && myCheck9.checked){
		$.mobile.changePage("./activity_sexual_abuse1.html",{ transition: "slide" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goSexualAbuse2(){
	$.mobile.changePage("./activity_sexual_abuse2.html", { transition: "slide" });
}


//FUNCIÓN PARA IR AL MENU DE "Edad Clínica"
function goClinicAge(){
	$.mobile.changePage("./activity_clinic_age.html", { transition: "pop" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Edad Clínica"
function goClinicAge1(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	var myCheck9 = document.getElementById('myCheck9');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked && myCheck9.checked){
		$.mobile.changePage("./activity_clinic_age1.html",{ transition: "pop" });
	}else{
    $( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goClinicAge2(){
	$.mobile.changePage("./activity_clinic_age2.html", { transition: "pop" });
}

//FUNCIÓN PARA IR AL MENU DE "Embriaguez"
function goDrunk(){
	$.mobile.changePage("./activity_drunk.html", { transition: "slideup" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Edad Clínica"
function goDrunk1(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	var myCheck9 = document.getElementById('myCheck9');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked && myCheck9.checked){
		$.mobile.changePage("./activity_drunk1.html",{ transition: "slideup" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goDrunk2(){
	$.mobile.changePage("./activity_drunk2.html", { transition: "slideup" });
}

/**>>>>>>>>>> OPCIONES DE "AUTOPSIA" >>>>>>>>>>**/	

//FUNCIÓN PARA IR AL MENU DE "AUTOPSIAS"
function goPhoresicChecklist(){
	$.mobile.changePage("./activity_autopsies.html", { transition: "slidefade" });
}


//FUNCIÓN PARA IR AL MENU DE "Muerte por proyectil de arma de fuego"
function goGunFire1(){
	$.mobile.changePage("./activity_gun_fire1.html", { transition: "slidefade" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por proyectil de arma de fuego"
function goGunFire2(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_gun_fire2.html", { transition: "slidefade" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 2 DE "Muerte por proyectil de arma de fuego"
function goGunFire3(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked){
		$.mobile.changePage("./activity_gun_fire3.html", { transition: "slidefade" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 3 DE "Muerte por proyectil de arma de fuego"
function goGunFire4(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked){
		$.mobile.changePage("./activity_gun_fire4.html", { transition: "slidefade" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 4 DE "Muerte por proyectil de arma de fuego"
function goGunFire5(){
	var myCheck1 = document.getElementById('myCheck1');
	if (myCheck1.checked){
		$.mobile.changePage("./activity_gun_fire5.html", { transition: "slidefade" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por proyectil de arma de fuego"
function goFinish(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked){
		$.mobile.changePage("./activity_finish_checklist.html", { transition: "slidefade" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA IR AL MENU DE "Muerte por herida de arma blanca"
function goKnife1(){
	$.mobile.changePage("./activity_knife1.html", { transition: "slide" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por herida de arma blanca"
function goKnife2(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_knife2.html", { transition: "slide" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por herida de arma blanca"
function goKnife3(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked){
		$.mobile.changePage("./activity_knife3.html", { transition: "slide" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goKnife4(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked){
		$.mobile.changePage("./activity_knife4.html", { transition: "slide" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goKnife5(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked){
		$.mobile.changePage("./activity_knife5.html", { transition: "slide" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goFinish1(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked){
		$.mobile.changePage("./activity_finish_checklist1.html", { transition: "slide" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA IR AL MENU DE "Sin causa aparente en adultos"
function goAdult1(){
	$.mobile.changePage("./activity_adult1.html", { transition: "pop" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por herida de arma blanca"
function goAdult2(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked){
		$.mobile.changePage("./activity_adult2.html", { transition: "pop" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por herida de arma blanca"
function goAdult3(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked){
		$.mobile.changePage("./activity_adult3.html", { transition: "pop" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goAdult4(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_adult4.html", { transition: "pop" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goAdult5(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked){
		$.mobile.changePage("./activity_adult5.html", { transition: "pop" });
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goFinish2(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_finish_checklist2.html", { transition: "pop" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}


//FUNCIÓN PARA IR AL MENU DE "Sin causa aparente en niños"
function goChild1(){
	$.mobile.changePage("./activity_child1.html", { transition: "slideup" });
}

//FUNCIÓN PARA VALIDAR QUE SE HAYAN SELECCIONADOS TODAS OPCIONES DEL MENÚ 1 DE "Muerte por herida de arma blanca"
function goChildMenu(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	if (myCheck1.checked && myCheck2.checked){
		$.mobile.changePage("./activity_childmenu.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

function goChildBorn2(){
	$.mobile.changePage("./activity_childborn2.html", { transition: "slideup" });
}

function goChildBorn3(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked){
		$.mobile.changePage("./activity_childborn3.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
function goChildBorn4(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked){
		$.mobile.changePage("./activity_childborn4.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
function goChildBorn5(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked){
		$.mobile.changePage("./activity_childborn5.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}


function goFinish3acb(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_finish_checklist3acb.html", { transition: "pop" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//asdasd
function goChildLact2(){
	$.mobile.changePage("./activity_childlact2.html", { transition: "slideup" });
}

function goChildLact3(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked){
		$.mobile.changePage("./activity_childlact3.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
function goChildLact4(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked){
		$.mobile.changePage("./activity_childlact4.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
function goChildLact5(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked){
		$.mobile.changePage("./activity_childlact5.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}


function goFinish3acl(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_finish_checklist3acl.html", { transition: "pop" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}

//io
function goChildSchool2(){
	$.mobile.changePage("./activity_childschool2.html", { transition: "slideup" });
}

function goChildSchool3(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	var myCheck9 = document.getElementById('myCheck9');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked && myCheck9.checked){
		$.mobile.changePage("./activity_childschool3.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
function goChildSchool4(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked){
		$.mobile.changePage("./activity_childschool4.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
function goChildSchool5(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	var myCheck6 = document.getElementById('myCheck6');
	var myCheck7 = document.getElementById('myCheck7');
	var myCheck8 = document.getElementById('myCheck8');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked && myCheck6.checked && myCheck7.checked && myCheck8.checked){
		$.mobile.changePage("./activity_childschool5.html", { transition: "slideup" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}


function goFinish3acs(){
	var myCheck1 = document.getElementById('myCheck1');
	var myCheck2 = document.getElementById('myCheck2');
	var myCheck3 = document.getElementById('myCheck3');
	var myCheck4 = document.getElementById('myCheck4');
	var myCheck5 = document.getElementById('myCheck5');
	if (myCheck1.checked && myCheck2.checked && myCheck3.checked && myCheck4.checked && myCheck5.checked){
		$.mobile.changePage("./activity_finish_checklist3acs.html", { transition: "pop" });
		//erasecheckbox();
	}else{
		$( "#myPopupDiv" ).popup( "open" );
			var delay=2000;//1 seconds
			setTimeout(function(){
				//your code to be executed after 1 seconds
				$( "#myPopupDiv" ).popup( "close" );
			},delay);
	}
}
