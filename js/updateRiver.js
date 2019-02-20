
var datasets = {};

var indicatorNames = [
    {key: "Азот.загальний..мг.дм3", abr: "Азот.заг.", printName: "Азот загальний", description: "Входить до складу багатьох органічних сполук. У великій кількості сприяє росту мікроскопічних бактерій у воді. Може потрапити у воду з каналізаційних стоків або сільськогосподарських добрив"},

    {key: "Амоній.іони..мг.дм3", abr: "Амоній.іони", printName: "Іони амонію", description: "З’являються у воді, яку недавно забруднили органічними речовинами (зазвичай, каналізаційними стоками). В такій воді легко розвиваються мікроскопічні водорості, що у теплу погоду може призвести до «цвітіння води»"},

    {key: "БСК5..МгО.дм3", abr: "БСК5 МгО.дм3", printName: "Біохімічне споживання кисню (БСК)", description: "Це кількість кисню, яка потрібна бактеріям у воді для того, щоб очистити її від органічних забруднювачів. У природних водоймах БСК низьке. Воно зростає, коли воду забруднюють каналізаційні стоки або відходи сільськогосподарських підприємств"},

    {key: "Завислі..суспендовані..речовини..мг.дм3", abr: "Зав.сусп.реч.", printName: "Завислі (тверді) речовини", description: "Присутні в природних водоймах. Складаються з частинок глини, піску, мулу, органічних і неорганічних речовин, різних мікроорганізмів. Завислі речовини впливають на прозорість води, на температуру, склад розчинних компонентів, адсорбцію токсичних речовин, а також на склад і розподіл відкладень"},

    {key: "Кисень.розчинений.МгО2.дм3", abr: "Кис. розч", printName: "Кисень розчинений", description: "Його використовує риба для дихання. Якщо його вміст падає нижче критичного показника, риба може вимирати. Рівень кисню знижується у забрудненій воді"},

    {key: "Нітрат.іони..мг.дм3", abr: "Нітрат-іони", printName: "Нітрат-іони", description: "Добре розчинені у воді солі азотної кислоти. Якщо їх побільшало у воді, ймовірно, її забруднили стічними водами з ферм та добривами. Останні часто змиває дощами з полів. В такій воді легко розвиваються мікроскопічні водорості, що у теплу погоду може призвести до «цвітіння води»"},

    {key: "Нітрит.іони..мг.дм3", abr: "Нітрит-іони", printName: "Нітрит-іони", description: "Висока їх концентрація свідчить про те, що у воду потрапили органічні речовини зі стічних вод. Швидко розкладаються, тому висока концентрація означає, що забруднення відбулося недавно. В такій воді легко розвиваються мікроскопічні водорості, що у теплу погоду може призвести до «цвітіння води»"},

    {key: "Сульфат.іони..мг.дм3", abr: "Сульфат-іони", printName: "Сульфат-іони", description: "Зазвичай потрапляють у воду із промисловими стоками (особливо з шахт). Можуть також свідчити про забруднення води органічними речовинами, наприклад, відходами тваринного походження"},

    {key: "Перманганатна.окислюваність..мгО.дм3", abr: "Перм.окисл.", printName: "Перманганатна окислюваність", description: "Показник, який позначає загальну кількість токсичних речовин у воді. Чим він вищий, тим вода брудніша"},

    {key: "Фітопланктон..тис.клітин.дм3", abr: "Фітопланктон", printName: "Фітопланктон", description: "Невеликі водорості у воді. Високий показник означає «цвітіння води». Це робить воду непридатною для вживання і може призвести до масового вимирання риб"},

    {key: "Хлорид.іони..мг.дм3", abr: "Хлорид-іони", printName: "Хлорид-іони", description: "Високий вміст хлоридів свідчить, що воду забруднюють господарсько-побутовими і промисловими стічними водами"},

    {key: "Фосфат.іони..поліфосфати...мг.дм3", abr: "Фосфат-іони", printName: "Фосфат-іони", description: "У водоймах де підвищується вміст фосфатів збільшується кількість водоростей. Особливо це характерно ділянок водойм де вода застоюється на одному місці, або рухається повільно. Вміст сполук фосфору змінюється сезонно, мінімальна концентрації фосфатів спостерігаються звичайно навесні і влітку, максимальні – восени і взимку. Він частіше за все потрапляє із побутової хімії, через міські каналізації"},

    {key: "Хімічне.споживання.кисню..мгО.дм3", abr: "XСК5 МгО.дм3", printName: "Хімічне споживання кисню (ХСК)", description: "Кількість кисню, яка потрібна для того, щоб розклались сторонні речовини (органічні й неорганічні) у воді. Таким чином вода самоочищується від забруднювачів. Якщо ХСК різко зросло — отже, до водойми потрапило багато брудної води"},

    {key: "Синтетичні.поверхнево.активні.речовини..аніонні...мг.дм3", abr: "СПАР.аніонні", printName: "Синтетичні поверхнево-активні речовини (СПАР)", description: "Синтетичні поверхнево-активні речовини (СПАР): неорганічні та органічні речовини, які утворюють піну на поверхні води. Вони потрапляють у воду разом з каналізаційними і промисловими стоками. Призводять до росту мікроскопічних водоростей та зменшують кількість кисню, що розчиняється у воді"}

];

