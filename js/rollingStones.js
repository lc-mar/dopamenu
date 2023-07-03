function generateRandomItems() {
    var items = [
      "Item 1",
      "Item 2",
      "Item 3",
      "Item 4",
      "Item 5"
    ];
  
    var ul = document.createElement('ul');
    var button = document.getElementById('option-buttons');
  
    for (var i = 0; i < items.length; i++) {
      var li = document.createElement('li');
      li.textContent = items[i];
      ul.appendChild(li);
    }
  
    button.appendChild(ul);
    button.style.display = 'block';
  }
  