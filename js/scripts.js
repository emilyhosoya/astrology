/*
 * Replace all SVG images with inline SVG
 */
jQuery('input.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

jQuery('input.equalsvg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});


//vars for first group of signs
var firstsign1=false;
var firstsign2=false;
var firstsign3=false;
var firstsign4=false;
var firstsign5=false;
var firstsign6=false;
var firstsign7=false;
var firstsign8=false;
var firstsign9=false;
var firstsign10=false;
var firstsign11=false;
var firstsign12=false;




//click stuff for firstaries
$("#firstaries").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign1==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign1=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign1=false;}
									});

//click stuff for firsttaurus
$("#firsttaurus").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign2==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign2=true;
		//if any other is ON, turn them off
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign2=false;}
									});

//click stuff for firstgemini
$("#firstgemini").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign3==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign3=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign3=false;}
									});

//click stuff for firstcancer
$("#firstcancer").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign4==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign4=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign4=false;}
									});

//click stuff for firstleo
$("#firstleo").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign5==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign5=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign5=false;}
									});

//click stuff for firstvirgo
$("#firstvirgo").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign6==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign6=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign6=false;}
									});

//click stuff for firstlibra
$("#firstlibra").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign7==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign7=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign7=false;}
									});

//click stuff for firstscorpio
$("#firstscorpio").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign8==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign8=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign8=false;}
									});

//click stuff for firstsagittarius
$("#firstsagittarius").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign9==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign9=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign9=false;}
									});

//click stuff for firstcapricorn
$("#firstcapricorn").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign10==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign10=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign10=false;}
									});

//click stuff for firstaquarius
$("#firstaquarius").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign11==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign11=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
		if(firstsign12==true){
			$("#firstpisces").toggleClass("selectedfirst");
			firstsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign11=false;}
									});

//click stuff for firstpisces
$("#firstpisces").on("click",function(){
	//if div isn't ON, turn it on
	if(firstsign12==false)
	{
		$(this).toggleClass("selectedfirst");
		firstsign12=true;
		//if any other is ON, turn them off
		if(firstsign2==true){
			$("#firsttaurus").toggleClass("selectedfirst");
			firstsign2=false;}
		if(firstsign3==true){
			$("#firstgemini").toggleClass("selectedfirst");
			firstsign3=false;}
		if(firstsign4==true){
			$("#firstcancer").toggleClass("selectedfirst");
			firstsign4=false;}
		if(firstsign5==true){
			$("#firstleo").toggleClass("selectedfirst");
			firstsign5=false;}
		if(firstsign6==true){
			$("#firstvirgo").toggleClass("selectedfirst");
			firstsign6=false;}
		if(firstsign7==true){
			$("#firstlibra").toggleClass("selectedfirst");
			firstsign7=false;}
		if(firstsign8==true){
			$("#firstscorpio").toggleClass("selectedfirst");
			firstsign8=false;}
		if(firstsign9==true){
			$("#firstsagittarius").toggleClass("selectedfirst");
			firstsign9=false;}
		if(firstsign10==true){
			$("#firstcapricorn").toggleClass("selectedfirst");
			firstsign10=false;}
		if(firstsign11==true){
			$("#firstaquarius").toggleClass("selectedfirst");
			firstsign11=false;}
		if(firstsign1==true){
			$("#firstaries").toggleClass("selectedfirst");
			firstsign1=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedfirst")
		firstsign12=false;}
									});


//vars for second group of signs
var secondsign1=false;
var secondsign2=false;
var secondsign3=false;
var secondsign4=false;
var secondsign5=false;
var secondsign6=false;
var secondsign7=false;
var secondsign8=false;
var secondsign9=false;
var secondsign10=false;
var secondsign11=false;
var secondsign12=false;

//click stuff for secondaries
$("#secondaries").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign1==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign1=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign1=false;}
									});

//click stuff for secondtaurus
$("#secondtaurus").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign2==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign2=true;
		//if any other is ON, turn them off
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign2=false;}
									});

//click stuff for secondgemini
$("#secondgemini").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign3==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign3=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign3=false;}
									});