var riversNames = [
    // {key:"Дунай", value:"danube", lat: "24.53", lon:"48.45", scale:"10000"},
    {key: "Дунай", value: "danube", lat: "20.00", lon: "48.30", latitude: "29.5", longitude:"46.21", scale: "2700", color: "viridisScale"},
    {key: "Дністер", value: "dnister", lat: "25.53", lon: "49.00", latitude: "26.53", longitude:"48.2", scale: "4000", color: "viridisScale"},
    {key: "Дніпро", value: "dnipro", lat: "30.53", lon: "52.45", latitude: "30.53", longitude:"50.45", scale: "3000", color: "viridisScale"},
    {key: "Дон", value: "don", lat: "41.53", lon: "51.55", latitude: "37.35", longitude:"49.44", scale: "3000", color: "infernoScale"},
    {key: "Південний Буг", value: "southernbug", lat: "30.53", lon: "49.00", latitude: "30.53", longitude:"49.00", scale: "4000", color: "infernoScale"},
    {key: "Вісла", value: "wisla", lat: "25.53", lon: "54.00", latitude: "23.53", longitude:"50.50",scale: "4000", color: "infernoScale"}
];





/*Змінні для великої квітки*/
var halfRadius = 2;



var bigradius = clonedivWidth / 7;

var arc = d3.arc()
    .outerRadius(bigradius)
    .innerRadius(0);

var size = d3.scaleSqrt()
    .domain([0, 1])
    .range([0, halfRadius]);

var pie = d3.pie()
    .sort(null)
    // .value(function(d) { return d.size; });
    .value(function (d) {
        return 5;
    });

var chartMargin = {top: 10, right: 20, bottom: 20, left: 10};

var chartWidth = ((window.innerWidth * 0.65 / 3) * 1.8) - chartMargin.left - chartMargin.right,
    chartHeight = window.innerHeight/2.8 - chartMargin.top - chartMargin.bottom;

var flowerMargin = {top: 20, right: 20, bottom: 20, left: 35};
var flowerWidth = ((window.innerWidth * 0.65 / 3.5) * 1.2)- chartMargin.left - chartMargin.right,
    flowerHeight = window.innerHeight/2.8 - chartMargin.top - chartMargin.bottom;

var flowerSvg = d3.select("#big-flower").insert("svg", "#clickOnPetals")
    .attr("id", "#bigFlower")
    .attr("width", flowerWidth + flowerMargin.left + flowerMargin.right)
    .attr("height", flowerHeight + flowerMargin.top + flowerMargin.bottom);

var flowerG = flowerSvg.append("g")
    .attr('transform', 'translate(+' + flowerWidth / 2 + "," + flowerHeight / 2 + ')');


var div = d3.select("#myModal").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);





var bluRedWhite = ['#12335a', '#143d67', '#154675', '#165183', '#165b92', '#1765a0', '#1671af', '#167bbf', '#1486ce', '#1292dd', '#0e9ded', '#3aa8f5', '#64b2f4', '#9dc3f9'];

//, '#9dc6f3', '#b4d1f3', '#c8daf2'
var BlWhScale = d3.scaleQuantile() //синя шкала для річок
    .range(bluRedWhite)
    .domain([0, 9]);



var reds = ["#570c49", "#84126e", "#DD1FB9", "#EC76D5", "#f094df"];
var green = "#199eb1"; //black design

// var green = "#7bf491";
var PointColorsRed = d3.scaleQuantile()
    // .range(colorbrewer.Reds[9])
    .range(reds)
    .domain([0, 9]);

/* проекція для карти*/

var projection;
var zoom;
zoom = d3.zoom();

var zoomTrans = {x:0, y:0, scale:1};



if (window.innerWidth > 2000){
projection = d3.geoMercator()
    .scale(3500)
    .rotate([0, 0, 0])
    .center([30, 50]);

    zoom = d3.zoom()
        .scaleExtent([4, 4])
        .on('zoom', function(){

            map.redraw(d3.event.transform);

            if(d3.event.transform.k === 1){
                d3.select('#labels').style("display", "none")
            }
            if(d3.event.transform.k > 1){
                d3.select('#labels').style("display", "block")
            }
        });

}
else if (window.innerWidth < 2000){
    projection = d3.geoMercator()
        .scale(2000)
        .rotate([0, 0, 0])
        .center([30, 50]);

    zoom = d3.zoom()
        .scaleExtent([6, 6])
        .on('zoom', function(){

            zoomTrans.x = d3.event.transform.x;
            zoomTrans.y = d3.event.transform.y;
            zoomTrans.scale = d3.event.transform.k;

            map.redraw(d3.event.transform, riverForDrawId);

            if(d3.event.transform.k === 1){
                d3.select('#labels').style("display", "none")
            }
            if(d3.event.transform.k > 1){
                d3.select('#labels').style("display", "block")
            }
        });
}


