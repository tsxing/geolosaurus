function loadSearchData() {
  let terms = [
     'Drainage: dendritic, rectangular, trellis, pinnate, parallel, annular, barbed, centripetal, radial',
    'Earthquake types: tectonic, volcanic, collision, explosion',
    'Faults: dip slip, normal, reverse, thrust, strike slip, oblique',
    'Groundwater: zone of aeration/saturation, aquifers, aquicludes, artisan wells, confined, unconfined layers, permeability, porisity, recharge, water table',
    'Hydrographs: lag time, Hjulstrom, Falling limb, Caprock model',
    'Instruments: actinometer, altimeter, atmometer, flumes, lysimeters, etc',
    'Karst: alvar, caves, caverns, limestone, doline, kegel, windows, palsa, paleokarst, springs, speleothems, static, talik, thermo, etc',
    'Lake qualities: monomictic, dimictic, turnovers',
    'Landforms: aeolian, alluvial fans, fjords, arroyos, bedrock, colluvial, deltas, eskers, streams, levees, pingos, point bars, etc',
    'Melting types: decompression, flux, heat, partial',
    'Mineral properties: cleavage, color, fluorescence, diaphaneity, habit, hardness, luster, streak, twinning',
    'Ologies: geomorphology, geology, glaciology, limnology, lithology, petrology, palynology, orology, etc ',
    'Plate boundaries: convergent, divergent, transform, passive, active',
    'Pollution: point source, nonpoint source, plume, pollutant, etc',
    'Rock intrusions: batholiths, country rock, dyke, sills, xenoliths, ophiolite, pipe, pluton',
    'Rock types: igneous, metamorphic, sedimentar, extrusive, intrusive, clastic, organic',
    'Structure: Crust, lithosphere, aesthenosphere, mantle, D double prime, outer/inner core', 
    'Wetlands: bogs, marshes, swamps, peat, fens',
    'Volcanoes: Shield, stratovolcanoes (composite), cinder cones', 

    'Geolosaurus: you found the easter egg!:)',
  ];

  // Get the HTML element of the list
  let list = document.getElementById('list');
// Add each data item as an <a> tag
  terms.forEach((definition)=>{
    let a = document.createElement("a");
    a.innerText = definition;
    a.classList.add("listItem");
    list.appendChild(a);
  });
};



function search() {
  let listContainer = document.getElementById('list');
  let listItems = document.getElementsByClassName('listItem');
  let input = document.getElementById('searchbar').value
input = input.toLowerCase(); 

  let noResults = true;
  for (i = 0; i < listItems.length; i++) { 
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
        listItems[i].style.display="none";
        continue;
    }
    else {
        listItems[i].style.display="flex";
        noResults = false; 
    }
}
  listContainer.style.display = noResults ? "none" : "block";
}





/* const topics =[
  {name: 'Earth interior: crust, lithosphere, asthenosphere, mantle, outer/inner core, etc!'},
  {name: 'Earthquake types: Tectonic, volcanic, collision, and explosion earthquakes'},
  {name: 'Faults: dip-slip, strike-slip, fault forces (shear, tension, compressional), etc. '},
  {name: 'Groundwater: zone of aeration, saturation, aquifer, aquiclude, artisan wells, etc.'},
  {name: 'Instruments: secchi disk, lysimeter, gauges, etc.'},
  {name: 'Karst: dissolving of limestone, types of karst, springs, sinkholes, caverns, etc. '},
  {name: 'Landforms: types, terms, etc. includes river-forms as well.'},
  {name: 'Melting types: decompressional melting, flux melting, etc.'},
  {name: 'Drainage Systems: dendritic, rectangular, parallel, trellis, deranged, pinnate, etc. Includes drainage ordering.'},
  {name: 'Rock Intrusions: batholiths, sills, dykes, xenoliths and more.'},
  {name: 'Mineral Properties: luster, fluorescence, cleavage, streak, color, twinning, etc.'},
  {name: 'Rock types: igneous, extrusive, intrusive, metamorphic, sedimentary.'},
  {name: 'Hydrographs: diagrams, models, classifications, Hjulstrom, etc.'},
{name: 'Volcano types: shield, cinder cone, composite (stratovolcano), maar, submarine volcanoes.'},
  {name: 'Wetlands: bogs, marshes, fens, swamps, etc.'},
  {name: 'Lake qualities: monomictic, dimictic, turnovers,'},
  
]
*/


