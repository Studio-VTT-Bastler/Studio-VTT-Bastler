/*Bei SCENEID muss die Szenen ID rein gesetzt werden. 
Dieses Makro ist dann auch aus dem Kompendium direkt in einem Journal nutzbar.
*/
const scene = game.scenes.get('SCENEID');
if (scene !== null) {
  scene.activate();
}
