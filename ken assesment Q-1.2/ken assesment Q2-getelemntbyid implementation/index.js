function getElementById(id) {
    let match = null;
    const doFind = node => {
      if (!match && node.id === id) match = node;
      if (!match) return [...node.childNodes].find(doFind);
    }
    doFind(document.body);
    return match;
  }
  console.log(getElementById('subchild').innerHTML);