var path2 = d3.geoPath()
    .projection(projection);


//tooltip for all flowers
var flowerhint = d3.select("body").append("div")
    .attr("class", "flowerhint")
    .style("opacity", 0);

var chartHint = d3.select("body").append("div")
    .attr("class", "chartHint")
    .style("opacity", 0);


//підказка про кожний показник
var indicatorHint = d3.select("#modalKeysHeadings").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


/* контейнер для svg та canvas */
var map = {};
mapHeight = window.innerHeight - 50;
map.width = mapWidth;
map.height = mapHeight;



projection.translate([map.width/2, map.height/2]);

/*------------------ Дунай ------------------------------- */
map.canvasDanube = d3.select("#body").append("canvas")
    .attr('height', map.height)
    .attr('width', map.width)
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 350")
    .attr("class", "river danube");

var ctxDanube = map.canvasDanube.node().getContext('2d');

var pathDanube = d3.geoPath()
    .projection(projection)
    // .context(ctx);
    .context(ctxDanube);


map.canvasDanube.draw = function (transform) {
    retrieve("DANUBE", d3.json, "data/DANUBE.json", function (data) {
        ctxDanube.clearRect(0, 0, map.width, map.height);
        ctxDanube.save();

        if (transform) {
            ctxDanube.translate(transform.x, transform.y);
            ctxDanube.scale(transform.k, transform.k);
        }
            ctxDanube.fillStyle = "transparent";        data.forEach(function (d) {
            ctxDanube.strokeStyle = BlWhScale(d.properties.a_DEPTH5 * 5);

                ctxDanube.lineWidth = d.properties.a_WIDTH5 / 100;

                ctxDanube.lineWidth = d.properties.a_WIDTH5 / 150;

            // ctxDanube.globalAlpha = 0.8;
            ctxDanube.beginPath();
            pathDanube(d);
            ctxDanube.fill();
            ctxDanube.stroke();
        });

        ctxDanube.restore();

    });
};






/*--------------------- Дніпро ----------------------------- */

map.canvasDnipro = d3.select("#body").append("canvas")
    .attr('height', map.height)
    .attr('width', map.width)
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 350")
    .attr("class", "river dnipro");

var ctxDnipro = map.canvasDnipro.node().getContext('2d');

var pathDnipro = d3.geoPath()
    .projection(projection)
    // .context(ctx);
    .context(ctxDnipro);

map.canvasDnipro.draw = function (transform) {
    retrieve("DNIEPR", d3.json, "data/DNIPRO.json", function (data) {
        ctxDnipro.clearRect(0, 0, map.width, map.height);
        ctxDnipro.save();

        if (transform) {
            ctxDnipro.translate(transform.x, transform.y);
            ctxDnipro.scale(transform.k, transform.k);
        }
        ctxDnipro.fillStyle = "transparent";
        data.forEach(function (d) {
            ctxDnipro.strokeStyle = BlWhScale(d.properties.a_DEPTH5 * 5);
            ctxDnipro.lineWidth = d.properties.a_WIDTH5 / 100;
            ctxDnipro.beginPath();
            pathDnipro(d);
            ctxDnipro.fill();
            ctxDnipro.stroke();
        });

        ctxDnipro.restore();
    });
};



/*----------------- Дон ------------------------ */

map.canvasDon = d3.select("#body").append("canvas")
    .attr('height', map.height)
    .attr('width', map.width)
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 350")
    .attr("class", "river don")
    .node().getContext('2d');

var pathDon = d3.geoPath()
    .projection(projection)
    // .context(ctx);
    .context(map.canvasDon);

map.canvasDon.draw = function (transform) {
    retrieve("DON", d3.json, "data/DON.json", function (data) {
        map.canvasDon.clearRect(0, 0, map.width, map.height);
        map.canvasDon.save();

        if (transform) {
            map.canvasDon.translate(transform.x, transform.y);
            map.canvasDon.scale(transform.k, transform.k);
        }
        map.canvasDon.fillStyle = "transparent";

        data.forEach(function (d) {
            map.canvasDon.strokeStyle = BlWhScale(d.properties.a_DEPTH5 * 5);
            map.canvasDon.lineWidth = d.properties.a_WIDTH5 / 100;
            map.canvasDon.beginPath();
            pathDon(d);
            map.canvasDon.fill();
            map.canvasDon.stroke();
        });

        map.canvasDon.restore();

    });
};


/*--------------------- Вісла ----------------------- */

map.canvasWisla = d3.select("#body").append("canvas")
    .attr('height', map.height)
    .attr('width', map.width)
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 350")
    .attr("class", "river wisla")
    .node().getContext('2d');

var pathWisla = d3.geoPath()
    .projection(projection)
    // .context(ctx);
    .context(map.canvasWisla);

