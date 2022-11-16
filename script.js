$('.point').click(function(){
	$('.point').css('background-color','#70615d');
	$(this).css('background-color','#419418');

  var id = this.id;
  if(id == 'point1'){

      $("#textBox").html("<b>9 April, 1806</b> | Brunel is born in Portsmouth to Marc Isambard Brunel and Sophia Kingdom - Whence he acquires his more esoteric names, and perhaps his taste in hats.");

  } else if (id == 'point2') {

      $("#textBox").html("<b>1822</b> | Brunel serves as apprentice to a French clockmaker because no French college will admit him owing to his English mother.");

  } else if (id == 'point3') {

      $("#textBox").html("<b>1831</b> | Designs the Clifton Bridge - Riots break out, investors are frightened away. The building company thereafter goes bankrupt.");

  } else if (id == 'point4') {

      $("#textBox").html("<b>1833</b> | Appointed Chief Engineer of the Great Western Railway: Plotted the whole course thereof, designed the stations, assisted in the design of the trains, changed railway widths for the giggles.");

  } else if (id == 'point5') {

      $("#textBox").html("<b>1838</b> | Done on land, Brunel moved to sea - and decided to make the world's longest ship to that point, at 230 feet long, the Great Western put to sea using sails and paddle-wheels.");

  } else if (id == 'point6') {

      $("#textBox").html("<b>1852</b> | After a few explosions, Brunel opted for a bigger ship - the Great Eastern. At 700 feet in length, it was ALSO the longest ship ever built at the time of its construction - and would remain so until 1900!");

  } else if (id == 'point7') {

      $("#textBox").html("<b>5 September, 1859</b> | Brunel suffers a stroke days before Great Eastern sets sail, caused by complications of kidney disease and a fondness for cigars. He dies aged 53.");

  } else if (id == 'point8') {

      $("#textBox").html("<b>1864</b> | The Clifton Bridge is, at long last, finished. One of Brunel's other bridges is broken up for materials, as no one knows how to make some components neccessary.");

  }
})

$('.point:nth-child(3)').css('background-color','#473B38');
