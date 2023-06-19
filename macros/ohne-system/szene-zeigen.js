/*Bei SCENEID muss die ID der Szene eingesetzt werden.
Das Makro zeigt dann die Szene an, aktiviert sie aber nicht.
Es kann direkt vom Kompendium aus mit einem Journal Entry genutzt werden.
*/
const scene = game.scenes.get('SCENEID');
if (scene !== null) {
  scene.activate();
}