map.canvasWisla.draw = function (transform) {
    retrieve("WISLA", d3.json, "data/WISLA.json", function (data) {

        map.canvasWisla.clearRect(0, 0, map.width, map.height);
        map.canvasWisla.save();

        if (transform) {
            map.canvasWisla.translate(transform.x, transform.y);
            map.canvasWisla.scale(transform.k, transform.k);
        }
        map.canvasWisla.fillStyle = "transparent";
        data.forEach(function (d) {
            map.canvasWisla.strokeStyle = BlWhScale(d.properties.a_DEPTH5 * 5);
            map.canvasWisla.lineWidth = d.properties.a_WIDTH5 / 100;
            map.canvasWisla.beginPath();
            pathWisla(d);
            map.canvasWisla.fill();
            map.canvasWisla.stroke();
        });

        map.canvasWisla.restore();

    });
};

/*-------------------Південний Буг ------------------- */

map.canvasBug = d3.select("#body").append("canvas")
    .attr('height', map.height)
    .attr('width', map.width)
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 350")
    .attr("class", "river southernbug")
    .node().getContext('2d');

var pathBug = d3.geoPath()
    .projection(projection)
    // .context(ctx);
    .context(map.canvasBug);

map.canvasBug.draw = function (transform) {
    retrieve("SOUTHERNBUG", d3.json, "data/SOUTHERNBUG.json", function (data) {

        map.canvasBug.clearRect(0, 0, map.width, map.height);
        map.canvasBug.save();

        if (transform) {
            map.canvasBug.translate(transform.x, transform.y);
            map.canvasBug.scale(transform.k, transform.k);
        }

        map.canvasBug.fillStyle = "transparent";
        data.forEach(function (d) {
            map.canvasBug.strokeStyle = BlWhScale(d.properties.a_DEPTH5 * 5);
            map.canvasBug.lineWidth = d.properties.a_WIDTH5 / 100;
            map.canvasBug.beginPath();
            pathBug(d);
            map.canvasBug.fill();
            map.canvasBug.stroke();
        });
        map.canvasBug.restore();
    });
};


/*-------------------- Південний Буг ------------------------------ */

map.canvasDniestr = d3.select("#body").append("canvas")
    .attr('height', map.height)
    .attr('width', map.width)
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 350")
    .attr("class", "river dnister")
    .node().getContext('2d');

var pathDniestr = d3.geoPath()
    .projection(projection)
    // .context(ctx);
    .context(map.canvasDniestr);

map.canvasDniestr.draw = function (transform) {
    retrieve("DNIESTR", d3.json, "data/DNIESTR.json", function (data) {
        map.canvasDniestr.clearRect(0, 0, map.width, map.height);
        map.canvasDniestr.save();

        if (transform) {
            map.canvasDniestr.translate(transform.x, transform.y);
            map.canvasDniestr.scale(transform.k, transform.k);
        }

        map.canvasDniestr.fillStyle = "transparent";
        data.forEach(function (d) {
            map.canvasDniestr.strokeStyle = BlWhScale(d.properties.a_DEPTH5 * 5);
            map.canvasDniestr.lineWidth = d.properties.a_WIDTH5 / 100;
            map.canvasDniestr.beginPath();
            pathDniestr(d);
            map.canvasDniestr.fill();
            map.canvasDniestr.stroke();
        });
        map.canvasDniestr.restore();
    });
};


/*------------ Draw rivers ----------------------------*/

    map.canvasDanube.draw();
    map.canvasDnipro.draw();
    map.canvasDon.draw();
    map.canvasBug.draw();
    map.canvasDniestr.draw();
    map.canvasWisla.draw();
    setTimeout(drawPoints, 100);


/*------------ Redraw rivers on zoom ------------------*/

    map.redraw = function (transform, riverForDrawId) {

        if (riverForDrawId == "danube") {
            map.canvasDanube.draw(transform);
        }
        if (riverForDrawId == "dnipro") {
            map.canvasDnipro.draw(transform);
        }
        if (riverForDrawId == "don") {
            map.canvasDon.draw(transform);
        }
        if (riverForDrawId == "southernbug") {
            map.canvasBug.draw(transform);
        }

        if (riverForDrawId == "dnister") {
            map.canvasDniestr.draw(transform);
        }
        if (riverForDrawId == "wisla") {
            map.canvasWisla.draw(transform);
        }

        if (typeof riverForDrawId === 'undefined') {
            map.canvasDanube.draw(transform);
            map.canvasDnipro.draw(transform);
            map.canvasDon.draw(transform);
            map.canvasBug.draw(transform);
            map.canvasDniestr.draw(transform);
            map.canvasWisla.draw(transform);
        }






        map.svg.style("stroke-width", 1.5 / d3.event.transform.k + "px");
        map.svg.attr("transform", d3.event.transform);
        map.svgShape.style("stroke-width", 1.5 / d3.event.transform.k + "px");
        map.svgShape.attr("transform", d3.event.transform);
        map.svgLabels.style("stroke-width", 1.5 / d3.event.transform.k + "px");
        map.svgLabels.attr("transform", d3.event.transform);
    };





d3.select('#body')
    .call(zoom).on("wheel.zoom", null);




