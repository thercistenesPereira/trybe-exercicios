window.onload = () => { 
    const setBackgroudColor = (color) => {
        let content = document.querySelector('.content'); 
        content.style.backgroundColor = color 
        localStorage.setItem('Background', color)
    }

    const setColor = (color) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.color = color
            
        }
        localStorage.setItem('Color', color)
    }

    const setFontSize = (size) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0;index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontSize = size;
        }
        localStorage.setItem('FontSize', size)
    }

    const setLineHeight = (height) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.lineHeight = height;
        }
        localStorage.setItem('LineHeight', height)
    }

    const setFontFamily = (family) => {
        let paragraphs = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraphs.length; index += 1) {
            paragraphs[index].style.fontFamily = family;
        }
        localStorage.setItem('FontFamily', family)
    }

    // Cor de fundo da tela;
    let btnBackgroundColor = document.querySelectorAll('#background-color > button');
    for(let index = 0; index < btnBackgroundColor.length; index += 1) {
        btnBackgroundColor[index].addEventListener('click', (event)=> {
            setBackgroudColor(event.target.innerHTML);
        })
    }

    // Cor do texto;
    let btnColor = document.querySelectorAll('#font-color > button');
    for(let index = 0; index < btnColor.length; index += 1){
        btnColor[index].addEventListener('click', (event)=> {
            setColor(event.target.innerHTML);
        })
    };

    // Tamanho da fonte;
    let btnFontSize = document.querySelectorAll('#font-size > button');
    for (let index = 0; index < btnFontSize.length; index += 1) {
        btnFontSize[index].addEventListener('click', (event)=> {
            setFontSize(event.target.innerHTML);
        })
    }
    
    // Espaçamento entre as linhas do texto;
    let btnLineHeight = document.querySelectorAll('#line-height > button');
    for (let index = 0; index < btnLineHeight.length; index += 1) {
        btnLineHeight[index].addEventListener('click', (event) => {
            setLineHeight(event.target.innerHTML);
        })
    }

    // Tipo da fonte (Font family).
    let btnFontFamily = document.querySelectorAll('#font-family > button');
    for (let index = 0; index < btnFontFamily.length; index += 1) {
        btnFontFamily[index].addEventListener('click', (event)=> {
            setFontFamily(event.target.innerHTML);
        })
    }

    const initialize = ()=> {
        let getBackgroundColor = localStorage.getItem('Background');
        setBackgroudColor(getBackgroundColor);

        let getColor = localStorage.getItem('Color');
        setColor(getColor);

        let getFontSize = localStorage.getItem('FontSize');
        setFontSize(getFontSize);

        let getLineHeight = localStorage.getItem('LineHeight');
        setLineHeight(getLineHeight);

        let getFontFamily = localStorage.getItem('FontFamily');
        setFontFamily(getFontFamily);
    };
   initialize();
}




