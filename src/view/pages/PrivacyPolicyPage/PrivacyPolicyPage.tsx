import React from 'react'
import { useTranslation } from 'react-i18next'
import { Description, Header } from '../LandingPage/style'

export const PrivacyPolicyPage = () => {
  const { t } = useTranslation()
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 whitespace-pre-line	">
      <div className="container d-flex flex-column align-items-center justify-content-md-between w-100 h-100 mt-2 mb-5">
        <Header bold>{t('Privacy.title')}</Header>
        <div className="flex flex-column flex-md-row justify-content-between w-100">
          <div className="entry-content">
            <p>
              <strong>
                Polityka Prywatności Zencast to dokument, w którym opisaliśmy w jaki sposób przetwarzamy informacje na
                Twój temat i jakie dane zbieramy w jakim celu. W razie pytań lub wątpliwości skontaktuj się z nami
                mailowo na adres:{' '}
              </strong>
              <a href="mailto:kontakt@zencast.app">
                <strong>kontakt@zencast.app</strong>
              </a>
            </p>

            <h5 id="1-informacje-ogolne">1. Informacje ogólne</h5>

            <p>
              Polityka Prywatności Zencast dotyczy naszego serwisu www, funkcjonującego pod adresem url:{' '}
              <strong>www.zencast.app </strong>oraz aplikacji mobilnej <strong>Zencast </strong>dostępnej w AppStore i
              Google Play, której właścicielem i twórcą jest Administrator.Operatorem serwisu oraz Administratorem
              danych osobowych jest: Konrad Hopek Development siedzibą przy ul. Świtezianki 2 w Krakowie, kod pocztowy:
              31-563
              <br />
              <br />
              Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w
              serwisie.
              <br />
              <br />
              Serwis wykorzystuje dane osobowe w celach realizacji zamówionych usług.
              <br />
              <br />
              Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu poprzez dobrowolnie
              wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora. A także poprzez
              zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).
            </p>

            <h5 id="2-wybrane-metody-ochrony-danych-przez-nas-stosowane">
              2. Wybrane metody ochrony danych przez nas stosowane
            </h5>

            <p>
              Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL).
              Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
              użytkownika i mogą być odczytane jedynie na docelowym serwerze.
            </p>

            <p>Operator okresowo zmienia swoje hasła administracyjne.</p>

            <p>
              Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego
              przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje
              komponentów programistycznych.
            </p>

            <p>
              Cenimy sobie prywatność i dbamy o swoje własne dane oraz serwisy. Dlatego zapewniamy, że dokładamy
              wszelkich starań, aby nasze serwisy i usługi były bezpieczne, zarówno jak dane użytkowników, które w nich
              przechowujemy.&nbsp;
            </p>

            <h5 id="3-hosting">3. Hosting&nbsp;</h5>

            <p>Serwis www jest hostowany (technicznie utrzymywany) na serwerach operatora Heroku.&nbsp;</p>

            <h5 id="4-twoje-prawa-i-dodatkowe-informacje-o-sposobie-wykorzystania-danych">
              4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
            </h5>

            <p>
              W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli
              będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
              Administratorze. Dotyczy to przede wszystkim i póki co wyłącznie upoważnionym pracownikom i
              współpracownikom, którzy korzystają z danych w celu realizacji celu działania strony, czy aplikacji.
            </p>

            <p>
              Dane osobowe przetwarzane są przez Administratora nie dłużej, niż jest to konieczne do wykonania
              związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W
              odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
            </p>

            <p>Przysługuje Ci prawo żądania od Administratora:</p>

            <ul>
              <li>dostępu do danych osobowych Ciebie dotyczących,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>oraz przenoszenia danych.</li>
            </ul>

            <p>
              Użytkownikowi przysługuje prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c)
              wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez
              Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku
              istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw
              i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.
            </p>

            <p>
              Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2,
              00-193 Warszawa.
            </p>

            <p>
              Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi serwisu i aplikacji oraz do
              świadczenia przez nas usług w postaci przede wszystkim udostępnienia Ci medytacji i innych funkcjonalności
              aplikacji. &nbsp;
            </p>

            <p>
              W stosunku do użytkownika mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu
              decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez
              Administratora marketingu bezpośredniego.
            </p>

            <p>
              Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych.
              Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.
            </p>

            <h5 id="5-informacje-w-formularzach-i-jakie-dane-zbieramy">
              5. Informacje w formularzach i jakie dane zbieramy
            </h5>

            <p>
              Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one
              podane. Na ten moment jednak zbieramy przede wszystkim dwie dane, czyli Twój login/Imię oraz adres email,
              który podajesz przy rejestracji konta w aplikacji.
              <br />
              <br />
              Zbieramy tylko i wyłącznie takie dane, które podasz nam wchodząc z nami w jakąś interakcję, najczęściej
              poprzez subskrypcję aplikacji, płatności, czy zapisanie się do naszego newslettera. Najczęściej jest to
              Twoje imię lub nick oraz adres email.
              <br />
              Ale także możemy przetwarzać dane, które dobrowolnie udostępnisz nam poprzez kontakt z nami np. przez
              nasze portale społecznościowe, w tym momencie głównie Instagram (np. imię i nazwisko, nick, treść
              komentarza, Twoje reakcje na stronie lub treści na niej zamieszczane – polubienia, obserwowanie i
              powiadomienia).
              <br />
              Lub jeśli kontaktujesz się z nami mailowo poprzez nasz serwis www.&nbsp;
            </p>

            <p>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</p>

            <p>
              Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z
              adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się
              wewnątrz adresu url strony zawierającej formularz.
            </p>

            <p>
              Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu
              dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp.
              Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.
            </p>

            <h5 id="6-logi-administratora">6. Logi Administratora</h5>

            <p>
              Informacje o zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu
              administrowania serwisem.
            </p>

            <h5 id="7-istotne-techniki-marketingowe">7. Istotne techniki marketingowe</h5>

            <p>
              Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w
              USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane
              informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie
              informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać
              i edytować informacje wynikające z plików cookies przy pomocy narzędzia:
              https://www.google.com/ads/preferences/
            </p>

            <h5 id="8-informacja-o-plikach-cookies">8. Informacja o plikach cookies</h5>

            <p>Serwis korzysta z plików cookies.</p>

            <p>
              Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które
              przechowywane są w urządzeniu końcowym użytkownika serwisu i przeznaczone są do korzystania ze stron
              internetowych serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
              przechowywania ich na urządzeniu końcowym oraz unikalny numer.
              <br />
              <br />
              Podmiotem zamieszczającym na urządzeniu końcowym użytkownika serwisu pliki cookies oraz uzyskującym do
              nich dostęp jest operator Serwisu.
              <br />
              <br />
              Pliki cookies wykorzystywane są w celach utrzymania sesji użytkownika serwisu (po zalogowaniu), dzięki
              której użytkownik nie musi na każdej podstronie serwisu ponownie wpisywać loginu i hasła, a także
              realizacji celów określonych powyżej w części “Istotne techniki marketingowe”;
            </p>

            <p>
              W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz
              „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi. Przechowywane są w urządzeniu
              końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania
              (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika
              przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
            </p>

            <p>
              Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie
              dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą
              dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies.
              Możliwe jest także automatyczne blokowanie plików cookies. Szczegółowe informacje na ten temat zawiera
              pomoc lub dokumentacja przeglądarki internetowej.
            </p>

            <p>
              Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach
              internetowych Serwisu.
            </p>

            <p>
              Pliki cookies zamieszczane w urządzeniu końcowym użytkownika serwisu wykorzystywane mogą być również przez
              współpracujące z operatorem serwisu podmioty. W szczególności dotyczy to firm: Google (Google Inc. z
              siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA).
            </p>

            <h5 id="9-zarzadzanie-plikami-cookies-jak-w-praktyce-wyrazac-i-cofac-zgode">
              9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
            </h5>

            <p>
              Jeśli nie chcesz otrzymywać plików cookies, możesz zmienić ustawienia przeglądarki. Zastrzegamy, że
              wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania
              preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron
              www.
            </p>

            <p>
              W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i
              postępuj zgodnie z instrukcjami:
            </p>

            <p>
              <a href="https://support.microsoft.com/pl-pl/help/10607/microsoft-edge-view-delete-browser-history">
                Edge
              </a>
              <br />
              <a href="https://support.microsoft.com/pl-pl/help/278835/how-to-delete-cookie-files-in-internet-explorer">
                Internet Explorer
              </a>
              <br />
              <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Chrome</a>
              <br />
              <a href="http://support.apple.com/kb/PH5042">Safari</a>
              <br />
              <a href="http://support.mozilla.org/pl/kb/W%25C5%2582%25C4%2585czanie%2520i%2520wy%25C5%2582%25C4%2585czanie%2520obs%25C5%2582ugi%2520ciasteczek">
                Firefox
              </a>
              <br />
              <a href="http://help.opera.com/Windows/12.10/pl/cookies.html">Opera</a>
              <br />
              <br />
              Urządzenia mobilne:
              <br />
              <a href="http://support.google.com/chrome/bin/answer.py?hl=pl&amp;answer=95647">Android</a>
              <br />
              <a href="http://support.apple.com/kb/HT1677?viewlocale=pl_PL">Safari (iOS)</a>
              <br />
              <a href="http://www.windowsphone.com/pl-pl/how-to/wp7/web/changing-privacy-and-other-browser-settings">
                Windows Phone
              </a>
            </p>

            <h5 id="10-kontakt">10. Kontakt</h5>

            <p>
              W razie pytań bądź wątpliwości odnośnie polityki prywatności, skontaktuj się z nami:{' '}
              <a href="mailto:kontakt@zencast.app">kontakt@zencast.app</a>
            </p>

            <p>
              Zachęcamy także do zapoznania się z regulaminem aplikacji Medystacja App. Znajdziesz go{' '}
              <a href="https://www.zencast.app/#/statue">tutaj</a>.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
