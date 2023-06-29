const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click',() => selectOption(option))
            optionButtonsElement.appendChild(button)
        }

    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {id: 1,
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
    {id: 2,
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
    {id: 3,
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
    {id: 4,
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

{id: 5,
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
    {   id: 6,
        text: 'treat yo self',
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
        id: 7,
        text: 'what kind of quote you looking for?',
        options: [
        {
            text: 'i need to stop being a piece of shit literally this instant',
            nextText: 23
        },
        {
            text: 'move on ya moody bitch',
            nextText: 24
        },
        {
            text: 'pretty words',
            nextText: 25
        },
        {
            text: 'one of your faves',
            nextText: 26
        }
    ]
    },
    
]

startGame()