$(document).ready(function () {
    //Get random color and quote
    changeContent();
});


//Get random color
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = "#";
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeContent() {

    document.getElementById("quotebox").innerHTML = newArrayHtml();
    function newArrayHtml() {
        var randomNumber = randomQuoteLocation();
        return "<p id='randomquote' class='text-center'><i class='fa fa-quote-left' aria-hidden='true'></i>" + " " + quotes[randomNumber][0] + "</p><p class='text-right' id='whosaid'>-" + quotes[randomNumber][1] + "</p> <button class='button centered' id='newQuoteBtn' onclick='changeContent()'>Uusi mietelause</button><div id='twitter-box'></div>";
    }
    document.getElementById("newQuoteBtn").style.backgroundColor = randomColor();

    document.getElementsByTagName("BODY")[0].style.backgroundColor = document.getElementById("newQuoteBtn").style.backgroundColor;

    document.getElementById("randomquote").style.color = document.getElementById("newQuoteBtn").style.backgroundColor;

    document.getElementById("whosaid").style.color = document.getElementById("newQuoteBtn").style.backgroundColor;


    var twitterText = document.getElementById("randomquote").textContent + " " + document.getElementById("whosaid").textContent;



    twttr.widgets.createShareButton(
        document.URL,
        document.getElementById('twitter-box'),
        {
            text: twitterText
        }
    );


};

function randomQuoteLocation() {
    return Math.floor(Math.random() * quotes.length);
}

