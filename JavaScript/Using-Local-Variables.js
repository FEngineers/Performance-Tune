/**
 * Using Local Variables to Save
 *
 */

/**
 * Slow
 * @returns {string}
 */
function collectionGlobal () {
  var coll = document.getElementsByTagName('div'), len = coll.length, name = '';

  for (var count = 0; count < len; count++) {
    name = document.getElementsByTagName('div')[count].nodeName;
    name = document.getElementsByTagName('div')[count].nodeType;
    name = document.getElementsByTagName('div')[count].tagName;
  }

  return name;
}

/**
 * Quicker
 * @returns {string}
 */
function collectionLocal () {
  var coll = document.getElementsByTagName('div'), len = coll.length, name = '';
  for (var count = 0; count < len; count++) {
    name = coll[count].nodeName;
    name = coll[count].nodeType;
    name = coll[count].tagName;
  }

  return name;
}

/**
 * Quickest
 * @returns {string}
 */
function collectionNodesLocal () {
  var coll = document.getElementsByTagName('div'), len = coll.length, name = '', el = null;
  for (var count = 0; count < len; count++) {
    el = coll[count];
    name = el.nodeName;
    name = el.nodeType;
    name = el.tagName;
  }

  return name;
}
