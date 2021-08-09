function wpisz_do_elementu(element,tekst)
{
    const pusty = document.querySelector(element);
    pusty.innerHTML = tekst;
}

wpisz_do_elementu('.section__paragraph--js','Wpisywanie treści do HTML-a jak szef 😎');


function powitanie(imie,wiek)
{
    console.log(`Witaj ${imie} jak tam życie mając ${wiek} lat? Jak tam pogoda? 😳`);
    return `Witaj ${imie} jak tam życie mając ${wiek} lat? Jak tam pogoda? 😳`;
}

powitanie('Maciek',17);


//wpisz_do_elementu('.section__paragraph--js',powitanie('Maciek',17));

