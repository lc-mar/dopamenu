//  This line selects the HTML element with the ID "text" and assigns it to the variable textElement. It will be used to display the text content of the game.
const textElement = document.getElementById('text');

// This line selects the HTML element with the ID "option-buttons" and assigns it to the variable optionButtonsElement. It will be used to display the buttons for the available options in the game.
const optionButtonsElement = document.getElementById('option-buttons');

// This line initializes an empty JavaScript object called state. It is used to keep track of the game state and store any relevant information.
let state = {};
function startGame() {
  state = {};
  showTextNode(1);
}

// This is a function that initializes the game state by resetting the state object and calling the showTextNode function with the index of the first text node (1).
function showTextNode(textNodeIndex) {
  const textNode = textNodes[textNodeIndex - 1];
  textElement.innerText = textNode.text;

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  const optionCount = textNode.options.length;
  const centerButton = optionCount % 2 === 1 && optionCount > 1;

  textNode.options.forEach((option, index) => {
    if (showOption(option)) {
      if (option.editRewriteLink) {
        const link = document.createElement('a');
        link.innerText = option.text;
        link.classList.add('btn');
        if (centerButton && index === optionCount - 1) {
          link.classList.add('btn-center');
        }
        link.href = editRewriteLink(); // Assign the generated link to href
        optionButtonsElement.appendChild(link);
      } else {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        if (centerButton && index === optionCount - 1) {
          button.classList.add('btn-center');
        }
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
      }
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

// This is an array of text nodes that represents the content and structure of the game. Each text node has an id, text, and an array of options that the player can choose from. The nextText property of an option determines the index of the next text node to be displayed.
const textNodes = [
    // id 1-10 
    {
        id: 1,
        text: 'what\'s the vibe?',
        options: [
            {
                text: 'itch brain now',
                nextText: 2
            },
            {
                text: 'boss bitch shit',
                nextText: 3
            },
            {
                text: 'more stimmy',
                nextText: 4
            },
            {
                text: 'rainy day',
                nextText: 5
            },
            {
                text: 'treat yo self',
                nextText: 6
            }
        ]
    },
    {
        id: 2,
        text: 'itch brain',
        options: [
            {
                text: 'quotes on whatever you need bb',
                nextText: 7
            },
            {
                text: 'go watch one episode of a show',
                nextText: 8
            },
            {
                text: '5 min writing prompt',
                nextText: 9
            },
            {
                text: 'learn something',
                nextText: 10
            }
        ]

    },
    {
        id: 3,
        text: 'boss bitch shit',
        options: [
            {
                text: '15 min productive laur',
                nextText: 11
            },
            {
                text: 'edit these or rewrite them',
                nextText: 12
            },
            {
                text: 'BIG tasks',
                nextText: 13
            },
            {
                text: 'fun but also BBS',
                nextText: 14
            }
        ]
    },
    {
        id: 4,
        text: 'more stimmy',
        options: [
            {
                text: 'rolling stones top 500 albums you have left',
                nextText: 15
            },
            {
                text: 'study buddy',
                nextText: 16
            },
            {
                text: 'cleaning qween',
                nextText: 17
            },
            {
                text: 'my faves',
                nextText: 18
            }
        ]
    },

    {
        id: 5,
        text: 'rainy day',
        options: [
            {
                text: '15 min productive laur',
                nextText: 19
            },
            {
                text: 'edit these or rewrite them',
                nextText: 20
            },
            {
                text: 'BIG tasks',
                nextText: 21
            },
            {
                text: 'fun but also BBS',
                nextText: 22
            }
        ]
    },
    {
        id: 6,
        text: 'treat yo self',
        options: [
            {
                text: '15 min productive laur',
                nextText: 23
            },
            {
                text: 'edit these or rewrite them',
                nextText: 24
            },
            {
                text: 'BIG tasks',
                nextText: 25
            },
            {
                text: 'fun but also BBS',
                nextText: 26
            }
        ]
    },

    {
        id: 7,
        text: 'what kind of quote you looking for?',
        options: [
            {
                text: 'i need to stop being a piece of shit literally this instant',
                nextText: 24
            },
            {
                text: 'move on ya moody bitch',
                nextText: 25
            },
            {
                text: 'pretty words',
                nextText: 26
            },
            {
                text: 'one of your faves',
                nextText: 27
            }
        ]
    },
        {
          id: 8, // Prior id: 2
          text: 'what vibe', // Blank text
          options: [
            {
              text: 'funny',
              nextText: 31 // Leads to id 31
            },
            {
              text: 'one of my go to/s',
              nextText: 32 // Leads to id 32
            },
            {
              text: 'learn SOMETHING',
              nextText: 33 // Leads to id 33
            },
            {
              text: 'quick spook',
              nextText: 34 // Leads to id 34
            }
          ]
        },
        {
          id: 9, // Prior id: 2
          text: '5 min writing prompt', // Blank text
          options: [
            {
              text: 'write a paragraph based on this sentence',
              nextText: 35 // Leads to id 35
            },
            {
              text: 'you wrote this now expand on it',
              nextText: 36 // Leads to id 36
            },
            {
              text: 'write a paragraph bio about this character',
              nextText: 37 // Leads to id 37
            },
            {
              text: 'describe this',
              nextText: 38 // Leads to id 38
            }
          ]
        },
        {
          id: 10, // Prior id: 2
          text: 'learn something', // Blank text
          options: [
            {
              text: 'a topic you\'ve wanted to look up',
              nextText: 39 // Leads to id 39
            },
            {
              text: 'brain stuffs', // adhd, attachment styles, healthy habits, etc
              nextText: 40 // Leads to id 40 
            },
            {
              text: 'star girl',
              nextText: 41 // Leads to id 41
            },
            {
              text: 'coding',
              nextText: 42 // Leads to id 42
            }
          ]
    },
        // id 11-20
        {
          id: 11, // Prior id: 3
          text: '15 min productive laur', // Blank text
          options: [
            {
              text: 'clean',
              nextText: 43 // Leads to id 43
            },
            {
              text: 'code',
              nextText: 44 // Leads to id 44
            },
            {
              text: 'personal care',
              nextText: 45 // Leads to id 45
            },
            {
              text: 'adulting',
              nextText: 46 // Leads to id 46
            }
          ]
        },
        {
          id: 12, // Prior id: 3
          text: 'edit these or rewrite them', // Blank text
          options: [
            {
              text: '',
              nextText: 47, // Leads to id 47
              requiredState: null,
              action: function () {
                var randomLink = editRewriteLink();
                var button = document.getElementById('option-buttons');
        button.innerHTML = `<a href="${randomLink}">${randomLink}</a>`;
        button.style.display = 'block';
              }
            }
          ],
          editRewriteLink: function() {
            var links = [
              "https://example.com/link1",
              "https://example.com/link2",
              "https://example.com/link3",
              "https://example.com/link4",
              "https://example.com/link5"
            ];
            var randomIndex = Math.floor(Math.random() * links.length);
            var randomLink = links[randomIndex];
            return randomLink;
          }
        },
          
        {
          id: 13, // Prior id: 3
          text: 'BIG tasks', // Blank text
          options: [
            {
              text: '',
              nextText: 51 // Leads to id 51
            },
            {
              text: '',
              nextText: 52 // Leads to id 52
            },
            {
              text: '',
              nextText: 53 // Leads to id 53
            },
            {
              text: '',
              nextText: 54 // Leads to id 54
            }
          ]
        },
        {
          id: 14, // Prior id: 3
          text: 'fun but also BBS', // Blank text
          options: [
            {
              text: '',
              nextText: 55 // Leads to id 55
            },
            {
              text: '',
              nextText: 56 // Leads to id 56
            },
            {
              text: '',
              nextText: 57 // Leads to id 57
            },
            {
              text: '',
              nextText: 58 // Leads to id 58
            }
          ]
    },
        {
          id: 15, // Prior id: 4
          text: '', // Blank text
          options: [
            {
              text: '',
              nextText: 59 // Leads to id 59
            },
            {
              text: '',
              nextText: 60 // Leads to id 60
            },
            {
              text: '',
              nextText: 61 // Leads to id 61
            },
            {
              text: '',
              nextText: 62 // Leads to id 62
            }
          ]
        },
        {
          id: 16, // Prior id: 4
          text: '', // Blank text
          options: [
            {
              text: '',
              nextText: 63 // Leads to id 63
            },
            {
              text: '',
              nextText: 64 // Leads to id 64
            },
            {
              text: '',
              nextText: 65 // Leads to id 65
            },
            {
              text: '',
              nextText: 66 // Leads to id 66
            }
          ]
        },
        {
          id: 17, // Prior id: 4
          text: '', // Blank text
          options: [
            {
              text: '',
              nextText: 67 // Leads to id 67
            },
            {
              text: '',
              nextText: 68 // Leads to id 68
            },
            {
              text: '',
              nextText: 69 // Leads to id 69
            },
            {
              text: '',
              nextText: 70 // Leads to id 70
            }
          ]
        },
        {
          id: 18, // Prior id: 4
          text: '', // Blank text
          options: [
            {
              text: '',
              nextText: 71 // Leads to id 71
            },
            {
              text: '',
              nextText: 72 // Leads to id 72
            },
            {
              text: '',
              nextText: 73 // Leads to id 73
            },
            {
              text: '',
              nextText: 74 // Leads to id 74
            }
          ]
        },
      
     
      ];
    
// This line calls the startGame function to initialize the game when the script is executed.
startGame()