function changeImages(id) {
    let imga = document.getElementById(id).getAttribute('src');
    document.getElementById('main-imga').setAttribute('src',imga);
}