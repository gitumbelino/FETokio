



window.onload = setInterval(() => {


    let date = new Date();

    let time = {

        year: "numeric",
        month: "long",
        weekday: "long",
        day: "numeric"
    };


    let dateTimeFormat = new Intl.DateTimeFormat("pt-PT", time);
    const timeParts = dateTimeFormat.formatToParts(date);

    let year = timeParts.find((element) => element.type === "year");
    let month = timeParts.find((element) => element.type === "month");
    let weekday = timeParts.find((element) => element.type === "weekday");
    let day = timeParts.find((element) => element.type === "day");


    let clock = date.toLocaleTimeString("pt-PT");

    // ∙ O texto de saída será no seguinte formato: "Hoje é segunda-feira, 15 de Novembro de 2022, e são 15:29 horas.
    message.innerHTML = `


    Hoje é ${weekday.value}, <br> ${day.value} de
    ${month.value} de ${year.value}, <br> e  são
    ${clock} horas.
    
    `;

}, 1000)
//Nota: Para complementar o exercício, pode colocar também os segundos, e utilizar
// a função setInterval() para atualizar, a cada segundo (1000ms), a informação