function retrieve(layername, method, param, cb){
    if (datasets[layername]) return cb(datasets[layername]);

    return method(param, function(err, data){
        if (err) throw err;

        var filtered = topojson.feature(data, data.objects[layername])
            .features.filter(function (d) {
                // return d.properties.a_WIDTH5 > 5;
                return d;
            });

        datasets[layername] = filtered;
        return cb(filtered);
    })
}





/* -------------------- append svg  -------------------- */
var mista = [
    { name: "Вінниця", location: { latitude:28.2802,  longitude: 49.1414  }  },
    { name: "Дніпро", location: { latitude:35.0131, longitude: 48.2758 } },
    { name: "Донецьк", location: { latitude:37.4815, longitude: 48.0032 } },
    { name: "Житомир", location: { latitude: 28.3928, longitude: 50.1516 } },
    { name: "Запоріжжя", location: { latitude: 35.0818, longitude: 47.5016 } },
    { name: "Івано-Франківськ", location: { latitude: 24.4238, longitude: 48.5522 } },
    { name: "Київ", location: { latitude: 30.5238000, longitude: 50.4546600 } },
    { name: "Кропивницький", location: { latitude:32.1600, longitude: 48.3036 } },
    { name: "Луганськ", location: { latitude: 39.1831, longitude: 48.3406 } },
    { name: "Луцьк", location: { latitude: 25.1928, longitude: 50.4452 } },
    { name: "Львів", location: { latitude:24.0051, longitude: 49.4948 } },
    { name: "Миколаїв", location: { latitude:31.5937, longitude: 46.5831 } },
    { name: "Одеса", location: { latitude:30.4436, longitude: 46.2908 } },
    { name: "Полтава", location: { latitude: 34.3304 , longitude: 49.3522 } },
    { name: "Рівне", location: { latitude:26.1505, longitude: 50.3711 } },
    { name: "Сімферополь", location: { latitude: 34.06, longitude: 44.57 } },
    { name: "Суми", location: { latitude: 34.4812, longitude: 50.5443 } },
    { name: "Тернопіль", location: { latitude: 25.3541, longitude: 49.3312 } },
    { name: "Ужгород", location: { latitude: 22.1742, longitude:  48.4726} },
    { name: "Харків", location: { latitude:36.1345, longitude: 50.0021 } },
    { name: "Херсон", location: { latitude: 32.3652, longitude:  46.3824} },
    { name: "Хмельницький‎", location: { latitude: 26.5846, longitude: 49.2510 } },
    { name: "Черкаси", location: { latitude:  32.0335, longitude: 49.2640 } },
    { name: "Чернігів", location: { latitude: 31.1755, longitude: 51.2928 } },
    { name: "Чернівці", location: { latitude:25.5518, longitude: 48.1919 } }









];


map.svg =
    d3.select('#body')
        .append('svg')
        .attr("id", "flowers")
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 960 350")
        .attr('width', map.width)
        .attr('height', map.height)
        .append('g');

map.svgShape =
    d3.select('#body')
        .append('svg')
        .attr("id", "svgukraine")
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 960 350")
        .attr('width', map.width)
        .attr('height', map.height)
        .append("g");

map.svgLabels =
    d3.select('#body')
        .append('svg')
        .attr("id", "labels")
        // .attr("preserveAspectRatio", "xMinYMin meet")
        // .attr("viewBox", "0 0 960 350")
        .attr('width', map.width)
        .attr('height', map.height)
        .append("g");




/* -------------------- Ukraine -------------------------------- */
d3.json("data/ukr_shape.geojson", drawUkraine);
// d3.json("data/ukr_regions.geojson", drawUkraine);

function drawUkraine(ukraine) {
    map.svgShape.selectAll("path")
        .data(ukraine.features)
        .enter()
        .append("path")
        .attr("d", path2)
        .attr("id", "ukraine")
}


var cities = map.svgLabels
    .append("g");

// cities.selectAll("circle")
//     .data(mista)
//     .enter()
//     .append("circle")
//     .attr("transform", function(d) {
//         return "translate(" + projection([
//                 d.location.latitude,
//                 d.location.longitude
//             ]) + ")"
//     })
//     .attr("r", "0.5px")
//     .attr("fill", "white")
//     .attr("opacity", "0.2")
//     .attr("id", function (d) { return d.name; });

cities.selectAll("text")
    .data(mista)
    .enter()
    .append("text")
    .attr("transform", function(d) {
        return "translate(" + projection([
                d.location.latitude + 0.05,
                d.location.longitude
            ]) + ")"
    })
    .text(function (d) { return d.name; } )
    .attr("class", "map-cities-labels")
    .attr("font-size", "5px");







