export const CHANGE_CHAMPION = "CHANGE_CHAMPION";

export const findDuelTarget = function() {
  var selind = document.getElementById("duel").options.selectedIndex;
  var txt = document.getElementById("duel").options[selind].text;
  return {
    type: CHANGE_CHAMPION,
    champion: txt.toLowerCase()
    //champion: 'sumbiote supreme'
  };
};