//click stuff for secondcancer
$("#secondcancer").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign4==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign4=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign4=false;}
									});

//click stuff for secondleo
$("#secondleo").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign5==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign5=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign5=false;}
									});

//click stuff for secondvirgo
$("#secondvirgo").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign6==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign6=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign6=false;}
									});

//click stuff for secondlibra
$("#secondlibra").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign7==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign7=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign7=false;}
									});

//click stuff for secondscorpio
$("#secondscorpio").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign8==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign8=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign8=false;}
									});

//click stuff for secondsagittarius
$("#secondsagittarius").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign9==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign9=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign9=false;}
									});

//click stuff for secondcapricorn
$("#secondcapricorn").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign10==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign10=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign10=false;}
									});

//click stuff for secondaquarius
$("#secondaquarius").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign11==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign11=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
		if(secondsign12==true){
			$("#secondpisces").toggleClass("selectedsecond");
			secondsign12=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign11=false;}
									});

//click stuff for secondpisces
$("#secondpisces").on("click",function(){
	//if div isn't ON, turn it on
	if(secondsign12==false)
	{
		$(this).toggleClass("selectedsecond");
		secondsign12=true;
		//if any other is ON, turn them off
		if(secondsign2==true){
			$("#secondtaurus").toggleClass("selectedsecond");
			secondsign2=false;}
		if(secondsign3==true){
			$("#secondgemini").toggleClass("selectedsecond");
			secondsign3=false;}
		if(secondsign4==true){
			$("#secondcancer").toggleClass("selectedsecond");
			secondsign4=false;}
		if(secondsign5==true){
			$("#secondleo").toggleClass("selectedsecond");
			secondsign5=false;}
		if(secondsign6==true){
			$("#secondvirgo").toggleClass("selectedsecond");
			secondsign6=false;}
		if(secondsign7==true){
			$("#secondlibra").toggleClass("selectedsecond");
			secondsign7=false;}
		if(secondsign8==true){
			$("#secondscorpio").toggleClass("selectedsecond");
			secondsign8=false;}
		if(secondsign9==true){
			$("#secondsagittarius").toggleClass("selectedsecond");
			secondsign9=false;}
		if(secondsign10==true){
			$("#secondcapricorn").toggleClass("selectedsecond");
			secondsign10=false;}
		if(secondsign11==true){
			$("#secondaquarius").toggleClass("selectedsecond");
			secondsign11=false;}
		if(secondsign1==true){
			$("#secondaries").toggleClass("selectedsecond");
			secondsign1=false;}
	}
	else{//if is already ON, turn OFF}
		$(this).toggleClass("selectedsecond")
		secondsign12=false;}
									});



// Plus to equal sign
window.onload = switchplus;
function switchplus () 
{
	document.getElementById("plus").onclick = hideplus;
}

function hideplus() 
{
	document.getElementById("plus").setAttribute("class", "hidden");
	document.getElementById("equal").setAttribute("class", "");
}



// $(document).ready(function() {
// 	if(($('.selectedfirst').length > 0) && ($('.selectedsecond').length > 0)) {
// 		$('#plus').attr('class', 'hidden');
// 		$('#equal').attr('class', '');
// 	}
// });



// Fancybox on click
$('#equal').on('click', function(){
    $.fancybox({
        width: 400,
        height: 400,
        autoSize: false,
        href: './ajax.php',
        type: 'ajax'
    });
});


//Browser Support Code
function ajaxFunction(){
	var ajaxRequest;  // The variable that makes Ajax possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			document.myForm.time.value = ajaxRequest.responseText;
		}
	}
	var first_sign_selected = document.querySelector("li.selectedfirst > input");
	var second_sign_selected = document.querySelector("li.selectedsecond > input");
	var first_sign = $(first_sign_selected).value;
	var second_sign = $(second_sign_selected).value;
	var queryString = "?first_sign=" + first_sign + "&second_sign=" + second_sign;
	ajaxRequest.open("GET", "ajax.php" + queryString, true);
	ajaxRequest.send(null); 
}