/* -------------------- Flowers -------------------------------- */
function drawPoints() {
    d3.csv("data/lastDayMeanValueAllKey2.csv", function (error, points) {
        //групуємо дані по місцю забору і даті
        var nested = d3.nest()
            .key(function (d) {
                return d.id
            })
            // .key(function (d) {
            //     return d.date
            // })
            .entries(points);


        

        /*додаємо мітки на карту по категоріям індикаторів, кожній групі індикаторів тепер можна задати окремі
         параметри а також transform
         */


        var smallFlowerForClick = map.svg.selectAll(".petal")
            .data(nested)
            .enter().append('g')
            .attr("transform", function (d) {
                return "translate(" + projection([d.values[0].lon, d.values[0].lat]) + ")";
            })
            .each(function (d, i) {
                d3.select(this).selectAll('.petal')
                    .data(pie(d.values
                        .filter(function (d) {
                                return d.size > 0;
                            }
                        )))
                    .enter()
                    .append("path")
                    .attr("class", function (d) {
                        var basin = d.data.river;
                        var filteredArray = riversNames.filter(function (obj) {
                            return obj.key === basin;
                        });
                        if (filteredArray.length > 0) {
                            return filteredArray[0].value + " petal myBtn"
                        } else {
                            return "petal myBtn"
                        }

                    })
                    .attr("transform", function (d) {
                        return r((d.startAngle + d.endAngle) / 2);
                    })

                    .attr("d", petalPath)
                    .style("stroke", "#070707")
                    .style("stroke-width", "0.1px")
                    .style("fill", function (d) {
                            if (d.data.key != "Кисень.розчинений.МгО2.дм3") {
                                if (d.data.size > 0.9) {
                                    // return PointColorsRed(d.data.size);
                                    return reds[2];
                                }
                                else {
                                    // return "#49E858"
                                    return green
                                }
                            }

                            //якщо кисень
                            if (d.data.key === "Кисень.розчинений.МгО2.дм3") {
                                if (d.data.size > 0.9) {
                                    return green;
                                }
                                else {
                                    // return "#49E858"
                                    return reds[2]
                                }


                            }

                    })

                    .on("mouseover", function (d) {
                       var targetFlower= d3.select(this.parentNode);
                        targetFlower.moveToFront();

                        // flowerhint.transition()
                        //     .duration(200)
                        //     .style("opacity", .9);
                        //
                        // flowerhint.html(d.data.name)
                        //     .style("left", (d3.event.pageX) + "px")
                        //     .style("top", (d3.event.pageY) + "px");

                    })
                    // .on("mouseout", function (d) {
                    //     flowerhint.transition()
                    //         .duration(200)
                    //         .style("opacity", 0);
                    //
                    //
                    // })

                    /*чому тут d повертає не той датасет? , що треба, а гемометрію?????*/
                .on('click touchstart', function (d) {
                        var modal = document.getElementById('myModal');
                        var span = document.getElementsByClassName("close")[0];

                        modal.style.display = "flex";
                        span.onclick = function () {
                            modal.style.display = "none";
                        };
                        window.onclick = function (event) {
                            if (event.target == modal) {
                                modal.style.display = "none";
                            }
                        };

                        var IdForChart = d.data.id;
                        var keyindicator = d.data.key;
                        var norm = d.data.norm;

                        d3.selectAll("#texturePetals").attr("value", IdForChart);
                        d3.selectAll("#texturePetals").attr("name", keyindicator);
                        // drawChart(IdForChart, indicator);
                        // updateLineChart(IdForChart)
                        // d3.selectAll(".messageCheckbox").attr("name", IdForChart);
                        // FindByAttributeValue("value", keyindicator).checked = true;


                        drawBigFlower(IdForChart);
                        drawChart(IdForChart, keyindicator);


                    })


            });


    });
}

var flowefsize = 0.08;



function petalPath(d) {
    var angle = (d.endAngle - d.startAngle) / 3,
        s = polarToCartesian(-angle, halfRadius),
        e = polarToCartesian(angle, halfRadius),
    // r = size(d.data.size),

        r = size(flowefsize),

        m = {x: halfRadius + r, y: 0},
        c1 = {x: halfRadius + r / 2, y: s.y},
        c2 = {x: halfRadius + r / 2, y: e.y};
    return "M0,0Q" + Math.round(c1.x) + "," + Math.round(c1.y * 2) + " " + Math.round(m.x + r) + "," + Math.round(m.y) + "Q" + Math.round(c2.x) + "," + Math.round(c2.y * 2) + " " + Math.round(0) + "," + Math.round(0) + "Z";
};


function r(angle) {
    return "rotate(" + (angle / Math.PI * 180) + ")";
}

function polarToCartesian(angle, radius) {
    return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
    };
}
/* end of flowers */






/* -------------------- Draw line charts -------------------------------- */
// var chartMargin = {top: 20, right: 20, bottom: 20, left: 35};
//
// // var W = (parseInt(d3.select('body').style('width'), 10) - chartMargin.left - chartMargin.right) * 0.8;
// var chartWidth = ((window.innerWidth * 0.65 / 3) * 2) - chartMargin.left - chartMargin.right,
// chartHeight = 200 - chartMargin.top - chartMargin.bottom;




