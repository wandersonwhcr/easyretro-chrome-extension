(function () {

  var icon = document.createElement("i");
  icon.setAttribute("class", "ri-eraser-line fill");

  var text = document.createTextNode("Unvote All");

  var button = document.createElement('button');
  button.setAttribute("class", "secondary-icon import-btn share-button");
  button.append(icon);
  button.append(text);

  button.onclick = function (event) {
    Array.from(document.getElementsByClassName('unvote-link'))
      .forEach(function (element) {
        element.click();
      });
  };

  window.onload = function () {
    var controls = document.getElementsByClassName("easy-menu-controls")[0];
    controls.append(button);
  };

})()
