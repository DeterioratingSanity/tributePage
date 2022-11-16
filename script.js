$('.point').click(function(){
	$('.point').css('background-color','#70615d');
	$(this).css('background-color','#419418');

  var id = this.id;
  if(id == 'point1'){

      $("#textBox").text("9 April, 1806 | Brunel is born in Portsmouth to Marc Isambard Brunel and Sophia Kingdom - Whence he acquires his more esoteric names, and perhaps his taste in hats.");

  } else if (id == 'point2') {

      $("#textBox").text("1822 | Brunel serves as apprentice to a French clockmaker because no French college will admit him owing to his English mother.");

  } else if (id == 'point3') {

      $("#textBox").text("1831 | Designs the Clifton Bridge - Riots break out, investors are frightened away. The building company thereafter goes bankrupt.");

  } else if (id == 'point4') {

      $("#textBox").text("1833 | Appointed Chief Engineer of the Great Western Railway: Plotted the whole course thereof, designed the stations, assisted in the design of the trains, changed railway widths for the giggles.");

  } else if (id == 'point5') {

      $("#textBox").text("1838 | Done on land, Brunel moved to sea - and decided to make the world's longest ship to that point, at 230 feet long, the Great Western put to sea using sails and paddle-wheels.");

  } else if (id == 'point6') {

      $("#textBox").text("1852 | After a few explosions, Brunel opted for a bigger ship - the Great Eastern. At 700 feet in length, it was ALSO the longest ship ever built at the time of its construction - and would remain so until 1900!");

  } else if (id == 'point7') {

      $("#textBox").text("5 September, 1859 | Brunel suffers a stroke days before Great Eastern sets sail, caused by complications of kidney disease and a fondness for cigars. He dies aged 53.");

  } else if (id == 'point8') {

      $("#textBox").text("1864 | The Clifton Bridge is, at long last, finished. One of Brunel's other bridges is broken up for materials, as no one knows how to make some components neccessary.");

  }
})

$('.point:nth-child(3)').css('background-color','#473B38');