var locale = d3.timeFormatLocale({
    "dateTime": "%A, %e %B %Y г. %X",
    "date": "%d.%m.%Y",
    "time": "%H:%M:%S",
    "periods": ["AM", "PM"],
    "days": ["неділя", "понеділок", "вівторок", "середа", "четвер", "пʼятниця", "субота"],
    "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
    "months": ["cічень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
    "shortMonths": ["січ", "лют", "бер", "квт", "трав", "черв", "лип", "серп", "вер", "жовт", "лист", "груд"]
});

var formatMonth = locale.format("%B"),
    formatYear = locale.format("%m-%y");


function multiFormat(date) {
    return (d3.timeYear(date) < date ? formatMonth
        : formatYear)(date);
}



// var parseTime = d3.timeParse("%d.%m.%Y");
var parseTime = d3.timeParse("%Y-%m-%d");


var chartX = d3.scaleTime()
    .rangeRound([0, chartWidth]);

var chartY = d3.scaleLinear()
    .rangeRound([chartHeight, 0]);


var valueline = d3.line()
    .x(function (d) {
        return chartX(d.date);
    })
    .y(function (d) {
        return chartY(d.value);
    });

// d3.csv("data/total_data_gather.csv", function (error, chart) {
d3.csv("data/allFlowerData.csv", function (error, chart){

    var chartSvg = d3.select("#chart")
        .append("svg")
        .attr("id", "chartToRemove")
        .attr("width", chartWidth + chartMargin.left + chartMargin.right)
        .attr("height", chartHeight + chartMargin.top + chartMargin.bottom);
    // .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("viewBox", "0 0 960 300");

    var chartG = chartSvg.append("g")
        .attr("transform", "translate(" + chartMargin.left + "," + chartMargin.top + ")");


    var idData = chart.filter(function (d) {
        return d.id === "27224"
    });

    idData.forEach(function (d) {
        d.date = parseTime(d.date);
        d.value = +d.value;
    });


    var dataData = idData.filter(function (d) {
        return d.key === 'БСК5..МгО.дм3';
    });


    dataData.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
        /* щоб не малюватись крокозяблики*/
    });

    var norm = dataData[0].norm;
    norm = +norm;

    // d3.select('#petalsData')
    //     .html(dataData[0].name);


    //yAxis
    var values = dataData.map(function (d) {
        return d.value
    });
    var yMax = d3.max(d3.values(values));
    var yMin = d3.min(d3.values(values));
    // var yticks = [yMin, +norm, yMax];
    var yticks = [+norm];
    yticks.sort(function (a, b) {
        return a - b
    });


    //xAxis
    var dates = dataData.map(function (d) {
        return d.date
    });
    var xMin = d3.min(d3.values(dates));
    var xMax = d3.max(d3.values(dates));
    // var xMax = new Date();
    chartX.domain([xMin, xMax]);
    chartY.domain([0, d3.max(dataData, function (d) {
        return d.value;
    })]);


    //Градієнт для лінійного графіку
    chartSvg.append("linearGradient")
        .attr("id", "line-gradient")
        .attr("gradientUnits", "userSpaceOnUse")
        .attr("x1", 0).attr("y1", chartY(0))
        .attr("x2", 0).attr("y2", chartY(yMax))
        .selectAll("stop")
    // var reds = ["#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"];
        .data([
            {offset: "0%", color: "#199eb1"},
            {offset: "10%", color: "#199eb1"},
            {offset: "10%", color: reds[0]},
            {offset: "30%", color: reds[0]},
            {offset: "30%", color: reds[1]},
            {offset: "50%", color: reds[1]},
            {offset: "50%", color: reds[2]},
            {offset: "70%", color: reds[2]},
            {offset: "70%", color: reds[3]},
            {offset: "90%", color: reds[3]},
            {offset: "90%", color: reds[4]},
            {offset: "100%", color: reds[4]}

        ])
        .enter().append("stop")
        .attr("offset", function (d) {
            return d.offset;
        })
        .attr("stop-color", function (d) {
            return d.color;
        });
    /*end of the gradient*/


    //Додaємо path and axis
    chartG.append("path")
        .data([dataData])
        .attr("class", "line")
        .attr("d", valueline)
        .attr("stroke", "#49E858");

    chartG.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + chartHeight + ")")
        .call(d3.axisBottom(chartX).ticks(numTicks(chartWidth)).tickSize(-chartHeight).tickFormat(multiFormat));


    chartG.append("g")
        .attr("class", "y axis")
        // .attr("transform", "translate(30,0)")//magic number, change it at will
        .call(d3.axisLeft(chartY).tickValues(yticks).tickSize(-chartWidth));


    chartG.append("text")
        .attr("id", "lineText")
        .attr("x", chartX(parseTime("2018-01-01")))
        .attr("y", function() {
            if(norm > 0){
              return chartY(norm)+10
            }
            else {
                return false
            }

        })
        .text(function() {
            if(norm > 0){
                return "норма"
            }
            else {
                return ''
            }

        });

    // d3.select("#chart").append("p")
    //     .attr("id", "units")
    //     .style("float", "right")
    //     .text("Блакитний колір лінії графіка означає, що показник знаходиться в межах норми. Рожева частина лінії може мати різні відтінки залежно від того, наскільки показник перевищує норму. Чим лінія яскравіша, тим більшим є перевищення");

    // d3.select("#chart").append("p")
    //     .attr("id", "units")
    //     .style("float", "right")
    //     .text("Одиниці вимірювання речовин - мг/дм3");
    

    // d3.select('#petalsData')
    //     .append("p")
    //     .attr("id", "placename");

    var modalKeysHeadings = d3.select('#petalsData')
        .append("div")
        .attr("id","modalKeysHeadings");


    var textTitle = chartSvg.append("g");

    textTitle.append("text")
    // modalKeysHeadings.append("text")
        .attr("id", "keyHeading")
        .attr("x", chartX(parseTime("2014-01-01")))
        .attr("y", 40)
        .attr("fill", "black")
        .attr("font-size", "14px")
        .attr("text-anchor", "start")
        .style("font-weight", "bold")
        .style("letter-spacing", "1px")
        .style("cursor", "help");


    textTitle.append("svg:title")
        .attr("id", "keyimgtooltip")
        .attr("width", 100)
        .text("Триває завантаження даних, почекайте")
    ;



    textTitle.insert("rect", "text")
    // modalKeysHeadings.append("text")
        .attr("x", chartX(parseTime("2014-01-01"))-5)
        .attr("y", 25)
        .attr("fill", "white")
        .attr("opacity", "0.8")
        .attr("width", 0)
        .attr("height", 20);



    $("body").on('DOMSubtreeModified', "#keyHeading", function() {
        textTitle.select("rect")
                    .transition()
                    .duration(300)
                    .attr("width", function() {
                        var textwidth = $("#keyHeading")[0].getBoundingClientRect()
                        return textwidth.width + 10
                    })
    });

    // $("path.particles").on("click", function(d) {
    //     setTimeout(function(){
    //         d3.select("rect")
    //             .transition()
    //             .duration(300)
    //             .attr("width", function() {
    //                 var textwidth = $("#keyHeading")[0].getBoundingClientRect()
    //                 return textwidth.width
    //             })
    //     }, 500)
    //
    // })

    // chartSvg.append("svg:image")
    //     .attr("id", "keyimg")
    //     .attr("xlink:href", "img/question.svg")
    //     .attr("x", chartX(parseTime("2014-01-01")) - 25)
    //     .attr("y", 25)
    //     .attr("width", 10)
    //     .attr("height", 10)
    //     .attr("fill", "white")
    //     .append("svg:title")
    //     .attr("id", "keyimgtooltip")
    //     .attr("width", 100)
    //     .text("Триває завантаження даних, почекайте")


    modalKeysHeadings.append("img")
        .attr("id", "texturePetals")
        .attr("src", "img/eye-white.png")
        .attr("title", "Версія для користувачів з вадами зору. Пелюстки з діагональною полоскою - неналежна якість за обраним показником")
        .on("click", function () {
        $(this).toggleClass("eye-clicked");
        var id = $("#texturePetals").attr("value");
        var key = $("#texturePetals").attr("name");

        drawBigFlower(id);
        // drawPoints();


    });


});