//Quotes
var quotes = [
    ["Only I can change my life. No one can do it for me.", "Joonas Kinnunen"], ["Life can be complicated. It can be simple. It can be happy or sad.", "Anonymous"],

    ["Elämä ei ole odottamista, toivomista ja haaveilemista, se on tekemistä, olemista ja joksikin tulemista. Se on sitä mitä aiot tehdä sen jälkeen kun olet lukenut tämän.", "Mike Dooley"],

    ["Ihmiset, jotka antavat tapahtumien ja olosuhteiden määrätä elämänsä kulun, elävät reaktiivisesti. He eivät ole elämänsä herroja, he vain reagoivat elämään.", "Stedman Graham"],

    ["Jos pyrin korvaamaan nöyryyden kommunikaatiotekniikoilla, epäonnistun johtajana.", "Alexandre Havard"],

    ["Ei kukaan opi tekemättä virheitä. Mitä parempi tyyppi on kyseessä, sitä enemmän hän tulee tekemään virheitä – sillä sitä enemmän hän kokeilee uusia asioita. En koskaan ylentäisi sellaista henkilöä korkeisiin tehtäviin, joka ei ole tehnyt virheitä, suuriakin sellaisia. Muussa tapauksessa hän suoriutuisi enintään keskinkertaisesti, ja mikä on vakavampaa, ei osaisi nähdä virheitä ajoissa eikä korjata niitä.", "Peter F. Drucker"],

    ["Temperamentti ei siis ole este johtajuudelle. Oikea este on luonteen puute, joka kuluttaa moraalisen energiamme ja tekee meistä soveltumattomia johtamiseen.", "Alexandre Havard"],

    ["Viisautta kutsutaan joskus sydämen tiedoksi. Tällä tarkoitetaan sitä, että rakkaus – passioista korkein – valaisee järkemme palvelemaan rakkaitamme paremmin.", "Alexandre Havard"],

    ["Realismi on kyky säilyttää sielun jaloimmat kaipaukset sen huokauksista huolimatta.", "Alexandre Havard"], ["Sinun on itse hoidettava oma kasvamisesi, oli isoisäsi kuinka pitkä tahansa.", "Irlantilainen sanonta"],

    ["Kun menneitä päätöksiä ja niiden seurauksia arvioidaan kriittisesti syntipukkia kuitenkaan etsimättä, on edetty suuri harppaus kohti ilmapiiriä, jossa totuus tulee kuulluksi. Jos yrityksessä on oikeat ihmiset, syyllistä ei tarvitse etsiä juuri koskaan, vaan analysoinnissa voidaan keskittyä virheiden ymmärtämiseen ja niistä oppimiseen.", "Jim Collins"],

    ["Äidit ovat vaistomaisia filosofeja.", "Harriet Beecher Stowe"],

    ["Äitini oli kaunein koskaan kohtaamani nainen. Kaikesta mitä olen, saan kiittää äitiäni. Elämäni onnistumiset ovat häneltä oppimani moraalin ja häneltä saamani älyllisen ja fyysisen kasvatuksen ansiota.", "George Washington"],

    ["Aikuiset eivät koskaan ymmärrä mitään, eivätkä lapset jatkuvasti jaksa selittää heille asioita.", "Antoine de Saint-Exupéry"],

    ["Työpaikalla ajattelet kotiin jääneitä lapsiasi, kotona ajattelet keskeneräisiä töitäsi. Tämä kamppailu raivoaa jatkuvasti sisimmässäsi.", "Golda Meir"],

    ["Heti kun lapsi on lähtenyt huoneesta, sikin sokin lojuvat lelut muuttuvat hellyttäviksi.", "Ralph Waldo Emerson"],

    ["Jos haluat lastesi kehittyvän, anna heidän kuulla mitä kaunista kerrot heistä toisille.", "Haim Ginott"],

    ["Menestyminen ei ole avain onnellisuuteen. Onnellisuus on avain menestymiseen. Jos pidät siitä mitä teet, onnistut varmasti.", "Herman Cain"],

    ["Kun me todella tiedämme, että elämä on vaikeaa — todella ymmärrämme ja hyväksymme sen — niin elämä ei enää olekaan vaikeaa.", "Psykiatri M. Scott Peck, Rakkauden psykologia"],

    ["Päätä mitkä ovat korkeimmat arvosi ja päämääräsi. Ole rohkea ja sano hymyillen ja anteeksi pyytämättä ’ei’ muille asioille. Ja kun teet näin, entistä isompi ’kyllä’ hehkuu sisälläsi.", "Stephen Covey"],

    ["Elämä on yliopisto, jossa kaikki ovat opettajia. Kun heräät, muista mennä kouluun.", "Tuntematon"],

    ["Vaikeimpia asioita poliitikoille on valita oikea syrjäänvetäytymisen hetki.", "Talleyrand"],

    ["Ei ole väliä sillä, miten ihminen kuolee, mutta kylläkin sillä, miten hän elää.", "Samuel Johnson"],

    ["Sinun täytyy uskaltaa erota joukosta. Jokaisen totuutta rakastavan ihmisen täytyy oppia olemaan yksin muiden joukossa, ajatella yksin muiden puolesta ja, jos tarvitaan, muita vastaan.", "Kirjailija Romain Rolland"],

    ["Et koskaan tule muuttamaan elämääsi, ellet muuta jotain mitä teet päivittäin.", "Mike Murdock"],

    ["Minun elämäni yhtenä johtotähtenä on ollut: kun unohtaa sen, mitä ei voi muuttaa, on onnellinen.", "Arvo Ylppö"],

    ["Parempi epäonnistua siinä, missä haluaa onnistua, kuin onnistua yhdentekevässä.", "Torsti Lehtinen"],

    ["Siemen, jonka tänään kylvät, ei tuota satoa ennen huomista. Siitä syystä et ole yhtä kuin tämänhetkiset saavutuksesi. Tämänhetkisistä saavutuksistasi näkyy, millainen olet ollut.", "James A. Ray"],

    ["Aikuisuuteen kuuluu elämän risaisuuden hyväksyminen. Kun tuhannennen kerran antaa itselleen anteeksi samasta asiasta, ei ole enää varaa tuomita muita.", "Tommy Hellsten"],

    ["Elämä on ihanaa, vaikka olemmekin täällä kärsiäksemme. Minun mielestäni hän on rikkain, joka voi eniten kärsiä.", "Jean Sibelius"],

    ["Kaikissa elämämme vaiheissa on aineksia iloon, niistä on vain otettava vaarin.", "Espanjalainen sananlasku"],

    ["Käsittämättömintä maailmassa on se, että se on käsitettävissä.", "Albert Einstein"],

    ["Elämä ilman kyyneliä on autiomaa ilman sadepisaraa.", "Espanjalainen sananlasku"],

    ["Suurin osa ihmisistä on olemassa, mutta ei elä.", "Benjamin Disraeli"],

    ["Elämme vain murto-osan elämästämme.", "Henry Thoreau"],

    ["Elämä on arvokasta vain jos sillä on jokin arvokas kohde.", "Friedrich Hegel"],

    ["Ihmisen itsensä ja hänen kohtalonsa on aina oltava valokeilassa kaikissa teknisissä pyrkimyksissä; Älkää koskaan unohtako tätä graafisten käyrienne ja yhtälöittenne keskellä.", "Albert Einstein"],

    ["On opittava kärsimään voidakseen elää.", "Italialainen sananlasku"],

    ["Yhä uudelleen ajattelen pienet seikkaluni, kun rannikon tuulen mukana ajelehdin kajakissani ja luulin olevani vaarassa. Nuo pienet  pelkoni, joita luulin niin suuriksi,  kun kaikki tärkeät asiat minun oli saavutettava. Ja kuitenkin on olemassa vain  yksi tärkeä asia, tämä ainoa: elää nähdäkseen majoissa ja matkoilla suuren päivän joka koittaa ja valon joka maailman täyttää.", "Eskimoruno"],

    ["Ihminen on onneton, koska hän ei tiedä olevansa onnellinen.", "Fjodor Dostojevski"],

    ["Ihminen joka ei tee virheitä ei tavallisesti tee muutakaan.", "William Magee"],

    ["Parasta menestyksessä on tieto, ettei se ole tavoittelemisen arvoista.", "Liv Ullmann"],

    ["Hän elää uudella tavalla: oikein.", "Endre Ady"],

    ["Me, jotka elimme keskitysleirissä, voimme muistaa ihmisiä, jotka kulkivat parakeissa lohduttaen muita, antaen pois viimeisen leipäpalansa. Heitä oli ehkä lukumääräisesti vähän, mutta he antavat riittävän todisteen siitä, että ihmiseltä ei voi ottaa pois viimeistä inhimillistä vapautta; vapautta valita oma suhtautumisensa mihin tahansa annetuun tilanteeseen, vapautta valita oma tiensä.", "Viktor Frankl"],

    ["En ole koskaan tavannut ketään, joka kuolinvuoteellaan olisi toivonut, että olisi viettänyt enemmän aikaa töissä.", "Kirjoitus vessan seinällä"],

    ["Sinulla voi olla tottumuksia, jotka heikentävät sinua. Muutoksen salaisuus on keskittää kaikki voimasi, mutta ei vanhan vastustamiseen, vaan uuden rakentamiseen.", "Sokrates"],

    ["Todellista onnea ei saavuteta mielihyvän tavoittelulla, vaan olemalla uskollinen arvokkaalle päämäärälle.", "Helen Keller"],

    ["Syvällä jokaisen sisällä on suuruuden kipinä, joka voidaan lietsoa innostuksen ja saavutusten liekeiksi. Kipinä ei tule ulkopuolelta, vaan on itsessäsi.", "James A. Ray"],

    ["Ihmiset voidaan jakaa kahteen ryhmään: niihin, jotka kulkevat edellä ja saavat jotain aikaan, ja niihin, jotka kulkevat jäljessä ja arvostelevat.", "Filosofi Seneca (- jKr.)"],

    ["On helppo vain istua ja tarkkailla. Vaikeaa on nousta ylös ja ryhtyä toimeen.", "Honore de Balzac"],

    ["Kun kannamme vastuuta kaukana olevista, heistä tulee meille läheisiä.", "Paula Sainio"],

    ["Jotkut oppivat lukemalla, toiset oppivat muiden virheistä, mutta muutamien täytyy itse päästä pissaamaan sähköpaimenen lankaan.", "Tom Lundberg"],

    ["Huomaan nyt, että kultaisia sääntöjäni ovat aina olleet nämä: olla milloinkaan ryhtymättä sellaiseen työhön, johon en voinut kerrassaan antautua; ja olla milloinkaan halventamatta työtäni, olipa se kuinka halpa tahansa.", "Charles Dickens"],

    ["Anteliaisuutta on antaa enemmän kuin voi, ja ylpeyttä on ottaa vähemmän kuin tarvitsee.", "Runoilija Kahlil Gibran"],

    ["Idealismi kasvaa suorassa suhteessa etäisyyteemme ongelmasta.", "Kirjailija John Galsworthy"],

    ["Kun työ on nautinto, elämä on ilo. Kun työ on velvollisuus, elämä on orjuutta.", "Kirjailija Maksim Gorki"],

    ["Ei ankeaa ole kova työ, vaan pinnallinen.", "Antiikin tutkija Edith Hamilton"],

    ["Valitse ystäväsi hitaasti, luovu heistä vielä hitaammin.", "Benjamin Franklin"],

    ["Ystävyys tunnustaa luonteiden erilaisuuden kuten rakkaus sukupuolten.", "Joseph Roux"],

    ["Rakastaa ei ole sama kuin katsoa toisiaan silmiin, se on katsomista yhdessä samaan suuntaan.", "Antonie de Saint-Euxepéry"],

    ["Jos et osaa vastaanottaa, antamisesi on toisen hallitsemista. Päinvastoin, jos et osaa antaa, vastaanottamisesi jättää sinut tyhjäksi.", "Rollo May"],

    ["Ihmisen aivot alkavat toimia syntymähetkellä eivätkä pysähdy ennenkuin on noustava pitämään julkinen puhe.", "Sir George Jessel"],

    ["Joka sanoo että nuoruus on kypsää ikää onnellisempi, väittää että näköala tornin juurelta on parempi kuin sen huipulta.", "William Phelps"],

    ["Nuoriso nauttii tottelemattomuudesta; ongelma on siinä, että enää ei ole sääntöjä.", "Jean Cocteau"],

    ["Ei ole konstikaan olla rohkea, jos ei pelota.", "Tove Jansson"], ["Onpa hienoa että kenenkään ei tarvitse odottaa hetkeäkään voidakseen alkaa tehdä maailmasta parempaa.", "Anne Frank"],

    ["Aitojen asioiden reitti ei oikeasti koskaan kulje töyssyittä.", "Samuel Butler"],

    ["Huomasin, että minulla on aina valinnan mahdollisuuksia, ja toisinaan kyse on vain asenteen valinnasta.", "Judith Knowlton"],

    ["Tästä päivästä lähtien näköalat kirkastuvat, epäonnistumisen mielenvireeseen kadonnut huumorintaju palaa. Päätän lopettaa valittamisen.", "Leonard Bernstein"],

    ["Ihmisen elämässä on kaksi suurta päivää; päivä, jolloin hän syntyy, ja päivä, jolloin hänelle selviää miksi."],

    ["Tietää, mitä on tapahtunut, sehän on eräältä kannalta katsoen viisaus suuri. Jos visusti harkitset, mikä kylvö menneistä päivistä saattoi hyödyllisiä, mikä vahingollisia hedelmiä, ja sen mukaan asetat elämäsi, työs ja toimes, niin oletpa viisas mies.", "Aleksis Kivi"],

    ["Johtajaksi tuleminen on synonyymi omaksi itseksesi tulemisen kanssa. Se on näin yksinkertaista. Se on näin vaikeaa.", "Warren Bennis"],

    ["Emme voi muuttaa kaikkea kohtaamaamme. Mutta emme voi muuttaa mitään ennen kuin olemme kohdanneet sen.", "Kirjailija James Baldwin"],

    ["Äitini teki selvän eron saavutuksen ja menestyksen välillä. Hän sanoi, että saavutus on tietoisuutta siitä, että olet opiskellut ja työskennellyt lujasti ja tehnyt parhaasi. Menestys on sitä, että muut ylistävät sinua. Tähtää aina saavutukseen ja unohda menestys.", "Helen Hayes"],

    ["Onni on mielentila, asenne, ja jollei sitä opettele ja harjoittele tässä hetkessä, sitä ei koskaan koe.", "Maxwell Maltz"],

    ["Meidän pitää olla syvästi kosketuksissa itseemme ja toisiimme, ettei näistä asioista tule teennäisiä, naurettavia tai kuluneita. Perustava kysymys on: Keitä me olemme ja miksi olemme täällä?", "Ann Bock"],

    ["Sovittelu on paljon muutakin kuin anteeksiantoa ja katumusta. Siihen kuuluu sovinnonteko ja vioittuneiden ihmissuhteiden korjaaminen; uhrien, tekijöiden ja yhteiskunnan välillä.", "Evan Evans (vankilassa pankkiryöstön ja murhan vuoksi)"],

    ["Kun keksin, miksi elän, se, miten elän, tulee itsestään.", "Jim Paluch, kirjailija"],

    ["Et ole olemassa vain ansaitaksesi elantosi. Olet olemassa auttaaksesi maailmaa elämään paremmin, suuremmilla visioilla, mutta hienommalla toivon ja saavutusten hengellä. Olet olemassa rikastuttaaksesi maailmaa, ja köyhdytät itsesi, jos unohdat tehtäväsi.", "Woodrow Wilson"],

    ["Nerokkuus on  % inspiraatiota ja  % hikoilua.", "Thomas Alva Edison"],

    ["Haluan tehdä suuria ja jaloja tehtäviä, mutta tärkein tehtäväni on tehdä pieniä tehtäviä suuresti ja jalosti.", "Helen Keller"],

    ["Elämäsi arvo voidaan mitata sillä, mitä se antaa maailmalle.", "Sir Wilfred Grenfell"],

    ["Auttaisin muita puhtaasta yhteenkuuluvuudentunnosta.", "Robert Burton"],

    ["Jos voisin estää yhtä sydäntä särkymästä En elä turhaan Jos helpotan yhden ihmiselämän tuskaa tai lievitän yhtä kipua tai autan pyörtyneen punarinnan takaisin pesäänsä En elä turhaan.", "Emily Dickinson"],

    ["Ilo on sisäpiirin homma.", "Don Blanding"],

    ["Mikä on vallassamme tehdä, se on vallassamme jättää tekemättä.", "Aristoteles"],

    ["Olet erilainen kuin mikään muu luomus aikojen alusta asti, joten olet vertaasi vailla.", "Brenda Ueland"],

    ["Halujen hallinta on luonteen perusta.", "John Locke"],

    ["Järjestys ei ole paine, joka tulee yhteiskuntaan ulkoapäin, vaan tasapaino, joka luodaan sisäpuolelta.", "Filosofi José Ortega y Gasset"],

    ["Ilmeesi on tärkein asu, mikä on ylläsi.", "Janet Lane"],

    ["Kaikissa ihmisissä on merkityksen ja arvon kaipuu. Tämä kaikille yhteinen kaipuu tyydytetään kunnioittamalla toisiamme.", "Chief Dan George"],

    ["Kärsivällisyys ja sinnikkyys tehoavat taianomaisesti. Niiden edessä vaikeudet katoavat ja esteet haihtuvat.", "John Quincy Adams"],

    ["Maan suuret elävät lempeästi.", "Ruth Tenney"],

    ["Nojaa minuun, kun et ole vahva. Olen ystäväsi. Autan sinua jatkamaan.", "Laulu"],

    ["Jos uskot, että osaat, sinä osaat. Ja jos uskot ettet osaa, olet oikeassa.", "Mary Kay Ash"],

    ["Mitä tahansa voitkaan tehdä tai unelmoida, aloita se. Rohkeudessa on nerokkuutta, voimaa ja taikaa.", "Johann Wolfgang von Goethe"],

    ["Kotkan hyökkäyksistä  % epäonnistuu. Miten voisin olettaa onnistuvani paremmin?", "Sophy Burnham"],

    ["Kun konfliktia ei ratkaista väkivaltaisesti, sen ratkaisu kiihdyttää kasvua ja tekee elämästä mielenkiintoista.", "Starhawk"],

    ["Me käyttäydymme niin kuin mukavuudet ja ylellisyys olisivat elämän päätarpeita, vaikka onnellisiksi tullaksemme tarvitsemme vain jotakin mistä innostua.", "Charles Kingsley"],

    ["Moraalipääoma on kansantalouden tärkein ja jopa välttämättömin menestystekijä.", "Vuorineuvos Gustaf von Hertzen"],

    ["Kaiken oppimisen kenties tärkein tulos on kyky tehdä se mikä sinun pitää tehdä, silloin kun se pitää tehdä, huolimatta siitä haluatko tehdä sen vai et.", "Walter Bagehot"],

    ["Anna hyvälle ominaisuudelle nimi ja pian tämä nimi merkitsee jotain halveksittavaa.", "C. S. Lewis"],

    ["Pehmeät arvot. Kuka yritysjohtaja niitä nyt haluaisi, kun tarjolla on koviakin arvoja? Kunnes pehmeiden arvojen tosimerkitys ymmärretään jälleen tai kunnes keksitään parempi ilmaus, meidän on sanottava: Pehmeät arvot ovat kovia arvoja.", "Jason Lepojärvi"],

    ["Marttyyri. Haukkumasana, samassa kategoriassa fanaatikon ja fundamentalistin kanssa. Tosiasiassa itsesäälissä rypevä kristitty ja itsemurhapommittaja ovat yhtä kaukana sellaisesta aidosta marttyyriudesta, joka ansaitsee kiitoksen ja arvostuksen.", "Jason Lepojärvi"],

    ["Pelkuruuden tunnistaminen edellyttää usein syvällistä itsetuntemusta ja jatkuvaa omien motiivien tarkkailua, koska olemme melko hyviä esittämään itsellemme pelkuruutta ilmentävät teot tekoina, jotka itse asiassa ovat hyveellisiä.", "Olli-Pekka Vainio"],

    ["Onnistuminen on asenne. Se on avoimuutta uusille ideoille, halukkuutta kuunnella, innokkuutta oppia, halua kasvaa ja joustavuutta muuttua.", "BJ Gallagher"],

    ["Rohkeus ei aina ole suurieleistä. Joskus rohkeutta on se hiljainen ääni, joka päivän päättyessä sanoo … huomenna yritän uudestaan.", "Mary Anne Radmacher"],

    ["Jos Luojalla oli jokin tarkoitus varustaessaan meidät kaulalla, hän varmaankin tarkoitti että pitäisimme sen pystyssä.", "Arthur Koestler"],

    ["Kun rakastat jotakin, joudut kokemaan sydänsurua, ja sydämesi saattaa särkyä. Jos haluat varmistaa sen koskemattomuuden, varo antamasta sitä kenellekään, edes eläimelle.", "C.S. Lewis"],

    ["Elämän tragedia on se, mikä kuolee ihmisen sisimmässä hänen eläessään.", "Albert Schweitzer"],

    ["Useimmat miehet ovat omasta mielestään täällä maan päällä vain aikaa tappaakseen — ja se puolestaan uhkaa tappaa heidät.", "John Eldredge, Villi ja vapaa"],

    ["Ei yksikään ihminen voi pitempää aikaa elää kaksin kasvoin, joista paljastaa toiset itselleen, toiset muille ihmisille, tulematta lopulta epätietoiseksi siitä, kummatko ovat todelliset.", "Nathaniel Hawthorne"],

    ["Toisen kuunteleminen on erityisen tärkeää silloin, kun mitään ei kuulu.", "Pastori Paula Sainio"],

    ["Älä kysy itseltäsi, mitä maailma tarvitsee. Kysy itseltäsi, mikä saa sinut heräämään eloon. Mene sitten ja tee se, koska maailma tarvitsee kipeästi ihmisiä, jotka ovat heränneet eloon.", "Tuntematon"],

    ["Tulin tienhaaraan metsässä ja minä, minä valitsin vähemmän kuljetun tien, ja se on muuttanut kaiken.", "Robert Frost, The Road Not Taken"],

    ["Ensi kertaa ihmiskunnan historiassa muutos on niin nopeaa, että sen minkä nuorena oppii, se vanhana estää onnistumista.", "Tero J. Kauppinen"],

    ["Hyvä Watson, en ole koskaan kuulunut niihin, joiden mielestä vaatimattomuus on näissä asioissa hyve. Päätelmientekijän on nähtävä asiat juuri sellaisena kuin ne ovat ja jos hän arvioi kykynsä liian pieniksi, hän poikkeaa totuudesta yhtä paljon kuin arvioidessaan ne liian suuriksi.", "Sherlock Holmes"],

    ["Olen sittemmin useinkin joutunut ajattelemaan kuinka epäjohdonmukainen ja järjetön on yleensä ihmiskunnan ja etenkin nuorison luonne. Se kieltäytyy antamasta oikean vaikuttimen ohjata menettelyänsä tuollaisissa tapauksissa. Heitä ei hävetä synnin tekeminen, mutta hävettää katumus. Ei hävetä teko, jonka perusteella heitä syystä olisi pidettävänä hupsuina, mutta hävettää paluu, jolla yksistään he voisivat päästä viisaan ihmisen maineeseen.", "Robinson Crusoe"],

    ["Monet eivät uskalla olla onnellisia, koska olisivat silloin vaarassa tulla onnettomiksi.", "Martin Descalzo"],

    ["Elämä on kovaa. Vielä kovempaa se on, jos olet tyhmä.", "John Wayne"],

    ["I’m not an optimist, I’m a possibilist. I can see that progress in the world is possible.", "Hans Rosling"],

    ["Tartu tilaisuuteen: karta kuitenkin pahaa äläkä häpeä itseäsi.", "Sirakin kirja :"],

    ["Järkevä hallitsija kasvattaa kansaansa, viisaan hallinto on hyvässä järjestyksessä. Millainen on kansan hallitsija, sellaisia virkamiehet, millainen on kaupungin johtaja, sellaisia sen asukkaat. Holtiton kuningas vie kansansa tuhoon, kaupunkia vie eteenpäin sen johtajien viisaus.", "Sirakin kirja :-"],

    ["Herrasmies etsii asioita itsestään, alempiarvoinen mies muista.", "Kungfutse"],

    ["Viini ja soitto ilahduttavat sydäntä, mutta eivät vedä vertoja viisauden rakastamiselle.", "Sirakin kirja :"],

    ["Kaikki maailman ilo on syntynyt onnen tahtomisesta toisille. Kaikki maailman kärsimys on syntynyt nautinnon tahtomisesta itselle.", "Shantideva"],

    ["Applen alkuvaiheista saakka tajusin, että me menestyimme luomalla henkistä omaisuutta. Jos ihmiset kopioisivat tai varastiaisivat meidän ohjelmistojamme, meidän liiketoimintamme loppuisi isiihen. Jollei suoja olisi, meille ei jäisi mitään kannustinta tehdä uutta softaa tai uusia tuotteita. Jos henkisen omaisuuden suoja alkaa kadota, luovat yritykset katoavat tai niitä ei koskaan perustetakaan.  On kuitenkin yksinkertaisempikin syy: varastaminen on väärin. Se loukkaa muita ihmisiä. Ja se on vahingollista omalle luonteellesi.", "Steve Jobs"],

    ["Minun intohimonani on ollut rakentaa kestävä yritys, jossa ihmisiä motivoidaan tekemään erinomaisia tuotteita. Kaikki muu oli toissijaista. Totta kai oli hienoa tehdä voittoa, koska juuri se antoi mahdollisuuden tehdä hyviä tuotteita. Mutta motiivin lähde olivat tuotteet, eivät voitot. Sculley käänsi nämä prioriteetit toisin päin niin, että tavoitteena oli tienata rahaa. Ero voi vaikuttaa pieneltä, mutta lopulta se merkitsee kaikkea. Se ratkaisee, millaisia ihmisiä palkkaat, ketkä saavat ylennyksiä, mistä palavereissa puhutaan.", "Steve Jobs"],

    ["Kukin tutkikoon vain omia tekojaan. Silloin hän voi ylpeillä vain siitä, mitä hän itse on, vertaamatta itseään toiseen. Jokaisen on kannettava oma kuormansa.", "Kirje galatalaisille :-"],

    ["Kun teet, mitä sinun kuuluu tehdä, pidä samantekevänä, teetkö sen palellen vaiko lämpöisenä, nuokkuen vai kylliksi nukkuneena, herjausten vai siunausten saattelemana, tai joudutko kuolemaan tai tekemään jotain muuta.", "Marcus Aurelius"],

    ["On häpeä, jos sielusi antaa ensimmäisenä periksi elämässä, jossa ruumiisi ei anna periksi.", "Marcus Aurelius"],

    ["Tyytyväisyys on opittu tapa, hankittu taito. Se ei ilmaannu pudotessasi juuri oikeiden olosuhteiden keskelle.", "Mary Hunt"],

    ["Mitä auringonpaiste on kukkasille, sitä on hymy ihmisyydelle. Pikkuseikkoja, se on totta, mutta elämäntaipaleella niistä koituva hyöty on kiistaton.", "Joseph Addison"],

    ["On suurenmoisempaa pystyä havaitsemaan hyvää huonoissa ihmisissä, kuin huonoa hyvissä ihmisissä.", "Axel Fredenholm"],

    ["Tehdäkseen hyviä suuria tekoja ihminen joutuu tekemeen hyviä pieniä tekoja ja toisin päin. Ei voi rakastaa omaa lastaan ja samalla vihata muukalaista. Sellainen elämä ei ole moraalista, sillä ikuisuuden silmissä lapsesi on muukalainen ja siksi jokaista muukalaista kuuluu rakastaa kuin omaa lasta.", "Ivar Grandell, Kjell Westön romaanissa Missä kuljimme kerran"],

    ["Oman koon mittari: Kuinka pieneksi minun täytyy mitätöidä toinen, jotta näkyisin itse?", "Anneli Laine"],

    ["Maailman suurinta tuhlausta on juuri se ero mitä me olemme ja mitä me voisimmekaan olla.", "Ben Herbster"],

    ["Kaikesta työstä tulee luovaa silloin, kun sen tekijä haluaa tehdä sen hyvin – tai vielä paremmin.", "Kirjailija John Updike"],

    ["Se joka täydestä sydämestä ylistää kaunista tekoa, osallistuu tavallaan siihen.", "Francois de La Rochefoucauld"],

    ["Ennen kuin aloitat, hanki hyviä neuvoja, ja kun sitten olet tehnyt päätöksesi, toimi viipymättä.", "Sallustius"],

    ["Jos haluat korkealle, aloita alhaalta; jos haluat kauas, aloita läheltä.", "Kiinalainen sananlasku"],

    ["Lakiin perustuva moraali on epäonnistuneimmillaan toimintaa, jossa toimitaan vain rangaistuksen pelossa. Sitäkin arvokkaampaa on moraali, joka syntyy halusta toimia yhteisen hyvän vuoksi.", "Thomas Elfgren"],

    ["Hyvä työyhteisö pyrkii intohimoisesti todellisuuteen.", "Matti Ylikoski"],

    ["Liikkeenjohdon suurta ivaa on se, että epäpätevän toimitusjohtajan on paljon helpompi pitää työnsä kuin epäpätevän alaisen.", "Warren Buffet"],

    ["Johtajan tärkein ominaisuus on rohkeus tehdä päätöksiä.", "Gustaf Hägglund"],

    ["Levollisuus on osoitus rikollisuudesta.", "Kunnon sotamies Svejkiä kuulustellut santarmivääpeli"],

    ["Meillä on oikeus katsoa alaspäin johonkin ihmiseen vain silloin kun aiomme nostaa hänet ylemmäksi.", "Jesse Jackson"],

    ["Vähintä mitä voit tehdä elämällesi on miettiä mitä toivot siltä. Ja enintä mitä voit tehdä, on asua sen toivon sisällä.", "Barbara Kingsolver"],

    ["Menestys tarkoittaa sitä, että on rohkeutta, päättäväisyyttä ja tahtoa tulla siksi ihmiseksi joksi uskomme olevamme tarkoitettuja.", "George Sheehan"],

    ["On kaksi tapaa tulla ulos kuorestaan: särkeä kuori tai itsensä.", "Jarmo Somppi"],

    ["Ihmisen hyveitä ei pitäisi mitata hänen erinomaisella vaivannäöllään vaan hänen jokapäiväisellä käytöksellään.", "Blaise Pascal"],

    ["Jos alat ajatella, että ongelma on 'jossain tuolla', lopeta heti. Juuri se ajatus on ongelmasi.", "Stephen Covey"],

    ["On kahdenlaisia ihmisiä: niitä jotka tekevät työt ja niitä, jotka keräävät kunnian. Yritä olla ensimmäisessä ryhmässä, sillä siellä on vähemmän kilpailua.", "Indira Gandhi"],

    ["Ilo on ihmisen hyvä enkeli. Sen leppeä käsi se on, joka ihmistä otsalle ja sydämelle silittää, ja sulattaa hänessä kaikki jäykkyyden ja tukalan jännityksen solmut.", "Volter Kilpi"],

    ["Se joka ei pidä kenestäkään on onnettomampi kuin se josta kukaan ei pidä.", "Francois De La Rochefoucauld"],

    ["Vain se, joka käsittelee ajatuksiaan kevyesti, on niiden herra. Ja vain ajatustensa herra ei ole niiden orja.", "Lin Yutang"],

    ["Huoli on mielen läpi kiemurteleva kapea puronen. Jos sitä ruokitaan, se uurtaa uoman, johon kaikki muut ajatukset valuvat.", "A.S. Roche"],

    ["Ottamalla muut huomioon lapsesi pääsevät elämässä pitemmälle kuin millään yliopistotutkinnolla.", "Marian Wright Edelman"],

    ["Muutamat hädän hetket opettavat ihmiselle viisautta enemmän kuin vuosikymmenien tasaiset olot.", "Maria Jotuni"],

    ["Monet ihmiset jäävät onnesta osattomiksi: eivät siksi, etteivätkö he löytäisi sitä, vaan siksi, että he eivät pysähdy nauttimaan siitä.", "William Feather"],

    ["Mikään ei ole erityisen vaikeaa, kun vain jaat sen tarpeeksi pieniin tehtäviin.", "Henry Ford"],

    ["Annat vain vähän jos annat mitä omistat. Vasta antaessasi itsestäsi annat todella.", "Kahlil Gibran"],

    ["Jos pystyt ratkaisemaan ongelmasi, mitä syytä sinulla on olla huolestunut? Jos et pysty ratkaisemaan ongelmaasi, mitä sinua auttaa olla huolestunut?", "Shantideva"],

    ["Kyky on se mitä pystyt tekemään. Motivaatio määrää sen mitä teet. Asenne ratkaisee kuinka hyvin teet sen.", "Valmentaja Lou Holtz"],

    ["Suurin hyvä, minkä voit tehdä toiselle, ei suinkaan ole rikkauksien jakaminen hänen kanssaan. Se on hänen omien rikkauksiensa paljastaminen hänelle itselleen.", "Benjamin Disraeli"],

    ["Olosuhteet eivät tee minusta mitä olen, ne paljastavat, kuka minä olen valinnut olevani.", "Wayne W. Dyer"],

    ["Huolehdi vähemmän siitä, mitä muut sinusta ajattelevat, ja enemmän siitä, mitä sinä ajattelet muista.", "Fay Weldon"],

    ["Mikään ei ole muuttunut paitsi asenteeni. Kaikki on siis muuttunut.", "Anthony De Mello"],

    ["Älä murehdi turhia, syö kolme tukevaa ateriaa päivässä, rukoile rukouksesi, ole kohtelias velkojillesi, pidä vatsasi kunnossa, harjoita ruumiinliikuntaa, kulje hitaasti äläkä epäröi.", "Abraham Lincoln"],

    ["Vain sen, jolta puuttuu itsetunnon selkäranka, täytyy turvautua suosion kainalosauvoihin.", "V. A. Koskenniemi"],

    ["Muista, että kun jätät tämän maailman, et voi ottaa mukaan mitään, mitä olet saanut, vain sen mitä olet antanut.", "Fransiskus Assisilainen"],

    ["Maistuuko kurkku kitkerältä? Heitä se pois. Ja onko polullasi oksia? Astu siis syrjään. Se riittää. Älä hoe: \"Miksi tällaisia asioita luotiin maailmaan?\"", "Marcus Aurelius"],

    ["Eläkäämme niin, että kuollessamme suree hautaustoimistokin.", "Mark Twain"],

    ["Moni suostuisi kasvuun vaan ei kasvukipuihin.", "Anonyymi"],

    ["Luova ajattelu saattaa merkitä vain sen tajuamista, ettei ole erityisen ansiokasta tehdä asioita niin kuin ne on aina tehty.", "Rudolf Flesch"],

    ["Kademieli painaa ihmisen alamaihin. Toisen ihaileminen kohottaa. Eikös tämän pitäisi olla ihan selvä juttu?", "Elvis Presley"],

    ["Kotoaan lähtiessään on hyvä kysyä itseltään, mitä aikoo tehdä. Palatessaan on hyvä kysyä, mitä on saanut aikaan.", "Kleubulos"],

    ["Ihaile kirsikkapuun kukkia nyt, myrskytuuli saattaa tempaista ne yön aikana mukaansa.", "Japanilainen sananlasku"],

    ["Jos olet huolestunut hieman joka päivä, menetät pari vuotta eliniästäsi. Jos jotain on korjattavissa, tee se. Mutta älä ole huolissasi, se ei ole koskaan korjannut mitään.", "Mary Hemingway"],

    ["Voit unelmoida, luoda, suunnitella ja rakentaa maailman hienoimmat paikat, mutta tarvitset ihmisiä unelmiesi toteuttamiseen.", "Walt Disney"],

    ["Tilaisuus jää monelta huomaamatta, koska sillä on yllä haalarit ja se näyttää työnteolta.", "Thomas A. Edison"],

    ["Ole oma itsesi, kaikki muut ovat jo varattuja.", "Oscar Wilde"],

    ["Älä turmele sitä mitä sinulla on, haluamalla sitä mitä ei ole; ja muista, että mitä sinulla nyt on, oli kerran niiden asioiden joukossa, joista vain uneksit.", "Epikuros"],

    ["Tärkeintä elämässä ei ole se että näemme sen mitä on jossain kaukana, vaan se että teemme sen mikä on suoraan edessämme.", "Thomas Carlyle"],

    ["En usko kohtaloon, joka iskee ihmiseen toimipa hän niin tai näin. Uskon kohtaloon, joka iskee ihmiseen, jos hän ei toimi.", "G.K. Chesterton"],

    ["On parempi huolehtia luonteesta kuin maineesta, koska luonne on se mitä ihminen on oikeasti, kun taas maine kertoo ainoastaan sen mitä muut hänestä ajattelevat.", "John R. Wooden"],

    ["Elä niin kuin eläisit jo toista kertaa ja ensimmäisellä kerralla olisit tehnyt kaiken juuri niin väärin kuin nyt olet aikeissa tehdä.", "Viktor E. Frankl"],

    ["Sinun ei tarvitse olla joka päivä parempi kuin edellisenä päivänä. Ihmiset voivat kasvaa myös pienenemällä, tulemalla jälleen lapsiksi.", "Martti Lindqvist"],

    ["Kun unohdamme kiireen, alamme muistaa asioita, jotka olemme kiireessämme unohtaneet.", "Paula Sainio"],

    ["Parempi olla pieni ja valaista kuin iso ja varjostaa.", "Anita Tiikasalo"],

    ["Jos pelaat elämässäsi aina varman päälle, päätät samalla, ettet enää halua kasvaa.", "Shirley Hufstedler"],

    ["Tärkeät asiat voi tehdä vain kerran: Kerran synnyn, kerran kuolen ja vain yhden kerran elän tämän hetken.", "Heli Karjalainen"],

    ["Kun nyt kerta kaikkiaan on niin onnellisesti, että se, mikä laulaen tulee, se viheltäen menee, niin miksi emme laula enemmän ja muista viheltää aina välillä?", "Mervi Lehto"],

    ["Kun päättää tehdä jotakin, keinot ilmestyvät. Joku voi selittää nämä onnelliset käänteet yhteensattumiksi. Mutta lähempi tarkastelu osoittaa, että niitä tapahtuu säännöllisesti.", "Andrew Matthews"],

    ["Ei toimeliaisuus ole mikään saavutus. Ei riitä, että ryntäilet ympäriinsä, aloitat kaikenlaista ja olet koko ajan kiireinen. Hyvin käytetty aika on sitä, että viet päätökseen sen minkä olet aloittanut.", "Eknath Easwaran"],

    ["Ihmiset epäonnistuvat usein, ei sen tähden, etteivät saa tehdä mitä haluavat, vaan sen tähden, etteivät halua tehdä, mitä heidän pitää.", "W. Ralph Ward"],

    ["Äitini sanoi minulle: \"Jos sinusta tulee sotilas, pääset varmaan kenraaliksi. Jos sinusta tulee munkki, niin pääset vielä paaviksi.\" Mutta minusta tulikin maalari ja minä päädyin Picassoksi.", "Pablo Picasso"],

    ["Jos ihminen ei joudu jyrkänteen partaalle, ei hänen selkäänsä kasva siipiä.", "Niko Kazantakis"],

    ["Ihminen, joka on liian vanha oppimaan, on todennäköisesti aina ollut liian vanha oppimaan.", "Minnie Haskins"],

    ["Aikaansaamisen jalon taidon lisäksi hallitse myös se jalo taito, että jätät asioita tekemättä. Elämän viisaus muodostuu epäolennaisuuksien eliminoimisesta.", "Lin Jutang"],

    ["Elämääsi eivät ensisijaisesti määrää ulkoiset edellytykset ja olosuhteet, vaan ajatukset, jotka pyörivät mielessäsi.", "Norman Vincent Peale"],

    ["Ystävyys on kahden ihmisen syvään juurtunut tapa edistää toistensa hyvinvointia.", "Eustace Budgell"],

    ["On mielenkiintoista, että useimmat ihmiset suunnittelevat lomamatkansa paljon huolellisemmin kuin elämänsä. Ehkä se johtuu siitä, että pakeneminen on helpompaa kuin muuttuminen.", "Jim Rohn"],

    ["En räpellä kännykkääni valmennuksissa, koska kunnioita osallistujia niin paljon, että en halua tuhlata heidän aikaansa.", "Katleena Kortesuo"],

    ["Ruukku tihkuu sitä, mitä se sisältää.", "Kiinalainen sanonta"],

    ["Mikään ei ole kiellettyä, mitään ei tarvitse odottaa, ja kun ei tarvitse odottaa, ei tarvitse kuvitellakaan. Elämä kuihtuu mielihyvän etsimiseksi ja kun mieliteko on tyydytetty, kaikki tuntuu entistä tylsemmältä.", "Jari Sinkkonen, Elämäni poikana"],

    ["Minun elämäni yhtenä johtotähtenä on ollut: kun unohtaa sen, mitä ei voi muuttaa, on onnellinen.", "Arvo Ylppö"],

    ["Totuus on viiltävä veitsi. Totuus on parantumaton haava ihmisessä, totuus on lipeä, joka katkerana syö sydäntä. Siksi nuoruutensa ja voimansa päivinä mies pakenee totuutta ilotaloihin ja sokaisee silmänsä työllä ja kaikenlaisilla toimilla, matkoilla ja huvituksilla, vallalla ja rakennuksilla. Mutta tulee päivä, jolloin totuus lyö hänen lävitseen kuin keihäs, eikä hänellä sen jälkeen ole iloa ajatuksistaan eikä kättensä töistä, vaan hän on yksin. Ihmisten keskellä hän on yksin, eivätkä jumalat tuo apua hänen yksinäisyyteensä.", "Sinuhe egyptiläinen"],

    ["Varmaan enin osa pahaa maailmassa tapahtuu vain sen tähden, että ihmisen on helpompi totella muita kuin itseään.", "Mikael Hakim"],

    ["Kuka tahansa voi tehdä virheitä, mutta vain hölmö pitää kiinni erehdyksestään.", "Cicero (- eKr.)"],

    ["Enkelit osaavat lentää, koska ne ottavat itsensä kevyesti.", "G. K. Chesterton"],

    ["Tieto, joka ei jalosta ihmistä, on tarpeeton.", "Uuno Cygnaeus"],

    ["Muiden luonnetta voi helposti arvioida sen perusteella, kuinka he kohtelevat niitä, jotka eivät voi tehdä mitään heidän hyväkseen.", "Malcolm Forbes"],

    ["Kaupunkilaiset ja nuoriso elävät toista aikaa, kaikki alle seitsemänkymmentävuotiaat. Sen ajan nimi on kiire. Joka on oman pään keksintö. Kärsimättömyydeksi sellaista pitäisi sanoa. Joka taas on sitä että ihmiset eivät malta kärsiä vaikka kyllä kannattaisi. Kärsimyksen jälkeen pienikin helpotus tuntuu hyvältä. Mutta kun kaikki on koko ajan helppoa, niin mikään ei oikeastaan tunnu helpolta.", "Mielensäpahoittaja"],

    ["Harvinaisinta maailmassa on kypsä ihminen.", "André Malraux"],

    ["Se, että emme uskalla, ei johdu siitä, että asiat ovat vaikeita. Asiat ovat vaikeita siksi, että emme uskalla.", "Seneca"],

    ["Älä pelkää kysyä tyhmiä kysymyksiä. Niitä on helpompi käsitellä kuin tyhmiä virheitä.", "Kirjailija William Wister Haines"],

    ["On hyvä odottaa muilta hyvää, toimia siltä pohjalta, että muut ovat rehellisiä ja kunniallisia, sillä kun heihin suhtautuu sillä tavoin, houkuttelee usein esiin rehellisyyttä ja kunniallisuutta.", "Nelson Mandela"],

    ["Ainoa seikka, joka estää sinua olemasta ainutlaatuinen on se, että annat ympäristöllesi luvan vakuuttaa asian olevan niin.", "Seth Godin"],

    ["Ole muutos, jota etsit.", "Mahatma Gandhi"],

    ["Et voi auttaa toista ylämäessä nousematta samalla itse lähemmäs huippua.", "Norman Schwartzkopf"],

    ["Todella suurenmoisessa yrityksessä voitot ja kassavirta merkitsevät samaa kuin vesi ja ravinto ihmiselle. Ne ovat elämän kannalta ehdottoman välttämättömiä, mutta ne eivät ole elämän tarkoitus.", "Jim Collins"],

    ["Mitä on tappio? Ei mitään muuta kuin oppimista, ei mitään muuta kuin ensimmäinen askel kohti jotain parempaa.", "Wendell Phillips"],

    ["Kaikki on sallittua sodassa ja rakkaudessa – kaikki epätodet latteudet ovat vahingollisia, myös tämä. Se on romanttista retoriikkaa, joka saattaa hymyilyttää, mutta ei Boko Haramin uhreja eikä Henry VIII:n vaimoja.", "Jason Lepojärvi"],

    ["Käännä kateus kasvuksi: kadehdi vain sinulle merkityksellisiä asioita, usko että kadehtimasi henkilö on kannuksensa ansainnut ja usko myös se tosiasia, että voit itse saavuttaa saman.", "Jussi Ruokomäki"],

    ["On yllättävää, miten moni ihminen kulkee läpi elämänsä ymmärtämättä sitä, että heidän tunteensa muita kohtaan ovat seurausta heidän tunteistaan itseään kohtaan. Jos et ole sinut itsesi kanssa, et ole sinut toistenkaan kanssa.", "Sydney J. Harris"],

    ["Ihminen pysyy olentona, joka ei ymmärrä itseään, hänen elämänsä on merkityksetöntä, ellei rakkautta paljasteta hänelle, ellei hän kohtaa rakkautta, ellei hän koe sitä ja omista sitä, ellei hän osallistu siihen intiimisti.", "Johannes Paavali II"],

    ["Miksi ylipäätään rakastamme? Minkä vuoksi rakastan sinua? Älä pyydä minua vastaamaan. En osaisi. Rakkaus ohittaa kohteensa tai koskettaa sitä niin läheltä, että se lähes katoaa näkyvistä. Kun tunteiden aalto laantuu, merkitystä on sillä, mitä jää jäljelle.", "Krzysztof, Karol Wojtyłan näytelmässä Korukauppiaan paja"],

    ["Joskus inhimillinen olemassaolo tuntuu liian pieneltä rakkaudelle. Toisinaan tilanne on päinvastainen: inhimillinen rakkaus tuntuu liian pieneltä suhteessa olemassaoloon – tai pikemminkin liian vähäpätöiseltä. Niin tai näin, jokaisella on käytössään olemassaolo ja rakkaus. Ongelma on: miten rakentaisi ne mielekkäästi?", "Adam, Karol Wojtyłan näytelmässä Korukauppiaan paja"],

    ["Tieto ilman kykyä välittää sitä selvästi on yhtä hyödyllistä kuin tietämättömyys.", "Perikles (n. – eKr.), ateenalainen poliitikko"],

    ["En tiedä, mikä teidän kohtalonne tulee olemaan, mutta yhden asian tiedän; ainoat teistä, jotka tulevat saavuttamaan aidon onnen, ovat ne, jotka ovat etsineet kykyä palvella toisia ja löytäneet sen.", "Albert Schweitzer"],

    ["On helpompi olla viisas muille kuin itselleen.", "François de La Rochefoucauld"],

    ["Viisas luo enemmän tilaisuuksia kuin löytää niitä.", "Francis Bacon"],

    ["Hän joka tietää kaikki vastaukset ei ole kysynyt kaikkia kysymyksiä.", "Konfutse"],

    ["Epäonnistuja ei ole luuseri. Luuseri on se, joka kaaduttuaan ei enää nouse.", "Santi Martínez"],

    ["Jolla ei ole sydäntä auttaa, ei ole oikeutta arvostella.", "Abraham Lincoln"],

    ["Ei työ meitä väsytä, vaan kaikki se mikä vielä on tekemättä.", "Friedrik Wislöff"],

    ["Aikaa on täysin riittävästi. Kyse on vain tehtävien tärkeysjärjestyksestä.", "Peter Drucker"],

    ["Tärkeimmät asiat eivät ikinä saa olla vähäpätöisimipien asioiden armoilla.", "Goethe"],

    ["Tehtävää on aina enemmän kuin aikaa ja voimavaroja. Luota päätöstesi oikeellisuuteen.", "David Allen"],

    ["Pisteet kerää kokonaan se, joka sekoittaa yhteen hyödyn ja huvin.", "Horatius"],

    ["Jokaiseen tekoon ja tekemättä jättämiseen liittyy valinta siitä, mikä on tärkeää ja mikä vähemmän tärkeää.", "Brian Tracy"],

    ["Jokainen joka on pidellyt kädessään meren silottamaa kiveä, tietää että jatkuvalla hyväilyllä on ihmeitä tekevä voima.", "Tommy Tabermann"],

    ["Ne jotka ovat tarpeeksi hulluja uskoakseen, että voivat muuttaa maailman, vielä tekevät sen.", "Steve Jobs"],

    ["Kyky kuunnella sisäistä viisautta vahvistuu harjoituksella, aivan kuten taito tai lihas.", "Robbie Gass"],

    ["Välttämätön ensimmäinen siirto sille, että saat elämältä sen minkä haluat on tässä: päätä, mitä haluat.", "Ben Stein"],

    ["Motivaatio on sisäinen tuli. Jos joku yrittää sytyttää tuon tulen allesi, todennäköistä on, että se palaa vain hetken.", "Stepehn R. Covey"],

    ["Suunnitelmamme eivät kanna ilman päämäärää. Jollei ihminen tiedä määräsatamaansa, mikään tuuli ei ole se oikea.", "Seneca"],

    ["Ei ole koskaan liian myöhäistä olla sitä, mitä saattaisimme olla.", "George Elliot"],

    ["Älä koskaan ajattele, ettet ole kyllin hyvä. Uskon, että ihmiset arvostavat sinua oman mittapuusi mukaan.", "Isaac Asimov"],

    ["Menestys on kykyä olla menettämättä innostustaan toistuvista epäonnistumisista huolimatta.", "Winston Churchill"],

    ["Oikea aika rentoutumiseen on silloin, kun sinulla ei ole aikaa siihen.", "Sidney J. Harris"],

    ["Kehitä innostus työtäsi kohtaan huippuunsa, niin työsi kehittyy huippuunsa.", "Norman Vincent Peale"],

    ["Elämämme on sellaista, joksi ajatuksemme sen tekevät.", "Marcus Aurelius"],

    ["En tiedä, mikä on kohtalonne, mutta sen tiedän, että ne teistä tulevat todella onnelliseksi, jotka etsitte ja löydätte tavan palvella muita.", "Mahatma Gandhi"],

    ["Kaikesta, mitä meille tapahtuu, voimme tehdä joko onnemme tai onnettomuutemme.", "Benjamin Franklin"],

    ["Anna ajatustesi olla viattomia ja oikeudenmukaisia ja jos puhut, puhu niin kuin ajattelet.", "Benjamin Franklin"],

    ["Hiljaisuus on se alkuaine, josta suuret asiat muovaavat itse itsensä.", "Thomas Carlyle"],

    ["Se mitä on takanamme tai edessämme, on pientä verrattuna siihen, mitä on sisällämme.", "Ralph Waldo Emerson"],

    ["Jos haluat nähdä ne, jotka ovat rohkeita, katso niitä, jotka osaavat antaa anteeksi. Jos haluat nähdä ne, jotka ovat sankarillisia, katso niitä, jotka osaavat vastata vihaan rakkaudella.", "Bhagavad Gita"],

    ["Häviäjiä eivät ole ne, jotka häviävät. Todellisia häviäjiä ovat ne, jotka eivät halua voittaa.", "Jesus M. Trejo"],

    ["Älä sure sitä, että yhteinen aika on ohi. Iloitse siitä että se on ollut.", "Goethe"],

    ["Riittää, että olet lahjakas puoli tuntia päivässä. Useimmat eivät ole minuuttiakaan.", "Alvar Aalto"],

    ["Ensimmäinen askel johonkin suuntaan on myös aina päätös ettet aio jäädä siihen missä olet.", "John Pierpont Morgan"],

    ["Hukkaan heitetyn ajan katuminen on lisää hukkaan heitettyä aikaa.", "Mason Cooley"],

    ["Kalastajat tietävät, että meri on vaarallinen ja myrskyt voivat olla kauheita, mutta he eivät pidä näitä vaaroja riittävinä syinä pysyä rannassa.", "Vincent Van Gogh"],

    ["Virheiden tekemiseen käytetty elämä ei ole pelkästään kunniakkaampi, vaan myös hyödyllisempi kuin elämä, jota ei ole käytetty mihinkään.", "George Bernard Shaw"],

    ["Ole aina mieluummin ensiluokkainen versio itsestäsi kuin toisen luokan versio jostakusta muusta.", "Judy Garland"],

    ["Ihminen, joka ei osaa rentoutua, ei osaa elää kuin ihminen. En tietenkään yritä puolustella laiskottelua. Mutta ihminen ei ole väsymätön kone, vaan sielun ja ruumiin kokonaisuus, joka tarvitsee toistuvaa uudistumista.", "Oskari Juurikkala"],

    ["Jos hallitset muita, sinulla saattaa olla valtaa, mutta jos hallitset itsesi, olet vielä mahtavampi.", "Laozi"],

    ["Kaikki synnymme tietämättöminä, mutta täytyy nähdä paljon vaivaa pysyäkseen tyhmänä.", "Benjamin Franklin"],

    ["Mikään ei ole ajanhukkaa, kunhan hyödynnät kokemustasi viisaasti.", "Auguste Rodin"],

    ["Ei ole väliä, onko kissa musta vai valkoinen, kunhan se pyydystää hiiriä.", "Deng Xiaoping"],

    ["Tee vaikeat asiat kun ne vielä ovat helppoja ja suuret asiat kun ne vielä ovat pieniä.", "Laozi"],

    ["Uskaliaat ideat ovat kuin eteenpäin liikutetut shakkinappulat. Ne saatetaan syödä, mutta ne voivat aloittaa voittoisan pelin.", "Goethe"],

    ["Jos odottaa kaiken olevan täydellistä ennen kuin ryhtyy toimeen, on sama kuin lähtisi matkaan vasta kun kaikki liikennevalot näyttävät vihreää.", "Karen Ireland"],

    ["Jos et pysty tekemään sitä hyvää, mitä tahtoisit, tee se hyvä, minkä voit.", "Charles Swindoll"],

    ["Kuka tahansa hölmö osaa kritisoida, tuomita ja valittaa – ja niin useimmat hölmöt tekevätkin, mutta vaatii luonnetta ja itsehillintää olla ymmärtävä ja anteeksiantava.", "Dale Carnegie"],

    ["Johtajan ainoa tehtävä on saada muut loistamaan.", "Olli Lipsanen"],

    ["Sitä minkä saamme liian helposti, arvostamme liian vähän. Vain rakkaus antaa kaikelle arvon. Kunpa osaisimme arvostaa sen antimia kylliksi.", "Thomas Paine"],

    ["Tunne tarpeettomuudesta on tämän ajan lepra.", "Jari Sarasvuo"],

    ["Kiireessä on se paha puoli, että se vie aikaa.", "G.K. Chesterton"],

    ["On varkaita, joita laki ei rankaise ja jotka varastavat ihmiseltä kalleinta, mitä hänellä on: aikaa.", "Napoleon"],

    ["Ihmisen ylin päämäärä on toteuttaa itseään luovana, ainutkertaisena yksilönä synnynnäiset mahdollisuudet ja rajat huomioon ottaen.", "C.G. Jung"],

    ["Saiturin raha, joka tuo mukanaan pahoinvointia, raadantaa, sokaistumista ja unettomuutta, ei ole rahaa. Se on sydämen sairaus. Ei ahneus sammu rahasta eikä jano suolavedestä.", "Intialainen sananlasku"],

    ["Parasta aika lienee silloin, kun on tärkeä jollekin ja vieläpä muilla kuin rahallisilla perusteilla.", "Matti Kamppinen"],

    ["Typerää tehdä sama virhe kahdesti.", "Muumipappa"],

    ["Mielikuvitus kuljettaa meidät usein maailmoihin joita ei ole, mutta ilman mielikuvitusta emme mene minnekään.", "Carl Sagan"],

    ["Jos menet naimisiin, kadut. Jos et mene, kadut.", "Sokrates"],

    ["Koska minulla on vähiten tarpeita, olen lähimpänä jumalia.", "Sokrates"],

    ["Ihminen, tunne itsesi! Se on kaiken elämänviisauden alku.", "Sokrates"],

    ["Monet viettävät puolet ajastaan unelmoiden siitä, mitä heillä voisi olla, elleivät he olisi käyttäneet puolta ajastaan unelmoimiseen.", "Alexander Woolcott"],

    ["Kun kaikki päivät alkavat tuntua samanlaisilta, ihmiset eivät enää huomaa mitä hyvää heidän elämässään tapahtuu.", "Paulo Coelho"],

    ["Älä menetä toivorikkauttas millän taval. Kyl rätei ja lumpui piissa!", "Kersantti Urho Hietanen, Tuntematon sotilas"],

    ["Tämä puku ei mahdollista lentämistä.", "Ohje lasten Teräsmies-asussa"],

    ["Maailmassa on markkinoita noin viidelle tietokoneelle.", "IBM:n pääjohtaja Thomas Watson, "],

    ["Televisio on teoreettisesti ja teknisesti mielenkiintoinen laite, mutta taloudellisesti sillä ei ole mitään merkitystä.", "Tyhjiöputken keksijä Lee de Forest, "],

    ["Ei sinusta mitään tule, poika. Eiköhän ole parempi,että menet takaisin kuorma-auton rattiin.", "Manageri Jim Denny Elvis Presleylle, "],

    ["Äidiltä vie parikymmentä vuotta tehdä pojasta mies, ja sitten toinen nainen tekee hänestä hupsun parissakymmenessä minuutissa.", "Robert Frost"],

    ["Hymy on lyhin etäisyys kahden ihmisen välillä.", "Victor Borge"],

    ["Valkoinen mies tietää, miten hyödykkeet tehdään, mutta hän ei tiedä kuinka ne jaetaan.", "Istuva Härkä"],

    ["Nopeudesta ei ole hyötyä, jos suunta on väärä.", "Mahatma Gandhi"],

    ["Arvioi terveydentilasi sen mukaan, kuinka myötämielisesti suhtaudut aamuun ja kevääseen.", "Agatha Christie"],

    ["Mikään ei ole arvokkaampaa kuin tämä päivä.", "J.W. von Goethe"],

    ["Vaikeinta on vapaus. Ottaa aavistettu perhonen kiinni, vahingoittamatta. Ja raaskia päästää irti.", "Tommy Tabermann"],

    ["Älä etsi onnea. Jos etsit, et löydä sitä, sillä etsiminen on onnen vastakohta.", "Eckhart Tolle"],

    ["Ihmisiä, jotka paahtavat täysillä ja joilla on sisäinen hehku päällä, on paljon. Harmi, että he ovat valtaosin alle -vuotiaita.", "Esa Saarinen"],

    ["Meille ei anneta viisautta; meidän on löydettävä se itse matkalla, jota kukaan ei voi tehdä puolestamme tai lahjoittaa meille.", "Marcel Proust"],

    ["Jos elämme hyvää elämää, ajatkin ovat hyvät. Ajat ovat sellaiset kuin me olemme.", "Kirkkoisä Augustinus"],

    ["Elämän tarkoitus on itsensä kehittäminen. Olemme kaikki täällä siksi, että oppisimme tuntemaan täydellisesti oman olemuksemme.", "Oscar Wilde"],

    ["Ihminen on syntynyt elämään, ei valmistautumaan elämistä varten.", "Boris Pasternak"],

    ["Ihmiset yrittävät usein elää elämäänsä takaperin, he hankkivat rahaa ja tavaroita, jotta pystyisivät tekemään sitä mitä haluavat, tullakseen onnellisiksi. Elämähän kulkee juuri päinvastoin. Ihmisen täytyy ensin olla sitä, mitä on, sitten tehdä mitä hänen kuuluu tehdä, saadakseen sen mitä haluaa.", "Margaret Young"],

    ["Jos sydämestäsi uskot ja syvällisesti koet tällä hetkellä, että elämässäsi kaikki kulkee kohti parempaa, tulevaisuus työskentelee puolestasi ja ravitsee nykyhetkeäsi.", "Jari Sarasvuo"],

    ["Tyhjä lattiapinta tekee huoneen asuttavaksi ja joutoajat tekevät elämän siedettäväksi.", "Lin Jutang"],

    ["Elämän tiellä oikopolut ovat ajan haaskausta.", "Sanna Wikström"],

    ["Meidän päiviemme ihmiset tuhlaavat liian paljon aikaa kuunnellessaan toisten ihmisten puheita ja ajatuksia. He tekisivät viisaammin, jos soisivat itselleen enemmän rauhaa omien ajatustensa kuuntelemiseen. Tietoa me voimme oppia toisilta, viisaus meidän on opittava itseltämme.", "Axel Munthe, Huvila meren rannalla"],

    ["Elämämme päämäärän hyvyys tai huonous riippuu siitä, millaisen tien valitsemme päästäksemme siihen ja miten me tuon tien kuljemme.", "Paulo Coelho, Pyhiinvaellus"],

    ["Sankari on ihminen, joka kuuntelee vakavasti omia sisäisiä haaveitaan. Hän kuuntelee niitä niin vakavasti, että alkaa liikkua niiden suuntaan.", "Tommy Hellsten, Elämän paradoksit"],

    ["Ihmisen aivot alkavat toimia syntymähetkellä eivätkä pysähdy ennenkuin on noustava pitämään julkinen puhe.", "Sir George Jessel"],

    ["Jokainen haluaa elää kauan, mutta kukaan ei halua tulla vanhaksi.", "Jonathan Swift"],

    ["Joka sanoo että nuoruus on kypsää ikää onnellisempi, väittää että näköala tornin juurelta on parempi kuin sen huipulta.", "William Phelps"],

    ["Kokemus on nimi, jonka jokainen antaa erehdyksilleen.", "Oscar Wilde"],

    ["Lääketiede on edistynyt niin valtavasti, ettei terveitä ihmisiä oikeastaan enää ole.", "Aldous Huxley"],

    ["Minä en äiteliä puheita suvaitse. Rakkaus on tekemistä. Rakkaus on sitä, että pitää sanansa ja tulee ajallaan syömään.", "Arja Tiainen"],

    ["Jos et osaa vastaanottaa, antamisesi on toisen hallitsemista. Vastaavasti, jos et osaa antaa, vastaanottamisesi jättää sinut tyhjäksi.", "Psykologi Rollo May"],

    ["Velvollisuutemme on kertoa totuus ystävillemme, niin miellyttävää kuin se onkin.", "Magnus von Platen"],

    ["Ystävyys on yhteinen sielu kahdessa ruumiissa.", "Aristoteles"],

    ["Erehtyminen on inhimillistä, mutta asioiden perinpohjaiseen sotkemiseen tarvitaan tietokone.", "Paul Ehrlich"],

    ["Jos teet rajusti työtä kahdeksan tuntia päivässä, voit päästä pomoksi ja saat tehdä kaksitoistatuntisia päiviä.", "Robert Frost"],

    ["Totuus on yksi, vaikka viisaat kutsuvat sitä useilla eri nimillä.", "Rigveda"],

    ["Itse asiassa menestys on yksinkertainen yhtälö: Onnellisuus + Kasvu + Auttaminen = Menestys. Se on ainoa menestys, jonka tiedän.", "Joshua Fields Millburn, A Day in the Life of a Minimalist"],

    ["Monet jotka tekevät mitä häpeällisimpiä tekoja, pitävät mitä mainioimpia puheita.", "Demokritos"],

    ["Mielettömät toivovat itselleen pitkää ikää tulematta siitä kuitenkaan iloisiksi. He pakenevat kuolemaa ja kuitenkin tavoittelevat sitä. He eivät saa elämässään mistään tyydytystä.", "Demokritos"],

    ["Moraalisesti hyvää ei ole se, ettei tehdä väärin, vaan se, ettei edes tahdota tehdä väärin.", "Demokritos"],

    ["Nuoruuden etuna ovat voima ja kauneus. Vanhuuden kukinto on viisaus.", "Demokritos"],

    ["Onnella ei ole kukaan viisastunut.", "Seneca"],

    ["Jos haluat tehdä jotain, tee siitä itsellesi tapa; jos taas tunnet johonkin haluttomuutta, älä tee sitä.", "Epiktetos"],

    ["Lapsuuden etu on, että kauneus, ylellisyys ja onni ovat kaikki syötäviä.", "Simone de Beauvoir"],

    ["Mitä siitä, jos ihminen on terävä loogikko, jos hän ei ole hyvä ihminen.", "Ludwig Wittgenstein"],

    ["Jos haluat tehdä muut onnelliseksi, harjoita myötätuntoa. Jos haluat tehdä itsesi onnelliseksi, harjoita myötätuntoa.", "Dalai Lama"],

    ["Minun sukupolveni huomattavin löytö on se, että ihmiset voivat muuttaa koko elämänsä muuttamalla asenteensa. Sellainen tulet olemaan, kuten ajattelet. Huuhtele ulos kaikki vanhat, väsyneet ja kuluneet ajatukset. Täytä mielesi tuoreilla, uusilla ja luovilla ajatuksissa uskosta, rakkaudesta ja hyvyydestä", "Norman Vincent Peale"],

    ["Johonkin pääsemisen ja paikallaan polkemisen erottaa toisistaan rohkeus aloittaa varhain. Sitä joka lojuu toimettomana ja tekee vain, mitä käsketään, ei koskaan pyydetä tekemään suuria.", "Charles M. Schwab"],

    ["Ajattele positiivisesti siitä syystä, että ajatuksesi ovat luovia voimia. Kaikki mikä on ilmestynyt, aineellistunut tai toteutunut, on ensin ollut ajatuksena mielessä. Kaikki saa alkunsa ajatuksesta. Ajatus on luova. Jos se on myönteinen, voit saada ihmeitä aikaan. Jos se taas on kielteinen, saat aikaan ongelmia, sairauksia ja elämänkriisejä.", "Kirjailija Axel Fredenholm"],

    ["Totuus on salainen tunne, joka opettaa meitä iloitsemaan päivistämme ja jakamaan riemun lähimmäistemme kera.", "Kahlil Gibran"],

    ["Onnellisuutta ei voi ostaa rahalla, eikä mikään valta voi sitä käskeä. Se ei riipu ulkoisista tapahtumista, vaan tulkinnoistamme. Onnellisuus on tila, johon jokaisen täytyy yksityisesti valmistautua, ja jota hänen täytyy vaalia ja puolustaa", "Mihaly Csikszentmihalyi"],

    ["Onnetar voi viedä meiltä mahtimme, muttei rohkeuttamme.", "Seneca"],

    ["Kun Onnetar tulee, tarraa häntä edestä lujasti kiinni, sillä takaa hän on kalju.", "Leonardo da Vinci"],

    ["Onnellisuus on sitä, että se mitä ajattelet, se mitä sanot ja se mitä teet, ovat harmoniassa.", "Gandhi"],

    ["Häviäjä ei ole se joka kärsii tappion vaan se joka antaa periksi.", "Paolo Coelho"],

    ["Esihistoriallisen ajan suomalaisilla (homo depressiontis fennica) on varmaan joskus ollut kivaakin.", "Markus Kajo"],

    ["Aina kuulee sanottavan, ettei raha tee onnelliseksi. Mutta alitajuisesti ajattelin silti, että valtava rikastuminen tekisi minut kuitenkin edes vähän onnellisemmaksi. Niin ei kyllä käynyt.", "Googlen kehittäjä Sergey Brin"],

    ["Elämäsi onnellisuus riippuu ajatustesi laadusta. Sen tähden, vaali ajatuksiasi oikein ja huolehdi siitä, ettet pidä yllä mielikuvia tai ajatuksia, jotka ovat sopimattomia hyveellisyydelle ja järkevyydelle.", "Marcus Aurelius (- jKr.)"],

    ["Onnellinen elämä ei rakennu luksuksen maksimoimisesta tai kurjuuden minimoimisesta, vaan hyveidemme, taitojemme ja intohimojemme toteuttamisesta mielenterveydellisesti, taloudellisesti, sosiaalisesti ja ympäristöllisesti kestävällä tavalla.", "Tatu Hirvonen ja Esa Mangeloja, Miksi kolmas hampurilainen ei tee onnelliseksi?"],

    ["Kun saamme tehdä sitä, missä omat vahvuutemme ja hyveemme pääsevät parhaiten esiin, saamme myös parhaiten aikaan onnistumista, hyvää mieltä ja lopulta myös kestävää onnellisuutta.", "Tatu Hirvonen ja Esa Mangeloja, Miksi kolmas hampurilainen ei tee onnelliseksi?"],

    ["Siitäkään, että muistaisimme olla välistä kiitollisia kaikesta hyvästä, mitä olemme elämässämme saaneet kokea, tuskin olisi mitään haittaa onnellisuudellemme. Itse asiassa sekin on jo empiirisesti todistettu.", "Tatu Hirvonen ja Esa Mangeloja, Miksi kolmas hampurilainen ei tee onnelliseksi?"],

    ["Joukossa tyhmyys tiivistyy. Täysin samanmielisten joukossa tyhmyys kivettyy.", "Yritysvalmentaja Tapio Aaltonen"],

    ["Niin tietäväinen hän oli, että osasi sanoa 'hevonen' yhdeksällä kielellä ja niin tietämätön, että osti lehmän ratsastaakseen.", "Benjamin Franklin"],

    ["Kuinka nopeasti \"ei juuri nyt\" muuttuukaan muotoon \"ei koskaan\".", "Martti Luther"],

    ["Ainoa suunta, mihin voimme loputtomasti ja turvallisesti kasvaa, on sisäänpäin. Sieltä löytyy myös aika. Aikaa ei voi saada kiinni juoksemalla, vaan pysähtymällä.", "Mari Aulanko"],

    ["Eivät suuret ongelmat luonnetta vaadi. Kuka tahansa kykenee voittamaan valtavan kriisin ja kohtaamaan musertavan tragedian rohkeudella. Vasta mitättömien päivittäisten ikävyyksien kuittaaminen naurulla vaatii mielestäni jotain.", "Jean Webster"],

    ["Seitsemän kuolemansyntiä: varallisuus ilman työtä, nautinto ilman omaatuntoa, tiede ilman inhimillisyyttä, tieto ilman luonnetta, politiikka ilman periaatteita, kaupankäynti ilman moraalia, palvonta ilman uhrautumista.", "Mahatma Gandhi"],

    ["On erikoista, että fyysinen rohkeus on maailmassa niin yleistä ja moraalinen rohkeus niin harvinaista.", "Mark Twain"],

    ["Parempi olla yksin kuin huonossa seurassa.", "George Washington"],

    ["Kaikki alkaa vanhemman omasta epämukavuuden sietämisestä.", "Psykologi Keijo Tahkokallio"],

    ["Ihminen on töissä elämänsä parhaat tunnit. Työelämän mielekkääksi tai mielipuoliseksi kokeminen vaikuttaa ratkaisevasti koko elämän tarkoituksellisuuteen.", "Pekka Himanen"],

    ["Työ ei ole sitä mitä teet elääksesi. Työ on sitä mitä teet elämälläsi."],

    ["Moraali ei ole ahdasmielinen sana, vaan tärkeä perusperiaate, jonka kautta ihminen hakee vastuullista elämäntapaa ja sen kautta sisäistä rauhaa: tämä on oikein, näin on hyvä minulle ja meille.", "Kaija Maria ja Lari Junkkari, Läsnä ja lähellä"],

    ["Mitä hyötyä meillä on teknisen kehityksen mukanaan tuomasta hepotuksesta arkirutiineihin, jos emme suuntaa henkistä kapasiteettiamme uusiin löytöihin ihmismielen, uskonnon, tieteen, kulttuurin, taiteen ja ihmisten välisen vuorovaikutuksen alueilla?", "Kaija Maria ja Lari Junkkari, Läsnä ja lähellä"],

    ["Itsemme kehittäminen on loputon tehtävä, mutta pitäisikö meidän periaatteessa luopua kaikista pitkän tähtäimen toimista; silloin sellaisetkin käsitteet kuin harjoitus, kasvatus, kulttuuri ja henkinen tie olisivat mielettömiä. Onnea viljellään ja se saadaan aikaan vähitellen, pitkän ajan kuluessa.", "Matthieu Ricard"],

    ["Etiikka ei ota kantaa pelkästään elämän ja kuoleman kysymyksiin. Joka kerta toisen ihmisen kohdatessamme kohtaamme myös etiikan. Kuinka suhtaudun tähän yksilöön? Kuinka kohtaan hänen tarpeensa parhaiten? Kuinka paljon aikaa voin käyttää? Millaisia seurauksia toimillani on? Näenkö toisessa ihmisessä objektin vai yksilön? Etiikassa on siten kysymys taidosta olla ihminen (toiselle ihmiselle).", "Stefan Einhorn, Aidosti kiltti"],

    ["Tunnettuus haihtuu, suosio on sattumaa ja rikkaudet katoavat. Vain yksi kestää: luonne.", "Horace Greeley"],

    ["Luonne — tahto vastata omasta elämästä — on kaiken itsekunnioituksen lähde.", "Joan Didion"],

    ["Te olette oppineet käskyn rakastaa naapuria ja vihata vihollista. Minä sanon, että juuri vihollisianne teidän pitää rakastaa, ja niille, jotka teitä vainoavat, teidän pitää toivoa hyvää. Jos te tervehditte ystävällisesti vain tovereitanne, niin mitä erinomaista siinä muka on? Barbaaritkin tekevät niin. Teidän pitää olla hyviä kokonaan.", "Jeesus"],

    ["Näin viime yönä unta tuhannen vuoden kuluttua elävistä jälkeläisistämme. Kysyin heiltä, kuinka vastoin kaikkia odotuksia ihmiskunnan onnistui jatkaa elämäänsä kokonaisella vuosituhannella. He kertoivat minulle, että temppu tehtiin yksinkertaisesti: asettamalla elämä kuoleman edelle kaikissa tilanteissa, siinäkin tapauksessa, että oma kunnia oli vaakalaudalla. Ihmiset kestivät kaikenlaisia loukkauksia ja solvauksia ja pettymyksiä ilman että turvautuivat itsemurhaan tai murhaan. Myös he olivat ihmisiä, jotka loukkaavat ja solvaavat ja aiheuttavat pettymyksiä.", "Kurt Vonnegut"],

    ["Toimi oikein. Jotkut ilahtuvat, loput ällistyvät.", "Mark Twain"],

    ["Syvä merkityselämä löytyy käänteisesti: ajattelemmekin paitsi sitä, mikä merkitys elämällä on minulle, myös entistä enemmän sitä, millainen merkitys minulla on elämälle. Miten voin edistää hyvää ympärilläni? Miten eläen elämäni on arvokasta itseni lisäksi läheisilleni, maailmalle?", "Isa Merikallio"],

    ["Olen jo vanha mies ja kokenut monia vastoinkäymisiä, joista suurin osa ei ole koskaan tapahtunut.", "Mark Twain"],

    ["Rohkeus on tietämistä mitä tulee pelätä.", "Platon"],

    ["Ikä tuo ryppyjä ruumiiseen. Luovuttaminen tuo ryppyjä sieluun.", "Douglas MacArthur"],

    ["Kaikki viestintä on joko vastaamista rakkaudella tai avun huutamista. Jos joku kohdistaa kipunsa tai vihansa sinuun, mutta johdonmukaisesti vastaat rakkaudella ja lämmöllä, niin lopulta tämän henkilön olotila muuttuu ja kiihko katoaa.", "Anthony Robbins"],

    ["Itsensä kehittäminen on korkeampi kutsumus kuin itsensä uhraaminen.", "Suffragetti Elizabeth Stanton"],

    ["Rehellisyys ei välttämättä tuo sinulle lukuisia ystäviä, mutta se tuo aina ne oikeat.", "John Lennon"],

    ["Jos nykymaailmassa olisi enemmän ihmisiä, jotka toivoisivat itselleen enemmän onnea kuin toisille onnettomuutta, maailma olisi paratiisi muutamassa vuodessa.", "Bertrand Russel"],

    ["Inhimilliset onnentilat muistuttavat puuryhmiä, jotka kaukaa katsoen näyttävät ihmeen kauniilta. Jos kuitenkin menee niiden luo ja astuu niiden sisään, katoaa koko kauneus, itse puiden alla seisten kysyy turhaan, minne se on häipynyt. Tästä johtuu, että niin usein kahdehdimme toisten asemaa.", "Arthur Schopenhauer"],

    ["Ihminen laskee huolensa, vaan ei ilojaan. Jos hän sen tekisi, hän huomaisi että jokaisessa elämänosassa on kyllälti onnea.", "Fjodor Dostojevski"],

    ["Tosi onni on kyllä halpa, mutta miten kalliin hinnan maksammekaan sen väärennöksistä.", "Hosea Ballou"],

    ["Jospa tietäisit, kuinka vähän tarvitset tullaksesi onnelliseksi, et koskaan olisi levoton. Onnellinen on se, joka voi tehdä toiset onnelliseksi. Mutta joka ahneesti säilyttää onnen itsellään, menettää sen.", "Axel Fredenholm"],

    ["Se joka vaatii paljon itseltään ja odottaa muilta vähän, välttyy mielipahalta.", "Kungfutse"],

    ["Jos tavoittelisimme vain onnellisuutta, kaikki olisi helppoa. Mutta me haluamme olla onnellisempi kuin muut ihmiset ja siinä piilee ongelma: kuvittelemme muut onnellisemmiksi kuin he ovat.", "Montesquieu"],

    ["Onnellisuus on tyyntä ja iloisen viatonta itsevarmuutta.", "Henrik Ibsen"],

    ["Kaikkein kunnianhimoisin saavutus on olla onnellinen kotonaan.", "Samuel Johnson"],

    ["Joka on aina onnellinen on varmaankin hullu.", "Leo Rosten"],

    ["Onnea on jo sekin, että tiedämme kuinka pitkälle onnettomuutemme ulottuu.", "Francois de La Rochefoucauld"],

    ["Aikaansaavat ihmiset istuivat harvoin paikoillaan ja antoivat asioiden tapahtua heille. He ryhtyivät toimeen ja tapahtuivat asioille.", "Leonardo da Vinci"],

    ["Niillä jotka ajattelevat tietävänsä kaiken on eniten opittavaa.", "E. Carter"],

    ["Elämä on sitä mitä meille tapahtuu sillä aikaa kun teemme muita suunnitelmia.", "Thomas la Mance"],

    ["Useimmat ihmiset eivät elä elämäänsä. He vain hyväksyvät elämänsä.", "John Kotter"],

    ["Elät vain kerran, mutta jos teet sen oikein, kerta riittää.", "Mae West"],

    ["Jos puhut totta, ei sinun tarvitse muistaa mitään.", "Mark Twain"],

    ["Anna aina anteeksi vihamiehillesi; mikään muu ei ärsytä heitä yhtä paljon.", "Oscar Wilde"],

    ["Olen niin älykäs, etten toisinaan ymmärrä sanaakaan siitä mitä sanon.", "Oscar Wilde"],

    ["Olen oppinut, että ihmiset unohtavat mitä sanoit, he unohtavat mitä teit, mutta he eivät koskaan unohda mitä sait heidät tuntemaan.", "Maya Angelou"],

    ["Eläminen on harvinaisinta koko maailmassa. Useimmat ihmiset ovat vain olemassa.", "Oscar Wilde"],

    ["Olla oma itsesi maailmassa, joka yrittää jatkuvasti tehdä sinusta jotakin muuta, on suurin mahdollinen saavutus.", "Ralph Waldo Emerson"],

    ["Aina kun huomaat olevasi enemmistön puolella, on aika pysähtyä ajattelemaan.", "Mark Twain"],

    ["Rakkauden vastakohta ei ole viha, vaan välinpitämättömyys. Taiteen vastakohta ei ole rumuus, vaan välinpitämättömyys. Uskon vastakohta ei ole harhaoppi, vaan välinpitämättömyys. Ja elämän vastakohta ei ole kuolema, vaan välinpitämättömyys.", "Elie Wiesel"],

    ["Vapauden ja onnen esteenä olevan mitättömän ja näennäisen ohittaminen, siinä on meidän elämämme tarkoitus ja päämäärä. Eteenpäin!", "Anton Tsehov"],

    ["Meillä on vain tämä hetki ja siihen kannattaa tarttua. On äärimmäistä tuhlausta jäädä odottelemaan, mitä elämä ehkä meille joskus mahtaa tarjota, jos sille päälle sattuu. Yhtä turhaa on odottaa, että joku tulee ja korjaa elämäsi. Ei tule eikä korjaa. Sinun on itse rakennettava ihmissuhteesi, löydettävä elämällesi tarkoitus, parannettava elintapasi tai muutettava, mitä muutettava on. Sinä olet vastuussa elämästäsi.", "Mikael Jungner"],

    ["Tee mitä voit, sillä mitä sinulla on, siellä missä olet.", "Theodore Roosevelt"],

    ["Jos palaat kotiin vähemmän energisenä, kuin olit töihin lähtiessäsi, syyllistyt vakavaan rikkomukseen: varastat kotoa.", "Jagdish Parikh"],

    ["En tarvitse ystävää, joka muuttuu kun minä muutun ja joka nyökkää kun minä nyökkään; varjoni tekee sen paljon paremmin.", "Plutarkhos"],

    ["Kaikessa on kauneutta, mutta kaikki eivät näe sitä.", "Konfutse"],

    ["Nuoruus on onnellinen, koska se pystyy näkemään kauneuden. Se kuka säilyttää kauneuden näkemisen taidon ei koskaan vanhene.", "Franz Kafka"],

    ["Jos olet liian avomielinen, pudotat aivosi.", "Lawrence Ferlinghetti"],

    ["Älä koskaan jätä käyttämättä hyvää tilaisuutta sulkea turpasi.", "Näyttelijä Will Rogers"],

    ["Olen logiikan mestari ja vakuuttava väittelijä. Itse asiassa, vaikka tietäisin mitä tulisi tehdä, saan puhuttua itseni ympäri.", "Jarod Kintz"],

    ["Aika on lopulta jokaisen ihmisen ainut pääoma ja se asia, jota on vähiten varaa hukata tai hävittää.", "Thomas Edison"],

    ["Kieltäydy valittamasta. Valittaminen on vain vastuun pakoilua, tekemättömyyden oikeuttamista ja itsesi ohjelmointia epäonnistumaan. Valittaminen luo illuusion, että olet tehnyt jotain. Valittajat keskittyvät menneeseen, luopuen näin voimistaan. Voittajat taas keskittävät voimansa ratkaisuiden etsimiseen.", "Les Brown"],

    ["Epäonnistuminen on vain mahdollisuus aloittaa alusta, tällä kertaa fiksummin.", "Henry Ford"],

    ["Toiminta ei välttämättä tuo aina onnellisuutta, mutta ei ole onnellisuutta ilman toimintaa.", "William James"],

    ["Jos pitäisi yhdellä sanalla kuvata miksi ihmiskunta ei ole saavuttanut, eikä koskaan saavuta, täyttä potentiaaliaan, se sana olisi \"kokoukset\".", "Kirjailija Dave Barry"],

    ["Toukka tekee kaiken työn, mutta perhonen saa kaiken julkisuuden.", "George Carlin"],

    ["Mahdollisen rajat löytyvät vain kulkemalla hieman niiden yli, mahdottomuuteen.", "Kirjailija Arthur C. Clarke"],

    ["Olosuhteet ovat heikolle hallitsijoita, mutta viisaalle vain välineitä.", "Samuel Lover"],

    ["Elämässä on kaksi perusvalintaa: hyväksyä olosuhteet sellaisina kuin ne ovat – tai hyväksyä vastuu niiden muuttamisesta.", "Denis Waitley"],

    ["Elämäsi parhaat vuodet ovat ne, jolloin päätät että sinun ongelmasi ovat sinun ongelmiasi. Et syytä niistä äitiä tai ekologiaa tai presidenttiä. Tajuat että hallitset omaa kohtaloasi.", "Psykologi Albert Ellis"],

    ["Viime kädessä ei ole kysymys siitä mitä teet lastesi hyväksi, vaan siitä mitä olet opettanut heitä tekemään oman itsensä hyväksi.", "Kolumnisti Ann Landers"],

    ["Monet ihmiset antavat huolilleen uimaopetusta sen sijaan, että hukuttaisivat ne.", "Mark Twain"],

    ["Nuorempana minä pystyin muistamaan mitä hyvänsä, oli se tapahtunut tai ei.", "Mark Twain"],

    ["Ollessani neljäntoista isäni oli niin tietämätön, että tuskin siedin häntä lähelläni. Mutta kun täytin kaksikymmentäyksi, hämmästyin kuinka paljon hän oli oppinut seitsemässä vuodessa.", "Mark Twain"],

    ["Synnyin vaatimattomaksi, mutta sitä ei kestänyt kauan.", "Mark Twain"],

    ["Tämä sääntö pätee aina: kaikissa mielipideasioissa vastustajamme ovat järjettömiä.", "Mark Twain"],

    ["Kaikkien pitäisi saada rahaa ja mainetta ja päästä toteuttamaan kaikki haaveensa, jotta he tajuaisivat, ettei siinä ole vastaus kaikkeen.", "Näyttelijä Jim Carrey"],

    ["Kukaan ei saa elämässä juuri sitä mitä haluaa, mutta jos työskentelet todella kovasti ja olet ystävällinen, uskomattomia asioita tulee tapahtumaan.", "Conan O’Brien"],

    ["Johtajuudessa puhutaan niin suurista asioista, että niiden alkeellinen ymmärtäminen alkaa vasta neljänkympin tienoilla.", "Jari Sarasvuo"],

    ["Palkkaisin ennemmin miehen jolla on innostusta, kuin miehen joka tietää kaiken.", "Öljymagnaatti John D. Rockefeller"],

    ["Paras koulutus, jonka voit hankkia, on sijoitus itseesi. Sen ei tarvitse aina tarkoittaa korkeakoulua tai yliopistoa.", "Sijoittajaguru Warren Buffet"],

    ["Henkilökohtainen kasvu ei ole vain menestyksen edellytys vaan olennainen osa itse menestystä.", "Jussi Ruokomäki"],

    ["Loukkaus häpäisee vain lausujansa.", "Kungfutse"],

    ["Ainainen aikominen jättää asiat puolitiehen.", "Filosofi Demokritos (– eKr.)"],

    ["Elämä vailla juhlia on kuin pitkä tie vailla lepotaukoja.", "Filosofi Demokritos (– eKr.)"],

    ["Anteeksianto on kostoa parempi.", "Filosofi Pittakos"],

    ["Tärkein kysymys, paljon tärkeämpi kuin huipun saavuttamiseen käytetty aika, on se, kiipesitkö ylipäätään oikealle vuorelle.", "Sarjayrittäjä Daniel Epstein"],

    ["Älä jätä konfliktia huomiotta. Sanonta \"aika parantaa haavat\" on täyttä roskaa. Konflikti ei selviä itsekseen: sinun on selvitettävä se. Vain rohkeat ihmiset selvittävät konflikteja. Rohkein tekosi saattaa olla pitkäaikaisen ristiriidan selvittäminen, liittyi se sitten avioliittoosi, lapsiisi, työntekijöihisi tai pomoosi.", "Rick Warren"],

    ["Elämä on ajattelemista.", "Cicero (- eKr.)"],

    ["Joka kestää vikojani, hän on minun herrani, vaikka hän olisi palvelijanikin.", "Goethe"],

    ["Kun lopulta hyväksyy itsensä sellaisena kuin on, ei ehkä enää olekaan sellainen.", "Jarmo Somppi"],

    ["Valitseeko mitään se, joka osaa elää vain toisin?", "Hilja Mörsäri"],

    ["Juuri menetetty on enemmän olemassa kuin silloin kun se vielä oli.", "Hilja Mörsäri"],

    ["Elämä ei koostu niistä päivistä, jotka ovat menneet, vaan niistä, jotkä jäivät muistiin.", "Pjotr Pavlenko"],

    ["Harvat ovat samanikäisiä itsensä kanssa.", "Tove Ditlevsen"],

    ["Jos elämä on tylsää, teroita se.", "Jarmo Somppi"],

    ["Kateus on sielun home.", "V. A. Koskenniemi"],

    ["Menin itseeni. Oli ahdasta. Tulin pois.", "Torsti Lehtinen"],

    ["Jos sinulla on jonkun ihmisen rakkaus, et voi maksaa siitä millään uhrilla liikaa. Mutta sen ostamiseen on jokainen uhri liian suuri.", "Filosofi Ludwig Wittgenstein"],

    ["Elämä ei ole ongelma, joka pitäisi ratkaista, vaan todellisuus joka on koettava.", "Filosofi Søren Kierkegaard"],

    ["Maailman valloittaminen ratsain on helppoa. Laskeutuminen satulasta ja hallitseminen, se on vaikeaa.", "Tsingis-kaani"],

    ["Anteeksianto on jumalallinen voitto. Vihollinen joka vain on lyöty maahan voi nousta uudelleen. Mutta leppynyt vihollinen on todella voitettu.", "Runoilija Friedrich Schiller"],

    ["Rakkaus on elämää. Jos jäät paitsi rakkaudesta, jäät paitsi elämästä.", "Kirjailija Leo Buscaglia"],

    ["Rakkaus ei ole tunne, joka tuntuu hyvältä; se on ihmissuhde, joka sisältää vuorollaan kaikkia mahdollisia tunteita. Rakkaus on tervettä sitoutumista toiseen, halua rakastaa silloinkin, kun ei varsinaisesti tunnu siltä. Toisaalta on selvää, että rakkaus ei ole pelkästään myönteisten asioiden sanomista, vaan vilpitöntä halua löytää aito yhteys toisen kanssa, mitä se sitten kulloinkin onkaan.", "Kaija Maria ja Lari Junkkari, Läsnä ja lähellä"],

    ["Ystäväni, tahdot siis tuntea elämisen taidon? Se mahtuu yhteen lauseeseen: hyödynnä kärsimys.", "Filosofi Henri Frédéric Amiel"],

    ["Ihmiset tarvitsevat muistutusta enemmän kuin ohjeistusta.", "Kirjailija Samuel Johnson"],

    ["Jos kaipaat kunnioitusta, ole kunniallinen."],

    ["On lähes mahdotonta olla yhtaikaa masentunut ja aktiivinen. Vaikka haluaisitkin, niin sinun on vaikeata jatkaa murjottamista, valittamista, laahustamista ja itsesäälissä kieriskelemistä, jos alat toimia ja teet jotakin. Mitä tahansa!", "Wayne W. Dyer"],

    ["Eipä ole juuri mitään helpompaa kuin elää huonosti ja kuolla hyvin.", "Kirjailija Oscar Wilde"],

    ["Elämä ei ole ikinä reilua. Ja ehkä on hyväksi useimmille meistä ettei se ole.", "Kirjailija Oscar Wilde"],

    ["Jos minun pitäisi tiivistää yhteen lauseeseen kaikista tärkein periaate, jonka olen ihmissuhteiden alueella oppinut, se olisi tämä: tavoittele ensin ymmärrystä, vasta sitten ymmärretyksi tulemista.", "Stephen Covey"],

    ["Kohteliaisuus on kuin ilmatyyny. Se saattaa olla tyhjää täynnä, mutta se vaimentaa mukavasti elämän kolhaisut.", "Samuel Johnson"],

    ["Älä koskaan ripustaudu loukkaukseen, sillä katkeruus murtaa sinut. Katkeruus on kuin myrkyn juontia olettaen, että toinen kuolee.", "Rick Warren"],

    ["Jos löydän oveni edestä lehmänlantaa, en ole tyytyväinen siihen, että olen henkisesti valmis törmäämään lehmänlantaan jatkossakin. Tahdon heittää lannan puutarhaani ja toivon, että lehmä palaa joka viikko, eikä minun enää tarvitse ostaa lannoitetta. Epäonnistuminen on resurssi, jota voi hallita.", "Sarjakuvapiirtäjä Scott Adams"],

    ["Jos kuulet sisäisen äänen, joka sanoo: \"sinä et osaa maalata\", jatka kaikin mokomin maalaamista – ja pian se ääni vaikenee.", "Vincent Van Gogh"],

    ["Hymy on kaari, joka vetää mutkat suoriksi.", "Näyttelijä Phyllis Diller"],

    ["Ihmisen pitäisi olla kiitollinen, jos hänellä on vika, josta häntä voidaan epäoikeudenmukaisesti syyttää.", "Kirjailija Oscar Wilde"],

    ["Ihmisen pitäisi olla vaipunut elämän tunnelmaan ja olla muistamatta sen yksityiskohtia. Yksityiskohdat ovat aina mauttomia.", "Kirjailija Oscar Wilde"],

    ["Itsekkyys ei ole sitä kun elää niin kuin haluaa, se on sitä kun pyytää muita elämään niin kuin haluaa.", "Kirjailija Oscar Wilde"],

    ["Kaikki on vaarallista, ystävä hyvä. Jos näin ei olisi, elämä ei olisi elämisen arvoista.", "Kirjailija Oscar Wilde"],

    ["Voimme parhaassa tapauksessa saada elämässämme yhden hienon kokemuksen ja elämän salaisuus on tuottaa tuo kokemus mahdollisimman monesti.", "Kirjailija Oscar Wilde"],

    ["Mikään muu ei auta elämässä niin kuin tietoisuus muiden valtavasta huonommuudesta, ja juuri sitä tunnetta minä olen aina vaalinut.", "Kirjailija Oscar Wilde"],

    ["Modernissa elämässä mikään ei aiheuta sellaista vaikutusta kuin kunnon latteus. Se yhdistää kaikki.", "Kirjailija Oscar Wilde"],

    ["Useimmat ihmiset ovat toisia ihmisiä. Heidän ajatuksensa ovat jonkun toisen mielipiteitä, heidän elämänsä jäljittelyä, heidän intohimonsa sitaatti.", "Kirjailija Oscar Wilde"],

    ["Mitäpä siitä vaikka elämä menee. Se on niin kallistakin.", "Kirjailija Stanisław Jerzy Lec (–)"],

    ["Avioliitossa pitää lakkaamatta taistella sen pahinta pelkoa – tottumusta – vastaan, ennen kuin se ehtii nielaista kaiken kitaansa.", "Kirjailija Honoré de Balzac ( – )"],

    ["Televisio on mielestäni erittäin opettavainen laite. Aina kun joku panee sen kapistuksen päälle, siirryn toiseen huoneeseen lukemaan kirjaa.", "Groucho Marx"],

    ["Kieltäydyn vastaamasta esitettyyn kysymykseen sillä perusteella, etten tiedä vastausta.", "Douglas Adams"],

    ["Vältän yleensä kiusausta, paitsi jos en voi vastustaa sitä.", "Mae West"],

    ["Nyt iski muistinmenetys ja déjà vu yhtä aikaa. Luulen että olen unohtanut tämän aiemminkin.", "Steven Wright"],

    ["Suu on tehty viestintää varten, eikä mikään kerro enempää kuin suudelma.", "Jarod Kintz"],

    ["Jos ainut työkalu on vasara, kaikki ongelmat näyttävät nauloilta.", "Psykologi Abraham Maslow"],

    ["Jatkuva puhe ei välttämättä ole kommunikointia.", "Charlie Kaufman"],

    ["Kaikkein tärkein asia kommunikaatiossa on kuulla se, mitä ei sanota.", "Peter Drucker"],

    ["Aatteelle saa uhrata ainoastaan omansa, ei toisten elämää.", "Romain Rolland"],

    ["Vaikka olisit oikeilla raiteilla, ylitsesi ajetaan, jos vain seisot paikoillasi.", "Näyttelijä Will Rogers"],

    ["Huhu kulkee nopeammin, mutta ei pysy paikoillaan kuten totuus.", "Näyttelijä Will Rogers"],

    ["Kylvä ajatus; korjaa teko. Kylvä teko; korjaa tapa. Kylvä tapa; korjaa luonne. Kylvä luonne; korjaa kohtalo.", "Kirjailija Samuel Smiles"],

    ["Ellei paremmasta mitään tiedä, keskinkertainen on hyvää, kurja siedettävää, sietämätön mahdollista ja surkea normaalia.", "Kirjailija Henrik Tikkanen"],

    ["Hullu työtä tekee, viisas elää vähemmälläkin. Mutta työ se sentään on hauskinta elämässä – ei siitä mihinkään pääse.", "Kirjailija Minna Canth ( – )"],

    ["Johtajan ensimmäinen vastuu on todellisuuden määrittäminen. Viimeinen on sanoa kiitos. Siinä välissä johtaja on palvelija.", "Liikemies Max De Pree"],

    ["Toisista tuli sodan jälkeen puliukkoja, toisista maistereita. Se oli itsestä kiinni ihan kaikki.", "Sotakamreeri Reino Lehväslaiho"],

    ["Parasta valttia ovat kommunikaatio, sosiaaliset taidot ja aloitekyky. Sitkeys, aloitteellisuus, optimismi ja joustavuus avustavat menestykseen.", "Psykologi Daniel Goleman"],

    ["Onnellinen on se, jolla on joku, joka kakkaa hänen päälleen.", "Efe-heimon sananlasku"],

    ["Jos sinun täytyy valita  tuntia viikossa enemmän uralle tai  tuntia enemmän rakkaudellisille ihmissuhteille, valitse ihmissuhteet. Se on hyvä vaihtokauppa, kahdestakin syystä. Ensiksi, olet onnellisempi. Toiseksi, teet työsi paremmin. Ihmissuhteet ovat suurin onnellisuuden lähde ja niihin on kätkettynä siunaus.", "Harvardin liiketoiminnan professori Clayton Christensen"],

    ["Kukaan ei ole kehittynyt tai kasvanut ihmisenä ilman tietoista sitoutumista kasvaa itse ja kasvattaa muita ympärillään. Jokainen tietämäni hyvä asia alkaa sitoutumisesta. Se on ensimmäinen askel. Se ei ole ainut askel, eikä se ole viimeinen, mutta ilman sitä ei ole alkua, ilman sitä ei ole pääsyä loppuun, ilman sitä ei ole jatkoa.", "Johtajuusguru John Maxwell"],

    ["Ihmiset eivät välitä kuinka paljon tiedät, ennen kuin he tietävät kuinka paljon välität.", "Johtajuusguru John Maxwell"],

    ["Älä kato ittees, kato taivasta.", "Kanta-Hämeen pelastuslaitoksen ensihoitaja"],

    ["Nuori voi olla vain kerran, mutta aina voi olla lapsellinen.", "Kirjailija Dave Barry"],

    ["Joillakin ihmisillä on sana hallussa, ja taas joillakin’ äh’ ei ole’ haltua.", "Koomikko Steve Martin"],

    ["Yksikään hyvä teko ei jää rangaistuksetta.", "Kirjailija Oscar Wilde"],

    ["Mitä vanhemmaksi kasvan, sitä enemmän epäilen yleistä totuutta, joka sanoo iän tuovan viisautta.", "Toimittaja H. L. Mencken"],

    ["Opi muiden virheistä, sillä et tule elämään tarpeeksi pitkään tehdäksesi ne kaikki itse.", "Koomikko Groucho Marx"],

    ["Viisaus tulee kokemuksesta. Kokemus on usein seurausta viisauden puutteesta.", "Kirjailija Terry Pratchett"],

    ["Elä niin kuin kuolisit huomenna. Opi niin kuin eläisit ikuisesti.", "Mahatma Gandhi"],

    ["Minua on aina kiehtonut se, että monet suunnittelevat joulua enemmän kuin omaa elämäänsä.", "John Maxwell"],

    ["Välttääksesi kritiikkiä, älä tee mitään, älä sano mitään äläkä ole mitään.", "Kirjailija Elbert Hubbard"],

    ["En koskaan unelmoinut menestyksestä. Tein töitä sen eteen.", "Liikenainen Estée Lauder"],

    ["Se mitä ihminen tarvitsee, ei ole toimeton tila, vaan pikemminkin ponnistelu jonkin hänelle tärkeän asian hyväksi. Se, mitä tarvitsemme ei ole päästä lepoon ja mukavuuteen hinnalla millä hyvänsä, vaan vastata sen merkityksen kutsuun, joka odottaa meidän toteuttamistamme.", "Psykiatri Viktor E. Frankl"],

    ["Lopulta ihmisen ei tulisi kysyä, mikä elämän merkitys on hänelle, vaan mieluummin tunnistaa, että hän on se, jolta kysytään. Elämä kysyy meiltä jokaiselta ja voimme vastata elämälle vain ottamalla vastuun.", "Psykiatri Viktor E. Frankl"],

    ["Unelmiemme elämässä ei ole ongelmia, siksi se onkin unelmaa, ei elämää.", "Yritysjohdon valmentaja Isa Merikallio, Suorituselämästä merkityselämään"],

    ["Hyvän elämän ohje olisi: tee työtä ja leiki täysin sydämin, lujalla ja rennolla otteella. Elä nyt, elä tässä, elä elämääsi täydestä sydämestäsi, oli kädessäsi vasara tai vihta. Ainoa todellinen varallisuus, joka sinulla on ja jonka käytöstä päätät joka hetki, on aika. Sitä et voi säästää, mutta sitä voit tuhlata.", "Yritysjohdon valmentaja Isa Merikallio, Suorituselämästä merkityselämään"],

    ["Ihmisen arvon mitta ei ole se, miten hän toimii hyvinä, helppoina hetkinä, vaan se, miten hän toimii haasteiden ja vastoinkämisten kohdatessa.", "Martin Luther King Jr."],

    ["Sinun ei tarvitse olla loistava voidaksesi aloittaa, mutta sinun on aloitettava voidaksesi olla loistava.", "Les Brown"],

    ["Opi ajoissa virittäytymään toiselle taajuudelle. Jos kuuntelet liikaa neuvoja, voit päätyä tekemään muiden ihmisten virheet.", "Kolumnisti Ann Landers"],

    ["Kun olin nuori, ihailin viisaita ihmisiä. Nyt kun olen vanha, ihailen ystävällisiä ihmisiä.", "Rabbi Abraham Joshua Heschel"],

    ["Meidän täytyy olla halukkaita hankkiutumaan eroon suunnittelemastamme elämästä, jotta voimme elää sitä elämää, joka odottaa meitä.", "Professori Joseph Campbell"],

    ["Täydellistä päivää ei voi elää ilman, että auttaa jotakuta, joka ei voi koskaan maksaa takaisin.", "Valmentaja John Wooden"],

    ["Joka aamu synnymme uudestaan. Vain se mitä teemme tänään merkitsee.", "Buddha"],

    ["Vahdi ajatuksiasi, niistä tulee sanoja. Vahdi sanojasi, niistä tulee tekoja. Vahdi tekojasi, niistä tulee tapoja. Vahdi tapojasi, niistä tulee luonne. Vahdi luonnettasi, siitä tulee kohtalosi.", "Filosofi Laozi (- eKr.)"],

    ["En aio olla alaviite jonkun toisen elämässä.", "Kirjailija Martha Gellhorn"],

    ["Esittäessäsi pientä et palvele maailmaa. Siinä ei ole mitää ylevää, että kutistat itsesi, jotta muut eivät tuntisi itseään epävarmoiksi rinnallasi. Meidät kaikki on tarkoitettu säteilemään, lasten tavoin.", "Marianne Williamson"],

    ["Ihmiskunta ottaa itsensä liian vakavasti. Se on maailman perisynti. Jos luolaihminen olisi tiennyt kuinka nauraa, historia olisi ollut erilainen.", "Kirjailija Oscar Wilde"],

    ["Hiljaisen menneisyyden opit ovat riittämättömiä myrskyisessä nykyhetkessä. Tämä tilanne on täynnä vaikeuksia ja meidän on kasvettava sen mukana. Koska tilanteemme on uusi, meidän on ajateltava uudella tavalla ja toimittava uudella tavalla. Meidän tulee rikkoa vanhan lumous ja siten pelastaa maamme.", "Abraham Lincoln"],

    ["Ilmastonmuutos on suuri mahdollisuus.", "Liikemies Richard Branson"],

    ["Elämässä tarvitsee tehdä oikein vain harvoja asioita – kunhan ei tee väärin liian monia asioita.", "Sijoittaja Warren Buffet"],

    ["Kuka ihmeessä haluaisi kuulla elokuvanäyttelijöiden puhuvan?", "Elokuvayhtiön johtaja Harry Warner"],

    ["Kellään ole mitään syytä pitää tietokonetta kotonaan.", "Digital Equipment-yhtiön perustaja ja pääjohtaja Kenneth Olsen"],

    ["Rakastuminen on ainoa sosiaalisesti hyväksytty psykoosin muoto.", "Psykiatri Elvin Semrad"],

    ["Onnellisessa parisuhteessa toinen ei ole palanen, joka minusta puuttuu.", "Psykiatri Matti O. Huttunen"],

    ["Kun ihminen saa vastuuta, häneen uskotaan ja häntä tuetaan sopivasti, niin jokainen meistä leimahtaa liekkeihin.", "Yritysjohdon valmentaja Makke Leppänen"],

    ["Lainattavat lainaukset ovat kolikoita, jotka kierto on hionut sileiksi.", "Kirjailija Louis Menand"],

    ["Kaikilla on huumorintajua. Jos et naura vitseille, naurat luultavasti mielipiteille.", "Runoilija Criss Jami"],

    ["Elämä on tässä ja nyt, tänään. Se on ainoa elämä josta voit olla varma. Käytä tämä päivä hyvin. Elä tämä päivä antaumuksella.", "Dale Carnegie"],

    ["Olemme vastuussa omasta onnellisuudestamme. Emme voi ottaa vastuusta kaikesta siitä, mitä meille tapahtuu, mutta olemme vastuussa siitä, miten suhtaudumme tapahtumiin.", "Yritysjohdon valmentaja Isa Merikallio"],

    ["On helppoa olla samaa mieltä, on helppoa olla mieletön,  vaan enemmän löytää,  kun poikkeaa tieltä  ja oikaisee läpi metsikön.", "Juice Leskinen"],

    ["-luvun lukutaidottomia eivät ole ne, jotka eivät osaa lukea ja kirjoittaa, vaan ne, jotka eivät osaa oppia, unohtaa oppimaansa ja oppia uudelleen.", "Tulevaisuudentutkija Alvin Toffler"],

    ["Äänestät joka kerta kun käyt ostoksilla.", "Alex Zanotelli"],

    ["Äärimmäinen erikoistuminen vastaa äärimmäistä sivistyksen puutetta.", "Filosofi José Ortega y Gasset"],

    ["Aasikin voi mennä Mekkaan, mutta ei se vielä tee siitä pyhiinvaeltajaa.", "Arabiankielinen sananlasku"],

    ["Aina kun opetat jotain, opeta kuulijasi epäilemään opetuksia.", "Filosofi José Ortega y Gasset"],

    ["Toiminta ilmaisee tärkeysjärjestyksen.", "Mahatma Gandhi"],

    ["Nuorena oletin, että työn pitää olla vaikeaa, mutta parisuhteen helppo. Jos asiat eivät toimineet mutkattomasti tyttöystävän kanssa, olin varma, että hän ei ole se oikea minulle. Vanhemmiten olen ymmärtänyt, että suhteen eteen pitää tehdä töitä. On kuunneltava ja otettava huomioon toisen tunteet ja tarpeet. Parisuhteessa on kaksi ihmistä, jotka puhuvat asioista eri tavoilla. Kompromissit ja tarkennukset kuuluvat arkeen.", "Näyttelijä Vince Vaughn"],

    ["Ennen kuin olet johtaja, menestys tarkoittaa itsesi kasvattamista. Kun sinusta tulee johtaja, menestys tarkoittaa muiden kasvattamista.", "Jack Welch"],

    ["Yksi pahimmista johtamiseen liittyvistä myyteistä on se, että johtaminen tulee geeneistä. Tämä on järjetöntä, sillä itse asiassa se menee päinvastoin. Johtajaksi kehitytään, ei synnytä.", "Johtajuuden tutkija Warren Bennis"],

    ["Johtaminen on palvelemista, ei sen enempää tai vähempää.", "Poliitikko André Malraux"],

    ["Joka ei koskaan oppinut tottelemaan, ei voi olla hyvä johtaja.", "Aristoteles"],

    ["Tittelillä tai asemalla ei ole merkitystä, jos haluaa tulla johtajaksi, jota ihmiset seuraavat vapaaehtoisesti.", "Brian Tracy"],

    ["Kuka tahansa voi pidellä ruoria, kun meri on tyyni.", "Kirjailija Publilius Syrus ( eKr.)"],

    ["Johtamisen taitoa on sanoa ei. On todella helppoa sanoa kyllä.", "Poliitikko Tony Blair"],

    ["Nykypäivänä avain menestyksekkääseen johtamiseen on vaikuttaminen, ei auktoriteetti.", "Johtamisen asiantuntija Kenneth Blanchard"],

    ["En ole se mitä minulle tapahtui, olen se mitä valitsen olevani.", "Psykoanalyytikko Carl Jung"],

    ["Taito osuu kohteeseen, johon muut eivät osu; nerokkuus osuu kohteeseen, jota muut eivät näe.", "Filosofi Arthur Schopenhauer (–)"],

    ["Aina kun ihmiset ovat kanssani samaa mieltä, minusta tuntuu että olen väärässä.", "Kirjailija Oscar Wilde"],

    ["Ainut tärkeä asia, jonka jätämme jälkeemme, on rakkautemme jättämät jäljet.", "Teologi Albert Schweitzer"],

    ["Älä käytä suuria sanoja. Ne merkitsevät niin vähän.", "Kirjailija Oscar Wilde"],

    ["Ei riitä, että ryntäilet ympäriinsä, aloitat kaikenlaista ja olet koko ajan kiireinen. Hyvin käytetty aika on sitä, että viet päätökseen sen minkä olet aloittanut.", "Hengellinen opettaja Eknath Easwaran"],

    ["Rakkauden pelko on elämän pelkoa, ja ne jotka pelkäävät elämää ovat jo kolmelta neljäsosaltaan kuolleita.", "Filosofi Bertrand Russell"],

    ["Ajatteleminen on töistä raskain.", "Liikemies Henry Ford"],

    ["Älä lue huvin vuoksi kuten lapset tai oppiaksesi kuten aikuiset. Ei, lue elääksesi.", "Kirjailija Gustave Flaubert"],

    ["Älä odota oikeaa hetkeä: luo se.", "Kirjailija George Bernard Shaw"],

    ["Älkää käyttäkö tuota vieraskielistä sanaa \"ideaalit\". Meillä on hieno oma sana \"valheet\".", "Näytelmäkirjailija Henrik Ibsen"],

    ["Älykkään on vaikea olla vilpitön, aivan samoin kuin kunnianhimoisen on vaikea olla rehellinen.", "Runoilija Fernando Pessoa"],

    ["Asiantuntija on henkilö, joka on tehnyt kaikki mahdolliset virheet hyvin kapealla alalla.", "Fyysikko Niels Bohr"],

    ["Kuinka harvassa ovatkaan ihmiset, joilla on tarpeeksi rohkeutta myöntää virheensä tai tarpeeksi tahtoa korjata ne.", "Benjamin Franklin"],

    ["Sen sijaan, että taivastelet seuraavan lomasi ajankohtaa, voisit ehkä rakentaa elämän, jota ei tarvitse lähteä karkuun.", "Seth Godin"],

    ["Mahdollisuuden tullessa on myöhäistä valmistautua.", "Valmentaja John Wooden"],

    ["Kaksi asiaa määrittävät sinut. Kärsivällisyytesi kun sinulla ei ole mitään ja asenteesi kun sinulla on kaikki."],

    ["Tavoitteet ovat polttoainetta saavutuksille. Mitä suuremmat ja selvemmät tavoitteesi ovat, sitä enemmän innostut niistä. Ja mitä enemmän ajattelet tavoitteitasi, sitä suurempi on tahtosi saavuttaa ne.", "Brian Tracy"],

    ["Hänen, joka sanoo, ettei sitä voi tehdä, ei pitäisi keskeyttää häntä, joka sitä tekee.", "Kiinalainen sananlasku"],

    ["Kaikki tärkeä ei ole mitattavissa, eikä kaikki mitattava ole tärkeää.", "Professori William Bruce Cameron"],

    ["En välitä siitä, mitä muut ajattelevat tekemisistäni. Sen sijaan välitän erittäin paljon siitä, mitä minä ajattelen omista tekemisistäni. Se on luonnetta!", "Yhdysvaltain presidentti Theodore Roosevelt"],

    ["Vielä ei ole elänyt yhtäkään ihmistä, joka olisi päässyt elämästään helpolla ja jonka nimi olisi muistamisen arvoinen.", "Yhdysvaltain presidentti Theodore Roosevelt"],

    ["Äiti on todellisin ystävämme, kun yllättävät ja raskaat koettelemukset iskevät; kun vastoinkäymiset korvaavat menestyksen; kun ystävät hylkäävät; kun ikävyydet ympäröivät meidät, yhä hän pitää meistä kiinni ja kannustaa ystävällisin ohjein ja neuvoo hajottamaan pimeyden pilvet, ja saa rauhan palaamaan sydämiimme.", "Kirjailija Washington Irving"],

    ["Loppujen lopuksi me päätämme muistetaanko meidät siitä mitä meille tapahtui vai siitä mitä me teimme asialle.", "Randy Milholland"],

    ["Läpimurron suurin este ei ole tietämättömyys vaan tietämisen illuusio.", "Historioitsija Daniel J. Boorstin"],

    ["Viisaat sanonnat putoavat monesti karuun maahan, mutta ystävällinen sana ei koskaan mene hukkaan.", "Kirjailija Arthur Helps"],

    ["Älä etsi totuutta, heitä vain pois mielipiteesi.", "Japanilainen sanonta"],

    ["Aamun ensimmäinen tunti on päivän peräsin.", "Saarnaaja Henry Ward Beecher"],

    ["Elämä ei ole terveyttä, vaan tervehtymistä, ei olemista, vaan tulemista, ei lepoa, vaan harjoitusta.", "Martti Luther"],

    ["Totuus tulee aina ilmi.", "Aleksandr Solženitsyn"],

    ["Elämämme loppu alkaa vaietessamme asioista, joilla on merkitystä.", "Martin Luther King Jr."],

    ["Älä hylkää unelmiasi!  Kun ne ovat kadonneet,  olet ehkä vielä olemassa,  mutta olet lakannut elämästä.", "Mark Twain"],

    ["On ihan mahdollista, että todellisuus on olemassa.", "Avaruustähtitieteen professori Esko Valtaoja"],

    ["Elämä ei ole kiinnostavaa, elämän osat ovat. Kärsimys ei ole kiinnostavaa, kärsijän näkökulma on. Tappo ei ole kiinnostava, kaikki ennen sitä on. Avioero ei ole kiinnostava, pitkä avioliitto on.", "Kirjailija Kari Hotakainen"],

    ["Enää ei kuolla nälkään, vaan sydäntauteihin. Enää ei turhauduta huvitusten puutteeseen, vaan niiden loppumattomaan pinnallisuuteen.", "Filosofi Lauri Järvilehto"],

    ["Kai meidän itse kunkin elämän kuvakirjassa on sellaisia lehtiä, joiden sulokkuus paljastuu täydellisesti vasta sitten, kun kehystäjä Aika on tuonut ne silmäimme eteen kultaamissaan raameissa.", "Kirjailija Simo Puupponen"],

    ["Aina äänestysprosentin selviämisen jälkeen poliitikot sanovat, että nyt heillä on peiliin katsomisen aika. Oikeasti sinne peiliin on tuijoteltu ihan liikaa. Kannattaisi katsoa mieluummin ympärilleen, oikeaan maailmaan.", "Toimittaja Tuomas Enbuske"],

    ["Älä päästä itseäsi tietyn ikäiseksi, älä tietyssä asemassa olevaksi, niin olet vapaa tällaisenakin kevätpäivänä istumaan tavaratalon rappusille syömään jäätelötötteröä.", "Runoilija Helena Anhava"],

    ["Ei riitä että tähtäyksesi on kohdallaan. Sinun on myös jännitettävä jousesi koko voimallasi.", "Kirjailija Henry David Thoreau"],

    ["Rakasta, palvele ja muista! Muista mitä? Rakastaa ja palvella.", "Ram Dass"],

    ["Onnistumisen kannalta tärkeitä eivät ole ne asiat, joita teet silloin tällöin. Tärkeitä ovat asiat, joita teet joka päivä.", "Painonpudotusneuvoja Jenny Graig"],

    ["Ei ole tärkeää tehdä paljon, vaan tehdä koko sydämestään se minkä tekee.", "Äiti Teresa"],

    ["Ainut seikka, joka erottaa ihmisen siitä mitä hän elämältä haluaa, on usein pelkästään tahto yrittää ja uskoa sen mahdollisuuteen.", "Liikemies, miljardööri Richard M. Devos"],

    ["Tässä elämässä ei ole mitään pelättävää. On vain ymmärrettävää.", "Fyysikko Marie Curie"],

    ["Useimmat ihmiset kuluttavat itsensä loppuun yrittäessään tehdä kaiken mitä pitävät velvollisuutenaan — eivätkä ikinä pääse tekemään sitä mitä haluaisivat.", "Kirjailija Kathleen Winsor"],

    ["Älä pelkää epäonnistumista niin paljon, että se estää sinua kokeilemasta uusia asioita.  Surullisimman elämän lopputulema on: olisi pitänyt, olisin voinut ja olisin osannut.", "Kirjailija Louis E. Boone"],

    ["Jos elämäni on hedelmätöntä, en välitä kuka minua ylistää. Jos se taas kantaa hedelmää, en välitä kuka minua kritisoi.", "Kirjailija John Bunyan"],

    ["Älä usko, että voittaminen on ehdottomasti kaikki kaikessa. Tärkeämpää on se, että seisot jonkin asian takana. Ellet seiso jonkin asian takana, mitä voit edes voittaa?", "Joseph Kirkland"],

    ["Elä yksinkertaisemmin, jotta muut voisivat yksinkertaisesti elää.", "Mahatma Gandhi"],

    ["Elämä ei ole se, mikä on eletty, vaan se, mitä siitä muistetaan ja miten se muistetaan sen kertomiseksi.", "Kirjailija Gabriel García Márquez"],

    ["Elämä on kuin viemäri. Se mitä siitä saa riippuu siitä mitä on pannut sisään.", "Muusikko Tom Lehrer"],

    ["Elämä on näytelmä: tärkeää ei ole sen pituus, vaan miten se esitetään.", "Seneca (- jKr.)"],

    ["Elämä on pitkä, jos se on täysi.", "Seneca (- jKr.)"],

    ["Elämä on sanojen koetinkivi.", "Runoilija Alessandro Manzoni"],

    ["Elämässä voi kestää kaiken, paitsi monta päivää keskeytymätöntä onnea.", "Johann Wolfgang von Goethe"],

    ["Elämme vaarallista aikaa. Ihmiset hallitsevat luontoa ennen kuin ovat oppineet hallitsemaan itseään.", "Teologi Albert Schweitzer"],

    ["Hyvä jääkiekkoilija pelaa siellä, missä kiekko on. Loistava jääkiekkoilija pelaa siellä, missä kiekko tulee olemaan.", "Jääkiekkoilija Wayne Gretzky"],

    ["En luota paljonkaan tilastoihin. Ihmisellä, jonka pää on kuumassa uunissa ja jalat pakastimessa, on keskimääräinen ruumiinlämpö.", "Kirjailija Charles Bukowski"],

    ["En pelännyt pahojen sanoja, vaan kunnon ihmisten hiljaisuutta.", "Martin Luther King Jr."],

    ["Omantunnon asioissa ei enemmistön lailla ole sijaa.", "Mahatma Gandhi"],

    ["Enkö tuhoa vihollisiani kun teen heistä ystäviä?", "Abraham Lincoln"],

    ["Ennen kuin muutat mieltäsi varmista, että sinulla on jotain mitä muuttaa.", "Albert Brie"],

    ["Ensimmäinen vallankumouksellinen teko on kutsua asioita niiden oikealla nimellä.", "Rosa Luxemburg"],

    ["Epäpätevyys ilmenee liian monien sanojen käyttämisenä.", "Runoilija Ezra Pound"],

    ["Filosofi on sokea, joka etsii pimeässä huoneessa mustaa kissaa, jota siellä ei ole. Teologi on henkilö, joka löytää sen.", "Toimittaja H. L. Mencken ( – )"],

    ["Hallitse aihe, sanat tulevat.", "Keisari Marcus Porcius Cato (- eKr.)"],

    ["Hallitukset eivät koskaan opi. Vain ihmiset oppivat.", "Ekonomisti Milton Friedman"],

    ["Haluan tehdä kanssasi sen mitä kevät tekee kirsikkapuiden kanssa.", "Runoilija Pablo Neruda"],

    ["Haluan vähän ja sitäkin vähää mitä haluan, haluan vähän.", "Fransiskus Assisilainen"],

    ["Halusin täydellisyyttä ja pilasin sen mikä toimi hyvin.", "Maalari Claude Monet"],

    ["Hän piti lippuaan korkealla, ettei hänen tarvinnut nähdä sitä.", "Kirjailija Stanisław Jerzy Lec (–)"],

    ["Hänen omatuntonsa oli puhdas, hän ei koskaan käyttänyt sitä.", "Kirjailija Stanisław Jerzy Lec (–)"],

    ["Harhaoppinen on hän, joka sytyttää rovion, ei hän, joka siinä poltetaan.", "William Shakespeare"],

    ["Harhaoppisuus on vain ajatuksenvapauden toinen nimi.", "Kirjailija Graham Greene"],

    ["Hyvä ihminen on älykäs, paha on myös tyhmä. Moraaliset ja älylliset ominaisuudet kuuluvat yhteen.", "Kirjailija Jorge Luis Borges"],

    ["Hyvä vihollinen on parempi kuin huono ystävä.", "Kirjailija Edward Dahlberg"],

    ["Hyveiden maineen pilaamisen jälkeen tämä vuosisata on onnistunut tekemään saman paheille.", "Kirjailija Nicolás Gómez Dávila"],

    ["Ihminen ei voi olla hyveellinen, jos hänellä ei ole mahdollisuutta paheisiin.", "Filosofi Frank Meyer"],

    ["Ihminen voi antaa rakastamatta, mutta ei voi rakastaa antamatta.", "Lähetystyöntekijä Amy Carmichael"],

    ["Ihminen, joka ei osaa suuttua, ei osaa olla hyvä.", "Saarnaaja Henry Ward Beecher"],

    ["Ihminen, kuka tahansa ihminen, on arvokkaampi kuin lippu, mikä tahansa lippu.", "Kuvanveistäjä Eduardo Chillida"],

    ["Vapautta ei ole vain omien kahleiden poistuminen, vaan elämä, joka kunnioittaa ja edistää muidenkin vapautta.", "Nelson Mandela"],

    ["Geeneillä on merkitystä, mutta aivan eri tavalla kuin alun perin luultiin. Geenit eivät rajoita, mitä voit tehdä, mutta ne rajoittavat paljon sitä, mitä haluat tehdä. Geeneillä on siis suuri merkitys sille, missä intohimosi piilee.", "Filosofi Lauri Järvilehto"],

    ["Jotta voimme saavuttaa suuria asioita, meidän ei pidä vain toimia, vaan myös unelmoida, ei vain suunnitella, vaan myös uskoa.", "Kirjailija Anatole France"],

    ["Uskon, ettei sinun pitäisi tehdä mitään, mitä et halua tehdä. Tosin jos et tiedä, mitä haluat, sinun pitää tehdä kaikkea. Toisin sanoen, jollet kokeile paljon erilaisia asioita, sinun on erittäin vaikea määrittää, missä intohimosi on.", "Filosofi Lauri Järvilehto"],

    ["Koeta oppia jotain kaikesta ja kaikki jostakin.", "Biologi Thomas Huxley"],

    ["Jos osaksesi lankeaa olla kadunlakaisija, lakaise katuja niin kuin Michelangelo maalasi, Beethoven sävelsi tai Shakespeare kirjoitti. Lakaise katuja niin hyvin, että kaikki taivaan ja maan asukit pysähtyvät ja toteavat: siinä oli suuri kadunlakaisija, joka teki työnsä hyvin.", "Martin Luther King, Jr."],

    ["Kirjoittaminen perustuu optimismille. Et vaivautuisi koko hommaan, jos sinusta tuntuisi, ettei sillä ole mitään merkitystä.", "Näytelmäkirjailija Edward Albee"],

    ["Et voi yrittää tehdä asioita; sinun on yksinkertaisesti tehtävä ne.", "Kirjailija Ray Bradbury"],

    ["Jos käteni on varattu koko ajan siihen, että pidän kiinni jostakin, en voi koskaan sen enempää saada kuin antaa.", "Teologi Dorothee Sölle"],

    ["Vastustamme usein jotakin asiaa vain siksi, että se on esitetty tavalla, joka ei satu miellyttämään meitä.", "Friedrich Nietzsche"],

    ["Kuten vaatetusbisneksessä, myös johtamisessa muodit ovat niitä varten, joilla ei ole tyylitajua. Tai tilannetajua, kuten johtamistutkijat sanoisivat. Johtajaa, oikeaa elävää ihmistä, tarvitaan, koska johtamistilanteet vaihtelevat sietämättömän monimutkaisesti ja moniulotteisesti.", "Tapio Aaltonen, Paula Kirjavainen, Eeva Pitkänen, Kutsumusjohtaja"],

    ["Kuka tahansa osaa johtaa lyhyellä aikavälillä. Kuka tahansa osaa johtaa pitkällä aikavälillä. Näiden tekeminen samanaikaisesti on johtamisosaamista.", "Jack Welch"],

    ["Tärkein läksy, jonka olen oppinut pitkän elämäni aikana on se, että ainoa tapa tehdä ihmisestä luotettava, on luottaa häneen, ja varmin tapa tehdä hänestä epäluotettava on epäillä häntä ja osoittaa se hänelle.", "Poliitikko Henry L. Stimson"],

    ["Jos haluat tuntea menneen, katso nykyisiä olosuhteitasi. Jos haluat tuntea tulevaisuuden, katso nykyisiä tekojasi.", "Kiinalainen sanonta"],

    ["Aito johtajuus on jotain muuta kuin muualta hankittu kopio. Tärkeintä on itse sisäistetty johtamisen idea.", "Tapio Aaltonen, Paula Kirjavainen, Eeva Pitkänen, Kutsumusjohtaja"],

    ["On yksi asia uskoa itse ajattelevansa oikein, ja ihan toinen asia luulla, että kaikki muut ajattelevat väärin.", "Työpsykologian tohtori Helena Åhman"],

    ["Ihmisestä on tullut omien välineidensä väline.", "Kirjailija Henry David Thoreau"],

    ["Ihmiset eivät häpeä ajatella hävyttömiä ajatuksia, mutta he häpeävät ajatusta, että joku saattaa uskoa heidän ajattelevan hävyttömiä ajatuksia.", "Filosofi Friedrich Nietzsche"],

    ["Ihmiset eivät ole kohtalon, vaan oman mielensä vankeja.", "Presidentti Franklin Roosevelt"],

    ["Jokaisen on saatava nauttia elämästä, mutta niin ettei kukaan nauti kenenkään kustannuksella eikä kukaan saa häiritä toisen nautintoa.", "Kirjailjia Georg Büchner"],

    ["Uusia mielipiteitä aina epäillään ja tavallisesti myös vastustetaan, ja syyksi riittää vain se, että ne eivät ole vielä yleisiä mielipiteitä.", "Filosofi John Locke"],

    ["Johtajuus on pitkälti hyvän tahdon taidetta. Johtajuus lähtee henkilön luonteesta.", "Tapio Aaltonen, Paula Kirjavainen, Eeva Pitkänen, Kutsumusjohtaja"],

    ["Ihmiset matkustavat ihaillakseen vuorten korkeuksia, jokien juoksua, merten aaltoja ja niiden suuruutta, mutta ohittavat itsensä olan kohautuksella.", "Filosofi Augustinus"],

    ["Uusi ei synny vain uudesta vaan myös vanhan näkemisestä uudessa valossa.", "Filosofi Søren Kierkegaard"],

    ["Kuinka hyvin monilla ihmisillä menisikään, jos he vain kerran irtautuisivat uriltaan.", "Seneca (- jKr.)"],

    ["Luota enemmän matkatovereidesi jalostavaan vaikutukseen kuin suurellisin elkein esiintyvien gurujen lupauksiin edistymisestäsi.", "Pastori Antti Jääskeläinen"],

    ["Elä kuin kuolisit huomenna. Opi kuin eläisit ikuisesti.", "Mahatma Gandhi"],

    ["Kadulla kaatuneen mummon auttaminen on ohikulkevan kiireisen bisnesjohtajan kutsumus silloin, kun hän ottaa ihmisenä olemisen kutsumuksensa vakavasti. Ison kutsumuksen sisään mahtuu kymmeniä hetken kutsumuksia.", "Tapio Aaltonen, Paula Kirjavainen, Eeva Pitkänen, Kutsumusjohtaja"],

    ["Ei ole olemassa rakkautta tulevaisuudessa. Rakkaus on vain tämän hetken teko.", "Kirjailija Leo Tolstoi"],

    ["Voit arvioida ihmisen älykkyyden hänen vastauksistaan. Voit arvioida ihmisen viisauden hänen kysymyksistään.", "Kirjailija Naguib Mahfouz"],

    ["Erehtyminen on inhimillistä, erehdyksen myöntäminen yli-inhimillistä.", "Kolumnisti Doug Larson"],

    ["Jos se ei ole sinun tiesi, sitä on turha seurata. Mutta jos se on sinun tiesi, on turha kulkea mitään muuta.", "Kirjailija Harvey Arden"],

    ["Päätän, etten puhu mitään pahaa kenestäkään, en edes totuuden nimissä, vaan jollain tavoin puolustelen vikoja, joista kuulen toisia syytettävän, ja sopivassa tilaisuudessa puhun kaikesta siitä hyvästä, minkä jokaisesta tiedän.", "Benjamin Franklin"],

    ["Naiivi, itselle uskoteltu myönteisyys voi olla vaarallista: se erottaa ihmisen kehonsa tuntemuksista ja peittää alleen tunteiden todellisen viestin.", "Kaija Maria ja Lari Junkkari, Läsnä ja lähellä"],

    ["Ihmisistä tulee talonrakentajia taloja rakentamalla, harpunsoittajia harppua soittamalla. Me kasvamme oikeudenmukaisiksi tekemällä asioita, jotka ovat oikeudenmukaisia.", "Aristoteles"],

    ["Ihan turhaan tuotakin tuskailet jos päivä ei pilkota polkusi yllä. Se valo, jota ulkoa löydä et, sehän rintasi luolassa loimuu kyllä.", "Runoilija Aaro Hellaakoski"],

    ["Itsensä epäileminen on älyn ensimmäinen merkki.", "Kirjailija Ugo Ojetti"],

    ["Jalot sielut pahoittavat mielensä ennemmin imartelusta kuin loukkauksesta.", "Kielitieteilijä Nicolò Tommaseo"],

    ["Joka ei rankaise pahaa, komentaa tekemään sitä.", "Leonardo da Vinci"],

    ["Jokaiseen monimutkaiseen ongelmaan on yksinkertainen ratkaisu — joka on väärä.", "Toimittaja H. L. Mencken ( – )"],

    ["Pane hellyys sanoihisi kun puhut, silloin ne putoavat kuin siemenet lämpöiseen maahan. Älä lähesty kovilla sanoilla ettet pirstoaisi. Vain kivet kestävät vasaroimista.", "Anni Korpela"],

    ["Jos aiot kertoa ihmisille totuuden, ole hauska tai sinut tapetaan.", "Käsikirjoittaja Billy Wilder"],

    ["Jos haluaa pitkän vanhuuden pitää tulla vanhaksi aikaisin.", "Keisari Marcus Porcius Cato (- eKr.)"],

    ["Jos haluat löytää tielläsi ystävyyttä, hellyyttä ja runoutta, tuo ne mukanasi.", "Kirjailija Georges Duhamel"],

    ["Jos haluat tehdä ihmisen onnelliseksi, älä anna hänelle lahjoja vaan rajoita hänen toiveitaan.", "Seneca (- jKr.)"],

    ["Jos ihminen ei halua ottaa mitään riskejä mielipiteidensä vuoksi, joko mielipiteet eivät ole minkään arvoisia tai hän itse ei ole minkään arvoinen.", "Runoilija Ezra Pound"],

    ["Jos kirjoitin näin pitkän kirjeen, niin se johtuu siitä, että minulla ei ollut aikaa kirjoittaa lyhyempää.", "Filosofi Blaise Pascal"],

    ["Jos moraaliset periaatteesi saavat sinut synkäksi, voit olla varma, että ne ovat vääriä.", "Kirjailija Robert Louis Stevenson"],

    ["Jos pystyisimme liittymään yhteen, miten ihana ja miten lähellä tulevaisuus olisi.", "Vallankumouksellinen Che Guevara"],

    ["Ihminen, joka ei ota riskejä, ei tee mitään, ei omista mitään, ei ole mitään eikä hänestä tule mitään. Hän saattaa välttää kärsimyksen ja surun, mutta hän ei yksinkertaisesti voi oppia ja tuntea ja muuttua ja kasvaa ja rakastaa ja elää.", "Kirjailija Leo Buscaglia"],

    ["En osaa antaa menestyksen kaavaa, mutta voin antaa epäonnistumisen kaavan: yritä miellyttää kaikkia.", "Toimittaja Herbert B. Swope"],

    ["Huikeiden epäonnistumisteni jälkeen en millään kykene tyytymään tavalliseen menestykseen.", "Aforisti Mason Cooley"],

    ["Eräät menestyksen näkökulmat vaikuttavat varsin hupsuilta kuoleman lähestyessä.", "Kirjailija Donald A. Miller"],

    ["Näin onnistut: yritä tarpeeksi. Näin epäonnistut: yritä liikaa.", "Liikemies Malcolm Forbes"],

    ["Mieluummin teen virheitä ystävällisenä ja myötätuntoisena kuin ihmeitä tylynä ja kovana.", "Äiti Teresa"],

    ["Mieluummin teen virheitä ystävällisenä ja myötätuntoisena kuin ihmeitä tylynä ja kovana.", "Äiti Teresa"],

    ["Minut kasvatettiin vaistoamaan, mitä minulta odotettiin ja olemaan odotusten mukainen. Meni kauan ennen kuin opin olemaan arvioimatta itseäni jonkun toisen silmin.", "Näyttelijä Sally Field"],

    ["Tärkeintä on luetun ymmärtäminen ja koetun käsittäminen. Ymmärrä mitä luet, käsitä mitä koet ja korjaa minkä kylvät. Ilman näitä oppeja nouset korkeuksiin koskaan palaamatta.", "Kari Hotakainen, Jumalan sana"],

    ["Innostuksen hulluus on mielestäni parempaa kuin viisauden välinpitämättömyys.", "Kirjailija Anatole France"],

    ["Älä toivo helppoutta, toivo että olisit parempi. Älä toivo vähemmän ongelmia, toivo enemmän taitoa. Älä toivo vähemmän haasteita, toivo enemmän viisautta.", "Yrittäjä Jim Rohn"],

    ["Johtajuuden haaste on olla vahva, muttei töykeä; olla ystävällinen, muttei heikko; olla suorasukainen, muttei sortaja; olla harkitseva, muttei laiska; olla nöyrä, muttei nöyristelijä; olla ylpeä, muttei röyhkeä; olla huumorintajuinen, muttei hölmö.", "Yrittäjä Jim Rohn"],

    ["Meidän kaikkien tulee kärsiä yksi näistä kahdesta: joko itsekurista seuraava kipu tai katumuksesta seuraava kipu.", "Yrittäjä Jim Rohn"],

    ["Itsekuri on silta tavoitteiden ja saavutuksien välillä.", "Yrittäjä Jim Rohn"],

    ["Menestys ei ole sen kummempaa kuin muutama yksinkertainen tapa, jota toteutetaan päivittäin.", "Yrittäjä Jim Rohn"],

    ["Opettele iloitsemaan siitä mitä sinulla on, samalla kun tavoittelet kaikkea mitä tahdot.", "Yrittäjä Jim Rohn"],

    ["Sinulla on ongelma: kuinka aiot käyttää tämän ainoan, kallisarvoisen elämäsi, joka sinulle on myönnetty? Aiotko tuhlata sen yrittämällä näyttää hyvältä ja luoda illuusion, että hallitset olosuhteitasi vai aiotko maistaa elämää, nauttia siitä ja selvittää kuka todellisuudessa olet?", "Kirjailija Anne Lamott"],

    ["Maailma kehittyy toteuttamalla asioita, jotka näyttivät mahdottomilta.", "Kirjailija André Maurois"],

    ["Miten paljon aikaa säästää hän, joka ei katso mitä naapuri tekee, sanoo tai ajattelee, vaan keskittyy siihen mitä itse tekee, ja tekee sen kunnolla ja oikein.", "Keisari, filosofi Marcus Aurelius (- jKr.)"],

    ["Meillä kaikilla on kaksi elämää. Se toinen alkaa kun käsitämme, että meillä on vain yksi.", "Näyttelijä Tom Hiddleston"],

    ["Onni on syy. Ei seuraus.", "Professori Fred Luthans"],

    ["Reilu puolikas elämisen taidosta on sisukkuutta.", "Kirjailija Alain de Botton"],

    ["Elämästä ei tule helpompaa tai anteeksiantavampaa. Meistä tulee vahvempia ja sisukkaampia.", "Steve Maraboli"],

    ["Parhaat psykologitkin osaavat kertoa, että todellisuudessa ihmiset eivät halua parantua. He haluavat kivun lievitystä: parantuminen on tuskallista.", "Psykoterapeutti Anthony de Mello"],

    ["Olemassaolokokemus on peruselämys rakkaudessa, joka kaipaa toisen pelkkää läsnäoloakin, ja jossa oma olemassaolo koetaan niin erossa kuin yhdistymisessäkin. Olemassaolokokemus ei kuitenkaan ole mahdollinen siellä, missä esiintyy halua omistaa jotakin, tarvetta saada jotain. Olemassaolokokemuksen leimaavin piirre on juuri kajoamatta jättäminen. Kaikkinainen omistamisen kaipuu verottaa tässä asiassa olemassaoloa.", "Psykiatri Viktor E. Frankl"],

    ["Kaikki on vaikeaa ennen kuin se on helppoa.", "Goethe"],

    ["Vaikeinta elämässä on oppia erottamaan sillat, jotka pitää ylittää, niistä silloista, jotka pitää polttaa takanaan.", "David Russell"],

    ["Rakasta itseäsi tarpeeksi asettaaksesi rajoja. Aikasi ja voimasi ovat arvokkaita. Saat itse valita kuinka käytät ne. Sinä opetat muita kuinka sinua tulee kohdella päättämällä mitä hyväksyt ja mitä et.", "Muusikko Anna Taylor"],

    ["Kun ihminen on alamaissa, gramma apua on arvokkaampaa kuin kilo neuvomista.", "Kirjailija Edward G. Bulwer-Lytton"],

    ["Älä sano: \"Teen sen huomenna.\" Se, mikä on tehty, on suuremman arvoinen kuin se, mikä on tekemättä. Tämä päivä on kahden huomisen arvoinen.", "Benjamin Franklin"],

    ["Ongelma ei ole ongelma. Ongelma on asenteesi ongelmaa kohtaan. Ymmärrätkö?", "Kapteeni Jack Sparrow"],

    ["Älä anna sen, mitä et osaa tehdä, häiritä sitä, mitä osaat tehdä.", "Valmentaja John Wooden"],

    ["Miksi yrität niin kovasti sulautua joukkoon, kun sinut on luotu erottumaan?"],

    ["Toiminta muovaa tunnetilaa. Useimmiten annamme kuitenkin vain tunnetilan muovata toimintaamme.", "Yritysjohdon valmentaja Isa Merikallio, Vilpittömästi välinpitämätön"],

    ["Olet niin onnellinen kuin valitset olevasi. Onni on valinta. Voisin viedä sinut maailman surkeimpiin kolkkiin ja näyttää kaksi ihmistä. Toinen on surkea ja toinen onnellinen. Miksi? Onnellisuudella ei ole mitään tekemistä olosuhteiden kanssa. Se on asennetta. Jos et ole onnellinen nykyisessä elämässäsi, voin taata, ettet tule olemaan onnellinen vaikka saisit mitä lisää. Koska haluaisit aina vähän lisää.", "Rick Warren"],

    ["Jos haluat saavuttaa erinomaisuuden suurissa asioissa, aloitat pienistä. Erinomaisuus ei ole poikkeus, vaan kaiken läpäisevä asenne.", "Kenraali Colin Powell"],

    ["On helpompi rakentaa vahvoja lapsia, kuin korjata rikkinäisiä aikuisia.", "Orjuuden vastustaja Frederick Douglass"],

    ["Oikea elämä on epävarmaa ja vaatii kärsivällisyyttä. Se on aika ajoin käsittämättömän rankkaa — ja siksi niin rikasta. Oikea elämä tapahtuu myös pääosin itseni ulkopuolella.", "Yritysjohdon valmentaja Isa Merikallio, Vilpittömästi välinpitämätön"],

    ["Kärsimys lakkaa olemasta kärsimystä sillä hetkellä, kun muodostamme siitä selkeän ja tarkan kuvan.", "Filosofi Baruch Spinoza"],

    ["Elämä ei koskaan ole sietämätöntä olosuhteiden vuoksi. Se on sietämätöntä ainoastaan, jos siitä puuttuu tarkoitus ja sisältö.", "Psykiatri Viktor E. Frankl"],

    ["Jos elämällä on tarkoitus, on myös kärsimyksellä tarkoitus.", "Psykiatri Viktor E. Frankl"],

    ["Et ole vapaa olosuhteista. Olet vapaa ottamaan kannan olosuhteisiin.", "Psykiatri Viktor E. Frankl"],

    ["Rakkaus on kuin sota: helppo aloittaa, mutta erittäin vaikea lopettaa.", "Toimittaja H. L. Mencken ( – )"],

    ["Kullakin on oma tarkoituksensa elämälleen. Ja jokaisella päivällä, jokaisella tunnilla on oma tarkoituksensa. Näin ollen tärkeintä ei ole niinkään elämän yleinen tarkoitus, vaan se tarkoitus, joka on tietyn ihmisen tietyllä hetkellä.", "Psykiatri Viktor E. Frankl"],

    ["Jos vaikeuksien on tultava, tulkoot ne minun aikanani, jotta lapsillani olisi rauha.", "Toimittaja Thomas Paine"],

    ["Elämäni on yltäkylläistä ja täynnä merkitystä. Mursin niskani. Se ei murtanut minua. Ilman kokemiani kärsimyksiä ei saavuttamani kasvu olisi ollut mahdollista.", "Neliraajahalvaantunut, tohtori Jerry Long"],

    ["Elämä on % sitä mitä minulle tapahtuu ja % sitä kuinka reagoin siihen.", "Charles Swindoll"],

    ["Tekemisen merkitys kiehtoo minua. Tieto ei riitä, meidän on sovellettava. Tahto ei riitä, meidän on tehtävä.", "Leonardo da Vinci"],

    ["Tekemisen merkitys kiehtoo minua. Tieto ei riitä, meidän on sovellettava. Tahto ei riitä, meidän on toimittava.", "Leonardo da Vinci"],

    ["Otat elämäsi omiin käsiisi, ja mitä tapahtuu? Kauhea asia: ei ketään, jota syyttää.", "Kirjailija Erica Jong"],

    ["Mikä raha? Ihminen on menestynyt, jos hän nousee aamulla, menee nukkumaan illalla ja tekee siinä välissä haluamiaan asioita.", "Muusikko Bob Dylan"],

    ["Liian monet eivät elä unelmaansa, koska he elävät peloissaan.", "Les Brown"],

    ["Jos keskityt siihen mitä elämässäsi on, saat aina lisää. Jos keskityt siihen mitä elämässäsi ei ole, et koskaan saa tarpeeksi.", "Oprah Winfrey"],

    ["Ei sillä ole väliä kuinka paljon elämässäsi on vuosia. Väliä on sillä kuinka paljon vuosissasi on elämää.", "Presidentti Abraham Lincoln"],

    ["Elämässä tarvitaan rakkauden tekoja ja läheisyyden lämpöä. Siinä tarvitaan myös sitoutumista, tunne- ja vuorovaikutustaitoja, taitoja ristiriitojen ratkaisemiseen sekä anteeksi antamista ja sovinnon rakentamista. Tätä kaikkea kutsutaan rakkaudeksi.", "Tuula Vainikainen, Liisa Välilä, Juha Välilä, Rakastan, rikastan"],

    ["Kaikki ajattelevat muuttavansa maailmaa, mutta kukaan ei ajattele muuttavansa itseään.", "Kirjailija Leo Tolstoi"],

    ["Parisuhteen matemaattinen kaava: laskekaa yhteen tulot, vähentäkää menot, kertokaa ilot ja jakakaa surut."],

    ["Asioita ei muuteta taistelemalla nykyisiä realiteetteja vastaan. Jos tahdot muutosta, rakenna uusi malli, joka vanhentaa nykyisen mallin.", "Keksijä Buckminster Fuller"],

    ["Kunnioita ihmisten yksilöllisyyttä ja vapautta elää parhaaksi näkemällään tavalla. Toinen ihminen voi olla mielestäsi väärässä ja hänen valintansa voivat olla virheellisiä. Sinä voit halutessasi puhua näistä asioista hänelle, ja saat ilmaista oman mielipiteesi. Lopulta toisella on kuitenkin vapaus tehdä omat ratkaisunsa.", "Antti Mustakallio"],

    ["Jotain hyvääkin pitäisi sanoa tai tehdä toisillemme. Milloin ikinä se vain käy päinsä, sillä eihän elämä muuten olisi mistään kotoisin.", "Filosofi Friedrich Nietzsche"],

    ["Ei työ tapa, vaan työtapa."],

    ["Oma kokosi ei ratkaise mitään. Aivojesi koko ratkaisee enemmän. Sydämesi koko ratkaisee kaiken.", "Toimittaja B. C. Forbes"],

    ["Elämä ei tiivisty aforismeihin.", "Sarjayrittäjä Sami Kuusela"],

    ["Aikuinen rakkaus ei anna selvännäkijän kykyjä. Kaikki on sanoitettava. Pidä kaikin mahdollisin tavoin huoli siitä, että toisella on mahdollisuus ymmärtää sinua.", "Vainikainen, Välilä, Välilä, Rakastan, rikastan"],

    ["Olosuhteet eivät tee elämästä sietämätöntä, vaan merkityksen ja tarkoituksen puuttuminen.", "Psykiatri Viktor E. Frankl"],

    ["Ei ole olemassa ylimääräistä aikaa, ei vapaa-aikaa tai joutoaikaa. Sinulla on vain elinaikaa. Anna mennä!", "Henry Rollins"],

    ["Keskustelu voittaa aina väittelyn, koska keskustelun tarkoitus on osoittaa mikä on oikein, väittelyn taas kuka on oikeassa."],

    ["Jos et muuta mitään, mikään ei muutu.", "Valmentaja Anthony Robbins"],

    ["Pelko johtaa ärtymykseen, ärtymys johtaa vihaan ja viha johtaa kärsimykseen.", "Mestari Yoda"],

    ["Hyvä johtaja kasvattaa lisää johtajia. Jos johtaja haluaa johtaa yksin, hän on tyranni. Todellinen johtajuus on hedelmällistä, sillä jokaisessa on johtajuuden siemen.", "Paavi Franciscus"],

    ["Tämän päivän johtajat eivät ole ikuisia. Jos he eivät kylvä johtajuuden siemeniä, he ovat hyödyttömiä, he ovat diktaattoreja.", "Paavi Franciscus"],

    ["Muista aina, että sinä olet ehdottoman ainutlaatuinen. Aivan kuten kaikki muutkin.", "Margaret Mead"],

    ["Jos et kirjoita oman elämäsi suunnitelmaa, päädyt luultavasti jonkun toisen suunnitelmaan. Ja arvaapa mitä sinulle on siellä varattu. Ei kovin paljon.", "Yrittäjä Jim Rohn"],

    ["Tulevaisuus ei ole entisensä.", "Yogi Berra"],

    ["Jos maailma olisi täydellinen, se ei olisi.", "Yogi Berra"],

    ["Ennustaminen on vaikeaa. Erityisesti tulevan ennustaminen.", "Yogi Berra"],

    ["Jos et tiedä mihin olet menossa, voit päätyä johonkin muualle.", "Yogi Berra"],

    ["Jos sinulla on ollut onnea ja olet menestynyt, velvollisuutesi on lähettää hissi takaisin alakertaan.", "Kevin Spacey"],

    ["Vaatimaton ajattelija keskittyy poikkeuksellisiin asioihin, suuri ajattelija tavallisiin.", "Filosofi Blaise Pascal"],

    ["Luovaa ihmistä ajaa halu jonkin saavuttamisesta, ei halu jonkun voittamisesta.", "Ayn Rand"],

    ["Paras tapa ennustaa tulevaisuus on luoda se.", "Peter Drucker"],

    ["Jos toimintasi inspiroi muita haaveilemaan, oppimaan, tekemään ja olemaan enemmän, olet johtaja.", "John Quincy Adams"],

    ["Joko teemme itsestämme onnettomia tai teemme itsestämme vahvoja. Työn määrä säilyy samana.", "Carlos Castaneda"],

    ["Vaatii huomattavaa tietoisuutta käsittää oman tietämättömyyden laajuus.", "Thomas Sowell"],

    ["Kun alkaa aavistaa rakkaudellisen tarkoituksen vaikeuksien ja vastoinkäymisten takaa, asettuu elämään hyväntahtoisessa maailmankaikkeudessa. Olen rakastettu siitä huolimatta, etteivät asiat mene niin kuin olen itse kaavaillut. Vähitellen voi jopa oppia olemaan kiitollinen vaikeuksista, sillä tietää niiden tuovan jotain hyvää.", "Terapeutti Tommy Hellsten"],

    ["Monelle meistä näyttää olevan vaikea ymmärtää, että tuo luontainen tapamme etsiä onnea kahmimalla itsellemme aina vain enemmän, johtaa lopulta siihen että menetämme kaiken. Maailmassamme vallitsee toisenlainen järjestys, tälle päinvastainen. Antamalla pois saakin itse, unohtamalla itsensä löytää itsensä. Rakastamalla toista löytää merkityksen itselleen.", "Terapeutti Tommy Hellsten"],

    ["Jos asiat menevät vikaan, älä sinä mene niiden mukana.", "Yrittäjä Roger Babson"],

    ["Elämässä on usein kyse oppimisesta. Ja varsin usein sellaisen oppimisesta, mitä emme haluaisi oppia.", "Terapeutti Tommy Hellsten"],

    ["Tuhannet kynttilät voidaan sytyttää yhdestä, eikä tuon kynttilän elämä siitä lyhene. Onnellisuus ei koskaan vähene siitä, että se jaetaan.", "Kirjailija Stanisław Jerzy Lec (–)"],

    ["Rauhaa ei voi ylläpitää voimalla. Se voidaan saavuttaa vain ymmärryksen kautta.", "Fyysikko Albert Einstein"],

    ["Aseilla voi tappaa terroristeja, koulutuksella voi tappaa terrorismin.", "Rauhanaktivisti Malala Yousafzai"],

    ["Ole kohtelias kaikille, seurustele monien kanssa, ole tuttavallinen muutamille, ystävä harvoille äläkä ryhdy kenenkään viholliseksi.", "Benjamin Franklin"],

    ["Äidilläni oli tapana sanoa, että kyse ole siitä mitä sanon, vaan miten sen sanon. Ja itse asiassa, ei sillä niin väliä mitä teemme, vaan miten sen teemme, eikä ole juuri merkitystä mitä näemme, vaan miten sitä katsomme, eikä kyse ole siitä millainen elämämme on, vaan miten sen elämme.", "Sue Fitzmaurice"],

    ["Älä mene töihin, jotta voisit tehdä töitä. Mene töihin, jotta voisit olla erinomainen urallasi ja välittää ihmisistä ympärilläsi.", "Horst Schulze"],

    ["Kenelläkään ei ole sen hauskempaa kuin mitä hän itse itselleen järjestää.", "Tove Jansson"],

    ["Missä järjen on pakko vaieta, siinä sydämen on velvollisuus puhua.", "Olavi Ingman"],

    ["Mieluummin haluaisin pystyä arvostamaan asioita, joita en voi saada, kuin omistaa asioita, joita en pysty arvostamaan.", "Kirjailija Elbert Hubbard"],

    ["Kuka tietävi, mistä me tulemme ja missä on matkamme määrä? Hyvä että me sitäkin tutkimme. Ei tutkimus ole väärä. Mut yhden me tiedämme varmaan vaan: Me olemme kerran nyt päällä maan ja täällä meidän on eläminen, miten taidamme parhaiten.", "Eino Leino"],

    ["Ei ole rakkautta ilman anteeksiantoa, eikä anteeksiantoa ilman rakkautta.", "Bryant H. McGill"],

    ["Elämän suurimmat ilot eivät ole vain siinä mitä teemme ja tunnemme, vaan myös muihin kohdistuvissa hiljaisissa toiveissa ja vaivannäössä.", "Bryant McGill"],

    ["Kärsimystä on kunnioitettava. Älä yritä sivuuttaa kipua, sillä se on todellista. Anna vain kivun pehmentää sinua kovettamisen sijaan. Anna kivun avata sinua sulkemisen sijaan. Anna kivun ohjata sinut niiden luo, jotka hyväksyvät sinut, sen sijaan, että piiloutuisit niiltä, jotka hylkäävät.", "Bryant McGill"],

    ["Parempi luoda jotain jota muut kritisoivat kuin olla luomatta mitään ja kritisoida muita.", "Ricky Gervais"],

    ["Elantomme muodostuu siitä mitä saamme. Elämämme muodostuu siitä mitä annamme.", "Winston Churchill"],

    ["Jos pidämme toisella kädellä kiinni menneisyydestä, siitä tutusta ja turvallisesta, emme pääse mihinkään. Uusi ei koskaan tule eikä elämä virtaa. Silloin tulevaisuus on aina vain lisää menneisyyttä.", "Terapeutti Tommy Hellsten"],

    ["Jopa synkimpinä aikoina vankilassa, kun toverini ja minut oli työnnetty äärirajoille, saatoin jossakin vartijassa nähdä ihmisyyden pilkahduksen, ja vaikka se kesti ehkä vain sekunnin, se auttoi minua vakuuttumaan ja jaksamaan.", "Nelson Mandela"],

    ["Tyhjät taskut eivät ole koskaan pidätelleet ketään. Vain tyhjä pää ja tyhjä sydän kykenevät siihen.", "Norman Vincent Peale"],

    ["Ystävyys kasvattaa onnea ja vaimentaa kärsimystä kaksinkertaistamalla ilomme ja jakamalla surumme.", "Marcus Tullius Cicero (- eKr.)"],

    ["Emme synny vain itsellemme.", "Marcus Tullius Cicero (- eKr.)"],

    ["Moraalisesti väärä ei koskaan voi olla eduksi, vaikka se mahdollistaisikin jonkin voiton, jonka uskot olevan eduksesi. Pelkkä uskominen siihen, että väärä toiminta muodostaa edun, on turmiollista.", "Marcus Tullius Cicero (- eKr.)"],

    ["Ei tule sanoa, että jokainen virhe on typerä.", "Marcus Tullius Cicero (- eKr.)"],

    ["Elämänkaari on lyhyt, mutta tarpeeksi pitkä hyvään ja rehelliseen elämään.", "Marcus Tullius Cicero (- eKr.)"],

    ["Muiden virheistä viisas korjaa omansa.", "Kirjailija Publilius Syrus ( eKr.)"],

    ["Mikään ei ole rasittavampaa, kuin kirosanojen käyttäminen välimerkkeinä. Teiniromantiikkaakin kiusallisempaa on teiniretoriikka.", "Jason Lepojärvi"],

    ["Tavallaa ylisääntely on sillee pahast, mut tietyt täytesanat vois mun mielest niinku kieltää lailla, jolloi tääki lause ois tiätsä puolta lyhyempi.", "Jason Lepojärvi"],

    ["Taitavaa kiroilua tulisi opettaa jo kotona, jotta koulussa ei oppisi huonoksi tai seurakunnassa latteaksi kiroilijaksi.", "Teologi Jason Lepojärvi"],

    ["\"Meidän pitää erottua joukosta\", ajattelevat useat kristityt. Ei saa mennä valtavirran mukana ja käyttää kirosanoja. On monta hyvää tapaa erottua joukosta, mutta köyhä sanavarasto ei ole yksi niistä.", "Teologi Jason Lepojärvi"],

    ["Surun sisar on lohdutus, itkun seuralainen on nauru. Elämän riemu syntyy sen kohtaamisesta täysinäisenä, kaikessa rikkaudessaan. Se joka ei ole surrut, ei ole koskaan löytänyt mitään iloittavaa.", "Filosofi Samuel Salovuori"],

    ["Voin tiivistää kaiken mitä olen oppinut elämästä kahteen sanaan: se jatkuu.", "Robert Frost"],

    ["Epäröinnin kynnyksellä kysy kuinka paljon rohkeutta uskallat tänään jättää käyttämättä?", "Tommy Tabermann"],

    ["Onnelliseksi tulemisessa olennaista on tajuta, että joidenkin asioiden pitää vain antaa olla.", "Kirjailija Juha Vuorinen"],

    ["Menestys on saavutettavissa vain toistuvien virheiden ja itsetarkastelun kautta.", "Insinööri Soichiro Honda"],

    ["Aikasi on rajoitettu, joten älä tuhlaa sitä elämällä jonkun toisen elämää.", "Steve Jobs"],

    ["Kaikenlainen kurjuus ja puute on tosiasiassa ihmisen luonnollinen olotila, joka ei juuri selityksiä kaipaa. Kurjuus tulee luoksemme pyytämättä, jos vain olemme emmekä toimi. Sen sijaan hyvä elämä vaatii ponnistelua, vaivannäköä ja hyveitä.", "Ville Saarikalle"],

    ["Jos haluat sosiaalisen vallankumouksen, niin oman luonteesi kasvun parissa ponnistelu on jokseenkin parasta, mitä voit tehdä.", "Ville Saarikalle"],

    ["Olisi helppoa, jos kukoistus olisi vain poliittisen taikasauvan heilautuksen päässä. Paljon hitaampi ja vähemmän vallankumoukselliselta kuulostava hanke on tehdä töitä omien ja jälkeläistensä luonteen kasvattamiseksi.", "Ville Saarikalle"],

    ["Pysymällä sellaisina kuin olemme meistä ei voi tulla sitä mitä haluamme olla.", "Liikemies Max De Pree"],

    ["Älä anna menneisyyden määritellä sinua. Se oli vain oppitunti, ei elinkautinen tuomio."],

    ["Joskus koko päivän tärkein asia on lepohetki kahden syvän henkäyksen välillä.", "Etty Hillesum"],

    ["Kuka tahansa voi tietää. Tarkoitus on ymmärtää.", "Albert Einstein"],

    ["Kun minä ärsytän, tai ihan vain hengitän väärin, ärsyyntyminen syntyy sinussa. Sinä ärsyynnyt ja sinä olet itsestäsi vastuussa. Se on myös vapauttavaa. Sinä itse voit muuttaa tilanteen — kertaheitolla.", "Jussi Ruokomäki"],

    ["Mitään hyvää ei koskaan tapahdu vahingossa.", "Peter F. Drucker"],

    ["Jos olet niin onnekas, että löydät elämäntavan josta pidät, sinun on löydettävä rohkeutta elää sen mukaisesti.", "John Irving"],

    ["Jos saisin elää elämäni uudestaan, tahtoisin sen olevan samanlainen kuin se on ollut. Avaisin vain silmiäni hiukan enemmän.", "Jules Renard"],

    ["Jos luulet, että emme voi muuttaa maailmaa, se tarkoittaa vain sitä, että sinä et ole niitä, jotka sen tekevät.", "Futuristi Jacque Fresco"],

    ["On parempi kävellä ystävän kanssa pimeässä kuin yksin valossa.", "Helen Keller"],

    ["Olin kivi, joka murretaan, olin savu, joka hajoaa tuuleen. Mutta kulkija, kerran vapise tomuni ääressä kaiken sen tähden mitä olisin voinut olla.", "Mika Waltari"],

    ["Voi olla huumorintajuinen ihminen, vaikka joskus lipsauttaisi vahingossa toista loukkaavan vitsin. Voi olla viisas, vaikka tekisikin vääriä valintoja. Voi olla välittävä toisia kohtaan, vaikka joskus sortuisikin unohtamaan toisen edun. Myötätuntoisesti hyväksymällä nämä vajavaisuudet avautuu oma elämä todellisempana.", "Filosofi Samuel Salovuori"],

    ["On helpompaa siirtää keskustelu siihen, mitä muut eivät tee tai tekevät huonosti, kuin ajatella, mitä minä voin tehdä tilanteen ratkaisemiseksi. Mutta silloin ei synny tulosta.", "Johtajuuskouluttaja Santi Martínez"],

    ["Ihminen, joka pelkää kärsimystä, kärsii jo siitä mitä pelkää.", "Filosofi Michel de Montaigne"],

    ["Kun kompuroit, on houkuttelevaa heittää pyyhe kehään ja hyväksyä tappio. Aina löytyy houkutteleva selitys, joka innokkaasti odottaa sinun valitsevan helpon pakoreitin. Kaikkein menestyneimmät ihmiset kuitenkin työntyvät eteenpäin.", "Josh Linkner"],

    ["Meidän täytyy ottaa itse vastuu omasta onnellisuudestamme ja menestyksestämme. Ystäväsi ja perheesi voivat tukea sinua, kun se on tarpeen. Ole kiitollinen siitä. Toivota heidän ponnistelunsa tervetulleiksi, mutta suuntaa aina eteenpäin myös omillasi. Mitä enemmän ponnistelet, sitä enemmän luot uusia mahdollisuuksia.", "Nick Vujicic"],

    ["On tylsää todeta, että edes sinnikkyys ei takaa menestystä. Kaikista ei tule huippu-urheilijoita, muusikoita tai näyttelijöitä. Sinnikkyys antaa kuitenkin erinomaisen mahdollisuuden todellisiin onnistumisiin.", "Ville Saarikalle"],

    ["Voisinpa sanoa, että se oli helppoa. Ei se ollut. Mutta ei se ollut niin vaikeaakaan. Ilman selvää tarkoitusta mikä tahansa elämässä on vaikeaa.", "Robert Kiyosaki"],

    ["Sinnikkyys on hieltä tuoksuva tylsä menestyksen eliksiiri.", "Ville Saarikalle"],

    ["Se, että saat ihmiset pitämään itsestäsi, on vain sen asian kääntöpuoli, että sinä pidät heistä.", "Norman Vincent Peale"],

    ["Sisäisesti motivoituneita ihmisiä yhdistää yksi ominaispiirre ylitse muiden: he eivät syyttele olosuhteita vaan pyrkivät toteuttamaan itseään tilanteesta riippumatta.", "Katriina Moksi"],

    ["Vain ne, jotka ovat valmiit menemään liian pitkälle, saavat tietää, kuinka pitkälle he voivat päästä.", "T. S. Eliot"],

    ["Mitä oppiminen tarkoittaa? Sitäkö että kerää tietoa, vai sitäkö että muuttaa omaa elämäänsä?", "Paulo Coelho"],

    ["Ihmisen syvin tarve on tulla nähdyksi, kohdatuksi ja kuulluksi.", "Tommy Hellsten"],

    ["Ei voi olla ihminen, ellei ole ketään, jolle olla ihminen.", "Tommy Hellsten"],

    ["Mitä enemmän alaisesi onnistuvat ja menestyvät, sitä enemmän se kertoo sinusta johtajana.", "Riitta Huhtala"],

    ["Kun johtajana uskallat heittäytyä ja annat myös joskus epävarmuutesi näkyä, saat paljon itsekin onnistumisen kokemuksia. Samalla ehkä kevennät taakkaa, joka syntyy siitä myytistä, että johtaja on aina oikeassa.", "Riitta Huhtala"],

    ["Ei ole oikeudenmukaista, eikä viisasta pakottaa tunteita pois – tai toisaalta pakottaa tunteita esiin. Erityisherkkä pelkää ja itkee helposti, mutta viilipytty kärsii myös, jos hänen tulisi kokea ja ilmaista iloaan, suruaan tai rakkauttaan spontaanisti, voimakkaammin ja näkyvästi.", "Isa Merikallio"],

    ["Meillä jokaisella on sisäinen unelma, joka voisi toteutua, jos meillä vain olisi rohkeutta myöntää mikä se on. Sen myöntäminen on usein se vaikein asia.", "Julia Cameron"],

    ["Kaikkien huomisten kaikki kukat ovat tämän päivän siemenissä.", "Intialainen sanonta"],

    ["Aloita tekemällä välttämätön, sitten tee se mikä on mahdollista, ja pian teet mahdottomia.", "Fransiskus Assisilainen"],

    ["Johtaja, joka ei itse johdonmukaisesti aina ja kaikkialla harjoita muilta vaatimaansa totuudellisuuden hyvettä, on organisaation suurin riskitekijä.", "Jason Lepojärvi"],

    ["Ei ole mitään hävettävää siinä, että myöntää olleensa väärässä. Siinähän tulee vain sanoneeksi, että on tänään viisaampi kuin edellisenä päivänä.", "Jonathan Swift"],

    ["Totuus on, ettei ole lainkaan ylevää olla parempi kuin joku toinen. Ainut, todellinen ylevyys on olla aiempaa itseään parempi.", "Whitney Young"],

    ["Ongelma on suunnan puute, ei ajan puute. Meillä jokaisella on -tuntinen vuorokausi.", "Zig Ziglar"],

    ["Elämä tarjoaa vain elämän. Ihminen itse tarjoaa itsellensä kaiken muun.", "Liisa Sillanpää-Aho"],

    ["Mieli on niin kuin muukin pelto; ellei se tuota hyötykasveja, se puskee rikkaruohoa.", "Markku Envall"],

    ["Kun varallisuus katoaa, mitään ei katoa. Kun terveys katoaa, jotain katoaa. Kun luonne katoaa, kaikki katoaa.", "Billy Graham"],

    ["Mikään ei pelota ihmistä yhtä paljon kuin oppia tajuamaan, kuinka paljon pystyy tekemään ja kuinka suureksi tulemaan.", "Filosofi Søren Kierkegaard"],

    ["Meiltä ei koskaan puutu rahaa, kun on kyse mieliteoista. Ainoastaan hyödyllisen ja välttämättömän hinnasta me marisemme.", "Kirjailija Honoré de Balzac ( – )"],

    ["Oleminen on sitä, että ollaan kokonaisena ihmisenä läsnä siinä mitä tehdään. Silloin se, mitä tehdään, saa sävynsä siitä mitä ihminen on. Tämä ja juuri tämä on luovuutta. Luovuudesta seuraa työnilo ja jopa tuo paljon puhuttu tehokkuus. Mutta sellainen tehokkuus ei synny ihmisen kustannuksella vaan innovatiivisuudesta, luovuudesta ja työnilosta.", "Terapeutti Tommy Hellsten"],

    ["Matka kukoistukseen jää kesken, jos tekee hyvää vain hyötyäkseen.", "Ville Saarikalle"],

    ["Oliko se surkea päivä? Vai oliko se surkea viisiminuuttinen, jota märehdit koko päivän?"],

    ["Vasta silloin, kun sallit muiden mokata kunnolla, olet antanut heille tarpeeksi. Ja erityisesti sinun on sallittava se, että he saattavat suoriutua upeasti – omilla ideoillaan.", "Rob Bell"],

    ["Vastoinkäymiset valmistavat usein tavallista ihmistä epätavallista kohtaloa varten.", "C. S. Lewis"],

    ["Varo kiireisen elämän kuivuutta.", "Sokrates"],

    ["Onni on osinkoa hiestä. Mitä enemmän hikoilet, sitä onnekkaammaksi tulet.", "Ray Kroc"],

    ["Suurinta kärsimystä meille eivät useinkaan tuota vaikeudet ja vastoinkäymiset vaan se, mitä me ajattelemme vaikeuksistamme.", "Terapeutti Tommy Hellsten"],

    ["Se, että on kiitollinen ja arvostaa elämänsä ihmisiä ja asioita, itse asiassa houkuttaa lisää näitä arvostettuja asioita elämään.", "Northrup Christiane"],

    ["Voit saavuttaa asioita helpommin kun tartut useisiin pieniin mahdollisuuksiin – sen sijaan että odottaisit vain sitä yhtä ja isoa.", "Hugh Allen"],

    ["Kun vanhenet, huomaat että sinulla on kaksi kättä, toinen itsesi auttamiseen ja toinen muiden auttamiseen.", "Audrey Hepburn"],

    ["Kuka kirjaisi tavoitteisiinsa epäonnistumisia ja vaikeuksia? Ne ovat kuitenkin auttaneet eniten kasvamaan ihmisenä ja oppimaan.", "Isa Merikallio"],

    ["Nöyryys on kaikkien hyveiden äiti. Nöyrät menestyvät, koska he hyväksyvät luonnonlait sekä yleiset periaatteet, ja elävät niiden mukaan.", "Stephen R. Covey"],

    ["Olet juuri niin suuri kuin asiat, joiden annat häiritä itseäsi.", "Jerry Bundsen"],

    ["Ihminen voi epäonnistua monta kertaa, mutta epäonnistuja hänestä tulee vasta sitten, kun hän alkaa syytellä muita.", "John Burroughs"],

    ["Se mitä saamme elämästä irti ei määräydy haluamistamme hyvistä tunteista, vaan niistä vaikeista tunteista, jotka olemme valmiita ja kykeneviä kestämään päästäksemme niihin hyviin tunteisiin.", "Mark Manson"],

    ["Uskon, että paras tapa hallita omaa kohtaloani on palvella muita. Jos nostan muita ylemmäs, enkö nouse myös itse?", "Jarod Kintz"],

    ["Onnistuminen ei koskaan ole suuri askel, joka otetaan tulevaisuudessa. Se on pieni askel, joka otetaan nyt.", "Jonatan Martensson"],

    ["Valittaminen hyödyttää lähinnä mediaa, joka tienaa euroja myymällä sinun valituksesi viihteeksi muille.", "Mikael Jungner"],

    ["Tietä käyden tien on vanki, vapaa on vain umpihanki.", "Aaro Hellaakoski"],

    ["Kaikki loput ovat myös uusia alkuja. Emme vain tiedä sitä sillä hetkellä.", "Mitch Albom"],

    ["Jos sinulla olisi ystävä, joka puhuisi sinulle samalla tavalla kuin sinä joskus puhut itsellesi, pyörisitkö pitkään sellaisen tyypin kanssa?", "Rob Bremer"],

    ["Todellista on ainoastaan sellainen arvokkuus, jota toisen välinpitämättömyys ei vähennä.", "Dag Hammarskjöld"],

    ["Kun kerrankin on kokenut ilon maksaa paha hyvällä, ei enää laske käsistään tilaisuutta saada tätä iloa.", "Leo Tolstoi"],

    ["Ei ole järkeä auttaa ystävää laittamalla kolikoita hänen taskuihinsa, silloin kun hänen taskunsa ovat täynnä reikiä.", "Douglas Hurd"],

    ["Ellei ongelmaa pysty ratkaisemaan, paras vaihtoehto on löytää siitä huvittavia puolia.", "Frank A. Clark"],

    ["Totuus on tarua ihmeellisempää, mutta se johtuu siitä, että tarun on pysyttävä mahdollisuuksien rajoissa; totuuden ei.", "Mark Twain"],

    ["Pahan vastustaminen ei tee sinusta hyvää.", "Ernest Hemingway"],

    ["Ennen kuin reagoit, mieti. Ennen kuin kulutat, ansaitse. Ennen kuin kritisoit, odota. Ennen kuin luovutat, yritä.", "Ernest Hemingway"],

    ["Elämä ei ole oman itsensä löytämistä. Elämä on oman itsensä luomista.", "Kirjailija George Bernard Shaw"]

];