/* кількість ticks для вісі Х*/
function numTicks(widther) {
    if (widther <= 900) {
        return 4
        console.log("return 4")
    }
    else {
        return 8
        console.log("return 5")
    }
}

/* end of line chart*/

d3.selection.prototype.moveToFront = function() {
    return this.each(function(){
        this.parentNode.appendChild(this);
    });
};




//----------- спроба додати внопку зуму----------------



d3.select("#zoomIn").on("click touchstart", function (d) {
    var x = projection([riverForZoomLat,riverForZoomLon])[0],
        y = projection([riverForZoomLat,riverForZoomLon])[1],
        scale = 5,
        translate = [map.width / 2 - scale * x, map.height / 2 - scale * y];

    d3.select("#body")
        .transition().duration(750)
        .call(zoom.transform, d3.zoomIdentity
            .scale(scale)
            .translate(translate[0]/scale,translate[1]/scale)
    );

    d3.select("#zoomIn").style("display", "none");
    d3.select("#zoomOut").style("display", "block");
    // var wwwww = d3.zoomIdentity.translate(0,0).scale(scale);
    // d3.select("#body").call(zoom.transform, wwwww);
});

d3.select("#zoomOut").on("click touchstart", function (d) {
    var x = projection([riverForZoomLat,riverForZoomLon])[0],
        y = projection([riverForZoomLat,riverForZoomLon])[1],
        scale = 1;

    d3.select("#body")
        .transition().duration(750)
        .call(zoom.transform, d3.zoomIdentity
        .scale(scale)
        .translate(0,0)
    );

    d3.select("#zoomOut").style("display", "none");
    d3.select("#zoomIn").style("display", "block");
    // var wwwww = d3.zoomIdentity.translate(0,0).scale(scale);
    // d3.select("#body").call(zoom.transform, wwwww);
});


window.onload = function(){
        document.getElementById('zoomIn').click();
};


//-------------------------------------------------


$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

